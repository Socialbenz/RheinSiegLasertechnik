// Keep the original page's markup, styling, images and interactions.
// Only approved copy edits and the presentation navigation are added.
import fs from "node:fs/promises";
let html = await fs.readFile(
  new URL("../src/original/reference.html", import.meta.url),
  "utf8",
);
const changes = new Map([
  ["Rhein-Sieg Lasertechnik – Start", "Rhein-Sieg Lasertechnik: Start"],
  [
    "Neue Möglichkeiten für Ihre Oberfläche. Wir prüfen die Eignung und entfernen passende Verschmutzungen mit Lasertechnik – ohne chemische Reinigungsmittel.",
    "Wir prüfen, ob sich Ihre Oberfläche mit Laser reinigen lässt. Die geplanten mobilen Einsätze finden bei Ihnen vor Ort statt. Chemische Reinigungsmittel werden dabei nicht eingesetzt.",
  ],
  ["Die Oberfläche verdient eine Chance", "Rost und alte Beschichtungen"],
  [
    "Das Teil ist noch gut.<br>Die Oberfläche nicht.",
    "Rost am Bauteil?<br>Wir prüfen die Reinigung.",
  ],
  [
    "Rost am Metall, Farbe auf Holz oder Graffiti an der Fassade: Entscheidend ist die Reinigungsmethode, die zum Material passt.",
    "Vor dem Einbau muss ein Bauteil gereinigt werden. Wir prüfen, ob sich die Verschmutzung mit Laser entfernen lässt und welche Vorbereitung dafür nötig ist.",
  ],
  ["Hartnäckige Schichten.", "Rost und Beschichtungen."],
  [
    "Unerwünschte Beschichtungen lassen sich nicht immer mit einfachen Mitteln entfernen.",
    "Art und Dicke einer Beschichtung beeinflussen die Behandlung. Wir beurteilen die Schicht zusammen mit dem Untergrund.",
  ],
  ["Ein Ausbau ist aufwendig.", "Reinigung an der Anlage."],
  [
    "Je nach Bauteil kommt eine Reinigung im eingebauten Zustand infrage. Wir prüfen die Möglichkeiten.",
    "Bei geeigneten Bauteilen ist eine Reinigung im eingebauten Zustand möglich. Wir prüfen den Zugang und die Absicherung des Arbeitsbereichs.",
  ],
  ["Das Material zählt.", "Probefläche vorab prüfen."],
  [
    "Wir betrachten Oberfläche und Verschmutzung gemeinsam und beurteilen die Eignung auf einer Probefläche.",
    "Bei Bedarf testen wir eine kleine Fläche. Danach besprechen wir, ob die Behandlung für das Material geeignet ist.",
  ],
  [
    "Gezielt abtragen.<br>Substanz im Blick.",
    "Anwendungen, die wir<br>vorab prüfen.",
  ],
  [
    "Ein gepulster Laser trägt geeignete unerwünschte Schichten ab. Diese drei Bereiche stehen zum Start im Fokus.",
    "Rost auf Metall, Graffiti und Farbschichten auf Holz sind zum Start vorgesehen. Die Eignung wird für jeden Auftrag geprüft.",
  ],
  [
    "Vorher. Nachher.<br>Neue Möglichkeiten.",
    "Beispielbilder<br>im Vergleich.",
  ],
  [
    "Drei illustrative Beispiele zeigen mögliche Anwendungen. Verschieben Sie die Lichtlinie in jedem Bild und vergleichen Sie.",
    "Die folgenden Bildpaare wurden künstlich erstellt. Mit den Reglern lassen sich die beiden Ansichten vergleichen.",
  ],
  [
    "Illustrative Vorschau – keine zugesicherten Reinigungsergebnisse",
    "KI-generierte Beispielbilder",
  ],
  [
    "Licht arbeitet.<br>Die Oberfläche bleibt<br>im Mittelpunkt.",
    "Kurze Laserpulse<br>tragen geeignete<br>Schichten ab.",
  ],
  ["Kurze Pulse. Gezielter Abtrag.", "So funktioniert die Laserreinigung"],
  ["Von der Anfrage zur Reinigung", "So läuft eine Anfrage ab"],
  [
    "Klar besprochen.<br>Sorgfältig umgesetzt.",
    "So planen wir<br>Ihren Auftrag.",
  ],
  [
    "Jede Oberfläche ist anders. Deshalb beginnt jeder Auftrag mit einem Gespräch.",
    "Zuerst beschreiben Sie uns die Oberfläche und die Verschmutzung. Danach klären wir, wie sich der Auftrag prüfen lässt.",
  ],
  ["Sie zeigen uns,<br>worum es geht.", "Sie beschreiben<br>die Oberfläche."],
  ["Wir reinigen.<br>Sie schauen mit.", "Wir führen die<br>Reinigung aus."],
  ["Persönlich. Aus der Region.", "Über Rhein-Sieg Lasertechnik"],
  [
    "Technik mit<br>Ansprechpartnern.",
    "Kevin-Fabian Bodewig<br>und Sarah Fielenbach.",
  ],
  [
    "Wir sind Rhein-Sieg Lasertechnik. Persönliche Beratung, sorgfältige Arbeit und klare Absprachen sind uns wichtig.",
    "Wir gründen Rhein-Sieg Lasertechnik im Rhein-Sieg-Kreis. Kevin-Fabian Bodewig übernimmt die Reinigung. Sarah Fielenbach kümmert sich um die Verwaltung.",
  ],
  [
    "Von der ersten Frage bis zum vereinbarten Auftrag: Wir besprechen mit Ihnen, was Ihre Oberfläche braucht.",
    "Senden Sie uns eine Beschreibung und Bilder. Wir besprechen mit Ihnen, wie wir die Oberfläche prüfen.",
  ],
  ["Ihre Fragen.<br>Klare Antworten.", "Ihre Fragen zur<br>Laserreinigung."],
  ["Ihre Oberfläche. Unser Gespräch.", "Reinigung anfragen"],
  [
    "Mobile Laserreinigung.<br>Regional verwurzelt. Persönlich beraten.",
    "Mobile Laserreinigung<br>im Rhein-Sieg-Kreis.",
  ],
  ["Impressum – Entwurf", "Impressum: Entwurf"],
  ["Datenschutz – Entwurf", "Datenschutz: Entwurf"],
  [
    "Rhein-Sieg Lasertechnik · Designentwurf",
    "Rhein-Sieg Lasertechnik · Website-Entwurf",
  ],
]);
for (const [from, to] of changes) {
  if (!html.includes(from)) throw new Error(`Originaltext fehlt: ${from}`);
  html = html.replaceAll(from, to);
}
// Replace decorative text glyphs with SVG icons of the same footprint.
html = html.replaceAll(
  "<b>✓</b>",
  '<b aria-hidden="true"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m3 8 3 3 7-7"/></svg></b>',
);
html = html.replaceAll(
  "<b>⌖</b>",
  '<b aria-hidden="true"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor"><circle cx="8" cy="8" r="4"/><path d="M8 1v4m0 6v4M1 8h4m6 0h4"/></svg></b>',
);
html = html.replace(
  "</head>",
  `<link rel="stylesheet" href="/original/presentation.css"><meta name="robots" content="noindex,nofollow"></head>`,
);
html = html.replace(
  "</body>",
  `<aside class="rsl-presentation" aria-label="Entwurf wechseln"><a href="/">Zur Übersicht</a><select aria-label="Design auswählen" onchange="location.assign(this.value)"><option value="/design-01">01: Plumeform</option><option value="/design-02">02: Landa</option><option value="/design-03">03: Cleanfy</option><option value="/design-04">04: LeapFly</option><option value="/design-05" selected>05: Originalentwurf</option></select></aside><script>if(new URLSearchParams(location.search).has('capture'))document.documentElement.dataset.capture='true';</script></body>`,
);
await fs.mkdir(new URL("../public/original/", import.meta.url), {
  recursive: true,
});
await fs.writeFile(
  new URL("../public/original/index.html", import.meta.url),
  html,
);
console.log("Originalseite mit überarbeiteten Texten bereit.");
