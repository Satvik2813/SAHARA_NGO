# SAHARA — Performance Strategy

**Phase 2 — strategy only, no implementation.** The site is **image-heavy** and serves a **low/variable-bandwidth** audience, so performance is a core requirement, not a polish item.

---

## Targets (build-phase goals)
- **Core Web Vitals:** LCP < 2.5s (mid-range Android, 4G), CLS < 0.1, INP < 200ms.
- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95 (see `accessibility.md`).
- Fast first load on 3G/4G; graceful on save-data.

## Images (the biggest lever)
- Serve **WebP/AVIF** with fallbacks; compress aggressively (most sources are already low-res — don't upscale beyond need).
- **Responsive images:** `srcset`/`sizes`; deliver appropriately sized variants per breakpoint; never ship a 2000px image to a 360px screen.
- **Explicit width/height** (or aspect-ratio) on every image to prevent **CLS**.
- **Lazy-load** below-the-fold and gallery images (`loading="lazy"` + IntersectionObserver where needed); **eager+preload** only the hero LCP image.
- **Hero:** preloaded, prioritized, tuned variant; portrait/landscape art-direction via `<picture>`.
- **Gallery/timeline:** thumbnails first; full images only on lightbox open / expand; cap initial render (~12–20), then lazy-load.
- **Reports:** PDFs load on demand (view/download), not inline on page load; small cover thumbnails only.

## Fonts
- Minimal families/weights (see `design-directions.md`); **`font-display: swap`**; self-host + preload key faces; subset (incl. **Telugu** only if bilingual **[Verify]**) to cut bytes; avoid layout shift from webfonts.

## Code & delivery
- **CDN** for static assets and images (edge caching); long-cache immutable assets with hashing.
- Keep JS minimal; **code-split** per route; defer non-critical scripts; avoid heavy libraries for the timeline/gallery (prefer lightweight/native).
- Critical CSS inlined for above-the-fold; the rest deferred.
- Server compression (Brotli/gzip); HTTP/2+.

## Animations
- Use transform/opacity only (GPU-friendly); avoid layout-thrashing animations; **disable under `prefers-reduced-motion`**; no autoplaying heavy media.

## Caching & offline resilience
- Sensible cache headers; consider a light service worker for repeat visits and offline-tolerant static assets (optional, v1.1).

## Measurement (build phase)
- Test on **real mid-range Android** + throttled network; Lighthouse CI in the pipeline; track LCP/CLS/INP; set an image-weight budget per page (e.g. hero ≤ ~200–300KB, page initial ≤ ~1–1.5MB).

## Notes tied to our assets
- Source photos are mostly ≤ ~1MP and compressed → **modest file sizes**, but there are **many**; the win is **lazy-loading + responsive variants + curation**, not per-image heroics.
- The "helping hands" 2910×1974 image (PPT2) is the only large file — resize/optimize before any use (and verify license first, **[Verify]**).

> Nothing implemented here. This governs the build phase.
