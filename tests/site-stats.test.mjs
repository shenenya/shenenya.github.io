import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const main = await readFile(new URL("../assets/js/main.js", import.meta.url), "utf8");
const data = await readFile(new URL("../assets/js/data.js", import.meta.url), "utf8");

test("site statistics are visible in the footer", () => {
  assert.match(html, /class="site-stats"/);
  assert.doesNotMatch(html, /class="stats-tracker"[^>]*hidden/);
  assert.match(html, /id="busuanzi_value_site_pv"/);
  assert.match(html, /id="busuanzi_value_site_uv"/);
});

test("site statistics labels support Chinese and English", () => {
  assert.match(main, /"stats\.views": "浏览量"/);
  assert.match(main, /"stats\.visitors": "访客"/);
  assert.match(main, /"stats\.views": "Views"/);
  assert.match(main, /"stats\.visitors": "Visitors"/);
});

test("work experience starts from April 2017 in both languages", () => {
  assert.match(data, /period: "2017\.04 – 至今"/);
  assert.match(data, /period: "2017\.04 – Present"/);
  assert.doesNotMatch(data, /period: "2015\.03 – (至今|Present)"/);
});

test("2026 engineers are listed first with pinyin names in English", () => {
  assert.match(
    data,
    /engineer: \{[\s\S]*?items: \[\s*\{\s*year: "2026",\s*names: \{ zh: "肖明坤、曹君泽", en: "Xiao Mingkun, Cao Junze" \}/,
  );
});

test("service entries are grouped into reviewing, student, and organization categories", () => {
  assert.match(data, /label: "审稿"/);
  assert.match(data, /label: "学生"/);
  assert.match(data, /label: "组织"/);
  assert.match(data, /NIPS 2026、AAAI 2027/);
  assert.match(data, /Computer-Aided Design、Computers & Graphics/);
  assert.match(data, /"水木书院 2026 级本科生班主任"/);
  assert.doesNotMatch(data, /"清华大学(?:软件学院|水木书院) [0-9]{4} 级本科生班主任"/);
  assert.match(data, /"未央书院 2024–2026 学年导师"/);
  assert.match(main, /service-category/);
  assert.match(main, /service-category-title/);
});

test("point containment paper is the first publication with updated metadata", () => {
  assert.match(
    data,
    /publications: \[\s*\{\s*authors: "Anchang Bao, <b>Enya Shen\*<\/b>, Jianmin Wang",\s*title:\s*"Point Containment Queries on Trimmed Surfaces via Winding Numbers and Periodicity Lifting",\s*venue: "SIGGRAPH ASIA 2026 \(accepted, journal track\)"/,
  );
  assert.match(data, /teaser: "assets\/img\/teasers\/pcq\.png"/);
  assert.match(
    data,
    /href: "pdf\/Point Containment Queries on Trimmed Surfaces via Winding Numbers and Periodicity Lifting\.pdf"/,
  );
  assert.doesNotMatch(data, /title: "Fast and Robust Point Containment Queries on Trimmed Surface"/);
});
