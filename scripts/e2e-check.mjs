// End-to-end smoke test against the dev server (port 5192).
import { chromium } from "playwright";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

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
// The favorited point earlier enables the ad-hoc favorites run.
await page.locator(".btn--primary", { hasText: "依序按摩" }).click();
await page.waitForSelector(".routine-runner");
check("routine runner opens with timer", await page.locator(".routine-runner .breath-circle").isVisible());
await page.locator(".routine-runner .card-close").click();

// Named routines: apply a preset → it becomes a saved routine and runs.
await page.locator(".preset-chip", { hasText: "睡前放鬆" }).click();
const presetItem = page.locator(".routine-item", { hasText: "睡前放鬆" });
check(
  "preset applies as routine (5 points)",
  (await presetItem.count()) === 1 &&
    (await presetItem.innerText()).includes("5 個穴位"),
);
check(
  "applied preset disappears from preset row",
  (await page.locator(".preset-chip", { hasText: "睡前放鬆" }).count()) === 0,
);
await presetItem.locator(".btn--primary", { hasText: "開始" }).click();
await page.waitForSelector(".routine-runner");
check(
  "preset routine runs with hash",
  (await page.locator(".routine-step-label").innerText()).includes("1 / 5") &&
    page.url().includes("#routine/"),
);
await page.locator(".routine-runner .card-close").click();
check("closing runner returns to #index", page.url().includes("#index"));

// Create a routine: name it, add points via search + favorites, reorder.
await page.locator(".routine-new-btn").click();
await page.locator(".routine-new-form .routine-name-input").fill("測試方案");
await page.locator(".routine-new-form .btn", { hasText: "建立" }).click();
await page.waitForSelector(".routine-editor");
await page.locator(".routine-add-search").fill("合谷");
await page.locator(".routine-editor .chip--point", { hasText: "合谷" }).click();
await page.locator(".routine-editor .chip--point", { hasText: "三陰交" }).click(); // from ★ favorites
check(
  "editor adds points from search + favorites",
  (await page.locator(".routine-edit-row").count()) === 2,
);
await page.screenshot({ path: `${shots}/5b-routine-editor.png` });
await page
  .locator(".routine-edit-row")
  .first()
  .locator('button[aria-label="下移"]')
  .click();
check(
  "reorder moves point down",
  (await page.locator(".routine-edit-row").first().innerText()).includes("三陰交"),
);
// Rename, then run the 2-point routine.
await page.locator(".routine-editor .routine-name-input").fill("久坐舒緩");
await page.locator(".routine-editor .btn", { hasText: "儲存名稱" }).click();
const renamed = page.locator(".routine-item", { hasText: "久坐舒緩" });
check("rename routine", (await renamed.count()) === 1);
await renamed.locator(".btn", { hasText: "完成" }).click();
await renamed.locator(".btn--primary", { hasText: "開始" }).click();
await page.waitForSelector(".routine-runner");
check(
  "created routine runs 2 steps",
  (await page.locator(".routine-step-label").innerText()).includes("1 / 2"),
);
await page.locator(".routine-runner .card-close").click();
await page.screenshot({ path: `${shots}/5c-routines.png` });
// Delete needs a second confirming tap.
await renamed.locator(".btn", { hasText: "刪除" }).click();
await renamed.locator(".routine-delete-confirm").click();
check(
  "delete routine (with confirm)",
  (await page.locator(".routine-item", { hasText: "久坐舒緩" }).count()) === 0,
);

// Point card → add to routine picker.
await page.locator(".chip--point", { hasText: "內關" }).first().click();
await page.waitForSelector(".point-card");
await page.locator(".add-routine > .btn").click();
await page.locator(".add-routine-option", { hasText: "睡前放鬆" }).click();
check(
  "point card adds point to routine",
  await page.locator(".add-routine-msg", { hasText: "已加入「睡前放鬆」" }).isVisible() &&
    (await page.locator(".add-routine-option", { hasText: "已在「睡前放鬆」" }).count()) === 1,
);
await page.locator(".card-close").click();
check(
  "routine grew to 6 points",
  (await page.locator(".routine-item", { hasText: "睡前放鬆" }).innerText()).includes("6 個穴位"),
);

