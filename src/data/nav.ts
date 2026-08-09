export interface NavItem {
  label: string;
  to: string;
}

export const primaryNav: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Impact", to: "/impact" },
  { label: "Our Journey", to: "/journey" },
  { label: "Stories", to: "/stories" },
  { label: "Get Involved", to: "/get-involved" },
];

export const moreNav: NavItem[] = [
  { label: "Gallery", to: "/gallery" },
  { label: "News & Media", to: "/news" },
  { label: "Reports & Transparency", to: "/transparency" },
  { label: "Contact", to: "/contact" },
];

export const footerExplore: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Our Work", to: "/our-work" },
  { label: "Our Journey", to: "/journey" },
  { label: "Stories", to: "/stories" },
  { label: "Gallery", to: "/gallery" },
];

export const footerInvolved: NavItem[] = [
  { label: "Donate", to: "/donate" },
  { label: "Sponsor a Child", to: "/donate#sponsor-child" },
  { label: "Adopt an Elder", to: "/donate#adopt-elder" },
  { label: "Volunteer & Partner", to: "/get-involved" },
];

export const footerTrust: NavItem[] = [
  { label: "Reports & Transparency", to: "/transparency" },
  { label: "News & Media", to: "/news" },
  { label: "Contact", to: "/contact" },
];
