# Website-Entwürfe für Rhein-Sieg Lasertechnik

Die Übersicht enthält vier neue Website-Entwürfe und die bisherige Testseite. Jede Seite lässt sich öffnen und bedienen. Die Formulare versenden keine Daten. Die Bilder sind als KI-generierte Beispiele gekennzeichnet.

## Lokal starten

Benötigt wird Node.js 24. Die Paketversionen stehen in `package-lock.json`.

```sh
npm ci
npm run dev
```

| Route | Vorlage | Aufbau |
| --- | --- | --- |
| `/` | Übersicht | Fünf Vorschauen mit Links zu den Seiten |
| `/design-01` | Plumeform | Dunkler Hintergrund mit senkrechten Lichtflächen |
| `/design-02` | Landa | Bewegte Lichtstrahlen, ohne schwebende Kästchen |
| `/design-03` | Cleanfy | Großes Werkstattfoto und helle Inhaltsbereiche |
| `/design-04` | LeapFly | Abgerundete Fotos und eine Bildgalerie |
| `/design-05` | Bisherige Testseite | Originalbilder, Original-CSS und ursprüngliche Abschnitte |

Variante 05 ist eine eigenständige HTML-Seite unter `public/original/index.html`. Sie wird direkt unter `/design-05` ausgeliefert. Es gibt keinen eingebetteten Frame. Das Original wurde am 19.10.2026 von `rhein-sieg-lasertechnik.vercel.app` abgerufen. Die Originaldatei für den lokalen Aufbau steht in `src/original/reference.html`. Bild- und Schriftdateien wurden ohne Änderung aus den eingebetteten Daten übernommen. Die Prüfsummen stehen in `src/original/provenance.json`.

`scripts/build-original.mjs` überarbeitet die Texte dieser Vorlage. Die CSS-Regeln und die Anordnung der Bilder bleiben erhalten. Hinzu kommt die kleine Navigation zur Übersicht. Die Datei wird vor dem Entwicklungsstart und vor jedem Build erzeugt.

## Build und Tests

```sh
npm run build
npm test
```

Die vier Quellprüfungen vergleichen die Original-CSS-Regeln und Bilddateien. Die Browsertests prüfen die fünf Seiten auf Desktop, Tablet und Smartphone. Getestet werden auch die Testformulare und die drei Original-Vergleichsregler.

Playwright nutzt `/usr/bin/chromium`. Mit `CHROMIUM_PATH` lässt sich ein anderer Chromium-Pfad einstellen. Für einen bereits laufenden Server kann `TEST_BASE_URL` gesetzt werden.

```sh
npm run preview -- --port 4173
TEST_BASE_URL=http://localhost:4173 npm test
```

## Vorschaubilder aktualisieren

Bei laufendem Entwicklungsserver:

```sh
npm run screenshots
npm run build
```

Die Galeriebilder liegen unter `public/previews/`. Die Screenshots für die Prüfung werden unter `artifacts/visual-review/` gespeichert. `?capture` blendet den Variantenwechsler aus.

## Dauerhaft über GitHub und Vercel veröffentlichen

Vorgesehen ist das Repository `Socialbenz/RheinSiegLasertechnik`. Das neue Vercel-Projekt heißt `rsl-website-entwuerfe` und gehört in das persönliche Vercel-Konto. Die bestehende Testseite behält ihr eigenes Projekt.

Nach dem Übertragen des Codes in GitHub lässt sich das Repository in Vercel über „Add New“, „Project“ importieren. Als Framework wird Vite gewählt. Buildbefehl ist `npm run build`, Ausgabeverzeichnis `dist`. Eigene Umgebungsvariablen sind für diese Vorschau nicht nötig.

`vercel.json` liefert Variante 05 aus der Original-HTML-Datei aus. Die vier neuen Seiten laufen über die React-Anwendung. Alle Routen erhalten den Header `X-Robots-Tag: noindex, nofollow`. Das verhindert keine Zugriffe durch Personen mit dem Link. Wenn die Vorschau nur für bestimmte Personen erreichbar sein soll, muss in Vercel ein Zugriffsschutz eingerichtet werden.

Für eine vorübergehende Vorschau ohne Kontoverbindung:

```sh
npm run prepare:preview
npx vercel@64.5.0 deploy artifacts/vercel-preview --temporary --prebuilt --yes
```

Die zeitliche Begrenzung wird von Vercel angezeigt. Eine temporäre Vorschau ersetzt die dauerhafte Verbindung mit GitHub nicht.

## Texte und Unterlagen

Die Texte beschreiben geplante Anwendungen. Die Eignung einer Oberfläche muss vor dem Einsatz geprüft werden. Geschäftliche Kontaktdaten und rechtliche Angaben werden nach Freigabe ergänzt.

Die Originalinterviews und die Schreibstil-Datei liegen unter `docs/sources/`. Dieser Ordner ist vom Git-Upload ausgeschlossen. Die Unterlagen werden als Quellen aufbewahrt. Die Website-Texte und die Projektdokumentation wurden sprachlich überarbeitet.
