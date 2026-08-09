# SAHARA — Motion Design

**Phase 4 — spec only.** Restrained, purposeful motion that adds warmth and guides attention — never decoration for its own sake. **All motion respects `prefers-reduced-motion`.**

## Principles
- Subtle, quick, natural; supports the "Rooted & Warm" calm-credible tone.
- Motion clarifies (reveal, feedback, wayfinding), never distracts.
- No parallax overload, no auto-carousels with motion, no spinning/bouncing, no glassmorphism shimmer.

## Tokens
- Durations: `--t-fast 150ms`, `--t-base 240ms`, `--t-slow 400ms`.
- Easing: `--ease-out cubic-bezier(.2,.7,.2,1)` (entrances), `--ease-in-out` (state).
- Only animate **transform** & **opacity** (GPU-friendly).

## Patterns
- **Scroll reveal:** sections/cards fade + rise 12–16px on enter (stagger ≤60ms). Once only.
- **Hero:** optional slow Ken-Burns zoom (≤8s, ≤4% scale). Off under reduced-motion.
- **Buttons/links:** hover color shift + 1–2px lift + focus ring; active depress.
- **Cards:** hover shadow-sm→md + 2px lift.
- **Timeline:** milestone nodes/cards slide-in from the spine; active node leaf "unfolds" (tiny scale); expand/collapse height+opacity.
- **Gallery:** tile hover scrim/caption fade; lightbox open/close scale+fade (fast).
- **Counters:** **none** (no current stats) — and any future count-up disabled under reduced-motion.
- **Nav:** drawer slides in (240ms) + fade overlay; header background/solidify on scroll (opacity).
- **Copy-to-clipboard (donate):** quick toast fade in/out; icon check swap.

## Reduced motion
`@media (prefers-reduced-motion: reduce)`: disable Ken-Burns, scroll-reveal (show final state), timeline slide, lightbox zoom, hover lifts → replace with instant/opacity-only or none. Content fully usable without motion.

## Performance
- Prefer CSS transitions/`IntersectionObserver` over JS animation loops; no layout-thrash; keep total animated elements per view small; lazy-init below-fold motion.
