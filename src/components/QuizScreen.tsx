import { useMemo, useRef, useState } from "react";
import { ACUPOINTS, SYMPTOMS, pointById, symptomById } from "../data";
import { COORDS } from "../data/coords";
import { BODY_VIEWS } from "../lib/bodyViews";
import { useAppStore } from "../store/appStore";
import { useT, L } from "../i18n";
import { playClick, playCorrect, playWrong } from "../lib/sound";
import BodyFigure, { type FigurePoint } from "./BodyFigure";

const ROUNDS = 10;
/** viewBox-unit thresholds for scoring a tap. */
const HIT = 22;
const CLOSE = 45;

interface Props {
  onQuit: () => void;
}

const shuffle = <T,>(arr: T[]): T[] =>
  [...arr]
    .map((v) => [Math.random(), v] as const)
    .sort((a, b) => a[0] - b[0])
    .map(([, v]) => v);

/** Two quizzes behind one entry: locate-on-figure vs symptom↔point matching. */
export default function QuizScreen({ onQuit }: Props) {
  const t = useT();
  const quizBest = useAppStore((s) => s.quizBest);
  const matchBest = useAppStore((s) => s.matchBest);
  const [mode, setMode] = useState<"pick" | "locate" | "match">("pick");

  if (mode === "locate")
    return <LocateQuiz onQuit={onQuit} onModes={() => setMode("pick")} />;
  if (mode === "match")
    return <MatchQuiz onQuit={onQuit} onModes={() => setMode("pick")} />;

  return (
    <div className="quiz-screen">
      <div className="quiz-bar">
        <button className="btn btn--ghost btn--sm" onClick={onQuit}>
          {t("quit")}
        </button>
        <span>{t("quiz_pick_mode")}</span>
        <span />
      </div>
      <div className="quiz-modes">
        <button
          className="quiz-mode-card"
          onClick={() => {
            setMode("locate");
            playClick();
          }}
        >
          <span className="quiz-mode-title">{t("quiz_mode_locate")}</span>
          <span className="quiz-mode-desc">{t("quiz_desc")}</span>
          {quizBest !== null && (
            <span className="quiz-mode-best">🏅 {t("quiz_best", { s: quizBest })}</span>
          )}
        </button>
        <button
          className="quiz-mode-card"
          onClick={() => {
            setMode("match");
            playClick();
          }}
        >
          <span className="quiz-mode-title">{t("quiz_mode_match")}</span>
          <span className="quiz-mode-desc">{t("quiz_mode_match_desc")}</span>
          {matchBest !== null && (
            <span className="quiz-mode-best">🏅 {t("quiz_best", { s: matchBest })}</span>
          )}
        </button>
      </div>
    </div>
  );
}

/** Shared end screen: score, best-score cheer, replay/back actions. */
function QuizResult({
  score,
  total,
  isBest,
  onAgain,
  onQuit,
}: {
  score: number;
  total: number;
  isBest: boolean;
  onAgain: () => void;
  onQuit: () => void;
}) {
  const t = useT();
  return (
    <div className="quiz-result">
      <div className="quiz-result-badge">🎯</div>
      <h2>{t("quiz_done")}</h2>
      <p className="section-head">{t("quiz_score", { s: score, n: total })}</p>
      {isBest && <p className="muted">🎉 {t("quiz_best", { s: score })}</p>}
      <div className="quiz-result-actions">
        <button className="btn btn--ghost" onClick={onAgain}>
          {t("quiz_again")}
        </button>
        <button className="btn btn--primary" onClick={onQuit}>
          {t("back_home")}
        </button>
      </div>
    </div>
  );
}

// ---------- mode 1: locate the point on the figure ----------

function pickRounds() {
  // Only points whose overview marker sits on the figure (all of them do).
  return shuffle(ACUPOINTS)
    .slice(0, ROUNDS)
    .map((p) => p.id);
}

