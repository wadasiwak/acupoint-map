import { useMemo, useRef, useState } from "react";
import { ACUPOINTS, pointById } from "../data";
import { COORDS } from "../data/coords";
import { BODY_VIEWS } from "../lib/bodyViews";
import { useAppStore } from "../store/appStore";
import { useT, L } from "../i18n";
import { playCorrect, playWrong } from "../lib/sound";
import BodyFigure, { type FigurePoint } from "./BodyFigure";

const ROUNDS = 10;
/** viewBox-unit thresholds for scoring a tap. */
const HIT = 22;
const CLOSE = 45;

interface Props {
  onQuit: () => void;
}

function pickRounds() {
  // Only points whose overview marker sits on the figure (all of them do).
  return [...ACUPOINTS]
    .sort(() => Math.random() - 0.5)
    .slice(0, ROUNDS)
    .map((p) => p.id);
}

export default function QuizScreen({ onQuit }: Props) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const quizBest = useAppStore((s) => s.quizBest);
  const recordQuiz = useAppStore((s) => s.recordQuiz);

  const [ids] = useState(pickRounds);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [guess, setGuess] = useState<{ x: number; y: number } | null>(null);
  const [done, setDone] = useState(false);
  const recordedRef = useRef(false);
  const prevBest = useRef(quizBest);

  const id = ids[Math.min(round, ids.length - 1)];
  const point = pointById(id);
  const coords = COORDS[id];
  const view = coords.overview.view;
  const def = BODY_VIEWS[view];

  const distance = useMemo(() => {
    if (!guess) return null;
    return Math.hypot(guess.x - coords.overview.x, guess.y - coords.overview.y);
  }, [guess, coords]);

  const onSvgClick = (e: React.MouseEvent<SVGSVGElement>) => {
    if (guess) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * def.width;
    const y = ((e.clientY - rect.top) / rect.height) * def.height;
    const d = Math.hypot(x - coords.overview.x, y - coords.overview.y);
    setGuess({ x, y });
    if (d <= HIT) {
      setScore((s) => s + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const next = () => {
    if (round + 1 >= ids.length) {
      if (!recordedRef.current) {
        recordedRef.current = true;
        recordQuiz(score);
      }
      setDone(true);
    } else {
      setRound((r) => r + 1);
      setGuess(null);
    }
  };

  if (done) {
    const isBest = score > (prevBest.current ?? 0);
    return (
      <div className="quiz-result">
        <div className="quiz-result-badge">🎯</div>
        <h2>{t("quiz_done")}</h2>
        <p className="section-head">{t("quiz_score", { s: score, n: ids.length })}</p>
        {isBest && <p className="muted">🎉 {t("quiz_best", { s: score })}</p>}
        <div className="quiz-result-actions">
          <button className="btn btn--primary" onClick={onQuit}>
            {t("back_home")}
          </button>
        </div>
      </div>
    );
  }

  const feedbackPoints: FigurePoint[] = [];
  if (guess) {
    feedbackPoints.push({ id: "correct", x: coords.overview.x, y: coords.overview.y, active: true });
    feedbackPoints.push({ id: "guess", x: guess.x, y: guess.y, variant: "guess" });
  }

  const verdict =
    distance === null
      ? null
      : distance <= HIT
        ? { cls: "ok", text: t("quiz_correct") }
        : distance <= CLOSE
          ? { cls: "close", text: t("quiz_close") }
          : { cls: "off", text: t("quiz_off") };

  return (
    <div className="quiz-screen">
      <div className="quiz-bar">
        <button className="btn btn--ghost btn--sm" onClick={onQuit}>
          {t("quit")}
        </button>
        <span>{t("quiz_round", { i: round + 1, n: ids.length })}</span>
        <span>✓ {score}</span>
      </div>
      <div className="quiz-prompt">
        {t("quiz_find")} <strong>{point && L(point.name, lang)}</strong>{" "}
        <small>({L(def.label, lang)})</small>
        {point && (
          <div className="quiz-goodfor">✨ {L(point.goodFor, lang)}</div>
        )}
      </div>
      <div className="quiz-figure">
        <BodyFigure
          view={view}
          points={feedbackPoints}
          className={guess ? "" : "quiz-figure--clickable"}
          onSvgClick={!guess ? onSvgClick : undefined}
        />
      </div>
      {verdict && (
        <>
          <div className={`quiz-feedback quiz-feedback--${verdict.cls}`}>
            {verdict.text}
            <button className="btn btn--primary btn--sm" onClick={next}>
              {round + 1 >= ids.length ? t("see_result") : t("quiz_next")}
            </button>
          </div>
          {point && (
            <div className="quiz-learn">
              📍 {L(point.howToFind, lang)}
            </div>
          )}
        </>
      )}
    </div>
  );
}
