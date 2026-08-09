import { Seo } from "@/components/Seo";
import { Picture } from "@/components/Picture";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { programs, historicalPrograms } from "@/data/programs";
import { BookIcon, HeartIcon, ScissorsIcon, LaptopIcon, LeafIcon, CrossIcon } from "@/components/icons";

const iconMap = {
  book: BookIcon,
  heart: HeartIcon,
  scissors: ScissorsIcon,
  laptop: LaptopIcon,
  leaf: LeafIcon,
  cross: CrossIcon,
};

export function OurWork() {
  return (
    <>
      <Seo
        title="Our Programs — Education, Elderly, Women, Environment"
        description="SAHARA's six program areas supporting disadvantaged children, elders, women, youth, health and the environment."
        path="/our-work"
      />

      <section className="bg-brand-forest text-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-marigold mb-2">Our work</p>
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">Six areas of grassroots work</h1>
          <p className="text-cream/85 text-lg">
            Every SAHARA programme follows the same principle: listen to what a community needs, then
            build support around the whole person — not just one problem.
          </p>
        </div>
      </section>

      {/* Sticky program picker */}
      <nav aria-label="Programs" className="sticky top-[64px] lg:top-[72px] z-30 bg-cream/95 backdrop-blur border-b border-line">
        <div className="container-page flex gap-2 overflow-x-auto py-3">
          {programs.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="chip whitespace-nowrap hover:bg-brand-green-200"
            >
              {p.name}
            </a>
          ))}
        </div>
      </nav>

      <div>
        {programs.map((p, i) => {
          const Icon = iconMap[p.icon];
          const reversed = i % 2 === 1;
          return (
            <section
              key={p.slug}
              id={p.slug}
              className={`scroll-mt-32 py-14 sm:py-16 ${i % 2 === 0 ? "bg-cream" : "bg-paper"}`}
            >
              <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
                <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                  <Picture src={p.image} alt={p.promise} className="w-full aspect-[3/2] object-cover rounded-md" />
                </div>
                <div className={reversed ? "lg:order-1" : "lg:order-2"}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="grid place-items-center h-10 w-10 rounded-md bg-brand-green-050 text-brand-forest">
                      <Icon className="h-5 w-5" />
                    </span>
                    <Chip>{p.status === "current" ? "Current programme" : "Historical"}</Chip>
                  </div>
                  <h2 className="text-2xl sm:text-3xl mb-3">{p.name}</h2>
                  <p className="text-ink-muted mb-4">{p.description}</p>
                  {p.statusNote && <p className="text-xs text-ink-muted italic mb-4">{p.statusNote}</p>}
                  <Button to={p.ctaTo} variant="primary">
                    {p.cta}
                  </Button>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="py-16 bg-brand-green-050">
        <div className="container-page">
          <p className="eyebrow mb-2">Our wider history</p>
          <h2 className="text-2xl sm:text-3xl mb-2">Programmes from SAHARA's history</h2>
          <p className="text-ink-muted mb-8 max-w-2xl">
            These initiatives are documented in SAHARA's history but are not confirmed as currently
            active — shown here as part of our story, not as ongoing programmes.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {historicalPrograms.map((h) => (
              <div key={h.name} className="card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base">{h.name}</h3>
                  <Chip variant="verify">Historical</Chip>
                </div>
                <p className="text-sm text-ink-muted">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
