# SAHARA — Visual Design System

**Phase 4 — design specification only. No frontend code, nothing built/deployed.**
**Prepared:** 2026-08-09
**Direction:** **"Rooted & Warm"** (from `design-directions.md`) — warm, human, trustworthy, modern, professional, authentic, community-oriented. Avoids corporate-SaaS gloss, childishness, heavy gradients/glassmorphism, excessive animation.
**Anchor:** colors derived from the **actual SAHARA logo** (green banyan tree + black wordmark). Sampled logo green = **#018738**.

Tokens below are a **design spec** (values + rationale), not implementation.

---

## 1–5. Color palette

### Primary (from logo)
| Token | Hex | Use |
|---|---|---|
| `--green-brand` | **#018738** | logo green — icons, accents, links (large/UI), secondary buttons |
| `--green-forest` | **#0B4D2A** | deep green — nav/footer bg, headings on light, AA body-on-cream, timeline spine |
| `--green-700` | #0A6B30 | link/body-green that meets AA on cream |
| `--green-200` | #D3E7D8 | tints, chips, hovers |
| `--green-050` | #E9F3EC | section background bands, card tint |

### Accent / CTA (warm, Indian, human)
| Token | Hex | Use |
|---|---|---|
| `--terracotta` | **#C24A25** | **primary CTA / Donate** (white text, AA) |
| `--terracotta-hover` | #A83E1E | button hover/active |
| `--marigold` | **#F2A61C** | highlights, milestone accents, focus glow (dark text on it) |

### Neutrals / background / text
| Token | Hex | Use |
|---|---|---|
| `--cream` | **#FBF8F1** | page background |
| `--paper` | #FFFFFF | cards, surfaces |
| `--ink` | **#1B1A17** | body text (warm near-black, from wordmark) |
| `--ink-muted` | #5A5750 | secondary text, captions |
| `--line` | #E7E1D5 | borders, dividers |
| `--success` #2E7D46 · `--warning` #B8860B · `--error` #B0301F | status only (not decorative) |

> **Contrast:** verify at build — body text uses `--ink` on `--cream`/`--paper` (AA+); green text uses `--green-forest`/`--green-700` (not `--green-brand`) for small text; `--terracotta` carries white text (AA). Never color-only meaning. Full palette validated in `accessibility-design.md`.

### Duotone (historical/archive images)
`--green-forest` → `--cream` duotone, applied only to **Historical Archive / older timeline** images to unify low-res material and signal "history."

---

## 6–8. Typography

- **Headings / display:** **Fraunces** (humanist "old-style" serif — warm, characterful, credible). Fallback: Georgia, serif.
- **Body / UI:** **Inter** (clean humanist sans, excellent legibility, tabular figures for stats). Fallback: system-ui, sans-serif.
- **Telugu (if bilingual — [Verify]):** **Noto Sans Telugu** / **Noto Serif Telugu**, matched weights.
- Self-host + `font-display: swap`; subset; preload H1 + body weights (see `performance.md`).

### Type scale (fluid, mobile-first)
| Role | Size | Font / weight | LH |
|---|---|---|---|
| Display (hero H1) | clamp(2.2rem, 5vw, 3.6rem) | Fraunces 600 | 1.1 |
| H2 | clamp(1.6rem, 3.5vw, 2.4rem) | Fraunces 600 | 1.15 |
| H3 | clamp(1.25rem, 2.5vw, 1.6rem) | Fraunces 600 | 1.2 |
| H4 / eyebrow | 1.05rem / 0.8rem (tracked, uppercase) | Inter 600 | 1.3 |
| Body-lg | 1.125rem | Inter 400 | 1.6 |
| Body | 1rem (min 16px) | Inter 400 | 1.6 |
| Small / caption | 0.875rem | Inter 400 | 1.5 |
| Stat number | clamp(2rem, 4vw, 3rem) | Fraunces 600, tabular | 1 |

Headings `--green-forest` or `--ink`; eyebrows `--terracotta`/`--green-brand`; body `--ink`; captions `--ink-muted`.

