import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver-based "reveal once on scroll into view" hook, per
 * /design/motion-design.md. Returns a ref to attach and whether the element
 * has become visible. No-ops (always "visible") when the user prefers
 * reduced motion, or when IntersectionObserver isn't available.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [visible, setVisible] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion || visible) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);

    // Safety net: some environments suspend IntersectionObserver callbacks
    // (backgrounded tabs, certain privacy tools). Never leave content
    // permanently invisible -- reveal anyway after a short delay if the
    // observer hasn't fired.
    const fallback = window.setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, visible };
}
