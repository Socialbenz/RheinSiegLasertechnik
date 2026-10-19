import { test, expect } from "@playwright/test";
for (let i = 1; i <= 4; i++) {
  const id = String(i).padStart(2, "0");
  test(`Entwurf ${id}: Navigation und Testformular`, async ({ page }) => {
    const errors = [];
    const requests = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("request", (r) =>
      requests.push({ url: r.url(), method: r.method() }),
    );
    await page.goto(`/design-${id}`);
    await expect(page.locator("h1")).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth),
    ).toBeLessThanOrEqual(await page.evaluate(() => innerWidth));
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() => img.evaluate((i) => i.complete && i.naturalWidth > 0))
        .toBeTruthy();
    }
    await page.evaluate(() => scrollTo(0, 0));
    const toggle = page.getByRole("button", { name: "Menü öffnen" });
    if (await toggle.isVisible()) {
      await toggle.click();
      await page
        .locator(".mobile-panel")
        .getByRole("link", { name: "Anwendungen", exact: true })
        .click();
      await expect(page.locator(".mobile-panel")).toHaveCount(0);
    } else {
      await page
        .locator("header")
        .getByRole("link", { name: "Anwendungen", exact: true })
        .click();
    }
    await expect(page.locator("#anwendungen")).toBeInViewport();
    await page.locator(".faqs summary").first().click();
    await expect(page.locator(".faqs details").first()).toHaveAttribute(
      "open",
      "",
    );
    await page.locator("#kontakt").scrollIntoViewIfNeeded();
    await page.locator("button[type=submit]").click();
    await expect(page.getByRole("status")).toHaveCount(0);
    await page.getByLabel("Ihr Name *", { exact: true }).fill("Testperson");
    await page.getByLabel("E-Mail *", { exact: true }).fill("demo@example.com");
    await page.getByLabel("Einsatzort *", { exact: true }).fill("Siegburg");
    await page
      .getByLabel("Ihr Vorhaben *", { exact: true })
      .fill("Rost an einem Stahlbauteil.");
    await page.getByRole("button", { name: "Graffiti", exact: true }).click();
    await expect(
      page.getByRole("button", { name: "Graffiti", exact: true }),
    ).toHaveAttribute("aria-pressed", "true");
    await page.getByLabel(/Ich habe verstanden/).check();
    await page.locator("button[type=submit]").click();
    await expect(page.getByRole("status")).toContainText(
      "weder versendet noch gespeichert",
    );
    await page.getByRole("button", { name: "Anfrage bearbeiten" }).click();
    await page.getByRole("button", { name: "Per WhatsApp schreiben" }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await page.getByRole("button", { name: "Schließen", exact: true }).click();
    await page.getByRole("button", { name: "Impressum", exact: true }).click();
    await expect(page.getByRole("dialog")).toContainText("Website-Entwurf");
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog")).toHaveCount(0);
    expect(requests.filter((r) => r.method !== "GET")).toEqual([]);
    expect(
      requests.filter(
        (r) => !["localhost", "127.0.0.1"].includes(new URL(r.url).hostname),
      ),
    ).toEqual([]);
    expect(errors).toEqual([]);
  });
}
test("Originalentwurf: Aufbau, drei Regler, Anfrageformular und Datenschutzhinweis", async ({
  page,
}) => {
  const errors = [];
  const mutations = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("request", (r) => {
    if (r.method() !== "GET") mutations.push(r.url());
  });
  await page.goto("/design-05");
  await expect(page).toHaveURL(/\/design-05$/);
  await expect(page.locator("h1")).toHaveText(
    "Laserreinigung.Direkt bei Ihnenvor Ort.",
  );
  await expect(page.locator("iframe")).toHaveCount(0);
  await expect(page.getByRole("slider")).toHaveCount(3);
  const cookie = page.getByRole("button", {
    name: "Hinweis schließen",
    exact: true,
  });
  await expect(cookie).toBeVisible();
  await cookie.click();
  await expect(page.locator("#cookie-banner")).toBeHidden();
  const menu = page.locator(".menu");
  if (await menu.isVisible()) {
    await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await page
      .locator("#navigation")
      .getByRole("link", { name: "Anwendungen", exact: true })
      .click();
    await expect(menu).toHaveAttribute("aria-expanded", "false");
  }
  for (const range of await page.getByRole("slider").all()) {
    await range.focus();
    await page.keyboard.press("ArrowRight");
    await expect(range).toHaveValue("51");
    await page.keyboard.press("End");
    await expect(range).toHaveValue("100");
  }
  await page.locator(".faq-list summary").first().click();
  await expect(page.locator(".faq-list details").first()).toHaveAttribute(
    "open",
    "",
  );
  await page.getByLabel("Name *", { exact: true }).fill("Testperson");
  await page.getByLabel("E-Mail *", { exact: true }).fill("demo@example.com");
  await page
    .getByLabel("Was soll gereinigt werden? *", { exact: true })
    .fill("Rost auf Stahl.");
  await page.locator("form button[type=submit]").click();
  await expect(page.getByRole("status")).toContainText(
    "Es wurde keine Anfrage gesendet",
  );
  expect(mutations).toEqual([]);
  await page
    .locator("footer")
    .getByRole("link", { name: "Impressum", exact: true })
    .click();
  await expect(page.locator("#legal-dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#legal-dialog")).toBeHidden();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(await page.evaluate(() => innerWidth));
  await page
    .getByRole("combobox", { name: "Design auswählen" })
    .selectOption("/design-03");
  await expect(page).toHaveURL(/design-03/);
  expect(errors).toEqual([]);
});
test("Übersicht zeigt fünf aktuelle Vorschauen ohne Werbefloskeln", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText(
    "So könnte IhreWebsite aussehen.",
  );
  await expect(page.locator(".concept-card")).toHaveCount(5);
  for (const img of await page.locator(".concept-preview>img").all()) {
    await img.scrollIntoViewIfNeeded();
    await expect
      .poll(() => img.evaluate((i) => i.complete && i.naturalWidth > 0))
      .toBeTruthy();
  }
  const text = await page.locator("body").innerText();
  expect(text).not.toMatch(
    /Designstudi|neue Perspektiven|immersiv|ehrlich|—| – /i,
  );
  await page.locator("a.concept-preview").last().click();
  await expect(page).toHaveURL(/design-05/);
  await page
    .getByRole("button", { name: "Hinweis schließen", exact: true })
    .click();
  await page.getByRole("link", { name: "Zur Übersicht", exact: true }).click();
  await expect(page).toHaveURL(/\/$/);
});
test("Entwurf 02 ohne schwebende Kästchen; Interaktionen bleiben bedienbar", async ({
  page,
}) => {
  await page.goto("/design-02");
  await expect(page.locator(".f-floating,.f-target,.f-wave")).toHaveCount(0);
  await expect(page.locator(".f-aurora")).toBeVisible();
  await page.getByRole("button", { name: "Licht reduzieren" }).click();
  await expect(page.locator(".future")).toHaveClass(/lights-off/);
  await page.goto("/design-01");
  await page.getByRole("tab", { name: "Graffitientfernung" }).click();
  await expect(page.getByRole("tabpanel")).toContainText("Graffiti & Farbe");
  await page.goto("/design-04");
  await page.locator(".e-gallery-large").click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/design-02");
  expect(
    await page
      .locator(".f-aurora>i")
      .first()
      .evaluate((e) => getComputedStyle(e).animationName),
  ).toBe("none");
});
