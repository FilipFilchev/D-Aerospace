# Deployment Guide

How we ship the D Aerospace website to production.

**Production:** Firebase Hosting, project **`d-aerospace-d71be`**
(console: <https://console.firebase.google.com/project/d-aerospace-d71be>).
Live at <https://d-aerospace-d71be.web.app>.

## One-time setup (per machine)

```bash
npm install -g firebase-tools
firebase login          # sign in with the D Aerospace Google account
```

`.firebaserc` in this repo already binds to the production project — no further
configuration is needed.

## Every release

```bash
npm run build                    # prerender all pages into build/
firebase deploy --only hosting   # upload & release
```

The CLI prints the hosting URL when the release is live. Firebase keeps previous
releases — a bad deploy can be rolled back instantly from the console
(*Hosting → Release history → Rollback*).

## Pre-release checklist

- [ ] `npm run build` passes with no errors
- [ ] `npm run preview` — click through all pages, both themes
- [ ] Contact details in `src/lib/data/site.js` are current
- [ ] New images are compressed (photos ≤ ~200 KB)

## Connecting d-aerospace.com

Our domain currently points at the legacy WordPress site. To cut over to this site:

1. **Before switching** — the two published-paper cards on the Resource Library page link
   to the legacy site (`d-aerospace.com/?page_id=926`). Download the paper PDFs from the
   legacy site first, place them in `static/papers/`, and update the two `href` values in
   `src/lib/data/site.js` to point at `/papers/<file>.pdf`. Otherwise those links break
   the moment the domain moves.
2. Firebase console → **Hosting** → **Add custom domain** → enter `d-aerospace.com`
   (include `www.d-aerospace.com` when prompted).
3. Firebase shows a **TXT record** — add it at the domain registrar's DNS panel, then
   click **Verify**.
4. Firebase then shows two **A records** — replace the domain's existing A records with
   them at the registrar.
5. Wait for DNS propagation (minutes up to a few hours). Firebase provisions the SSL
   certificate automatically; the console shows **Connected** when done.
6. Deploy once more and confirm `https://d-aerospace.com` serves the new site.

## Hosting configuration

`firebase.json` serves the `build/` folder with:

- **Clean URLs** — `/sectors/defence` maps to the prerendered `defence.html`
- **Immutable caching** for hashed app assets and fonts (1 year)
- **7-day caching** for images

No server or SSR runtime is involved — every page is static HTML, so hosting is free-tier
friendly and effectively unbreakable under load.
