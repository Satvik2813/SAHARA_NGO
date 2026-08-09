/**
 * Sourced from /audit/timeline.md. No years invented. Confidence/verification
 * flags preserved. Founding framing follows the client-confirmed 1986 date.
 */

export interface Milestone {
  year: string;
  approx?: boolean;
  title: string;
  description: string;
  image?: string;
  duotone?: boolean;
  source: string;
  needsVerification?: boolean;
  marquee?: boolean; // shown in the homepage teaser
}

export const milestones: Milestone[] = [
  {
    year: "1986",
    title: "SAHARA is founded",
    description:
      "SAHARA began its work to serve poor, underprivileged and vulnerable communities in Telangana, founded by Narsing Rao Ramagiri.",
    source: "Client-confirmed",
    marquee: true,
  },
  {
    year: "1990",
    title: "Cyclone relief",
    description:
      "Collected old clothes and essential commodities and distributed them to cyclone-affected victims of Krishna and East Godavari districts.",
    source: "Client 30-Year Journey infographics",
    needsVerification: true,
    marquee: true,
  },
  {
    year: "1992",
    title: "Free eye camps for leprosy patients",
    description:
      "Supported the Government Leprosy Control Unit of Medak district in organising free eye camps for leprosy patients.",
    source: "Client 30-Year Journey infographics",
    needsVerification: true,
  },
  {
    year: "1996",
    title: "Formation of Self Help Groups",
    description:
      "Encouraged women in eight villages of Boinpalli Mandal to establish Self Help Groups and begin thrift and credit activities.",
    source: "Client 30-Year Journey infographics",
  },
  {
    year: "1998",
    title: "Sewing centre established",
    description:
      "Started a sewing centre at Vilasagar village, Karimnagar district, providing tailoring training to local women.",
    image: "/assets/programs/P18_women_sewing_vidya.jpg",
    source: "Client 30-Year Journey infographics",
    needsVerification: true,
  },
  {
    year: "2001",
    title: "Prevention of blindness among children",
    description:
      "Awareness programmes to prevent blindness caused by Vitamin A deficiency, with capsules distributed to children under six.",
    source: "Client 30-Year Journey infographics",
  },
  {
    year: "2003",
    title: "Beedi-rolling women project",
    description:
      "A socio-economic development project for beedi-rolling women, implemented in 10 villages of Tadwai Mandal, Nizamabad district.",
    image: "/assets/timeline/P33_vardavalli_hist.jpg",
    duotone: true,
    source: "Client 30-Year Journey infographics",
    marquee: true,
  },
  {
    year: "2008",
    title: "Adoption of elders",
    description:
      "Adopted destitute elderly individuals in Karimnagar district and Hyderabad slums, providing regular monthly support.",
    source: "Client 30-Year Journey infographics",
  },
  {
    year: "2009",
    title: "Rainwater recharge & recycling units",
    description:
      "Model rainwater recycling units constructed in villages, with awareness created among students, parents and youth.",
    image: "/assets/timeline/P26_rainwater_unit.jpg",
    source: "Client 30-Year Journey infographics",
  },
  {
    year: "2010",
    title: "“Grow More Trees” campaign",
    description:
      "Tree plantation under the Grow More Trees campaign, with saplings planted in school compounds with students, youth and elderly.",
    image: "/assets/programs/P24_tree_plantation.jpg",
    source: "Client 30-Year Journey infographics",
    marquee: true,
  },
  {
    year: "2011",
    title: "Health camps for the aged & children",
    description: "Health camps organised in Amberpet slum areas, with regular check-ups for sponsored children and adopted elders.",
    source: "Client 30-Year Journey infographics",
  },
  {
    year: "2013",
    title: "Youth & women training programmes",
    description:
      "Beauty-culture, computer and spoken-English training for young women and school dropouts, with placement support and counselling.",
    source: "Client 30-Year Journey infographics",
  },
  {
    year: "2015",
    title: "Solar lights promotion",
    description:
      "Promoted solar lamps and home lighting systems in rural and urban areas, demonstrating utility and power savings to women's groups.",
    source: "Client 30-Year Journey infographics",
  },
  {
    year: "2018",
    title: "Kerala flood relief",
    description: "SAHARA provided relief assistance to Kerala flood victims, in collaboration with local volunteers and Self Help Group members.",
    image: "/assets/timeline/P17_elderly_covid_group.jpg",
    source: "Client 30-Year Journey infographics",
    marquee: true,
  },
  {
    year: "2020",
    title: "COVID-19 relief",
    description:
      "From March 2020, SAHARA distributed ration kits, essential items, sanitisers and masks, and educated communities on safe hygiene practices.",
    image: "/assets/timeline/P17_elderly_covid_group.jpg",
    duotone: true,
    source: "Client 30-Year Journey infographics (horizontal)",
    marquee: true,
  },
  {
    year: "2021",
    title: "Menstrual health & hygiene",
    description:
      "Distributed sanitary essentials to young women from weaker-section families, promoting health-seeking behaviour and menstrual hygiene.",
    source: "Client 30-Year Journey infographics",
  },
  {
    year: "2023",
    title: "37th foundation-day celebration",
    description:
      "SAHARA's foundation-day event included the distribution of nutrition and hygiene kits to poor and lonely elderly members of the community.",
    source: "Press coverage (Nava Telangana, 31 Dec 2023)",
    needsVerification: true,
  },
];

export const earlierYearsCluster = {
  label: "Earlier years / foundations (approximate)",
  items: [
    "Support in establishing an orphanage in Medak district for orphan and handicapped children.",
    "Residential schools for marginalised children established at Vardavelli village.",
  ],
};
