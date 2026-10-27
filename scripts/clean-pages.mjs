/* Removes Workers-plugin artifacts so the dist/ folder is clean for legacy
 * Pages deploys (wrangler pages deploy should not see them). */
import { rm } from "node:fs/promises";

const paths = ["dist/wrangler.json", "dist/.assetsignore", ".wrangler"];
for (const p of paths) {
  await rm(p, { recursive: true, force: true });
  console.log("removed", p);
}
