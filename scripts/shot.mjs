import { chromium } from "playwright-core";
import { existsSync } from "node:fs";

/* Screenshot utility: node scripts/shot.mjs [url] [out] [width] [height] [fullPage?] */
const url = process.argv[2] ?? "http://localhost:5173";
const out = process.argv[3] ?? ".shots/shot.png";
const width = Number(process.argv[4] ?? 1440);
const height = Number(process.argv[5] ?? 900);
const fullPage = process.argv[6] === "full";

const candidates = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
];
const executablePath = candidates.find((p) => existsSync(p));

const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(2600);
await page.screenshot({ path: out, fullPage });
await browser.close();
console.log("saved", out);
