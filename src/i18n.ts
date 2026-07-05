import { useAppStore } from "./store/appStore";

export type Lang = "zh" | "en";

/** A localized string: Traditional Chinese + English. */
export interface LS {
  zh: string;
  en: string;
}

export const L = (s: LS | string, lang: Lang): string =>
  typeof s === "string" ? s : s[lang];

const STRINGS: Record<string, LS> = {
  app_title: { zh: "🫴 穴位地圖", en: "🫴 AcuMap" },
  subtitle: {
    zh: "哪裡不舒服?選症狀,看要按哪些穴位。",
    en: "Feeling off? Pick a symptom and see which acupoints to press.",
  },
  search_placeholder: { zh: "搜尋症狀或穴位…", en: "Search symptoms or points…" },
  symptoms_head: { zh: "選擇不舒服的地方", en: "What's bothering you?" },
  points_for: { zh: "建議按壓穴位", en: "Suggested acupoints" },
  press_order_hint: {
    zh: "依序按壓,第一個最重要",
    en: "Press in order — the first matters most",
  },
  view_front: { zh: "正面", en: "Front" },
  view_back: { zh: "背面", en: "Back" },
  point_index: { zh: "穴位圖鑑", en: "All points" },
  favorites: { zh: "收藏", en: "Saved" },
  fav_add: { zh: "☆ 收藏", en: "☆ Save" },
  fav_added: { zh: "★ 已收藏", en: "★ Saved" },
  how_to_find: { zh: "怎麼找", en: "How to find it" },
  how_to_press: { zh: "怎麼按", en: "How to press" },
  good_for: { zh: "主要功效", en: "Good for" },
  cautions: { zh: "注意事項", en: "Cautions" },
  meridian: { zh: "經絡", en: "Meridian" },
  tips_head: { zh: "生活小提醒", en: "Everyday tips" },
  seek_help: { zh: "什麼時候該就醫", en: "When to see a doctor" },
  back_home: { zh: "← 回症狀列表", en: "← All symptoms" },
  close: { zh: "關閉", en: "Close" },
  zoom_hint: { zh: "位置示意圖(非比例)", en: "Location sketch (not to scale)" },
  related_symptoms: { zh: "也用於", en: "Also used for" },
  disclaimer_title: { zh: "使用前請先知道", en: "Before you start" },
  disclaimer: {
    zh: "本工具彙整傳統穴位保健知識,僅供日常舒緩參考,不是醫療建議,也不能取代診斷與治療。症狀持續、加劇,或出現各條目列出的警示狀況時,請盡快就醫。孕婦、慢性病患者與兒童使用前請先諮詢醫師。",
    en: "This tool collects traditional acupressure knowledge for everyday comfort only. It is not medical advice and cannot replace diagnosis or treatment. If symptoms persist, worsen, or match any warning signs listed, seek medical care promptly. Pregnant users, people with chronic conditions, and children should consult a doctor first.",
  },
  disclaimer_ok: { zh: "我知道了", en: "Got it" },
  pregnancy_flag: { zh: "🤰 孕婦禁按", en: "🤰 Avoid in pregnancy" },
  cat_head_face: { zh: "頭面部", en: "Head & face" },
  cat_digestion: { zh: "腸胃消化", en: "Digestion" },
  cat_sleep_mood: { zh: "睡眠情緒", en: "Sleep & mood" },
  cat_pain: { zh: "痠痛筋骨", en: "Aches & pains" },
  cat_womens: { zh: "婦科調理", en: "Women's health" },
  cat_cold_breath: { zh: "感冒呼吸", en: "Colds & breathing" },
  cat_misc: { zh: "其他", en: "Other" },
  region_head: { zh: "頭頸", en: "Head & neck" },
  region_neck_shoulder: { zh: "肩頸", en: "Shoulders" },
  region_torso: { zh: "軀幹", en: "Torso" },
  region_arm: { zh: "手臂・手", en: "Arm & hand" },
  region_leg: { zh: "腿・足", en: "Leg & foot" },
  footer_note: {
    zh: "僅供保健參考・不能取代醫療",
    en: "Wellness reference only — not medical care",
  },
};

export function tr(
  key: string,
  lang: Lang,
  vars?: Record<string, string | number>,
): string {
  let s = STRINGS[key]?.[lang] ?? key;
  if (vars)
    for (const [k, v] of Object.entries(vars))
      s = s.replaceAll(`{${k}}`, String(v));
  return s;
}

export function useT() {
  const lang = useAppStore((s) => s.lang);
  return (key: string, vars?: Record<string, string | number>) =>
    tr(key, lang, vars);
}
