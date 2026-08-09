# SAHARA — Donation Experience Architecture

**Phase 2.** Designs the giving experience **structurally**, with **all real banking/payment data withheld** — the audit found **multiple conflicting bank sets** and a **possibly-lapsed FCRA**. Every actual account/UPI/tier below is a placeholder marked **[CLIENT VERIFICATION REQUIRED]**.

Legend: **[Client] [Web] [WP] [Verify]**. See `content-conflicts.md` §D and `verification-requirements.md`.

---

## Status: 🟢 DATA CONFIRMED (2026-08-09) — display ALL approved accounts
**Update:** the client has **confirmed and approved donation data** (6 client-approved images). The earlier "single set + FCRA" blocker is **removed.** Design decisions now:
- **Display ALL approved accounts** — multiple banks are **intentional**, not a conflict. The **7 accounts + UPI + cash + 3 online platforms** are transcribed exactly in **`/audit/client-confirmed-information.md`** (single source of truth for numbers; not duplicated here to avoid transcription drift).
- **No FCRA** anywhere on the site (client instruction). *(The SBI & Canara **foreign-donation** accounts are still shown — only the FCRA registration/number/badge is excluded.)*
- **Cash donations accepted** — add as a method.
- **Vijaya account number resolved (2026-08-09):** use **404601010006102** (…617 superseded). One sub-item remains open (do not guess): **Union Bank IFSC** (missing) — display with a "confirm before transferring" note or hold that one line until confirmed.
- Exact numbers/IFSC/SWIFT are read from the client-approved images; **transcribe exactly, never infer.**

## Donation CTA placement (site-wide)
- **Persistent header Donate button** (all pages).
- **Mobile:** sticky bottom Donate bar (see `mobile-ux.md`).
- **Homepage:** hero primary CTA + a dedicated donation band (§11) + footer.
- **Contextual CTAs** on each program ("Sponsor a Child", "Adopt an Elder", "Sponsor a tree/rainwater unit") and in Stories/Impact.
- Frequency balanced with honesty — no fake urgency, no unverified numbers.

## `/donate` page structure

1. **Headline + reassurance** — "Extend a helping hand" [Client tagline]; 1-line on impact; trust chips (80G / registered / reports) — **each [Verify]**.
2. **Choose how to give (cards):**
   - **General donation** (any amount).
   - **Sponsor a Child** — [Proposed] "supports a child's education & essentials"; **amount/tier [CLIENT VERIFICATION REQUIRED]** (poster "₹500/mo + ₹2000/yr" vs site "₹6,000/yr" reconcile — same tier, confirm).
   - **Adopt an Elder** — **tier [CLIENT VERIFICATION REQUIRED]**.
   - **Sponsor a tree / rainwater unit** — **tier [CLIENT VERIFICATION REQUIRED]** (poster "₹10,000/unit").
3. **How to give — methods (CONFIRMED; exact values in `client-confirmed-information.md`):**
   - **Indian bank transfer:** present **all 5 approved Indian accounts** as separate cards — **Vijaya Bank, Canara Bank, Bank of Baroda, ICICI Bank, Union Bank of India** (each: account name SAHARA, account no., IFSC, branch where given). Tag the **Vijaya number** and **Union IFSC** as "confirm before transferring" until resolved.
   - **Foreign donation:** present **both approved foreign accounts** — **Canara Bank** (SWIFT CNRBINBBHFD) and **SBI** (SWIFT SBININBB104). *(Shown without any FCRA text/badge, per client.)*
   - **UPI / PhonePe / GPay:** **PhonePe 9440483089** and **GPay/PhonePe 9441156212** (approved). Add a **QR** if the client supplies one.
   - **Cash:** state that **cash donations are accepted**; route via the Contact/office details.
   - **Online platforms (approved only):** **Give India**, **ImpactGuru**, **Milaap** (exact URLs in the confirmed file). **Do NOT add** other historical platforms (Letzchange/Benow/DonateKart/iCharity) — not in the client-approved material.
   - **Donate in-kind:** notebooks, rice, clothes, etc. (historically accepted [WP]) — **[Verify]** current + drop-off/pickup process (not confirmed this round).
4. **Trust panel:** 80G tax-exempt statement **[Verify]**; registration IDs **[Verify]**; link to Reports & Transparency; "board serves unpaid" [WP]; assurance that donations fund programs.
5. **Confirmation / disclaimer area:** [Proposed copy] "Please confirm the latest account details with SAHARA before transferring"; 80G receipt process **[Verify]**; contact for donation queries; no card data collected on-site in v1.
6. **Donation-related contact:** dedicated email/phone for giving **[Verify which]**.

## v1 recommendation (pragmatic, safe)
- **Do not build an on-site card/payment gateway in v1** (avoids PCI scope, credential handling — which is prohibited anyway).
- Route giving to: **(a)** verified bank/UPI details shown as text/QR, and **(b)** a confirmed third-party platform (e.g. Give India) via outbound link.
- Any embedded third-party donate widget must be from a **client-confirmed** provider.

## Trust & safety guardrails
- **Never** display an unverified account number → the **Vijaya number** and **Union IFSC** stay flagged until confirmed.
- **No** collection of donor financial credentials on-site.
- Show the **full client-approved account set** (all 7) — per client instruction, not a single account.
- **No FCRA** text/number/badge anywhere (client instruction) — even though foreign accounts are displayed.
- Transcribe every figure **exactly** from the client-approved images; never infer a missing digit.
- Keep an internal "last verified on <date>" note for donation data (not shown publicly).

## Data/facts still requiring confirmation (not blocking the rest of the build)
Vijaya account number (…617 vs …102) · Union Bank IFSC (missing) · giving tiers/amounts · 80G receipt process · in-kind logistics · a donation QR (if provided). → consolidated in `verification-requirements.md`. *(FCRA is intentionally excluded from the site and is no longer a donation blocker.)*

## Mobile
Sticky Donate bar; method cards stack; tap-to-copy account fields (once verified); QR prominent; tap-to-call donation contact.
