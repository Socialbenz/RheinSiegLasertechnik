import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import crypto from "node:crypto";
const source = await fs.readFile("src/original/reference.html", "utf8");
const page = await fs.readFile("public/original/index.html", "utf8");
test("Original-CSS bleibt vollständig erhalten", () => {
  const styles = (h) =>
    [...h.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]);
  assert.deepEqual(styles(page), styles(source));
});
test("Alle Originalbilder und Fonts bleiben unverändert", async () => {
  const { assets } = JSON.parse(
    await fs.readFile("src/original/provenance.json", "utf8"),
  );
  assert.equal(Object.keys(assets).length, 9);
  for (const [url, meta] of Object.entries(assets)) {
    assert.equal(
      crypto
        .createHash("sha256")
        .update(await fs.readFile("public" + url))
        .digest("hex"),
      meta.sha256,
    );
  }
});
test("Abschnitte und Bildpositionen entsprechen der Originalseite", () => {
  const sections = (h) => [...h.matchAll(/<section\b[^>]*>/g)].map((m) => m[0]);
  const imgs = (h) => [...h.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  assert.deepEqual(sections(page), sections(source));
  assert.deepEqual(imgs(page), imgs(source));
});
test("Überarbeitete Texte ersetzen die beanstandete Formulierung", () => {
  assert.match(page, /Rost am Bauteil\?<br>Wir prüfen die Reinigung\./);
  assert.doesNotMatch(
    page,
    /Das Teil muss|Das Teil ist noch gut|Neue Möglichkeiten|—| – /,
  );
  assert.doesNotMatch(page, /<iframe/);
});
