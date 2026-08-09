/**
 * Photo/story permission is confirmed [Client-confirmed]. Even so, personal
 * details are kept minimal and no identity is invented — per
 * /blueprint/story-architecture.md. Names below are illustrative categories,
 * not claims about a specific named individual, unless the source documents
 * that link explicitly.
 */

export interface Story {
  slug: string;
  category: "Women's Livelihoods" | "Children & Education" | "Elderly Dignity" | "Crisis Response";
  title: string;
  teaser: string;
  body: string;
  image: string;
}

export const stories: Story[] = [
  {
    slug: "from-training-to-earning",
    category: "Women's Livelihoods",
    title: "From training to earning",
    teaser: "A tailoring course became a path to independent income.",
    body:
      "Through SAHARA's tailoring and vocational training programme, women from vulnerable communities have learned skills such as tailoring, fashion design and beautician work. For many, this training became a source of independent income and the first step toward financial self-reliance.",
    image: "/assets/hero/P02_hero_women_sewing.jpg",
  },
  {
    slug: "paying-it-back",
    category: "Children & Education",
    title: "Paying it back",
    teaser: "Former beneficiaries now support the next generation of students.",
    body:
      "Some of the female students SAHARA supported years ago are now settled in life with their own families. Keen to pay it forward, several have come back to support current children through SAHARA's education programmes — an approach the organisation is proud to see continue.",
    image: "/assets/programs/P09_children_tablet_class.jpg",
  },
  {
    slug: "care-that-stays-in-community",
    category: "Elderly Dignity",
    title: "Care that stays in the community",
    teaser: "Elderly support designed around dignity, not institutionalisation.",
    body:
      "SAHARA's approach to elderly care favours community-based support — regular provisions, healthcare access and companionship — over institutional care, so that elders can remain within the neighbourhoods and relationships they know.",
    image: "/assets/stories/P13_intergenerational.jpg",
  },
  {
    slug: "responding-to-crisis",
    category: "Crisis Response",
    title: "Responding when it matters most",
    teaser: "From cyclone relief to flood response, SAHARA has stepped in during crises.",
    body:
      "Across its history, SAHARA has organised relief efforts during major crises — from cyclone relief in 1990, to flood relief support after the 2018 Kerala floods, to ration and hygiene-kit distribution during the COVID-19 pandemic from March 2020.",
    image: "/assets/timeline/P17_elderly_covid_group.jpg",
  },
];
