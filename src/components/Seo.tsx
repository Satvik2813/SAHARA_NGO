import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
}

/**
 * Minimal, dependency-free per-page <title>/meta manager (avoids pulling in
 * react-helmet for a handful of tags). Sets document title + description +
 * Open Graph tags on mount/update.
 */
export function Seo({ title, description, image }: SeoProps) {
  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    if (image) setMeta("og:image", image, true);
  }, [title, description, image]);

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
