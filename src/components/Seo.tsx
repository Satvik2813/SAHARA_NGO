import { useEffect } from "react";

const SITE_URL = "https://www.saharangots.org";
const DEFAULT_IMAGE = "/assets/hero/P01_hero_girls_schoolbags.jpg";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  path?: string; // e.g. "/about" -- defaults to current location
  /** Emits the Organization JSON-LD block. Only pass true on one page (Home). */
  organizationSchema?: boolean;
}

/**
 * Minimal, dependency-free per-page <title>/meta manager (avoids pulling in
 * react-helmet for a handful of tags). Sets document title, description,
 * canonical link, Open Graph/Twitter tags, and optionally the Organization
 * JSON-LD block -- all derived only from verified facts in src/data/site.ts.
 */
export function Seo({ title, description, image, path, organizationSchema }: SeoProps) {
  useEffect(() => {
    document.title = title;
    const url = SITE_URL + (path ?? window.location.pathname);
    const img = SITE_URL + (image ?? DEFAULT_IMAGE);

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", img, true);
    setMeta("og:url", url, true);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "SAHARA", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    setCanonical(url);
    setJsonLd(organizationSchema ? organizationJsonLd() : null);
  }, [title, description, image, path, organizationSchema]);

  return null;
}

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(url: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

const JSONLD_ID = "org-jsonld";

function setJsonLd(data: object | null) {
  const existing = document.getElementById(JSONLD_ID);
  if (!data) {
    existing?.remove();
    return;
  }
  const script = existing ?? document.createElement("script");
  script.id = JSONLD_ID;
  (script as HTMLScriptElement).type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(script);
}

function organizationJsonLd() {
  // Only verified, client-confirmed facts -- no founding date, no
  // registration numbers, no FCRA, no unverified statistics.
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "SAHARA",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/brand/sahara_logo_master.png`,
    description:
      "SAHARA is a grassroots NGO supporting children, women, youth and the elderly across Telangana since 1986.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "911, Tirumalanagar, Amberpet",
      addressLocality: "Hyderabad",
      postalCode: "500013",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    email: "sahara_ngo@rediffmail.com",
    telephone: "+91-9440483089",
    sameAs: [
      "https://www.facebook.com/sahara.ngo.3",
      "https://www.instagram.com/sahara_ngo",
      "https://x.com/SAHARANGO",
      "https://www.linkedin.com/in/sahara-ngo-ab9b6360/",
    ],
  };
}
