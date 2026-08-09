import { Button } from "@/components/Button";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { org } from "@/data/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest/90 via-brand-forest/55 to-brand-forest/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/70 via-transparent to-transparent lg:hidden" />
      </div>

      <div className="container-page min-h-[72vh] lg:min-h-[76vh] flex items-end lg:items-center py-14 lg:py-24">
        <div className="max-w-xl text-cream">
          <p className="eyebrow text-marigold mb-3">Since {org.foundedYear}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-cream mb-4">
            Extending a Helping Hand. Creating a Better Tomorrow.
          </h1>
          <p className="text-cream/90 text-lg mb-3 max-w-md">
            For decades, SAHARA has supported poor, underprivileged and vulnerable communities across
            Telangana — children, women, youth and the elderly.
          </p>
          <p className="text-marigold font-semibold text-sm sm:text-base mb-8">{org.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button to="/donate" variant="primary">
              Donate
            </Button>
            <Button to="/our-work" variant="outline-light">
              See our work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
