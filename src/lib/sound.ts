// Tiny synthesized cues via Web Audio — no assets. Respects the mute flag.
import { useAppStore } from "../store/appStore";

let ctx: AudioContext | null = null;
function ac(): AudioContext | null {
  if (!useAppStore.getState().soundOn) return null;
  try {
    ctx ??= new AudioContext();
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}
function tone(freq: number, at: number, dur: number, type: OscillatorType = "sine", peak = 0.1) {
  const c = ac();
  if (!c) return;
  const t = c.currentTime + at;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(peak, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g).connect(c.destination);
  o.start(t);
  o.stop(t + dur + 0.05);
}

/** Soft cue at each breathe-in / breathe-out transition. */
export function playBreath(inhale: boolean) {
  tone(inhale ? 440 : 330, 0, 0.5, "sine", 0.05);
}
/** Gentle chime when a timer finishes. */
export function playDone() {
  tone(523, 0, 0.16);
  tone(659, 0.13, 0.16);
  tone(784, 0.26, 0.4);
}
export function playCorrect() {
  tone(660, 0, 0.1);
  tone(880, 0.08, 0.16);
}
export function playWrong() {
  tone(180, 0, 0.2, "square", 0.05);
}
export function playClick() {
  tone(440, 0, 0.04, "triangle", 0.04);
}
