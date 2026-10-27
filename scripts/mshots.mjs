import { chromium } from "playwright-core";
import { existsSync, mkdirSync } from "node:fs";

const candidates = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
const executablePath = candidates.find((p) => existsSync(p));

const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });

const target = process.argv[2] ?? "http://localhost:5173/?static";
await page.goto(target, { waitUntil: "networkidle", timeout: 30000 });

mkdirSync(".shots", { recursive: true });

await page.waitForTimeout(2200);
await page.screenshot({ path: ".shots/m-hero.png" });

const el = page.locator("#safety .gaugecard").first();
await el.scrollIntoViewIfNeeded();
await page.waitForTimeout(2600);
await page.screenshot({ path: ".shots/m-gauge.png" });

await browser.close();
console.log("done");
