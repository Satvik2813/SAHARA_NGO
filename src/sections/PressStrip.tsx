import { pressItems } from "@/data/press";
import { Picture } from "@/components/Picture";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

export function PressStrip() {
  const featured = pressItems.slice(0, 3);
  return (
    <section className="py-16 sm:py-20 bg-paper">
      <div className="container-page">
        <SectionHeader
          eyebrow="Recognition"
          title="SAHARA in the news"
          action={
            <Button to="/news" variant="ghost">
              In the news →
            </Button>
          }
        />
        <div className="grid sm:grid-cols-3 gap-6">
          {featured.map((p) => (
            <article key={p.id} className="card overflow-hidden">
              <Picture src={p.image} alt={`Newspaper clipping: ${p.outlet}`} className="w-full aspect-[4/3] object-cover" />
              <div className="p-4">
                <p className="text-xs font-semibold text-terracotta uppercase tracking-wide">{p.outlet}</p>
                <h3 className="text-base mt-1 leading-snug">{p.headline}</h3>
                <p className="text-xs text-ink-muted mt-2">{p.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
