# SAHARA — Photo Processing Plan (Canva / Adobe)

**Phase 3 — plan only. DO NOT edit, extract, upscale, or move any image yet.** Authenticity first — do not over-process; SAHARA's photos should look like real NGO documentation, not artificial renders.
**Prepared:** 2026-08-09

Tool guidance: **Adobe** for extraction/upscale/restoration/cutouts/color; **Canva** for simple crops/resizing/light tidy; **Either** for basic crops; **No editing** where already fine.

---

## Per-image processing table

| ID | Source | Action(s) | Target crop(s) | Text/border removal | Upscale? | Tool | Priority |
|---|---|---|---|---|---|---|---|
| P01 | `41 (2).JPG` | crop, light grade, mild upscale | 16:9 + 4:5 (mobile) | none | mild | Adobe | P0 |
| P02 | `tailor grop.JPG` | remove top banner text, crop | 16:9 / 21:9 band | **yes (banner)** | no | Adobe | P0 |
| P03 | `children.JPG` | trim header text, upscale, grade | 16:9 + 4:5 | yes (header) | **yes** | Adobe | P1 |
| P04 | `2.jpg` poster | **extract** uniform-girls photo, upscale | 3:2 / 1:1 | yes (poster text) | yes | Adobe | P1 |
| P05 | `2.jpg` poster | extract girl-in-orange, upscale | 4:5 | yes | yes | Adobe | P2 |
| P06 | `2.jpg` poster | extract laughing-girls, upscale | 3:2 | yes | yes | Adobe | P2 |
| P07 | `bags.JPG` | crop banner, grade | 3:2 / 1:1 | yes (banner) | mild | Adobe/Canva | P1 |
| P08 | `child 2.22.JPG` | crop photo, upscale | 3:2 | yes (surrounding) | yes | Adobe | P2 |
| P09 | PPT1 image3 | extract, crop wide strip | 16:9 / 3:1 | none | mild | Canva/Adobe | P1 |
| P10 | PPT1 image18 | extract, crop, mild upscale | 3:2 | none | mild | Adobe | P2 |
| P11 | `Capture.JPG` | crop banner, upscale | 16:9 | yes (banner) | yes | Adobe | P1 |
| P12 | `3.jpg` poster | **extract** elderly-group, upscale | 3:2 | yes | yes | Adobe | P0 |
| P13 | `3.jpg` poster | extract inter-generational, upscale | 3:2 | yes | yes | Adobe | P1 |
| P14 | `3.jpg` poster | extract provisions, upscale | 4:5 | yes | yes | Adobe | P2 |
| P15 | PPT1 image24 | extract, upscale, crop | 3:2 | none | yes (small) | Adobe | P2 |
| P16 | `aged 2.22` | extract praying-woman from collage, upscale | 4:5 | yes | yes | Adobe | P2 |
| P17 | `aag.JPG` | crop, upscale, gentle denoise | 3:2 | light | yes | Adobe | P2 |
| P18 | `1.jpg` poster | **extract** sewing photo, upscale | 4:5 | yes | yes | Adobe | P1 |
| P19 | `1.jpg` poster | extract beautician, upscale | 4:5 | yes | yes | Adobe | P1 |
| P20 | `1.jpg` poster | extract computers, upscale | 3:2 | yes | yes | Adobe | P1 |
| P21 | `1.jpg` poster | extract mehndi, upscale | 3:2 | yes | yes | Adobe | P2 |
| P22 | `skills.JPG` | split 3 panels, heavy upscale | 1:1 ×3 | none | **heavy** | Adobe | P2 |
| P23 | PPT2 image31 | extract, upscale, crop | 3:2 | none | yes | Adobe | P2 |
| P24 | PPT2 image51 | extract, crop banner, mild upscale | 16:9 / 3:2 | yes (banner) | mild | Adobe | P0 |
| P25 | PPT2 image52 | extract, crop, upscale | 3:2 | light | yes | Adobe | P1 |
| P26 | `Save Rain Water.jpg` | extract unit photo, heavy upscale | 3:2 | yes | heavy | Adobe | P2 |
| P27 | PPT2 image53 | extract, crop, upscale | 4:5 | light (banner) | yes | Adobe | P2 |
| P28 | PPT1 image34 | extract, crop, upscale | 3:2 | none | yes | Adobe | P1 |
| P29 | PPT1 image31 | extract, upscale | 4:5 | none | yes | Adobe | P2 |
| P30 | PPT1 image33 | extract, heavy upscale (or anonymize) | 1:1 | none | **heavy** | Adobe | P2 |
| P31 | PPT1 image32 | extract, heavy upscale (or anonymize) | 1:1 | none | **heavy** | Adobe | P2 |
| P32 | PPT2 image21 | extract, crop, mild upscale | 3:2 | light (banner) | mild | Adobe/Canva | P1 |
| P33 | PPT2 image29 | extract, crop, upscale | 3:2 | light (banner) | yes | Adobe | P2 |
| P34 | PPT2 image54 | extract, crop, upscale | 3:2 | none | yes | Adobe | P2 |
| P35 | PPT2 image1.jpeg | optimize/darken for overlay | 16:9 background | none | no | Canva/Adobe | P2 |
| PR01–PR04 | press clippings | light crop/clean, thumbnail + full | as-is | none | mild | Canva | P1/P2 |

**Global output spec (for all):** export **WebP/AVIF** + JPEG fallback; generate **responsive sizes** (e.g. 480/960/1600px); set correct intrinsic dimensions; strip nothing that harms authenticity; keep an untouched original in `original/`.

**Do NOT:** heavy AI "beautify," face smoothing, background replacement on documentary photos, or over-saturation. Light, consistent color grade only.

---

## Extraction / editing effort tally
- **Extract from posters:** 12 (P04, P05, P06, P12, P13, P14, P16, P18, P19, P20, P21, P26).
- **Extract from PPTX:** 15 (P09, P10, P15, P23, P24, P25, P27, P28, P29, P30, P31, P32, P33, P34, P35).
- **Standalone, crop/upscale only (no extraction):** P01, P02, P03, P07, P08, P11, P17, P22.
- **Requires Adobe (extraction/upscale/restore):** ~30.
- **Canva-only or Either (simple crop/resize):** P07, P09, P32, P35, PR01–PR04 (~8, some shared with Adobe).
- **No editing required:** effectively none for web (P35 needs at least optimization).

---

## 13. Recommended asset-folder structure (create later; do NOT move files now)

```
assets/
├── original/            # untouched copies of every source (posters, PPT exports, standalone, press, logo)
├── extracted/           # individual photos pulled from posters/PPTX (pre-processing)
├── processed/
│   ├── hero/            # P01–P03 (+ crops)
│   ├── programs/        # P04–P27 by area
│   ├── stories/         # P29–P31, P13 (consent-checked)
│   ├── timeline/        # P32, P33, P17, P24–P26 (historical)
│   ├── gallery/         # curated ~26
│   └── press/           # PR01–PR04 (+ report covers)
└── brand/               # logo variants (SVG/transparent/favicon), icons, motifs
```
- **Preserve `assets/` originals** — never edit in place; `original/` holds copies, work happens in `extracted/`→`processed/`.
- The current `assets/` folder (client source files) stays **unmodified**.

---

## First things to prepare (when the extraction phase begins)
1. **P0 set:** P01, P02, P12, P24 (hero + top program images).
2. **Logo master:** transparent/SVG + favicon (brand/).
3. **P1 program/impact set:** P07, P09, P11, P13, P18, P19, P20, P25, P28, P32, P04, P03.
4. Then P2 gallery/story/historical fill.

*(No processing performed in this phase.)*
