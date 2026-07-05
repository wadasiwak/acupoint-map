import { useEffect, useRef, useState } from "react";
import { useT } from "../i18n";
import { playBreath, playDone } from "../lib/sound";

const DURATIONS = [60, 120, 180];
/** One breathe-in + breathe-out cycle, in seconds. */
const BREATH = 8;

interface Props {
  /** Auto-start immediately (used by the routine runner). */
  autoStart?: boolean;
  /** Called when the countdown reaches zero. */
  onComplete?: () => void;
}

/**
 * Guided acupressure timer: a circle that expands on the in-breath and
 * contracts on the out-breath, pacing how long to hold the point.
 */
export default function PressTimer({ autoStart, onComplete }: Props) {
  const t = useT();
  const [duration, setDuration] = useState(60);
  const [remaining, setRemaining] = useState(60);
  const [running, setRunning] = useState(!!autoStart);
  const [done, setDone] = useState(false);
  const lastPhaseRef = useRef<"in" | "out" | null>(null);

  // Countdown.
  useEffect(() => {
    if (!running) return;
    const iv = setInterval(() => setRemaining((r) => r - 1), 1000);
    return () => clearInterval(iv);
  }, [running]);

  useEffect(() => {
    if (remaining > 0 || done) return;
    if (running || autoStart) {
      setRunning(false);
      setDone(true);
      playDone();
      onComplete?.();
    }
  }, [remaining, running, done, autoStart, onComplete]);

  // Breath phase from elapsed time; cue sound on each transition.
  const elapsed = duration - remaining;
  const phasePos = (elapsed % BREATH) / BREATH; // 0..1
  const inhaling = phasePos < 0.5;
  useEffect(() => {
    if (!running) return;
    const phase = inhaling ? "in" : "out";
    if (lastPhaseRef.current !== phase) {
      lastPhaseRef.current = phase;
      playBreath(inhaling);
    }
  }, [inhaling, running]);

  const start = (secs: number) => {
    setDuration(secs);
    setRemaining(secs);
    setDone(false);
    setRunning(true);
    lastPhaseRef.current = null;
  };
  const reset = () => {
    setRunning(false);
    setDone(false);
    setRemaining(duration);
  };

  const mmss = `${Math.floor(remaining / 60)}:${String(remaining % 60).padStart(2, "0")}`;
  // Circle scales 0.6→1 over the in-breath, back over the out-breath.
  const scale = 0.6 + 0.4 * (inhaling ? phasePos * 2 : (1 - phasePos) * 2);

  if (!running && !done) {
    return (
      <div className="press-timer press-timer--idle">
        <span className="press-timer-label">{t("start_massage")}</span>
        <div className="press-timer-durations">
          {DURATIONS.map((d, i) => (
            <button key={d} className="btn btn--sm btn--primary" onClick={() => start(d)}>
              {t(`min_${i + 1}`)}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="press-timer">
      <div className="breath-stage">
        <div
          className="breath-circle"
          style={{ transform: `scale(${done ? 1 : scale})` }}
        >
          <span className="breath-time">{done ? "✓" : mmss}</span>
        </div>
      </div>
      <div className="breath-label">
        {done ? t("timer_done") : inhaling ? t("breathe_in") : t("breathe_out")}
      </div>
      <div className="press-timer-controls">
        {!done && (
          <button className="btn btn--ghost btn--sm" onClick={() => setRunning((r) => !r)}>
            {running ? t("timer_pause") : t("timer_resume")}
          </button>
        )}
        <button className="btn btn--ghost btn--sm" onClick={reset}>
          {t("timer_reset")}
        </button>
      </div>
    </div>
  );
}
