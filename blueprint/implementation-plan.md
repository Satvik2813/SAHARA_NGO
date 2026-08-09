# SAHARA — Implementation Plan (phased, NOT started)

**Phase 2 deliverable.** Sequenced plan from blueprint → launch. **This is a plan, not an instruction to build now.** No code, no asset extraction, no design, no deployment in this phase.

---

## Phase sequence (as directed)
**BLUEPRINT (done) → CLIENT VERIFICATION → ASSET EXTRACTION → CANVA/ADOBE PREP → VISUAL DESIGN → DEVELOPMENT → REVIEW → LAUNCH**

### Phase 2 — Blueprint ✅ (this deliverable)
- 19 blueprint files in `/blueprint/`. Output = strategy, IA, page/section specs, visual & technical plans, verification gate.

### Phase 3 — Client verification (gating) — ✅ LARGELY COMPLETE (2026-08-09)
- Client confirmation received and integrated → `/audit/client-confirmed-information.md`.
- **Resolved:** donation data (all accounts + UPI + cash + 3 platforms), **FCRA excluded**, photo/story consent granted, mission/vision (Writeup.txt), tagline, founding 1986, founder, contacts, official socials, press-source.
- **Not provided (carry forward):** current impact statistics (counters stay omitted).
- **Residual minor confirms (non-blocking):** Vijaya account number (…617 vs …102), Union Bank IFSC, giving tiers, 80G-receipt wording, program current-status wording, 2019 award, 2 press dates.
- **Exit status:** enough is confirmed to proceed to asset selection/design/build; only impact counters and the residual list remain.

### Phase 4 — Asset extraction (only after consent policy set)
- Extract photo candidates from posters/PPTs/reports per `asset-inventory.md` + `visual-strategy.md`.
- De-duplicate across client/web/WP sets.
- **Preserve originals**; work on copies in a separate processed-assets area.
- Request from client: high-res originals, vector logo, official partner logos, report source files, certificates.

### Phase 5 — Canva/Adobe asset prep
- Crop baked-in banner/bank text; upscale/restore low-res; standardize crops per role (hero/section/card/gallery/timeline); consistent color grade; optimize (WebP/AVIF, responsive sizes); build icon set + logo variants (transparent/SVG/favicon).
- Consent-gated images only; apply duotone treatment to historical/archive images if Direction A/C chosen.

### Phase 6 — Visual design
- Pick a direction (`design-directions.md`; recommended **A + B-grid + C-duotone**); build the design system (tokens, type scale incl. Telugu if bilingual, components, timeline/gallery/report/press patterns); high-fidelity mockups for all 13 URLs (desktop + mobile); a11y contrast check.

### Phase 7 — Development
- Build mobile-first, accessible, performant pages per blueprints; native timeline & gallery/lightbox; forms (Contact) with Privacy Policy; Donate as a shell wired to **verified** details/QR/confirmed platform (no on-site card capture); SEO/schema; sitemap/robots.
- Content load from the verified source-of-truth; keep `[Verify]` items out of production until confirmed.

### Phase 8 — Review & QA
- Content accuracy vs verified answers; a11y (axe + manual keyboard/SR/zoom/reduced-motion); performance (Lighthouse mobile, real Android/throttled network, CWV budgets); cross-browser/device; **final re-verify donation data + FCRA**; client sign-off.

### Phase 9 — Launch (only on explicit client instruction)
- Deploy; analytics/SEO submission; monitor. **No DNS/domain change in this project** unless separately authorized. Post-launch: add newer reports, ongoing stories/news, Telugu version if chosen.

---

## Dependencies (critical path)
```
Verification (Ph3) ──▶ Asset prep (Ph4/5) ──▶ Design (Ph6) ──▶ Dev (Ph7) ──▶ QA (Ph8) ──▶ Launch (Ph9)
        │                                   ▲
        └───── Donation + FCRA + consent ───┘  (block Donate/Transparency/Stories until cleared)
```
- Design/dev of **non-blocked** pages (About narrative shell, Programs, Journey, Gallery scaffold) can proceed in parallel once copy spine + direction are set.
- **Donate, Transparency badges, Stories with real identities, Press republication** wait on their 🔴 verifications.

## What can start in parallel (safely, after Phase 3 begins)
- Copy drafting from `Writeup.txt` spine (tagged by source).
- Design-system exploration (from the verified logo/brand).
- Asset extraction queue (once consent policy agreed).
- Icon/illustration set + timeline/gallery component design.

## Risks & mitigations
- **Stale/wrong donation data** → single-source verification + re-verify at launch; no unverified numbers shown.
- **FCRA lapse** → hide foreign-donation + FCRA badge until confirmed.
- **Consent gaps** → anonymized-by-default; non-identifying imagery until consent.
- **Low-res imagery** → upscale/restore + duotone for archive; request originals.
- **Source conflicts** → precedence rules (`content-source-map.md`) + `[Verify]`.

## Explicitly NOT in scope now
Building the site, writing frontend code/components, installing packages, extracting/editing images, using Canva/Adobe, finalizing design, deploying, changing DNS/domain, committing to GitHub, publishing any unverified fact or donation detail.

## Suggested immediate next action
Compile `verification-requirements.md` into a **one-page client questionnaire** and send it. Client answers unblock everything downstream.
