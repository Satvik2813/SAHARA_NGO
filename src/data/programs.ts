export type ProgramStatus = "current" | "historical";

export interface Program {
  slug: string;
  name: string;
  promise: string; // [Proposed website copy]
  description: string;
  image: string;
  icon: "book" | "heart" | "scissors" | "laptop" | "leaf" | "cross";
  status: ProgramStatus;
  statusNote?: string;
  cta: string;
  ctaTo: string;
}

export const programs: Program[] = [
  {
    slug: "children-education",
    name: "Children & Education",
    promise: "Every child deserves a chance to learn and dream.",
    description:
      "SAHARA supports children from disadvantaged backgrounds, including orphan, semi-orphan and poor girl children, helping them continue their education through educational materials, nutrition, clothing and financial support.",
    image: "/assets/hero/P01_hero_girls_schoolbags.jpg",
    icon: "book",
    status: "current",
    cta: "Sponsor a Child",
    ctaTo: "/donate#sponsor-child",
  },
  {
    slug: "elderly-care",
    name: "Elderly Care",
    promise: "No elderly person should feel forgotten.",
    description:
      "Sahara supports destitute and uncared-for elderly people with essential provisions, nutrition, toiletries, healthcare and regular assistance — helping them stay within their community rather than in an institution.",
    image: "/assets/programs/P12_elderly_group_banner.jpg",
    icon: "heart",
    status: "current",
    cta: "Adopt an Elder",
    ctaTo: "/donate#adopt-elder",
  },
  {
    slug: "women-empowerment",
    name: "Women Empowerment",
    promise: "Empowered women build stronger families and stronger communities.",
    description:
      "Sahara works with women from vulnerable communities through Self Help Groups, vocational training, financial literacy and livelihood programmes — tailoring, beautician services, computer skills and workplace English.",
    image: "/assets/hero/P02_hero_women_sewing.jpg",
    icon: "scissors",
    status: "current",
    cta: "Support Women's Training",
    ctaTo: "/donate",
  },
  {
    slug: "youth-skills",
    name: "Youth Skill Development",
    promise: "Skills can change the direction of a life.",
    description:
      "Sahara provides vocational and employability training for unemployed youth and school/college dropouts — computer basics, workplace English, office assistance and tailoring — with placement assistance and career counselling.",
    image: "/assets/Replacement1.png",
    icon: "laptop",
    status: "current",
    cta: "Support a Training Seat",
    ctaTo: "/donate",
  },
  {
    slug: "environment",
    name: "Environment & Sustainability",
    promise: "Protecting nature means protecting our future.",
    description:
      "Through the “Grow More Trees” campaign, rainwater harvesting and recharge units, biodiversity awareness and waste-reduction efforts, Sahara encourages communities to take responsibility for the environment.",
    image: "/assets/programs/P24_tree_plantation.jpg",
    icon: "leaf",
    status: "current",
    cta: "Sponsor a Tree or Rainwater Unit",
    ctaTo: "/donate",
  },
  {
    slug: "health-hygiene",
    name: "Health & Hygiene",
    promise: "Better health creates stronger communities.",
    description:
      "Sahara conducts health-awareness programmes and medical camps for children, women and elderly people in communities with limited access to healthcare, including hygiene and seasonal-disease awareness.",
    image: "/assets/Replacement2.webp",
    icon: "cross",
    status: "current",
    cta: "Support a Health Camp",
    ctaTo: "/donate",
  },
];

export interface HistoricalProgram {
  name: string;
  description: string;
}

export const historicalPrograms: HistoricalProgram[] = [
  {
    name: "Agriculture & Rural Development",
    description:
      "Drinking-water handpumps, sanitary latrines, agricultural extension and training, and a community centre in Karimnagar district. Documented historically; current activity status needs careful confirmation.",
  },
  {
    name: "HIV/AIDS Awareness",
    description:
      "Health-awareness camps and counselling historically ran as a standalone concern area. Current activity status needs careful confirmation.",
  },
  {
    name: "Beedi-Worker Socio-Economic Development",
    description:
      "Capacity-building and Self Help Groups for beedi-rolling women in Tadwai Mandal, Nizamabad district — a founding-era programme.",
  },
  {
    name: "Disaster Relief",
    description:
      "Episodic relief work including 1990 cyclone relief, 2018 Kerala flood relief and 2020 COVID-19 relief — see Our Journey for details.",
  },
];
