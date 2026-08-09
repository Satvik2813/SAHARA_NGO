import { milestones } from "@/data/timeline";
import { Button } from "@/components/Button";
import { LeafNodeIcon } from "@/components/icons";
import { Picture } from "@/components/Picture";

export function JourneyTeaser() {
  const marquee = milestones.filter((m) => m.marquee);

  return (
    <section className="py-16 sm:py-20 bg-brand-forest text-cream">
      <div className="container-page">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="eyebrow text-marigold mb-2">Our journey</p>
            <h2 className="text-3xl sm:text-4xl text-cream">Since {marquee[0]?.year}</h2>
          </div>
          <Button to="/journey" variant="outline-light">
            Explore our full journey →
          </Button>
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute left-0 right-0 top-5 h-px bg-cream/25" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-4">
            {marquee.map((m) => (
              <div key={m.year} className="relative">
                <div className="hidden sm:flex h-10 w-10 rounded-full bg-marigold text-brand-forest items-center justify-center mb-3">
                  <LeafNodeIcon className="h-5 w-5" />
                </div>
                {m.image && (
                  <Picture src={m.image} alt="" duotone={m.duotone} className="w-full aspect-[4/3] object-cover rounded-sm mb-2" />
                )}
                <p className="font-display text-marigold text-lg">{m.year}</p>
                <p className="text-cream/85 text-sm leading-snug">{m.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
