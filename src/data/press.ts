/**
 * Sourced from /audit/press-coverage.md — client-supplied press assets only.
 * No web research performed. Unreadable/undated fields left explicitly unknown.
 */

export interface PressItem {
  id: string;
  outlet: string;
  date: string; // "date not confirmed" where unreadable
  headline: string;
  summary: string;
  image: string;
  status: "confirmed-date" | "date-unconfirmed";
}

export const pressItems: PressItem[] = [
  {
    id: "PR01",
    outlet: "Nava Telangana",
    date: "31 December 2023",
    headline: "SAHARA voluntary organisation's foundation-day celebrations",
    summary:
      "Coverage of SAHARA's foundation-day celebrations, including distribution of nutrition and hygiene kits to poor and lonely elderly members of the community.",
    image: "/assets/press/PR01_navatelangana_foundationday.jpg",
    status: "confirmed-date",
  },
  {
    id: "PR02",
    outlet: "Metroudayam",
    date: "27 May (year not printed on clipping)",
    headline: "Gundrathi Sharada visited Sahara, which supports the elderly",
    summary:
      "Coverage of a visit by a State Women President of the BC Welfare Association to SAHARA's Amberpet centre, distributing essential items to elderly residents.",
    image: "/assets/press/PR02_metroudayam_visit.jpg",
    status: "date-unconfirmed",
  },
  {
    id: "PR03",
    outlet: "Nava Telangana (Amberpet local)",
    date: "Date not printed on clipping",
    headline: "Prizes awarded to painting-competition winners",
    summary:
      "Coverage of a drawing and painting competition for students on the theme of supporting the elderly, held in partnership with a local school.",
    image: "/assets/press/PR03_painting_prizes.jpg",
    status: "date-unconfirmed",
  },
  {
    id: "PR04",
    outlet: "Nava Telangana (Amberpet local)",
    date: "29 April 2023",
    headline: "Summer training classes",
    summary:
      "Coverage of SAHARA's summer skill-training camp at its Tirumalanagar centre, covering beautician, tailoring, computer basics and spoken-English courses.",
    image: "/assets/press/PR04_summer_training.jpg",
    status: "confirmed-date",
  },
];
