# SAHARA — Accessibility Design

**Phase 4 — spec only.** Target **WCAG 2.1 AA** (aim 2.2 AA). Complements `/blueprint/accessibility.md` with design-token specifics.

## Contrast (verify at build)
- Body `--ink #1B1A17` on `--cream #FBF8F1` / `--paper #FFF` → AA+.
- **Green text:** use `--green-forest #0B4D2A` or `--green-700 #0A6B30` for small text (NOT `--green-brand #018738`, which passes only for large/UI ~3:1).
- **CTA:** white on `--terracotta #C24A25` → verify ≥4.5:1 (darken to #B0421F if needed).
- **Marigold #F2A61C:** dark text only; never white text on it; use for accents/focus, not body.
- Never color-only meaning (status chips carry text/icon).

## Focus & keyboard
- Visible focus on all interactive elements: `--shadow-focus` (3px marigold ring) — never removed without replacement.
- Logical tab order; **skip-to-content** link; no keyboard traps.
- Menus/drawer/lightbox/modals: focus trapped while open, `Esc` closes, focus returns to trigger; `aria-expanded` on disclosures.

## Semantics
- One `<h1>`/page; ordered headings; landmarks (`header/nav/main/footer`); real `<button>`/`<a>`; `<figure>/<figcaption>` for gallery; `<time>` for timeline; lists for nav.

## Images & media
- Meaningful **alt** describing the scene (from `asset-manifest.md`/`visual-asset-map.md`) — **no invented context**; decorative `alt=""`.
- Facts never locked inside images (timeline = native text; press facts summarized alongside clippings).

## Forms
- Visible programmatic labels; errors tied via `aria-describedby`, not color-only; correct input types/`inputmode`; required indicated; success via `aria-live`.

## Gallery / lightbox / timeline
- Fully keyboard operable; alt per image; announced open/close; timeline content available with animation off; expand buttons `aria-expanded`.

## Motion & data
- Honor `prefers-reduced-motion` (see `motion-design.md`); consider save-data lightweight path.

## Donation specifics
- **Copy** buttons have accessible names ("Copy ICICI account number"); toast announced via `aria-live`; account details are selectable text (not images).

## Language
- Correct `lang`; if bilingual [Verify], mark language spans and use Noto Telugu.

## Testing (build)
- axe/Lighthouse + manual: keyboard-only, screen-reader (NVDA/VoiceOver/TalkBack), 200% zoom/reflow, reduced-motion, contrast audit. No critical issues at launch.