// Favorites backup: export downloads a marked JSON; re-import merges it back.
const [download] = await Promise.all([
  page.waitForEvent("download"),
  page.locator(".backup-row .btn", { hasText: "匯出" }).click(),
]);
check("export downloads backup", download.suggestedFilename() === "acukit-backup.json");
const backupPath = `${shots}/backup.json`;
await download.saveAs(backupPath);
const backupJson = JSON.parse(readFileSync(backupPath, "utf8"));
check(
  "backup includes named routines",
  Array.isArray(backupJson.routines) &&
    backupJson.routines.some((r) => r.name === "睡前放鬆" && r.pointIds.length === 6),
);
const routinesBefore = await page.locator(".routine-item").count();
await page.locator(".backup-row input[type=file]").setInputFiles(backupPath);
check(
  "import merges backup",
  await page.locator(".backup-msg:not(.backup-msg--err)").isVisible(),
);
check(
  "import keeps same-name routine (no duplicate)",
  (await page.locator(".routine-item").count()) === routinesBefore,
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
// #routine/<id> deep link — reload from scratch, runner opens over #index.
const savedRoutineId = await page.evaluate(
  () => JSON.parse(localStorage.getItem("acumap-save")).state.routines[0].id,
);
await page.goto(`${BASE}/#routine/${savedRoutineId}`);
await page.waitForSelector(".routine-runner");
check(
  "deep link #routine/ opens runner",
  (await page.locator(".routine-step-label").innerText()).includes("1 / 6"),
);
await page.locator(".routine-runner .card-close").click();
check("runner close lands on index", page.url().includes("#index"));
await page.goto(`${BASE}/#routine/not-a-real-routine`);
await page.waitForSelector(".symptom-grid");
check(
  "invalid #routine/ falls back home",
  (await page.locator(".routine-runner").count()) === 0,
);
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

// v0 → v1 migration: an old save (favorites only) grows a「我的收藏」routine.
await page.evaluate(() => {
  localStorage.clear();
  localStorage.setItem(
    "acumap-save",
    JSON.stringify({
      state: {
        lang: "zh",
        favorites: ["hegu", "neiguan"],
        disclaimerSeen: true,
        soundOn: true,
        quizBest: 3,
      },
      version: 0,
    }),
  );
});
// goto with only a hash change is same-document — force a real reload so the
// store rehydrates from the seeded v0 save.
await page.goto(`${BASE}/#index`);
await page.reload();
await page.waitForSelector(".routine-item");
const migratedItem = page.locator(".routine-item", { hasText: "我的收藏" });
check(
  "v0 save migrates to「我的收藏」routine",
  (await migratedItem.count()) === 1 &&
    (await migratedItem.innerText()).includes("2 個穴位"),
);
// Force a persist write, then confirm favorites survived as favorites too.
await page.locator(".icon-btn").first().click();
await page.locator(".icon-btn").first().click();
const migrated = await page.evaluate(() =>
  JSON.parse(localStorage.getItem("acumap-save")),
);
check(
  "migration keeps favorites + bumps version",
  migrated.version === 1 &&
    migrated.state.favorites.length === 2 &&
    migrated.state.routines[0].pointIds.join(",") === "hegu,neiguan",
);
await migratedItem.locator(".btn--primary", { hasText: "開始" }).click();
await page.waitForSelector(".routine-runner");
check(
  "migrated routine runs",
  (await page.locator(".routine-step-label").innerText()).includes("1 / 2"),
);

await browser.close();
console.log(fails.length ? `\nFAILED: ${fails.join(", ")}` : "\nall e2e checks passed ✓");
process.exit(fails.length ? 1 : 0);
