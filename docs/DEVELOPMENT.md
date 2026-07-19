# Development Guide

How we run, change and test the D Aerospace website locally.

## Prerequisites

- **Node.js 20+** and npm. Any standard install works (nodejs.org, nvm, winget).
  > On the current team workstation Node is a portable install at
  > `C:\Users\Admin\nodejs-portable\node-v24.18.0-win-x64`. If `node` isn't found in a
  > fresh terminal, prepend that folder to `PATH` first:
  > `set PATH=C:\Users\Admin\nodejs-portable\node-v24.18.0-win-x64;%PATH%` (CMD).

## Running locally

```bash
npm install          # once per machine
npm run dev          # http://localhost:5173 — hot reload on save
```

To test from a phone on the same network: `npm run dev -- --host` and open the printed
`Network:` URL.

## Project layout

```
├─ src/
│  ├─ app.css              ← design system: tokens, themes, fonts, shared classes
│  ├─ app.html             ← HTML shell (font preloads, theme boot script)
│  ├─ lib/
│  │  ├─ data/site.js      ← ALL site content (see docs/CONTENT-GUIDE.md)
│  │  ├─ theme.svelte.js   ← light/dark theme state
│  │  ├─ actions/reveal.js ← scroll-reveal + parallax
│  │  └─ components/       ← Nav, Footer, ContactSection, ProductBand, Faq,
│  │                         SpecBadge, Logo, NumberedCard, ChatButton, …
│  └─ routes/              ← one folder per page (SvelteKit routing)
│     ├─ sectors/[slug]/   ← 9 prerendered sector pages
│     └─ services/[slug]/  ← 5 prerendered service process pages
├─ static/
│  ├─ img/                 ← all imagery (products, sectors, partners, papers…)
│  └─ fonts/               ← self-hosted woff2 (Chakra Petch, Poppins)
├─ firebase.json           ← Hosting config (clean URLs, cache headers)
└─ .firebaserc             ← Firebase project binding
```

## Testing a change before it ships

1. `npm run build` — must complete with no errors; prerenders all 21 pages.
2. `npm run preview` — click through the production build at `http://localhost:4173`.
3. Manual pass: **both themes** (sun/moon toggle in the nav), mobile menu, Sectors
   dropdown, Resource Library search + filters, contact form states, chat button.
4. Check the browser console for errors and the network tab for any missing images.

## Engineering conventions

- **Content lives in `src/lib/data/site.js`** — components stay content-free.
- **Colors/fonts come from tokens** in `app.css` (`--color-*`, `--font-*`). Never
  hard-code a hex in a component; light/dark theming depends on the tokens.
- Theme-aware text uses `text-fg` / `text-muted` / `text-faint`. Plain `text-white` is
  reserved for content over photos or on colored (orange/blue) cards, where it must stay
  white in both themes.
- **Hero sections with `-z-10` background layers must keep the `isolate` class** on the
  section element — without it the background paints behind the page and disappears.
- Images: photos as `.jpg` (compressed, ≤ ~200 KB), cut-outs/line-art as `.png`.
  Everything referenced from `/img/...`.
