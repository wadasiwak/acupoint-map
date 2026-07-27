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
  /**
   * Bone/crease reference layer (dashed, lighter): wrist creases, vertebra
   * ticks, malleoli… — what you palpate to find the point. Kept separate so
   * quiz/overview renders can hide it if it ever gives answers away.
   */
  landmarks?: React.ReactNode;
}

const P = (d: string, key?: string) => (
  <path key={key} d={d} className="body-line" />
);
/** Dashed landmark path (bone edge, crease, tendon). */
const LM = (d: string, key?: string) => (
  <path key={key} d={d} className="body-landmark" />
);
/** Tiny landmark label (vertebra codes etc. — language-neutral). */
const LT = (x: number, y: number, s: string, key?: string) => (
  <text key={key} x={x} y={y} className="landmark-label">
    {s}
  </text>
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

  elbow: {
    viewBox: "0 0 200 260",
    width: 200,
    height: 260,
    label: { zh: "手肘・前臂", en: "Elbow & forearm" },
    // Right arm, palm-side up, elbow at top, wrist at bottom; thumb side LEFT.
    art: (
      <>
        {P("M60 8 L56 62 M140 8 L144 62", "upper-arm")}
        {P("M56 62 Q52 66 52 72 M144 62 Q148 66 148 72", "elbow-sides")}
        {P("M52 72 Q56 130 68 182 L72 232 M148 72 Q144 130 132 182 L128 232", "forearm")}
        {P("M72 236 Q76 252 100 254 Q124 252 128 236", "hand-stub")}
      </>
    ),
    landmarks: (
      <>
        {LM("M52 72 Q100 82 148 72", "elbow-crease")}
        {LM("M104 44 L101 72", "biceps-tendon")}
        {LM("M70 228 Q100 235 130 228", "wrist-crease")}
      </>
    ),
  },

  "torso-front": {
    viewBox: "0 0 240 320",
    width: 240,
    height: 320,
    label: { zh: "胸腹", en: "Chest & abdomen" },
    art: (
      <>
        {P("M104 6 L104 24 M136 6 L136 24", "neck")}
        {P("M104 24 Q70 30 48 44 M136 24 Q170 30 192 44", "shoulders")}
        {P("M48 44 Q36 52 34 68 L42 100 M192 44 Q204 52 206 68 L198 100", "deltoids")}
        {P("M112 54 Q120 60 128 54", "sternal-notch")}
        {P("M64 70 Q58 150 70 212 Q66 262 78 302 M176 70 Q182 150 170 212 Q174 262 162 302", "torso-sides")}
        <circle cx="98" cy="108" r="2" className="body-line" />
        <circle cx="142" cy="108" r="2" className="body-line" />
        <circle cx="120" cy="200" r="3" className="body-line" />
        {P("M78 302 Q120 316 162 302", "hips")}
      </>
    ),
    landmarks: (
      <>
        {LM("M76 52 L112 60 M164 52 L128 60", "clavicles")}
        {LM("M120 60 L120 132", "sternum")}
        {LM("M120 132 Q100 160 80 174 M120 132 Q140 160 160 174", "rib-arch")}
        {LM("M120 140 L120 192 M120 208 L120 246", "abd-midline")}
        {LM("M104 252 Q120 260 136 252", "pubic-bone")}
      </>
    ),
  },

  knee: {
    viewBox: "0 0 200 260",
    width: 200,
    height: 260,
    label: { zh: "膝蓋周圍", en: "Around the knee" },
    // Left leg from the front: outer (fibula) side on the LEFT of the image.
    art: (
      <>
        {P("M64 6 Q62 50 70 88 M136 6 Q138 50 130 88", "thigh")}
        <ellipse cx="100" cy="110" rx="15" ry="17" className="body-line" />
        {P("M70 88 Q60 122 64 162 L70 252 M130 88 Q140 122 136 162 L130 252", "lower-leg")}
      </>
    ),
    landmarks: (
      <>
        {LM("M78 130 q5 5 10 0 M112 130 q5 5 10 0", "knee-eyes")}
        <circle cx="66" cy="146" r="5" className="body-landmark" key="fibula-head" />
        {LM("M95 152 q5 5 10 0", "tibial-tuberosity")}
        {LM("M100 160 L96 250", "tibia-crest")}
      </>
    ),
  },

  "lower-leg": {
    viewBox: "0 0 200 300",
    width: 200,
    height: 300,
    label: { zh: "小腿", en: "Lower leg" },
    // Left leg from the front: outer side LEFT, inner (tibia) side RIGHT.
    art: (
      <>
        {P("M72 8 Q58 60 64 130 Q68 200 76 254 M128 8 Q144 60 138 130 Q132 200 124 252", "calf")}
        {P("M70 272 Q100 286 128 268", "foot-stub")}
      </>
    ),
    landmarks: (
      <>
        {LM("M104 10 Q98 120 100 240", "tibia-crest")}
        <circle cx="124" cy="258" r="7" className="body-landmark" key="medial-malleolus" />
        <circle cx="76" cy="262" r="6" className="body-landmark" key="lateral-malleolus" />
      </>
    ),
  },

  "back-upper": {
    viewBox: "0 0 240 260",
    width: 240,
    height: 260,
    label: { zh: "肩背", en: "Shoulders & upper back" },
    art: (
      <>
        {P("M94 22 Q120 0 146 22", "head-base")}
        {P("M108 30 L106 56 M132 30 L134 56", "neck")}
        {P("M106 56 Q70 62 40 78 Q30 84 32 96 M134 56 Q170 62 200 78 Q210 84 208 96", "shoulders")}
        {P("M32 96 L44 142 M208 96 L196 142", "arms-outer")}
        {P("M58 100 L66 142 M182 100 L174 142", "arms-inner")}
        {P("M66 96 Q62 180 72 250 M174 96 Q178 180 168 250", "torso-sides")}
        {P("M120 60 L120 250", "spine")}
        {P("M104 108 L100 150 M136 108 L140 150", "scapula-borders")}
      </>
    ),
    landmarks: (
      <>
        <circle cx="120" cy="64" r="3.5" className="body-landmark" key="c7" />
        {LT(127, 62, "C7", "c7-label")}
        {LM("M116 80 L124 80 M116 92 L124 92 M116 104 L124 104 M116 116 L124 116 M116 128 L124 128 M116 140 L124 140 M116 152 L124 152", "spinous-ticks")}
        {LT(127, 107, "T3", "t3-label")}
        {LM("M64 98 L106 107 M176 98 L134 107", "scapular-spines")}
        <circle cx="44" cy="82" r="4" className="body-landmark" key="acromion-l" />
        <circle cx="196" cy="82" r="4" className="body-landmark" key="acromion-r" />
        {LM("M86 152 L154 152", "scapula-tip-line")}
        {LT(158, 155, "T7", "t7-label")}
      </>
    ),
  },

  "back-lower": {
    viewBox: "0 0 240 260",
    width: 240,
    height: 260,
    label: { zh: "腰・臀", en: "Lower back & hips" },
    art: (
      <>
        {P("M70 10 Q64 70 74 130 Q70 170 62 210 M170 10 Q176 70 166 130 Q170 170 178 210", "torso-sides")}
        {P("M120 10 L120 148", "spine")}
        {P("M104 150 Q120 146 136 150 L126 194 Q120 200 114 194 Z", "sacrum")}
        {P("M62 210 Q78 246 118 250 M178 210 Q162 246 122 250", "buttocks")}
      </>
    ),
    landmarks: (
      <>
        {LM("M116 60 L124 60 M116 74 L124 74 M116 88 L124 88 M116 102 L124 102 M116 116 L124 116 M116 130 L124 130", "spinous-ticks")}
        {LT(128, 86, "L2", "l2-label")}
        {LT(128, 114, "L4", "l4-label")}
        {LM("M66 124 Q92 112 116 116 M174 124 Q148 112 124 116", "iliac-crests")}
        <circle cx="127" cy="160" r="1.6" className="body-landmark" key="s1" />
        <circle cx="125" cy="170" r="1.6" className="body-landmark" key="s2" />
        <circle cx="123" cy="180" r="1.6" className="body-landmark" key="s3" />
        <circle cx="121" cy="188" r="1.6" className="body-landmark" key="s4" />
        {LT(134, 173, "S2", "s2-label")}
      </>
    ),
  },

  "leg-back": {
    viewBox: "0 0 200 300",
    width: 200,
    height: 300,
    label: { zh: "腿後側", en: "Back of the leg" },
    // Left leg from behind: outer (fibula) side on the RIGHT of the image.
    art: (
      <>
        {P("M70 8 Q66 40 72 74 M130 8 Q134 40 128 74", "thigh")}
        {P("M72 86 Q60 130 68 190 Q72 230 78 258 M128 86 Q140 130 132 190 Q128 230 122 258", "calf")}
        {P("M78 262 Q76 286 96 288 Q118 288 122 264", "heel")}
      </>
    ),
    landmarks: (
      <>
        {LM("M74 80 L126 80", "knee-crease")}
        {LM("M84 100 Q100 150 100 172 M116 100 Q100 150 100 172", "gastrocnemius-v")}
        {LM("M100 190 L100 256", "achilles")}
        <circle cx="130" cy="254" r="6" className="body-landmark" key="lateral-malleolus" />
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
