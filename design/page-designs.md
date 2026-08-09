# SAHARA — Page Visual Designs

**Phase 4 — visual spec, no code.** All primary pages (homepage is separate in `homepage-design.md`). Format per page: Purpose · Section order · Layout · Image · Typography · CTA · Interaction · Desktop/Tablet/Mobile. Tokens from `design-system.md`; assets from `asset-manifest.md`.

---

## About — `/about`
- **Purpose:** who SAHARA is, credible history, mission/vision, leadership, recognition.
- **Sections:** Page hero (compact, P32 or team photo, forest scrim) → Our Story (1986; integrated approach) → Mission & Vision (verbatim Writeup, in a `--green-050` quote panel) → Our Approach (Listen/Empower/Sustain, 3 icons) → Leadership & Governance (founder **Narsing Rao Ramagirri**; "board serves unpaid") → Registration & Legal (Registered Society/80G/12A chips — **no FCRA**) → Recognition (Award 2019 [Verify]) → CTA banner.
- **Layout:** centered measure (~68ch) for prose; alternating bands. **Image:** P32 (history), P28 (award). **Type:** H1 Fraunces, quote panel Fraunces italic. **CTA:** Donate / Reports.
- **Desktop:** sticky sub-nav (Story/Mission/Leadership/Registration). **Tablet:** sub-nav as chips. **Mobile:** collapsible governance detail.

## Our Work — `/our-work`
- **Purpose:** six programs in depth + route to giving.
- **Sections:** intro → 6 anchored program blocks → historical/"wider history" strip → Impact teaser.
- **Layout:** each block = image + text, alternating sides; status label (Current/Historical/[Needs careful wording]). **Image:** one per program (P01/P07, P12, P02/P18, P20, P24, P07-health). **Type:** program title Fraunces H3, eyebrow terracotta. **CTA:** contextual (Sponsor a Child / Adopt an Elder / etc.). **Interaction:** program chip picker jumps to anchors.
- **Desktop:** two-column blocks. **Tablet:** stacked with wide image. **Mobile:** image top, collapsible detail; sticky program chips.
- **Health note:** honest wording; P07 shared; no fabricated image.

## Impact — `/impact`
- **Purpose:** evidence without current counters.
- **Sections:** qualitative reach narrative (no numbers) → historical achievements (labeled historical, from Journey/Reports) → geographic reach (district graphic; 4 current/7 historical [Verify]) → 2–3 proof stories → link to reports.
- **Layout:** `--green-050` reach band; district map = simple SVG of Telangana with dots (rebuilt natively, not the PPT map image). **CTA:** Donate / Read reports.
- **⚠️** No "X+ helped" counters until client provides stats.

## Our Journey — `/journey`  (see full treatment in "Timeline design" below)

