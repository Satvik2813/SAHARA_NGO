# SAHARA — Recommended Next Steps

**Phase:** Discovery / Audit complete. **This document recommends what to do next — it does NOT implement any of it.**
No website is built, no design is finalized, nothing is deployed, no source files were modified, nothing was committed.

---

## Step 1 — Client verification round (highest priority; unblocks everything)

Send the client `content-conflicts.md` and get written confirmation on:

1. **Donation details** 🔴 — the single current, authoritative set of bank accounts, UPI, and online-donation link. (Three conflicting sets exist; a wrong donation account is the most damaging error possible.)
2. **Founding year & foundation-day date**, and how to phrase the "X-Year Journey".
3. **Founder's name spelling and current status** (is R. Narsing Rao the same as "Ramagiri Nursing Rao"? Is he deceased? when?). Sensitive — must be right.
4. **Official mission, vision, tagline** (recommend the `Writeup.txt` versions as the starting point).
5. **Headline impact numbers** to display, with definitions & as-of dates.
6. **Current operating districts** (4 vs 7).
7. **Contact set**: correct address spelling, which phone numbers, primary email (recommend a Gmail/org-domain over Rediffmail), canonical domain, official/active social accounts.
8. **Leadership/team** names, titles, spellings — and whether to publish team photos.
9. **Award** exact name/year/body (Telangana NGO Leadership Award 2019 vs the "branding awards" photo).
10. **Photo & press consent** — permission to publish beneficiary photos (children/women/elderly) and to reproduce newspaper clippings.

## Step 2 — Content consolidation

- Draft the **single source-of-truth content document** per page from `website-content-map.md`, using `Writeup.txt` as the copy spine and filling facts from PPTs/website — each fact tagged (client / website / verified).
- Pull remaining text from the old site's program pages and `annualreports.html`.
- Decide on Telugu/bilingual scope.

## Step 3 — Asset gathering & curation (still not editing yet)

- Download the old site's **33 gallery images**; assess resolution; **de-duplicate** against supplied assets (`asset-inventory.md` §E).
- Request from the client: **high-resolution originals** of the best photos, a **vector/transparent logo**, official **partner logos**, **annual-report PDFs**, and **registration certificates** (80G/12A/FCRA).
- Shortlist the final photo set per program area; mark which need **extraction** (from posters/PPTs) and which need **restoration/upscaling/cropping**.

## Step 4 — Asset preparation (the Adobe/Canva phase)

- Only after Step 1 & 3: extract chosen photos from posters/PPTs, crop out baked-in text/banners, upscale/restore low-res images, remove logo background / vectorize.
- Standardize sizes for hero/section/card/gallery/timeline roles.
- **Preserve originals** — always work on copies; keep an organized processed-assets folder separate from `assets/`.

## Step 5 — Design decisions (client, not yet made)

- Brand system from the logo (tree green + black) — palette, type, components.
- Modern, mobile-first IA per `website-content-map.md`, preserving authenticity/history.
- Prominent, trustworthy **Donate** flow; trust badges (FCRA/80G/12A).
- Present timeline natively (not as embedded low-res images).

## Step 6 — Build & launch (future; explicitly out of scope now)

- Build → content load → review → SEO/analytics/accessibility → **client sign-off** → deploy.
- **Do not** change the domain/DNS or publish anything without explicit client instruction.

---

## Guardrails to carry forward
- Do **not** invent facts, dates, stats, names or impact numbers.
- Keep the **[client] / [website] / [needs verification]** tagging on every fact.
- Treat all Telugu press transcriptions as provisional until confirmed.
- Confirm **consent** before publishing any beneficiary image.
- Do **not** commit donation/bank details or any sensitive info to a public repo; keep verified donation data in a controlled place.
- Never expose credentials/API keys; the bank account numbers here are the org's own public donation info, but still confirm currency before display.

---

