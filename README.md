# FAUDI Aviation – Specification Analyzer

Responsive Hochschuldemo mit React, Vite und TypeScript. Unabhängiger Demonstrator, kein offizielles FAUDI-Produkt. Alle Dokumente und Werte sind synthetisch und nicht für Engineering-Freigaben geeignet.

## Lokal starten

Node.js 22 oder neuer verwenden.

```sh
npm ci
npm run dev
```

Die URL enthält den Pfad `/project-demo-handout/`.

## Prüfen

```sh
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

Browser-Tests prüfen Desktop und Smartphone, Quellen für widersprüchliche Druckangaben und Erklärdialoge. Unit-Tests gleichen alle Zitate mit der jeweiligen synthetischen Dokumentseite ab.

## Demo nutzen

ALPHA zeigt fehlende und unklare Angaben. BETA zeigt einen Druckkonflikt. Beispiel wählen, Analyse starten und anschließend Anforderungen oder Quellenpfeile anklicken. Statuskarten filtern die Ergebnisse. PDFs lassen sich in der Ergebnisansicht öffnen.

Eigene PDFs (maximal 20 MB) werden ausschließlich lokal auf Endung, Größe und PDF-Dateikopf geprüft. Keine vollständige PDF-Validierung, OCR, Textextraktion oder KI-Auswertung. Die Prozessanimation ist eine Simulation; für eigene Dateien erscheinen keine technischen Analyseergebnisse. Es gibt weder Backend noch API-Schlüssel, externe Fonts oder kostenpflichtige Dienste. Dateien werden nicht hochgeladen oder gespeichert.

## Dokumente

`src/data.ts` ist die gemeinsame Datenquelle für vorbereitete Ergebnisse und PDF-Inhalte. Nach Änderungen mit `npm run documents` die beiden PDFs unter `public/documents/` neu erzeugen und mit committen. Quellen nennen die tatsächliche PDF-Seite. Statuswerte sind FOUND, MISSING, UNCLEAR und CONFLICT; sie sind keine statistischen KI-Konfidenzen.

## GitHub Pages

In Repository Settings → Pages als Source **GitHub Actions** wählen. Der Workflow prüft Pull Requests; Pushes nach `main` bauen und veröffentlichen nach erfolgreichen Tests automatisch. Der PR selbst veröffentlicht noch keine Seite.

Erwartete URL nach Merge und erfolgreichem Deployment:
https://svenschmunk.github.io/project-demo-handout/

Diese URL kann anschließend für einen QR-Code verwendet werden. Bei Umbenennung des Repositorys `base` in `vite.config.ts` anpassen. Die Anwendung verwendet keine Unterseiten-Routen.

## Bedienung und Zugänglichkeit

Mobile Dateiauswahl, Drag-and-Drop am Desktop, Tastaturbedienung, sichtbare Fokusmarkierung, Dialoge mit Escape-Schließen und Fokus-Rückgabe, textuelle Statuswerte sowie reduzierte Bewegung über die Systemeinstellung werden unterstützt. Keine echten Unternehmens- oder Kundendaten für diese öffentliche Demo verwenden.
