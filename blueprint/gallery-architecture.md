# SAHARA — Gallery Architecture

**Phase 2.** A **curated, categorized** gallery (not one giant grid), with categories verified against the actual `asset-inventory.md`.

Legend: **[Client] [Web] [WP] [Verify]**.

---

## Principles
- **Curated over exhaustive** — show the best, categorized; avoid a flat 33-thumbnail dump (the current site's weakness [Web]).
- **Category = program area** (mirrors how users think and how content maps).
- **Quality gate** — low-res images only as small tiles; hero/feature tiles need enhanced assets.
- **Consent gate** — identifiable beneficiaries (esp. minors) require confirmed consent [Verify].

## Categories (verified against asset inventory)
| Category | Supported by inventory? | Sample sources |
|---|---|---|
| **Children & Education** | ✅ strong | `2.jpg`,`bags.JPG`,`41 (2).JPG`,`child 2.22.JPG`, PPT `image18/20/44/45` |
| **Girl Child** (sub-theme of above, optional) | ✅ | girl-child posters/photos [Client] |
| **Elderly Care** | ✅ strong | `3.jpg`,`aged 2.22.JPG`,`aag`/`aged appeal`, PPT `image21–25/30` |
| **Women Empowerment** | ✅ strong | `1.jpg`,`tailor grop.JPG`,`skills.JPG`, PPT `image48/50/31` |
| **Youth & Skills** | ✅ | `skills.JPG`, PPT `image29/30/49` |
| **Environment** | ✅ | `Save Rain Water.jpg`, PPT `image51/52/53` |
| **Community & Events** | ✅ (events, distributions, Women's/Elders' Day) | reports' event photos [WP], PPT event photos |
| **Health & Hygiene** | ⚠️ weak | few clean photos — extract from camp posters/PPT **[Verify/source]** |
| **Historical Archive** | ✅ | WP 2010 gallery (low-res) + PPT2 historical banners (`image21/29`) [WP/Client] |

> Start with the categories that have **strong** support; add Health and expand Historical Archive as assets are prepared. Don't create a category the inventory can't fill.

## Page design

### Gallery landing (`/gallery`)
- Intro line; **category filter chips** (All + the categories above); responsive **masonry** grid; each tile = image + short caption + category tag.
- **Lazy-load** on scroll; **skeleton placeholders**; "Load more" or infinite scroll with a cap.

### Lightbox
- Click tile → accessible modal: larger image, caption, category, prev/next.
- **Keyboard:** arrows navigate, `Esc` closes, focus trapped, focus returns to trigger.
- **Screen-reader:** each image has meaningful **alt text** (describe the scene, no invented context); modal announced.
- Swipe on mobile; pinch-zoom allowed.

### Captions
- Short, factual, **no invented context** (mirror `asset-inventory.md` descriptions).
- Add year/place **only if known**; otherwise omit.
- Historical images labeled "Archive" / approximate era.

## De-duplication (before publishing)
Combine and de-dupe across: client posters/PPT standalones [Client] + current-site 33 images [Web] + WP 2010 gallery ~30 [WP]. Known overlaps in `asset-inventory.md` §E (e.g. `aag`≈`aged appeal`). Prepare each unique image once.

## Accessibility
- Every image: descriptive `alt`; decorative-only images `alt=""`.
- Grid is keyboard-navigable; lightbox fully operable without a mouse; `prefers-reduced-motion` disables zoom/transition animation.

## Performance
- Responsive `srcset` + WebP/AVIF; correct intrinsic width/height (no layout shift); thumbnails small, full image on lightbox open only; CDN; cap initial render (~12–20 tiles) then lazy-load.

## Verification / rights
- **Consent** for identifiable beneficiaries [Verify]; **licensing** of any stock; **captions'** factual accuracy; higher-res originals requested for feature tiles.

## Mobile
- 1–2 columns; large tiles; tap → full-screen lightbox with swipe; captions below image; download disabled by default.
