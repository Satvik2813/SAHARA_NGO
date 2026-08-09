/**
 * Site-wide facts. Every value here traces to /audit/client-confirmed-information.md
 * (client-confirmed) or /audit/Writeup.txt (verbatim mission/vision).
 * Do not add facts that are not backed by that source of truth.
 */

export const org = {
  name: "SAHARA",
  tagline: "HELP POOR AND INDEED PEOPLE", // [Client-confirmed] verbatim
  heroHeadline: "Extending a Helping Hand. Creating a Better Tomorrow.", // [Client Writeup]
  foundedYear: "1986", // [Client-confirmed]
  registeredYear: "1986", // [Client-confirmed]
  founderName: "Narsing Rao Ramagirri", // [Client-confirmed] — displayable
  founderNote:
    "Founder member of SAHARA. Details beyond name and founding role were not confirmed for public display.",
};

export const mission =
  "To serve poor and needy communities, especially youth in rural areas and urban slums, and help them build a better and more secure future. We work to empower women, support the elderly, improve education for disadvantaged children, promote health and hygiene, strengthen communities and protect our environment.";

export const vision =
  "A society where every child can learn, every woman can become independent, every elderly person can live with dignity, and every community has the opportunity to grow sustainably.";

export const approach = [
  {
    title: "Listen",
    text: "We understand the needs of communities and identify the challenges affecting their everyday lives.",
  },
  {
    title: "Empower",
    text: "We focus on education, skills, health and livelihood opportunities that help people become more independent.",
  },
  {
    title: "Sustain",
    text: "We promote solutions that create long-term social, economic and environmental impact.",
  },
];

export const contact = {
  phone: "9440483089", // [Client-confirmed]
  phoneDisplay: "+91 94404 83089",
  secondaryPhone: "+91-40-27407952", // [Client-approved image] secondary
  email: "sahara_ngo@rediffmail.com", // [Client-confirmed]
  secondaryEmail: "saharangohyderabad@gmail.com", // [Client-approved image] secondary
  addressLines: ["911, Tirumalanagar, Amberpet", "Hyderabad - 500013", "Telangana, India"], // [Client-confirmed]
  website: "www.saharangots.org", // [Client-approved image]
};

export const socials = [
  { name: "Facebook", url: "https://www.facebook.com/sahara.ngo.3" },
  { name: "Instagram", url: "https://www.instagram.com/sahara_ngo" },
  { name: "X (Twitter)", url: "https://x.com/SAHARANGO" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/sahara-ngo-ab9b6360/" },
]; // [Client-confirmed] — exact links

export const registration = {
  society: "Registered Society", // [Client-confirmed framing]
  eightyG: "80G",
  twelveA: "12A",
  note: "Donations to SAHARA are intended to be tax-exempt in India under 80G of the Income Tax Act. Current certificate validity to be confirmed.", // [Verify]
  // FCRA is intentionally NOT represented anywhere in this codebase — client instruction.
};
