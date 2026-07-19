# Design System

The visual language of the D Aerospace website. Everything is driven by CSS design tokens
in `src/app.css` — change a token, and the whole site follows.

## Brand

- **Mark:** the tri-blade rotor (`static/img/logo.webp`, favicon `static/favicon.png`).
  The source art is white-on-black; the site renders it blend-mode-keyed so it sits
  cleanly on any surface and auto-inverts in light theme.
- **Voice:** confident, technical, personal — "we build drones around you."

## Color

| Token | Dark (default) | Light | Use |
|---|---|---|---|
| `--color-ink` | `#0b0b0c` | `#f5f5f7` | page background |
| `--color-ink-2` | `#101011` | `#ffffff` | raised background |
| `--color-panel` / `-2` / `-3` | `#161617` … | `#ffffff` … | cards, surfaces |
| `--color-fg` | `#ffffff` | `#131316` | primary text |
| `--color-muted` / `--color-faint` | grays | grays | secondary / tertiary text |
| `--color-accent` | `#ea5e1e` | same | primary orange — CTAs, highlights |
| `--color-amber` | `#f29c37` | same | secondary orange |
| `--color-cyan` | `#0ab2f1` | same | process pages, Azriel accents |
| `--color-lime` | `#b5fc59` | same | highlight accent |
| services blue | `#2f62cc` | same | "What We Use / Prepare For Takeoff" cards |

**Theming rules**

- Light theme is activated by `data-theme="light"` on `<html>` (toggle in the nav,
  persisted to `localStorage`, applied before first paint — no flash).
- Use `text-fg` / `text-muted` / `text-faint` for text on page or card surfaces.
- Use `text-white` only over photography or on colored cards — surfaces that stay dark
  in both themes. Photo overlays use black gradient constants for the same reason.

## Typography

- **Display** — Chakra Petch (600), wide letter-spacing, uppercase: page titles, product
  names, numeric badges. Class: `.display`.
- **Body / headings** — Poppins. Eyebrow labels use `.eyebrow` (Chakra Petch, tracked).
- Both families are self-hosted woff2 subsets in `static/fonts/` — the site makes zero
  external font requests.

## Components

| Component | Purpose |
|---|---|
| `ProductBand` | Full-width product section: accent glow, spec badges, technical drawings |
| `SpecBadge` | Icon + label + value pill |
| `NumberedCard` | White "How we do it" card with colored number badge |
| `Faq` | Accordion |
| `ContactSection` | Shared contact form (theme-aware fields) |
| `ChatButton` | Floating orange chat bubble → email / call / demo |
| `Nav` / `Footer` | Shell; nav is transparent over heroes (dark), solid otherwise |

## Motion

Scroll-reveal via the `reveal` action (`use:reveal={{ delay, y, x, scale, blur }}`) —
fade + rise with expo easing, staggered per grid. Respects `prefers-reduced-motion`.
Hover states: subtle lifts (`-translate-y-1`), image zooms at 500–700 ms.

## Layout

- Content container: `.container-x` (max 1240 px).
- Card radius: 20–26 px. Pills: fully rounded.
- Hero sections: full-bleed photo + gradient overlay; **must carry `isolate`** so their
  `-z-10` background layers stay inside the section.
