import { useState } from "react";
import { pointById, symptomsForPoint } from "../data";
import { COORDS } from "../data/coords";
import { useAppStore } from "../store/appStore";
import { useT, L } from "../i18n";
import BodyFigure from "./BodyFigure";
import CopyLinkButton from "./CopyLinkButton";
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
          <div className="point-card-actions">
            <button
              className={`btn btn--ghost btn--sm fav-btn ${fav ? "fav-on" : ""}`}
              onClick={() => toggleFavorite(pointId)}
            >
              {fav ? t("fav_added") : t("fav_add")}
            </button>
            <CopyLinkButton hash={`#p/${pointId}`} />
            <AddToRoutine pointId={pointId} />
          </div>
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

/** "＋ 加入方案" — pick which named routine gets this point (or create one). */
function AddToRoutine({ pointId }: { pointId: string }) {
  const t = useT();
  const routines = useAppStore((s) => s.routines);
  const addRoutine = useAppStore((s) => s.addRoutine);
  const addPointToRoutine = useAppStore((s) => s.addPointToRoutine);
  const [open, setOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");
  const [addedTo, setAddedTo] = useState<string | null>(null);

  const create = () => {
    const name = newName.trim();
    if (!name) return;
    addRoutine(name, [pointId]);
    setAddedTo(name);
    setCreating(false);
    setNewName("");
  };

  return (
    <div className="add-routine">
      <button
        className="btn btn--ghost btn--sm"
        onClick={() => setOpen((o) => !o)}
      >
        {t("add_to_routine")}
      </button>
      {open && (
        <div className="add-routine-panel">
          {routines.length === 0 && !creating && (
            <p className="muted-sm add-routine-hint">{t("no_routine_yet_hint")}</p>
          )}
          {routines.map((r) => {
            const inIt = r.pointIds.includes(pointId);
            return (
              <button
                key={r.id}
                className="add-routine-option"
                disabled={inIt}
                onClick={() => {
                  addPointToRoutine(r.id, pointId);
                  setAddedTo(r.name);
                }}
              >
                {inIt
                  ? t("already_in_routine", { name: r.name })
                  : `📋 ${r.name}`}
              </button>
            );
          })}
          {creating ? (
            <div className="routine-new-form">
              <input
                className="routine-name-input"
                placeholder={t("routine_name_ph")}
                value={newName}
                maxLength={30}
                autoFocus
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && create()}
              />
              <button
                className="btn btn--primary btn--sm"
                disabled={!newName.trim()}
                onClick={create}
              >
                {t("routine_create")}
              </button>
            </div>
          ) : (
            <button
              className="add-routine-option"
              onClick={() => setCreating(true)}
            >
              {t("new_routine_with_point")}
            </button>
          )}
          {addedTo && (
            <div className="backup-msg add-routine-msg">
              {t("added_to_routine", { name: addedTo })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
