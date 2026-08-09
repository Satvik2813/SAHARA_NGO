# SAHARA — Asset Inventory

**Phase:** Discovery / Audit only. **No originals were modified.** PPTX contents were copied to a temporary scratchpad and unzipped there for inspection only.
**Prepared:** 2026-08-09

## How to read this

- **Extraction required?** = does a reusable photo need to be *pulled out* of a poster/PPT (YES) or is it already a standalone file (NO)?
- **Editing required?** = does the asset likely need crop/upscale/restore/recolor before web use?
- Quality is a visual estimate from the supplied copies; **actual resolution shown**. Most photos are low-to-medium resolution (web/WhatsApp-grade), typical of 2012–2022 program documentation.
- Usage roles: **Hero**, **Section**, **Card**, **Gallery**, **Timeline**, **Background**.
- Nothing here is auto-cropped or edited yet — this is a *candidate* inventory for later decisions.

---

## A. Logo & brand assets

| File | Type | Res | Quality | Notes / usage |
|---|---|---|---|---|
| `SAHARANGOLOGO.png` | Logo (PNG) | 1254×1254 | High, clean, white bg | Primary logo — green banyan tree + "SAHARA" wordmark. Usable for header/footer/favicon. **Recommend:** obtain transparent-background + vector (SVG/AI) master if available. Editing: **YES** (background removal / vectorize). |
| PPT2 `image8.png` (embedded) | Logo variant | 226×142 | Low | Logo lockup with legal line "(Voluntary Organisation) (Regn. No. 3119/88 - FCRA No.010230259)". Useful as a **reference for legal text**, not for display. Extraction: YES. |
| PPT1 `image2.png` / PPT2 tree marks | Logo (small) | small | Low | Small logo instances inside decks. Not needed if master logo used. |

---

## B. Standalone images (files in `assets/`)

### B1. Modern donation posters (2022) — professionally designed, contain reusable photos

| File | Res | Quality | Contains photos of | Extraction | Editing | Recommended use |
|---|---|---|---|---|---|---|
| `1.jpg` "Donate to Poor Young Women" | 1587×2245 | Good (poster) | (a) woman at sewing machine "VIDYA"; (b) beautician facial training; (c) girls at computers; (d) mehndi/henna application | YES (4 photos) | YES (crop from poster) | Poster itself → not for modern site as-is (dark template + bank text). Photos → Women/Youth **Section**, **Card**, **Gallery**. |
| `2.jpg` "Donate to Poor & Needy Girl Children" | 1587×2245 | Good (poster) | (a) girls seated with materials + SAHARA banner; (b) girl in orange holding gift pack; (c) girls laughing with school bags; (d) girls in school uniform seated | YES (4 photos) | YES | Children/Education **Section**, **Card**, **Gallery**. |
| `3.jpg` "Adopt a Destitute Aged" | 1587×2245 | Good (poster) | (a) schoolgirl handing note to elderly women; (b) group of elderly under "Care & Concern for the Aged" banner; (c) volunteers handing provisions; (d) elderly seated with ration bags | YES (4 photos) | YES | Elderly Care **Section**, **Card**, **Gallery**. |

### B2. Older appeal posters / graphics (contain photos, but dated design)

