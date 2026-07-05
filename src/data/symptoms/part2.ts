import type { Symptom } from "../types";

export const SYMPTOMS_PART2: Symptom[] = [
  // ── pain (9) ──────────────────────────────────────────────────────────
  {
    id: "neck-shoulder",
    name: { zh: "肩頸痠痛", en: "Neck & shoulder tension" },
    emoji: "💆",
    category: "pain",
    blurb: {
      zh: "久坐、低頭滑手機後,肩膀和後頸緊繃痠脹。",
      en: "Tight, achy shoulders and neck after long sitting or looking down at screens.",
    },
    acupointIds: ["jianjing", "fengchi", "houxi", "tianzhu", "dazhui"],
    tips: {
      zh: "每工作 30–50 分鐘起身活動,做肩頸畫圈與側頸伸展;熱敷肩頸 15 分鐘能幫助放鬆。螢幕調到與視線齊高,減少低頭。",
      en: "Stand up and stretch every 30–50 minutes of work, rolling your shoulders and gently stretching the sides of your neck. A 15-minute warm compress helps release tension, and raising your screen to eye level reduces slouching.",
    },
    seekHelp: {
      zh: "若痠痛伴隨手臂麻木無力、劇烈頭痛、發燒,或休息數週仍不改善,請就醫檢查。",
      en: "See a doctor if the pain comes with arm numbness or weakness, severe headache, or fever, or if it doesn't improve after a few weeks of rest.",
    },
  },
  {
    id: "stiff-neck",
    name: { zh: "落枕", en: "Stiff neck" },
    emoji: "😖",
    category: "pain",
    blurb: {
      zh: "睡醒後脖子卡住,一轉頭就痛。",
      en: "Waking up with a locked, painful neck that hurts when you turn your head.",
    },
    acupointIds: ["houxi", "fengchi", "jianjing", "tianzhu"],
    tips: {
      zh: "先用熱毛巾敷後頸 15 分鐘,再邊按後谿邊慢慢地小幅度左右轉頭,不要硬扳。當晚換個高度合適的枕頭,避免側睡壓到痛側。",
      en: "Apply a hot towel to the back of your neck for 15 minutes, then press Houxi while slowly turning your head in a small, gentle range — never force it. Use a pillow of suitable height that night and avoid sleeping on the sore side.",
    },
    seekHelp: {
      zh: "若疼痛延伸到手臂、出現手麻,或超過一週未緩解,請就醫;曾有外傷撞擊者應立即就醫。",
      en: "See a doctor if the pain spreads down your arm, your hand goes numb, or it lasts more than a week. Seek care immediately if the stiffness followed an injury or impact.",
    },
  },
  {
    id: "low-back",
    name: { zh: "腰痠背痛", en: "Low back pain" },
    emoji: "🧍",
    category: "pain",
    blurb: {
      zh: "久坐久站或搬重物後,腰部痠痛僵硬。",
      en: "Aching, stiff lower back after long sitting, standing, or lifting.",
    },
    acupointIds: ["shenshu", "weizhong", "mingmen", "ciliao", "kunlun"],
    tips: {
      zh: "熱敷腰部 15–20 分鐘,搭配溫和的貓牛式伸展。搬東西時記得蹲下用腿出力,不要彎腰硬拉;久坐時在腰後放個小靠墊。",
      en: "Warm the lower back for 15–20 minutes and pair it with gentle cat-cow stretches. Lift with your legs by squatting instead of bending at the waist, and tuck a small cushion behind your lower back when sitting for long periods.",
    },
    seekHelp: {
      zh: "若出現下肢麻木無力、大小便異常(失禁或解不出來)、會陰部麻木,請立即就醫;伴隨發燒、不明體重下降或夜間痛醒也應盡快檢查。",
      en: "Seek medical care immediately if you have leg numbness or weakness, changes in bladder or bowel control, or numbness around the groin. Fever, unexplained weight loss, or pain that wakes you at night also warrants prompt evaluation.",
    },
  },
  {
    id: "knee-pain",
    name: { zh: "膝蓋痛", en: "Knee pain" },
    emoji: "🦵",
    category: "pain",
    blurb: {
      zh: "上下樓梯、蹲站時膝蓋痠痛無力。",
      en: "Sore, weak knees when climbing stairs, squatting, or standing up.",
    },
    acupointIds: ["dubi", "liangqiu", "xuehai", "yanglingquan", "zusanli"],
    tips: {
      zh: "平時多做直膝抬腿、靠牆微蹲等大腿肌力訓練,強壯的股四頭肌是膝蓋最好的護具。減少深蹲與跪姿,上下樓梯扶扶手;維持合適體重也能明顯減輕膝蓋負擔。",
      en: "Strengthen your thighs with straight-leg raises and shallow wall sits — strong quadriceps are the best knee brace. Limit deep squats and kneeling, use handrails on stairs, and keeping a healthy weight noticeably eases the load on your knees.",
    },
    seekHelp: {
      zh: "若膝蓋明顯腫脹發熱、無法承重行走、關節卡住或變形,或受傷當下聽到啪一聲,請盡快就醫。",
      en: "See a doctor promptly if the knee is visibly swollen and warm, can't bear weight, locks or looks deformed, or if you heard a pop at the moment of injury.",
    },
  },
  {
    id: "elbow-pain",
    name: { zh: "手肘痛/網球肘", en: "Elbow pain / tennis elbow" },
    emoji: "💪",
    category: "pain",
    blurb: {
      zh: "擰毛巾、提重物時手肘外側刺痛,常見於反覆用力的手部工作。",
      en: "Sharp pain on the outer elbow when wringing towels or lifting, common with repetitive hand work.",
    },
    acupointIds: ["quchi", "shousanli", "hegu", "waiguan"],
    tips: {
      zh: "先讓手肘休息,暫停擰、提、反覆抓握的動作;急性刺痛期可冰敷,慢性痠痛則改熱敷。恢復期做手腕伸肌的溫和伸展:手臂伸直、掌心朝下、輕壓手背。",
      en: "Rest the elbow first — pause wringing, lifting, and repetitive gripping. Ice during sharp acute pain, switch to warmth for chronic soreness, and in recovery gently stretch the wrist extensors: arm straight, palm down, lightly pressing the back of the hand.",
    },
    seekHelp: {
      zh: "若手肘明顯腫脹變形、無法伸直彎曲、手指麻木,或休息與保健數週後仍持續疼痛,請就醫評估。",
      en: "See a doctor if the elbow is visibly swollen or deformed, won't fully bend or straighten, your fingers go numb, or the pain persists after several weeks of rest and self-care.",
    },
  },
  {
    id: "wrist-pain",
    name: { zh: "手腕痛/滑鼠手", en: "Wrist pain" },
    emoji: "🖱️",
    category: "pain",
    blurb: {
      zh: "長時間打字、用滑鼠後,手腕痠痛甚至手指發麻。",
      en: "Achy wrists — sometimes with tingling fingers — after long hours of typing and mouse use.",
    },
    acupointIds: ["yangxi", "waiguan", "hegu", "lieque"],
    tips: {
      zh: "調整鍵盤滑鼠高度,讓手腕保持自然水平、不要上翹;每小時做手腕繞圈與雙掌合十下壓的伸展 30 秒。夜間手麻明顯的人,睡覺時讓手腕保持放鬆伸直。",
      en: "Set your keyboard and mouse so the wrist stays level and relaxed rather than bent upward, and do wrist circles plus a 30-second prayer stretch every hour. If tingling bothers you at night, keep the wrist relaxed and straight while you sleep.",
    },
    seekHelp: {
      zh: "若手指麻木刺痛持續加重、半夜麻醒、握力變差或大拇指根部肌肉萎縮,可能是神經受壓,請盡快就醫。",
      en: "If finger numbness keeps worsening, wakes you at night, your grip weakens, or the muscle at the base of the thumb shrinks, a nerve may be compressed — see a doctor soon.",
    },
  },
  {
    id: "leg-cramp",
    name: { zh: "小腿抽筋", en: "Leg cramps" },
    emoji: "⚡",
    category: "pain",
    blurb: {
      zh: "半夜或運動時小腿突然抽筋,肌肉緊縮劇痛。",
      en: "Sudden, painful calf cramps at night or during exercise.",
    },
    acupointIds: ["chengshan", "weizhong", "yanglingquan", "kunlun"],
    tips: {
      zh: "抽筋當下先把腳板往身體方向扳、伸直膝蓋拉長小腿,再按承山。平時睡前伸展小腿、泡熱水或熱敷,白天補足水分與含鎂、鉀的食物,例如香蕉和深綠色蔬菜。",
      en: "When a cramp hits, pull your toes toward you with the knee straight to lengthen the calf, then press Chengshan. To prevent cramps, stretch your calves before bed, use a warm soak or compress, and stay hydrated with magnesium- and potassium-rich foods like bananas and leafy greens.",
    },
    seekHelp: {
      zh: "若抽筋頻繁發作、單側小腿持續腫脹疼痛或發紅發熱(需排除血栓),或伴隨肌肉無力,請就醫檢查。",
      en: "See a doctor if cramps happen frequently, if one calf stays swollen, red, warm, or painful (a clot must be ruled out), or if cramps come with muscle weakness.",
    },
  },
  {
    id: "sciatica",
    name: { zh: "坐骨神經痛", en: "Sciatica" },
    emoji: "🦴",
    category: "pain",
    blurb: {
      zh: "從腰臀沿著大腿後側到小腿的放射性痠麻疼痛。",
      en: "Radiating pain or tingling running from the lower back and hip down the back of the leg.",
    },
    acupointIds: ["ciliao", "yanglingquan", "weizhong", "chengshan", "kunlun"],
    tips: {
      zh: "避免久坐與過軟的沙發,每 30 分鐘起身走動;熱敷腰臀可放鬆肌肉。溫和的梨狀肌伸展(翹腳抱膝)常有幫助,但任何加劇放射痛的動作都先暫停。",
      en: "Avoid long sitting and deep, soft sofas — get up and walk every 30 minutes, and warm the lower back and hip to relax the muscles. A gentle piriformis stretch (figure-four, hugging the knee) often helps, but pause any movement that intensifies the radiating pain.",
    },
    seekHelp: {
      zh: "若下肢麻木無力持續加重、大小便失禁或解不出來、會陰部麻木,請立即就醫,這可能是需要緊急處理的神經壓迫。",
      en: "Seek emergency care if leg numbness or weakness keeps worsening, you lose bladder or bowel control, or the groin area goes numb — these can signal nerve compression needing urgent treatment.",
    },
  },
  {
    id: "ankle-sprain",
    name: { zh: "腳踝扭傷恢復期", en: "Ankle sprain (recovery)" },
    emoji: "🩹",
    category: "pain",
    blurb: {
      zh: "扭傷腫痛消退後,腳踝仍痠軟無力、活動卡卡的恢復階段。",
      en: "The recovery stage after a sprain, when swelling has eased but the ankle still feels weak and stiff.",
    },
    acupointIds: ["kunlun", "xuanzhong", "zulinqi", "taixi"],
    tips: {
      zh: "本組合適合腫痛已明顯消退的恢復期;剛扭傷 48 小時內請以保護、冰敷、加壓、抬高為主,不要按摩患處。恢復期可熱敷後做腳踝畫圈等活動度練習,並練單腳站立找回平衡感。",
      en: "These points are for the recovery stage once swelling has clearly gone down — within 48 hours of the sprain, stick to protection, ice, compression, and elevation, and don't massage the injury. In recovery, warm the ankle, then do range-of-motion drills like ankle circles, and practice single-leg standing to rebuild balance.",
    },
    seekHelp: {
      zh: "若受傷當下完全無法踩地、骨頭處明顯壓痛或腳踝變形,請就醫排除骨折;數週後仍反覆腫痛或不穩,也應找醫師或物理治療師評估。",
      en: "Get medical evaluation if you couldn't bear weight right after the injury, there is marked tenderness over the bone, or the ankle looks deformed — a fracture must be ruled out. If swelling or instability keeps recurring after several weeks, see a doctor or physical therapist.",
    },
  },

  // ── womens (4) ────────────────────────────────────────────────────────
  {
    id: "menstrual-pain",
    name: { zh: "生理痛", en: "Menstrual pain" },
    emoji: "🌸",
    category: "womens",
    blurb: {
      zh: "經期前後下腹悶痛痠脹,有時連帶腰痠。",
      en: "Cramping, heavy aching in the lower abdomen around your period, sometimes with low back soreness.",
    },
    acupointIds: ["sanyinjiao", "guanyuan", "xuehai", "diji", "taichong"],
    tips: {
      zh: "熱敷下腹與後腰 15–20 分鐘,喝溫熱飲、避免生冷食物,經期前幾天減少咖啡因並保持溫和活動。孕期或備孕中請勿自行按壓這些穴位(多為孕婦禁忌),請先諮詢醫師。",
      en: "Apply warmth to the lower abdomen and lower back for 15–20 minutes, sip warm drinks, avoid icy foods, and cut back on caffeine in the days before your period while staying gently active. If you are pregnant or trying to conceive, do not press these points on your own — several are contraindicated in pregnancy — and consult your doctor first.",
    },
    seekHelp: {
      zh: "若痛到影響日常生活、止痛藥無效、經血量突然變多,或有非經期出血,請就醫檢查是否有子宮內膜異位症等問題。",
      en: "See a doctor if the pain disrupts daily life, painkillers don't help, bleeding suddenly becomes much heavier, or you bleed between periods — conditions like endometriosis should be ruled out.",
    },
  },
  {
    id: "irregular-period",
    name: { zh: "經期不順", en: "Irregular periods" },
    emoji: "📅",
    category: "womens",
    blurb: {
      zh: "月經週期忽早忽晚、經量時多時少。",
      en: "Cycles that come early or late, with flow that varies from heavy to scanty.",
    },
    acupointIds: ["sanyinjiao", "guanyuan", "qihai", "xuehai", "taichong"],
    tips: {
      zh: "規律作息與睡眠對週期影響很大,避免過度節食與劇烈減重;用月經 App 記錄週期,回診時是很有用的資訊。孕期或可能懷孕時請勿自行按壓這些穴位,先諮詢醫師。",
      en: "Regular sleep and routine matter a lot for your cycle, so avoid crash dieting and rapid weight loss, and track your cycle in an app — it's valuable information for your doctor. If you are or might be pregnant, do not press these points on your own; consult your doctor first.",
    },
    seekHelp: {
      zh: "若停經超過三個月且已排除懷孕、經血量異常大、非經期或性行為後出血,請就醫檢查荷爾蒙與婦科狀況。",
      en: "See a doctor if your period stops for more than three months (with pregnancy ruled out), bleeding is unusually heavy, or you bleed between periods or after intercourse — hormonal and gynecological causes should be checked.",
    },
  },
  {
    id: "menopause",
    name: { zh: "更年期不適", en: "Menopause discomfort" },
    emoji: "🌡️",
    category: "womens",
    blurb: {
      zh: "潮熱盜汗、情緒起伏、睡不安穩等更年期常見困擾。",
      en: "Hot flashes, night sweats, mood swings, and restless sleep common around menopause.",
    },
    acupointIds: ["sanyinjiao", "taixi", "shenmen", "taichong", "baihui"],
    tips: {
      zh: "穿易穿脫的多層衣物、臥室保持涼爽,減少酒精、咖啡因與辛辣食物可降低潮熱頻率;規律運動與充足鈣質、維生素 D 也有助於骨骼與情緒。若仍有懷孕可能,按壓前請先諮詢醫師。",
      en: "Dress in easy layers and keep the bedroom cool; cutting back on alcohol, caffeine, and spicy food can reduce hot flashes, while regular exercise plus adequate calcium and vitamin D supports bones and mood. If pregnancy is still possible for you, check with your doctor before pressing these points.",
    },
    seekHelp: {
      zh: "若停經滿一年後又出血,請務必就醫檢查;潮熱、失眠或情緒低落嚴重影響生活時,也可與醫師討論治療選項。",
      en: "Any bleeding that returns after a full year without periods must be checked by a doctor. If hot flashes, insomnia, or low mood seriously affect your life, discuss treatment options with your doctor as well.",
    },
  },
  {
    id: "cold-limbs",
    name: { zh: "手腳冰冷", en: "Cold hands & feet" },
    emoji: "🧊",
    category: "womens",
    blurb: {
      zh: "四肢末梢常年冰冷,冬天蓋了被子腳還是暖不起來。",
      en: "Hands and feet that stay cold year-round — even under blankets in winter.",
    },
    acupointIds: ["guanyuan", "qihai", "zusanli", "yongquan", "taixi"],
    tips: {
      zh: "睡前用約 40 度溫水泡腳 15 分鐘,擦乾後按湧泉再穿襪入睡;平時多做快走、深蹲等下肢運動促進末梢循環,避免過緊的鞋襪。孕期請勿自行按壓這些腹部與腿部穴位,先諮詢醫師。",
      en: "Soak your feet in warm (about 40°C) water for 15 minutes before bed, dry them, press Yongquan, and sleep in socks. Brisk walking and squats improve circulation to the extremities, and avoid overly tight shoes and socks. During pregnancy, do not press these abdominal and leg points on your own — consult your doctor first.",
    },
    seekHelp: {
      zh: "若手指腳趾遇冷會變白變紫、單側肢體冰冷伴疼痛,或同時容易疲倦、體重明顯變化,請就醫排除循環或甲狀腺問題。",
      en: "See a doctor if your fingers or toes turn white or purple in the cold, one limb is cold and painful, or the coldness comes with fatigue or noticeable weight changes — circulation and thyroid problems should be ruled out.",
    },
  },

  // ── cold-breath (3) ───────────────────────────────────────────────────
  {
    id: "common-cold",
    name: { zh: "感冒初期", en: "Early cold symptoms" },
    emoji: "🤧",
    category: "cold-breath",
    blurb: {
      zh: "剛開始怕冷、打噴嚏、流鼻水、頭有點脹的感冒前兆。",
      en: "The first signs of a cold — chills, sneezing, runny nose, and a slightly heavy head.",
    },
    acupointIds: ["fengchi", "hegu", "dazhui", "lieque", "yingxiang"],
    tips: {
      zh: "多喝溫水、早點睡,用圍巾或立領外套保暖頸後;洗完頭盡快吹乾。孕婦請勿按壓合谷,以休息保暖為主並諮詢醫師。",
      en: "Drink plenty of warm fluids, go to bed early, and keep the back of your neck warm with a scarf or high collar; dry your hair promptly after washing. If you are pregnant, skip Hegu and focus on rest and warmth, checking with your doctor.",
    },
    seekHelp: {
      zh: "若高燒超過三天、呼吸急促、胸痛、症狀超過十天未好轉,或先好轉又惡化,請就醫。",
      en: "See a doctor if a high fever lasts more than three days, you have shortness of breath or chest pain, symptoms last beyond ten days, or you improve and then get worse again.",
    },
  },
  {
    id: "cough",
    name: { zh: "咳嗽", en: "Cough" },
    emoji: "😷",
    category: "cold-breath",
    blurb: {
      zh: "感冒後咳個不停,喉嚨癢、有痰或乾咳。",
      en: "A lingering cough after a cold — tickly throat, phlegmy or dry.",
    },
    acupointIds: ["lieque", "chize", "feishu", "danzhong", "yuji"],
    tips: {
      zh: "保持室內濕度、睡覺時稍微墊高枕頭,溫蜂蜜水能舒緩喉嚨,但一歲以下嬰兒禁用蜂蜜;避免菸味、油煙與冰飲刺激呼吸道。",
      en: "Keep indoor air humid and raise your pillow slightly at night; warm honey water soothes the throat, but never give honey to babies under one. Avoid smoke, cooking fumes, and icy drinks that irritate the airway.",
    },
    seekHelp: {
      zh: "若咳嗽超過三週、咳血、呼吸喘鳴或胸痛、伴隨高燒或不明體重下降,請就醫檢查。",
      en: "See a doctor if the cough lasts over three weeks, you cough up blood, breathing becomes wheezy or painful, or the cough comes with high fever or unexplained weight loss.",
    },
  },
  {
    id: "hiccup",
    name: { zh: "打嗝", en: "Hiccups" },
    emoji: "😮‍💨",
    category: "cold-breath",
    blurb: {
      zh: "橫膈膜不聽話,嗝個不停停不下來。",
      en: "A diaphragm with a mind of its own — hiccups that just won't stop.",
    },
    acupointIds: ["neiguan", "danzhong", "zhongwan", "zusanli"],
    tips: {
      zh: "小口慢慢喝溫水、憋氣 10–15 秒,或用紙袋緩慢呼吸幾次,常能中斷打嗝;吃飯放慢速度、少喝碳酸飲料可減少發作。",
      en: "Sip warm water slowly, hold your breath for 10–15 seconds, or breathe slowly into a paper bag a few times — these often break the cycle. Eating more slowly and cutting back on fizzy drinks helps prevent hiccups.",
    },
    seekHelp: {
      zh: "若打嗝持續超過 48 小時、影響進食與睡眠,或伴隨腹痛、吞嚥困難,請就醫查明原因。",
      en: "See a doctor if hiccups last more than 48 hours, interfere with eating or sleeping, or come with abdominal pain or trouble swallowing.",
    },
  },

  // ── misc (2) ──────────────────────────────────────────────────────────
  {
    id: "hangover",
    name: { zh: "宿醉", en: "Hangover" },
    emoji: "🍺",
    category: "misc",
    blurb: {
      zh: "喝多了隔天頭痛、噁心、全身沉重提不起勁。",
      en: "The morning after — pounding head, queasy stomach, and zero energy.",
    },
    acupointIds: ["neiguan", "taichong", "hegu", "zhongwan", "baihui"],
    tips: {
      zh: "小口補充水分與電解質,吃清淡易消化的食物如粥、香蕉、吐司,多休息;不要再喝酒解酒,那只會延後不適。下次喝酒前先吃點東西、酒間穿插開水。",
      en: "Rehydrate in small sips with water and electrolytes, eat bland easy foods like congee, bananas, or toast, and rest. Skip the hair of the dog — it only delays the misery. Next time, eat before drinking and alternate alcohol with water.",
    },
    seekHelp: {
      zh: "若出現意識混亂、持續嘔吐無法進水、嘔吐物帶血、呼吸異常緩慢或抽搐,可能是酒精中毒,請立即就醫。",
      en: "Seek emergency care for confusion, vomiting that prevents keeping fluids down, blood in vomit, unusually slow breathing, or seizures — these can signal alcohol poisoning.",
    },
  },
  {
    id: "edema",
    name: { zh: "水腫", en: "Water retention" },
    emoji: "💧",
    category: "misc",
    blurb: {
      zh: "久坐久站後小腿腳踝腫脹,襪痕特別明顯。",
      en: "Puffy calves and ankles after long sitting or standing, with tight shoes and deep sock marks.",
    },
    acupointIds: ["yinlingquan", "shuifen", "sanyinjiao", "zusanli", "fenglong"],
    tips: {
      zh: "睡前把腿抬高於心臟 15 分鐘,久站族可穿彈性襪;減少重口味與加工食品的鈉攝取,白天正常喝水反而有助代謝。孕期水腫請勿自行按壓,三陰交為孕婦禁忌,請先諮詢醫師。",
      en: "Elevate your legs above heart level for 15 minutes before bed, and consider compression socks if you stand all day. Cut sodium from salty and processed foods — drinking water normally through the day actually helps your body let go of fluid. For swelling during pregnancy, do not press these points on your own, as Sanyinjiao is contraindicated in pregnancy; consult your doctor first.",
    },
    seekHelp: {
      zh: "若單側腿突然腫脹疼痛(需排除血栓)、按壓凹陷久久不回彈,或水腫合併呼吸困難、尿量變少、眼皮浮腫,請盡快就醫。",
      en: "See a doctor promptly if one leg swells suddenly and painfully (a clot must be ruled out), a finger press leaves a long-lasting dent, or swelling comes with shortness of breath, reduced urination, or puffy eyelids.",
    },
  },
];
