# SAHARA — SEO Architecture

**Phase 2 — architecture only.** No fabricated organizational facts; every SEO fact must be a **verified** SAHARA fact. `[Verify]` items must be confirmed before publishing in metadata.

Legend: **[Verify] [Proposed copy]**.

---

## Principles
- Truthful metadata only (no invented stats/claims/dates).
- One clear topic per page; descriptive, human titles.
- Local + mission relevance: "NGO in Hyderabad / Telangana," "sponsor a child," "elderly care," "women's skill training," etc. — only where accurate.

## Titles & meta descriptions (drafts — [Proposed copy], confirm facts)
| Page | Title (≤ ~60 chars) | Meta description (≤ ~155 chars) |
|---|---|---|
| Home | `SAHARA — NGO for the poor & needy in Telangana` | "SAHARA is a grassroots NGO supporting children, women, youth and the elderly across Telangana since the 1980s. Extend a helping hand." **[Verify founding]** |
| About | `About SAHARA — Our Story & Mission` | "How SAHARA began, our mission and approach, leadership, registration and recognition." |
| Our Work | `Our Programs — Education, Elderly, Women, Environment` | "SAHARA's six program areas supporting disadvantaged children, elders, women, youth, health and the environment." |
| Impact | `Our Impact — SAHARA` | "The reach of SAHARA's work across education, health, livelihoods and the environment (self-reported)." **[Verify stats]** |
| Journey | `Our Journey — SAHARA's Timeline` | "Milestones in SAHARA's decades of grassroots service in Telangana." |
| Stories | `Stories of Change — SAHARA` | "Real (anonymized) stories of the people SAHARA has supported." |
| Get Involved | `Get Involved — Donate, Sponsor, Volunteer` | "Donate, sponsor a child, adopt an elder, volunteer or partner with SAHARA." |
| Donate | `Donate to SAHARA` | "Support SAHARA's work for the poor and needy in Telangana." **[Verify payment]** |
| Gallery | `Gallery — SAHARA in Action` | "Photos of SAHARA's programs across children, elderly care, women, youth and the environment." |
| News & Media | `News & Media — SAHARA in the Press` | "Press coverage and media mentions of SAHARA's work." |
| Transparency | `Reports & Transparency — SAHARA` | "SAHARA's annual reports, governance and registration details." **[Verify FCRA/80G]** |
| Contact | `Contact SAHARA` | "Reach SAHARA in Amberpet, Hyderabad — address, phone, email and enquiry form." **[Verify contact]** |

## Heading structure
- One `<h1>` per page (matches the page's core topic); logical `<h2>/<h3>` per section (mirrors the blueprints). Keywords appear naturally, never stuffed.

## Open Graph / social
- `og:title`, `og:description`, `og:image` (a strong, consented branded image per key page), `og:type=website`, `og:locale` (+ `te_IN` if bilingual **[Verify]**); Twitter card `summary_large_image`.

## Structured data (schema.org — only verified facts)
- **`NGO`/`Organization`** on Home/About: `name` SAHARA, `url`, `logo`, `description`, `address` (Amberpet **[Verify]**), `email`/`telephone` **[Verify]**, `sameAs` (official socials **[Verify]**), `foundingDate` **[Verify — omit until confirmed]**.
- **`BreadcrumbList`** on inner pages.
- **`Article`/`NewsArticle`** for press items **only** with correct source attribution/permission **[Verify]**.
- **`ImageObject`** where useful.
- **DonateAction** only once donation details are verified.
- Do **not** emit `nonprofitStatus`/registration claims (80G/FCRA) in schema until **[Verify]**.

## Image metadata
- Descriptive filenames (e.g. `sahara-tailoring-training.jpg`), meaningful `alt` (factual, no invented context), captions where useful; compressed responsive variants.

## Technical SEO
- **XML sitemap** of the 13 primary URLs; **`robots.txt`** allowing crawl (disallow any staging).
- **Canonical URLs** per page; single canonical host (**www vs non-www**, **https**) — **[Verify]** final domain (note: current is `saharangots.org`; do NOT change domain/DNS in this project).
- Clean, human-readable slugs (`/our-work`, `/journey`, `/transparency`).
- Fast, mobile-friendly, accessible pages (Core Web Vitals — see `performance.md`) feed SEO.
- 301s from meaningful old URLs to new equivalents **[Verify]** (only if migrating on the same domain; no DNS/domain change now).

## Local relevance
- Accurate NABL/local signals: consistent **NAP** (Name/Address/Phone) across site + (client-owned) Google Business Profile **[Verify]** — keep identical to the verified contact set.

## Guardrails
- Never fabricate founding year, stats, awards, or registration status in metadata/schema; keep `[Verify]` out of production until confirmed.
