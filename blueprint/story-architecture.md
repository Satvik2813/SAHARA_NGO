# SAHARA — Stories / Case Studies Architecture

**Phase 2.** How to present human-interest material **safely**. The audit found historical case studies involving **minors and sensitive personal data** — this architecture is built around a **privacy-first default**.

Legend: **[Client] [WP] [Verify]**.

---

## Privacy rules (non-negotiable defaults)

1. **Do NOT publish identifying personal details by default** — no full names + DOB + school + address + family/health specifics of any beneficiary, **especially minors**.
2. **Anonymize by default:** first name only *or* a changed name (labeled "name changed"), broad location ("a slum in Amberpet"), no DOB, no school name, no address.
3. **Consent gates every real identity/photo:** a real name or a recognizable photo appears **only** with **documented, current consent** [Verify]. For minors, guardian consent — and prefer anonymization even then.
4. **Summarize, don't reproduce** the raw audit case-study text; rewrite into short, dignified, outcome-focused narratives [Proposed copy], facts unchanged.
5. **Dignity over pity:** emphasize agency and outcome, not hardship voyeurism.
6. **Photos require separate consent** from text; a story can run without a face (use hands, wide scene, or illustration).

## Story tiers (what can appear, and how)

| Tier | Examples (from audit) | Default handling |
|---|---|---|
| **A — Positive, outcome-led (preferred for public)** | WP **success stories**: women trained in tailoring now earning (Mamatha, Swapna, Subhadra); **beneficiary-turned-donor** ("Paying It Back", the B.Tech girl now supporting others) [Client PPT1/WP] | Summarize; first-name or anonymized; **[Verify consent]**; strong candidates for flagship stories |
| **B — Illustrative composites** | Themes drawn from child/elderly cases | **Anonymized composite** clearly labeled "representative story"; no real identities |
| **C — Sensitive historical case studies** | ~9 child cases, 7 elderly cases (Give-India era) [WP] | **Not published as-is.** Use only as anonymized composites (Tier B) or omit; **never** minors' identifying data |

## Page design

### `/stories` (index)
- Intro line [Proposed copy]; grid of story cards by theme (Women's livelihoods · Children & education · Elderly dignity · Crisis response).
- Each card: image (consented or non-identifying), short title, 1-line teaser, program tag.
- Filters by program area. CTA per card → giving.

### `/stories/<slug>` (detail — only for flagship consented stories)
- Hero image (consented) or non-identifying visual; short narrative (problem → SAHARA's role → outcome); pull-quote **only if consented**; related program + donate CTA; "Names/photos used with consent" or "Name changed / representative story" note.

### Homepage featured story
- One Tier-A story, anonymized/consented; teaser → `/stories`.

## Copy pattern (template — [Proposed copy], facts from audit only)
> "When [first name / a young woman] joined SAHARA's tailoring course, she was [situation, no identifying specifics]. After training, she [verified outcome]. Today she [current status, if verified]."
Every bracket filled **only** from verified facts; otherwise omit.

## What must be verified before any story publishes
- **Consent** (person or guardian) for each real name and each photo [Verify].
- **Current accuracy** — situations from ~2007–2018 may have changed; don't imply a present state without confirmation.
- **Preference** — some may consent to story but not photo, or to anonymized only.

## Assets
- Prefer non-identifying imagery from `asset-inventory.md` (hands, wide scenes, backs-of-heads) until consent confirmed.
- Small case-study portraits exist (PPT1 "Bhavani", "Gundamma"; WP elderly portraits) — **do not use** without consent [Verify].

> Net: Stories is a powerful, credibility-building section, delivered **anonymized-by-default** with a hard consent gate on any real identity or face.
