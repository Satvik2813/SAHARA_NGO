import { useEffect, useRef, useState } from "react";
import { heroSlides } from "@/data/heroSlides";
import { cn } from "@/utils/cn";
import { PauseIcon, PlayIcon } from "@/components/icons";

const INTERVAL_MS = 6000;

/**
 * Crossfading hero background. Auto-advances slowly (opacity only, per
 * /design/motion-design.md); a single small control lets visitors pause it,
 * and it never auto-advances under prefers-reduced-motion (WCAG 2.2.2).
 */
export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const prefersReducedMotion = useRef(false);
  const paused = userPaused || tabHidden;

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  useEffect(() => {
    if (prefersReducedMotion.current || paused || heroSlides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const onVisibility = () => setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  return (
    <>
      <div className="absolute inset-0">
        {heroSlides.map((slide, i) => (
          <picture key={slide.id}>
            <source srcSet={slide.webp} type="image/webp" />
            <img
              src={slide.jpg}
              alt={slide.alt}
              className={cn(
                "absolute inset-0 h-full w-full transition-opacity duration-[1400ms] ease-in-out",
                slide.fit === "contain"
                  ? "object-contain bg-brand-forest"
                  : cn("object-cover", slide.focus ?? "object-center"),
                i === index ? "opacity-100" : "opacity-0"
              )}
              loading={i === 0 ? "eager" : "lazy"}
              fetchpriority={i === 0 ? "high" : "low"}
            />
          </picture>
        ))}
      </div>

      {heroSlides.length > 1 && (
        <div className="absolute bottom-5 right-4 z-10 flex items-center gap-3 sm:right-6 lg:bottom-8">
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            className="rounded-full bg-black/30 p-1.5 text-cream/90 backdrop-blur-sm transition duration-base hover:bg-black/45"
            aria-label={userPaused ? "Play hero slideshow" : "Pause hero slideshow"}
          >
            {userPaused ? <PlayIcon className="h-4 w-4" /> : <PauseIcon className="h-4 w-4" />}
          </button>
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero slides">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show slide ${i + 1} of ${heroSlides.length}: ${slide.alt}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-base",
                  i === index ? "w-5 bg-cream" : "w-1.5 bg-cream/50 hover:bg-cream/75"
                )}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
