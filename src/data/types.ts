import type { LS } from "../i18n";

// Acupoint / symptom content. Plain literals, LLM-generatable: text content
// lives here; on-figure coordinates live separately in data/coords.ts so the
// two can be authored independently.

/** Body figure views the app can render. */
export type ViewId =
  | "front"
  | "back"
  | "head-front"
  | "head-side"
  | "hand-back"
  | "hand-palm"
  | "foot-top"
  | "foot-inner"
  | "foot-sole";

export type BodyRegion = "head" | "neck-shoulder" | "torso" | "arm" | "leg";

export interface Acupoint {
  /** Pinyin slug, e.g. "hegu" — must match an entry in coords.ts. */
  id: string;
  /** 合谷 / Hegu (Union Valley) */
  name: LS;
  /** International code, e.g. "LI4". */
  code: string;
  /** 手陽明大腸經 / Large Intestine meridian */
  meridian: LS;
  region: BodyRegion;
  /** How to locate it, precise enough to find by hand. */
  howToFind: LS;
  /** How to press: technique, duration, strength. */
  howToPress: LS;
  /** What it's traditionally used for (one-liner). */
  goodFor: LS;
  /** Safety notes — MUST be present for pregnancy-contraindicated points. */
  cautions?: LS;
}

export type SymptomCategory =
  | "head-face"
  | "digestion"
  | "sleep-mood"
  | "pain"
  | "womens"
  | "cold-breath"
  | "misc";

export interface Symptom {
  id: string;
  name: LS;
  emoji: string;
  category: SymptomCategory;
  /** One-line description of the discomfort this entry covers. */
  blurb: LS;
  /** Acupoint ids, ordered by priority (first = press this first). */
  acupointIds: string[];
  /** Lifestyle tips that pair with acupressure (heat, stretching…). */
  tips?: LS;
  /** Red flags — when to stop self-care and see a doctor. */
  seekHelp?: LS;
}
