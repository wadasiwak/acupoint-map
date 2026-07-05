import type { Symptom } from "../types";

// Symptoms part 1: head-face (8), digestion (6), sleep-mood (4).
// Ids and acupointIds strictly follow docs/REGISTRY.md.

export const SYMPTOMS_PART1: Symptom[] = [
  // ── head-face ──────────────────────────────────────────────
  {
    id: "headache",
    name: { zh: "頭痛", en: "Headache" },
    emoji: "🤕",
    category: "head-face",
    blurb: {
      zh: "頭部悶脹、緊繃或抽痛,常見於疲勞、壓力或睡眠不足時。",
      en: "A dull, tight, or throbbing pain in the head, often triggered by fatigue, stress, or lack of sleep.",
    },
    acupointIds: ["hegu", "fengchi", "taiyang", "baihui", "lieque"],
    tips: {
      zh: "放下螢幕休息片刻,喝杯溫水;用溫熱毛巾敷後頸,並慢慢轉動肩頸放鬆緊繃的肌肉。",
      en: "Take a short break from screens and sip warm water. Apply a warm towel to the back of the neck and gently roll your shoulders to release tension.",
    },
    seekHelp: {
      zh: "若出現突然的劇烈頭痛(一生中最痛)、伴隨發燒與頸部僵硬、意識改變、手腳無力或視力異常,請立即就醫。",
      en: "Seek immediate medical care for a sudden, worst-ever headache, or a headache with fever and stiff neck, confusion, limb weakness, or vision changes.",
    },
  },
  {
    id: "migraine",
    name: { zh: "偏頭痛", en: "Migraine" },
    emoji: "🤯",
    category: "head-face",
    blurb: {
      zh: "單側或太陽穴附近的搏動性疼痛,可能伴隨怕光、怕吵或噁心。",
      en: "Pulsating pain on one side of the head or around the temple, sometimes with light or sound sensitivity and nausea.",
    },
    acupointIds: ["taiyang", "fengchi", "waiguan", "zulinqi", "taichong"],
    tips: {
      zh: "到安靜昏暗的房間休息,避免強光與噪音;記錄飲食與作息,找出並避開自己的誘發因子(如熬夜、紅酒、起司)。",
      en: "Rest in a quiet, dim room away from bright light and noise. Keep a diary of food and sleep to spot and avoid your personal triggers (e.g. late nights, red wine, aged cheese).",
    },
    seekHelp: {
      zh: "若頭痛型態突然改變、發作越來越頻繁劇烈,或伴隨說話不清、單側無力、麻木等神經症狀,請儘速就醫評估。",
      en: "See a doctor promptly if the headache pattern suddenly changes, attacks become more frequent or severe, or you notice slurred speech, one-sided weakness, or numbness.",
    },
  },
  {
    id: "eye-strain",
    name: { zh: "眼睛疲勞", en: "Eye strain" },
    emoji: "👀",
    category: "head-face",
    blurb: {
      zh: "長時間用眼後的眼睛痠澀、乾癢、視線模糊或眉骨脹痛。",
      en: "Sore, dry, or blurry eyes and brow-bone heaviness after long hours of close-up work or screen time.",
    },
    acupointIds: ["jingming", "cuanzhu", "taiyang", "sibai", "fengchi"],
    tips: {
      zh: "遵守 20-20-20 原則:每用眼 20 分鐘,看 6 公尺外 20 秒;多眨眼保持濕潤,睡前可用溫熱毛巾敷眼幾分鐘。",
      en: "Follow the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds. Blink often, and try a warm towel over closed eyes before bed.",
    },
    seekHelp: {
      zh: "若出現突然的視力下降、視野缺損、看到閃光或大量飛蚊、眼睛劇痛或紅腫,請立即就醫檢查。",
      en: "Seek immediate care for sudden vision loss, blind spots, flashes of light or a shower of floaters, severe eye pain, or marked redness and swelling.",
    },
  },
  {
    id: "nasal-allergy",
    name: { zh: "鼻塞/過敏性鼻炎", en: "Nasal congestion / allergies" },
    emoji: "🤧",
    category: "head-face",
    blurb: {
      zh: "鼻子不通、打噴嚏、流清鼻水,常在早晚或接觸過敏原時加重。",
      en: "A blocked nose, sneezing, and a runny nose, often worse in the morning, at night, or around allergens.",
    },
    acupointIds: ["yingxiang", "hegu", "yintang", "fengchi", "lieque"],
    tips: {
      zh: "外出可戴口罩、勤洗床單並減少塵蟎;早晚可用溫熱毛巾敷鼻,或以生理食鹽水沖洗鼻腔,並注意頭頸部保暖。",
      en: "Wear a mask outdoors, wash bedding often, and reduce dust mites. Try a warm towel over the nose or a saline rinse morning and night, and keep your head and neck warm.",
    },
    seekHelp: {
      zh: "若鼻塞只有單側且持續不退、鼻涕帶血、伴隨臉部劇痛或發燒超過數日,請就醫檢查是否有鼻竇炎或其他問題。",
      en: "See a doctor if congestion is one-sided and persistent, mucus is blood-tinged, or you have severe facial pain or a fever lasting several days — it may be sinusitis or another issue.",
    },
  },
  {
    id: "toothache",
    name: { zh: "牙痛", en: "Toothache" },
    emoji: "🦷",
    category: "head-face",
    blurb: {
      zh: "牙齒或牙齦的抽痛、脹痛,遇冷熱或咀嚼時可能加重。",
      en: "Throbbing or aching pain in a tooth or the gums, often worse with hot, cold, or chewing.",
    },
    acupointIds: ["hegu", "jiache", "neiting"],
    tips: {
      zh: "避免過冷過熱與過硬的食物,飯後溫水漱口保持清潔;臉頰外側冰敷可暫時緩解腫痛。穴位按壓只能暫時舒緩,仍應盡快看牙醫。",
      en: "Avoid very hot, cold, or hard foods and rinse with warm water after meals. A cold pack on the cheek can ease swelling. Acupressure is only a stopgap — book a dental visit soon.",
    },
    seekHelp: {
      zh: "若牙痛伴隨臉部或牙齦明顯腫脹、發燒、張口困難或吞嚥困難,可能是感染擴散,請立即就醫或急診。",
      en: "Seek urgent care if toothache comes with facial or gum swelling, fever, or trouble opening your mouth or swallowing — the infection may be spreading.",
    },
  },
  {
    id: "sore-throat",
    name: { zh: "喉嚨痛", en: "Sore throat" },
    emoji: "😷",
    category: "head-face",
    blurb: {
      zh: "喉嚨乾癢、刺痛或吞嚥時疼痛,常見於感冒初期或說話過多之後。",
      en: "A dry, scratchy, or painful throat, especially when swallowing — common at the start of a cold or after overusing your voice.",
    },
    acupointIds: ["shaoshang", "hegu", "yuji", "lieque", "zhaohai"],
    tips: {
      zh: "多喝溫開水、少說話讓喉嚨休息;可用溫鹽水漱口,避免菸酒與辛辣油炸食物。",
      en: "Sip warm water often and rest your voice. Gargle with warm salt water, and avoid smoking, alcohol, and spicy or fried foods.",
    },
    seekHelp: {
      zh: "若喉嚨痛到無法吞嚥或呼吸困難、流口水、高燒不退,或單側扁桃腺明顯腫大,請立即就醫。",
      en: "Seek immediate care if you cannot swallow, have trouble breathing, are drooling, have a persistent high fever, or one tonsil is markedly swollen.",
    },
  },
  {
    id: "dizziness",
    name: { zh: "頭暈", en: "Dizziness" },
    emoji: "💫",
    category: "head-face",
    blurb: {
      zh: "頭重腳輕、昏沉或天旋地轉的感覺,可能在起身或疲勞時出現。",
      en: "Feeling light-headed, foggy, or like the room is spinning, often when standing up or when run-down.",
    },
    acupointIds: ["baihui", "fengchi", "neiguan", "taichong", "fenglong"],
    tips: {
      zh: "頭暈時先坐下或扶穩,避免突然起身或快速轉頭;補充水分、規律進食,並確保睡眠充足。",
      en: "Sit down or hold onto something steady when dizzy, and avoid standing up or turning your head quickly. Stay hydrated, eat regular meals, and get enough sleep.",
    },
    seekHelp: {
      zh: "若頭暈伴隨口齒不清、單側無力或麻木、複視、劇烈頭痛、胸痛或昏倒,請立即就醫;反覆發作的眩暈也應找醫師評估。",
      en: "Call for emergency care if dizziness comes with slurred speech, one-sided weakness or numbness, double vision, severe headache, chest pain, or fainting. Recurrent vertigo also deserves a medical work-up.",
    },
  },
  {
    id: "tinnitus",
    name: { zh: "耳鳴", en: "Tinnitus" },
    emoji: "👂",
    category: "head-face",
    blurb: {
      zh: "耳中出現嗡嗡、蟬鳴或嘶嘶聲,在安靜或疲勞時特別明顯。",
      en: "A ringing, buzzing, or hissing sound in the ears, most noticeable in quiet settings or when tired.",
    },
    acupointIds: ["tinggong", "yifeng", "fengchi", "taixi"],
    tips: {
      zh: "避免長時間戴耳機與過大音量,睡眠要充足;壓力大時做腹式深呼吸,睡前可用手掌輕輕按摩耳朵周圍。",
      en: "Limit headphone time and loud volume, and prioritize sleep. Practice slow belly breathing when stressed, and gently massage around the ears before bed.",
    },
    seekHelp: {
      zh: "若耳鳴只在單側、突然發生、伴隨聽力下降、眩暈或耳痛流膿,請儘速就醫;突發性聽力下降屬於急症,不要拖延。",
      en: "See a doctor promptly for one-sided or sudden tinnitus, or tinnitus with hearing loss, vertigo, ear pain, or discharge. Sudden hearing loss is an emergency — do not wait.",
    },
  },

  // ── digestion ──────────────────────────────────────────────
  {
    id: "stomachache",
    name: { zh: "胃痛", en: "Stomachache" },
    emoji: "😣",
    category: "digestion",
    blurb: {
      zh: "上腹部悶痛、灼熱或絞痛,常與飲食不規律、壓力或吃太快有關。",
      en: "Dull, burning, or cramping pain in the upper abdomen, often linked to irregular meals, stress, or eating too fast.",
    },
    acupointIds: ["zhongwan", "zusanli", "neiguan", "liangqiu"],
    tips: {
      zh: "少量多餐、細嚼慢嚥,避免空腹喝咖啡與辛辣刺激食物;可用暖暖包或熱敷袋溫敷上腹部。",
      en: "Eat smaller, slower meals and avoid coffee on an empty stomach and spicy, irritating foods. A heat pack on the upper abdomen can be soothing.",
    },
    seekHelp: {
      zh: "若腹痛劇烈持續不緩解、解黑便或吐血、伴隨發燒、腹部僵硬或體重不明原因下降,請立即就醫。",
      en: "Seek immediate care for severe, unrelenting pain, black stools or vomiting blood, fever, a rigid abdomen, or unexplained weight loss.",
    },
  },
  {
    id: "bloating",
    name: { zh: "脹氣/消化不良", en: "Bloating / indigestion" },
    emoji: "🎈",
    category: "digestion",
    blurb: {
      zh: "飯後肚子鼓脹、悶悶不舒服,容易打嗝或排氣。",
      en: "A full, distended, uncomfortable belly after meals, often with burping or passing gas.",
    },
    acupointIds: ["zhongwan", "zusanli", "tianshu", "neiguan", "qihai"],
    tips: {
      zh: "吃飯放慢速度,少喝碳酸飲料、少吃易產氣食物(豆類、洋蔥等);飯後散步 10 到 15 分鐘,並可順時針輕柔按摩腹部。",
      en: "Slow down at meals, cut back on fizzy drinks and gas-forming foods (beans, onions), take a 10-15 minute walk after eating, and gently massage the belly clockwise.",
    },
    seekHelp: {
      zh: "若腹脹持續加重、完全無法排氣排便、伴隨劇痛、嘔吐或體重下降,請儘速就醫。",
      en: "See a doctor promptly if bloating keeps worsening, you cannot pass gas or stool at all, or it comes with severe pain, vomiting, or weight loss.",
    },
  },
  {
    id: "constipation",
    name: { zh: "便祕", en: "Constipation" },
    emoji: "🚽",
    category: "digestion",
    blurb: {
      zh: "排便次數變少、糞便乾硬或排不乾淨,肚子沉重不清爽。",
      en: "Infrequent, hard, or incomplete bowel movements that leave the belly feeling heavy and sluggish.",
    },
    acupointIds: ["tianshu", "zhigou", "zusanli", "qihai"],
    tips: {
      zh: "每天喝足量的水、多吃蔬果與全穀類補充纖維;養成固定時間上廁所的習慣(如早餐後),並保持規律運動。",
      en: "Drink plenty of water and eat more vegetables, fruit, and whole grains for fiber. Build a regular toilet routine (e.g. after breakfast) and stay physically active.",
    },
    seekHelp: {
      zh: "若排便習慣突然改變且持續數週、糞便帶血或變細、伴隨劇烈腹痛或體重下降,請就醫檢查。",
      en: "See a doctor if bowel habits change suddenly for weeks, stools are bloody or pencil-thin, or constipation comes with severe pain or weight loss.",
    },
  },
  {
    id: "diarrhea",
    name: { zh: "腹瀉", en: "Diarrhea" },
    emoji: "💩",
    category: "digestion",
    blurb: {
      zh: "大便稀軟、次數變多,可能伴隨腹部絞痛或咕嚕作響。",
      en: "Loose, frequent stools, sometimes with cramping or a gurgling belly.",
    },
    acupointIds: ["tianshu", "zusanli", "yinlingquan", "guanyuan"],
    tips: {
      zh: "少量多次補充水分與電解質,吃清淡好消化的食物(粥、白吐司),避免油膩、生冷與乳製品;注意腹部保暖。",
      en: "Sip fluids with electrolytes often, stick to bland, easy foods (congee, plain toast), avoid greasy, raw, or dairy-heavy foods, and keep your belly warm.",
    },
    seekHelp: {
      zh: "若腹瀉持續超過兩三天、出現血便或黑便、高燒、劇烈腹痛,或有脫水徵兆(口乾、尿量少、頭暈),請儘速就醫。",
      en: "Seek care promptly if diarrhea lasts more than 2-3 days, stools are bloody or black, or you have high fever, severe pain, or signs of dehydration (dry mouth, little urine, dizziness).",
    },
  },
  {
    id: "nausea-motion",
    name: { zh: "噁心/暈車", en: "Nausea / motion sickness" },
    emoji: "🤢",
    category: "digestion",
    blurb: {
      zh: "反胃想吐、頭昏冒冷汗,常見於搭車搭船或腸胃不適時。",
      en: "Queasiness, cold sweats, and the urge to vomit, common on car or boat rides or with an upset stomach.",
    },
    acupointIds: ["neiguan", "zhongwan", "zusanli", "hegu"],
    tips: {
      zh: "搭車時坐前座、看遠方地平線,避免滑手機或看書;上車前不要吃太飽,可含薑片或喝少量薑茶。",
      en: "Sit up front and watch the horizon instead of your phone or a book. Avoid heavy meals before travel, and try a slice of ginger or a little ginger tea.",
    },
    seekHelp: {
      zh: "若嘔吐到完全無法進食進水、吐血或吐出咖啡渣狀物,或伴隨劇烈頭痛、頸部僵硬、胸痛、嚴重腹痛,請立即就醫。",
      en: "Seek immediate care if vomiting prevents keeping any food or fluid down, you vomit blood or coffee-ground material, or nausea comes with severe headache, stiff neck, chest pain, or intense abdominal pain.",
    },
  },
  {
    id: "poor-appetite",
    name: { zh: "食慾不振", en: "Poor appetite" },
    emoji: "🍽️",
    category: "digestion",
    blurb: {
      zh: "看到食物提不起興趣、吃一點就飽,常伴隨疲倦或壓力大。",
      en: "Little interest in food and feeling full after a few bites, often alongside tiredness or stress.",
    },
    acupointIds: ["zusanli", "zhongwan", "sanyinjiao", "tianshu"],
    tips: {
      zh: "三餐定時、少量多餐,選擇溫熱好消化的食物;飯前散散步或做點輕度活動,幫助腸胃醒過來。",
      en: "Keep regular mealtimes with smaller portions, choose warm, easy-to-digest foods, and take a light walk before meals to wake up your digestion.",
    },
    seekHelp: {
      zh: "若食慾不振持續超過兩週、體重明顯下降、吞嚥困難,或伴隨持續腹痛、發燒,請就醫找出原因。",
      en: "See a doctor if poor appetite lasts more than two weeks, or comes with clear weight loss, trouble swallowing, ongoing abdominal pain, or fever.",
    },
  },

  // ── sleep-mood ─────────────────────────────────────────────
  {
    id: "insomnia",
    name: { zh: "失眠", en: "Insomnia" },
    emoji: "🌙",
    category: "sleep-mood",
    blurb: {
      zh: "躺很久睡不著、半夜醒來難再入睡,白天精神不濟。",
      en: "Lying awake for a long time, waking in the night and struggling to fall back asleep, then dragging through the day.",
    },
    acupointIds: ["shenmen", "sanyinjiao", "yintang", "yongquan", "baihui"],
    tips: {
      zh: "固定睡覺與起床時間,睡前一小時遠離手機與強光;下午之後避免咖啡因,睡前可泡溫水腳 10 到 15 分鐘再按湧泉。",
      en: "Keep consistent sleep and wake times, and put screens away an hour before bed. Skip caffeine after mid-afternoon, and try a 10-15 minute warm foot soak before pressing Yongquan.",
    },
    seekHelp: {
      zh: "若失眠持續超過一個月且影響白天生活、伴隨情緒明顯低落,或打鼾嚴重、睡眠中呼吸暫停,請尋求醫師或睡眠專科協助。",
      en: "Seek professional help if insomnia lasts over a month and disrupts your days, or if it comes with persistent low mood, heavy snoring, or pauses in breathing during sleep.",
    },
  },
  {
    id: "anxiety",
    name: { zh: "焦慮緊張", en: "Anxiety" },
    emoji: "😰",
    category: "sleep-mood",
    blurb: {
      zh: "心裡緊繃不安、思緒停不下來,可能伴隨胸悶、手心冒汗。",
      en: "Feeling wound-up and on edge with racing thoughts, sometimes with chest tightness or sweaty palms.",
    },
    acupointIds: ["neiguan", "shenmen", "danzhong", "taichong", "yintang"],
    tips: {
      zh: "試試 4-7-8 呼吸法:吸氣 4 秒、閉氣 7 秒、吐氣 8 秒,重複幾輪;規律運動與減少咖啡因也能幫助神經放鬆。",
      en: "Try 4-7-8 breathing: inhale for 4 seconds, hold for 7, exhale for 8, and repeat a few rounds. Regular exercise and less caffeine also help settle the nervous system.",
    },
    seekHelp: {
      zh: "若焦慮持續影響工作與生活、出現恐慌發作,或有傷害自己的念頭,請儘速尋求身心科或心理專業協助;出現胸痛、呼吸困難時,請先就醫排除心臟問題。",
      en: "Reach out to a mental health professional if anxiety keeps disrupting daily life, you have panic attacks, or any thoughts of self-harm. For chest pain or trouble breathing, get medical care first to rule out heart problems.",
    },
  },
  {
    id: "fatigue",
    name: { zh: "疲勞提神", en: "Fatigue" },
    emoji: "🔋",
    category: "sleep-mood",
    blurb: {
      zh: "整天昏沉沒電、注意力渙散,午後特別想睡。",
      en: "Running on empty all day with foggy focus, especially through the mid-afternoon slump.",
    },
    acupointIds: ["baihui", "zusanli", "taiyang", "fengchi", "qihai"],
    tips: {
      zh: "每工作 50 分鐘就起身伸展、走動一下,曬曬太陽;午休控制在 20 到 30 分鐘內,晚上睡足 7 到 8 小時。",
      en: "Stand up, stretch, and get some daylight after every 50 minutes of work. Keep naps to 20-30 minutes, and aim for 7-8 hours of sleep at night.",
    },
    seekHelp: {
      zh: "若疲勞持續數週且休息也無法改善,或伴隨體重下降、發燒、心悸、情緒低落,請就醫檢查是否有甲狀腺、貧血等問題。",
      en: "See a doctor if fatigue persists for weeks despite rest, or comes with weight loss, fever, palpitations, or low mood — conditions like thyroid issues or anemia should be ruled out.",
    },
  },
  {
    id: "palpitations",
    name: { zh: "心悸", en: "Palpitations" },
    emoji: "💓",
    category: "sleep-mood",
    blurb: {
      zh: "感覺心臟砰砰跳、漏拍或跳得特別快,緊張或喝咖啡後更明顯。",
      en: "Feeling your heart pound, skip, or race, often more noticeable after stress or coffee.",
    },
    acupointIds: ["neiguan", "shenmen", "danzhong", "jianshi"],
    tips: {
      zh: "發作時先坐下來,做幾次緩慢的深呼吸;減少咖啡因、酒精與熬夜,並記下發作的時間與情境,方便就醫時描述。",
      en: "Sit down and take slow, deep breaths when it happens. Cut back on caffeine, alcohol, and late nights, and note when episodes occur so you can describe them to a doctor.",
    },
    seekHelp: {
      zh: "若心悸伴隨胸痛、呼吸困難、頭暈快昏倒或真的昏倒,請立即就醫;發作頻繁或每次持續很久,也應安排心臟檢查。",
      en: "Call for emergency care if palpitations come with chest pain, shortness of breath, near-fainting, or fainting. Frequent or prolonged episodes also warrant a heart check-up.",
    },
  },
];
