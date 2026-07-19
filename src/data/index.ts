import type { Acupoint, MeridianInfo, Symptom, SymptomCategory } from "./types";
import { MERIDIANS } from "./meridians";
import { ACUPOINTS_HEAD } from "./acupoints/head";
import { ACUPOINTS_SHOULDER_TORSO } from "./acupoints/shoulder_torso";
import { ACUPOINTS_ARM } from "./acupoints/arm";
import { ACUPOINTS_LEG } from "./acupoints/leg";
import { SYMPTOMS_PART1 } from "./symptoms/part1";
import { SYMPTOMS_PART2 } from "./symptoms/part2";

export const ACUPOINTS: Acupoint[] = [
  ...ACUPOINTS_HEAD,
  ...ACUPOINTS_SHOULDER_TORSO,
  ...ACUPOINTS_ARM,
  ...ACUPOINTS_LEG,
];

export const SYMPTOMS: Symptom[] = [...SYMPTOMS_PART1, ...SYMPTOMS_PART2];

const POINT_BY_ID = new Map(ACUPOINTS.map((p) => [p.id, p]));
const SYMPTOM_BY_ID = new Map(SYMPTOMS.map((s) => [s.id, s]));

export const pointById = (id: string): Acupoint | undefined =>
  POINT_BY_ID.get(id);
export const symptomById = (id: string): Symptom | undefined =>
  SYMPTOM_BY_ID.get(id);

export const CATEGORY_ORDER: SymptomCategory[] = [
  "head-face",
  "digestion",
  "sleep-mood",
  "pain",
  "womens",
  "cold-breath",
  "misc",
];

/** Symptoms that recommend a given point (reverse index). */
export function symptomsForPoint(pointId: string): Symptom[] {
  return SYMPTOMS.filter((s) => s.acupointIds.includes(pointId));
}

// ---------- meridians ----------

export { MERIDIANS };

const MERIDIAN_BY_ID = new Map(MERIDIANS.map((m) => [m.id, m]));

export const meridianById = (id: string): MeridianInfo | undefined =>
  MERIDIAN_BY_ID.get(id);

const codePrefix = (code: string): string => /^[A-Z]+/.exec(code)?.[0] ?? "";
const codeNumber = (code: string): number => Number(/(\d+)$/.exec(code)?.[1] ?? 0);

/** The meridian a point belongs to, derived from its international code. */
export const meridianOfPoint = (p: Acupoint): MeridianInfo | undefined =>
  MERIDIANS.find((m) => m.codePrefix === codePrefix(p.code));

/**
 * The points we cover on a meridian, ordered along its flow direction.
 *
 * Ordering basis: the international (WHO) point numbering already follows the
 * meridian's circulation direction — e.g. LI1 starts at the index finger and
 * LI20 ends beside the nose (hand-yangming runs hand→head), BL1 starts at the
 * inner eye corner and BL67 ends at the little toe (foot-taiyang runs
 * head→foot), CV/GV numbers run upward along the midlines. So sorting our
 * (curated, non-contiguous) subset by code number yields the correct body
 * surface order for a hand-to-head / head-to-foot walk-through. Extra points
 * (EX-*) have no flow; their numeric order is just a stable display order.
 */
export function pointsOfMeridian(meridianId: string): Acupoint[] {
  const m = meridianById(meridianId);
  if (!m) return [];
  return ACUPOINTS.filter((p) => codePrefix(p.code) === m.codePrefix).sort(
    (a, b) => codeNumber(a.code) - codeNumber(b.code),
  );
}
