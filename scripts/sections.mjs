import { chromium } from "playwright-core";
import { existsSync, mkdirSync } from "node:fs";

const candidates = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
const executablePath = candidates.find((p) => existsSync(p));

const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });

const target = process.argv[2] ?? "http://localhost:5173/?static";
await page.goto(target, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(2500);

const sections = [
  ["standards", "#safety"],
  ["cta", ".ctaband"],
  ["pricing", "#pricing"],
];

mkdirSync(".shots", { recursive: true });
for (const [name, sel] of sections) {
  const el = page.locator(sel).first();
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(2200);
  await page.screenshot({ path: `.shots/sec-${name}.png` });
  console.log("saved", name);
}

await browser.close();
