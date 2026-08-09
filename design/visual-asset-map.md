# SAHARA — Visual Asset Map (section → prepared asset)

**Phase 4.** Maps design sections to the **prepared** files in `assets/processed/` (`asset-manifest.md`). Only prepared assets are referenced. Alt-text guidance included (factual, no invented context).

| Section / slot | Asset(s) | Folder | Alt-text guidance |
|---|---|---|---|
| **Homepage hero** | P01 (primary), P02 (secondary), P03 (backup) | hero/ | "Girls holding new school backpacks at a SAHARA event" |
| Identity strip | logo mark | brand/ | (decorative if logo repeated) |
| Programs · Children | P01 / P07 | hero/, programs/ | "Children with school bags and books at a SAHARA camp" |
| Programs · Girl Child | P04 | programs/ | "Girls in school uniform seated together" |
| Programs · Elderly | P12 | programs/ | "Elderly people at a SAHARA 'Care & Concern for the Aged' event" |
| Programs · Women | P02 / P18 | hero/, programs/ | "Women at sewing machines in a tailoring class" |
| Programs · Youth & Skills | P20 | programs/ | "A young woman at a computer during training" |
| Programs · Environment | P24 | programs/ | "Tree-plantation event with a sapling being planted" |
| Programs · Health | P07 (shared) | programs/ | "Children at a free health-camp event" (⚠️ no dedicated health photo) |
| Featured story (home) | P02 / P13 | hero/, stories/ | non-identifying scene |
| Journey teaser / Timeline | P17 (2020), P24 (2010), P26 (env), P32/P33 (historical, duotone), P18 (tailoring origins), P28 (award) | timeline/, programs/, stories/ | year/context factual; historical labeled |
| Stories | P05, P13, P16, P29; P30/P31 (sensitive, anonymized) | stories/ | minimal detail; no names unless source-tied + consented |
| Gallery pool | P06, P08, P10, P11, P14, P21, P22, P27, P28, P34 (+ program/hero reuse) | gallery/ | per-tile factual caption |
| News & Media | PR01–PR04 | press/ | "Newspaper clipping: {outlet}, {date if known}" |
| Reports & Transparency | report PDF covers (from `/audit` WordPress reports) | (to generate at build) | "Cover of SAHARA Annual Report {year}" |
| Donate band | P02 or P01 | hero/ | warm supporting scene |
| Background (optional) | P35 helping-hands | brand/ | decorative (**verify license**; prefer brand gradient) |
| Header/Footer logo | sahara_logo_header/footer | brand/ | "SAHARA logo" |
| Favicon | favicon_512/192/32 | brand/ | — |

## Coverage & gaps
- **Strong:** Children, Girl Child, Elderly, Women, Environment, Historical, Community, Recognition.
- **Weak:** **Youth & Skills** (small/low-res P20/P22/P23), **Health & Hygiene** (**no dedicated photo** — P07 partial). Design uses honest fallbacks (icon-led cards, shared photo) — **no fabricated imagery**.
- **Request from client:** health-camp/dental/menstrual-hygiene photos; a **founder photo**; high-res originals of P01/P02/P12; official **partner logos**; **transparent/vector logo master**; report source files.

## Processing flags carried into design
- **REVIEW-UPSCALE** (optional Adobe AI super-res before hero/large use): P03, P15, P16, P22, P23, P29.
- **REVIEW-CAP** (caption/consent/verify): P28 (award), P30/P31 (sensitive — anonymize).
- **LOW** (consider replace/drop): P26 (text-contaminated).
- **Duotone treatment:** P17, P26, P32, P33 (+ any archive gallery tiles).
