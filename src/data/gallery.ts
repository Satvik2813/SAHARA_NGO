export type GalleryCategory =
  | "Children & Education"
  | "Girl Child"
  | "Elderly Care"
  | "Women Empowerment"
  | "Youth & Skills"
  | "Environment"
  | "Community & Events"
  | "Historical Archive";

export interface GalleryImage {
  id: string;
  src: string;
  category: GalleryCategory;
  caption: string;
  historical?: boolean;
}

export const galleryImages: GalleryImage[] = [
  { id: "P01", src: "/assets/hero/P01_hero_girls_schoolbags.jpg", category: "Children & Education", caption: "Children with new school backpacks at a SAHARA event." },
  { id: "P04", src: "/assets/programs/P04_girls_uniform.jpg", category: "Girl Child", caption: "Girls in school uniform seated together." },
  { id: "P06", src: "/assets/gallery/P06_girls_laughing_bags.jpg", category: "Girl Child", caption: "Girls with school bags at a SAHARA distribution event." },
  { id: "P07", src: "/assets/programs/P07_children_health_camp.jpg", category: "Children & Education", caption: "Children with books and school bags at a health-and-education camp." },
  { id: "P08", src: "/assets/gallery/P08_girls_materials.jpg", category: "Children & Education", caption: "Girls seated with educational materials." },
  { id: "P09", src: "/assets/programs/P09_children_tablet_class.jpg", category: "Children & Education", caption: "Schoolgirls in a classroom with a tablet." },
  { id: "P10", src: "/assets/gallery/P10_children_artwork.jpg", category: "Children & Education", caption: "Children with painted artwork from an awareness activity." },
  { id: "P11", src: "/assets/gallery/P11_thankyou_notebooks.jpg", category: "Children & Education", caption: "Children with notebooks provided through SAHARA's education support." },
  { id: "P12", src: "/assets/programs/P12_elderly_group_banner.jpg", category: "Elderly Care", caption: "Elderly community members at a SAHARA 'Care & Concern for the Aged' event." },
  { id: "P13", src: "/assets/stories/P13_intergenerational.jpg", category: "Elderly Care", caption: "A schoolgirl and elderly community members together at a SAHARA event." },
  { id: "P14", src: "/assets/gallery/P14_elderly_provisions.jpg", category: "Elderly Care", caption: "Volunteers distributing provisions to elderly community members." },
  { id: "P17", src: "/assets/timeline/P17_elderly_covid_group.jpg", category: "Elderly Care", caption: "Elderly community members at a SAHARA outreach event during the COVID-19 period.", historical: true },
  { id: "P18", src: "/assets/programs/P18_women_sewing_vidya.jpg", category: "Women Empowerment", caption: "Tailoring training in progress at a SAHARA training centre." },
  { id: "P19", src: "/assets/programs/P19_beautician_facial.jpg", category: "Women Empowerment", caption: "Beautician / beauty-culture training session." },
  { id: "P21", src: "/assets/gallery/P21_mehndi_training.jpg", category: "Women Empowerment", caption: "Mehndi (henna) application training." },
  { id: "P23", src: "/assets/programs/P23_women_shg.jpg", category: "Women Empowerment", caption: "A Self Help Group / training gathering." },
  { id: "P20", src: "/assets/programs/P20_computer_training.jpg", category: "Youth & Skills", caption: "Computer training session for young women." },
  { id: "P22", src: "/assets/gallery/P22_skills_triptych.jpg", category: "Youth & Skills", caption: "Vocational skills training — beautician, computer and tailoring." },
  { id: "P24", src: "/assets/programs/P24_tree_plantation.jpg", category: "Environment", caption: "Tree-plantation event under SAHARA's Grow More Trees campaign." },
  { id: "P25", src: "/assets/programs/P25_rainwater_tank.jpg", category: "Environment", caption: "A rainwater harvesting unit constructed with SAHARA's support." },
  { id: "P26", src: "/assets/timeline/P26_rainwater_unit.jpg", category: "Environment", caption: "An earlier rainwater recharge unit and community members.", historical: true },
  { id: "P27", src: "/assets/gallery/P27_env_awareness_drawing.jpg", category: "Environment", caption: "A child's drawing from a National Environment Awareness Campaign." },
  { id: "P28", src: "/assets/gallery/P28_award_ceremony.jpg", category: "Community & Events", caption: "A recognition / award ceremony attended by SAHARA representatives." },
  { id: "P34", src: "/assets/gallery/P34_community_event.jpg", category: "Community & Events", caption: "A community gathering and felicitation event." },
  { id: "P32", src: "/assets/timeline/P32_childrens_club_hist.jpg", category: "Historical Archive", caption: "An earlier SAHARA Children's Club gathering.", historical: true },
  { id: "P33", src: "/assets/timeline/P33_vardavalli_hist.jpg", category: "Historical Archive", caption: "Children at SAHARA's historical Vardavalli programme.", historical: true },
];

export const galleryCategories: GalleryCategory[] = [
  "Children & Education",
  "Girl Child",
  "Elderly Care",
  "Women Empowerment",
  "Youth & Skills",
  "Environment",
  "Community & Events",
  "Historical Archive",
];