| File | Res | Quality | Contains photos of | Extraction | Editing | Recommended use |
|---|---|---|---|---|---|---|
| `aag.JPG` "Adopt a Granny" | 521×394 | Low | Group of masked elderly women seated (COVID-era) under SAHARA aged banner | YES | YES (upscale) | Elderly **Card/Gallery** (low-res). Near-duplicate of `aged appeal.JPG`. |
| `aged appeal.JPG` "Adopt a Granny" | 510×388 | Low | Same/very similar elderly group photo | YES | YES | **Near-duplicate** of `aag.JPG` — keep one. |
| `aged 2.22.JPG` "Help the poor & needy destitute Aged" | 596×476 | Low–med | Collage: elderly group, elderly woman praying (namaste), elderly eating meal, group under "Adopt-a-Destitute-Aged" banner | YES (4 photos) | YES | Elderly **Section/Gallery**. Contains full bank/contact text (crop out). |
| `child 2.22.JPG` "Sponsor Poor & needy Girl Children" | 690×465 | Low–med | Girls seated with SAHARA banner + materials | YES | YES | Children **Card/Gallery**. |
| `children.JPG` "Extend your helping hand … single parent children" | 594×405 | Low | Children with hands raised, joyful, under SAHARA banner | YES | YES (upscale) | Children **Section/Hero-candidate** (energetic image) / **Gallery**. |
| `Save Rain Water.jpg` "Donate for Rain Water Recycling/Recharge" | 676×504 | Low (2012) | Small photos of rainwater units, group gatherings, buildings | YES (several small) | YES (upscale — small) | Environment **Gallery**. Also a **key text source** (registration, old bank list, old website). |

### B3. Program photographs (standalone, closest to "clean" photos)

| File | Res | Quality | Shows | Extraction | Editing | Recommended use |
|---|---|---|---|---|---|---|
| `41 (2).JPG` | 929×557 | Medium | Room full of smiling girls holding new red/blue school backpacks; sewing machines behind | NO | Maybe (crop/enhance) | Children/Education **Hero-candidate**, **Section**, **Gallery**. Warm, high-emotion. |
| `bags.JPG` | 766×560 | Medium | Children holding PUMA school bags & books under "Free Health Camp / Sponsor a Girl Child" banner | NO | Maybe | Children **Section/Card/Gallery**. |
| `Capture.JPG` | 826×343 | Low–med | Group of girls behind stacks of notebooks; boy holding "THANK U" sign; SAHARA banner | NO | Maybe (crop) | Education/Impact **Card**, **Gallery**, testimonial. |
| `skills.JPG` | 430×233 | Low | 3-panel: beautician facial, computer training, tailoring/machine | NO | YES (upscale, split) | Women/Youth skills **Card/Gallery** (small). |
| `tailor grop.JPG` | 1012×524 | Medium | Row of women at sewing machines under "Tailoring Training for Young Women — sponsored by Rotary Club of Hyderabad" banner | NO | Maybe (crop banner) | Women/Youth **Hero-candidate**, **Section**, **Gallery**. Good width for banner use. |

### B4. Timeline infographics (2025) — designed graphics, not raw photos

| File | Res | Quality | Content | Reuse |
|---|---|---|---|---|
| `WhatsApp Image 2025-09-24 at 13.11.17.jpeg` | 512×1280 | Medium (graphic) | "Sahara's 30 Year Journey" vertical infographic — years 1990,1992,1996,1998,2001,2003,2008 | Content → `timeline.md`. Small circular photos embedded (low-res). Recommend **rebuild timeline natively** on new site, not embed image. |
| `WhatsApp Image 2025-09-24 at 13.11.18.jpeg` | 512×1280 | Medium (graphic) | Same series — years 2009,2010,2011,2013,2015,2018,2021 | As above. |
| `WhatsApp Image 2025-09-24 at 13.11.20.jpeg` | 1024×768 | Medium (graphic) | Horizontal "branch" timeline — 1990,1992,2003,2010,2013,2018,2020 (includes 2020 COVID entry not in the vertical set) | As above. Source of the 2020 COVID entry. |

### B5. Press clippings (2026-08-08 files) — see `press-coverage.md`

| File | Res | Quality | Content |
|---|---|---|---|
| `WhatsApp Image 2026-08-08 at 5.05.57 PM.jpeg` | 664×740 | Medium | English article + photo — "Gundrathi Sharada visited Sahara, which supports the elderly" (Metroudayam). |
| `WhatsApp Image 2026-08-08 at 5.07.10 PM.jpeg` | 1600×1001 | Medium–good | Nava Telangana (Telugu), 31/12/2023, p.7 — Sahara foundation-day celebrations + photo. |
| `WhatsApp Image 2026-08-08 at 5.08.12 PM.jpeg` | 770×484 | Low–med | Nava Telangana (Telugu) — painting-competition prizes + photo. |
| `WhatsApp Image 2026-08-08 at 5.08.39 PM.jpeg` | 463×499 | Low | Nava Telangana (Telugu), 29.4.23 — summer training classes + photo. |

