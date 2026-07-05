import type { ViewId } from "../data/types";
import type { LS } from "../i18n";

// Hand-drawn schematic body views. Every view has its own viewBox; acupoint
// coordinates in data/coords.ts are expressed in these units. Style is a
// simple line figure — this is a location sketch, not an anatomy atlas.

export interface BodyView {
  viewBox: string;
  width: number;
  height: number;
  label: LS;
  /** SVG children (outline paths) — stroke/fill come from CSS. */
  art: React.ReactNode;
}

const P = (d: string, key?: string) => (
  <path key={key} d={d} className="body-line" />
);

export const BODY_VIEWS: Record<ViewId, BodyView> = {
  front: {
    viewBox: "0 0 200 460",
    width: 200,
    height: 460,
    label: { zh: "正面", en: "Front" },
    art: (
      <>
        {/* head + ears */}
        <circle cx="100" cy="36" r="22" className="body-line" />
        {P("M78 36 q-4 4 0 9", "earL")}
        {P("M122 36 q4 4 0 9", "earR")}
        {/* neck */}
        {P("M92 56 L92 70 M108 56 L108 70", "neck")}
        {/* torso outline */}
        {P(
          "M92 70 L64 80 Q56 83 54 92 L48 150 M108 70 L136 80 Q144 83 146 92 L152 150",
          "shoulders",
        )}
        {P(
          "M64 80 Q60 130 74 168 Q70 195 72 210 M136 80 Q140 130 126 168 Q130 195 128 210",
          "torso-sides",
        )}
        {/* collarbone + chest hint */}
        {P("M80 84 L96 88 M120 84 L104 88", "collar")}
        {P("M84 118 Q100 126 116 118", "chest")}
        {/* navel */}
        <circle cx="100" cy="168" r="2.4" className="body-line" />
        {/* pelvis */}
        {P("M72 210 Q100 224 128 210 M100 218 L100 232", "pelvis")}
        {/* arms (slightly out) */}
        {P(
          "M54 92 L44 150 L38 205 Q36 214 40 222 M48 150 L52 158 L46 208",
          "armL",
        )}
        {P(
          "M146 92 L156 150 L162 205 Q164 214 160 222 M152 150 L148 158 L154 208",
          "armR",
        )}
        {/* hands */}
        {P("M40 222 Q34 238 42 246 Q50 248 50 236 L46 208", "handL")}
        {P("M160 222 Q166 238 158 246 Q150 248 150 236 L154 208", "handR")}
        {/* legs */}
        {P(
          "M72 210 Q70 260 78 300 L80 360 L78 420 M100 232 Q98 268 92 300 L88 360 L86 420",
          "legL",
        )}
        {P(
          "M128 210 Q130 260 122 300 L120 360 L122 420 M100 232 Q102 268 108 300 L112 360 L114 420",
          "legR",
        )}
        {/* kneecaps */}
        {P("M80 296 q6 6 12 0 M108 296 q6 6 12 0", "knees")}
        {/* feet */}
        {P("M78 420 L74 438 Q76 444 90 442 L86 420", "footL")}
        {P("M122 420 L126 438 Q124 444 110 442 L114 420", "footR")}
      </>
    ),
  },

  back: {
    viewBox: "0 0 200 460",
    width: 200,
    height: 460,
    label: { zh: "背面", en: "Back" },
    art: (
      <>
        <circle cx="100" cy="36" r="22" className="body-line" />
        {P("M92 56 L92 70 M108 56 L108 70", "neck")}
        {P(
          "M92 70 L64 80 Q56 83 54 92 L48 150 M108 70 L136 80 Q144 83 146 92 L152 150",
          "shoulders",
        )}
        {P(
          "M64 80 Q60 130 74 168 Q70 195 72 212 M136 80 Q140 130 126 168 Q130 195 128 212",
          "torso-sides",
        )}
        {/* spine */}
        {P("M100 62 L100 200", "spine")}
        {/* shoulder blades */}
        {P("M74 96 Q84 112 78 128 M126 96 Q116 112 122 128", "scapulae")}
        {/* waist + sacrum */}
        {P("M74 168 L126 168 M88 200 Q100 210 112 200", "waist")}
        {/* hips */}
        {P("M72 212 Q100 228 128 212 M100 205 L100 224", "hips")}
        {/* arms + hands */}
        {P(
          "M54 92 L44 150 L38 205 Q36 214 40 222 M48 150 L52 158 L46 208",
          "armL",
        )}
        {P(
          "M146 92 L156 150 L162 205 Q164 214 160 222 M152 150 L148 158 L154 208",
          "armR",
        )}
        {P("M40 222 Q34 238 42 246 Q50 248 50 236 L46 208", "handL")}
        {P("M160 222 Q166 238 158 246 Q150 248 150 236 L154 208", "handR")}
        {/* legs */}
        {P(
          "M72 212 Q70 260 78 300 L80 360 L78 420 M100 224 Q98 268 92 300 L88 360 L86 420",
          "legL",
        )}
        {P(
          "M128 212 Q130 260 122 300 L120 360 L122 420 M100 224 Q102 268 108 300 L112 360 L114 420",
          "legR",
        )}
        {/* knee crease + calves */}
        {P("M82 298 L96 298 M104 298 L118 298", "knee-crease")}
        {P("M84 316 Q80 336 86 352 M116 316 Q120 336 114 352", "calves")}
        {/* heels */}
        {P("M78 420 L76 440 Q82 446 90 440 L86 420", "heelL")}
        {P("M122 420 L124 440 Q118 446 110 440 L114 420", "heelR")}
      </>
    ),
  },

  "head-front": {
    viewBox: "0 0 200 220",
    width: 200,
    height: 220,
    label: { zh: "臉部", en: "Face" },
    art: (
      <>
        {/* face oval + ears */}
        {P(
          "M100 22 Q152 22 152 92 Q152 138 128 162 Q114 174 100 174 Q86 174 72 162 Q48 138 48 92 Q48 22 100 22",
          "face",
        )}
        {P("M48 92 q-10 4 -6 18 q3 10 12 8 M152 92 q10 4 6 18 q-3 10 -12 8", "ears")}
        {/* hairline */}
        {P("M60 62 Q100 40 140 62", "hairline")}
        {/* brows */}
        {P("M66 88 Q80 82 92 88 M108 88 Q120 82 134 88", "brows")}
        {/* eyes */}
        {P("M70 100 Q80 94 90 100 Q80 106 70 100 M110 100 Q120 94 130 100 Q120 106 110 100", "eyes")}
        {/* nose */}
        {P("M100 100 L100 126 M92 132 Q100 138 108 132", "nose")}
        {/* mouth + chin */}
        {P("M84 150 Q100 158 116 150", "mouth")}
        {P("M94 166 Q100 170 106 166", "chin")}
      </>
    ),
  },

  "head-side": {
    viewBox: "0 0 200 220",
    width: 200,
    height: 220,
    label: { zh: "頭側/後", en: "Side of head" },
    art: (
      <>
        {/* profile facing left: skull, ear, neck */}
        {P(
          "M78 32 Q130 14 158 52 Q176 78 168 108 Q162 130 148 144 L146 168 Q120 176 112 168",
          "skull",
        )}
        {P(
          "M78 32 Q58 48 60 72 Q52 78 56 88 Q50 96 58 102 Q54 112 66 116 Q66 132 82 130 L92 126",
          "face-profile",
        )}
        {P("M92 126 Q100 140 112 168", "jaw")}
        {/* ear */}
        {P("M108 92 q-12 6 -6 20 q5 12 18 6 q8 -5 4 -16 q-4 -12 -16 -10", "ear")}
        {/* eye + brow hint */}
        {P("M66 74 Q74 70 82 74 M68 86 Q74 83 80 86", "eye")}
        {/* neck + hairline */}
        {P("M148 144 Q150 158 146 168 M112 168 L110 190 M146 168 L152 190", "neck")}
        {P("M96 36 Q140 30 156 64", "hairline")}
      </>
    ),
  },

  "hand-back": {
    viewBox: "0 0 200 240",
    width: 200,
    height: 240,
    label: { zh: "手背", en: "Back of hand" },
    art: (
      <>
        {/* right hand, fingers up, thumb on left; wrist + forearm below */}
        {P(
          "M64 128 Q60 96 68 70 L74 34 Q76 26 82 28 Q86 30 84 40 L80 74",
          "thumb",
        )}
        {P("M80 74 L82 24 Q84 14 91 16 Q96 18 95 28 L94 72", "index")}
        {P("M94 72 L96 14 Q98 4 105 6 Q110 8 109 18 L108 70", "middle")}
        {P("M108 70 L112 22 Q114 12 121 14 Q126 16 124 28 L120 74", "ring")}
        {P("M120 74 L128 40 Q131 32 137 35 Q141 38 138 46 L130 82", "pinky")}
        {/* palm back + wrist */}
        {P("M64 128 Q66 148 76 158 L124 158 Q134 146 130 82", "hand-body")}
        {P("M76 158 L74 200 M124 158 L126 200", "forearm")}
        {P("M74 172 L126 172", "wrist-crease")}
        {/* knuckle hints */}
        {P("M82 78 L118 76", "knuckles")}
      </>
    ),
  },

  "hand-palm": {
    viewBox: "0 0 200 280",
    width: 200,
    height: 280,
    label: { zh: "手心・前臂內側", en: "Palm & inner forearm" },
    art: (
      <>
        {/* left hand palm up, fingers up, thumb on right; forearm below */}
        {P(
          "M136 118 Q140 88 132 64 L126 30 Q124 22 118 24 Q114 26 116 36 L120 68",
          "thumb",
        )}
        {P("M120 68 L118 20 Q116 10 109 12 Q104 14 105 24 L106 66", "index")}
        {P("M106 66 L104 10 Q102 0 95 2 Q90 4 91 14 L92 64", "middle")}
        {P("M92 64 L88 18 Q86 8 79 10 Q74 12 76 24 L80 68", "ring")}
        {P("M80 68 L72 36 Q69 28 63 31 Q59 34 62 42 L70 76", "pinky")}
        {/* palm + creases */}
        {P("M136 118 Q134 142 124 152 L76 152 Q66 140 70 76", "palm")}
        {P("M78 96 Q100 108 126 92 M80 116 Q102 126 128 112", "palm-creases")}
        {/* wrist + long forearm (for neiguan/jianshi) */}
        {P("M76 152 L72 260 M124 152 L128 260", "forearm")}
        {P("M74 166 L126 166", "wrist-crease")}
        {/* tendon lines */}
        {P("M96 170 L94 252 M106 170 L108 252", "tendons")}
      </>
    ),
  },

  "foot-top": {
    viewBox: "0 0 200 240",
    width: 200,
    height: 240,
    label: { zh: "腳背", en: "Top of foot" },
    art: (
      <>
        {/* right foot seen from above, toes up */}
        {P("M74 226 L70 150 Q68 110 76 84", "outer-edge")}
        {P("M126 226 L132 150 Q136 116 128 88", "inner-edge")}
        {/* toes: big toe inner (right side) */}
        {P("M128 88 L126 52 Q126 42 116 42 Q108 42 108 54 L108 84", "big-toe")}
        {P("M108 84 L104 58 Q103 49 96 50 Q90 52 92 62 L94 84", "toe2")}
        {P("M94 84 L90 62 Q88 54 82 56 Q77 58 79 66 L82 88", "toe3")}
        {P("M82 88 L78 70 Q76 62 71 65 Q67 68 69 74 L72 92", "toe4")}
        {P("M72 92 L68 80 Q66 73 61 76 Q58 79 60 84 L64 96 Q68 90 76 84", "toe5")}
        {/* ankle */}
        {P("M74 226 Q100 236 126 226 M84 190 Q100 198 116 190", "ankle")}
        {/* tendon hint to big-toe gap */}
        {P("M112 86 Q112 120 108 150", "tendon")}
      </>
    ),
  },

  "foot-inner": {
    viewBox: "0 0 240 200",
    width: 240,
    height: 200,
    label: { zh: "腳內側・小腿", en: "Inner ankle & calf" },
    art: (
      <>
        {/* medial view: toes left, heel right, calf going up-right */}
        {P(
          "M20 150 Q12 158 20 168 Q70 182 130 178 Q175 176 198 164 Q206 144 200 124 L196 104",
          "sole-heel",
        )}
        {P("M20 150 L40 140 Q56 132 70 134", "toes")}
        {/* instep rising to ankle */}
        {P("M70 134 Q118 106 150 106", "instep")}
        {/* inner ankle bone */}
        <circle cx="168" cy="120" r="9" className="body-line" />
        {/* lower leg going up */}
        {P("M150 106 L144 20 M196 104 L188 20", "shin")}
        {/* tibia edge hint */}
        {P("M154 96 L148 28", "tibia")}
      </>
    ),
  },

  "foot-sole": {
    viewBox: "0 0 200 240",
    width: 200,
    height: 240,
    label: { zh: "腳底", en: "Sole" },
    art: (
      <>
        {/* sole seen flat, toes up */}
        {P(
          "M70 216 Q60 190 66 150 Q60 110 72 78 Q82 52 100 50 Q120 52 130 82 Q140 112 134 150 Q140 190 130 216 Q116 230 84 230 Q72 226 70 216",
          "sole-outline",
        )}
        {/* toes */}
        <circle cx="78" cy="42" r="9" className="body-line" />
        <circle cx="94" cy="34" r="7" className="body-line" />
        <circle cx="108" cy="32" r="6" className="body-line" />
        <circle cx="120" cy="35" r="6" className="body-line" />
        <circle cx="131" cy="42" r="5.5" className="body-line" />
        {/* ball + heel pads */}
        {P("M76 84 Q100 96 126 86", "ball")}
        {P("M84 196 Q100 204 118 196", "heel-pad")}
      </>
    ),
  },
};
