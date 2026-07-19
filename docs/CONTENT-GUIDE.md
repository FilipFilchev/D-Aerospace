# Content Guide

Every piece of copy on the site lives in **`src/lib/data/site.js`**. Marketing, sales and
engineering can all edit this one file — no component knowledge needed. After editing,
run the site locally (or just commit; the next deploy picks it up).

## Company & contact — `company`

Name, tagline, phone, email, address and social URLs. These feed the footer, the contact
page, and the chat button. **Social URLs are currently placeholders (`#`) — replace with
our real profiles.**

## Products — `products`

One entry per aircraft (`salvatore`, `azriel`, `lifter`):

| Field | Drives |
|---|---|
| `name`, `accent` | Band heading and per-product accent color |
| `image` | Cut-out render shown on the band (transparent PNG) |
| `drawing` | Technical drawing strip (top/front/side views) |
| `summary` | Paragraph under the heading — keep specs factual |
| `specs[]` | The four spec badges (label / value / unit) |
| `available` | `true` → "Available now / Order now", `false` → "In production / Enquire" |

Spec values must match the current datasheets. Verified figures as of the last review:
Salvatore 40 min / 20 km / 10 kg / Cube Orange; Azriel 60 min / 20 km / 18 kg / 25 kg AUW,
IP54; both NDAA-compliant when configured with Herelink + Cube Blue.

## Sectors — `sectors`

Nine entries. Each drives a tile on `/sectors` and a full page at `/sectors/<slug>`:

- `tile` / `hero` — photography (grid card / page banner)
- `eyebrow`, `intro` — banner copy
- `benefitsTitle`, `benefits[]` — the label + paragraph rows
- `closing` — wrap-up paragraph
- `points[]` — capability chips

The **Defence** page copy is our approved reference text; keep the other sectors in the
same tone when editing.

## Services — `serviceCards` and `serviceSteps`

- `serviceCards` — the four brand cards on `/services` (*We Make Things Personal*, *What
  We Use*, *Prepare For Takeoff*, *We Serve All Sectors*). `color` is `orange` or `blue`.
- `serviceSteps` — the five process steps, each with its own page at `/services/<slug>`:
  number, title, theme color, summary, intro paragraphs, and the "How we do it" cards.

## Resource Library — `resourceFiles`

One entry per document. `category` and `format` feed the filters automatically.

- `thumb` — first-page preview image (`static/img/papers/`)
- `href` — where the card opens. Our two published papers currently link to the legacy
  site; **before the domain cut-over, self-host the PDFs** (see docs/DEPLOYMENT.md).

## FAQs — `productFaqs`, `serviceFaqs`

Plain question/answer pairs rendered as accordions.

## About — `about`

The "Established in 2022" story paragraphs and the partner logos
(`static/img/partners/`). A partner entry with `invert: true` renders its logo inverted —
used for white-on-transparent logo files.

## Images

Drop files into `static/img/` and reference them as `/img/<path>`. Conventions:

- Product renders / cut-outs: transparent PNG
- Photography: JPG, compressed to ≤ ~200 KB
- Sector imagery: `static/img/sectors/<slug>-tile.jpg` and `<slug>-hero.jpg`
