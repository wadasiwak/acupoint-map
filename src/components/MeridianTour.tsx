import { useState } from "react";
import { meridianById, pointsOfMeridian } from "../data";
import { COORDS } from "../data/coords";
import { useAppStore } from "../store/appStore";
import { useT, L } from "../i18n";
import { playClick } from "../lib/sound";
import BodyFigure from "./BodyFigure";
import CopyLinkButton from "./CopyLinkButton";

interface Props {
  meridianId: string;
  onBack: () => void;
  onPoint: (id: string) => void;
}

/**
 * Guided walk along one meridian: one station per covered point, in flow
 * order (see pointsOfMeridian), each shown on a cropped body figure with its
 * location + main use, linking to the full point card.
 */
export default function MeridianTour({ meridianId, onBack, onPoint }: Props) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const [step, setStep] = useState(0);

  const meridian = meridianById(meridianId);
  const points = pointsOfMeridian(meridianId);
  if (!meridian || points.length === 0) return null;

  const point = points[Math.min(step, points.length - 1)];
  const coords = COORDS[point.id];
  const { detail } = coords;
  // Same convention as PointCard: crop full-body views, show close-ups whole.
  const isFullBody = detail.view === "front" || detail.view === "back";

  const goStep = (i: number) => {
    setStep(Math.max(0, Math.min(points.length - 1, i)));
    playClick();
  };

  return (
    <div className="meridian-tour">
      <div className="screen-top-row">
        <button className="btn btn--ghost btn--sm" onClick={onBack}>
          {t("back_index")}
        </button>
        <CopyLinkButton hash={`#meridian/${meridianId}`} />
      </div>

      <div className="meridian-head">
        <h2>{L(meridian.name, lang)}</h2>
        <p className="meridian-blurb">{L(meridian.blurb, lang)}</p>
        <p className="muted-sm">{t("tour_order_note")}</p>
      </div>

      <div className="tour-station">
        <div className="tour-step-label">
          {t("tour_step", { i: step + 1, n: points.length })}
        </div>
        <h3 className="tour-point-name">
          {L(point.name, lang)}
          <span className="point-code">{point.code}</span>
        </h3>
        <div className="point-sketch tour-sketch">
          <BodyFigure
            view={detail.view}
            points={[
              { id: point.id, x: detail.x, y: detail.y, active: true },
            ]}
            focus={
              isFullBody ? { x: detail.x, y: detail.y, radius: 56 } : undefined
            }
          />
          <div className="sketch-hint">{t("zoom_hint")}</div>
        </div>
        <p className="tour-find">📍 {L(point.howToFind, lang)}</p>
        <p className="tour-good">✨ {L(point.goodFor, lang)}</p>
        <button
          className="btn btn--ghost btn--sm tour-open-card"
          onClick={() => onPoint(point.id)}
        >
          {t("tour_open_card")}
        </button>
      </div>

      <div className="tour-dots">
        {points.map((p, i) => (
          <button
            key={p.id}
            className={`tour-dot ${i === step ? "tour-dot--on" : ""}`}
            aria-label={L(p.name, lang)}
            title={L(p.name, lang)}
            onClick={() => goStep(i)}
          />
        ))}
      </div>

      <div className="tour-nav">
        <button
          className="btn btn--ghost"
          disabled={step === 0}
          onClick={() => goStep(step - 1)}
        >
          {t("tour_prev")}
        </button>
        {step + 1 < points.length ? (
          <button className="btn btn--primary" onClick={() => goStep(step + 1)}>
            {t("tour_next")}
          </button>
        ) : (
          <button className="btn btn--primary" onClick={onBack}>
            {t("tour_done")}
          </button>
        )}
      </div>
    </div>
  );
}
