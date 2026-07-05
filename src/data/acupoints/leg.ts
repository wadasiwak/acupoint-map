import type { Acupoint } from "../types";

export const ACUPOINTS_LEG: Acupoint[] = [
  {
    id: "zusanli",
    code: "ST36",
    name: { zh: "足三里", en: "Zusanli (Leg Three Miles)" },
    meridian: { zh: "足陽明胃經", en: "Stomach meridian" },
    region: "leg",
    howToFind: {
      zh: "正坐屈膝，從膝蓋外側下方的凹陷（外膝眼）往下量四橫指，再往脛骨外側移一橫指，按壓有痠脹感處即是。",
      en: "Sit with the knee bent. From the hollow below the outer edge of the kneecap, measure four finger-widths down, then one finger-width outward from the shin bone; the spot feels pleasantly sore when pressed.",
    },
    howToPress: {
      zh: "以拇指指腹垂直按壓，力道以痠脹為度，按5秒、鬆2秒，重複1～3分鐘，兩腿都按。",
      en: "Press straight in with the thumb pad until you feel a comfortable ache; hold 5 seconds, release 2 seconds, and repeat for 1–3 minutes on each leg.",
    },
    goodFor: {
      zh: "調理腸胃、幫助消化，是日常保健、補充體力的經典要穴。",
      en: "A classic wellness point for supporting digestion, stomach comfort, and overall stamina.",
    },
  },
  {
    id: "sanyinjiao",
    code: "SP6",
    name: { zh: "三陰交", en: "Sanyinjiao (Three Yin Intersection)" },
    meridian: { zh: "足太陰脾經", en: "Spleen meridian" },
    region: "leg",
    howToFind: {
      zh: "小腿內側，從內踝尖最高點往上量四橫指，在脛骨內側緣後方的凹陷處，按壓有明顯痠脹感。",
      en: "On the inner lower leg, measure four finger-widths up from the tip of the inner ankle bone; the point lies in the depression just behind the inner edge of the shin bone.",
    },
    howToPress: {
      zh: "以拇指指腹按揉，力道適中即可，每次1～3分鐘，兩腿輪流按。",
      en: "Knead with the thumb pad at moderate pressure for 1–3 minutes, alternating legs.",
    },
    goodFor: {
      zh: "常用於女性經期調理，也有助於消化與睡眠的日常保養。",
      en: "Traditionally used for menstrual comfort, and as everyday support for digestion and sleep.",
    },
    cautions: {
      zh: "🤰 孕婦禁按：傳統認為此穴可能引發子宮收縮，懷孕期間請勿按壓。皮膚破損處也不宜按壓。",
      en: "🤰 Do not press during pregnancy: this point is traditionally believed to stimulate uterine contractions. Avoid pressing on broken skin.",
    },
  },
  {
    id: "yinlingquan",
    code: "SP9",
    name: { zh: "陰陵泉", en: "Yinlingquan (Yin Mound Spring)" },
    meridian: { zh: "足太陰脾經", en: "Spleen meridian" },
    region: "leg",
    howToFind: {
      zh: "沿小腿內側的脛骨內緣由下往上推，推到膝蓋下方骨頭轉彎處會卡住，該處凹陷即是，按壓痠脹。",
      en: "Slide a thumb up along the inner edge of the shin bone; it stops in a hollow where the bone curves just below the knee — that depression is the point.",
    },
    howToPress: {
      zh: "以拇指指腹按揉或畫圈，力道由輕到中等，每次1～3分鐘，兩腿都按。",
      en: "Knead or make small circles with the thumb pad, light to moderate pressure, 1–3 minutes per leg.",
    },
    goodFor: {
      zh: "傳統用於消水腫、幫助消化，也常用於膝蓋內側的保養。",
      en: "Traditionally used to ease water retention and support digestion; also a common point for inner-knee care.",
    },
  },
  {
    id: "yanglingquan",
    code: "GB34",
    name: { zh: "陽陵泉", en: "Yanglingquan (Yang Mound Spring)" },
    meridian: { zh: "足少陽膽經", en: "Gallbladder meridian" },
    region: "leg",
    howToFind: {
      zh: "小腿外側，膝蓋下方可摸到一個圓形骨頭突起（腓骨小頭），其前下方的凹陷處即是，按壓痠脹。",
      en: "On the outer lower leg, feel for the small round bony bump below the knee (head of the fibula); the point sits in the hollow just in front of and below it.",
    },
    howToPress: {
      zh: "以拇指指腹按壓或揉動，力道以痠脹為度，每次1～3分鐘，兩腿都按。",
      en: "Press or knead with the thumb pad until you feel a mild ache, 1–3 minutes on each leg.",
    },
    goodFor: {
      zh: "傳統的「筋會」穴，常用於肌肉筋膜緊繃、小腿抽筋與膝蓋外側的保養。",
      en: "The traditional gathering point for the sinews; often used for tight muscles, calf cramps, and outer-knee care.",
    },
  },
  {
    id: "xuehai",
    code: "SP10",
    name: { zh: "血海", en: "Xuehai (Sea of Blood)" },
    meridian: { zh: "足太陰脾經", en: "Spleen meridian" },
    region: "leg",
    howToFind: {
      zh: "坐姿屈膝，用對側手掌心蓋住膝蓋骨、手指朝大腿方向，拇指尖落在大腿內側肌肉隆起處即是。",
      en: "Sit with the knee bent and cup the kneecap with the opposite palm, fingers pointing up the thigh; the point is where the thumb tip rests on the bulge of the inner thigh muscle.",
    },
    howToPress: {
      zh: "以拇指指腹按揉，力道適中，每次1～3分鐘，兩腿都按。",
      en: "Knead with the thumb pad at moderate pressure for 1–3 minutes on each leg.",
    },
    goodFor: {
      zh: "傳統用於女性經期的日常調理，也常用於皮膚搔癢時的保健按摩。",
      en: "Traditionally used for everyday menstrual care, and as a wellness point when skin feels itchy.",
    },
  },
  {
    id: "liangqiu",
    code: "ST34",
    name: { zh: "梁丘", en: "Liangqiu (Beam Hill)" },
    meridian: { zh: "足陽明胃經", en: "Stomach meridian" },
    region: "leg",
    howToFind: {
      zh: "腿伸直繃緊時，從膝蓋骨外上角往大腿方向量約三橫指，在肌肉間的凹陷處，按壓有痠脹感。",
      en: "With the leg straight and thigh tensed, measure about three finger-widths up from the upper outer corner of the kneecap; the point lies in a depression between the muscles there.",
    },
    howToPress: {
      zh: "以拇指指腹垂直按壓，按5秒、鬆2秒，重複1～3分鐘，兩腿都按。",
      en: "Press straight in with the thumb pad, holding 5 seconds and releasing 2, for 1–3 minutes on each leg.",
    },
    goodFor: {
      zh: "傳統上是胃部突發不適時的常用穴，也用於膝蓋的日常保養。",
      en: "A traditional go-to point for sudden stomach discomfort, and for everyday knee care.",
    },
  },
  {
    id: "weizhong",
    code: "BL40",
    name: { zh: "委中", en: "Weizhong (Bend Middle)" },
    meridian: { zh: "足太陽膀胱經", en: "Bladder meridian" },
    region: "leg",
    howToFind: {
      zh: "膝蓋後方膕窩橫紋的正中央，位於兩條大筋之間；膝蓋微彎時橫紋較明顯，比較容易找。",
      en: "At the exact midpoint of the crease behind the knee, between the two prominent tendons; bend the knee slightly to make the crease easier to see.",
    },
    howToPress: {
      zh: "只用指腹輕柔按揉，力道要輕，每次約1分鐘即可，切勿用力深壓或敲打。",
      en: "Use only gentle kneading with the finger pads for about 1 minute at a time; never press deeply or strike this area.",
    },
    goodFor: {
      zh: "傳統有「腰背委中求」之說，常用於腰背痠痛與膝後緊繃的保健。",
      en: "A classic companion point for low back tension and tightness behind the knee.",
    },
    cautions: {
      zh: "膕窩內血管與神經密集，只可輕按、不可重壓或敲打；有靜脈曲張或皮膚破損時請勿按壓。",
      en: "The back of the knee is rich in blood vessels and nerves — press lightly only, never deeply or with percussion. Avoid if you have varicose veins or broken skin here.",
    },
  },
  {
    id: "chengshan",
    code: "BL57",
    name: { zh: "承山", en: "Chengshan (Supporting Mountain)" },
    meridian: { zh: "足太陽膀胱經", en: "Bladder meridian" },
    region: "leg",
    howToFind: {
      zh: "小腿後側正中線上，踮起腳尖時小腿肚下方會出現「人」字形凹陷，其尖端處即是，按壓痠脹。",
      en: "On the midline of the back of the calf: rise onto tiptoes and the calf muscle forms an upside-down V; the point sits at the tip of that hollow.",
    },
    howToPress: {
      zh: "以拇指指腹按揉，力道由輕到中等，每次1～3分鐘；小腿抽筋時可邊按邊輕輕伸展。",
      en: "Knead with the thumb pad, light to moderate pressure, 1–3 minutes; during a calf cramp, press while gently stretching the calf.",
    },
    goodFor: {
      zh: "小腿抽筋、久站久走後小腿痠脹時的常用保健穴。",
      en: "A common wellness point for calf cramps and heavy, aching calves after long standing or walking.",
    },
    cautions: {
      zh: "小腿有明顯靜脈曲張或皮膚破損時，請勿按壓該處。",
      en: "Do not press over visible varicose veins or broken skin on the calf.",
    },
  },
  {
    id: "kunlun",
    code: "BL60",
    name: { zh: "崑崙", en: "Kunlun (Kunlun Mountains)" },
    meridian: { zh: "足太陽膀胱經", en: "Bladder meridian" },
    region: "leg",
    howToFind: {
      zh: "腳踝外側，外踝尖最高點與後方阿基里斯腱之間的凹陷處即是，按壓有痠脹感，兩腳皆有。",
      en: "On the outer ankle, in the hollow between the highest point of the outer ankle bone and the Achilles tendon behind it; it feels sore when pressed.",
    },
    howToPress: {
      zh: "以拇指與食指前後夾住腳踝，用拇指指腹按揉此凹陷，力道適中，每次約1分鐘。",
      en: "Pinch the ankle between thumb and index finger and knead the hollow with the thumb pad at moderate pressure, about 1 minute at a time.",
    },
    goodFor: {
      zh: "常用於腳踝痠痛的保養，傳統也用於頭頸、腰背緊繃的搭配按摩。",
      en: "Often used for ankle soreness, and traditionally paired with other points for neck and back tension.",
    },
    cautions: {
      zh: "🤰 孕婦禁按或應特別謹慎：傳統認為此穴可能影響胎氣，懷孕期間請避免按壓。",
      en: "🤰 Avoid or use with great caution during pregnancy: this point is traditionally considered unsafe for expectant mothers.",
    },
  },
  {
    id: "taixi",
    code: "KI3",
    name: { zh: "太谿", en: "Taixi (Supreme Stream)" },
    meridian: { zh: "足少陰腎經", en: "Kidney meridian" },
    region: "leg",
    howToFind: {
      zh: "腳踝內側，內踝尖最高點與後方阿基里斯腱之間的凹陷處即是，有時可摸到輕微的脈搏跳動。",
      en: "On the inner ankle, in the hollow between the highest point of the inner ankle bone and the Achilles tendon; you may feel a faint pulse there.",
    },
    howToPress: {
      zh: "以拇指指腹輕輕按揉，力道溫和，每次1～3分鐘，兩腳都按。",
      en: "Knead gently with the thumb pad at soft pressure for 1–3 minutes on each foot.",
    },
    goodFor: {
      zh: "腎經的原穴，常用於腰膝痠軟、耳鳴、手腳冰冷的日常保養。",
      en: "The source point of the Kidney meridian; used in daily care for weak, achy lower back and knees, ringing ears, and cold hands and feet.",
    },
  },
  {
    id: "zhaohai",
    code: "KI6",
    name: { zh: "照海", en: "Zhaohai (Shining Sea)" },
    meridian: { zh: "足少陰腎經", en: "Kidney meridian" },
    region: "leg",
    howToFind: {
      zh: "正坐或盤腿，在腳踝內側找到內踝尖最高點，往正下方約一拇指寬的凹陷處即是，按壓有痠脹感。",
      en: "Sitting comfortably, find the highest point of the inner ankle bone, then move about one thumb-width straight down into the small hollow below it.",
    },
    howToPress: {
      zh: "以拇指指腹輕輕按揉，力道溫和，每次1～3分鐘，兩腳都按。",
      en: "Knead gently with the thumb pad at soft pressure for 1–3 minutes on each foot.",
    },
    goodFor: {
      zh: "傳統用於咽喉乾燥不適與睡眠的日常調理。",
      en: "Traditionally used for a dry, scratchy throat and as everyday support for sleep.",
    },
  },
  {
    id: "taichong",
    code: "LR3",
    name: { zh: "太衝", en: "Taichong (Great Surge)" },
    meridian: { zh: "足厥陰肝經", en: "Liver meridian" },
    region: "leg",
    howToFind: {
      zh: "腳背上，沿大拇趾與第二趾之間的趾縫往腳背方向推，推到兩根骨頭交會前的凹陷處即是，按壓痠脹。",
      en: "On the top of the foot, slide a finger from the web between the big and second toes toward the ankle; the point sits in the hollow just before the two foot bones meet.",
    },
    howToPress: {
      zh: "以拇指指腹朝腳踝方向按揉，力道以痠脹為度，每次1～3分鐘，兩腳都按。",
      en: "Knead with the thumb pad, angling slightly toward the ankle, until you feel a mild ache; 1–3 minutes on each foot.",
    },
    goodFor: {
      zh: "傳統疏肝解鬱的代表穴，常用於壓力大、情緒緊繃、頭脹與眼睛疲勞的放鬆保健。",
      en: "The classic point for easing stress and tension; often used for relaxation when feeling irritable, with a tight head or tired eyes.",
    },
  },
  {
    id: "xingjian",
    code: "LR2",
    name: { zh: "行間", en: "Xingjian (Moving Between)" },
    meridian: { zh: "足厥陰肝經", en: "Liver meridian" },
    region: "leg",
    howToFind: {
      zh: "腳背上，大拇趾與第二趾的趾縫末端，趾蹼邊緣後方、腳背與腳底皮膚交界（赤白肉際）處即是。",
      en: "On the top of the foot, at the end of the web between the big and second toes, just behind the edge of the webbing where the top-of-foot skin meets the sole skin.",
    },
    howToPress: {
      zh: "以拇指指尖或指腹按揉，力道適中，每次約1分鐘，兩腳都按。",
      en: "Knead with the thumb tip or pad at moderate pressure for about 1 minute on each foot.",
    },
    goodFor: {
      zh: "傳統用於眼睛紅癢、口苦、心浮氣躁時的清熱保健按摩。",
      en: "Traditionally used as a cooling wellness point for red itchy eyes, a bitter taste in the mouth, and restless irritability.",
    },
  },
  {
    id: "yongquan",
    code: "KI1",
    name: { zh: "湧泉", en: "Yongquan (Gushing Spring)" },
    meridian: { zh: "足少陰腎經", en: "Kidney meridian" },
    region: "leg",
    howToFind: {
      zh: "腳底前三分之一的中央處，將腳趾用力向下蜷起時，足底出現的最明顯凹陷即是。",
      en: "On the sole, about one-third of the way from the toes to the heel, in the deepest hollow that appears when you curl the toes downward.",
    },
    howToPress: {
      zh: "以拇指指腹按揉，或用掌心來回搓熱足底，每次2～3分鐘，睡前按尤佳。",
      en: "Knead with the thumb pad, or rub the sole briskly with the palm until warm, 2–3 minutes per foot; especially pleasant before bed.",
    },
    goodFor: {
      zh: "傳統用於安神助眠與足心冰冷的保養，睡前搓揉有助放鬆。",
      en: "Traditionally used to calm the mind, support sleep, and warm cold soles; rubbing it before bed aids relaxation.",
    },
  },
  {
    id: "fenglong",
    code: "ST40",
    name: { zh: "豐隆", en: "Fenglong (Abundant Bulge)" },
    meridian: { zh: "足陽明胃經", en: "Stomach meridian" },
    region: "leg",
    howToFind: {
      zh: "小腿外側，先找外踝尖與膝蓋外側凹陷（外膝眼）連線的中點，再從脛骨前緣往外量兩橫指處即是。",
      en: "On the outer lower leg, find the midpoint between the tip of the outer ankle bone and the hollow at the outer knee, then move two finger-widths outward from the front edge of the shin bone.",
    },
    howToPress: {
      zh: "以拇指指腹按壓或揉動，力道以痠脹為度，每次1～3分鐘，兩腿都按。",
      en: "Press or knead with the thumb pad until mildly sore, 1–3 minutes on each leg.",
    },
    goodFor: {
      zh: "傳統的化痰要穴，常用於痰多、喉嚨有痰與頭重昏沉時的保健。",
      en: "The classic point for resolving phlegm; used when the throat feels phlegmy or the head feels heavy and foggy.",
    },
  },
  {
    id: "xuanzhong",
    code: "GB39",
    name: { zh: "懸鐘", en: "Xuanzhong (Suspended Bell)" },
    meridian: { zh: "足少陽膽經", en: "Gallbladder meridian" },
    region: "leg",
    howToFind: {
      zh: "小腿外側，從外踝尖最高點往上量四橫指，緊貼腓骨前緣的凹陷處即是，按壓有痠脹感。",
      en: "On the outer lower leg, measure four finger-widths up from the tip of the outer ankle bone; the point lies in the depression just in front of the fibula bone.",
    },
    howToPress: {
      zh: "以拇指指腹按揉，力道適中，每次1～3分鐘，兩腿都按。",
      en: "Knead with the thumb pad at moderate pressure for 1–3 minutes on each leg.",
    },
    goodFor: {
      zh: "傳統的「髓會」穴，常用於頸項僵硬與下肢痠軟無力的日常保養。",
      en: "The traditional gathering point of the marrow; used in daily care for a stiff neck and tired, weak-feeling legs.",
    },
  },
  {
    id: "neiting",
    code: "ST44",
    name: { zh: "內庭", en: "Neiting (Inner Court)" },
    meridian: { zh: "足陽明胃經", en: "Stomach meridian" },
    region: "leg",
    howToFind: {
      zh: "腳背上，第二、三趾的趾縫末端，趾蹼邊緣後方、腳背與腳底皮膚交界處即是，按壓有脹痛感。",
      en: "On the top of the foot, at the end of the web between the second and third toes, just behind the edge of the webbing where the skin tones change.",
    },
    howToPress: {
      zh: "以拇指指尖按壓或小幅揉動，力道適中，每次約1分鐘，兩腳都按。",
      en: "Press or make small kneading motions with the thumb tip at moderate pressure, about 1 minute on each foot.",
    },
    goodFor: {
      zh: "傳統用於清胃火，常用於牙齦腫痛、口氣重與腸胃脹的保健。",
      en: "Traditionally used to clear stomach heat; a wellness point for gum soreness, bad breath, and a bloated stomach.",
    },
  },
  {
    id: "dubi",
    code: "ST35",
    name: { zh: "犢鼻", en: "Dubi (Calf's Nose)" },
    meridian: { zh: "足陽明胃經", en: "Stomach meridian" },
    region: "leg",
    howToFind: {
      zh: "屈膝時，膝蓋骨下方外側會出現一個明顯凹陷（俗稱外膝眼），凹陷中央即是此穴。",
      en: "Bend the knee: a clear hollow appears just below and to the outside of the kneecap (the outer knee eye); the point is at the center of that hollow.",
    },
    howToPress: {
      zh: "以拇指或食指指腹輕柔按揉凹陷處，力道由輕到中等，每次1～3分鐘。",
      en: "Gently knead the hollow with the thumb or index finger pad, light to moderate pressure, 1–3 minutes at a time.",
    },
    goodFor: {
      zh: "膝蓋痠痛、活動不順時的常用局部保健穴。",
      en: "A common local wellness point for achy knees and stiffness with movement.",
    },
    cautions: {
      zh: "膝蓋腫脹發熱或皮膚破損時請勿按壓，並建議先就醫確認原因。",
      en: "Do not press if the knee is swollen, hot, or the skin is broken; have such symptoms checked by a doctor first.",
    },
  },
  {
    id: "diji",
    code: "SP8",
    name: { zh: "地機", en: "Diji (Earth Pivot)" },
    meridian: { zh: "足太陰脾經", en: "Spleen meridian" },
    region: "leg",
    howToFind: {
      zh: "小腿內側，先找膝下脛骨內側轉彎處的陰陵泉，往下量四橫指，在脛骨內側緣後方即是，按壓痠脹。",
      en: "On the inner lower leg, first find Yinlingquan in the hollow below the knee where the shin bone curves, then measure four finger-widths down; the point lies just behind the inner edge of the shin bone.",
    },
    howToPress: {
      zh: "以拇指指腹按揉，力道適中，每次1～3分鐘，兩腿都按。",
      en: "Knead with the thumb pad at moderate pressure for 1–3 minutes on each leg.",
    },
    goodFor: {
      zh: "傳統用於女性經期腹部不適的調理，也用於消化的日常保健。",
      en: "Traditionally used for menstrual abdominal discomfort, and as everyday support for digestion.",
    },
  },
  {
    id: "zulinqi",
    code: "GB41",
    name: { zh: "足臨泣", en: "Zulinqi (Foot Overlooking Tears)" },
    meridian: { zh: "足少陽膽經", en: "Gallbladder meridian" },
    region: "leg",
    howToFind: {
      zh: "腳背外側，沿第四、五趾之間的趾縫往腳背方向推，推到兩骨交會前的凹陷處，小趾伸肌腱外側即是。",
      en: "On the outer top of the foot, slide a finger from the web between the fourth and little toes toward the ankle; the point sits in the hollow before the two foot bones meet, on the outer side of the little-toe tendon.",
    },
    howToPress: {
      zh: "以拇指指尖或指腹按揉，力道以痠脹為度，每次約1分鐘，兩腳都按。",
      en: "Knead with the thumb tip or pad until mildly sore, about 1 minute on each foot.",
    },
    goodFor: {
      zh: "偏頭痛、側腰脅肋緊繃與眼睛不適時常用的遠端搭配穴。",
      en: "A common distal companion point for migraines, tightness along the side of the torso, and eye discomfort.",
    },
  },
];
