# SAHARA — Homepage Blueprint

**Phase 2.** Section-by-section homepage architecture. Storytelling sequence chosen for SAHARA's actual material: **Identity → Human impact → What we do → Proof of work → Journey → Stories → Trust → Act.**

Rationale for this order: SAHARA's greatest asset is a **long, real, documented history**. So we (1) say who we are, (2) make it human immediately, (3) show the breadth of work, (4) prove it with numbers/photos, (5) let the 35-year journey build credibility, (6) make it personal with a story, (7) close the trust loop (reports/registration/partners), (8) ask.

Legend: **[Client] [Web] [WP] [Verify] [Proposed copy]**.

---

### SECTION 1 — Header / Nav (persistent)
- **PURPOSE:** Orient + keep Donate one tap away.
- **CONTENT:** Logo (green banyan + SAHARA) [Client]; nav (see `sitemap.md`); **Donate** button.
- **PRIMARY CTA:** Donate. **SECONDARY CTA:** — (nav).
- **VISUAL:** Transparent-over-hero → solid on scroll. Logo master needs transparent/vector version [Client, Verify].
- **SOURCE:** `SAHARANGOLOGO.png` [Client].
- **MOBILE:** Logo + hamburger + compact Donate; see `mobile-ux.md`.

### SECTION 2 — Hero
- **PURPOSE:** Identity + emotional hook in <5 seconds; establish credibility (**"since 1986"** [Client-confirmed]). Tagline confirmed: **"HELP POOR AND INDEED PEOPLE"** [Client-confirmed] (may sit as a supporting line; the emotive `Writeup.txt` lines can serve as hero headline copy).
- **CONTENT:** Headline + one-line supporting text + 2 CTAs. See `hero-concepts` in `homepage-blueprint` §Hero and full options in **Step 5 / `design-directions.md`**. Recommended headline uses client-originated language only.
- **PRIMARY CTA:** Donate. **SECONDARY CTA:** "See our work" (scrolls to programs) / "Our story".
- **VISUAL:** One strong, warm, real photo of SAHARA's work (candidates: `41 (2).JPG` girls with school bags; `tailor grop.JPG` women sewing; `children.JPG` children with hands raised) [Client]. Full-bleed with legibility overlay.
- **SOURCE:** Writeup taglines [Client]; hero photo [Client, needs extraction/enhancement].
- **MOBILE:** Portrait-safe crop; headline ≤7 words; CTAs stack full-width.

### SECTION 3 — Identity / "Who we are" strip
- **PURPOSE:** One-paragraph plain-language "what & why," plus trust micro-badges.
- **CONTENT:** 2–3 sentence intro from `Writeup.txt` (grassroots voluntary org, integrated community-based approach, Telangana, **founded & registered 1986** [Client-confirmed]). Micro-badges: "Registered Society" · "80G" · "12A" — **NO FCRA badge** (client instruction). 80G/12A shown once currency confirmed [Verify].
- **PRIMARY CTA:** "About SAHARA". **SECONDARY:** —
- **VISUAL:** Optional small portrait/section image or the logo mark as motif.
- **SOURCE:** `Writeup.txt`, About [Web/WP]; registration IDs [WP, Verify].
- **MOBILE:** Badges wrap to 2×2.

### SECTION 4 — Impact snapshot (counters) — ⚠️ ON HOLD
- **PURPOSE:** Prove scale fast.
- **STATUS UPDATE (2026-08-09):** **[Current impact statistics not provided]** by the client. **Do NOT publish unsupported "X+ helped" counters on the homepage.**
- **RECOMMENDED INTERIM:** either (a) **omit the counter band** until the client supplies confirmed current figures, or (b) replace it with a **qualitative reach band** ("Serving children, women, youth and elders across Telangana since 1986" [Client-confirmed]) using **no numeric claims**. Historical/self-reported figures (`Writeup.txt` cumulative set; PPT2 older set) may appear **only** in History/Timeline/Reports, clearly framed as **historical** — never as current homepage counters.
- **PRIMARY CTA:** "See our work". **SECONDARY:** —
- **VISUAL:** No count-ups until numbers exist.
- **SOURCE:** none current [Not provided]; historical only in `timeline.md`/reports.
- **MOBILE:** band omitted or qualitative.

### SECTION 5 — What we do (6 program cards)
- **PURPOSE:** Communicate breadth; route to programs.
- **CONTENT:** 6 cards — Children & Education; Elderly Care; Women Empowerment; Youth & Skills; Environment; Health & Hygiene [Client/Web]. Each: icon, title, one-line, photo, link.
- **PRIMARY CTA:** per card → program section. **SECONDARY:** "Explore all our work".
- **VISUAL:** 6 real program photos (see `visual-strategy.md` mapping).
- **SOURCE:** `Writeup.txt`, PPT1/PPT2, program pages [Client/Web/WP].
- **MOBILE:** 1–2 col cards; horizontal scroll optional.

### SECTION 6 — Human impact / featured story
- **PURPOSE:** Make it personal — one strong, consented, dignified story.
- **CONTENT:** A flagship story teaser (e.g. a woman trained in tailoring now earning [WP success stories]; or the **beneficiary-turned-donor** arc [Client PPT1/WP]) — **anonymized/consented** (see `story-architecture.md`). **[Proposed copy]** framing, real facts only.
- **PRIMARY CTA:** "Read more stories". **SECONDARY:** "Sponsor a child" / "Adopt an elder".
- **VISUAL:** Portrait/scene photo — **consent GRANTED** [Client-confirmed], so real photos may be used; still apply privacy-conscious presentation for sensitive cases and don't invent names/ages.
- **SOURCE:** PPT1 case studies; WP success stories [Client/WP] — **photo/story permission confirmed**.
- **MOBILE:** Image top, text below.

