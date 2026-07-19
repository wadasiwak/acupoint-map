// End-to-end smoke test against the dev server (port 5192).
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";

const BASE = "http://localhost:5192";
const shots = "/tmp/acumap-e2e";
mkdirSync(shots, { recursive: true });

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({
  viewport: { width: 1200, height: 1000 },
  permissions: ["clipboard-read", "clipboard-write"],
});
const fails = [];
const check = (name, ok) => {
  console.log(`${ok ? "✓" : "✗"} ${name}`);
  if (!ok) fails.push(name);
};
page.on("pageerror", (e) => console.log("PAGE ERROR:", e.message));

await page.goto(BASE);
await page.waitForSelector(".disclaimer-modal", { timeout: 10_000 });
check("disclaimer gates first use", true);
await page.locator(".disclaimer-modal .btn--primary").click();

// Home: dual-entry tabs — symptoms default, body picker one tap away.
check("home dual-entry tabs", (await page.locator(".home-tab").count()) === 2);
check("symptom tiles", (await page.locator(".symptom-tile").count()) >= 30);
check("point of the day", (await page.locator(".daily-card").count()) === 1);
check("quiz in topbar", await page.locator(".topbar .btn", { hasText: "測驗" }).isVisible());
await page.screenshot({ path: `${shots}/1-home.png` });

// Body tab: front+back figures, 6 hotspots (neck-shoulder now on both).
await page.locator(".home-tab", { hasText: "點身體找" }).click();
check(
  "body picker front+back",
  (await page.locator(".body-picker-figure").count()) === 2 &&
    (await page.locator(".region-hotspot").count()) === 6,
);
await page.screenshot({ path: `${shots}/1b-body-tab.png` });
await page.locator(".home-tab", { hasText: "依症狀找" }).click();

// Point of the day → card → press timer runs.
await page.locator(".daily-card").click();
await page.waitForSelector(".point-card");
await page.locator(".press-timer .btn--primary").first().click();
await page.waitForSelector(".breath-circle");
check("press timer starts", await page.locator(".breath-time").isVisible());
await page.locator(".card-close").click();

// Symptom flow: 生理痛 → glowing points, order, red-flag, pregnancy on point.
await page.locator(".symptom-tile", { hasText: "生理痛" }).click();
await page.waitForSelector(".figures .body-figure");
check("hash reflects symptom", page.url().includes("#s/"));
check("glowing points", (await page.locator(".acu-halo").count()) >= 3);
check("ordered rows", (await page.locator(".point-row").count()) >= 3);
check("seek-help warning", await page.locator(".info-box--warn").isVisible());
check("symptom copy-link button", await page.locator(".copy-link-btn").isVisible());
await page.screenshot({ path: `${shots}/2-symptom.png` });
await page.locator(".point-row").first().click();
await page.waitForSelector(".point-card");
check("point card hash", page.url().includes("#p/"));
check("pregnancy banner", await page.locator(".pregnancy-banner").isVisible());
await page.locator(".point-card .fav-btn").click(); // favorite
check("favorite toggles", (await page.locator(".fav-on").count()) === 1);
await page.locator(".card-close").click();
await page.locator(".btn--ghost", { hasText: "回症狀" }).click();

// Multi-select → combined.
await page.locator(".section-head-row .btn", { hasText: "多選" }).click();
await page.locator(".symptom-tile", { hasText: "頭痛" }).first().click();
await page.locator(".symptom-tile", { hasText: "失眠" }).click();
await page.waitForSelector(".floating-cta");
await page.locator(".floating-cta").click();
await page.waitForSelector(".symptom-layout");
check("combined hash", page.url().includes("#combined/"));
check(
  "combined shows coverage badge",
  (await page.locator(".covers-badge").count()) >= 1,
);
await page.screenshot({ path: `${shots}/3-combined.png` });
await page.locator(".btn--ghost", { hasText: "回症狀" }).click();

// Body region picker → region points.
await page.locator(".home-tab", { hasText: "點身體找" }).click();
await page.locator(".region-hotspot").first().click();
await page.waitForSelector(".symptom-layout");
check("region screen lists points", (await page.locator(".point-row").count()) >= 3);
await page.locator(".btn--ghost", { hasText: "回症狀" }).click();

// Quiz: tap the figure, get feedback, advance.
await page.locator(".topbar .btn", { hasText: "測驗" }).click();
await page.waitForSelector(".quiz-figure svg");
const box = await page.locator(".quiz-figure svg").boundingBox();
await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
await page.waitForSelector(".quiz-feedback");
check("quiz gives feedback", true);
await page.screenshot({ path: `${shots}/4-quiz.png` });
await page.locator(".quiz-bar .btn--ghost").click();

