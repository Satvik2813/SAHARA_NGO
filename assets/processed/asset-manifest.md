# SAHARA — Processed Asset Manifest

**Phase 4 — asset preparation complete.** Originals in `assets/` and `assets/original/` are **untouched**. Each photo exported as **JPEG (progressive) + WebP**; logos/extracted as PNG. Web-optimized; responsive variants to be generated at build.
**Prepared:** 2026-08-09 · **Tooling used here:** Python/PIL (extraction, cropping, Lanczos resample/upscale, WebP). *Note: upscaling is Lanczos resample; for the P0/P1 hero & program images, an optional **AI super-resolution pass in Adobe** is recommended before launch (flagged REVIEW-UPSCALE).*

Status key: **READY** (usable now) · **REVIEW-UPSCALE** (upscaled from low-res; optional Adobe super-res) · **REVIEW-CAP** (caption/consent check) · **LOW** (weak source; optional/replace if client supplies better).

## Hero
| ID | File (`processed/hero/`) | Source | Purpose | Dimensions | Format | Status |
|---|---|---|---|---|---|---|
| P01 | P01_hero_girls_schoolbags | `41 (2).JPG` | Homepage hero (primary) | 1600×959 | webp+jpg | READY |
| P02 | P02_hero_women_sewing | `tailor grop.JPG` (banner trimmed) | Hero (secondary) / Women | 1600×701 | webp+jpg | READY |
| P03 | P03_children_hands_raised | `children.JPG` (extracted) | Hero (backup) / Children | 1188×488 | webp+jpg | REVIEW-UPSCALE |

## Programs
| ID | File (`processed/programs/`) | Source | Purpose | Dimensions | Status |
|---|---|---|---|---|---|
| P04 | P04_girls_uniform | `2.jpg` poster crop | Girl Child | 1100×523 | READY |
| P07 | P07_children_health_camp | `bags.JPG` | Children / Health | 1200×814 | READY |
| P09 | P09_children_tablet_class | PPT1 image3 | Education | 1200×440 | READY |
| P12 | P12_elderly_group_banner | `3.jpg` poster crop | Elderly Care (hero) | 900×725 | READY |
| P15 | P15_adopt_an_elder | PPT1 image24 | Elderly Care | 474×334 | REVIEW-UPSCALE |
| P18 | P18_women_sewing_vidya | `1.jpg` poster crop | Women (tailoring) | 900×538 | READY |
| P19 | P19_beautician_facial | `1.jpg` poster crop | Women (beauty culture) | 900×1321 | READY |
| P20 | P20_computer_training | `1.jpg` poster crop | Youth & Skills | 864×1380 | READY |
| P23 | P23_women_shg | PPT2 image31 | Women (SHG) | 582×454 | REVIEW-UPSCALE |
| P24 | P24_tree_plantation | PPT2 image51 | Environment (hero) | 700×762 | READY |
| P25 | P25_rainwater_tank | PPT2 image52 | Environment (rainwater) | 900×666 | READY |

