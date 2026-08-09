# SAHARA — Homepage Visual Design

**Phase 4 — visual spec, no code.** Refines `homepage-blueprint.md` into concrete visual treatment. Order (approved, lightly refined): **Hero → Identity/Trust → Programs → Story → Journey → Gallery → Transparency → Press → Donate → Get Involved → Footer.** Tokens from `design-system.md`; assets from `asset-manifest.md`.

---

### 1. Hero
- **Visual:** full-bleed **P01** (girls with school bags), forest→transparent left scrim. Eyebrow "SINCE 1986" (terracotta). H1 (Fraunces) using client-confirmed emotive line; supporting line = short Writeup phrase. CTAs: **Donate** (terracotta pill) + "See our work" (outline). Tagline "HELP POOR AND INDEED PEOPLE" as small supporting eyebrow/footer-of-hero.
- **Motion:** optional slow zoom; reduced-motion static.
- **Desktop:** 16:9, text left ~50% width. **Tablet:** text over lower-third. **Mobile:** 4:5 crop (faces preserved), text below/over bottom scrim, CTAs full-width.

### 2. Identity / Trust strip
- `--green-050` band. Left: 2–3 sentence intro (Writeup); "founded & registered 1986." Right: trust micro-badges **Registered Society · 80G · 12A** (pill chips, forest outline) — **no FCRA**. Link "About SAHARA".
- **Mobile:** stacked; badges 2×2.

### 3. Programs (6 cards)
- Section header "What we do." 6 **program cards** (P12 Elderly, P01/P07 Children, P18/P02 Women, P20 Youth, P24 Environment, P07 Health) with line-icon chips. Grid 3×2 desktop / 2 col tablet / 1 col mobile (or snap-scroll). Each links to `/our-work#area`.
- Health card uses P07 (shared) — labeled honestly; no fabricated health image.

### 4. Featured story
- Split layout: image left (**P02** or **P13**, consented), text right — eyebrow "Stories of change," short anonymized narrative, "Read more stories" + contextual giving CTA. `--paper` on `--cream`.
- **Mobile:** image top, text below.

### 5. Journey teaser
- `--green-forest` band, cream text, horizontal mini-timeline of 5–6 marquee milestones (1986 · 1990 · 2003 · 2010 · 2018 · 2020) with banyan-leaf nodes; small images (P17/P24/P32 where fit) or icons. CTA "Explore our 35-year journey."
- **Mobile:** condensed vertical; "view full timeline."

### 6. Gallery teaser
- 6–8 curated tiles (masonry) from `gallery` set (P01, P04, P18, P24, P11, P12, P21, P34). "View gallery" CTA. Lazy-loaded.
- **Mobile:** horizontal swipe row.

### 7. Transparency band
- `--cream`. "Registered & accountable" — Registered Society / 80G / 12A (no FCRA); "Annual reports since 2013" (6 report covers row); **"Our board serves unpaid."** Partner logos strip (CIF, DDS, Give India, Rotary, UNICEF, Sight & Life, Andheri Hilfe, Sitaram Jindal — obtain official logos; grayscale→color on hover). CTAs: "Reports & transparency," "Our partners."
- **Mobile:** report covers 2-col; logos 3-across scroll.

### 8. Press / recognition
- 3 **press cards** (PR01, PR02, PR03) + Award 2019 chip **[Verify]**. "In the news" CTA.
- **Mobile:** swipe cards.

### 9. Donate band
- Full-width warm band (terracotta-tinted or forest). H2 "Extend a helping hand"; tagline; 3 entries — **Donate · Sponsor a Child · Adopt an Elder**; reassurance "80G tax-exempt in India" [Verify]. Links to `/donate` (which shows all approved accounts + UPI + cash + platforms).
- **Mobile:** stacked CTAs; ties to sticky Donate bar.

### 10. Get Involved
- 3 simple cards: Volunteer & Interns (real intern history) · Partner/CSR · Donate-in-kind [Verify]. Icons; "Get involved" + "Contact us."
- **Mobile:** stacked.

### 11. Footer
- As `component-specification.md` (forest, 5 columns, socials FB/IG/X/LinkedIn, confirmed contact, tagline, no FCRA).

---

## Homepage visual rhythm
Alternating background bands for separation: **cream → green-050 → cream → paper → green-forest → cream → cream → cream → warm/terracotta → cream → green-forest(footer)**. Consistent 64–96px section padding (40–56 mobile). One accent (terracotta) reserved for primary actions so Donate always stands out.

## Impact note
There is **no numeric impact-counter section** (client did not provide current stats). The Identity/Trust strip + qualitative language carry credibility instead; historical numbers live only in Journey/Reports, labeled historical.
