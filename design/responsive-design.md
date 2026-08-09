# SAHARA — Responsive Design

**Phase 4 — spec only.** Mobile-first; mobile must feel **native, not a shrunk desktop**. Low/variable bandwidth region → performance-aware (see `performance.md`).

## Breakpoints
| Name | Width | Container | Grid |
|---|---|---|---|
| Mobile | 360–639 | fluid, 16px gutters | 1 col |
| Tablet | 640–1023 | fluid, 24px | 2 col |
| Desktop | 1024–1279 | 1120px | 3 col |
| Wide | ≥1280 | 1200px max | 3–4 col |

Design first at **~390px**, enhance up. Body ≥16px (prevents iOS zoom). No horizontal scroll at 360px.

## Component behavior
- **Header/Nav:** ≥1024 inline nav + Donate pill; <1024 hamburger → full-screen forest drawer; **sticky bottom Donate bar** on content pages (hidden on `/donate` & forms).
- **Hero:** desktop 16:9 art-direction (`<picture>`); mobile 4:5 crop **preserving faces** (P01 subject centered); headline ≤7 words mobile; CTAs full-width stacked.
- **Programs:** 3 col → 2 → 1 (or snap-scroll carousel with peek on mobile).
- **Timeline:** desktop center spine alternating; mobile single left spine + sticky year headers; expand panels full-width.
- **Gallery:** masonry 3–4 → 2 → 1–2; lightbox full-screen + swipe on mobile.
- **Donation cards:** 3/2/1 per row; mobile = full-width with full-width **Copy** buttons; accordions to shorten.
- **Tables (bank details, reports):** never shrink to unreadable — reflow bank details into **cards** on mobile (not scrolling tables); report list → stacked cards.
- **Forms:** single-column on mobile; labels above; 44px targets; tap-to-call/email.
- **Footer:** 5 columns → accordion sections on mobile + Donate + tap-to-call.

## Images
- Responsive `srcset`/`sizes`; serve 480/960/1600 variants; WebP/AVIF; correct intrinsic dimensions (no CLS); lazy below-fold; hero preloaded.

## Touch & ergonomics
- Targets ≥44×44px; primary actions thumb-reachable; sticky Donate within thumb zone; generous spacing; one-handed forms.

## QA targets
- No overflow at 360px; Lighthouse mobile perf ≥90, a11y ≥95; test on real mid-range Android + throttled 3G/4G; verify hero face-safe crops at every breakpoint.
