# SAHARA — Accessibility Requirements

**Phase 2.** Target: **WCAG 2.1/2.2 AA**. An NGO serving vulnerable and older users must be usable by everyone, including on assistive tech and low-end devices.

---

## Standards & scope
- Conform to **WCAG 2.1 AA** (aim 2.2 AA). Applies to all pages, the timeline, gallery/lightbox, forms, and the (future) donation flow.

## Color & contrast
- Body text ≥ **4.5:1**; large text/UI/icons ≥ **3:1**. Verify the chosen green/terracotta/cream palette (`design-directions.md`) with a contrast checker — **[Verify]** final tokens.
- Never rely on color alone (e.g. status chips also use text/icon).
- Text over images/heroes always has an overlay/scrim ensuring contrast.

## Semantic structure
- One `<h1>` per page; logical heading order (no skipped levels); landmarks (`header`, `nav`, `main`, `footer`, `section` with accessible names).
- Lists, `<figure>/<figcaption>` for gallery, `<time>` for timeline dates, real buttons/links (not click-divs).

## Keyboard navigation
- All interactive elements reachable and operable by keyboard in a logical order.
- **Visible focus states** on every focusable element (not `outline:none` without a replacement).
- **Skip-to-content** link. No keyboard traps. Menu/lightbox/modal: focus trapped while open, `Esc` closes, focus returns to trigger.

## Images & media
- Meaningful **alt text** describing the scene — **no invented context** (mirror `asset-inventory.md`); decorative images `alt=""`.
- Press clippings/infographics: provide text alternatives (don't lock facts inside images) — the timeline is **native text**, not an image.
- Any future video: captions + transcript; no autoplay with sound.

## Forms (Contact, optional newsletter)
- Visible, programmatic **labels** for every field; helpful error messages tied to inputs (`aria-describedby`); errors not by color alone; correct input types; clear required-field indication; success/confirmation announced.

## Gallery / lightbox (see `gallery-architecture.md`)
- Fully keyboard operable (arrows, `Esc`), focus-trapped modal, alt text per image, announced open/close; pinch-zoom not blocked.

## Timeline (see `timeline-architecture.md`)
- Content fully available with **animation disabled**; semantic, chronological reading order; expandable panels are proper buttons with `aria-expanded`.

## Motion
- Respect **`prefers-reduced-motion`**: disable count-ups, parallax, scroll/timeline animations; provide static equivalents.

## Screen-reader behavior
- Test with NVDA/VoiceOver + mobile TalkBack; meaningful link text ("View Annual Report 2016-17, PDF" — not "click here"); `aria-live` for form status; icon-only buttons have accessible names.

## Language & i18n
- Set `lang` correctly; if **bilingual (Telugu)** is chosen **[Verify]**, mark language changes with `lang` attributes and use a font with proper Telugu support.

## Documents
- Prefer HTML for key facts; ensure report **PDFs** are provided as accessible/tagged where possible, with an in-browser viewer **and** download; label file type/size.

## Touch/target sizing
- Interactive targets ≥ 44×44px; adequate spacing (also in `mobile-ux.md`).

## Testing checklist (build phase)
- Automated (axe/Lighthouse) **plus** manual keyboard-only pass, screen-reader pass, 200% zoom/reflow, reduced-motion, and color-contrast audit. No critical a11y issues at launch.
