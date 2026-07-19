import type { MeridianInfo } from "./types";

// The 14 meridians (12 regular + Governing/Conception Vessels) plus the
// extra-point group, in the traditional circulation order (肺→大腸→胃→脾→心→
// 小腸→膀胱→腎→心包→三焦→膽→肝, then 督/任, extras last).
//
// Blurbs are original one-liners (40–80 zh chars) describing each meridian's
// course and what it is traditionally used for — no treatment claims beyond
// the wording already used elsewhere in the app.
//
// Point membership/ordering is NOT stored here: it is derived in data/index.ts
// from each point's international code (see pointsOfMeridian), because the
// standard numbering already follows the meridian's flow direction.
export const MERIDIANS: MeridianInfo[] = [
  {
    id: "lu",
    codePrefix: "LU",
    name: { zh: "手太陰肺經", en: "Lung meridian" },
    blurb: {
      zh: "起於胸中,沿手臂內側前緣走向拇指端。主呼吸與皮毛,咳嗽、氣喘、喉嚨不適等呼吸道問題常從肺經取穴。",
      en: "Runs from the chest along the inner arm to the thumb. Governs breathing — the go-to meridian for cough, wheeze, and sore throat.",
    },
  },
  {
    id: "li",
    codePrefix: "LI",
    name: { zh: "手陽明大腸經", en: "Large Intestine meridian" },
    blurb: {
      zh: "從食指端沿手臂外側前緣上行,經肩頸到對側鼻旁。頭面五官與腸胃問題常用,萬能穴合谷即在本經上。",
      en: "Ascends from the index finger along the outer arm to the opposite side of the nose. Used for head, face, and gut complaints — Hegu lives here.",
    },
  },
  {
    id: "st",
    codePrefix: "ST",
    name: { zh: "足陽明胃經", en: "Stomach meridian" },
    blurb: {
      zh: "從眼下經面頰、胸腹,沿腿部外側前緣下行到腳背第二趾。主消化受納,保健大穴足三里是本經代表。",
      en: "Descends from below the eye through the face and belly, down the front of the leg to the second toe. Governs digestion — home of Zusanli.",
    },
  },
  {
    id: "sp",
    codePrefix: "SP",
    name: { zh: "足太陰脾經", en: "Spleen meridian" },
    blurb: {
      zh: "起於足大趾內側,沿小腿與大腿內側上行入腹。主運化水穀與統血,消化不良、婦科調理常從脾經取穴。",
      en: "Rises from the big toe along the inner leg into the abdomen. Governs transforming food and fluids — used for digestion and women's health.",
    },
  },
  {
    id: "ht",
    codePrefix: "HT",
    name: { zh: "手少陰心經", en: "Heart meridian" },
    blurb: {
      zh: "從腋下沿手臂內側後緣走向小指端。主心神與血脈,安神要穴神門是失眠、心神不寧時的常用選擇。",
      en: "Runs from the armpit along the inner arm to the little finger. Governs the heart and spirit — Shenmen is the classic calming point.",
    },
  },
  {
    id: "si",
    codePrefix: "SI",
    name: { zh: "手太陽小腸經", en: "Small Intestine meridian" },
    blurb: {
      zh: "從小指端沿手臂外側後緣上行,繞行肩胛到耳前。落枕、肩背痠痛與耳部不適常從小腸經取穴。",
      en: "Ascends from the little finger along the back of the arm, winds over the shoulder blade to the ear. Used for stiff necks, shoulder aches, and ear issues.",
    },
  },
  {
    id: "bl",
    codePrefix: "BL",
    name: { zh: "足太陽膀胱經", en: "Bladder meridian" },
    blurb: {
      zh: "從內眼角上行過頭頂,沿背脊兩側一路下行至小趾,是全身最長的經絡,背部各臟腑俞穴都排列在其上。",
      en: "From the inner eye corner over the crown, down both sides of the spine to the little toe — the longest meridian, carrying the back-shu points.",
    },
  },
  {
    id: "ki",
    codePrefix: "KI",
    name: { zh: "足少陰腎經", en: "Kidney meridian" },
    blurb: {
      zh: "起於足底湧泉,繞內踝沿腿內側後緣上行入腹。主先天精氣與水液代謝,補腎固本常從腎經取穴。",
      en: "Starts at Yongquan on the sole, rounds the inner ankle and rises along the inner leg. Governs vitality and fluid balance — the tonifying meridian.",
    },
  },
  {
    id: "pc",
    codePrefix: "PC",
    name: { zh: "手厥陰心包經", en: "Pericardium meridian" },
    blurb: {
      zh: "從胸中沿手臂內側正中走向中指端。護衛心臟、寬胸理氣,內關是暈車、噁心與心悸的第一線用穴。",
      en: "Runs from the chest down the middle of the inner arm to the middle finger. Protects the heart — Neiguan is first aid for nausea and palpitations.",
    },
  },
  {
    id: "te",
    codePrefix: "TE",
    name: { zh: "手少陽三焦經", en: "Triple Energizer meridian" },
    blurb: {
      zh: "從無名指端沿手臂外側正中上行,繞耳周到眉梢。主氣機與水道通調,偏頭痛、耳鳴常用本經穴位。",
      en: "Ascends from the ring finger up the middle of the outer arm, circling the ear to the brow. Used for migraines, ear ringing, and qi-flow issues.",
    },
  },
  {
    id: "gb",
    codePrefix: "GB",
    name: { zh: "足少陽膽經", en: "Gallbladder meridian" },
    blurb: {
      zh: "從外眼角繞行頭側,沿身體與腿部外側下行至第四趾。主疏泄,偏頭痛、肩頸緊繃與脅肋不適常取膽經。",
      en: "Zigzags around the side of the head, then down the flank and outer leg to the fourth toe. Used for migraines, tight shoulders, and rib-side discomfort.",
    },
  },
  {
    id: "lr",
    codePrefix: "LR",
    name: { zh: "足厥陰肝經", en: "Liver meridian" },
    blurb: {
      zh: "起於足大趾,沿腿內側上行環繞陰部,分布脅肋。主疏肝理氣,情緒緊繃、經痛常從肝經取穴,太衝最具代表。",
      en: "Rises from the big toe along the inner leg to the ribs. Governs the free flow of qi — Taichong is the classic point for stress and cramps.",
    },
  },
  {
    id: "gv",
    codePrefix: "GV",
    name: { zh: "督脈", en: "Governing Vessel" },
    blurb: {
      zh: "沿背脊正中一路上行,過頭頂到上唇,總督一身陽氣。提神醒腦、強腰健脊常從督脈取穴,百會為其要穴。",
      en: "Climbs the midline of the spine, over the crown to the upper lip — commander of yang. Used to lift alertness and strengthen the back; Baihui is its star.",
    },
  },
  {
    id: "cv",
    codePrefix: "CV",
    name: { zh: "任脈", en: "Conception Vessel" },
    blurb: {
      zh: "沿身體前正中線從下腹上行到下唇,總任一身陰氣。調理腸胃、婦科與元氣虛弱,常取任脈腹部諸穴。",
      en: "Runs up the front midline from the lower belly to the chin — sea of yin. Its abdominal points are used for digestion, women's health, and low energy.",
    },
  },
  {
    id: "ex",
    codePrefix: "EX",
    name: { zh: "經外奇穴", en: "Extra points" },
    blurb: {
      zh: "不屬於十四經的常用效穴,各有固定位置與專長主治,如印堂安神、太陽穴緩解頭痛,臨床沿用已久。",
      en: "Well-known points outside the fourteen meridians, each with a fixed spot and specialty — like Yintang for calming and Taiyang for headaches.",
    },
  },
];
