import type { ViewId } from "./types";
import type { LS } from "../i18n";

// Measuring guides drawn on the detail sketch: a dashed line from a palpable
// landmark (wrist crease, navel, C7…) to the acupoint, with a short label of
// the distance in finger-widths. Coordinates are in the detail view's units
// (lib/bodyViews.tsx); `from` is the landmark, the line ends at the point's
// own detail coords (data/coords.ts). Only points whose textbook location is
// a landmark + distance get an entry.

export interface PointMeasure {
  /** Must match the point's detail view in coords.ts. */
  view: ViewId;
  from: { x: number; y: number };
  label: LS;
}

export const MEASURES: Record<string, PointMeasure> = {
  // hand-palm / hand-back: from the wrist crease midpoint
  neiguan: { view: "hand-palm", from: { x: 100, y: 166 }, label: { zh: "腕橫紋中點下三橫指", en: "3 fingers from wrist crease" } },
  jianshi: { view: "hand-palm", from: { x: 100, y: 166 }, label: { zh: "腕橫紋中點下四橫指", en: "4 fingers from wrist crease" } },
  waiguan: { view: "hand-back", from: { x: 100, y: 172 }, label: { zh: "腕背橫紋中點下三橫指", en: "3 fingers from wrist crease" } },
  zhigou: { view: "hand-back", from: { x: 100, y: 172 }, label: { zh: "腕背橫紋中點下四橫指", en: "4 fingers from wrist crease" } },

  // elbow
  shousanli: { view: "elbow", from: { x: 57, y: 74 }, label: { zh: "曲池下三橫指", en: "3 fingers below LI11" } },

  // knee
  zusanli: { view: "knee", from: { x: 83, y: 131 }, label: { zh: "外膝眼下四橫指", en: "4 fingers below knee eye" } },
  liangqiu: { view: "knee", from: { x: 88, y: 96 }, label: { zh: "髕骨外上角上三橫指", en: "3 fingers above kneecap" } },
  xuehai: { view: "knee", from: { x: 112, y: 96 }, label: { zh: "髕骨內上角上三橫指", en: "3 fingers above kneecap" } },

  // lower-leg
  fenglong: { view: "lower-leg", from: { x: 76, y: 256 }, label: { zh: "外踝尖與外膝眼連線中點", en: "midway ankle ↔ knee" } },
  xuanzhong: { view: "lower-leg", from: { x: 76, y: 256 }, label: { zh: "外踝尖上四橫指", en: "4 fingers above outer ankle" } },

  // foot-inner
  sanyinjiao: { view: "foot-inner", from: { x: 168, y: 111 }, label: { zh: "內踝尖上四橫指", en: "4 fingers above inner ankle" } },
  zhaohai: { view: "foot-inner", from: { x: 168, y: 129 }, label: { zh: "內踝尖下一拇指寬", en: "1 thumb below inner ankle" } },

  // torso-front: from the navel
  zhongwan: { view: "torso-front", from: { x: 120, y: 200 }, label: { zh: "臍與劍突連線中點", en: "midway navel ↔ sternum" } },
  shuifen: { view: "torso-front", from: { x: 120, y: 200 }, label: { zh: "臍上一拇指寬", en: "1 thumb above navel" } },
  tianshu: { view: "torso-front", from: { x: 120, y: 200 }, label: { zh: "臍旁三橫指", en: "3 fingers beside navel" } },
  qihai: { view: "torso-front", from: { x: 120, y: 200 }, label: { zh: "臍下兩橫指(食中)", en: "2 fingers below navel" } },
  guanyuan: { view: "torso-front", from: { x: 120, y: 200 }, label: { zh: "臍下四橫指", en: "4 fingers below navel" } },
  zhongji: { view: "torso-front", from: { x: 120, y: 230 }, label: { zh: "關元下一拇指寬", en: "1 thumb below CV4" } },

  // back-upper: from C7 / spine ticks
  jianjing: { view: "back-upper", from: { x: 120, y: 70 }, label: { zh: "大椎與肩峰連線中點", en: "midway C7 ↔ shoulder tip" } },
  feishu: { view: "back-upper", from: { x: 120, y: 104 }, label: { zh: "第三胸椎旁食中兩指", en: "2 fingers beside T3" } },
  gaohuang: { view: "back-upper", from: { x: 120, y: 116 }, label: { zh: "第四胸椎旁四橫指", en: "4 fingers beside T4" } },

  // back-lower: from the spine midline
  shenshu: { view: "back-lower", from: { x: 120, y: 88 }, label: { zh: "第二腰椎旁食中兩指", en: "2 fingers beside L2" } },

  // leg-back
  kunlun: { view: "leg-back", from: { x: 130, y: 254 }, label: { zh: "外踝與跟腱之間", en: "between ankle & Achilles" } },
};
