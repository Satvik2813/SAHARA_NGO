# SAHARA — Mobile UX

**Phase 2.** Mobile-first behavior. Rationale: SAHARA's audience is largely in Telangana on **phones and variable bandwidth** — the site must excel on mobile first.

Legend: **[Verify]**.

---

## Global
- **Mobile-first breakpoints:** design at ~360–390px first, enhance up (sm 640 / md 768 / lg 1024 / xl 1280).
- **Sticky header:** compact logo + hamburger + small **Donate** button always visible.
- **Sticky bottom Donate bar** on content pages (not intrusive on forms) — the primary conversion aid; dismissible; hidden on `/donate` itself.
- **Tap targets ≥44×44px**; comfortable spacing; thumb-reachable primary actions.
- **Tap-to-call / tap-to-email** on all contact numbers/emails (once **[Verify]**).

## Navigation
- **Hamburger → full-screen drawer** with grouped nav (About, Our Work, Journey, Stories, Get Involved, More), plus a big Donate button and quick contact/socials.
- Accordions for nested items (Our Work → 6 programs; More → Gallery/News/Transparency/Contact).
- Focus-trapped, keyboard/AT accessible; `Esc`/overlay closes; body scroll locked while open.

## Hero
- Portrait-safe crop (4:5) of the hero photo; headline ≤7 words; supporting line ≤14 words; CTAs stack full-width (Donate primary, secondary below).
- Text legibility overlay/gradient guaranteed over any photo.

## Impact counters
- 2-column grid; count-up optional and **off under reduced-motion**; numbers legible without animation.

## Programs
- 1–2 column cards or a **horizontal snap-scroll** carousel with visible peek of the next card; each card tappable to its section.

## Timeline (`/journey`)
- Single left-spine vertical list; **sticky year mini-headers**; ~6 milestones then lazy-reveal; tap a milestone to expand detail; branch motif simplified; motion off under reduced-motion.

## Gallery
- 1–2 column masonry; lazy-load; tap → full-screen lightbox with **swipe** prev/next, pinch-zoom, caption below; close returns focus.

## Stories
- Image top, text below; consented/non-identifying visuals; share/donate CTA at end.

## Cards (general)
- Full-width, image-top, generous padding; one clear action each.

## Typography
- Fluid scale; body ≥16px (prevents iOS zoom-on-focus); headings scale down gracefully; line-length comfortable; adequate line-height.

## Buttons & forms
- Full-width primary buttons; clear labels; inputs ≥16px; correct `type`/`inputmode` (email/tel); visible labels (not placeholder-only); large tap areas; inline validation; minimal fields (Contact: name, email, message, topic).

## Donation on mobile
- Sticky Donate bar; `/donate` method cards stack; **tap-to-copy** account fields and prominent **QR** (once **[Verify]**); tap-to-call donation contact. No card-data entry on-site.

## Performance considerations (see `performance.md`)
- Prioritize hero LCP image (responsive, preloaded, WebP/AVIF); defer below-fold images (lazy); avoid heavy JS; system/loading-optimized fonts; minimal animation; test on mid-range Android + throttled 3G/4G.

## Reduced motion & data
- Honor `prefers-reduced-motion` (disable count-ups, parallax, timeline animation).
- Consider a lightweight experience for save-data/slow connections (smaller images, no autoplay).

## QA targets
- No horizontal scroll at 360px; all interactive elements reachable by thumb; forms usable one-handed; Lighthouse mobile performance and a11y strong (see `performance.md`, `accessibility.md`).
