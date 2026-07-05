import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const main = await readFile(new URL("../assets/js/main.js", import.meta.url), "utf8");

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