---

## C. Photographs embedded inside the PowerPoint decks

Two decks contain ~100 embedded media items. Below are the **photograph candidates** (icons, small UI graphics, and SVG decorations are excluded). Each embedded photo needs **extraction: YES**. File names are the internal PPTX media names (in the copied/unzipped scratchpad — originals untouched).

### C1. `Sahara_Fundraise_Presentation.pptx` (PPT1) — photo candidates

| Internal name | Res | Shows (no invented context) | Notes / usage |
|---|---|---|---|
| `image1.jpeg` | 2000×753 | Close-up of ripe tomatoes/vegetables | Stock/decorative (sustainable agriculture). Low reuse value. |
| `image3.png` | 999×367 | Schoolgirls in uniform with a tablet/computer in a classroom | Education **Card/Gallery** (wide strip). |
| `image4.png` | 1083×368 | Girls seated on a green mat (group) | Children **Gallery**. |
| `image5.png` | 1092×368 | Girls in an activity/eating session (group) | Children **Gallery**. |
| `image6.png` | 1037×367 | Collage strip (elderly woman; child in orange with gift pack; women activity) | Mixed **Gallery**. |
| `image11.png` | 855×751 | **Map graphic** of Telangana districts (not a photo) | Reference for geographic reach; rebuild natively. |
| `image18.png` | 441×306 | Children holding painted artwork with a woman | Children/awareness **Card/Gallery**. |
| `image19.png` | 435×182 | Girls with SAHARA banner; boy holding "Thank You" | = standalone `Capture.JPG`. Impact **Card**. |
| `image20.png` | 407×181 | Group of girls under "SAHARA supports poor & needy" banner | Children **Gallery**. |
| `image21.png` | 431×142 | Elderly-care distribution collage | Elderly **Gallery**. |
| `image22.png` | 421×145 | Elderly being served meals / distribution collage | Elderly **Gallery**. |
| `image23.png` | 367×156 | Elderly group seated with ration bags | Elderly **Gallery**. |
| `image24.png` | 237×167 | Woman seated with two elderly people ("adopt an elder") | Elderly **Card**. |
| `image25.png` | 262×172 | Elderly-care room / awareness gathering | Elderly **Gallery**. |
| `image26.png` | 488×148 | Office/training room with women | Women/Youth **Gallery**. |
| `image27.png` | 343×145 | Vocational collage (tailoring/beautician) | Women/Youth **Gallery**. |
| `image28.png` | 368×141 | Beautician/mehndi/tailoring collage | Women/Youth **Gallery**. |
| `image29.png` | 175×122 | Women at computer training | Youth **Card** (small). |
| `image30.png` | 176×122 | Classroom / training session | Youth **Card** (small). |
| `image31.png` | 177×133 | Certificate/prize handover to a woman | Impact **Card** (small). |
| `image32.png` | 96×133 | Portrait of an elderly woman (case study "Gundamma") | Story portrait (small). |
| `image33.png` | 85×122 | Portrait of a girl child (case study "Bhavani") | Story portrait (small). |
| `image34.png` | 297×182 | **Award ceremony** — person receiving a certificate on stage | Awards/Recognition **Card**. **[VERIFY]** exact award (see content-audit §9). |

> **PPT1 supporter/university logos (not photos):** `image36` Bharatiya Vidya Bhavan, `image38` Lions International, `image39` Manav Nirman Jagruti Manch, `image40` Mother Theresa Social Service & Development Society, `image42` ImpactGuru, `image43` Divya Babaji Sushumna Kriya Yoga Foundation, `image45` Presidency University Kolkata, `image46` PHFI / Indian Institute of Public Health Gandhinagar, `image48` Christ University, `image49` TISS, `image50` SDA Bocconi. → "Partners/Supporters" logo wall (obtain official logos rather than reusing low-res copies).

