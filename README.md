# 穴位地圖 AcuMap 🫴

Feeling off? Pick a symptom — the body figure lights up with the acupoints to
press, in priority order. Tap any point for a location sketch, how-to-press
instructions, and safety notes. A fully static, bilingual (繁中/EN) acupressure
reference: **36 everyday symptoms × 68 classic acupoints**.

> ⚕️ Wellness reference only — not medical advice. Every symptom entry carries
> red-flag "see a doctor" guidance, and traditionally pregnancy-contraindicated
> points (合谷, 三陰交, 肩井, …) are flagged prominently.

## Run it

```bash
npm install
npm run dev        # http://localhost:5192
```

`npm run build` produces a fully static `dist/` with zero network
dependencies.

## How it works

- **症狀查詢** — symptoms grouped by category (head & face, digestion, sleep &
  mood, aches & pains, women's health, colds, misc). Selecting one renders the
  schematic body figure(s) with glowing, numbered dots (press order), plus
  lifestyle tips and when-to-seek-help warnings.
- **穴位卡** — each point card shows a location sketch (a cropped/zoomed view
  of the same SVG figures), bilingual how-to-find / how-to-press / good-for
  text, cautions, and the other symptoms that use it.
- **穴位圖鑑** — all 68 points by body region, searchable, with favorites
  (localStorage).

## Architecture

```
src/
  lib/bodyViews.tsx        # 9 hand-drawn SVG views: front/back body,
                           #   face, head-side, hand (back/palm), foot (top/inner/sole)
  data/
    types.ts               # Acupoint / Symptom shapes
    coords.ts              # point → {overview, detail} coordinates per view
    acupoints/*.ts         # 68 points (4 files by region) — LLM-generatable literals
    symptoms/*.ts          # 36 symptoms with ordered acupointIds
  components/
    BodyFigure.tsx         # view + dot overlay; focus prop crops the viewBox
                           #   into a zoomed location sketch
    PointCard.tsx          # detail modal
  App.tsx                  # home / symptom / index screens + #calibrate dev page
```

Design notes:

- Text content and on-figure coordinates are **authored separately**
  (`acupoints/*.ts` vs `coords.ts`) so content agents and coordinate
  calibration never conflict.
- Open `/#calibrate` to see every view with all its points labeled — used to
  visually verify coordinates via screenshots.
- Bilateral points are marked on one side of the figure; the text explains to
  press both sides.

## Content pipeline

After touching data, run:

```bash
npm run check              # ids ↔ coords, symptom → point references,
                           # bilingual completeness, pregnancy 🤰 flags enforced
node scripts/e2e-check.mjs # Playwright: disclaimer, symptom flow, point card,
                           # favorites, search, EN toggle
```
