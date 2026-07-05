import type { Acupoint, Symptom, SymptomCategory } from "./types";
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
