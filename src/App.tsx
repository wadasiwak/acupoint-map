import { useMemo, useState } from "react";
import {
  ACUPOINTS,
  SYMPTOMS,
  CATEGORY_ORDER,
  pointById,
  symptomById,
} from "./data";
import { COORDS } from "./data/coords";
import { BODY_VIEWS } from "./lib/bodyViews";
import type { ViewId, BodyRegion } from "./data/types";
import { useAppStore } from "./store/appStore";
import { useT, L } from "./i18n";
import { todayKey } from "./lib/rng";
import { mulberry32, hashSeed } from "./lib/rng";
import { playClick } from "./lib/sound";
import BodyFigure, { type FigurePoint } from "./components/BodyFigure";
import PointCard from "./components/PointCard";
import QuizScreen from "./components/QuizScreen";
import RoutineRunner from "./components/RoutineRunner";

type Screen =
  | { kind: "home" }
  | { kind: "symptom"; id: string }
  | { kind: "combined"; ids: string[] }
  | { kind: "region"; region: BodyRegion }
  | { kind: "index" }
  | { kind: "quiz" };

const REGION_ORDER: BodyRegion[] = [
  "head",
  "neck-shoulder",
  "torso",
  "arm",
  "leg",
];

export default function App() {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const setLang = useAppStore((s) => s.setLang);
  const soundOn = useAppStore((s) => s.soundOn);
  const toggleSound = useAppStore((s) => s.toggleSound);
  const disclaimerSeen = useAppStore((s) => s.disclaimerSeen);
  const acceptDisclaimer = useAppStore((s) => s.acceptDisclaimer);

  const [screen, setScreen] = useState<Screen>({ kind: "home" });
  const [openPointId, setOpenPointId] = useState<string | null>(null);
  const [routineIds, setRoutineIds] = useState<string[] | null>(null);

  if (window.location.hash === "#calibrate") return <CalibratePage />;

  const go = (s: Screen) => {
    setOpenPointId(null);
    setScreen(s);
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <header className="topbar">
        <button className="topbar-title" onClick={() => go({ kind: "home" })}>
          {t("app_title")}
        </button>
        <div className="topbar-actions">
          <button
            className="icon-btn"
            onClick={toggleSound}
            title={soundOn ? "sound on" : "muted"}
          >
            {soundOn ? "🔊" : "🔇"}
          </button>
          <button
            className={`btn btn--sm ${screen.kind === "quiz" ? "btn--primary" : "btn--ghost"}`}
            onClick={() => go({ kind: "quiz" })}
          >
            {t("quiz_entry")}
          </button>
          <button
            className={`btn btn--sm ${screen.kind === "index" ? "btn--primary" : "btn--ghost"}`}
            onClick={() => go({ kind: "index" })}
          >
            {t("point_index")}
          </button>
          <div className="lang-toggle">
            <button className={lang === "zh" ? "lang-on" : ""} onClick={() => setLang("zh")}>
              繁中
            </button>
            <button className={lang === "en" ? "lang-on" : ""} onClick={() => setLang("en")}>
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        {screen.kind === "home" && (
          <HomeScreen
            onSymptom={(id) => go({ kind: "symptom", id })}
            onCombined={(ids) => go({ kind: "combined", ids })}
            onRegion={(region) => go({ kind: "region", region })}
            onPoint={setOpenPointId}
          />
        )}
        {screen.kind === "symptom" && (
          <SymptomScreen
            symptomId={screen.id}
            onBack={() => go({ kind: "home" })}
            onPoint={setOpenPointId}
          />
        )}
        {screen.kind === "combined" && (
          <CombinedScreen
            symptomIds={screen.ids}
            onBack={() => go({ kind: "home" })}
            onPoint={setOpenPointId}
          />
        )}
        {screen.kind === "region" && (
          <RegionScreen
            region={screen.region}
            onBack={() => go({ kind: "home" })}
            onPoint={setOpenPointId}
          />
        )}
        {screen.kind === "index" && (
          <IndexScreen onPoint={setOpenPointId} onRunRoutine={setRoutineIds} />
        )}
        {screen.kind === "quiz" && (
          <QuizScreen onQuit={() => go({ kind: "home" })} />
        )}
      </main>

      <footer className="footer">
        {t("footer_note")}
        <div className="footer-copyright">{t("footer_copyright")}</div>
      </footer>

      {openPointId && (
        <PointCard
          pointId={openPointId}
          onClose={() => setOpenPointId(null)}
          onSymptomClick={(id) => go({ kind: "symptom", id })}
        />
      )}
      {routineIds && (
        <RoutineRunner pointIds={routineIds} onClose={() => setRoutineIds(null)} />
      )}

      {!disclaimerSeen && (
        <div className="modal-backdrop">
          <div className="modal disclaimer-modal">
            <h2>⚕️ {t("disclaimer_title")}</h2>
            <p className="disclaimer-text">{t("disclaimer")}</p>
            <button className="btn btn--primary" onClick={acceptDisclaimer}>
              {t("disclaimer_ok")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/** Body region hotspots: front figure on the left, back on the right —
 * the neck/shoulder points live on the back, so its hotspot does too. */
const FRONT_HOTSPOTS: { region: BodyRegion; x: number; y: number; r: number }[] = [
  { region: "head", x: 120, y: 40, r: 30 },
  { region: "torso", x: 120, y: 170, r: 48 },
  { region: "arm", x: 200, y: 220, r: 42 },
  { region: "leg", x: 112, y: 400, r: 62 },
];
const BACK_HOTSPOTS: { region: BodyRegion; x: number; y: number; r: number }[] = [
  { region: "neck-shoulder", x: 120, y: 84, r: 30 },
];

function HomeScreen({
  onSymptom,
  onCombined,
  onRegion,
  onPoint,
}: {
  onSymptom: (id: string) => void;
  onCombined: (ids: string[]) => void;
  onRegion: (region: BodyRegion) => void;
  onPoint: (id: string) => void;
}) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const [query, setQuery] = useState("");
  const [multi, setMulti] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);

  // Deterministic "point of the day".
  const daily = useMemo(() => {
    const rnd = mulberry32(hashSeed(todayKey()));
    return ACUPOINTS[Math.floor(rnd() * ACUPOINTS.length)];
  }, []);

  const q = query.trim().toLowerCase();
  const matchedSymptoms = q
    ? SYMPTOMS.filter(
        (s) => s.name.zh.includes(q) || s.name.en.toLowerCase().includes(q) || s.blurb.zh.includes(q),
      )
    : SYMPTOMS;
  const matchedPoints = q
    ? ACUPOINTS.filter(
        (p) =>
          p.name.zh.includes(q) ||
          p.name.en.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q),
      )
    : [];

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <>
      <p className="subtitle">{t("subtitle")}</p>

      <input
        className="search"
        placeholder={t("search_placeholder")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {matchedPoints.length > 0 && (
        <div className="chip-row" style={{ marginBottom: 12 }}>
          {matchedPoints.slice(0, 8).map((p) => (
            <button key={p.id} className="chip chip--point" onClick={() => onPoint(p.id)}>
              {L(p.name, lang)} <small>{p.code}</small>
            </button>
          ))}
        </div>
      )}

      <div className="section-head-row">
        <h2 className="section-head">{t("symptoms_head")}</h2>
        <button
          className={`btn btn--sm ${multi ? "btn--primary" : "btn--ghost"}`}
          onClick={() => {
            setMulti((m) => !m);
            setPicked([]);
            playClick();
          }}
        >
          {multi ? t("multi_done") : t("multi_toggle")}
        </button>
      </div>
      {multi && <p className="muted">{t("multi_hint")}</p>}

      {CATEGORY_ORDER.map((cat) => {
        const items = matchedSymptoms.filter((s) => s.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} className="cat-section">
            <h3 className="cat-head">{t(`cat_${cat.replace("-", "_")}`)}</h3>
            <div className="symptom-grid">
              {items.map((s) => (
                <button
                  key={s.id}
                  className={`symptom-tile ${
                    multi && picked.includes(s.id) ? "symptom-tile--picked" : ""
                  }`}
                  onClick={() => (multi ? toggle(s.id) : onSymptom(s.id))}
                >
                  <span className="symptom-emoji">{s.emoji}</span>
                  <span className="symptom-name">{L(s.name, lang)}</span>
                  {multi && picked.includes(s.id) && (
                    <span className="symptom-check">✓</span>
                  )}
                </button>
              ))}
            </div>
          </section>
        );
      })}

      {/* Below the symptom list: tap-a-region figures (front + back). */}
      <section className="cat-section">
        <h3 className="cat-head">🧍 {t("tap_body_hint")}</h3>
        <div className="body-picker">
          <div className="body-picker-figure">
            <svg viewBox="0 0 240 500" className="home-body">
              {BODY_VIEWS.front.art}
              {FRONT_HOTSPOTS.map((h) => (
                <circle
                  key={h.region}
                  cx={h.x}
                  cy={h.y}
                  r={h.r}
                  className="region-hotspot"
                  onClick={() => onRegion(h.region)}
                >
                  <title>{t(`region_${h.region.replace("-", "_")}`)}</title>
                </circle>
              ))}
            </svg>
            <div className="figure-label">{L(BODY_VIEWS.front.label, lang)}</div>
          </div>
          <div className="body-picker-figure">
            <svg viewBox="0 0 240 500" className="home-body">
              {BODY_VIEWS.back.art}
              {BACK_HOTSPOTS.map((h) => (
                <circle
                  key={h.region}
                  cx={h.x}
                  cy={h.y}
                  r={h.r}
                  className="region-hotspot"
                  onClick={() => onRegion(h.region)}
                >
                  <title>{t(`region_${h.region.replace("-", "_")}`)}</title>
                </circle>
              ))}
            </svg>
            <div className="figure-label">{L(BODY_VIEWS.back.label, lang)}</div>
          </div>
        </div>
      </section>

      {/* Point of the day — quiet card at the bottom. */}
      <button className="daily-card" onClick={() => onPoint(daily.id)}>
        <div className="daily-badge">📅 {t("daily_point")}</div>
        <div className="daily-body">
          <span className="daily-name">
            {L(daily.name, lang)} <small>{daily.code}</small>
          </span>
          <span className="daily-good">{L(daily.goodFor, lang)}</span>
        </div>
        <span className="daily-go">{t("learn_more")}</span>
      </button>

      {multi && picked.length >= 2 && (
        <button className="floating-cta" onClick={() => onCombined(picked)}>
          {t("multi_view", { n: picked.length })}
        </button>
      )}
    </>
  );
}

/** Reusable: figures with glowing dots + an ordered point list. */
function PointResults({
  pointIds,
  order,
  onPoint,
  coverage,
}: {
  pointIds: string[];
  order: boolean;
  onPoint: (id: string) => void;
  coverage?: Map<string, number>;
}) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);

  const figures = useMemo(() => {
    const byView = new Map<"front" | "back", FigurePoint[]>();
    pointIds.forEach((pid, i) => {
      const c = COORDS[pid];
      if (!c) return;
      const list = byView.get(c.overview.view) ?? [];
      list.push({
        id: pid,
        x: c.overview.x,
        y: c.overview.y,
        active: true,
        order: order ? i + 1 : undefined,
      });
      byView.set(c.overview.view, list);
    });
    return [...byView.entries()];
  }, [pointIds, order]);

  return (
    <div className="symptom-layout">
      <div className="figures">
        {figures.map(([view, pts]) => (
          <div key={view} className="figure-wrap">
            <BodyFigure view={view} points={pts} onPointClick={onPoint} />
            <div className="figure-label">{L(BODY_VIEWS[view].label, lang)}</div>
          </div>
        ))}
      </div>
      <div className="point-list">
        {pointIds.map((pid, i) => {
          const p = pointById(pid);
          if (!p) return null;
          const pregnancy = p.cautions?.zh.includes("🤰");
          const covers = coverage?.get(pid);
          return (
            <button key={pid} className="point-row" onClick={() => onPoint(pid)}>
              {order && <span className="point-order">{i + 1}</span>}
              <span className="point-row-main">
                <span className="point-row-name">
                  {L(p.name, lang)} <small>{p.code}</small>
                  {pregnancy && <span title={t("pregnancy_flag")}> 🤰</span>}
                  {covers !== undefined && covers > 1 && (
                    <span className="covers-badge">{t("multi_covers", { n: covers })}</span>
                  )}
                </span>
                <span className="point-row-sub">{L(p.goodFor, lang)}</span>
              </span>
              <span className="point-row-go">→</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function SymptomScreen({
  symptomId,
  onBack,
  onPoint,
}: {
  symptomId: string;
  onBack: () => void;
  onPoint: (id: string) => void;
}) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const symptom = symptomById(symptomId);
  if (!symptom) return null;
  return (
    <>
      <button className="btn btn--ghost btn--sm" onClick={onBack}>
        {t("back_home")}
      </button>
      <div className="symptom-head">
        <span className="symptom-head-emoji">{symptom.emoji}</span>
        <div>
          <h2>{L(symptom.name, lang)}</h2>
          <p className="muted">{L(symptom.blurb, lang)}</p>
        </div>
      </div>
      <h3 className="section-head">
        {t("points_for")}
        <span className="muted-sm"> · {t("press_order_hint")}</span>
      </h3>
      <PointResults pointIds={symptom.acupointIds} order onPoint={onPoint} />
      <div className="info-boxes">
        {symptom.tips && (
          <div className="info-box">
            <h4>💡 {t("tips_head")}</h4>
            <p>{L(symptom.tips, lang)}</p>
          </div>
        )}
        {symptom.seekHelp && (
          <div className="info-box info-box--warn">
            <h4>🏥 {t("seek_help")}</h4>
            <p>{L(symptom.seekHelp, lang)}</p>
          </div>
        )}
      </div>
    </>
  );
}

function CombinedScreen({
  symptomIds,
  onBack,
  onPoint,
}: {
  symptomIds: string[];
  onBack: () => void;
  onPoint: (id: string) => void;
}) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const picked = symptomIds.map(symptomById).filter(Boolean) as NonNullable<
    ReturnType<typeof symptomById>
  >[];

  // Rank points by how many selected symptoms recommend them.
  const { ordered, coverage } = useMemo(() => {
    const count = new Map<string, number>();
    for (const s of picked)
      for (const pid of s.acupointIds) count.set(pid, (count.get(pid) ?? 0) + 1);
    const ordered = [...count.keys()].sort(
      (a, b) => (count.get(b) ?? 0) - (count.get(a) ?? 0),
    );
    return { ordered, coverage: count };
  }, [picked]);

  return (
    <>
      <button className="btn btn--ghost btn--sm" onClick={onBack}>
        {t("back_home")}
      </button>
      <h2 className="section-head" style={{ marginTop: 10 }}>
        {t("multi_result_head")}
      </h2>
      <div className="chip-row" style={{ marginBottom: 4 }}>
        <span className="muted-sm">{t("selected_symptoms")}:</span>
        {picked.map((s) => (
          <span key={s.id} className="chip chip--static">
            {s.emoji} {L(s.name, lang)}
          </span>
        ))}
      </div>
      <PointResults pointIds={ordered} order={false} coverage={coverage} onPoint={onPoint} />
    </>
  );
}

function RegionScreen({
  region,
  onBack,
  onPoint,
}: {
  region: BodyRegion;
  onBack: () => void;
  onPoint: (id: string) => void;
}) {
  const t = useT();
  const regionName = t(`region_${region.replace("-", "_")}`);
  const ids = ACUPOINTS.filter((p) => p.region === region).map((p) => p.id);
  return (
    <>
      <button className="btn btn--ghost btn--sm" onClick={onBack}>
        {t("back_home")}
      </button>
      <h2 className="section-head" style={{ marginTop: 10 }}>
        {t("region_points", { r: regionName })}
      </h2>
      <PointResults pointIds={ids} order={false} onPoint={onPoint} />
    </>
  );
}

function IndexScreen({
  onPoint,
  onRunRoutine,
}: {
  onPoint: (id: string) => void;
  onRunRoutine: (ids: string[]) => void;
}) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const favorites = useAppStore((s) => s.favorites);
  const [mode, setMode] = useState<"region" | "meridian">("region");
  const favSet = new Set(favorites);
  const favPoints = ACUPOINTS.filter((p) => favSet.has(p.id));

  const groups = useMemo(() => {
    if (mode === "region")
      return REGION_ORDER.map((r) => ({
        key: t(`region_${r.replace("-", "_")}`),
        points: ACUPOINTS.filter((p) => p.region === r),
      }));
    const byMeridian = new Map<string, typeof ACUPOINTS>();
    for (const p of ACUPOINTS) {
      const k = L(p.meridian, lang);
      byMeridian.set(k, [...(byMeridian.get(k) ?? []), p]);
    }
    return [...byMeridian.entries()]
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, points]) => ({ key, points }));
  }, [mode, lang, t]);

  return (
    <>
      <div className="section-head-row">
        <h2 className="section-head">{t("point_index")}</h2>
        <div className="lang-toggle">
          <button className={mode === "region" ? "lang-on" : ""} onClick={() => setMode("region")}>
            {t("by_region")}
          </button>
          <button className={mode === "meridian" ? "lang-on" : ""} onClick={() => setMode("meridian")}>
            {t("by_meridian")}
          </button>
        </div>
      </div>

      <section className="cat-section">
        <h3 className="cat-head">★ {t("favorites")}</h3>
        {favPoints.length ? (
          <>
            <div className="chip-row">
              {favPoints.map((p) => (
                <button key={p.id} className="chip chip--point" onClick={() => onPoint(p.id)}>
                  {L(p.name, lang)} <small>{p.code}</small>
                </button>
              ))}
            </div>
            <button
              className="btn btn--primary btn--sm"
              style={{ marginTop: 10 }}
              onClick={() => onRunRoutine(favorites)}
            >
              {t("run_routine")}
            </button>
          </>
        ) : (
          <p className="muted empty-note">{t("no_favorites")}</p>
        )}
      </section>

      {groups.map(({ key, points }) => (
        <section key={key} className="cat-section">
          <h3 className="cat-head">{key}</h3>
          <div className="chip-row">
            {points.map((p) => (
              <button key={p.id} className="chip chip--point" onClick={() => onPoint(p.id)}>
                {favSet.has(p.id) && "★ "}
                {L(p.name, lang)} <small>{p.code}</small>
              </button>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

/** Dev-only page (#calibrate): every view with all its points labeled. */
function CalibratePage() {
  const views = Object.keys(BODY_VIEWS) as ViewId[];
  return (
    <div className="calibrate">
      {views.map((view) => {
        const pts: FigurePoint[] = [];
        for (const [id, c] of Object.entries(COORDS)) {
          if (c.overview.view === view)
            pts.push({ id: `o-${id}`, x: c.overview.x, y: c.overview.y, active: true, label: id });
          if (c.detail.view === view && c.detail.view !== c.overview.view)
            pts.push({ id: `d-${id}`, x: c.detail.x, y: c.detail.y, active: true, label: id });
        }
        return (
          <div key={view} className="calibrate-cell">
            <div className="figure-label">
              {view} ({pts.length})
            </div>
            <BodyFigure view={view} points={pts} showLabels showGrid />
          </div>
        );
      })}
    </div>
  );
}
