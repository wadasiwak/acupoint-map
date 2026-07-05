import type { Acupoint } from "../types";

export const ACUPOINTS_SHOULDER_TORSO: Acupoint[] = [
  // ── neck-shoulder ──────────────────────────────────────────────
  {
    id: "jianjing",
    code: "GB21",
    name: { zh: "肩井", en: "Jianjing (Shoulder Well)" },
    meridian: { zh: "足少陽膽經", en: "Gallbladder meridian" },
    region: "neck-shoulder",
    howToFind: {
      zh: "低頭時頸後最突出的骨頭(大椎)與肩膀最外側的肩峰之間,取正中點,就在肩膀最高處的肌肉上;按下去通常會有明顯痠脹感。",
      en: "Find the midpoint between the bony bump at the base of your neck (C7) and the tip of your shoulder. The point sits on the highest part of the shoulder muscle and usually feels distinctly sore when pressed.",
    },
    howToPress: {
      zh: "用對側手的食指、中指指腹按住,以適中力道揉按約 1 分鐘,再換邊;也可請家人用雙手拇指同時按壓兩側,以出現痠脹感為度。",
      en: "Use the pads of your opposite index and middle fingers to knead with moderate pressure for about 1 minute, then switch sides. A helper can press both sides at once with their thumbs. Aim for a comfortable ache.",
    },
    goodFor: {
      zh: "有助舒緩肩頸僵硬痠痛、落枕與緊繃型頭痛,是久坐上班族放鬆肩膀的常用穴。",
      en: "Helps ease neck and shoulder stiffness, a wry neck, and tension-type headaches — a go-to point for desk workers with tight shoulders.",
    },
    cautions: {
      zh: "🤰 孕婦禁按:傳統上認為刺激肩井可能引發子宮收縮,孕期請完全避開此穴。按壓力道以痠脹舒適為度,不要用力捶打。",
      en: "🤰 Do not press during pregnancy: this point is traditionally believed to stimulate uterine contractions, so avoid it entirely while pregnant. Keep pressure to a comfortable ache and never pound the area.",
    },
  },
  {
    id: "dazhui",
    code: "GV14",
    name: { zh: "大椎", en: "Dazhui (Great Vertebra)" },
    meridian: { zh: "督脈", en: "Governing Vessel" },
    region: "neck-shoulder",
    howToFind: {
      zh: "低頭時,頸後正中會有一塊最突出的骨頭(第七頸椎棘突),大椎就在這塊骨頭正下方的凹陷處,位於身體正中線上。",
      en: "Tilt your head forward and feel for the most prominent bone at the base of the back of your neck (the C7 spinous process). Dazhui sits in the hollow just below that bump, on the midline.",
    },
    howToPress: {
      zh: "用中指指腹輕柔按揉約 1 分鐘,或以掌心搓熱後捂住此處溫暖它;力道宜輕,按在骨頭下方的凹陷,不要敲打脊椎。",
      en: "Gently massage with the pad of your middle finger for about 1 minute, or rub your palm warm and cup it over the area. Keep pressure light, stay in the hollow below the bone, and never strike the spine.",
    },
    goodFor: {
      zh: "有助舒緩肩頸僵硬與怕冷畏寒,感冒初期溫暖此處也有幫助,是保暖提振的常用穴。",
      en: "Helps relieve neck stiffness and chills, and warming this spot at the first sign of a cold can be soothing — a classic point for warming up and perking up.",
    },
    cautions: {
      zh: "此穴位於脊椎上,只可輕柔按揉或熱敷,切勿用力按壓或捶打脊椎骨本身。",
      en: "This point lies over the spine — only gentle massage or a warm compress here. Never press hard on or hammer the vertebrae themselves.",
    },
  },
  {
    id: "tianzhu",
    code: "BL10",
    name: { zh: "天柱", en: "Tianzhu (Celestial Pillar)" },
    meridian: { zh: "足太陽膀胱經", en: "Bladder meridian" },
    region: "neck-shoulder",
    howToFind: {
      zh: "後腦髮際正中兩側各約兩指寬處,摸到頸後兩條粗大的直立肌肉(斜方肌),天柱就在肌肉外緣靠近髮際的凹陷中,左右各一。",
      en: "At the back hairline, feel the two thick vertical muscles on either side of the neck. Tianzhu sits in the depression on the outer edge of each muscle, about two finger-widths from the midline — one point on each side.",
    },
    howToPress: {
      zh: "雙手抱住後腦,用兩手拇指指腹同時按住兩側穴位,朝頭的方向緩緩施力揉按約 1 分鐘,可搭配緩慢的深呼吸。",
      en: "Cradle the back of your head with both hands and press both points with your thumbs, angling gently toward the skull. Knead slowly for about 1 minute while taking slow, deep breaths.",
    },
    goodFor: {
      zh: "有助舒緩頸部僵硬痠痛、後頭部緊繃型頭痛與用眼過度的疲勞感。",
      en: "Helps ease a stiff, sore neck, tension headaches at the back of the head, and the heavy-eyed fatigue of too much screen time.",
    },
    cautions: {
      zh: "力道放輕慢慢加壓,避免突然用力;按壓時如出現頭暈或手麻請立即停止。",
      en: "Increase pressure slowly and avoid sudden force. Stop immediately if you feel dizzy or notice tingling in your hands while pressing.",
    },
  },
  {
    id: "jianyu",
    code: "LI15",
    name: { zh: "肩髃", en: "Jianyu (Shoulder Bone)" },
    meridian: { zh: "手陽明大腸經", en: "Large Intestine meridian" },
    region: "neck-shoulder",
    howToFind: {
      zh: "手臂向外平舉時,肩膀最外側的骨頭前後會出現兩個凹陷,肩髃就在前方的那個凹陷中;放下手臂後,該處位於肩峰前下方。",
      en: "Raise your arm out to the side: two dimples appear at the tip of the shoulder. Jianyu is in the front dimple. With the arm lowered, it sits just below and in front of the bony point of the shoulder.",
    },
    howToPress: {
      zh: "用對側手的中指或拇指指腹按住,揉按約 1 分鐘,力道適中;也可一邊輕按一邊緩慢地抬放手臂,幫助肩關節放鬆。",
      en: "Press with the thumb or middle finger of your opposite hand and knead for about 1 minute at moderate strength. You can also slowly raise and lower the arm while pressing to help the joint relax.",
    },
    goodFor: {
      zh: "有助舒緩肩關節痠痛、手臂抬舉不順與五十肩的僵硬不適。",
      en: "Helps relieve shoulder-joint soreness, difficulty raising the arm, and the stiffness of a frozen shoulder.",
    },
    cautions: {
      zh: "肩膀急性拉傷或紅腫熱痛時不宜按壓,待急性期過後再進行保健按摩。",
      en: "Avoid pressing during an acute shoulder injury or when the joint is red, hot, or swollen — wait until the acute phase has passed.",
    },
  },
  {
    id: "tianzong",
    code: "SI11",
    name: { zh: "天宗", en: "Tianzong (Celestial Gathering)" },
    meridian: { zh: "手太陽小腸經", en: "Small Intestine meridian" },
    region: "neck-shoulder",
    howToFind: {
      zh: "位於肩胛骨中央的凹窩處,約在肩胛骨上下高度的上三分之一;自己不易按到,請家人幫忙在肩胛骨正中偏上找最痠的一點按壓。",
      en: "In the hollow at the center of the shoulder blade, roughly a third of the way down the blade. It is hard to reach yourself — ask a family member to find the most tender spot near the middle of the blade.",
    },
    howToPress: {
      zh: "請家人用拇指指腹按住穴位,以適中力道揉按約 1 分鐘;也可背靠牆壁,用網球夾在牆與肩胛骨之間慢慢滾壓。",
      en: "Have a helper press the point with their thumb and knead at moderate strength for about 1 minute. Alternatively, trap a tennis ball between the wall and your shoulder blade and roll slowly against it.",
    },
    goodFor: {
      zh: "有助舒緩肩胛骨一帶的痠痛緊繃,以及肩背僵硬造成的活動不適。",
      en: "Helps ease aching and tightness around the shoulder blade, and the restricted movement that comes with a stiff upper back.",
    },
    cautions: {
      zh: "按壓時痠脹感明顯屬正常,但若出現刺痛或麻電感請減輕力道或停止。",
      en: "A strong achy sensation here is normal, but ease off or stop if you feel sharp pain or an electric tingling.",
    },
  },
  {
    id: "gaohuang",
    code: "BL43",
    name: { zh: "膏肓", en: "Gaohuang (Vital Region)" },
    meridian: { zh: "足太陽膀胱經", en: "Bladder meridian" },
    region: "neck-shoulder",
    howToFind: {
      zh: "低頭找到頸後最突出的骨頭,往下數到第四胸椎棘突,再向外約四指寬,靠近肩胛骨內側緣處即是;請家人協助按壓較容易找到。",
      en: "From the bony bump at the base of the neck, count down to the 4th thoracic vertebra, then move about four finger-widths outward, near the inner edge of the shoulder blade. Easiest to locate with a helper.",
    },
    howToPress: {
      zh: "請家人用拇指或掌根沿肩胛骨內側緣輕柔揉按約 1 至 2 分鐘;也可用網球抵住牆壁滾壓,或以熱敷袋溫敷此區。",
      en: "Have a helper knead gently with a thumb or the heel of the hand along the inner edge of the shoulder blade for 1-2 minutes. A tennis ball against the wall or a warm compress over the area also works well.",
    },
    goodFor: {
      zh: "有助舒緩長期肩背僵硬痠痛與疲勞倦怠,傳統上也常用於呼吸道保養。",
      en: "Helps relieve chronic upper-back stiffness and general fatigue; traditionally also used to support respiratory wellness.",
    },
    cautions: {
      zh: "按摩範圍保持在肩胛骨內緣的肌肉上,不要重壓或捶打中間的脊椎骨。",
      en: "Keep the massage on the muscle near the inner edge of the shoulder blade — never press hard on or strike the spine in the middle.",
    },
  },

  // ── torso ──────────────────────────────────────────────────────
  {
    id: "feishu",
    code: "BL13",
    name: { zh: "肺俞", en: "Feishu (Lung Shu)" },
    meridian: { zh: "足太陽膀胱經", en: "Bladder meridian" },
    region: "torso",
    howToFind: {
      zh: "低頭找到頸後最突出的骨頭,往下數到第三胸椎棘突,左右各旁開約兩指寬處即是;位置在上背部,請家人協助按壓較準確。",
      en: "From the bony bump at the base of the neck, count down to the 3rd thoracic vertebra, then move about two finger-widths to either side. It sits on the upper back, so a helper can locate it more accurately.",
    },
    howToPress: {
      zh: "請家人用兩手拇指同時按揉兩側穴位約 1 分鐘,力道輕柔;天冷或咳嗽時也可以熱敷袋溫敷上背部這一帶。",
      en: "Have a helper knead both sides with their thumbs for about 1 minute using gentle pressure. In cold weather or when coughing, a warm compress over this part of the upper back is also soothing.",
    },
    goodFor: {
      zh: "有助舒緩咳嗽、感冒初期的不適與胸悶,是呼吸道保健的代表穴位。",
      en: "Helps ease coughing, early-cold discomfort, and chest tightness — a signature point for respiratory self-care.",
    },
    cautions: {
      zh: "按揉時避開正中的脊椎骨,只按兩側肌肉,不要重壓或敲打脊椎本身。",
      en: "Stay on the muscles beside the spine — avoid pressing hard on or tapping the vertebrae themselves.",
    },
  },
  {
    id: "shenshu",
    code: "BL23",
    name: { zh: "腎俞", en: "Shenshu (Kidney Shu)" },
    meridian: { zh: "足太陽膀胱經", en: "Bladder meridian" },
    region: "torso",
    howToFind: {
      zh: "腰部與肚臍同高的位置,在脊椎正中(第二腰椎棘突下)左右各旁開約兩指寬處;雙手插腰時,拇指自然按到的腰部肌肉上即是。",
      en: "At waist level, roughly in line with the navel: from the spine (below the 2nd lumbar vertebra), move about two finger-widths to each side. With hands on your hips, your thumbs land naturally on the spot.",
    },
    howToPress: {
      zh: "雙手握拳,用拳背或拇指按揉兩側穴位約 1 至 2 分鐘,或以掌心搓熱後上下摩擦腰部至微微發熱,早晚各一次。",
      en: "Knead both sides with your thumbs or loosely closed fists for 1-2 minutes, or rub your palms warm and briskly massage the waist up and down until it feels pleasantly warm — morning and evening.",
    },
    goodFor: {
      zh: "有助舒緩腰部痠軟無力與疲勞,傳統上是強腰補腎、日常保養的重要穴位。",
      en: "Helps relieve a weak, achy lower back and general fatigue; traditionally a key point for strengthening the lower back and supporting kidney health.",
    },
    cautions: {
      zh: "按摩位置在脊椎兩側的肌肉,勿重壓或捶打脊椎;急性腰扭傷疼痛劇烈時請先就醫。",
      en: "Work the muscles beside the spine, never pounding the vertebrae. If you have an acute back injury with severe pain, see a doctor first.",
    },
  },
  {
    id: "mingmen",
    code: "GV4",
    name: { zh: "命門", en: "Mingmen (Gate of Life)" },
    meridian: { zh: "督脈", en: "Governing Vessel" },
    region: "torso",
    howToFind: {
      zh: "位於腰部正中線上,與肚臍前後相對的高度,即第二腰椎棘突下方的凹陷處;可先摸到骨盆上緣連線再往上找,或請家人協助定位。",
      en: "On the midline of the lower back, at the same height as the navel — in the hollow below the 2nd lumbar vertebra. Trace up from the line joining the tops of the hip bones, or ask a helper to locate it.",
    },
    howToPress: {
      zh: "用中指指腹輕柔按揉約 1 分鐘,或雙掌搓熱後以掌心覆蓋此處溫暖它;力道務必輕柔,不可用力按壓脊椎。",
      en: "Massage gently with the pad of your middle finger for about 1 minute, or rub your palms warm and rest one over the point. Keep it gentle — never press hard on the spine.",
    },
    goodFor: {
      zh: "有助舒緩腰部冷痛痠軟與下半身怕冷,傳統上視為溫養元氣的保健要穴。",
      en: "Helps ease a cold, achy lower back and chilliness in the lower body; traditionally regarded as a key point for warming and nourishing vitality.",
    },
    cautions: {
      zh: "此穴位於脊椎正中,只宜輕揉或溫敷,嚴禁重壓、捶打脊椎骨本身。",
      en: "This point lies directly over the spine — gentle rubbing or warmth only. Never apply heavy pressure or strike the vertebrae.",
    },
  },
  {
    id: "ciliao",
    code: "BL32",
    name: { zh: "次髎", en: "Ciliao (Second Crevice)" },
    meridian: { zh: "足太陽膀胱經", en: "Bladder meridian" },
    region: "torso",
    howToFind: {
      zh: "位於骨盆後方的骶骨上,約在腰部下方、臀部上緣的平坦骨面,左右各有一個小凹陷(第二骶後孔);請家人協助在此區找最痠的點按壓。",
      en: "On the sacrum — the flat bone below the waist, above the buttocks. On each side there is a small dimple (the second sacral foramen). Ask a helper to find the most tender spot in this area.",
    },
    howToPress: {
      zh: "請家人用兩手拇指按住兩側凹陷,以適中力道揉按約 1 至 2 分鐘;生理期腰痠時也可以熱敷袋溫敷骶骨一帶。",
      en: "Have a helper press both dimples with their thumbs and knead at moderate strength for 1-2 minutes. During a period, a warm compress over the sacrum area is also comforting.",
    },
    goodFor: {
      zh: "有助舒緩生理痛、腰骶部痠痛與下背緊繃,是女性經期保健的常用穴。",
      en: "Helps relieve menstrual cramps, sacral and lower-back soreness, and tightness — a popular point for period self-care.",
    },
    cautions: {
      zh: "🤰 孕婦禁按或務必先諮詢醫師:此穴傳統上用於催產,孕期請避開。按摩時勿捶打脊椎與骶骨,力道以痠脹舒適為度。",
      en: "🤰 Avoid during pregnancy (or consult a doctor first): this point is traditionally used to induce labor. Do not hammer the spine or sacrum; keep pressure to a comfortable ache.",
    },
  },
  {
    id: "danzhong",
    code: "CV17",
    name: { zh: "膻中", en: "Danzhong (Chest Center)" },
    meridian: { zh: "任脈", en: "Conception Vessel" },
    region: "torso",
    howToFind: {
      zh: "位於胸口正中線上,兩乳頭連線的中點,按在胸骨這塊扁平骨頭上;按壓時常有輕微痠脹感,悶悶不舒服時特別明顯。",
      en: "On the midline of the chest, at the midpoint of the line joining the nipples, over the flat breastbone. It often feels mildly tender, especially when your chest feels tight.",
    },
    howToPress: {
      zh: "用中指指腹輕輕按揉約 1 分鐘,或以指腹由上往下輕撫胸骨,搭配緩慢深呼吸;力道宜輕,以放鬆舒適為主。",
      en: "Massage gently with the pad of your middle finger for about 1 minute, or stroke lightly down the breastbone while breathing slowly and deeply. Keep the pressure light and relaxing.",
    },
    goodFor: {
      zh: "有助舒緩胸悶、壓力大時的心浮氣躁與心悸不適,幫助情緒放鬆、呼吸順暢。",
      en: "Helps relieve chest tightness, stress-related restlessness, and mild palpitations — encouraging calmer moods and easier breathing.",
    },
    cautions: {
      zh: "此處直接位於胸骨上,只宜輕柔按撫,勿用力按壓或敲打;若胸痛劇烈或伴隨呼吸困難,請立即就醫而非按穴。",
      en: "This point sits directly on the breastbone — gentle strokes only, no hard pressing or thumping. For severe chest pain or trouble breathing, seek medical care immediately instead of pressing.",
    },
  },
  {
    id: "zhongwan",
    code: "CV12",
    name: { zh: "中脘", en: "Zhongwan (Middle Cavity)" },
    meridian: { zh: "任脈", en: "Conception Vessel" },
    region: "torso",
    howToFind: {
      zh: "位於腹部正中線上,肚臍與胸骨下端(心窩處)連線的中點,約在肚臍上方四指再多一點的位置,躺下放鬆時較容易按準。",
      en: "On the midline of the abdomen, halfway between the navel and the lower tip of the breastbone. It is easiest to press accurately while lying down with the belly relaxed.",
    },
    howToPress: {
      zh: "用食指、中指併攏的指腹輕柔畫圈按揉約 1 至 2 分鐘,配合腹式呼吸;胃部怕冷者也可以掌心搓熱後溫敷此處。",
      en: "With the pads of your index and middle fingers together, massage in gentle circles for 1-2 minutes while breathing into your belly. If your stomach runs cold, warm palms resting over the point also help.",
    },
    goodFor: {
      zh: "有助舒緩胃脹、消化不良與食慾不振,是照顧腸胃的核心保健穴。",
      en: "Helps ease bloating, indigestion, and a poor appetite — a core point for everyday digestive care.",
    },
    cautions: {
      zh: "飽餐後一小時內不宜按壓腹部,力道保持輕柔;孕婦按壓腹部穴位前請先諮詢醫師。胃痛劇烈不明原因時請就醫。",
      en: "Avoid pressing the abdomen within an hour after a full meal, and keep pressure gentle. If pregnant, consult a doctor before pressing abdominal points. See a doctor for severe or unexplained stomach pain.",
    },
  },
  {
    id: "tianshu",
    code: "ST25",
    name: { zh: "天樞", en: "Tianshu (Celestial Pivot)" },
    meridian: { zh: "足陽明胃經", en: "Stomach meridian" },
    region: "torso",
    howToFind: {
      zh: "位於腹部,肚臍左右各旁開約三指寬處,左右各一;平躺放鬆腹部後,以肚臍為中心向兩側量三指即可找到。",
      en: "On the abdomen, about three finger-widths to either side of the navel — one point on each side. Lie down, relax your belly, and measure three fingers out from the navel on each side.",
    },
    howToPress: {
      zh: "用兩手食指與中指指腹同時輕按兩側穴位,順時針畫圈揉按約 1 至 2 分鐘,力道輕柔,以腹部微微痠脹為度。",
      en: "Press both points at once with the pads of your index and middle fingers, kneading in gentle clockwise circles for 1-2 minutes. Keep it light — a mild achy feeling in the belly is enough.",
    },
    goodFor: {
      zh: "有助舒緩便祕、腹脹與腹瀉等腸道不適,幫助腸胃蠕動更順暢。",
      en: "Helps relieve constipation, bloating, and diarrhea, supporting smoother bowel movement.",
    },
    cautions: {
      zh: "飽餐後不宜重壓腹部;🤰 孕婦請避免按壓腹部穴位或先諮詢醫師。腹痛劇烈或持續不明原因時請就醫。",
      en: "Do not press the abdomen firmly after a full meal. 🤰 If pregnant, avoid abdominal points or consult a doctor first. Seek medical care for severe or persistent unexplained abdominal pain.",
    },
  },
  {
    id: "qihai",
    code: "CV6",
    name: { zh: "氣海", en: "Qihai (Sea of Qi)" },
    meridian: { zh: "任脈", en: "Conception Vessel" },
    region: "torso",
    howToFind: {
      zh: "位於下腹部正中線上,肚臍正下方約兩指寬(食指與中指併攏的寬度)處;平躺放鬆腹部,由肚臍往下量兩指即是。",
      en: "On the midline of the lower abdomen, about two finger-widths (index and middle fingers together) straight below the navel. Lie back, relax the belly, and measure down two fingers from the navel.",
    },
    howToPress: {
      zh: "用手掌或指腹輕柔畫圈按揉約 1 至 2 分鐘,或雙掌搓熱後覆蓋溫敷;力道務必輕柔,微微溫熱痠脹即可。",
      en: "Massage in slow, gentle circles with your palm or fingertips for 1-2 minutes, or rub your palms warm and rest them over the point. Keep it very gentle — mild warmth and ache is plenty.",
    },
    goodFor: {
      zh: "有助改善疲倦無力、腹部怕冷與經期不適,傳統上是補氣養元的保健要穴。",
      en: "Helps with tiredness, a cold-feeling lower belly, and period discomfort; traditionally a key point for replenishing energy.",
    },
    cautions: {
      zh: "🤰 孕婦禁按下腹部穴位。飽餐後不宜重壓腹部,經期力道更要放輕;下腹持續疼痛不明原因時請就醫。",
      en: "🤰 Do not press lower-abdominal points during pregnancy. Avoid firm abdominal pressure after a full meal, and go extra gently during your period. See a doctor for persistent unexplained lower-belly pain.",
    },
  },
  {
    id: "guanyuan",
    code: "CV4",
    name: { zh: "關元", en: "Guanyuan (Gate of Origin)" },
    meridian: { zh: "任脈", en: "Conception Vessel" },
    region: "torso",
    howToFind: {
      zh: "位於下腹部正中線上,肚臍正下方約四指寬(除拇指外四指併攏的寬度)處;平躺後將四指橫放在肚臍下緣,小指下方即是。",
      en: "On the midline of the lower abdomen, about four finger-widths below the navel. Lying down, lay four fingers flat below the navel — the point is just under your little finger.",
    },
    howToPress: {
      zh: "用掌心或指腹輕柔畫圈按揉約 1 至 2 分鐘,或以搓熱的手掌、暖暖包隔著衣物溫敷此處,以溫熱舒適為度。",
      en: "Massage in gentle circles with your palm or fingertips for 1-2 minutes, or warm the area with heated palms or a heat pack over clothing. Aim for cozy warmth, not pressure.",
    },
    goodFor: {
      zh: "有助改善手腳冰冷、疲倦與經期不適,傳統上視為溫補元氣、日常養生的重點穴。",
      en: "Helps with cold hands and feet, fatigue, and period discomfort; traditionally a cornerstone point for warming and strengthening the body's reserves.",
    },
    cautions: {
      zh: "🤰 孕婦禁按下腹部穴位。飽餐後不宜重壓腹部;溫敷時注意溫度避免燙傷,下腹持續疼痛請就醫。",
      en: "🤰 Do not press lower-abdominal points during pregnancy. Avoid firm pressure after a full meal, watch heat-pack temperature to prevent burns, and see a doctor for persistent lower-belly pain.",
    },
  },
  {
    id: "zhongji",
    code: "CV3",
    name: { zh: "中極", en: "Zhongji (Central Pole)" },
    meridian: { zh: "任脈", en: "Conception Vessel" },
    region: "torso",
    howToFind: {
      zh: "位於下腹部正中線上,恥骨(下腹最底端摸到的橫向硬骨)上緣往上約一拇指寬處,也就是肚臍下方約五指寬的位置。",
      en: "On the midline of the lower abdomen, about one thumb-width above the top edge of the pubic bone (the hard horizontal bone at the very bottom of the belly) — roughly a hand-width below the navel.",
    },
    howToPress: {
      zh: "先排空膀胱,再用指腹輕柔畫圈按揉約 1 分鐘,或以溫熱的手掌覆蓋溫敷;此處貼近膀胱,力道務必輕。",
      en: "Empty your bladder first, then massage in gentle circles with your fingertips for about 1 minute, or rest a warm palm over the point. It sits close to the bladder, so keep pressure very light.",
    },
    goodFor: {
      zh: "有助舒緩頻尿、排尿不順與經期下腹悶脹等不適,是泌尿與婦科保健的常用穴。",
      en: "Helps ease frequent urination, sluggish urination, and period-related lower-belly heaviness — a common point for urinary and gynecological self-care.",
    },
    cautions: {
      zh: "🤰 孕婦禁按下腹部穴位。按壓前先排尿,飽餐後不宜重壓腹部;排尿疼痛、血尿或發燒請就醫,勿只靠按摩。",
      en: "🤰 Do not press lower-abdominal points during pregnancy. Empty your bladder first and avoid firm pressure after meals. For painful urination, blood in urine, or fever, see a doctor — do not rely on massage.",
    },
  },
  {
    id: "qimen",
    code: "LR14",
    name: { zh: "期門", en: "Qimen (Cycle Gate)" },
    meridian: { zh: "足厥陰肝經", en: "Liver meridian" },
    region: "torso",
    howToFind: {
      zh: "位於前胸,乳頭正下方往下數兩條肋骨的肋間隙中(第六肋間),約與心窩同高;沿乳頭垂直線往下摸,兩根肋骨之間的軟溝處即是。",
      en: "On the front of the chest, straight below the nipple: count down two rib spaces to the 6th intercostal space, about level with the pit of the stomach. Feel for the soft groove between two ribs on that vertical line.",
    },
    howToPress: {
      zh: "用食指與中指指腹沿肋骨間隙輕柔按揉約 1 分鐘,配合緩慢深呼吸;按在肋骨之間的軟組織上,不要壓在肋骨上。",
      en: "Using the pads of your index and middle fingers, gently massage along the rib space for about 1 minute while breathing slowly and deeply. Stay in the soft groove between ribs, not on the bone.",
    },
    goodFor: {
      zh: "有助舒緩胸脅悶脹、壓力大或心情鬱悶時的肋間緊繃感,幫助情緒與消化順暢。",
      en: "Helps relieve fullness and tightness along the ribs when stressed or moody, supporting smoother mood and digestion.",
    },
    cautions: {
      zh: "只宜輕柔按揉,切勿重壓或敲打肋骨;肋骨附近曾受傷或按壓劇痛時請避免,孕婦按壓軀幹穴位前請先諮詢醫師。",
      en: "Gentle kneading only — never press hard on or strike the ribs. Skip this point if the area was injured or is sharply painful, and if pregnant, consult a doctor before pressing torso points.",
    },
  },
  {
    id: "shuifen",
    code: "CV9",
    name: { zh: "水分", en: "Shuifen (Water Divide)" },
    meridian: { zh: "任脈", en: "Conception Vessel" },
    region: "torso",
    howToFind: {
      zh: "位於腹部正中線上,肚臍正上方約一拇指寬處;平躺放鬆腹部,把拇指橫放在肚臍上緣,拇指上方緊鄰處即是。",
      en: "On the midline of the abdomen, about one thumb-width straight above the navel. Lie down, relax the belly, and place your thumb sideways on the upper edge of the navel — the point is just above it.",
    },
    howToPress: {
      zh: "用指腹輕柔畫圈按揉約 1 至 2 分鐘,力道放輕,配合腹式呼吸;也可與周圍腹部一起以掌心順時針輕撫。",
      en: "Massage in gentle circles with your fingertips for 1-2 minutes, keeping pressure light and breathing into your belly. You can also stroke the surrounding abdomen clockwise with your palm.",
    },
    goodFor: {
      zh: "有助改善水腫、腹部脹滿等水分代謝相關的不適,常搭配清淡飲食一起保養。",
      en: "Helps with water retention and abdominal bloating related to fluid metabolism — best paired with a lighter diet.",
    },
    cautions: {
      zh: "飽餐後不宜重壓腹部;🤰 孕婦請避免按壓腹部穴位或先諮詢醫師。水腫持續不消或伴隨喘、尿量明顯減少時請就醫。",
      en: "Avoid firm abdominal pressure after a full meal. 🤰 If pregnant, avoid abdominal points or consult a doctor first. See a doctor if swelling persists or comes with breathlessness or much-reduced urination.",
    },
  },
];