## Stories — `/stories` (+ `/stories/<slug>`)
- **Purpose:** human impact, privacy-first.
- **Sections:** intro → filter chips (Women's livelihoods / Children / Elderly / Crisis) → story-card grid → detail pages for flagship consented stories.
- **Image:** consented/non-identifying (P02/P13/P05); sensitive portraits (P30/P31) only if paired with their documented story, anonymized. **Type:** story title Fraunces. **CTA:** giving per story.
- **Interaction:** filter; card → detail. **Mobile:** single column; image top.

## Get Involved — `/get-involved`
- **Sections:** Donate (→/donate) · Sponsor a Child · Adopt an Elder · Volunteer & Interns (real history) · Partner/CSR · Donate-in-kind [Verify]. Card grid; each = icon + what/who + CTA. **Mobile:** stacked.

## Donate — `/donate`  (see full treatment in "Donation design" below)

## Gallery — `/gallery`  (see full treatment in "Gallery design" below)

## News & Media — `/news`
- **Purpose:** press + media credibility.
- **Sections:** intro → press-card grid (PR01–PR04, segregated Confirmed/Historical/[Verify]) → media note (ETV 2016) → media-contact block.
- **Image:** clipping thumbnails; lightbox for full. **CTA:** media contact. **Interaction:** tap → lightbox (accessible). **Mobile:** card list.

## Reports & Transparency — `/transparency`
- **Purpose:** de-risk giving.
- **Sections:** commitment line → Annual Reports (6 **report cards**, newest first, "newer coming") → Governance ("board unpaid") → Registration (Registered Society/80G/12A chips — **NO FCRA**) → optional documents.
- **Interaction:** View (in-page PDF) + Download; keyboard-accessible; lazy covers. **Mobile:** single-column cards, download-first.

## Contact — `/contact`
- **Sections:** confirmed address/phone/email (tap-to-call/email) → contact form → official socials (FB/IG/X/LinkedIn) → embedded map.
- **Layout:** two-column (info left, form right) desktop; stacked mobile. **CTA:** Send message / Donate. **Interaction:** inline validation, success announced.

---

# Donation design (PART 17) — `/donate`

- **Tone:** trustworthy, simple, "no unverified data." **No FCRA anywhere.**
- **Section order:** headline + reassurance (80G [Verify], registered, "board unpaid") → **Choose how to give** (General / Sponsor a Child / Adopt an Elder — tiers **[Verify]**) → **Indian bank accounts** → **Foreign donation accounts** → **UPI** → **Cash** → **Online platforms** → confirmation/disclaimer + donation contact.
- **Bank account cards (Indian):** 5 cards — **Vijaya Bank (A/c 404601010006102, IFSC VIJB0004046), Canara Bank, Bank of Baroda (IFSC BARB0BARKAT), ICICI Bank, Union Bank of India**. Each card: forest header (bank + "Indian" chip), rows for Account name / A/c no. (mono + **Copy** button) / IFSC (Copy) / Branch. Union Bank IFSC shows a "confirm before transferring" chip [Verify].
- **Foreign accounts:** 2 cards — **Canara Bank (SWIFT CNRBINBBHFD)**, **SBI (SWIFT SBININBB104)** — with "Foreign" chip. (Shown without any FCRA text.)
- **UPI card:** PhonePe **9440483089**, GPay/PhonePe **9441156212**; space for a QR image (if client supplies). Copy buttons.
- **Cash card:** "Cash donations accepted" → visit/office details + donation contact.
- **Online platform cards:** Give India, ImpactGuru, Milaap (approved only) — logo + "Donate on {platform} →" outbound button. No other platforms.
- **Interaction:** one-tap **copy** on every account number/IFSC/UPI (toast "Copied"); accordions to reduce length on mobile; exact figures pulled from `client-confirmed-information.md` — **never altered.**
- **Desktop:** 2–3 account cards per row. **Tablet:** 2 per row. **Mobile:** 1 per row, copy buttons full-width, sticky Donate hidden here.
- **Guardrail:** no card-data capture on-site; no FCRA; superseded Vijaya …617 never shown.

---

# Timeline design (PART 18) — `/journey`

- **Feel:** the signature storytelling element — a **growing banyan branch** down the page.
- **Desktop:** central `--green-forest` spine; milestone cards alternate left/right; **banyan-leaf nodes** (marigold when in view); sticky year rail; era bands ("Beginnings 1986–1999 / Growth 2000–2012 / Recent 2013–now").
- **Mobile:** single left spine; sticky year mini-headers; cards stacked full-width.
- **Milestone card:** year (Fraunces, terracotta), title (H4), 1–2 lines, optional image (4:3), **source chip** (Client timeline / Annual report / Historical **[Needs verification]**). Founding shown as "Founded in the mid-1980s; registered 1986" per client (historical 1988 note omitted from public view).
- **Images:** real photos where they fit (P17 2020, P24 2010, P32/P33 historical, P18 tailoring origins, P28 award); **historical images use green duotone**; otherwise theme icons — **never a fabricated photo**.
- **Expand/collapse:** tap milestone → detail panel (longer text, extra image, related story/report). Initial ~6–8 visible, rest reveal on scroll.
- **Year typography:** large Fraunces, terracotta; historical/approximate years get an "≈" and a "Historical" chip.
- **Motion:** fade/slide-in on scroll; reduced-motion → static. Infographic JPEGs are **not** used as backgrounds.

---

# Gallery design (PART 19) — `/gallery`

- **Category filters:** pill chips — All · Children & Education · Girl Child · Elderly Care · Women Empowerment · Youth & Skills · Environment · Community & Events · Historical Archive (only categories the assets support).
- **Grid:** responsive **masonry**; 14px radius; consistent gutters; ~12–20 tiles initial then lazy-load.
- **Image ratios:** mixed (masonry) with defined crops; historical tiles duotone.
- **Lightbox:** larger image + caption + category; keyboard (arrows/Esc), focus-trapped, focus returns; swipe + pinch-zoom on mobile; alt text per image.
- **Captions:** short, factual, no invented context; "Archive" label + approx era for historical.
- **Mobile:** 1–2 columns; tap → full-screen lightbox; captions below.
- **Lazy loading & a11y:** intrinsic width/height (no CLS); `loading="lazy"`; descriptive alt; reduced-motion disables zoom transitions.
