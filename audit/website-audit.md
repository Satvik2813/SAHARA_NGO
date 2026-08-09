# SAHARA — Existing Website Audit

**Phase:** Discovery / Audit only.
**Prepared:** 2026-08-09
**Site audited:** `https://www.saharangots.org/` (public pages only — **no credentials used**).

> **The existing site is NOT the design reference for the new website.** It is treated purely as a source of existing organizational information. Not everything here is assumed to be accurate/current — cross-check against `content-conflicts.md`.

---

## 1. Site structure (navigation & pages)

Top navigation: **HOME · WHO WE ARE · CORE PROGRAM AREAS · GALLERIES · SUPPORT US · OUR BLOG · CONTACT US**

Pages found:

| Page | File | Status | Useful content |
|---|---|---|---|
| Home | `index` | Live | Identity, mission/vision (short), 6 program areas, geographic coverage |
| Profile / About | `aboutus.html` | Live | Integrated-approach philosophy; appeal to donors (thin on history) |
| Board | `board.html` | Live | Full board & advisory committee names, roles, qualifications |
| Staff | `ourstaff.html` | Live | Full staff list with roles/qualifications |
| Donors | `donors.html` | Live | Present & past donors/partners, individual donors, supporting schools |
| Annual Reports | `annualreports.html` | Live (not fully audited) | Likely PDFs/links — **review during content phase** |
| Children | `childern.html` *(note misspelling)* | Live | Children program details |
| Aged Care | `aged.html` | Live | Aged program details |
| Environment | `environment.html` | Live | Environment program details |
| Adolescent & Youth | `youth.html` | Live | Youth program details |
| Women | `women.html` | Live | Women program details |
| Health Care | `health.html` | Live | Health program details |
| Galleries | `galleries.html` | Live | 33 uncaptioned thumbnail images (`1a`–`33a`) |
| Support Us | `supportus.html` | Live | Donation tiers, bank details, registration/tax info |
| Contact Us | `contactus.html` | Live | Address, phones, emails, social links |
| Blog | `/blog/` | **Broken (HTTP 404)** | "OUR BLOG" nav links to a dead page — no active blog content |

- Built by an external agency (footer credit: geniewebs.com). Old-style multi-page static HTML.

---

## 2. Useful information to carry forward

### Identity / about **[WEB]**
- Name **SAHARA**; grassroots voluntary org; integrated community-based approach ("we cannot separate a child, a mother, an aged from family and community").
- Founded **1986**, founder **Mr. Narsing Rao**; original focus **Adilabad & Karimnagar**; now also Hyderabad, Rangareddy, Nizamabad.

### Mission / vision (short web versions) **[WEB]**
- Mission: "To serve the poor and needy in rural areas and urban slums, enabling them to come up in their life."
- Vision: "To implement sustainable solutions for various issues hampering development in a community."

### Core program areas **[WEB]**
Children · Aged Care · Environment · Adolescent & Youth · Women · Health Care (each has its own page — content to be pulled during the content phase).

### Registration / tax **[WEB]**
- Society Registration **No. 3119, dtd 29 Dec 1988**; holds **FCRA**; operates under **80G** and **12A**.

### Donation info **[WEB]** (⚠️ conflicts with posters — see `content-conflicts.md` §D)
- Banks listed on site: **Vijaya Bank** (A/c 404601010006617, IFSC VIJB0004046) and **Canara Bank** domestic (0649101017864) & foreign (0649101019518, SWIFT CNRBINBBHFD), Narayanaguda branch.
- Suggested tiers: child Rs 6000/yr; elderly Rs 6000/yr; youth vocational Rs 5000; rainwater Rs 10000; tree Rs 10000.

### Contact **[WEB]**
- **Address:** 2-3-703/K/1 (911), Tirumalanagar, Amberpet, Hyderabad-500013, Telangana, India.
- **Phone:** +91-40-27407952, +91-9440483089.
- **Email:** sahara_ngo@rediffmail.com; saharangohyderabad@gmail.com.
- **Social:** Facebook `sahara.ngo.3` & `saharahyderabad`; Twitter/X `@SAHARANGO`.

### People **[WEB]**
- **Board / Executive:** T.N. Balamukund (President), P. Pradeep Chandra (VP), R. Narsing Rao (Secretary), B. Bhasker, R. Yeshwanth Rao, D. Venkatadri.
- **Advisory:** G. Chandramouli, Dr. Ramrajesh, S. Balakrishna, Dr. Mukesh Gandhari, P. Laxmipathy.
- **Staff:** R. Narsing Rao (Chief Functionary), N. Sajitha (Project Coordinator), M. Sreedhar (Project Officer), R. Premalatha (Training in-charge), R. Radhika Rohini (Consultant), K.G.K. Murthy (Accountant), + S. Sirisha, G. Aruna, N. Madhavi, V. Sandhya Rani, B. Srilatha, J. Vijaya, B. Pranathi.