### SECTION 7 — Our Journey teaser (timeline)
- **PURPOSE:** Convert history into credibility.
- **CONTENT:** Horizontal mini-timeline of 5–6 marquee milestones (e.g. 1986/88 founding; 1990 cyclone relief; 2003 beedi-women; 2010 Grow More Trees; 2018 Kerala flood relief; 2020 COVID relief) — pulled from `timeline.md`. Founding framing **[Verify]**.
- **PRIMARY CTA:** "Explore our 35-year journey" → `/journey`.
- **VISUAL:** Branch/line motif; small milestone images (rebuild natively; don't embed the infographic JPEGs).
- **SOURCE:** `audit/timeline.md` [Client/WP].
- **MOBILE:** Vertical condensed; "view full timeline".

### SECTION 8 — Programs-in-action / gallery teaser
- **PURPOSE:** Show, don't tell — a band of authentic photos.
- **CONTENT:** 6–8 curated photos across program areas → link to Gallery.
- **PRIMARY CTA:** "View gallery". **SECONDARY:** —
- **VISUAL:** Masonry/strip of real photos [Client].
- **SOURCE:** posters/PPTs standalone photos [Client]; **needs extraction** (next phase).
- **MOBILE:** Horizontal swipe.

### SECTION 9 — Trust & transparency band
- **PURPOSE:** De-risk giving; satisfy verifiers/funders.
- **CONTENT:** "Registered & accountable" — Registered Society + 80G/12A [Verify currency] — **NO FCRA** (client instruction); "Annual reports since 2013" [WP]; **"Board members serve unpaid"** [WP]; partner logos (CIF, DDS, Give India, Rotary, UNICEF, Sight & Life, Andheri Hilfe, Sitaram Jindal…) [Client/WP, Verify active vs past].
- **PRIMARY CTA:** "Reports & transparency". **SECONDARY:** "Our partners".
- **VISUAL:** Badge row + logo wall (official logos to be obtained).
- **SOURCE:** WP reports/supporters; PPT1 logos [WP/Client, Verify].
- **MOBILE:** Badges wrap; logos 3-across scroll.

### SECTION 10 — Press / recognition strip
- **PURPOSE:** Third-party credibility.
- **CONTENT:** 3 press cards (Nava Telangana 31/12/2023; Metroudayam; + one) [Client] and the "Telangana NGO Leadership Award 2019" **[Verify]**.
- **PRIMARY CTA:** "In the news". **SECONDARY:** —
- **VISUAL:** Clipping thumbnails (reuse permission **[Verify]**).
- **SOURCE:** `press-coverage.md` [Client, Verify].
- **MOBILE:** Swipe cards.

### SECTION 11 — Primary donation CTA band
- **PURPOSE:** The main ask, in full context after the story is made.
- **CONTENT:** Tagline "**HELP POOR AND INDEED PEOPLE**" [Client-confirmed]; giving entries — Donate / Sponsor a Child / Adopt an Elder; reassurance line ("80G tax-exempt in India" **[Verify currency]**). Band links to `/donate`, which now shows the **full client-approved account set + UPI + cash + Give India/ImpactGuru/Milaap** (exact figures in `client-confirmed-information.md`).
- **PRIMARY CTA:** Donate. **SECONDARY:** Sponsor / Adopt.
- **VISUAL:** Warm full-width band; single supporting image.
- **SOURCE:** giving framing [Client]; **payment details CONFIRMED** [Client-approved images] (two sub-items still to confirm: Vijaya no., Union IFSC).
- **MOBILE:** Stacked CTAs; ties to sticky Donate.

### SECTION 12 — Get involved (beyond money)
- **PURPOSE:** Offer non-financial participation.
- **CONTENT:** Volunteer / Intern (real intern history: TISS, Christ, Presidency, Bocconi, IIPH, Univ. of Oslo [Client/WP]); Partner/CSR; Donate-in-kind (notebooks, rice, clothes — historically accepted [WP], **[Verify]** current).
- **PRIMARY CTA:** "Get involved". **SECONDARY:** "Contact us".
- **VISUAL:** 3 simple cards/icons.
- **SOURCE:** WP "Join Us"/reports; PPT1 interns [WP/Client, Verify].
- **MOBILE:** Stacked cards.

### SECTION 13 — Newsletter / stay-in-touch (optional)
- **PURPOSE:** Capture soft leads.
- **CONTENT:** Email signup — **only if** the client can operate it and a Privacy Policy exists [Verify]. Otherwise omit.
- **PRIMARY CTA:** Subscribe. **SECONDARY:** —
- **MOBILE:** Single field + button.

### SECTION 14 — Footer
- See `page-blueprints.md` (Footer) and `mobile-ux.md`. Logo, short description, nav, programs, Donate, contact, socials, registration/trust IDs [Verify], reports link, copyright, privacy.

---

## Homepage section order (summary)
1 Header · 2 Hero · 3 Identity+trust badges · 4 Impact counters · 5 Six programs · 6 Featured story · 7 Journey teaser · 8 Gallery teaser · 9 Trust & transparency · 10 Press/recognition · 11 Donation band · 12 Get involved · 13 (optional) Newsletter · 14 Footer.

**Primary CTA (whole page):** **Donate.**
**Secondary CTAs:** "See our work" / "Sponsor a Child" / "Adopt an Elder" / "Explore our journey."

> Every image and stat above traces to `asset-inventory.md` / `content-audit.md`; all payment, registration, award, consent and founding-year items remain **[Verify]** and are listed in `verification-requirements.md`.
