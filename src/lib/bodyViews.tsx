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
    viewBox: "0 0 240 500",
    width: 240,
    height: 500,
    label: { zh: "正面", en: "Front" },
    // Anatomical stance: arms held out from the body with a clear gap, legs
    // slightly apart. Centered on x=120. Coordinates in coords.ts follow this.
    art: (
      <>
        {/* head + ears */}
        <circle cx="120" cy="40" r="24" className="body-line" />
        {P("M96 40 q-4 4 0 10", "earL")}
        {P("M144 40 q4 4 0 10", "earR")}
        {/* neck */}
        {P("M110 61 L110 76 M130 61 L130 76", "neck")}
        {/* shoulders + torso sides (waist taper) */}
        {P(
          "M110 76 Q88 80 80 96 M130 76 Q152 80 160 96",
          "shoulders",
        )}
        {P(
          "M80 96 Q74 150 86 196 L92 236 M160 96 Q166 150 154 196 L148 236",
          "torso-sides",
        )}
        {/* collarbone + chest + navel */}
        {P("M96 88 L112 92 M144 88 L128 92", "collar")}
        {P("M98 128 Q120 138 142 128", "chest")}
        <circle cx="120" cy="188" r="2.6" className="body-line" />
        {/* pelvis / groin */}
        {P("M92 236 Q120 250 148 236 M120 244 L120 258", "pelvis")}
        {/* left arm: angled out, forearm away from body, ends in hand */}
        {P(
          "M80 96 Q60 110 52 150 L40 210 M80 110 Q68 150 60 208",
          "armL",
        )}
        {P("M40 210 L34 236 M60 208 L54 236", "forearmL")}
        {P("M34 236 Q30 258 40 266 Q52 268 52 254 L54 236 Z", "handL")}
        {/* right arm mirrored */}
        {P(
          "M160 96 Q180 110 188 150 L200 210 M160 110 Q172 150 180 208",
          "armR",
        )}
        {P("M200 210 L206 236 M180 208 L186 236", "forearmR")}
        {P("M206 236 Q210 258 200 266 Q188 268 188 254 L186 236 Z", "handR")}
        {/* left leg */}
        {P(
          "M92 240 Q86 300 96 340 L100 410 L96 470 M120 258 Q116 310 110 340 L106 410 L104 470",
          "legL",
        )}
        {/* right leg */}
        {P(
          "M148 240 Q154 300 144 340 L140 410 L144 470 M120 258 Q124 310 130 340 L134 410 L136 470",
          "legR",
        )}
        {/* kneecaps */}
        {P("M98 338 q7 6 13 0 M129 338 q7 6 13 0", "knees")}
        {/* feet */}
        {P("M96 470 L90 490 Q92 496 108 494 L104 470", "footL")}
        {P("M144 470 L150 490 Q148 496 132 494 L136 470", "footR")}
      </>
    ),
  },

  back: {
    viewBox: "0 0 240 500",
    width: 240,
    height: 500,
    label: { zh: "背面", en: "Back" },
    art: (
      <>
        <circle cx="120" cy="40" r="24" className="body-line" />
        {P("M110 61 L110 76 M130 61 L130 76", "neck")}
        {P("M110 76 Q88 80 80 96 M130 76 Q152 80 160 96", "shoulders")}
        {P(
          "M80 96 Q74 150 86 196 L92 238 M160 96 Q166 150 154 196 L148 238",
          "torso-sides",
        )}
        {/* spine + shoulder blades */}
        {P("M120 68 L120 224", "spine")}
        {P("M92 108 Q102 124 96 142 M148 108 Q138 124 144 142", "scapulae")}
        {/* waist + sacrum */}
        {P("M86 196 L154 196 M104 224 Q120 234 136 224", "waist")}
        {/* hips */}
        {P("M92 238 Q120 252 148 238 M120 230 L120 250", "hips")}
        {/* arms + hands (same stance as front) */}
        {P("M80 96 Q60 110 52 150 L40 210 M80 110 Q68 150 60 208", "armL")}
        {P("M40 210 L34 236 M60 208 L54 236", "forearmL")}
        {P("M34 236 Q30 258 40 266 Q52 268 52 254 L54 236 Z", "handL")}
        {P("M160 96 Q180 110 188 150 L200 210 M160 110 Q172 150 180 208", "armR")}
        {P("M200 210 L206 236 M180 208 L186 236", "forearmR")}
        {P("M206 236 Q210 258 200 266 Q188 268 188 254 L186 236 Z", "handR")}
        {/* legs */}
        {P(
          "M92 240 Q86 300 96 340 L100 410 L96 470 M120 258 Q116 310 110 340 L106 410 L104 470",
          "legL",
        )}
        {P(
          "M148 240 Q154 300 144 340 L140 410 L144 470 M120 258 Q124 310 130 340 L134 410 L136 470",
          "legR",
        )}
        {/* knee creases + calf hint */}
        {P("M98 338 L112 338 M128 338 L142 338", "knee-crease")}
        {P("M100 360 Q96 388 104 410 M140 360 Q144 388 136 410", "calves")}
        {/* heels */}
        {P("M96 470 L94 492 Q100 498 108 492 L104 470", "heelL")}
        {P("M144 470 L146 492 Q140 498 132 492 L136 470", "heelR")}
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
