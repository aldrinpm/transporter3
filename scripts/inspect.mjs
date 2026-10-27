import { chromium } from "playwright-core";
import { existsSync } from "node:fs";

const candidates = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
];
const executablePath = candidates.find((p) => existsSync(p));

const browser = await chromium.launch({ executablePath, headless: true });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 2 });

const errors = [];
page.on("pageerror", (err) => errors.push(String(err)));
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});

await page.goto("http://localhost:5173/?static", { waitUntil: "networkidle", timeout: 30000 });
await page.waitForTimeout(4000);

const iframes = await page.locator("iframe").all();
console.log("iframe count:", iframes.length);

let i = 0;
for (const frame of await page.locator("iframe").elementHandles()) {
  const title = (await frame.getAttribute("title")) ?? `iframe-${i}`;
  try {
    await frame.screenshot({ path: `.shots/iframe-${i}-${title.replace(/[^a-z0-9]+/gi, "-")}.png` });
    console.log("shot iframe", i, title);
  } catch (e) {
    console.log("fail iframe", i, title, String(e).slice(0, 120));
  }
  i += 1;
}

console.log("page errors:", JSON.stringify(errors.slice(0, 8), null, 1));
await browser.close();
