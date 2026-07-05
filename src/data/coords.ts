import type { ViewId } from "./types";

// On-figure coordinates for every acupoint, in each view's viewBox units
// (see lib/bodyViews.tsx). `overview` marks the point on the full-body
// front/back figure; `detail` is the close-up used on the point card.
// Bilateral points are marked on one side only — the text explains both.
// Calibrated visually via the /#calibrate dev page.

export interface PointCoords {
  overview: { view: "front" | "back"; x: number; y: number };
  detail: { view: ViewId; x: number; y: number };
}

export const COORDS: Record<string, PointCoords> = {
  // --- head ---
  baihui: { overview: { view: "front", x: 100, y: 15 }, detail: { view: "head-side", x: 118, y: 20 } },
  yintang: { overview: { view: "front", x: 100, y: 30 }, detail: { view: "head-front", x: 100, y: 88 } },
  taiyang: { overview: { view: "front", x: 115, y: 32 }, detail: { view: "head-front", x: 141, y: 96 } },
  cuanzhu: { overview: { view: "front", x: 104, y: 30 }, detail: { view: "head-front", x: 109, y: 87 } },
  jingming: { overview: { view: "front", x: 103, y: 33 }, detail: { view: "head-front", x: 105, y: 100 } },
  sibai: { overview: { view: "front", x: 105, y: 36 }, detail: { view: "head-front", x: 118, y: 112 } },
  yingxiang: { overview: { view: "front", x: 103, y: 40 }, detail: { view: "head-front", x: 110, y: 132 } },
  renzhong: { overview: { view: "front", x: 100, y: 44 }, detail: { view: "head-front", x: 100, y: 142 } },
  chengjiang: { overview: { view: "front", x: 100, y: 49 }, detail: { view: "head-front", x: 100, y: 160 } },
  jiache: { overview: { view: "front", x: 110, y: 46 }, detail: { view: "head-front", x: 128, y: 146 } },
  tinggong: { overview: { view: "front", x: 118, y: 38 }, detail: { view: "head-side", x: 104, y: 102 } },
  yifeng: { overview: { view: "back", x: 114, y: 36 }, detail: { view: "head-side", x: 126, y: 114 } },
  fengchi: { overview: { view: "back", x: 110, y: 54 }, detail: { view: "head-side", x: 140, y: 126 } },
  fengfu: { overview: { view: "back", x: 100, y: 56 }, detail: { view: "head-side", x: 154, y: 110 } },

  // --- neck-shoulder ---
  jianjing: { overview: { view: "back", x: 122, y: 80 }, detail: { view: "back", x: 122, y: 80 } },
  dazhui: { overview: { view: "back", x: 100, y: 74 }, detail: { view: "back", x: 100, y: 74 } },
  tianzhu: { overview: { view: "back", x: 106, y: 64 }, detail: { view: "back", x: 106, y: 64 } },
  jianyu: { overview: { view: "front", x: 143, y: 84 }, detail: { view: "front", x: 143, y: 84 } },
  tianzong: { overview: { view: "back", x: 120, y: 112 }, detail: { view: "back", x: 120, y: 112 } },
  gaohuang: { overview: { view: "back", x: 117, y: 102 }, detail: { view: "back", x: 117, y: 102 } },

  // --- torso ---
  feishu: { overview: { view: "back", x: 108, y: 96 }, detail: { view: "back", x: 108, y: 96 } },
  shenshu: { overview: { view: "back", x: 108, y: 176 }, detail: { view: "back", x: 108, y: 176 } },
  mingmen: { overview: { view: "back", x: 100, y: 176 }, detail: { view: "back", x: 100, y: 176 } },
  ciliao: { overview: { view: "back", x: 105, y: 204 }, detail: { view: "back", x: 105, y: 204 } },
  danzhong: { overview: { view: "front", x: 100, y: 118 }, detail: { view: "front", x: 100, y: 118 } },
  zhongwan: { overview: { view: "front", x: 100, y: 144 }, detail: { view: "front", x: 100, y: 144 } },
  shuifen: { overview: { view: "front", x: 100, y: 162 }, detail: { view: "front", x: 100, y: 162 } },
  tianshu: { overview: { view: "front", x: 110, y: 168 }, detail: { view: "front", x: 110, y: 168 } },
  qihai: { overview: { view: "front", x: 100, y: 178 }, detail: { view: "front", x: 100, y: 178 } },
  guanyuan: { overview: { view: "front", x: 100, y: 188 }, detail: { view: "front", x: 100, y: 188 } },
  zhongji: { overview: { view: "front", x: 100, y: 196 }, detail: { view: "front", x: 100, y: 196 } },
  qimen: { overview: { view: "front", x: 114, y: 138 }, detail: { view: "front", x: 114, y: 138 } },

  // --- arm & hand ---
  hegu: { overview: { view: "front", x: 157, y: 232 }, detail: { view: "hand-back", x: 82, y: 96 } },
  yangxi: { overview: { view: "front", x: 153, y: 224 }, detail: { view: "hand-back", x: 74, y: 164 } },
  houxi: { overview: { view: "front", x: 162, y: 236 }, detail: { view: "hand-back", x: 128, y: 122 } },
  shaoshang: { overview: { view: "front", x: 150, y: 242 }, detail: { view: "hand-palm", x: 122, y: 32 } },
  yuji: { overview: { view: "front", x: 156, y: 238 }, detail: { view: "hand-palm", x: 120, y: 132 } },
  laogong: { overview: { view: "front", x: 158, y: 236 }, detail: { view: "hand-palm", x: 100, y: 122 } },
  shenmen: { overview: { view: "front", x: 160, y: 226 }, detail: { view: "hand-palm", x: 80, y: 168 } },
  taiyuan: { overview: { view: "front", x: 152, y: 226 }, detail: { view: "hand-palm", x: 120, y: 168 } },
  lieque: { overview: { view: "front", x: 152, y: 220 }, detail: { view: "hand-palm", x: 122, y: 186 } },
  neiguan: { overview: { view: "front", x: 156, y: 216 }, detail: { view: "hand-palm", x: 100, y: 206 } },
  jianshi: { overview: { view: "front", x: 157, y: 212 }, detail: { view: "hand-palm", x: 100, y: 222 } },
  waiguan: { overview: { view: "back", x: 158, y: 216 }, detail: { view: "hand-back", x: 100, y: 204 } },
  zhigou: { overview: { view: "back", x: 158, y: 210 }, detail: { view: "hand-back", x: 100, y: 220 } },
  quchi: { overview: { view: "front", x: 155, y: 152 }, detail: { view: "front", x: 155, y: 152 } },
  shousanli: { overview: { view: "front", x: 156, y: 166 }, detail: { view: "front", x: 156, y: 166 } },
  chize: { overview: { view: "front", x: 149, y: 151 }, detail: { view: "front", x: 149, y: 151 } },

  // --- leg & foot ---
  dubi: { overview: { view: "front", x: 121, y: 300 }, detail: { view: "front", x: 121, y: 300 } },
  zusanli: { overview: { view: "front", x: 122, y: 316 }, detail: { view: "front", x: 122, y: 316 } },
  fenglong: { overview: { view: "front", x: 124, y: 348 }, detail: { view: "front", x: 124, y: 348 } },
  neiting: { overview: { view: "front", x: 116, y: 437 }, detail: { view: "foot-top", x: 98, y: 70 } },
  liangqiu: { overview: { view: "front", x: 120, y: 282 }, detail: { view: "front", x: 120, y: 282 } },
  xuehai: { overview: { view: "front", x: 105, y: 284 }, detail: { view: "front", x: 105, y: 284 } },
  yinlingquan: { overview: { view: "front", x: 102, y: 312 }, detail: { view: "front", x: 102, y: 312 } },
  diji: { overview: { view: "front", x: 103, y: 330 }, detail: { view: "front", x: 103, y: 330 } },
  sanyinjiao: { overview: { view: "front", x: 110, y: 398 }, detail: { view: "foot-inner", x: 150, y: 68 } },
  taixi: { overview: { view: "front", x: 112, y: 412 }, detail: { view: "foot-inner", x: 184, y: 118 } },
  zhaohai: { overview: { view: "front", x: 112, y: 420 }, detail: { view: "foot-inner", x: 170, y: 140 } },
  taichong: { overview: { view: "front", x: 114, y: 432 }, detail: { view: "foot-top", x: 106, y: 98 } },
  xingjian: { overview: { view: "front", x: 113, y: 438 }, detail: { view: "foot-top", x: 108, y: 66 } },
  zulinqi: { overview: { view: "front", x: 120, y: 433 }, detail: { view: "foot-top", x: 76, y: 108 } },
  yanglingquan: { overview: { view: "front", x: 124, y: 310 }, detail: { view: "front", x: 124, y: 310 } },
  xuanzhong: { overview: { view: "front", x: 123, y: 396 }, detail: { view: "front", x: 123, y: 396 } },
  yongquan: { overview: { view: "front", x: 82, y: 440 }, detail: { view: "foot-sole", x: 100, y: 92 } },
  weizhong: { overview: { view: "back", x: 110, y: 298 }, detail: { view: "back", x: 110, y: 298 } },
  chengshan: { overview: { view: "back", x: 113, y: 342 }, detail: { view: "back", x: 113, y: 342 } },
  kunlun: { overview: { view: "back", x: 123, y: 412 }, detail: { view: "back", x: 123, y: 412 } },
};