## Immediate recommended action
**Compile Step 1 into a short client questionnaire (from `content-conflicts.md`) and send it.** Client answers are the gating dependency for content finalization, asset prep and design — everything else can proceed in parallel once verification is underway.

---

## Addendum — actions arising from the historical WordPress audit (Source 3)

From `wordpress-audit.md`. These **add to** (do not replace) the steps above.

**Add to the Step 1 client questionnaire:**
1. **FCRA status 🔴** — WordPress reports state FCRA `010230259` was **valid only up to 01.11.2021**. Confirm whether it is **renewed/active** before the site claims foreign-donation capability.
2. **Donation platforms 🔴** — confirm which of the many historical links are still live/endorsed (Letzchange, Benow, ImpactGuru, DonateKart, iCharity, GiveIndia, Milaap) and which to retire; provide the **single current** bank/UPI/online set (ties to conflicts §D — the current site's Vijaya/Canara banks appear to be the stale ~2016 set).
3. **Programs still active 🟡** — is **Agriculture & Rural Development** and **HIV/AIDS** still run standalone, or merged? Are the **orphanage (Medak)**, **residential schools (Vardavelli)** and **Suraksha Old Age Home** still operating?
4. **Founder detail 🟡** — confirm full name (likely *Ramagiri Narsing Rao*), qualification ("B.Sc, LLB" vs "LLB + PG Dip PMIR&LW"), and status.
5. **Extra contacts/socials 🟡** — are phone `9491883610`, emails `saharango@hotmail.com` / `ngo_sahara@yahoo.co.in`, and FB profile `narsing.rao.5268` still used? Rationalise the **three Facebook presences**.

**Add to Step 2 (content) & Step 3 (assets):**
6. **Request the annual-report source files** and **any post-2018 reports** — foundation of a new "Annual Reports / Transparency" page. (The 6 PDFs 2013–2018 were downloaded to scratch for analysis only.)
7. **Consent sweep for WordPress stories** — the named **case studies (minors + elderly)** and **success-story** individuals must be **re-consented or anonymized** before any reuse; prefer anonymized formats.
8. **De-duplicate galleries together** — WordPress 2010 gallery (~30 low-res) + current-site 33 images + client posters/PPTs, in one pass; request **high-res originals** rather than reusing low-res web copies.
9. **Harvest verified milestones** into the native timeline (Suraksha 2016, Grow Millets 2016, solar 2015-16, Kerala relief 2018, orphanage, Vardavelli schools) — only after client confirms years.

**Guardrail reminder:** the WordPress site is **historical/reference only** — never copy its design, and never publish its donation/contact/stat details as current without written client confirmation.

---

## Update — client-confirmation round complete (2026-08-09)

Many Step-1 blockers are now **answered** (see `client-confirmed-information.md`). Status changes:

**RESOLVED / no longer blocking:**
- Donation accounts — client approved **ALL** (7 banks + UPI + cash + 3 platforms); use client-approved images as authoritative transcription. ✅
- Contact, social links, founder display, founding year (1986), Mission/Vision source (`Writeup.txt`). ✅
- FCRA — **excluded from website** (decision made). ✅
- Photo/story consent — **granted**. ✅
- Press — use supplied assets; no web research. ✅

**STILL OPEN (carry forward — not blocking the build):**
1. **Vijaya Bank account number** — two values in approved images (…617 vs …102) → confirm.
2. **Union Bank of India IFSC** — missing from images → confirm.
3. **Current impact statistics** — still not provided (do not fabricate; homepage counters stay omitted).
4. **Giving tiers/amounts** and **80G receipt process** wording.
5. **Program current-status** wording where ambiguous ([Needs careful content wording]).
6. **2019 award** exact details; press-clipping missing dates.

**Next phase (per client):** CLIENT-CONFIRMED DATA → ASSET SELECTION → PHOTO EXTRACTION → CANVA/ADOBE → VISUAL DESIGN → DEVELOPMENT. Do **not** build/extract/design yet.
