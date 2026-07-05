import type { ViewId } from "./types";

// On-figure coordinates for every acupoint, in each view's viewBox units
// (see lib/bodyViews.tsx). `overview` marks the point on the full-body
// front/back figure (240×500, arms held out, centered x=120); `detail` is the
// close-up used on the point card. Bilateral points are marked on one side —
// the text explains both. Calibrated visually via the /#calibrate dev page.

export interface PointCoords {
  overview: { view: "front" | "back"; x: number; y: number };
  detail: { view: ViewId; x: number; y: number };
}

export const COORDS: Record<string, PointCoords> = {
  // --- head ---
  baihui: { overview: { view: "front", x: 120, y: 18 }, detail: { view: "head-side", x: 118, y: 20 } },
  yintang: { overview: { view: "front", x: 120, y: 33 }, detail: { view: "head-front", x: 100, y: 88 } },
  taiyang: { overview: { view: "front", x: 139, y: 37 }, detail: { view: "head-front", x: 141, y: 96 } },
  cuanzhu: { overview: { view: "front", x: 126, y: 33 }, detail: { view: "head-front", x: 109, y: 87 } },
  jingming: { overview: { view: "front", x: 124, y: 36 }, detail: { view: "head-front", x: 105, y: 100 } },
  sibai: { overview: { view: "front", x: 128, y: 40 }, detail: { view: "head-front", x: 118, y: 112 } },
  yingxiang: { overview: { view: "front", x: 125, y: 45 }, detail: { view: "head-front", x: 110, y: 132 } },
  renzhong: { overview: { view: "front", x: 120, y: 49 }, detail: { view: "head-front", x: 100, y: 142 } },
  chengjiang: { overview: { view: "front", x: 120, y: 57 }, detail: { view: "head-front", x: 100, y: 160 } },
  jiache: { overview: { view: "front", x: 133, y: 51 }, detail: { view: "head-front", x: 128, y: 146 } },
  tinggong: { overview: { view: "front", x: 142, y: 43 }, detail: { view: "head-side", x: 104, y: 102 } },
  yifeng: { overview: { view: "back", x: 136, y: 46 }, detail: { view: "head-side", x: 126, y: 114 } },
  fengchi: { overview: { view: "back", x: 112, y: 55 }, detail: { view: "head-side", x: 140, y: 126 } },
  fengfu: { overview: { view: "back", x: 120, y: 57 }, detail: { view: "head-side", x: 154, y: 110 } },

  // --- neck-shoulder ---
  jianjing: { overview: { view: "back", x: 142, y: 82 }, detail: { view: "back", x: 142, y: 82 } },
  dazhui: { overview: { view: "back", x: 120, y: 74 }, detail: { view: "back", x: 120, y: 74 } },
  tianzhu: { overview: { view: "back", x: 114, y: 66 }, detail: { view: "back", x: 114, y: 66 } },
  jianyu: { overview: { view: "front", x: 158, y: 94 }, detail: { view: "front", x: 158, y: 94 } },
  tianzong: { overview: { view: "back", x: 140, y: 124 }, detail: { view: "back", x: 140, y: 124 } },
  gaohuang: { overview: { view: "back", x: 134, y: 116 }, detail: { view: "back", x: 134, y: 116 } },

  // --- torso ---
  feishu: { overview: { view: "back", x: 130, y: 108 }, detail: { view: "back", x: 130, y: 108 } },
  shenshu: { overview: { view: "back", x: 130, y: 196 }, detail: { view: "back", x: 130, y: 196 } },
  mingmen: { overview: { view: "back", x: 120, y: 196 }, detail: { view: "back", x: 120, y: 196 } },
  ciliao: { overview: { view: "back", x: 126, y: 226 }, detail: { view: "back", x: 126, y: 226 } },
  danzhong: { overview: { view: "front", x: 120, y: 126 }, detail: { view: "front", x: 120, y: 126 } },
  zhongwan: { overview: { view: "front", x: 120, y: 158 }, detail: { view: "front", x: 120, y: 158 } },
  shuifen: { overview: { view: "front", x: 120, y: 178 }, detail: { view: "front", x: 120, y: 178 } },
  tianshu: { overview: { view: "front", x: 133, y: 188 }, detail: { view: "front", x: 133, y: 188 } },
  qihai: { overview: { view: "front", x: 120, y: 200 }, detail: { view: "front", x: 120, y: 200 } },
  guanyuan: { overview: { view: "front", x: 120, y: 212 }, detail: { view: "front", x: 120, y: 212 } },
  zhongji: { overview: { view: "front", x: 120, y: 222 }, detail: { view: "front", x: 120, y: 222 } },
  qimen: { overview: { view: "front", x: 135, y: 140 }, detail: { view: "front", x: 135, y: 140 } },

  // --- arm & hand (right side of figure) ---
  quchi: { overview: { view: "front", x: 188, y: 150 }, detail: { view: "front", x: 188, y: 150 } },
  chize: { overview: { view: "front", x: 178, y: 152 }, detail: { view: "front", x: 178, y: 152 } },
  shousanli: { overview: { view: "front", x: 191, y: 166 }, detail: { view: "front", x: 191, y: 166 } },
  jianshi: { overview: { view: "front", x: 191, y: 214 }, detail: { view: "hand-palm", x: 100, y: 222 } },
  neiguan: { overview: { view: "front", x: 192, y: 224 }, detail: { view: "hand-palm", x: 100, y: 206 } },
  lieque: { overview: { view: "front", x: 197, y: 230 }, detail: { view: "hand-palm", x: 122, y: 186 } },
  taiyuan: { overview: { view: "front", x: 200, y: 236 }, detail: { view: "hand-palm", x: 120, y: 168 } },
  shenmen: { overview: { view: "front", x: 187, y: 236 }, detail: { view: "hand-palm", x: 80, y: 168 } },
  yangxi: { overview: { view: "front", x: 203, y: 240 }, detail: { view: "hand-back", x: 74, y: 164 } },
  hegu: { overview: { view: "front", x: 201, y: 250 }, detail: { view: "hand-back", x: 82, y: 96 } },
  laogong: { overview: { view: "front", x: 196, y: 254 }, detail: { view: "hand-palm", x: 100, y: 122 } },
  yuji: { overview: { view: "front", x: 202, y: 248 }, detail: { view: "hand-palm", x: 120, y: 132 } },
  houxi: { overview: { view: "front", x: 189, y: 253 }, detail: { view: "hand-back", x: 128, y: 122 } },
  shaoshang: { overview: { view: "front", x: 205, y: 244 }, detail: { view: "hand-palm", x: 122, y: 32 } },
  waiguan: { overview: { view: "back", x: 192, y: 224 }, detail: { view: "hand-back", x: 100, y: 204 } },
  zhigou: { overview: { view: "back", x: 193, y: 216 }, detail: { view: "hand-back", x: 100, y: 220 } },

  // --- leg & foot (left side of figure) ---
  liangqiu: { overview: { view: "front", x: 104, y: 322 }, detail: { view: "front", x: 104, y: 322 } },
  xuehai: { overview: { view: "front", x: 114, y: 322 }, detail: { view: "front", x: 114, y: 322 } },
  dubi: { overview: { view: "front", x: 108, y: 348 }, detail: { view: "front", x: 108, y: 348 } },
  zusanli: { overview: { view: "front", x: 110, y: 366 }, detail: { view: "front", x: 110, y: 366 } },
  yanglingquan: { overview: { view: "front", x: 100, y: 356 }, detail: { view: "front", x: 100, y: 356 } },
  yinlingquan: { overview: { view: "front", x: 115, y: 358 }, detail: { view: "front", x: 115, y: 358 } },
  diji: { overview: { view: "front", x: 113, y: 380 }, detail: { view: "front", x: 113, y: 380 } },
  fenglong: { overview: { view: "front", x: 106, y: 398 }, detail: { view: "front", x: 106, y: 398 } },
  xuanzhong: { overview: { view: "front", x: 99, y: 444 }, detail: { view: "front", x: 99, y: 444 } },
  sanyinjiao: { overview: { view: "front", x: 109, y: 444 }, detail: { view: "foot-inner", x: 150, y: 68 } },
  taixi: { overview: { view: "front", x: 104, y: 460 }, detail: { view: "foot-inner", x: 184, y: 118 } },
  zhaohai: { overview: { view: "front", x: 102, y: 466 }, detail: { view: "foot-inner", x: 170, y: 140 } },
  taichong: { overview: { view: "front", x: 100, y: 482 }, detail: { view: "foot-top", x: 106, y: 98 } },
  xingjian: { overview: { view: "front", x: 97, y: 490 }, detail: { view: "foot-top", x: 108, y: 66 } },
  neiting: { overview: { view: "front", x: 104, y: 488 }, detail: { view: "foot-top", x: 98, y: 70 } },
  zulinqi: { overview: { view: "front", x: 91, y: 486 }, detail: { view: "foot-top", x: 76, y: 108 } },
  yongquan: { overview: { view: "front", x: 91, y: 491 }, detail: { view: "foot-sole", x: 100, y: 92 } },
  weizhong: { overview: { view: "back", x: 104, y: 342 }, detail: { view: "back", x: 104, y: 342 } },
  chengshan: { overview: { view: "back", x: 102, y: 392 }, detail: { view: "back", x: 102, y: 392 } },
  kunlun: { overview: { view: "back", x: 99, y: 458 }, detail: { view: "back", x: 99, y: 458 } },
};
