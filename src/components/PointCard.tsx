import { pointById, symptomsForPoint } from "../data";
import { COORDS } from "../data/coords";
import { useAppStore } from "../store/appStore";
import { useT, L } from "../i18n";
import BodyFigure from "./BodyFigure";
import PressTimer from "./PressTimer";

interface Props {
  pointId: string;
  onClose: () => void;
  onSymptomClick?: (symptomId: string) => void;
}

/** Detail card for one acupoint: location sketch + how-to + cautions. */
export default function PointCard({ pointId, onClose, onSymptomClick }: Props) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const favorites = useAppStore((s) => s.favorites);
  const toggleFavorite = useAppStore((s) => s.toggleFavorite);

  const point = pointById(pointId);
  const coords = COORDS[pointId];
  if (!point || !coords) return null;

  const fav = favorites.includes(pointId);
  const { detail } = coords;
  // Full-body views get cropped around the point; close-up views render whole.
  const isFullBody = detail.view === "front" || detail.view === "back";
  const related = symptomsForPoint(pointId);
  const pregnancyFlag = point.cautions?.zh.includes("🤰");

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal point-card" onClick={(e) => e.stopPropagation()}>
        <button className="card-close" onClick={onClose} aria-label={t("close")}>
          ✕
        </button>

        <div className="point-card-head">
          <div>
            <h2>
              {L(point.name, lang)}
              <span className="point-code">{point.code}</span>
            </h2>
            <div className="point-meta">
              {t("meridian")}:{L(point.meridian, lang)}
            </div>
          </div>
          <button
            className={`btn btn--ghost btn--sm ${fav ? "fav-on" : ""}`}
            onClick={() => toggleFavorite(pointId)}
          >
            {fav ? t("fav_added") : t("fav_add")}
          </button>
        </div>

        {pregnancyFlag && (
          <div className="pregnancy-banner">{t("pregnancy_flag")}</div>
        )}

        <div className="point-sketch">
          <BodyFigure
            view={detail.view}
            points={[{ id: pointId, x: detail.x, y: detail.y, active: true }]}
            focus={
              isFullBody ? { x: detail.x, y: detail.y, radius: 52 } : undefined
            }
          />
          <div className="sketch-hint">{t("zoom_hint")}</div>
        </div>

        <div className="point-section">
          <h3>📍 {t("how_to_find")}</h3>
          <p>{L(point.howToFind, lang)}</p>
        </div>
        <div className="point-section">
          <h3>👆 {t("how_to_press")}</h3>
          <p>{L(point.howToPress, lang)}</p>
          <PressTimer />
        </div>
        <div className="point-section">
          <h3>✨ {t("good_for")}</h3>
          <p>{L(point.goodFor, lang)}</p>
        </div>
        {point.cautions && (
          <div className="point-section point-section--caution">
            <h3>⚠️ {t("cautions")}</h3>
            <p>{L(point.cautions, lang)}</p>
          </div>
        )}

        {related.length > 0 && (
          <div className="point-section">
            <h3>🔗 {t("related_symptoms")}</h3>
            <div className="chip-row">
              {related.map((s) => (
                <button
                  key={s.id}
                  className="chip"
                  onClick={() => onSymptomClick?.(s.id)}
                >
                  {s.emoji} {L(s.name, lang)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
