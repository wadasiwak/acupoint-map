import type { Acupoint } from "../types";

export const ACUPOINTS_ARM: Acupoint[] = [
  {
    id: "hegu",
    code: "LI4",
    name: { zh: "合谷", en: "Hegu (Union Valley)" },
    meridian: { zh: "手陽明大腸經", en: "Large Intestine meridian" },
    region: "arm",
    howToFind: {
      zh: "在手背虎口處。將拇指與食指併攏，虎口肌肉隆起的最高點就是合谷；張開虎口按下去會有明顯痠脹感，約在第二掌骨中點靠拇指側。",
      en: "On the back of the hand, in the webbing between thumb and index finger. Squeeze thumb and index finger together: the point is at the highest bulge of the muscle mound, roughly at the midpoint of the index-finger bone on the thumb side. Pressing it gives a distinct sore, distending feeling.",
    },
    howToPress: {
      zh: "用另一手拇指指腹朝食指掌骨方向按壓並小幅揉動，力道以出現明顯痠脹為度，每次約一至兩分鐘，兩手輪流按。",
      en: "Press with the other thumb, angling toward the index-finger bone, and knead in small circles. Aim for a clear sore, distending sensation. About one to two minutes per hand, alternating sides.",
    },
    goodFor: {
      zh: "頭痛、牙痛、感冒初期不適與一般痠痛的日常保健要穴。",
      en: "A go-to point for everyday relief of headache, toothache, early cold symptoms and general aches.",
    },
    cautions: {
      zh: "🤰 孕婦禁按：傳統中醫認為刺激合谷可能引發子宮收縮，懷孕期間請完全避免按壓此穴。",
      en: "🤰 Do NOT press during pregnancy: traditional Chinese medicine holds that stimulating Hegu may induce uterine contractions. Avoid this point entirely while pregnant.",
    },
  },
  {
    id: "neiguan",
    code: "PC6",
    name: { zh: "內關", en: "Neiguan (Inner Pass)" },
    meridian: { zh: "手厥陰心包經", en: "Pericardium meridian" },
    region: "arm",
    howToFind: {
      zh: "手掌朝上，從腕橫紋中點往手肘方向量三橫指（食、中、無名指併攏的寬度），位於前臂正中兩條明顯肌腱之間；輕輕握拳屈腕，肌腱會更浮現。",
      en: "Palm facing up, measure three finger-widths (index, middle and ring fingers together) from the middle of the wrist crease toward the elbow. The point lies between the two prominent tendons in the center of the forearm; make a loose fist and flex the wrist to make the tendons stand out.",
    },
    howToPress: {
      zh: "以拇指指腹垂直向下按壓，帶點痠脹感後緩慢揉按，每次約一分鐘，兩手輪流；暈車時可隨時加按。",
      en: "Press straight down with the pad of your thumb until you feel mild soreness, then knead slowly. About one minute per side, alternating hands; press as needed when feeling carsick.",
    },
    goodFor: {
      zh: "噁心暈車、心悸胸悶、緊張焦慮與幫助睡眠的常用保健穴。",
      en: "A popular self-care point for nausea and motion sickness, palpitations, chest tightness, anxiety and better sleep.",
    },
  },
  {
    id: "waiguan",
    code: "TE5",
    name: { zh: "外關", en: "Waiguan (Outer Pass)" },
    meridian: { zh: "手少陽三焦經", en: "Triple Energizer meridian" },
    region: "arm",
    howToFind: {
      zh: "手背朝上，從腕背橫紋中點往手肘方向量三橫指，位於前臂兩根骨頭（橈骨與尺骨）之間的凹溝中，與掌側的內關前後相對。",
      en: "With the back of the hand facing up, measure three finger-widths from the middle of the back wrist crease toward the elbow. The point sits in the groove between the two forearm bones (radius and ulna), directly opposite Neiguan on the palm side.",
    },
    howToPress: {
      zh: "用拇指指腹垂直按壓至有痠脹感，再小幅揉動約一分鐘；也可與內關以拇指、食指前後相對捏按。",
      en: "Press straight in with the thumb pad until it feels sore and distending, then knead gently for about one minute. You can also pinch it together with Neiguan, thumb on one side and index finger on the other.",
    },
    goodFor: {
      zh: "感冒頭痛、手腕與前臂痠痛、耳鳴的日常保健。",
      en: "Everyday care for colds with headache, wrist and forearm soreness, and ringing in the ears.",
    },
  },
  {
    id: "shenmen",
    code: "HT7",
    name: { zh: "神門", en: "Shenmen (Spirit Gate)" },
    meridian: { zh: "手少陰心經", en: "Heart meridian" },
    region: "arm",
    howToFind: {
      zh: "手掌朝上，在腕橫紋靠小指的一端。先摸到小指側一條繃起的肌腱（屈腕時最明顯），神門就在這條肌腱靠拇指側、腕橫紋上的小凹陷中。",
      en: "Palm facing up, look at the little-finger end of the wrist crease. Find the taut tendon on the pinky side (most obvious when you flex the wrist); Shenmen sits in the small hollow on the thumb side of that tendon, right on the wrist crease.",
    },
    howToPress: {
      zh: "以拇指指尖或指腹輕柔按揉，力道不需大，微痠即可，每次一至兩分鐘；睡前按最合適。",
      en: "Massage gently with the tip or pad of your thumb; light pressure with mild soreness is enough. One to two minutes per side, ideally before bedtime.",
    },
    goodFor: {
      zh: "幫助入睡、安定心神、緩解心悸與焦躁的安神要穴。",
      en: "A key calming point for falling asleep, settling the mind, and easing palpitations and restlessness.",
    },
  },
  {
    id: "taiyuan",
    code: "LU9",
    name: { zh: "太淵", en: "Taiyuan (Great Abyss)" },
    meridian: { zh: "手太陰肺經", en: "Lung meridian" },
    region: "arm",
    howToFind: {
      zh: "手掌朝上，在腕橫紋靠拇指的一端。用指尖輕觸會摸到脈搏跳動（即把脈處），太淵就在脈搏旁的小凹陷中，貼著腕橫紋。",
      en: "Palm facing up, look at the thumb end of the wrist crease. Rest a fingertip lightly and you will feel the pulse (the classic pulse-taking spot); Taiyuan lies in the small hollow right beside the pulsation, on the wrist crease.",
    },
    howToPress: {
      zh: "只用指腹輕輕點按或畫小圈揉，感覺微微痠即可，每次約一分鐘；切勿用力深壓。",
      en: "Use only the finger pad to tap lightly or make small circles; a faint soreness is enough. About one minute per side. Never press hard or deep.",
    },
    goodFor: {
      zh: "咳嗽、氣短、手腕痠痛的日常保養，傳統視為補肺氣的要穴。",
      en: "Everyday care for cough, shortness of breath and wrist soreness; traditionally regarded as a key point for supporting lung qi.",
    },
    cautions: {
      zh: "此穴正下方是橈動脈（把脈處），只能輕按輕揉，不可用力深壓、掐按或長時間壓迫。",
      en: "The radial artery (where the pulse is taken) runs directly beneath this point. Press only lightly — no deep pressure, pinching, or prolonged compression.",
    },
  },
  {
    id: "lieque",
    code: "LU7",
    name: { zh: "列缺", en: "Lieque (Broken Sequence)" },
    meridian: { zh: "手太陰肺經", en: "Lung meridian" },
    region: "arm",
    howToFind: {
      zh: "兩手虎口自然交叉相握，一手食指搭在另一手腕拇指側的高骨（橈骨莖突）上，食指尖端所點到的小凹陷就是列缺，約在腕橫紋上兩橫指處。",
      en: "Interlock the webs of both hands naturally, with one index finger resting on the bony bump on the thumb side of the other wrist. The small hollow under the tip of that index finger is Lieque, about two finger-widths above the wrist crease.",
    },
    howToPress: {
      zh: "用食指或拇指指尖沿骨縫小幅揉按，帶輕微痠脹感，每次約一分鐘，兩手輪流。",
      en: "Knead in small motions along the bone groove with the tip of your index finger or thumb, aiming for mild soreness. About one minute per side, alternating hands.",
    },
    goodFor: {
      zh: "咳嗽、喉嚨不適與頸部僵硬痠痛的日常保健。",
      en: "Everyday care for cough, throat discomfort, and a stiff, achy neck.",
    },
  },
  {
    id: "quchi",
    code: "LI11",
    name: { zh: "曲池", en: "Quchi (Pool at the Bend)" },
    meridian: { zh: "手陽明大腸經", en: "Large Intestine meridian" },
    region: "arm",
    howToFind: {
      zh: "手肘彎成直角，掌心朝向胸口，肘關節外側會出現一條肘橫紋；曲池就在肘橫紋靠外側（拇指側）末端的凹陷處，按下去痠脹明顯。",
      en: "Bend the elbow to a right angle with the palm toward your chest, so a crease forms at the elbow. Quchi sits in the hollow at the outer (thumb-side) end of that crease and feels distinctly sore when pressed.",
    },
    howToPress: {
      zh: "以拇指指腹用中等力道按揉，痠脹為度，每次一至兩分鐘，兩側輪流。",
      en: "Knead with the thumb pad at moderate pressure until it feels sore and distending. One to two minutes per side, alternating arms.",
    },
    goodFor: {
      zh: "手肘痠痛（如網球肘）、感冒發熱不適、皮膚搔癢的日常保健。",
      en: "Everyday care for elbow soreness (such as tennis elbow), feverish cold discomfort, and itchy skin.",
    },
  },
  {
    id: "shousanli",
    code: "LI10",
    name: { zh: "手三里", en: "Shousanli (Arm Three Li)" },
    meridian: { zh: "手陽明大腸經", en: "Large Intestine meridian" },
    region: "arm",
    howToFind: {
      zh: "先屈肘找到曲池（肘橫紋外側端凹陷），再沿前臂外側往手腕方向量三橫指，落在前臂肌肉最飽滿處，按下去痠脹感特別明顯。",
      en: "First bend the elbow and locate Quchi (the hollow at the outer end of the elbow crease), then measure three finger-widths down the outer forearm toward the wrist. The point lies on the fullest part of the forearm muscle and feels notably sore when pressed.",
    },
    howToPress: {
      zh: "用拇指指腹深按並揉動，可承受較大力道，痠脹為度，每次一至兩分鐘，兩臂輪流。",
      en: "Press deeply with the thumb pad and knead; this point tolerates firmer pressure. Aim for a sore, distending feeling, one to two minutes per side, alternating arms.",
    },
    goodFor: {
      zh: "手肘與前臂痠痛、提物勞損的放鬆保養，也常用於腸胃保健。",
      en: "Relief for sore elbows and forearms from lifting and overuse; also commonly used for digestive self-care.",
    },
  },
  {
    id: "chize",
    code: "LU5",
    name: { zh: "尺澤", en: "Chize (Cubit Marsh)" },
    meridian: { zh: "手太陰肺經", en: "Lung meridian" },
    region: "arm",
    howToFind: {
      zh: "手掌朝上、手肘微彎，在肘窩中央摸到一條粗而繃緊的肌腱（肱二頭肌腱）；尺澤就在這條肌腱靠拇指側的肘橫紋凹陷中。",
      en: "Palm up with the elbow slightly bent, feel for the thick, taut tendon in the middle of the elbow crease (the biceps tendon). Chize lies in the hollow on the thumb side of that tendon, right on the crease.",
    },
    howToPress: {
      zh: "以拇指指腹按住凹陷處揉按，力道適中、痠脹為度，每次約一分鐘，兩臂輪流。",
      en: "Hold the hollow with your thumb pad and knead at moderate pressure until it feels sore. About one minute per side, alternating arms.",
    },
    goodFor: {
      zh: "咳嗽、喉嚨不適與手肘痠痛的日常保健。",
      en: "Everyday care for cough, throat discomfort and elbow soreness.",
    },
  },
  {
    id: "shaoshang",
    code: "LU11",
    name: { zh: "少商", en: "Shaoshang (Lesser Shang)" },
    meridian: { zh: "手太陰肺經", en: "Lung meridian" },
    region: "arm",
    howToFind: {
      zh: "在拇指指甲根部靠外側（遠離食指的一側）的下角旁，距指甲角約一粒米的距離；按壓時會有尖銳的刺痠感。",
      en: "Beside the outer lower corner of the thumbnail (the side away from the index finger), about one grain of rice away from the nail corner. Pressing it gives a sharp, prickling soreness.",
    },
    howToPress: {
      zh: "用另一手拇指指甲尖輕輕掐按，一掐一放，每次數秒、重複十來次即可，不需長時間用力。",
      en: "Pinch lightly with the fingernail of the other thumb, pressing and releasing for a few seconds at a time, about ten repetitions. No need for prolonged or heavy pressure.",
    },
    goodFor: {
      zh: "喉嚨痛、咳嗽與感冒初期的應急保健穴。",
      en: "A quick self-care point for sore throat, cough and the first signs of a cold.",
    },
  },
  {
    id: "laogong",
    code: "PC8",
    name: { zh: "勞宮", en: "Laogong (Palace of Toil)" },
    meridian: { zh: "手厥陰心包經", en: "Pericardium meridian" },
    region: "arm",
    howToFind: {
      zh: "手心朝上自然握拳，中指指尖點到的掌心位置就是勞宮，位於第二、三掌骨之間、偏中指掌骨的一側。",
      en: "Palm up, curl the hand into a loose fist: Laogong is where the tip of the middle finger touches the palm, between the second and third palm bones, closer to the middle-finger side.",
    },
    howToPress: {
      zh: "用另一手拇指指腹按住掌心揉按，或以指節輕輕點壓，微痠即可，每次一至兩分鐘；緊張時可隨時按。",
      en: "Knead the center of the palm with the other thumb, or tap gently with a knuckle; mild soreness is enough. One to two minutes per side, any time you feel tense.",
    },
    goodFor: {
      zh: "安神舒壓、緩解手心多汗與口乾口瘡的日常保健。",
      en: "Everyday care for calming nerves and stress, sweaty palms, and mouth dryness or sores.",
    },
  },
  {
    id: "houxi",
    code: "SI3",
    name: { zh: "後谿", en: "Houxi (Back Stream)" },
    meridian: { zh: "手太陽小腸經", en: "Small Intestine meridian" },
    region: "arm",
    howToFind: {
      zh: "手微握拳，看小指側的掌緣：小指根關節後方、最上方那條掌紋（感情線）末端會鼓起一個小肉丘，後谿就在肉丘頂端、掌背與掌心膚色交界的凹陷處。",
      en: "Make a loose fist and look at the pinky edge of the hand: just behind the little-finger knuckle, the end of the uppermost palm crease forms a small mound of flesh. Houxi is in the dip at the top of that mound, where the palm skin meets the back-of-hand skin.",
    },
    howToPress: {
      zh: "以拇指指尖按住掌緣揉按，痠脹為度，每次約一分鐘；按壓的同時緩慢轉動脖子，效果更好。",
      en: "Press the edge of the hand with your thumb tip and knead until sore, about one minute per side. Slowly rotating your neck while pressing works even better.",
    },
    goodFor: {
      zh: "落枕、肩頸僵硬與腰背痠痛的常用保健穴。",
      en: "A common self-care point for a stiff neck from sleeping wrong, tight shoulders, and a sore lower back.",
    },
  },
  {
    id: "yangxi",
    code: "LI5",
    name: { zh: "陽谿", en: "Yangxi (Yang Stream)" },
    meridian: { zh: "手陽明大腸經", en: "Large Intestine meridian" },
    region: "arm",
    howToFind: {
      zh: "把拇指用力向上翹起，手腕背面靠拇指側會浮出兩條肌腱，中間形成一個三角形小凹窩（俗稱鼻煙壺）；陽谿就在凹窩底部、貼近腕關節處。",
      en: "Stretch the thumb strongly upward: two tendons pop up on the thumb side of the back of the wrist, forming a small triangular hollow (the anatomical snuffbox). Yangxi sits at the bottom of that hollow, right at the wrist joint.",
    },
    howToPress: {
      zh: "以另一手拇指指尖伸入凹窩輕輕點揉，微痠即可，每次約一分鐘；按時可配合緩慢活動手腕。",
      en: "Slip the other thumb tip into the hollow and knead gently; mild soreness is enough. About one minute per side, slowly moving the wrist as you press.",
    },
    goodFor: {
      zh: "手腕痠痛、拇指過勞（滑鼠手、媽媽手族群）與頭痛的日常保養。",
      en: "Everyday care for wrist soreness, overworked thumbs (mouse users, new parents) and headaches.",
    },
  },
  {
    id: "yuji",
    code: "LU10",
    name: { zh: "魚際", en: "Yuji (Fish Border)" },
    meridian: { zh: "手太陰肺經", en: "Lung meridian" },
    region: "arm",
    howToFind: {
      zh: "手掌朝上，拇指根部有一塊隆起的肌肉（大魚際）；魚際就在這塊肌肉的中央，貼著拇指掌骨邊緣、掌心與手背膚色交界的地方。",
      en: "Palm up, find the fleshy mound at the base of the thumb (the thenar eminence). Yuji is at the middle of that mound, along the edge of the thumb's palm bone, where the palm skin meets the back-of-hand skin.",
    },
    howToPress: {
      zh: "以另一手拇指指腹沿掌骨邊緣按揉，痠脹為度，每次一至兩分鐘，兩手輪流。",
      en: "Knead along the bone edge with the other thumb pad until it feels sore and distending. One to two minutes per side, alternating hands.",
    },
    goodFor: {
      zh: "喉嚨痛、咳嗽與聲音沙啞的日常保健，用嗓多的人可常按。",
      en: "Everyday care for sore throat, cough and hoarseness — handy for people who use their voice a lot.",
    },
  },
  {
    id: "jianshi",
    code: "PC5",
    name: { zh: "間使", en: "Jianshi (Intermediary Courier)" },
    meridian: { zh: "手厥陰心包經", en: "Pericardium meridian" },
    region: "arm",
    howToFind: {
      zh: "手掌朝上，從腕橫紋中點往手肘方向量四橫指（比內關再高一橫指），同樣位於前臂正中兩條肌腱之間；握拳屈腕時肌腱更清楚。",
      en: "Palm up, measure four finger-widths from the middle of the wrist crease toward the elbow (one finger-width above Neiguan), again between the two central forearm tendons. Making a fist and flexing the wrist makes the tendons easier to see.",
    },
    howToPress: {
      zh: "以拇指指腹垂直按壓兩筋之間，痠脹為度，緩慢揉按約一分鐘，兩手輪流。",
      en: "Press straight down between the two tendons with the thumb pad until sore, then knead slowly for about one minute per side, alternating hands.",
    },
    goodFor: {
      zh: "心悸胸悶、噁心與安定心神的日常保健。",
      en: "Everyday care for palpitations, chest tightness, nausea and a calmer state of mind.",
    },
  },
  {
    id: "zhigou",
    code: "TE6",
    name: { zh: "支溝", en: "Zhigou (Branch Ditch)" },
    meridian: { zh: "手少陽三焦經", en: "Triple Energizer meridian" },
    region: "arm",
    howToFind: {
      zh: "手背朝上，從腕背橫紋中點往手肘方向量四橫指（比外關再高一橫指），位於前臂兩根骨頭之間的凹溝中。",
      en: "Back of the hand facing up, measure four finger-widths from the middle of the back wrist crease toward the elbow (one finger-width above Waiguan). The point lies in the groove between the two forearm bones.",
    },
    howToPress: {
      zh: "用拇指指腹垂直按壓骨縫間，痠脹為度，揉按一至兩分鐘，兩臂輪流；便祕保養可於早晨加按。",
      en: "Press straight into the groove with the thumb pad until it feels sore, kneading for one to two minutes per side, alternating arms. For constipation self-care, add a session in the morning.",
    },
    goodFor: {
      zh: "便祕、脅肋脹悶與耳鳴的常用保健穴。",
      en: "A common self-care point for constipation, tightness along the ribs, and ringing in the ears.",
    },
  },
];