// Index: meridian toggle + favorites routine.
await page.locator(".topbar .btn", { hasText: "圖鑑" }).click();
await page.waitForSelector(".chip--point");
check("index hash", page.url().includes("#index"));
check("index has 68 points", (await page.locator(".chip--point").count()) >= 68);
await page.locator(".section-head-row .lang-toggle button", { hasText: "經絡" }).click();
check("meridian grouping", (await page.locator(".cat-head").count()) >= 8);
await page.screenshot({ path: `${shots}/5-index.png` });
// The favorited point earlier enables the routine runner.
await page.locator(".btn--primary", { hasText: "依序按摩" }).click();
await page.waitForSelector(".routine-runner");
check("routine runner opens with timer", await page.locator(".routine-runner .breath-circle").isVisible());
await page.locator(".routine-runner .card-close").click();

// Favorites backup: export downloads a marked JSON; re-import merges it back.
const [download] = await Promise.all([
  page.waitForEvent("download"),
  page.locator(".backup-row .btn", { hasText: "匯出" }).click(),
]);
check("export downloads backup", download.suggestedFilename() === "acukit-backup.json");
const backupPath = `${shots}/backup.json`;
await download.saveAs(backupPath);
await page.locator(".backup-row input[type=file]").setInputFiles(backupPath);
check(
  "import merges backup",
  await page.locator(".backup-msg:not(.backup-msg--err)").isVisible(),
);
const badPath = `${shots}/bad-backup.json`;
writeFileSync(badPath, JSON.stringify({ __app: "other-app", favorites: [] }));
await page.locator(".backup-row input[type=file]").setInputFiles(badPath);
check("import rejects foreign file", await page.locator(".backup-msg--err").isVisible());

// Hash routing: deep links land on the right screen.
await page.goto(`${BASE}/#s/headache`);
await page.waitForSelector(".symptom-head");
check("deep link #s/ opens symptom", (await page.locator(".point-row").count()) >= 3);
await page.goto(`${BASE}/#p/hegu`);
await page.waitForSelector(".point-card");
check(
  "deep link #p/ opens point card",
  await page.locator(".point-card h2", { hasText: "合谷" }).isVisible(),
);
// Copy link from the card (button flips to "已複製" only on successful copy).
await page.locator(".point-card .copy-link-btn").click();
const copied = await page
  .locator(".point-card .copy-link-btn", { hasText: "已複製" })
  .waitFor({ timeout: 3000 })
  .then(() => true)
  .catch(() => false);
const clip = await page.evaluate(() => navigator.clipboard.readText()).catch(() => "");
check("copy link confirms", copied && clip.includes("#p/hegu"));
await page.locator(".card-close").click();
await page.goto(`${BASE}/#region/leg`);
await page.waitForSelector(".symptom-layout");
check("deep link #region/ works", (await page.locator(".point-row").count()) >= 3);
await page.goto(`${BASE}/#combined/headache,insomnia`);
await page.waitForSelector(".symptom-layout");
check("deep link #combined/ works", (await page.locator(".covers-badge").count()) >= 1);
await page.goto(`${BASE}/#s/not-a-real-symptom`);
await page.waitForSelector(".symptom-grid");
check(
  "invalid hash falls back home",
  (await page.locator(".symptom-tile").count()) >= 30,
);

// Back/forward walk the screen history.
await page.goto(BASE);
await page.waitForSelector(".symptom-grid");
await page.locator(".symptom-tile", { hasText: "頭痛" }).first().click();
await page.waitForSelector(".symptom-head");
await page.goBack();
await page.waitForSelector(".symptom-grid");
check("back returns home", (await page.locator(".symptom-head").count()) === 0);
await page.goForward();
await page.waitForSelector(".symptom-head");
check("forward reopens symptom", true);
await page.locator(".point-row").first().click();
await page.waitForSelector(".point-card");
await page.goBack();
await page.waitForFunction(() => !document.querySelector(".point-card"));
check(
  "back closes point card, stays on symptom",
  await page.locator(".symptom-head").isVisible(),
);

// Persistence across reload.
await page.goto(BASE);
await page.waitForSelector(".daily-card");
check("disclaimer not shown again", (await page.locator(".disclaimer-modal").count()) === 0);

// Search + EN toggle.
await page.locator(".search").fill("合谷");
check("search finds point", (await page.locator(".chip--point", { hasText: "合谷" }).count()) === 1);
await page.locator(".lang-toggle button", { hasText: "EN" }).first().click();
check("EN toggle", (await page.locator(".topbar-title").innerText()).includes("AcuKit"));
await page.screenshot({ path: `${shots}/6-english.png` });

await browser.close();
console.log(fails.length ? `\nFAILED: ${fails.join(", ")}` : "\nall e2e checks passed ✓");
process.exit(fails.length ? 1 : 0);
