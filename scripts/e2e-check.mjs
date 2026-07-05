// End-to-end smoke test against the dev server (port 5192).
// Usage: node scripts/e2e-check.mjs
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const BASE = "http://localhost:5192";
const shots = "/tmp/acumap-e2e";
mkdirSync(shots, { recursive: true });

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1200, height: 900 } });
const fails = [];
const check = (name, ok) => {
  console.log(`${ok ? "✓" : "✗"} ${name}`);
  if (!ok) fails.push(name);
};
page.on("pageerror", (e) => console.log("PAGE ERROR:", e.message));

await page.goto(BASE);
// Disclaimer must gate first use.
await page.waitForSelector(".disclaimer-modal", { timeout: 10_000 });
check("disclaimer shows first", true);
await page.locator(".disclaimer-modal .btn--primary").click();

check(
  "symptom tiles",
  (await page.locator(".symptom-tile").count()) >= 30,
);
await page.screenshot({ path: `${shots}/1-home.png` });

// Symptom flow: 生理痛 → glowing points + ordered list + red flags.
await page.locator(".symptom-tile", { hasText: "生理痛" }).click();
await page.waitForSelector(".figures .body-figure");
check(
  "figure has glowing points",
  (await page.locator(".acu-halo").count()) >= 3,
);
check(
  "ordered point rows",
  (await page.locator(".point-row").count()) >= 3,
);
check(
  "seek-help warning present",
  await page.locator(".info-box--warn").isVisible(),
);
await page.screenshot({ path: `${shots}/2-symptom.png` });

// Point card: first point of 生理痛 is sanyinjiao → pregnancy banner.
await page.locator(".point-row").first().click();
await page.waitForSelector(".point-card");
check(
  "point card sketch",
  await page.locator(".point-sketch .body-figure").isVisible(),
);
check(
  "pregnancy banner on sanyinjiao",
  await page.locator(".pregnancy-banner").isVisible(),
);
await page.screenshot({ path: `${shots}/3-pointcard.png` });

// Favorite + related symptom navigation.
await page.locator(".point-card .btn--ghost").first().click(); // ☆ 收藏
check(
  "favorite toggles",
  (await page.locator(".fav-on").count()) === 1,
);
await page.locator(".point-card .chip").first().click(); // related symptom
await page.waitForSelector(".symptom-head");
check("related symptom navigates", true);

// Point index + favorites persist across reload.
await page.locator(".topbar .btn", { hasText: "圖鑑" }).click();
await page.waitForSelector(".chip-row");
check(
  "index lists 68 points",
  (await page.locator(".chip--point").count()) >= 68,
);
await page.screenshot({ path: `${shots}/4-index.png` });

await page.reload();
await page.waitForSelector(".symptom-tile");
check(
  "disclaimer not shown again",
  (await page.locator(".disclaimer-modal").count()) === 0,
);
await page.locator(".topbar .btn", { hasText: "圖鑑" }).click();
check(
  "favorite persisted",
  (await page.locator(".chip--point", { hasText: "★" }).count()) >= 1,
);

// Search finds points and symptoms.
await page.locator(".topbar-title").click();
await page.locator(".search").fill("合谷");
check(
  "search finds point",
  (await page.locator(".chip--point", { hasText: "合谷" }).count()) === 1,
);
await page.locator(".search").fill("");

// Language toggle.
await page.locator(".lang-toggle button", { hasText: "EN" }).click();
check(
  "EN toggle",
  (await page.locator(".topbar-title").innerText()).includes("AcuMap"),
);
await page.screenshot({ path: `${shots}/5-english.png` });

await browser.close();
console.log(
  fails.length ? `\nFAILED: ${fails.join(", ")}` : "\nall e2e checks passed ✓",
);
process.exit(fails.length ? 1 : 0);
