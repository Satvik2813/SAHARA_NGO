import { programs } from "@/data/programs";
import { ProgramCard } from "@/components/ProgramCard";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";

export function ProgramGrid() {
  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="container-page">
        <SectionHeader
          eyebrow="What we do"
          title="Six areas of grassroots work"
          intro="From a child's first school bag to a dignified old age — SAHARA's programmes follow an integrated, community-based approach."
          action={
            <Button to="/our-work" variant="ghost">
              Explore all our work →
            </Button>
          }
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <Reveal key={p.slug} delayMs={i * 60}>
              <ProgramCard program={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
