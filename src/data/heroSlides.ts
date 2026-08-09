/**
 * Hero background slideshow. Images and captions reuse the same files/alt
 * text already used elsewhere on the site (see programs.ts / gallery.ts /
 * timeline.ts) so nothing here introduces a new, unverified claim.
 */
export interface HeroSlide {
  id: string;
  jpg: string;
  webp: string;
  alt: string;
  /** Tailwind object-position utility override; defaults to object-center. */
  focus?: string;
  /** "contain" shows the full frame (letterboxed) instead of cropping to fill. Defaults to "cover". */
  fit?: "cover" | "contain";
}

export const heroSlides: HeroSlide[] = [
  {
    id: "P01",
    jpg: "/assets/hero/P01_hero_girls_schoolbags.jpg",
    webp: "/assets/hero/P01_hero_girls_schoolbags.webp",
    alt: "Girls holding new school backpacks at a SAHARA event",
    focus: "object-[center_30%]",
  },
  {
    id: "P02",
    jpg: "/assets/hero/P02_hero_women_sewing.jpg",
    webp: "/assets/hero/P02_hero_women_sewing.webp",
    alt: "Women learning tailoring skills at a SAHARA vocational training centre",
  },
  {
    id: "P09",
    jpg: "/assets/programs/P09_children_tablet_class.jpg",
    webp: "/assets/programs/P09_children_tablet_class.webp",
    alt: "Schoolgirls in a classroom with a tablet",
  },
  {
    id: "P15",
    jpg: "/assets/programs/P15_adopt_an_elder.jpg",
    webp: "/assets/programs/P15_adopt_an_elder.webp",
    alt: "An elderly community member supported through SAHARA's elderly care programme",
    fit: "contain",
  },
  {
    id: "P24",
    jpg: "/assets/programs/P24_tree_plantation.jpg",
    webp: "/assets/programs/P24_tree_plantation.webp",
    alt: "Tree-plantation event under SAHARA's Grow More Trees campaign",
    fit: "contain",
  },
  {
    id: "P25",
    jpg: "/assets/programs/P25_rainwater_tank.jpg",
    webp: "/assets/programs/P25_rainwater_tank.webp",
    alt: "A rainwater harvesting unit constructed with SAHARA's support",
    fit: "contain",
  },
  {
    id: "P22",
    jpg: "/assets/gallery/P22_skills_triptych.jpg",
    webp: "/assets/gallery/P22_skills_triptych.webp",
    alt: "Vocational skills training in beautician, computer and tailoring courses",
  },
  {
    id: "P17",
    jpg: "/assets/timeline/P17_elderly_covid_group.jpg",
    webp: "/assets/timeline/P17_elderly_covid_group.webp",
    alt: "Elderly community members at a SAHARA outreach event during the COVID-19 period",
  },
];
