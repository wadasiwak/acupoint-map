import type { LS } from "../i18n";

/**
 * Starter routines offered on the index screen ("一鍵套用", never auto-added).
 * Point sequences are NOT invented combos — each one is exactly the acupoint
 * recipe of an existing symptom entry (enforced by scripts/check-data.mjs):
 *   睡前放鬆 = insomnia, 肩頸舒緩 = neck-shoulder, 提神醒腦 = fatigue.
 */
export interface PresetRoutine {
  name: LS;
  pointIds: string[];
}

export const PRESET_ROUTINES: PresetRoutine[] = [
  {
    name: { zh: "睡前放鬆", en: "Wind-down for sleep" },
    pointIds: ["shenmen", "sanyinjiao", "yintang", "yongquan", "baihui"],
  },
  {
    name: { zh: "肩頸舒緩", en: "Neck & shoulder relief" },
    pointIds: ["jianjing", "fengchi", "houxi", "tianzhu", "dazhui"],
  },
  {
    name: { zh: "提神醒腦", en: "Wake-up boost" },
    pointIds: ["baihui", "zusanli", "taiyang", "fengchi", "qihai"],
  },
];
