# SAHARA — Our Journey / Timeline Architecture

**Phase 2.** The timeline is a **flagship storytelling feature** — SAHARA's long history is its strongest trust asset. Content comes **only** from `/audit/timeline.md`; no years invented; uncertainty preserved.

Legend: **[Client] [WP] [Verify]**. Confidence per entry carried from `timeline.md`.

---

## Experience concept

A **vertical, scroll-driven timeline** ("a growing tree / branch" motif echoing the banyan logo) that animates milestones in as the user scrolls. Each milestone is a **card**: year, title, 1–2 line description, optional image, source-confidence chip.

- **Desktop:** center spine with alternating left/right cards; sticky year rail on the left; subtle branch/leaf motif between eras.
- **Mobile:** single left-aligned spine, cards stacked; year labels as sticky mini-headers.
- **Motion:** fade/slide-in on scroll; **respect `prefers-reduced-motion`** (show static). No autoplay.

## Milestone selection (from `timeline.md`)

**Documented years to include (do not invent gaps):**
1986/1988 (Founding — **[Verify]** framing) · 1990 Cyclone relief · 1992 Free eye camps (leprosy) · 1996 Self-Help Groups · 1998 Sewing centre · 2001 Prevention of blindness (Vitamin A) · 2003 Beedi-rolling women · 2008 Adoption of elders · 2009 Rainwater recharge units · 2010 "Grow More Trees" · 2011 Health camps · 2013 Youth & women training · 2015 Solar lights · **2016 Suraksha Old Age Home / Grow Millets [WP]** · 2018 Kerala flood relief · 2020 COVID-19 relief · 2021 Menstrual health ("Bleed without Barriers") · **2023 press-dated events** (summer training; 37th foundation day).

**Marquee subset for the homepage teaser (5–6):** 1986/88 Founding · 1990 Cyclone relief · 2003 Beedi-women · 2010 Grow More Trees · 2018 Kerala floods · 2020 COVID relief.

## Handling historical uncertainty (critical)
- Each card shows a small **source chip**: "Client timeline", "Annual report", or "Needs verification."
- **Founding framing** (1986 vs "since 1988" vs "37th foundation day 2023") is shown as **"Founded in the mid-1980s; registered as a society on 29 Dec 1988"** with a footnote and a **[Verify]** chip — **do not silently pick one**.
- Undated historical items (orphanage Medak; Vardavelli schools) go into an **"Earlier years / foundations"** cluster labeled *approximate*, not assigned invented dates.
- Self-reported figures inside cards keep their **[Verify]** status; avoid headline precision the sources don't support.
- **Conflicting counts** (e.g. saplings) are not shown as exact hero numbers on the timeline.

## Progressive disclosure
- **Initial load:** ~6–8 milestones visible (marquee + nearest); the rest lazy-reveal on scroll.
- **Expandable years:** clicking a milestone opens a detail panel (longer description, extra photo, related story/report link).
- **Era filters (optional):** "Beginnings (1986–1999)", "Growth (2000–2012)", "Recent (2013–now)".
- **Jump-to-year** rail for researchers.

## Images with milestones
- Small, real photos where available (e.g. 2003 beedi-women, 2010 plantation, 2018 Kerala relief) — **rebuild natively; do NOT embed the low-res 30-Year-Journey infographic JPEGs**.
- Where no good photo exists, use an **icon/illustration token** per theme (relief, education, environment, elderly, women, health) — never a fabricated photo.
- Many milestone photos must be **extracted** from posters/PPTs/reports and enhanced (next phase). Consent applies.

## Data model (for later build — not implemented now)
```
Milestone: { year, approxFlag, title, description, theme, image?, sourceTag, confidence, verifyFlag, storyLink?, reportLink? }
```
Content authored in Markdown/JSON from `timeline.md`; **no fabricated fields**.

## Accessibility & performance
- Semantic ordered structure; each milestone a heading + text (screen-reader reads chronologically).
- Timeline is **not** motion-dependent — content fully available with animation off.
- Lazy-load milestone images; lightweight SVG for the branch motif.

## Source
`/audit/timeline.md` (Client 30-Year-Journey infographics + PPT1/PPT2 + press + WP reports). **[Verify]** items: founding framing, all self-reported counts, exact years for WP-surfaced/undated milestones.