### Donors / partners **[WEB]**
- **Present orgs:** Concern India Foundation, Deccan Development Society, Ministry of Env./Forests/Climate Change, God Parents, Adharsha Mahila Mandali, Shanthiyutha Youth Club, Prashanth Memorial Trust, BS Memorial Trust, Eye Care, TATA Communications, Art of Charity, Rotary Club of Hyderabad, Nehru Yuva Kendra, S.M. Trust.
- **Individuals:** ~26 named regular donors.
- **Supporting schools:** SVES High School, ZP High School-Balapur, Govt. High School-Dhoolpet, Brilliant Grammar School, and others.
- **Past:** Andheri Hilfe, Cottonwood Foundation (USA), Elton John AIDS Foundation, Save the Children (UK), UNICEF, plus government/international agencies.

### Gallery **[WEB]**
- Single "Gallery" of **33 images**, uncaptioned/uncategorized. Overlaps unknown with supplied photos → **download & de-duplicate** in the extraction phase.

---

## 3. Weaknesses of the existing site (context only — not a design brief)

- Dead **Blog** link (404); no active news/press section despite recent 2023 coverage existing.
- Donation details **out of date / inconsistent** with current posters.
- Gallery images have **no captions or categories**; unclear resolution.
- Thin **history** (no year-wise timeline, though the client now has 30-Year-Journey material).
- Rediffmail primary email; two Facebook pages; ".org/.com" domain inconsistency in materials.
- Page filename typo (`childern.html`).
- No visible statistics/impact section, no annual-report richness surfaced, no team photos.

---

## 4. What to pull from the old site during the content phase (later, not now)

1. Full text of each program page (`childern`, `aged`, `environment`, `youth`, `women`, `health`).
2. `annualreports.html` — retrieve any annual-report PDFs/links (financial credibility).
3. The 33 gallery images — download, assess resolution, de-duplicate against supplied assets.
4. The complete donors/supporting-schools lists (for a partners/acknowledgements page).
5. Confirm all board/staff names & titles against the client (see conflicts).

> Tagging reminder: on the new site, every fact should trace back to **[Client-provided]**, **[Existing website]**, or be flagged **[Needs client verification]** — as done throughout this audit.

---

## 5. Relationship to the historical WordPress site (Source 3)

The current `saharangots.org` has an **archived predecessor**, `saharango.wordpress.com` (audited separately in `wordpress-audit.md`). Key implications for *this* site audit:

- **The current site inherited the WordPress-era details.** The current site's **Vijaya Bank / Canara Bank** donation accounts and its short mission/vision wording **match the 2016–2018 WordPress annual reports** — strong evidence the current site's **donation and some contact info are ~2016-era and likely stale** (Vijaya Bank has since merged into Bank of Baroda; the 2022 posters use Bank of Baroda/ICICI/SBI). **Do not treat the current site's bank details as current — see `content-conflicts.md` §D.**
- **The old site's `annualreports.html` is effectively delivered by WordPress.** The 6 annual/half-yearly reports (2013–2018) are hosted on the WordPress media library — retrieve those (done, in `wordpress-audit.md` §8) and ask the client for **post-2018** reports.
- **Richer legal/registration identifiers** (80G/12A/FCRA/PAN/NITI-Darpan numbers) live in the WordPress reports, not on the current site — useful trust badges once re-verified.
- **Extra contact/social variants** appear on WordPress (phone 9491883610; emails `saharango@hotmail.com`, `ngo_sahara@yahoo.co.in`; a third, personal Facebook profile) — consolidate against this site's set (see `content-conflicts.md` §C).
- **Gallery:** the current site's flat 33-image gallery plus the WordPress 2010 gallery (~30 low-res images) should be **de-duplicated together** during the extraction phase.

> Bottom line: the two sites are the same organization across time. Where they differ (banks, contacts, program framing), treat the **current** site as *more recent but still unverified*, the **WordPress** site as *historical*, and require **client confirmation** before publishing.

---

## 6. Client-confirmed overrides (2026-08-09)

The client-confirmation round **supersedes** the current site for the new website on these points (see `client-confirmed-information.md`). The `saharangots.org` content below stays documented as **[Current website]** history, but is **not** the source of truth anymore:

- **Contact:** new site uses **9440483089 / sahara_ngo@rediffmail.com / 911, Tirumalanagar, Amberpet, Hyderabad-500013** [Client-confirmed] — not the current site's fuller/older set.
- **Social:** new site uses **FB sahara.ngo.3 · IG sahara_ngo · X SAHARANGO · LinkedIn sahara-ngo-ab9b6360** [Client-confirmed] — the current site's `saharahyderabad`/`@SAHARANGO`-only set is superseded; Instagram & LinkedIn are new official additions.
- **Donation:** the current site's Vijaya/Canara-only block is superseded by the client's **full 7-account set + UPI + cash + 3 approved platforms** [Client-approved images]. Vijaya (`VIJB0004046`) is **retained** per client instruction to display all accounts (do not drop it).
- **Registration/FCRA:** the site must **not** display FCRA [Client-confirmed]; founding/registration shown as **1986**.
- **Domain:** `www.saharangots.org` confirmed on the client contact image [Client-approved image] (no DNS/domain change in scope).
