import { useState } from "react";
import { pointById } from "../data";
import { COORDS } from "../data/coords";
import { useAppStore } from "../store/appStore";
import { useT, L } from "../i18n";
import BodyFigure from "./BodyFigure";
import PressTimer from "./PressTimer";

interface Props {
  pointIds: string[];
  onClose: () => void;
}

/** Steps through a list of points, each with an auto-started press timer. */
export default function RoutineRunner({ pointIds, onClose }: Props) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);

  const id = pointIds[Math.min(step, pointIds.length - 1)];
  const point = pointById(id);
  const coords = COORDS[id];
  const isFullBody =
    coords.detail.view === "front" || coords.detail.view === "back";

  const next = () => {
    if (step + 1 >= pointIds.length) setFinished(true);
    else setStep((s) => s + 1);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal routine-runner" onClick={(e) => e.stopPropagation()}>
        <button className="card-close" onClick={onClose}>
          ✕
        </button>
        {finished ? (
          <div className="routine-done">
            <div className="quiz-result-badge">💪</div>
            <h2>{t("routine_done")}</h2>
            <button className="btn btn--primary" onClick={onClose}>
              {t("routine_finish")}
            </button>
          </div>
        ) : (
          <>
            <div className="routine-step-label">
              {t("routine_step", { i: step + 1, n: pointIds.length })}
            </div>
            <h2>
              {point && L(point.name, lang)}
              {point && <span className="point-code">{point.code}</span>}
            </h2>
            <div className="point-sketch">
              <BodyFigure
                view={coords.detail.view}
                points={[
                  { id, x: coords.detail.x, y: coords.detail.y, active: true },
                ]}
                focus={
                  isFullBody
                    ? { x: coords.detail.x, y: coords.detail.y, radius: 56 }
                    : undefined
                }
              />
            </div>
            {point && (
              <p className="routine-howto">👆 {L(point.howToPress, lang)}</p>
            )}
            <PressTimer key={id} autoStart onComplete={() => {}} />
            <button className="btn btn--primary" onClick={next}>
              {step + 1 >= pointIds.length
                ? t("routine_finish")
                : t("routine_next")}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
