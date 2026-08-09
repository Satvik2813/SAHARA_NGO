# SAHARA — Content ↔ Source ↔ Asset Map

**Phase 2.** Maps every website section to its **content source**, **asset source**, **status**, and **verification need**. Ties the blueprint back to `/audit/`.

Legend — Sources: **[Client]** local files · **[Web]** saharangots.org · **[WP]** WordPress. Status: 🟢 ready · 🟡 partial/consolidate · 🔴 blocked on verification.

| Website section | Content source | Asset source | Status | Needs verification? |
|---|---|---|---|---|
| **Header/Logo** | Brand [Client] | `SAHARANGOLOGO.png` (need vector/transparent) | 🟡 | Vector master |
| **Homepage Hero** | Taglines `Writeup.txt` [Client] | `41 (2).JPG`/`tailor grop.JPG`/`children.JPG` [Client] — extract/upscale | 🟡 | Tagline choice; asset prep |
| **Identity strip + trust badges** | `Writeup.txt`, About [Client/Web/WP] | Logo motif | 🟡 | Founding framing; 80G/12A/**FCRA** |
| **Impact counters** | `Writeup.txt` cumulative set [Client] | Icons | 🟡 | All figures (self-reported); which set is current |
| **6 Program cards** | `Writeup.txt`, PPT1/2, program pages [Client/Web/WP] | 6 program photos [Client] — extract | 🟢/🟡 | Health photo; Agri/HIV current status |
| **Featured story** | PPT1 case studies; WP success stories [Client/WP] | Non-identifying/consented photo | 🔴 | **Consent**; current accuracy |
| **Journey teaser + `/journey`** | `audit/timeline.md` [Client/WP] | Milestone photos (extract) / icons | 🟡 | Founding framing; self-reported counts; undated milestones |
| **Gallery teaser + `/gallery`** | Asset inventory [Client/Web/WP] | Posters/PPT/WP/web images — extract, de-dupe | 🟡 | Consent; captions; licensing |
| **Trust & transparency band + `/transparency`** | Reports, registration, governance [WP] | Report covers; partner logos | 🟡/🔴 | **FCRA (critical)**; 80G/12A currency; re-host permission; newer reports |
| **Press strip + `/news`** | `press-coverage.md` [Client] | 4 clippings [Client] | 🟡 | 2 undated dates; reuse permission; award |
| **Donation band + `/donate`** | Posters/PPT giving [Client] | Warm band image | 🔴 | **Bank/UPI/QR; tiers; FCRA; platforms; 80G receipts** |
| **Get Involved** | WP Join Us; PPT1 interns [Client/WP] | Icons/cards | 🟡 | Volunteer intake; in-kind logistics; giving tiers |
| **About / Our Story** | `Writeup.txt`, PPTs, About [Client/Web/WP] | Team/community photo | 🟡 | Founding; mission/vision choice |
| **Leadership & Governance** | Board/staff [Web]; reports [WP] | Headshots (**[Verify]** availability) | 🟡 | Names/titles/spellings; founder status; "board unpaid" |
| **Impact page** | `Writeup.txt`, PPT1, reports [Client/WP] | District graphic | 🟡 | Stat set; district count |
| **Stories** | WP success stories; PPT1 [Client/WP] | Consented/non-identifying photos | 🔴 | **Consent**; anonymization |
| **Contact** | `contactus` [Web]; posters/WP [Client/WP] | Map | 🟡 | Address; phones; primary email; official socials |
| **Footer** | All | Logo, socials | 🟡 | Registration IDs; socials; privacy page |
| **Partners/Supporters (band + About)** | PPT2/WP/Web donor lists [Client/Web/WP] | Official partner logos (obtain) | 🟡 | Active vs past; logo rights |

## Source-of-truth precedence (for reconciling the 3 sources)
1. **Client-confirmed answer** (verification round) — always wins once obtained.
2. **`Writeup.txt`** [Client] — most modern narrative → default copy spine.
3. **PPT1 / PPT2** [Client] — programs, case studies, history, funders.
4. **WordPress reports** [WP] — governance, dated outcomes, legal IDs, stories.
5. **Current website** [Web] — board/staff, program text, contacts — *treat as recent-but-unverified*.
> Where sources conflict and the client hasn't answered: **show the safest framing + `[Verify]`**, never silently pick.

## Client-confirmed status flips (2026-08-09)

The confirmation round changes several rows above (authoritative source now = `client-confirmed-information.md`):
- **Hero/About identity, Contact, Footer, Social:** 🟡 → **🟢 confirmed** (tagline, founding 1986, founder, Mission/Vision from `Writeup.txt`, phone/email/address, FB/IG/X/LinkedIn).
- **Donation band + `/donate`:** 🔴 → **🟢 data confirmed** — display **all approved accounts + UPI + cash + Give India/ImpactGuru/Milaap**; **no FCRA**. (Residual 🟡: Vijaya number, Union IFSC, tiers, 80G-receipt wording.)
- **Featured story + Stories + Gallery:** 🔴 (consent) → **🟢 permission granted** (privacy-conscious handling still applies).
- **Trust & transparency:** keep 80G/12A/registration [Verify currency]; **remove FCRA** from the architecture.
- **Impact counters:** 🟡 → **🚫 [Current impact statistics not provided]** — omit current counters; historical only, framed as historical.
- **Press:** use client-supplied assets; no new research.

## Residual open items (non-blocking)
Vijaya account number (…617 vs …102) · Union Bank IFSC (missing) · giving tiers · 80G receipt wording · program current-status wording · current impact stats (not provided) · 2019 award · 2 press dates. (See `verification-requirements.md`.)
