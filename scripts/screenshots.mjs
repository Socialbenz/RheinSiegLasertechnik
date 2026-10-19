import { chromium } from "@playwright/test";
import fs from "node:fs/promises";
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || "/usr/bin/chromium",
  headless: true,
  args: ["--no-sandbox"],
});
const output = process.env.VISUAL_REVIEW_DIR || "artifacts/visual-review";
await fs.mkdir(output, { recursive: true });
for (const width of [1440, 390]) {
  const page = await browser.newPage({
    viewport: { width, height: width === 1440 ? 1000 : 844 },
    deviceScaleFactor: 1,
  });
  await page.addInitScript(() => {
    try {
      localStorage.setItem("rsl-privacy-notice-v1", "seen");
    } catch {}
  });
  for (let i = 1; i <= 5; i++) {
    const id = String(i).padStart(2, "0");
    await page.goto(
      `${process.env.TEST_BASE_URL || "http://localhost:5173"}/design-${id}?capture`,
      { waitUntil: "networkidle" },
    );
    await page.evaluate(() => document.fonts.ready);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.screenshot({ path: `${output}/design-${id}-${width}.png` });
    if (width === 1440)
      await page.screenshot({
        path: `public/previews/design-${id}.jpg`,
        type: "jpeg",
        quality: 85,
      });
    console.log(
      id,
      width,
      await page.evaluate(() => ({
        width: innerWidth,
        scroll: document.documentElement.scrollWidth,
        height: document.body.scrollHeight,
        images: [...document.images]
          .filter((i) => !i.complete || !i.naturalWidth)
          .map((i) => i.src),
      })),
    );
  }
  await page.close();
}
await browser.close();
