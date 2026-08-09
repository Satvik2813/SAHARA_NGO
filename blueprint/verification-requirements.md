# SAHARA — Verification Requirements (client sign-off gate)

**Phase 2.** Consolidated list of everything the client must confirm **before** the relevant content can publish. Sourced from `/audit/content-conflicts.md` and the blueprint. **Nothing here is resolved by us.**

Priority: 🔴 blocking (site/section can't go live) · 🟡 needed for accuracy · 🟢 nice-to-have.

---

## ✅ RESOLVED in the client-confirmation round (2026-08-09)

Authoritative answers now in `/audit/client-confirmed-information.md`. These are **no longer open**:
- **Donation details** — client approved **ALL** accounts; display the full set (7 banks + UPI + cash + Give India/ImpactGuru/Milaap), transcribed from client-approved images. *(Residual: Vijaya number …617 vs …102; Union Bank IFSC missing — see below.)*
- **FCRA** — **excluded from the website** by client (no section/number/badge). No longer a blocker.
- **Photo/press consent** — **granted.**
- **80G/12A** — displayed as Registered Society + 80G/12A (currency still to confirm, minor).
- **Founding/founder** — 1986; **Narsing Rao Ramagirri** (displayable).
- **Mission/vision/tagline** — Mission/Vision verbatim from `Writeup.txt`; tagline "HELP POOR AND INDEED PEOPLE".
- **Contact** — 9440483089 / sahara_ngo@rediffmail.com / 911, Tirumalanagar, Amberpet, Hyderabad-500013.
- **Official socials** — FB sahara.ngo.3 · IG sahara_ngo · X SAHARANGO · LinkedIn sahara-ngo-ab9b6360.
- **Press** — use supplied assets; no web research.

**Still not provided (do not fabricate):** **current impact statistics** — homepage counters stay omitted.

---

## 🔴 Blocking → now only a short residual list (non-blocking for most of the build)

| # | Item | Why it blocks | Source |
|---|---|---|---|
| 1 | **Donation details** — single current bank A/c(s), IFSC, UPI ID + QR, giving tiers, 80G receipt process, which online platforms are live | Donate page + all giving CTAs; a wrong account is the worst possible error. 3+ conflicting sets exist (BoB/ICICI/SBI vs Vijaya/Canara; Vijaya likely defunct post-2019) | conflicts §D |
| 2 | **FCRA current status** | Reports say valid only to **01.11.2021** → may be lapsed. Controls whether foreign-donation options and the FCRA badge appear | audit `wordpress-audit.md`, conflicts |
| 3 | **Photo/press consent** — permission to publish beneficiary photos (esp. minors) and to reproduce newspaper clippings/mastheads | Featured story, Stories, Gallery, Press, hero/program photos | story/gallery/visual blueprints |
| 4 | **80G / 12A / registration currency** | Trust badges, footer, transparency, donation reassurance | conflicts, WP reports |

## 🟡 Needed for accuracy (before those sections publish)

| # | Item | Affects |
|---|---|---|
| 5 | **Founding-year framing** — 1986 vs "since 1988" vs "37th foundation day 2023"; and how to phrase "X-year journey" | Hero, About, Timeline, SEO |
| 6 | **Official mission, vision, tagline** (multiple phrasings exist; recommend `Writeup.txt`) | About, Hero, global |
| 7 | **Headline impact stats** — which set, with definitions & as-of dates (don't mix cumulative vs older) | Impact, Home counters |
| 8 | **Founder** — canonical name (likely *Ramagiri Narsing Rao*), qualification, and **status** (a 2023 item implies "late") | About/Leadership (sensitive) |
| 9 | **Leadership/team** names, titles, spellings; whether to publish team photos | About/Governance |
| 10 | **Current operating districts** (4 vs 7 historical) | Programs, Impact, map |
| 11 | **Program current status** — is Agriculture/Rural Dev, HIV/AIDS, orphanage, residential schools, Suraksha home still active? | Programs (current vs historical) |
| 12 | **Contact set** — correct address spelling/format; which phone numbers; primary email (prefer org/Gmail over Rediffmail); official/active socials (rationalize 3 Facebook presences; confirm Twitter/X) | Contact, Footer, SEO/schema |
| 13 | **Award** — exact name/year/body (Telangana NGO Leadership Award 2019 vs a "branding awards" photo) | Recognition, Press |
| 14 | **Giving tiers** amounts (Sponsor a Child / Adopt an Elder / tree / rainwater) | Donate, Get Involved |
| 15 | **Press clipping dates** (2 undated) + outlet reuse permission | News/Media |
| 16 | **Partners** — active vs past; permission to display logos | Partners band, About |

## 🟢 Nice-to-have / enhances

| # | Item | Affects |
|---|---|---|
| 17 | **Newer annual reports (post-2018)** + editable source files | Transparency |
| 18 | **High-res photo originals**, **vector/transparent logo**, official **partner logos**, registration **certificates** | Visuals, trust |
| 19 | **Bilingual (Telugu)** scope decision | i18n, fonts, SEO |
| 20 | **In-kind donation** logistics (still accepted? drop-off/pickup) | Get Involved |
| 21 | **Volunteer/intern** intake process | Get Involved |
| 22 | **Newsletter** capability + Privacy Policy | Home/Footer |
| 23 | **Final domain** & whether migrating on `saharangots.org` (no DNS/domain change in this project) | SEO, canonical |

---

## How to run the verification round
1. Turn this table into a **one-page client questionnaire** (group by 🔴/🟡/🟢).
2. Get **written** answers; record each with a date → becomes the single source of truth (precedence #1 in `content-source-map.md`).
3. Until answered, the site shows the **safest framing + `[Verify]`**, and 🔴 sections stay in **draft/hidden**.
4. Re-verify **donation data** and **FCRA** immediately before launch (highest-risk, most time-sensitive).

> No item here is decided by us. This is the gate between **blueprint** and **build/asset-prep**.
