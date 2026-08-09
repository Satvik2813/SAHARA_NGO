# SAHARA — Component Specification

**Phase 4 — spec only, no code.** Reusable components with layout, spacing, typography, interaction, and responsive behavior. Tokens from `design-system.md`.

---

## Header
- **Layout:** logo (left) · nav (center/right) · Donate pill (right). Height 72px desktop / 60px mobile. Container 1200px.
- **Type:** nav links Inter 600, 0.95rem.
- **Interaction:** transparent over hero → solid on scroll (adds `--shadow-sm`); active item terracotta underline; Donate = terracotta pill.
- **Responsive:** ≥1024 full nav; <1024 hamburger → drawer.

## Desktop navigation
- Inline items: About · Our Work · Our Journey · Stories · Get Involved · More(▾). "More" opens a small panel (Gallery, News & Media, Reports & Transparency, Contact). Hover/focus reveals; keyboard-operable; `aria-expanded`.

## Mobile navigation
- Hamburger → **full-screen `--green-forest` drawer**, cream links (Fraunces 1.4rem), grouped accordions (Our Work → 6 programs; More → 4). Big terracotta **Donate** + quick call/email/socials. Focus-trapped, `Esc`/overlay closes, body scroll locked.

## Donate button
- Terracotta pill, white label + small heart/leaf icon; hover darken+lift; always visible (header + mobile sticky bar). Never shows unverified data — links to `/donate`.

## Hero
- Full-bleed photo (P01) with forest→transparent left scrim; content left-aligned: eyebrow (terracotta), H1 (Fraunces), 1-line supporting (Inter body-lg), 2 CTAs (Donate + secondary). Height ~72vh desktop / ~78vh mobile (portrait crop). Optional slow Ken-Burns (reduced-motion: static).
- **Responsive:** 16:9 desktop art-direction → 4:5 mobile crop preserving faces.

## Section header
- Eyebrow (uppercase, tracked, terracotta/green) + H2 (Fraunces) + optional 1-line intro (`--ink-muted`) + optional link. Left-aligned (or centered for feature bands). 48–64px top margin.

## Program card
- Image-top (3:2), title (H4/Fraunces), 1-line description, "Learn more →" link, optional giving CTA. `--paper`, `--r-md`, `--shadow-sm`, hover lift. Icon chip (program line icon) top-left over image. 6 in a responsive grid (3/2/1 cols).

## Impact / stat card
- **⚠️ Current stats not provided** — this component ships **empty/omitted** until the client supplies figures. When present: big Fraunces tabular number + label + optional icon + source note ("cumulative, self-reported"). No count-up until real numbers exist. For now, a **qualitative reach band** (text only, no numbers) is used instead.

## Story card
- Image (4:5, consented/non-identifying), category chip, short title, 1-line teaser, "Read story →". Privacy-conscious: no full personal data on the card. Links to `/stories/<slug>` for flagship consented stories.

## Timeline item
- Node (banyan-leaf, marigold when active) on the forest spine; card with **year** (Fraunces, terracotta), title (H4), 1–2 line description, optional image (4:3), source chip ("Client timeline" / "Annual report" / "Historical [Needs verification]"). Expand to detail panel. Desktop alternates sides; mobile left-aligned.

## Gallery card
- Square/masonry image (14px radius), hover scrim + caption; tap → lightbox. Lazy-loaded; intrinsic dimensions set (no CLS).

## Press card
- Clipping thumbnail (top), outlet name (Inter 600), date (or "date to confirm"), headline (Fraunces H4), "View" → lightbox. Segregated rows: Confirmed / Historical / [Verify].

## Report card
- Cover thumbnail, year (Fraunces), 1-line highlight, **View** (in-page PDF) + **Download** buttons, file type/size. Grid of 6 (2013–2018) + "newer reports coming" note. **No FCRA.**

## CTA banner
- Full-width `--green-forest` (or warm terracotta-tinted) band, cream text, H2 + short line + Donate/secondary. Banyan motif watermark. Used before footer and mid-pages.

## Contact form
- Fields: Name, Email, Topic (select: General / Donation / Volunteer / Media / Partner), Message. Labels above; 44px inputs; forest focus ring; inline validation; success announced (`aria-live`). Requires Privacy Policy link. Tap-to-call/email shown alongside.

## Donation account card (see `page-designs.md` / homepage-design donate)
- `--paper`, `--r-md`, forest header strip with bank name + type chip (Indian/Foreign). Rows: Account name, A/c no. (mono, **copy-to-clipboard** button), IFSC (copy), SWIFT (if any), Branch. "Confirm before transferring" chip on the two flagged items (Union IFSC; superseded Vijaya note not shown). **No FCRA anywhere.**

## Footer
- `--green-forest`, cream text, 5 columns: (1) logo + tagline + socials (FB/IG/X/LinkedIn); (2) Explore; (3) Get Involved; (4) Trust (Reports, Registered Society/80G/12A — no FCRA, News); (5) Contact (address/phone/email — confirmed set). Bottom bar: © SAHARA, "Donations 80G tax-exempt in India" [Verify currency], Privacy Policy. Banyan motif. Mobile: accordion columns + Donate + tap-to-call.

## Social links
- Row of 4 line icons (Facebook, Instagram, X, LinkedIn) → the **client-confirmed** URLs. Accessible names ("SAHARA on Instagram"). Forest → terracotta on hover.

---

### Shared interaction rules
- Focus-visible on every interactive element (`--shadow-focus`); hover states never the only affordance; all motion gated by `prefers-reduced-motion` (`motion-design.md`); touch targets ≥44px.