### C2. `Supports Poor and Needy for sustainable development (1).pptx` (PPT2) — photo candidates

| Internal name | Res | Shows (no invented context) | Notes / usage |
|---|---|---|---|
| `image1.jpeg` | **2910×1974** | Two hands reaching toward each other, sky/sun backdrop (stock "helping hand") | **Highest-resolution file found.** Decorative/stock — good **Background/Hero overlay** candidate, but verify it is licensed (likely stock). |
| `image8.png` | 226×142 | SAHARA logo with legal registration line | Reference (legal text), not display. |
| `image9.png` | 745×818 | Illustration of two hands (green/skin) — "helping hand" graphic | Decorative graphic. |
| `image21.png` | 498×337 | Outdoor group under "SAHARA Children's Club — Save the Children" banner (historical) | Historical **Timeline/Gallery**. |
| `image28.png` | 280×285 | Girls seated with materials indoors | Children **Gallery**. |
| `image29.png` | 396×314 | Village children under "SAHARA – Save the Children, Jansi Balala Sangam, Vardavalli" banner (historical) | Historical **Timeline/Gallery**. |
| `image30.png` | 342×344 | Elderly group seated with ration bags (distribution) | Elderly **Gallery**. |
| `image31.png` | 291×227 | Women seated in a room (SHG/training) | Women **Gallery**. |
| `image44.png` | 1041×300 | Girls seated at a table (wide strip) | Children **Gallery** (banner). |
| `image45.png` | 1041×300 | Children in uniform seated on a green mat (wide strip) | Children **Gallery** (banner). |
| `image48.png` | 212×300 | Beautician training (facial) | = poster `1.jpg` photo. Women **Card**. |
| `image49.png` | 168×299 | Girl at a computer monitor | Youth **Card**. |
| `image50.png` | 212×164 | Woman at a "VIDYA" sewing machine | = poster `1.jpg` photo. Women **Card**. |
| `image51.png` | ~450×333 | "Resolution Campaign – Tree Plantation" event; man planting a sapling with watering can; schoolchildren; GiveIndia/MTV banner | Environment **Section/Gallery** (good storytelling image). |
| `image52.png` | ~450×339 | Schoolchildren in front of a building with a "Rain Water Harvesting Unit" tank | Environment **Section/Gallery**. |
| `image53.png` | ~350×381 | Child drawing under "National Environment Awareness Campaign" banner (supported by DDS & Min. of Forests) | Environment/awareness **Gallery**. |
| `image54.jpeg` | 347×260 | Indoor gathering — man with a boy, people standing (event/felicitation) | Events **Gallery**. |

---

## D. Website gallery (existing)

- `saharangots.org/galleries.html` hosts a single **"Gallery"** with **33 thumbnail images** (`1a`–`33a` linking to `1`–`33`), **no captions or categories**. **[WEB]** These may overlap with the supplied photos or add new ones — **recommend downloading and de-duplicating** during the extraction phase (not done yet).

---

## E. Duplicate / near-duplicate groups (do not prepare twice)

1. `aag.JPG` ≈ `aged appeal.JPG` — same masked-elderly-group photo, minor text difference.
2. `Capture.JPG` ≈ PPT1 `image19.png` — same "Thank You" girls-with-notebooks photo.
3. Poster `1.jpg` beautician/sewing photos ≈ `skills.JPG` ≈ PPT2 `image48/image50` ≈ PPT1 `image27/28`.
4. Poster `3.jpg` / `aged 2.22.JPG` elderly-care photos ≈ PPT1 `image21–23` / PPT2 `image30`.
5. Poster `2.jpg` / `child 2.22.JPG` girls-with-materials ≈ PPT1 `image20` / PPT2 `image28`.
6. Timeline infographics 13.11.17/.18 (vertical) overlap in content with 13.11.20 (horizontal).

---

## F. Overall quality assessment & priorities

