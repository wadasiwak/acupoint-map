// Data integrity checks:
//   node scripts/check-data.mjs
// - every acupoint has coords; every coord belongs to a known point
// - symptom.acupointIds all resolve; every symptom has seekHelp
// - bilingual fields non-empty, no cross-language leakage
// - traditional pregnancy-contraindicated points carry the 🤰 flag
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

async function evalTs(path, exportPattern) {
  const src = readFileSync(path, "utf8")
    .replace(/import type .*?;\n/gs, "")
    .replace(/export interface \w+ \{[\s\S]*?\n\}\n/g, "")
    .replace(exportPattern, "export default");
  const mod = await import(
    `data:text/javascript;base64,${Buffer.from(src).toString("base64")}`
  );
  return mod.default;
}

async function loadDir(dir, pattern) {
  const all = [];
  for (const f of readdirSync(join(root, dir)).filter((f) => f.endsWith(".ts"))) {
    const list = await evalTs(join(root, dir, f), pattern);
    all.push(...list.map((x) => ({ ...x, __file: f })));
  }
  return all;
}

const points = await loadDir(
  "src/data/acupoints",
  /export const \w+: Acupoint\[\] =/,
);
const symptoms = await loadDir(
  "src/data/symptoms",
  /export const \w+: Symptom\[\] =/,
);
const coords = await evalTs(
  join(root, "src/data/coords.ts"),
  /export const COORDS: Record<string, PointCoords> =/,
);

const errors = [];
const warnings = [];
const hasZh = (s) => /[一-鿿]/.test(s);
const checkLS = (ls, path) => {
  if (!ls || typeof ls !== "object")
    return errors.push(`${path}: missing localized string`);
  for (const lang of ["zh", "en"])
    if (!ls[lang]?.trim()) errors.push(`${path}.${lang}: empty`);
  if (ls.zh && !hasZh(ls.zh)) warnings.push(`${path}.zh: no Chinese chars`);
  if (ls.en && hasZh(ls.en)) errors.push(`${path}.en: contains Chinese`);
};

// Traditional pregnancy contraindications that MUST be flagged.
const PREGNANCY_POINTS = [
  "hegu",
  "sanyinjiao",
  "jianjing",
  "kunlun",
  "ciliao",
  "qihai",
  "guanyuan",
  "zhongji",
];

const pointIds = new Set();
for (const p of points) {
  const path = `${p.__file}/${p.id}`;
  if (pointIds.has(p.id)) errors.push(`${path}: duplicate id`);
  pointIds.add(p.id);
  checkLS(p.name, `${path}.name`);
  checkLS(p.meridian, `${path}.meridian`);
  checkLS(p.howToFind, `${path}.howToFind`);
  checkLS(p.howToPress, `${path}.howToPress`);
  checkLS(p.goodFor, `${path}.goodFor`);
  if (p.cautions) checkLS(p.cautions, `${path}.cautions`);
  if (!p.code) errors.push(`${path}: missing code`);
  if (!coords[p.id]) errors.push(`${path}: no coords entry`);
  if (PREGNANCY_POINTS.includes(p.id) && !p.cautions?.zh.includes("🤰"))
    errors.push(`${path}: pregnancy contraindication missing 🤰 flag`);
}

for (const id of Object.keys(coords)) {
  if (!pointIds.has(id)) errors.push(`coords/${id}: unknown point id`);
  const c = coords[id];
  for (const part of ["overview", "detail"]) {
    const { x, y } = c[part];
    if (!(x >= 0 && x <= 300 && y >= 0 && y <= 500))
      errors.push(`coords/${id}.${part}: out of range (${x},${y})`);
  }
}

const symptomIds = new Set();
for (const s of symptoms) {
  const path = `${s.__file}/${s.id}`;
  if (symptomIds.has(s.id)) errors.push(`${path}: duplicate id`);
  symptomIds.add(s.id);
  checkLS(s.name, `${path}.name`);
  checkLS(s.blurb, `${path}.blurb`);
  if (!s.emoji) errors.push(`${path}: missing emoji`);
  if (!s.seekHelp) errors.push(`${path}: seekHelp is mandatory`);
  else checkLS(s.seekHelp, `${path}.seekHelp`);
  if (s.tips) checkLS(s.tips, `${path}.tips`);
  if (!s.acupointIds?.length || s.acupointIds.length < 3)
    errors.push(`${path}: needs 3+ acupoints`);
  for (const pid of s.acupointIds ?? [])
    if (!pointIds.has(pid)) errors.push(`${path}: unknown acupoint "${pid}"`);
}

// Meridians: bilingual + sane blurb length, unique ids/prefixes, and the
// code-prefix mapping must cover every point (tour derives membership from
// codes, so an unmapped prefix would silently drop points from the tour).
const meridians = await evalTs(
  join(root, "src/data/meridians.ts"),
  /export const MERIDIANS: MeridianInfo\[\] =/,
);
const meridianIds = new Set();
const meridianPrefixes = new Set();
for (const m of meridians) {
  const path = `meridians/${m.id ?? "?"}`;
  if (meridianIds.has(m.id)) errors.push(`${path}: duplicate id`);
  meridianIds.add(m.id);
  if (meridianPrefixes.has(m.codePrefix))
    errors.push(`${path}: duplicate codePrefix`);
  meridianPrefixes.add(m.codePrefix);
  if (!/^[a-z]+$/.test(m.id ?? ""))
    errors.push(`${path}: id must be a lowercase slug (used in #meridian/ URLs)`);
  checkLS(m.name, `${path}.name`);
  checkLS(m.blurb, `${path}.blurb`);
  const zhLen = (m.blurb?.zh ?? "").length;
  if (zhLen < 40 || zhLen > 80)
    errors.push(`${path}.blurb.zh: length ${zhLen} outside 40–80`);
  if (!points.some((p) => p.code.startsWith(m.codePrefix)))
    errors.push(`${path}: no points carry code prefix ${m.codePrefix}`);
}
for (const p of points) {
  const prefix = /^[A-Z]+/.exec(p.code)?.[0] ?? "";
  if (!meridianPrefixes.has(prefix))
    errors.push(`${p.__file}/${p.id}: code prefix "${prefix}" has no meridian entry`);
}

// Preset routines: names bilingual, and each sequence must be EXACTLY an
// existing symptom recipe (no invented point combos).
const presets = await evalTs(
  join(root, "src/data/presets.ts"),
  /export const PRESET_ROUTINES: PresetRoutine\[\] =/,
);
for (const pr of presets) {
  const path = `presets/${pr.name?.zh ?? "?"}`;
  checkLS(pr.name, `${path}.name`);
  for (const pid of pr.pointIds ?? [])
    if (!pointIds.has(pid)) errors.push(`${path}: unknown acupoint "${pid}"`);
  const key = JSON.stringify(pr.pointIds);
  if (!symptoms.some((s) => JSON.stringify(s.acupointIds) === key))
    errors.push(`${path}: sequence does not match any symptom recipe`);
}

console.log(`acupoints: ${points.length}, symptoms: ${symptoms.length}, coords: ${Object.keys(coords).length}, presets: ${presets.length}, meridians: ${meridians.length}`);
for (const w of warnings) console.log(`WARN  ${w}`);
for (const e of errors) console.log(`ERROR ${e}`);
if (errors.length) {
  console.error(`\n${errors.length} error(s)`);
  process.exit(1);
}
console.log("all checks passed ✓");