## Timeline
| ID | File (`processed/timeline/`) | Source | Purpose | Dimensions | Status |
|---|---|---|---|---|---|
| P17 | P17_elderly_covid_group | `aag.JPG` (extracted) | 2020–21 COVID relief | 1000×487 | READY |
| P26 | P26_rainwater_unit | `Save Rain Water.jpg` crop | Environment/history | 444×212 | LOW (text-contaminated; consider Adobe manual extract or drop) |
| P32 | P32_childrens_club_hist | PPT2 image21 | Historical (Children's Club) | 996×674 | READY |
| P33 | P33_vardavalli_hist | PPT2 image29 | Historical (Vardavalli) [year needs verification] | 792×628 | READY |

## Stories (consent granted; keep detail minimal)
| ID | File (`processed/stories/`) | Source | Purpose | Dimensions | Status |
|---|---|---|---|---|---|
| P05 | P05_girl_orange_giftpack | `2.jpg` crop | Child story | 700×894 | READY |
| P13 | P13_intergenerational | `3.jpg` crop | Elderly/youth story | 1000×534 | READY |
| P16 | P16_elderly_praying | `aged 2.22.JPG` crop | Elderly portrait | 208×240 | REVIEW-UPSCALE / LOW |
| P29 | P29_certificate_handover | PPT1 image31 | Women achievement | 354×266 | REVIEW-UPSCALE |
| P30 | P30_story_girl_portrait | PPT1 image33 | Child case ("Bhavani") | 170×244 | REVIEW-CAP (sensitive; anonymize) |
| P31 | P31_story_elderly_portrait | PPT1 image32 | Elderly case ("Gundamma") | 192×266 | REVIEW-CAP (sensitive) |

## Gallery
| ID | File (`processed/gallery/`) | Source | Category | Dimensions | Status |
|---|---|---|---|---|---|
| P06 | P06_girls_laughing_bags | `2.jpg` crop | Girl Child | 700×1027 | READY |
| P08 | P08_girls_materials | `child 2.22.JPG` crop | Children | 780×770 | READY |
| P10 | P10_children_artwork | PPT1 image18 | Children | 882×612 | READY |
| P11 | P11_thankyou_notebooks | `Capture.JPG` (banner trimmed) | Children/Impact | 1200×435 | READY |
| P14 | P14_elderly_provisions | `3.jpg` crop | Elderly | 700×941 | READY |
| P21 | P21_mehndi_training | `1.jpg` crop | Women | 1100×532 | READY |
| P22 | P22_skills_triptych | `skills.JPG` | Youth & Skills | 860×466 | REVIEW-UPSCALE (split into 3 later) |
| P27 | P27_env_awareness_drawing | PPT2 image53 | Environment | 900×678 | READY |
| P28 | P28_award_ceremony | PPT1 image34 | Recognition | 594×364 | REVIEW-CAP (verify award) |
| P34 | P34_community_event | PPT2 image54 | Community & Events | 694×520 | READY |

## Press (`processed/press/`)
| ID | File | Source | Dimensions | Status |
|---|---|---|---|---|
| PR01 | PR01_navatelangana_foundationday | WhatsApp 5.07.10 PM | 1600×1001 | READY |
| PR02 | PR02_metroudayam_visit | WhatsApp 5.05.57 PM | 664×740 | READY |
| PR03 | PR03_painting_prizes | WhatsApp 5.08.12 PM | 770×484 | READY |
| PR04 | PR04_summer_training | WhatsApp 5.08.39 PM | 463×499 | READY |

## Brand (`processed/brand/`)
| ID | File | Source | Purpose | Dimensions | Status |
|---|---|---|---|---|---|
| — | sahara_logo_master.png | `SAHARANGOLOGO.png` | Master (RGBA) | 1254×1254 | READY (white bg — **needs transparent/vector master**) |
| — | sahara_logo_header.png | logo | Header | ~160h | READY |
| — | sahara_logo_footer.png | logo | Footer | ~96h | READY |
| — | favicon_512/192/32.png | logo | Favicon candidates | 512/192/32 | READY |
| P35 | P35_helping_hands_bg | PPT2 image1.jpeg | Section/hero background | 2400×1628 | REVIEW (likely stock — **verify license**; prefer brand gradient) |

## Totals
- **Photos prepared:** 35 (P01–P35) + **4 press** + **6 brand/logo files** = **45 final web assets** (each photo × 2 formats).
- **READY:** ~30 · **REVIEW-UPSCALE:** P03, P15, P23, P29, P16, P22 · **REVIEW-CAP:** P28, P30, P31 · **LOW:** P26.
- **Gaps:** no dedicated **Health-camp** photo (P07 partial); no **founder** photo; request high-res originals for P0/P1 heroes.

> Nothing in `assets/` (source) or `assets/original/` was modified. Contact-sheet temp files were removed after verification.