- **Best originals for prominent use:** `41 (2).JPG`, `tailor grop.JPG`, `bags.JPG`, PPT2 `image51`/`image52` (environment), and the three modern posters' embedded photos.
- **Highest resolution asset:** PPT2 `image1.jpeg` (2910×1974) — but it is a decorative "helping hands" stock-type image; **verify licensing**.
- **Common issues:** most photos are low resolution (≤ ~1000px), moderately compressed, some soft/blurry, some with subjects partially cut off in collages, many with **banner/bank/contact text baked in** that must be cropped out.
- **Restoration/upscaling candidates:** nearly all elderly/children program photos (`aag`, `aged appeal`, `children`, `skills`, `Save Rain Water`, and the small PPT-embedded ones).
- **Extraction workload:** 3 modern posters (≈12 photos) + 5 older posters (≈10 photos) + 2 PPTs (≈30 photo candidates) + 33 website gallery images to review = a substantial but manageable curation task for the later Adobe/Canva phase.

> ⚠️ **Consent/privacy note:** Many photos show identifiable children, women and elderly beneficiaries. Before publishing any of these, confirm with the client that photo consent exists for public/web use. This is a decision for the client, not this audit.

---

## G. Historical WordPress (Source 3) image candidates — `saharango.wordpress.com`

**[Historical WordPress]** — inventory only; nothing bulk-downloaded. Full context in `wordpress-audit.md` §10. **Verdict: low reuse value as-is; historical documentation quality only.**

| Asset group | Location | Approx. size | Description | Recommended use | Extraction | Editing | Notes |
|---|---|---|---|---|---|---|---|
| Gallery — Vocational Training | `/gallery/vocational-training/` | ~530×370 | Tailoring/skills classes | Timeline/archive thumbnail | NO (request hi-res) | Upscale/restore | 2010 upload; low-res |
| Gallery — Informative Exhibition | `/gallery/informative-exhibition/` | ~530×390 | Women/children viewing awareness/drawing exhibitions | Archive thumbnail | NO | Upscale | 2010 upload |
| Gallery — Environment | `/gallery/environment/` | ~340–515 | Tree-plantation events (SAHARA & Cottonwood banners), field/agri | Environment archive/gallery | NO | Upscale | Good story theme but tiny |
| Gallery — Computer Classes | `/gallery/computer-classes/` | ~190×135 (tiny) | Computer training | Not usable at size | NO | — | Too small |
| Gallery — English Classes | `/gallery/english-classes/` | ~200×145 (tiny) | Spoken-English classes | Not usable at size | NO | — | Too small |
| Elderly ID portraits | Old-Age-Cases / gallery | small | Portrait photos of named elderly beneficiaries | **Do not use** | NO | — | **Consent-sensitive; identifiable individuals** |
| `bcl2.jpg` | `/wp-content/uploads/2014/02/` | small | Blue Cross Labs donation event (2014) | Low priority | NO | — | — |
| `004.jpg` | `/2014/02/01/004-jpg/` | small | Single image post | Low priority | NO | — | — |
| **Annual-report embedded photos** | 6 report PDFs (`/wp-content/uploads/2019/05/`) | low/med, compressed | Dated program photos (children, aged events, Suraksha centre, tree plantation, Kerala relief, training) | **Best historical candidates** — request originals | Extract only if original supplied | Restore | Dated by report year; **request source files** |

- **Total gallery images:** ~30 unique (2010 upload), all ≤ ~557 px wide (≤0.25 MP). **Not** hero/section/card quality.
- **Duplicate check vs client `assets/`:** WordPress gallery images appear **distinct** from the client's 2018–2025 photos (different era), but the *themes* overlap (tailoring, tree plantation, aged distributions, rainwater units). **No obvious pixel duplication**, but verify visually before treating any as "new".
- **Action:** do **not** scrape these low-res copies; if any subject is wanted, request **high-resolution originals / the report source files** from the client. Confirm consent (esp. named beneficiaries and minors).
