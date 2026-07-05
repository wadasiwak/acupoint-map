import type { Acupoint } from "../types";

export const ACUPOINTS_HEAD: Acupoint[] = [
  {
    id: "baihui",
    code: "GV20",
    name: { zh: "百會", en: "Baihui (Hundred Meetings)" },
    meridian: { zh: "督脈", en: "Governing Vessel" },
    region: "head",
    howToFind: {
      zh: "位於頭頂正中央。以雙手拇指按住左右耳尖，兩手中指往頭頂延伸相碰之處，即兩耳尖連線與頭部正中線的交點，輕壓會有些微凹陷與痠脹感。",
      en: "At the very top of the head. Place your thumbs on the tips of both ears and stretch your middle fingers up until they meet at the crown — where the line between the ear tips crosses the head's midline. You'll feel a slight dip and tenderness.",
    },
    howToPress: {
      zh: "用中指或食指指腹垂直向下輕柔按揉，每次 1-2 分鐘，以有痠脹感為度；也可用指腹輕敲頭頂提神。",
      en: "Use the pad of your middle or index finger to press straight down and knead gently for 1-2 minutes, until you feel mild soreness. You can also tap the crown lightly with your fingertips to feel refreshed.",
    },
    goodFor: {
      zh: "有助提神醒腦、舒緩頭痛與頭暈，讓思緒更清晰。",
      en: "Helps refresh the mind, ease headaches and dizziness, and support mental clarity.",
    },
  },
  {
    id: "yintang",
    code: "EX-HN3",
    name: { zh: "印堂", en: "Yintang (Hall of Impression)" },
    meridian: { zh: "經外奇穴", en: "Extra Point" },
    region: "head",
    howToFind: {
      zh: "位於兩眉頭連線的正中點，也就是俗稱「眉心」的位置。對著鏡子找到左右眉毛的內側端，兩點連線的中央即是，輕壓時額頭會有微微的痠脹感。",
      en: "At the midpoint between the inner ends of the two eyebrows — the spot commonly called the brow center. Looking in a mirror, find the inner tip of each eyebrow; the point sits exactly between them and feels mildly tender when pressed.",
    },
    howToPress: {
      zh: "用食指或中指指腹輕柔畫圈按揉 1-2 分鐘，或由眉心向兩側眉毛方向輕輕推抹，力道宜輕，以放鬆舒適為度。",
      en: "Massage in small gentle circles with the pad of your index or middle finger for 1-2 minutes, or stroke lightly outward from the brow center toward each eyebrow. Keep the pressure light and relaxing.",
    },
    goodFor: {
      zh: "有助放鬆心情、舒緩前額頭痛與鼻塞，幫助入睡。",
      en: "Helps calm the mind, ease frontal headaches and nasal congestion, and support falling asleep.",
    },
  },
  {
    id: "taiyang",
    code: "EX-HN5",
    name: { zh: "太陽", en: "Taiyang (Supreme Yang)" },
    meridian: { zh: "經外奇穴", en: "Extra Point" },
    region: "head",
    howToFind: {
      zh: "位於頭部兩側的太陽穴。先找到眉毛外側端與外眼角，兩點連線中點往後約一橫指寬處的凹陷即是本穴，咬牙時附近肌肉會微微鼓動。",
      en: "On the temple at each side of the head. Find the midpoint between the outer end of the eyebrow and the outer corner of the eye, then move back about one finger-width into the shallow depression. The muscle nearby moves slightly when you clench your teeth.",
    },
    howToPress: {
      zh: "用食指或中指指腹以畫圈方式輕柔按揉，每次約 1 分鐘，兩側可同時進行；太陽穴部位較敏感，力道務必輕柔。",
      en: "Knead gently in small circles with the pads of your index or middle fingers for about 1 minute, both sides at once if you like. The temples are sensitive, so keep the pressure soft.",
    },
    goodFor: {
      zh: "有助舒緩頭痛、偏頭痛與眼睛疲勞，讓頭部感覺輕鬆。",
      en: "Helps relieve headaches, migraines, and eye strain, leaving the head feeling lighter.",
    },
    cautions: {
      zh: "太陽穴部位骨質較薄且神經豐富，只可用指腹輕柔按揉，切勿用力重壓或敲擊。",
      en: "The temple area is thin-boned and rich in nerves. Use only gentle fingertip pressure — never press hard or strike this area.",
    },
  },
  {
    id: "cuanzhu",
    code: "BL2",
    name: { zh: "攢竹", en: "Cuanzhu (Gathered Bamboo)" },
    meridian: { zh: "足太陽膀胱經", en: "Bladder Meridian" },
    region: "head",
    howToFind: {
      zh: "位於眉頭內側端的凹陷處。用指尖沿著眉毛從外往內滑到眉頭，會摸到眉骨內側一個小凹陷，輕壓有明顯痠脹感，左右各一。",
      en: "In the small notch at the inner end of each eyebrow. Slide a fingertip along the eyebrow toward the nose until you feel a slight dip in the brow bone; pressing it gives a distinct sore, achy feeling. One on each side.",
    },
    howToPress: {
      zh: "閉上眼睛，用食指指腹在眉頭凹陷處極輕柔地按揉約 1 分鐘，或以拇指指腹沿眉骨由內向外輕推，力道要非常輕。",
      en: "Close your eyes and use the pad of your index finger to knead the notch very gently for about 1 minute, or stroke outward along the brow bone with your thumb pads. Keep the pressure very light.",
    },
    goodFor: {
      zh: "有助舒緩眼睛疲勞、前額頭痛與眉稜骨一帶的不適。",
      en: "Helps ease eye strain, frontal headaches, and discomfort around the brow bone.",
    },
    cautions: {
      zh: "位於眼周，按壓時力道必須極輕，只按眉骨上的凹陷處，切勿壓迫到眼球本身。",
      en: "This point is near the eye. Use only extremely light pressure on the brow-bone notch itself, and never press on the eyeball.",
    },
  },
  {
    id: "jingming",
    code: "BL1",
    name: { zh: "睛明", en: "Jingming (Bright Eyes)" },
    meridian: { zh: "足太陽膀胱經", en: "Bladder Meridian" },
    region: "head",
    howToFind: {
      zh: "位於內眼角稍上方、靠近鼻樑的小凹陷處。閉上眼睛，用指尖從內眼角往鼻樑方向輕摸，在眼窩內側緣與鼻樑之間可感覺到一個細小凹陷，左右各一。",
      en: "In the tiny hollow just above the inner corner of the eye, next to the bridge of the nose. With eyes closed, feel gently from the inner eye corner toward the nose; the point sits in the small dip between the inner edge of the eye socket and the nasal bridge. One on each side.",
    },
    howToPress: {
      zh: "先洗淨雙手並閉上眼睛，用食指或拇指指腹朝鼻樑方向極輕柔地按壓，每次 3-5 秒後放開，重複約 10 次，全程避免碰到眼球。",
      en: "Wash your hands first and close your eyes. Press extremely gently with the pad of your index finger or thumb, directing pressure toward the nasal bridge, holding 3-5 seconds and releasing, about 10 times. Avoid touching the eyeball at all times.",
    },
    goodFor: {
      zh: "有助舒緩眼睛疲勞、乾澀與長時間用眼後的不適。",
      en: "Helps relieve tired, dry eyes and discomfort after long hours of screen time or reading.",
    },
    cautions: {
      zh: "此穴緊貼眼球旁，需要特別小心：力道必須極輕、指甲剪短，按壓方向朝鼻樑而非眼球；眼部發炎、術後或當下配戴隱形眼鏡者請勿按壓。",
      en: "This point sits right beside the eyeball and calls for extra care: keep pressure extremely light, nails trimmed, and direct force toward the nasal bridge — never into the eye. Do not press if you have eye inflammation, recent eye surgery, or are currently wearing contact lenses.",
    },
  },
  {
    id: "sibai",
    code: "ST2",
    name: { zh: "四白", en: "Sibai (Four Whites)" },
    meridian: { zh: "足陽明胃經", en: "Stomach Meridian" },
    region: "head",
    howToFind: {
      zh: "眼睛平視前方，從瞳孔正下方往下約一橫指寬（在眼眶下緣的下方），可摸到顴骨上一個淺淺的小凹陷，輕壓有痠麻感，左右各一。",
      en: "Look straight ahead. Directly below the pupil, about one finger-width beneath the lower rim of the eye socket, you can feel a shallow dimple in the cheekbone that feels sore or tingly when pressed. One on each side.",
    },
    howToPress: {
      zh: "用食指指腹在凹陷處輕柔按揉約 1 分鐘，力道輕柔、以微痠為度，可搭配緩慢轉動眼球放鬆眼周。",
      en: "Knead the dimple gently with the pad of your index finger for about 1 minute, using light pressure until you feel mild soreness. Rolling your eyes slowly at the same time helps relax the area.",
    },
    goodFor: {
      zh: "有助舒緩眼睛疲勞、眼周痠脹與面部緊繃。",
      en: "Helps ease eye strain, soreness around the eyes, and facial tension.",
    },
    cautions: {
      zh: "位於眼眶下方，按壓時只按顴骨上的凹陷處，力道宜輕，切勿往上壓迫眼球。",
      en: "This point lies just below the eye socket. Press only the dimple on the cheekbone with light force, and never push upward against the eyeball.",
    },
  },
  {
    id: "yingxiang",
    code: "LI20",
    name: { zh: "迎香", en: "Yingxiang (Welcome Fragrance)" },
    meridian: { zh: "手陽明大腸經", en: "Large Intestine Meridian" },
    region: "head",
    howToFind: {
      zh: "位於鼻翼外緣中點旁的法令紋（鼻唇溝）上。用指尖貼著鼻翼最寬處往外滑一點點，落在微笑時出現的紋路裡即是，左右各一。",
      en: "On the nasolabial groove (smile line) right beside the midpoint of the nostril's outer edge. Slide a fingertip from the widest part of the nostril slightly outward until it rests in the crease that appears when you smile. One on each side.",
    },
    howToPress: {
      zh: "用兩手食指指腹同時按住左右迎香，輕柔畫圈按揉 1-2 分鐘，或沿鼻翼兩側上下輕搓至微微發熱。",
      en: "Place an index fingertip pad on each side and knead both points in gentle circles for 1-2 minutes, or rub lightly up and down along the sides of the nose until the area feels slightly warm.",
    },
    goodFor: {
      zh: "有助舒緩鼻塞、流鼻水與過敏性鼻炎帶來的不適。",
      en: "Helps relieve nasal congestion, runny nose, and discomfort from nasal allergies.",
    },
  },
  {
    id: "renzhong",
    code: "GV26",
    name: { zh: "人中", en: "Renzhong (Middle of the Person)" },
    meridian: { zh: "督脈", en: "Governing Vessel" },
    region: "head",
    howToFind: {
      zh: "位於鼻子下方、上唇上方的直溝（人中溝）內，約在溝的上三分之一與下三分之二交界處。對著鏡子即可清楚看到這條溝，穴位偏溝的上段。",
      en: "In the vertical groove between the nose and upper lip (the philtrum), at the junction of its upper third and lower two-thirds. You can see the groove clearly in a mirror; the point sits in its upper portion.",
    },
    howToPress: {
      zh: "用食指指尖朝牙齦方向短促按壓數秒後放開，重複 5-10 次；此處較敏感，平時保健按到微痠即可，不必用力掐。",
      en: "Press briefly with the tip of your index finger, directing pressure toward the gums, holding a few seconds and releasing, 5-10 times. The spot is sensitive — for everyday care, mild soreness is enough; there is no need to pinch hard.",
    },
    goodFor: {
      zh: "有助提神醒腦，舒緩精神不濟、昏昏欲睡的感覺。",
      en: "Helps sharpen alertness and shake off drowsiness or mental fog.",
    },
    cautions: {
      zh: "傳統上此穴以急救昏厥聞名，但若遇到有人昏迷或意識不清，請立即撥打急救電話並尋求醫療協助，切勿以掐人中取代正規急救。",
      en: "Traditionally this point is famous as a revival point for fainting, but if someone loses consciousness, call emergency services immediately — never use acupressure as a substitute for proper first aid.",
    },
  },
  {
    id: "chengjiang",
    code: "CV24",
    name: { zh: "承漿", en: "Chengjiang (Container of Fluids)" },
    meridian: { zh: "任脈", en: "Conception Vessel" },
    region: "head",
    howToFind: {
      zh: "位於下唇下方正中央的凹陷處，也就是下唇與下巴之間那道橫溝（頦唇溝）的中點。抿嘴時凹陷會更明顯，用指尖輕壓有痠脹感。",
      en: "In the hollow at the exact center below the lower lip — the midpoint of the horizontal crease between the lip and the chin. The dip becomes more obvious when you purse your lips, and pressing it feels mildly sore.",
    },
    howToPress: {
      zh: "用食指指腹在凹陷處輕柔按揉 1-2 分鐘，以微痠為度；也可用指腹定點輕壓 5 秒、放開 2 秒，重複約 10 次。",
      en: "Knead the hollow gently with the pad of your index finger for 1-2 minutes until mildly sore, or press and hold for 5 seconds, release for 2, and repeat about 10 times.",
    },
    goodFor: {
      zh: "有助舒緩口周與下顎緊繃、下排牙齦不適，傳統上也用於口乾流涎的日常保健。",
      en: "Helps ease tension around the mouth and lower jaw and discomfort in the lower gums; traditionally also used in everyday care for dry mouth or drooling.",
    },
  },
  {
    id: "fengchi",
    code: "GB20",
    name: { zh: "風池", en: "Fengchi (Wind Pool)" },
    meridian: { zh: "足少陽膽經", en: "Gallbladder Meridian" },
    region: "head",
    howToFind: {
      zh: "位於後腦枕骨下緣，脖子後方大筋（斜方肌）與耳後肌肉之間的凹陷處，大約與耳垂同高。雙手抱住後腦時，兩拇指自然落下按到的左右兩個窩即是。",
      en: "In the hollows below the base of the skull, between the big muscle at the back of the neck (trapezius) and the muscle behind the ear, roughly level with the earlobes. Cup the back of your head with both hands and your thumbs will naturally settle into the two dips — one on each side.",
    },
    howToPress: {
      zh: "雙手抱住後腦，用兩拇指指腹朝斜上方緩慢輕柔按揉，每次 1-2 分鐘，以痠脹放鬆為度，切勿突然用力深壓。",
      en: "Cup the back of your head and use both thumb pads to knead slowly and gently, angling slightly upward, for 1-2 minutes until the area feels pleasantly sore and loose. Never jab in deeply or suddenly.",
    },
    goodFor: {
      zh: "有助舒緩頭痛、肩頸僵硬、眼睛疲勞與感冒初期的不適。",
      en: "Helps relieve headaches, neck and shoulder stiffness, eye strain, and early cold discomfort.",
    },
    cautions: {
      zh: "此處鄰近腦幹與延髓，按壓務必緩慢輕柔，禁止快速、大力的深壓或粗暴轉動頸部；若出現頭暈、麻木請立即停止。",
      en: "This area is close to the brainstem. Always press slowly and gently — never with fast, forceful, deep pressure or rough neck movements. Stop immediately if you feel dizziness or numbness.",
    },
  },
  {
    id: "fengfu",
    code: "GV16",
    name: { zh: "風府", en: "Fengfu (Wind Mansion)" },
    meridian: { zh: "督脈", en: "Governing Vessel" },
    region: "head",
    howToFind: {
      zh: "位於後腦正中線上。先摸到後腦勺最突出的骨頭（枕外隆凸），沿正中線往下滑到骨頭下緣、後髮際上方約一拇指寬處的凹陷，即後頸正中央的窩。",
      en: "On the midline at the back of the head. Find the bony bump at the back of the skull (the occipital protuberance), then slide down the midline to the hollow just below the bone's lower edge, about one thumb-width above the hairline, in the very center of the nape.",
    },
    howToPress: {
      zh: "頭微微前傾放鬆頸部，用中指指腹在凹陷處極輕柔地定點按揉約 1 分鐘，以輕微痠脹為度，力道要比一般穴位更輕。",
      en: "Tilt your head slightly forward to relax the neck, then knead the hollow very softly with your middle finger pad for about 1 minute, aiming for only mild soreness. Use even less force than you would elsewhere.",
    },
    goodFor: {
      zh: "有助舒緩後頭痛、頸部僵硬與吹風受涼後的不適。",
      en: "Helps ease headaches at the back of the head, neck stiffness, and discomfort after exposure to wind and cold.",
    },
    cautions: {
      zh: "此穴深部正對延髓，需要特別小心：只能用指腹極輕柔地按揉，嚴禁深壓、戳刺或任何強力手法。",
      en: "The deep tissue beneath this point lies over the medulla region, so extra caution is needed: use only very gentle fingertip kneading, and never deep pressure, poking, or any forceful technique.",
    },
  },
  {
    id: "yifeng",
    code: "TE17",
    name: { zh: "翳風", en: "Yifeng (Wind Screen)" },
    meridian: { zh: "手少陽三焦經", en: "Triple Energizer Meridian" },
    region: "head",
    howToFind: {
      zh: "位於耳垂正後方的凹陷處，在耳後高起的乳突骨與下顎骨之間。把耳垂輕輕往後貼，耳垂蓋住的那個小窩就是本穴，按壓時痠脹感可能傳向耳內。",
      en: "In the hollow directly behind the earlobe, between the bony bump behind the ear (the mastoid) and the jawbone. Gently fold the earlobe backward — the dip it covers is the point. Pressing it may send an achy sensation into the ear.",
    },
    howToPress: {
      zh: "用食指或中指指腹在凹陷處輕柔按揉 1-2 分鐘，以耳周有溫熱痠脹感為度，兩側可同時進行。",
      en: "Knead the hollow gently with the pad of your index or middle finger for 1-2 minutes, until the area around the ear feels warm and mildly sore. You can do both sides at once.",
    },
    goodFor: {
      zh: "有助舒緩耳鳴、耳部悶脹與臉頰、下顎一帶的緊繃不適。",
      en: "Helps ease tinnitus, a blocked or full feeling in the ears, and tightness around the cheek and jaw.",
    },
  },
  {
    id: "tinggong",
    code: "SI19",
    name: { zh: "聽宮", en: "Tinggong (Palace of Hearing)" },
    meridian: { zh: "手太陽小腸經", en: "Small Intestine Meridian" },
    region: "head",
    howToFind: {
      zh: "位於耳屏（耳朵前方的小突起）前方。微微張開嘴巴，耳屏前會出現一個明顯的凹陷，凹陷的中點即是本穴，左右各一。",
      en: "Just in front of the tragus — the small flap at the front of the ear. Open your mouth slightly and a clear hollow appears in front of the tragus; the point is at the center of that hollow. One on each side.",
    },
    howToPress: {
      zh: "微張嘴，用食指指腹在凹陷處輕柔定點按揉約 1 分鐘，以微痠為度；也可按 5 秒、放 2 秒，交替重複約 10 次。",
      en: "With your mouth slightly open, knead the hollow gently with your index finger pad for about 1 minute until mildly sore, or alternate pressing for 5 seconds and releasing for 2, about 10 times.",
    },
    goodFor: {
      zh: "有助舒緩耳鳴、聽覺疲勞與耳朵悶塞感。",
      en: "Helps ease tinnitus, listening fatigue, and a plugged-up feeling in the ears.",
    },
  },
  {
    id: "jiache",
    code: "ST6",
    name: { zh: "頰車", en: "Jiache (Jawbone)" },
    meridian: { zh: "足陽明胃經", en: "Stomach Meridian" },
    region: "head",
    howToFind: {
      zh: "位於下顎角（耳垂下方臉頰的轉角）往前上方約一橫指寬處。用力咬緊牙關時，臉頰上鼓起最高的咀嚼肌隆起處即是，放鬆後按壓有痠脹感。",
      en: "About one finger-width forward and upward from the angle of the jaw (the corner of the face below the earlobe). Clench your teeth and the point is at the highest bulge of the chewing muscle; with the jaw relaxed, pressing there feels sore.",
    },
    howToPress: {
      zh: "放鬆下顎，用食指或中指指腹以畫圈方式輕柔按揉 1-2 分鐘，以痠脹感為度，兩側可同時按摩。",
      en: "Relax your jaw and knead the point in gentle circles with the pad of your index or middle finger for 1-2 minutes, until you feel mild soreness. Both sides can be massaged at the same time.",
    },
    goodFor: {
      zh: "有助舒緩牙齒痠痛、咀嚼肌緊繃與磨牙、下顎僵硬的不適。",
      en: "Helps ease tooth soreness, tight chewing muscles, and jaw stiffness from clenching or grinding.",
    },
  },
];
