# SAHARA — Reports & Transparency Architecture

**Phase 2.** A professional transparency section built on the audit's strongest new asset: **6 annual/half-yearly reports (2013–2018)** hosted on the historical WordPress site, plus registration/governance material.

Legend: **[Client] [Web] [WP] [Verify]**. Critical rule: **do NOT present potentially expired regulatory info (esp. FCRA) as current without client verification.**

---

## Purpose
Give donors, funders and verifiers everything they need to trust SAHARA: reports, registration, governance, and how funds are used — presented cleanly and honestly.

## `/transparency` page structure

### 1. Intro / commitment
[Proposed copy] one line on accountability; anchors to sections below.

### 2. Annual Reports
- **Report cards** (one per year): year label, cover thumbnail, 1-line highlight, **View** (in-browser PDF) + **Download**.
- **Available now [WP]:** AR 2013-14, 2014-15, 2015-16, 2016-17, 2017-18, and Half-yearly Apr–Sep 2018.
- **Year filter / sort** (newest first). Group "Recent" vs "Archive".
- **Gap note:** [Proposed copy] "Reports for 2019 onward will be added" — **[Verify]** newer reports from client (request them).
- Each report highlight uses **verified content only** (e.g. governance "board unpaid", program outcomes) — self-reported figures keep **[Verify]**.
- **Hosting:** re-host client-provided copies (with permission); the audit copies were downloaded for analysis only.

### 3. Governance
- Board & advisory (names/titles **[Verify]**); **"board members serve unpaid / zero remuneration"** [WP] — a strong, specific trust signal; how decisions are made (General Body + Executive Committee) [WP].

### 4. Registration & Legal
- Society Registration No. 3119 (dtd 29.12.1988); **80G**; **12A**; **PAN**; **NITI-Darpan UID** — display **only after [Verify]**; show as badges + short explanation ("donations are 80G tax-exempt in India").
- **FCRA:** **[Verify — CRITICAL].** The audit flags FCRA `010230259` as "valid up to 01.11.2021" → **possibly lapsed**. **Do not display FCRA as current** unless the client confirms renewal. If not current, either omit or state honestly; and **hide foreign-donation options** (see `donation-architecture.md`).

### 5. Financials (optional, if provided)
- Summary of income/allocation **only if** the client supplies current, confirmed figures [Verify]. Do not derive/estimate.

### 6. Documents
- Downloadable certificates (80G/12A/FCRA/registration) **only if** client provides and confirms currency [Verify].

## Report card model (for later build — not implemented)
```
Report: { year, title, coverImage, highlight, fileUrl, type: annual|half-yearly, sourceTag, verifyFlag }
```

## Trust presentation guidelines
- Label each credential with an **as-of date** where known; keep an internal "last verified" note.
- Never imply a lapsed/unconfirmed credential is current.
- Link Transparency prominently from Donate, About, Footer, and the homepage trust band.

## Interaction / UX
- **View** opens an accessible in-page PDF viewer (with a download fallback); **Download** for offline.
- Keyboard-accessible cards; descriptive link text ("View SAHARA Annual Report 2016-17, PDF").
- Lazy-load cover thumbnails; PDFs load on demand (perf).

## Mobile
- Single-column report cards; large tap targets; download-first on mobile data; badges wrap.

## Verification (blocking before publish)
FCRA current status (critical); currency of 80G/12A/registration; permission to re-host reports; newer (post-2018) reports; board names/titles; any financial figures. → `verification-requirements.md`.
