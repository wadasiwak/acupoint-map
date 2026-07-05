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
import BodyFigure, { type FigurePoint } from "./components/BodyFigure";
import PointCard from "./components/PointCard";

type Screen =
  | { kind: "home" }
  | { kind: "symptom"; id: string }
  | { kind: "index" };

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
  const favorites = useAppStore((s) => s.favorites);
  const disclaimerSeen = useAppStore((s) => s.disclaimerSeen);
  const acceptDisclaimer = useAppStore((s) => s.acceptDisclaimer);

  const [screen, setScreen] = useState<Screen>({ kind: "home" });
  const [openPointId, setOpenPointId] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const calibrate = window.location.hash === "#calibrate";
  if (calibrate) return <CalibratePage />;

  const goSymptom = (id: string) => {
    setOpenPointId(null);
    setScreen({ kind: "symptom", id });
    window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      <header className="topbar">
        <button
          className="topbar-title"
          onClick={() => setScreen({ kind: "home" })}
        >
          {t("app_title")}
        </button>
        <div className="topbar-actions">
          <button
            className={`btn btn--sm ${screen.kind === "index" ? "btn--primary" : "btn--ghost"}`}
            onClick={() => setScreen({ kind: "index" })}
          >
            {t("point_index")}
          </button>
          <div className="lang-toggle">
            <button
              className={lang === "zh" ? "lang-on" : ""}
              onClick={() => setLang("zh")}
            >
              繁中
            </button>
            <button
              className={lang === "en" ? "lang-on" : ""}
              onClick={() => setLang("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="main">
        {screen.kind === "home" && (
          <HomeScreen query={query} setQuery={setQuery} onSymptom={goSymptom} onPoint={setOpenPointId} />
        )}
        {screen.kind === "symptom" && (
          <SymptomScreen
            symptomId={screen.id}
            onBack={() => setScreen({ kind: "home" })}
            onPoint={setOpenPointId}
          />
        )}
        {screen.kind === "index" && (
          <IndexScreen favorites={favorites} onPoint={setOpenPointId} />
        )}
      </main>

      <footer className="footer">{t("footer_note")}</footer>

      {openPointId && (
        <PointCard
          pointId={openPointId}
          onClose={() => setOpenPointId(null)}
          onSymptomClick={goSymptom}
        />
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

function HomeScreen({
  query,
  setQuery,
  onSymptom,
  onPoint,
}: {
  query: string;
  setQuery: (q: string) => void;
  onSymptom: (id: string) => void;
  onPoint: (id: string) => void;
}) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);

  const q = query.trim().toLowerCase();
  const matchedSymptoms = q
    ? SYMPTOMS.filter(
        (s) =>
          s.name.zh.includes(q) ||
          s.name.en.toLowerCase().includes(q) ||
          s.blurb.zh.includes(q),
      )
    : SYMPTOMS;
  const matchedPoints = q
    ? ACUPOINTS.filter(
        (p) =>
          p.name.zh.includes(q) ||
          p.name.en.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.id.includes(q),
      )
    : [];

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

      <h2 className="section-head">{t("symptoms_head")}</h2>
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
                  className="symptom-tile"
                  onClick={() => onSymptom(s.id)}
                >
                  <span className="symptom-emoji">{s.emoji}</span>
                  <span className="symptom-name">{L(s.name, lang)}</span>
                </button>
              ))}
            </div>
          </section>
        );
      })}
    </>
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

  const figures = useMemo(() => {
    if (!symptom) return [];
    const byView = new Map<"front" | "back", FigurePoint[]>();
    symptom.acupointIds.forEach((pid, i) => {
      const c = COORDS[pid];
      if (!c) return;
      const list = byView.get(c.overview.view) ?? [];
      list.push({
        id: pid,
        x: c.overview.x,
        y: c.overview.y,
        active: true,
        order: i + 1,
      });
      byView.set(c.overview.view, list);
    });
    return [...byView.entries()];
  }, [symptom]);

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
          <h3 className="section-head">
            {t("points_for")}
            <span className="muted-sm"> · {t("press_order_hint")}</span>
          </h3>
          {symptom.acupointIds.map((pid, i) => {
            const p = pointById(pid);
            if (!p) return null;
            const pregnancy = p.cautions?.zh.includes("🤰");
            return (
              <button
                key={pid}
                className="point-row"
                onClick={() => onPoint(pid)}
              >
                <span className="point-order">{i + 1}</span>
                <span className="point-row-main">
                  <span className="point-row-name">
                    {L(p.name, lang)} <small>{p.code}</small>
                    {pregnancy && <span title={t("pregnancy_flag")}> 🤰</span>}
                  </span>
                  <span className="point-row-sub">{L(p.goodFor, lang)}</span>
                </span>
                <span className="point-row-go">→</span>
              </button>
            );
          })}

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
      </div>
    </>
  );
}

function IndexScreen({
  favorites,
  onPoint,
}: {
  favorites: string[];
  onPoint: (id: string) => void;
}) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const favSet = new Set(favorites);
  const favPoints = ACUPOINTS.filter((p) => favSet.has(p.id));

  return (
    <>
      <h2 className="section-head">{t("point_index")}</h2>
      {favPoints.length > 0 && (
        <section className="cat-section">
          <h3 className="cat-head">★ {t("favorites")}</h3>
          <div className="chip-row">
            {favPoints.map((p) => (
              <button key={p.id} className="chip chip--point" onClick={() => onPoint(p.id)}>
                {L(p.name, lang)} <small>{p.code}</small>
              </button>
            ))}
          </div>
        </section>
      )}
      {REGION_ORDER.map((region) => {
        const items = ACUPOINTS.filter((p) => p.region === region);
        if (!items.length) return null;
        return (
          <section key={region} className="cat-section">
            <h3 className="cat-head">
              {t(`region_${region.replace("-", "_")}`)}
            </h3>
            <div className="chip-row">
              {items.map((p) => (
                <button
                  key={p.id}
                  className="chip chip--point"
                  onClick={() => onPoint(p.id)}
                >
                  {favSet.has(p.id) && "★ "}
                  {L(p.name, lang)} <small>{p.code}</small>
                </button>
              ))}
            </div>
          </section>
        );
      })}
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
            <div className="figure-label">{view} ({pts.length})</div>
            <BodyFigure view={view} points={pts} showLabels />
          </div>
        );
      })}
    </div>
  );
}
