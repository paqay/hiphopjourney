# HipHopJourney - Diplomprojekt Website

Moderne Projektwebsite fuer das Diplomprojekt **HipHopJourney** (HTL TGM, 5DHITM, 2025/26).

Die Seite praesentiert Team, Ziele, Ergebnisse, Meilensteine und Fortschrittsdokumentation in einem interaktiven Single-Page-Layout.

## Live

- Produktion: `https://paqay.cc/hiphopjourney`
- GitHub Pages Fallback: `https://paqay.github.io/hiphopjourney/`

## Features

- Interaktive Team-Cards mit Flip-Animation
- Milestone-Timeline mit dynamischem Fortschritt
- Fortschrittsdokumentation aus Markdown-Dateien (`public/dokumentation/*.md`)
- Responsive Navigation (Desktop + Mobile)
- Modernes UI mit Glassmorphism, Gradients und Animationen

## Tech Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS
- shadcn/ui + Radix UI
- Lucide Icons
- react-markdown

## Lokale Entwicklung

Voraussetzungen:

- Node.js 18+ (empfohlen: aktuelle LTS)
- npm

Installation und Start:

```bash
npm install
npm run dev
```

Dann im Browser oeffnen:

`http://localhost:8080`

## NPM Scripts

- `npm run dev` - Startet den Dev-Server
- `npm run build` - Erstellt den Production-Build
- `npm run build:dev` - Build im Development-Mode
- `npm run preview` - Preview des Builds lokal
- `npm run lint` - Fuehrt ESLint aus
- `npm run deploy` - Build + Deployment nach GitHub Pages (`gh-pages` branch)

## Deployment

Deployment erfolgt ueber `gh-pages`:

```bash
npm run deploy
```

Wichtige Konfiguration:

- `vite.config.ts` nutzt `base: '/hiphopjourney/'` fuer GitHub Pages.
- Die statischen Fortschrittsdateien liegen in `public/dokumentation/`.
- Jede Dokumentation wird nach Schema `YYYY-MM-DD.md` geladen.

## Projektstruktur (Kurzueberblick)

```text
src/
  pages/Index.tsx          # Hauptseite mit Team, Timeline, Doku-Dialog
  components/ui/           # UI-Bausteine (shadcn/Radix)
  assets/                  # Bilder, Logos, Videos
public/
  dokumentation/*.md       # Fortschrittsdokumentation
```

## Team

- Jakob Ebner - Music Production
- Mohamed El Shal - Video Production
- Toma Nikolaj Ristic - Performance & Analytics

Betreuer: Dipl.-Ing. Alexander Wieser

---

Wenn du Inhalte aktualisierst (Meilensteine oder Dokumentation), danach einfach neu deployen:

```bash
npm run deploy
```