---

## 9. Buttons
- **Primary (Donate/CTA):** solid `--terracotta`, white text, radius 10px (or pill for Donate), padding 0.75rem 1.5rem, weight 600; hover `--terracotta-hover` + slight lift; visible focus ring (marigold/forest, 3px).
- **Secondary:** outline `--green-forest` (1.5px), forest text, transparent → `--green-050` on hover.
- **Ghost/text:** forest text, underline on hover.
- **On-dark (footer/hero):** white/cream outline or solid terracotta.
- Min target 44×44px; icon+label allowed.

## 10. Cards
- `--paper` bg, radius 14px, `--line` 1px border, shadow `--shadow-sm`, padding 20–24px; image-top with 12px inner radius; hover: shadow `--shadow-md` + 2px lift (reduced-motion: no lift). Program/story/report/press cards share this base.

## 11. Border radius
`--r-sm 8px` (inputs, chips) · `--r-md 14px` (cards, images) · `--r-lg 22px` (feature panels) · `--r-pill 999px` (Donate, filter chips).

## 12. Shadows (soft, low — never heavy)
- `--shadow-sm`: 0 1px 2px rgba(27,26,23,.06)
- `--shadow-md`: 0 8px 24px rgba(11,77,42,.10)
- `--shadow-focus`: 0 0 0 3px rgba(242,166,28,.55)
No neon/glow; no glassmorphism.

## 13. Spacing (4px base)
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Section vertical rhythm: 64–96px desktop, 40–56px mobile. Container max-width 1200px; content measure ~68ch.

## 14. Icon style
Simple **line icons**, 1.75px stroke, rounded joins/caps, 24px grid; one per program (education, elder, women, youth/skills, leaf/environment, health-cross). Custom **banyan-leaf** motif for dividers/timeline nodes. No filled/3D/emoji icons in UI.

## 15. Image treatment
- Warm, natural color grade (consistent across mixed sources); **no AI-looking retouch**; radius 14px; subtle shadow.
- Aspect ratios: hero 16:9 (desktop) / 4:5 (mobile); program 3:2; card 1:1; story 4:5; timeline 4:3.
- Legibility scrim (forest→transparent gradient) behind any text over photos.
- **Duotone** only for archive/historical.
- Authentic documentary look preserved (see `visual-asset-map.md`).

## 16. Navigation style
Desktop: slim bar, logo left, nav center/right (Fraunces/Inter 600), **Donate** terracotta pill right. Transparent over hero → solid `--cream` (or `--green-forest` on inner pages) with `--shadow-sm` on scroll. Active item: terracotta underline. Mobile: hamburger → full-screen `--green-forest` drawer, cream links, big Donate.

## 17. Footer style
`--green-forest` background, cream text, 5 columns (see `component-specification.md`), banyan motif, terracotta links-on-hover, registration/trust line (80G/12A — **no FCRA**), tagline "HELP POOR AND INDEED PEOPLE."

## 18. Form style
Labels above inputs (Inter 600, `--ink`); inputs `--paper`, `--line` border, `--r-sm`, 44px height, 16px text; focus = forest border + `--shadow-focus`; errors `--error` text + icon (not color-only); success announced. Generous spacing.

## 19. Timeline style
Vertical spine in `--green-forest` with **banyan-leaf nodes** (marigold accent on active); milestone cards (`--paper`), year in Fraunces `--terracotta`; historical items get a "Historical" chip + optional duotone image; scroll-reveal (reduced-motion safe). Full spec in `component-specification.md`.

## 20. Gallery style
Masonry grid, filter **chips** (pill, `--green-050` / active `--green-forest`), 14px image radius, hover caption overlay (scrim), accessible lightbox. Full spec in `gallery-architecture.md` + `component-specification.md`.

---

## Token summary (for build handoff — not code)
Colors, type, spacing, radius, shadow tokens above become CSS custom properties / design tokens at build. Theme is **light-first, warm**; a dark variant is not required for v1 (single warm look), but tokens are structured to allow one later.