function LocateQuiz({ onQuit, onModes }: { onQuit: () => void; onModes: () => void }) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const quizBest = useAppStore((s) => s.quizBest);
  const recordQuiz = useAppStore((s) => s.recordQuiz);

  const [ids, setIds] = useState(pickRounds);
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

  const restart = () => {
    prevBest.current = Math.max(prevBest.current ?? 0, score);
    recordedRef.current = false;
    setIds(pickRounds());
    setRound(0);
    setScore(0);
    setGuess(null);
    setDone(false);
  };

  if (done) {
    return (
      <QuizResult
        score={score}
        total={ids.length}
        isBest={score > (prevBest.current ?? 0)}
        onAgain={restart}
        onQuit={onQuit}
      />
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
        <button className="btn btn--ghost btn--sm" onClick={onModes}>
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

// ---------- mode 2: symptom ↔ point matching (4 choices) ----------

interface MatchRound {
  /** "point": pick the helpful point for a symptom; "symptom": the reverse. */
  kind: "point" | "symptom";
  /** Symptom id (kind=point) or point id (kind=symptom). */
  promptId: string;
  /** 4 option ids (points or symptoms), pre-shuffled per round. */
  options: string[];
  correctId: string;
}

/**
 * 10 mixed rounds. Correct answers come straight from symptom.acupointIds;
 * distractors are drawn only from outside that symptom's recipe (for the
 * reverse direction: symptoms whose recipe does NOT include the point), so
 * exactly one option is right. Options are shuffled per round so the answer
 * position is unpredictable.
 */
function buildMatchRounds(): MatchRound[] {
  const rounds: MatchRound[] = [];
  for (const s of shuffle(SYMPTOMS).slice(0, ROUNDS)) {
    const correctPoint = shuffle(s.acupointIds)[0];
    const forward = Math.random() < 0.5;
    if (forward) {
      const distractors = shuffle(
        ACUPOINTS.filter((p) => !s.acupointIds.includes(p.id)),
      )
        .slice(0, 3)
        .map((p) => p.id);
      rounds.push({
        kind: "point",
        promptId: s.id,
        options: shuffle([correctPoint, ...distractors]),
        correctId: correctPoint,
      });
    } else {
      const distractors = shuffle(
        SYMPTOMS.filter((o) => !o.acupointIds.includes(correctPoint)),
      )
        .slice(0, 3)
        .map((o) => o.id);
      rounds.push({
        kind: "symptom",
        promptId: correctPoint,
        options: shuffle([s.id, ...distractors]),
        correctId: s.id,
      });
    }
  }
  return rounds;
}

function MatchQuiz({ onQuit, onModes }: { onQuit: () => void; onModes: () => void }) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const matchBest = useAppStore((s) => s.matchBest);
  const recordMatch = useAppStore((s) => s.recordMatch);

  const [rounds, setRounds] = useState(buildMatchRounds);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const recordedRef = useRef(false);
  const prevBest = useRef(matchBest);

  const r = rounds[Math.min(round, rounds.length - 1)];
  const symptom = symptomById(r.kind === "point" ? r.promptId : r.correctId);
  const point = pointById(r.kind === "point" ? r.correctId : r.promptId);
  if (!symptom || !point) return null;

  const optionLabel = (id: string): string => {
    if (r.kind === "point") {
      const p = pointById(id);
      return p ? `${L(p.name, lang)} ${p.code}` : id;
    }
    const s = symptomById(id);
    return s ? `${s.emoji} ${L(s.name, lang)}` : id;
  };

  const pick = (id: string) => {
    if (picked) return;
    setPicked(id);
    if (id === r.correctId) {
      setScore((s) => s + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };

  const next = () => {
    if (round + 1 >= rounds.length) {
      if (!recordedRef.current) {
        recordedRef.current = true;
        recordMatch(score);
      }
      setDone(true);
    } else {
      setRound((i) => i + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    prevBest.current = Math.max(prevBest.current ?? 0, score);
    recordedRef.current = false;
    setRounds(buildMatchRounds());
    setRound(0);
    setScore(0);
    setPicked(null);
    setDone(false);
  };

  if (done) {
    return (
      <QuizResult
        score={score}
        total={rounds.length}
        isBest={score > (prevBest.current ?? 0)}
        onAgain={restart}
        onQuit={onQuit}
      />
    );
  }

  const correct = picked === r.correctId;

  return (
    <div className="quiz-screen">
      <div className="quiz-bar">
        <button className="btn btn--ghost btn--sm" onClick={onModes}>
          {t("quit")}
        </button>
        <span>{t("quiz_round", { i: round + 1, n: rounds.length })}</span>
        <span>✓ {score}</span>
      </div>

      <div className="quiz-prompt">
        {r.kind === "point"
          ? t("quiz_match_q_point", { s: `${symptom.emoji} ${L(symptom.name, lang)}` })
          : t("quiz_match_q_symptom", {
              p: `${L(point.name, lang)} ${point.code}`,
            })}
      </div>

      <div className="quiz-options">
        {r.options.map((id) => {
          const cls =
            picked === null
              ? ""
              : id === r.correctId
                ? "quiz-option--correct"
                : id === picked
                  ? "quiz-option--wrong"
                  : "quiz-option--dim";
          return (
            <button
              key={id}
              className={`quiz-option ${cls}`}
              disabled={picked !== null}
              onClick={() => pick(id)}
            >
              {optionLabel(id)}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <>
          <div className={`quiz-feedback quiz-feedback--${correct ? "ok" : "off"}`}>
            {correct
              ? t("quiz_match_correct")
              : t("quiz_match_wrong", { a: optionLabel(r.correctId) })}
            <button className="btn btn--primary btn--sm" onClick={next}>
              {round + 1 >= rounds.length ? t("see_result") : t("quiz_next")}
            </button>
          </div>
          {/* Explanation reuses the point's own goodFor line — no new claims. */}
          <div className="quiz-learn">
            ✨ {L(point.name, lang)} {point.code}:{L(point.goodFor, lang)}
            <div className="quiz-learn-sub">
              {symptom.emoji} {L(symptom.name, lang)}:{L(symptom.blurb, lang)}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
