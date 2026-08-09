import { Seo } from "@/components/Seo";
import { milestones, earlierYearsCluster } from "@/data/timeline";
import { TimelineItem } from "@/components/TimelineItem";
import { Chip } from "@/components/Chip";

export function Journey() {
  return (
    <>
      <Seo title="Our Journey — SAHARA's Timeline" description="Milestones in SAHARA's decades of grassroots service in Telangana." />

      <section className="bg-brand-forest text-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-marigold mb-2">Our journey</p>
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">Nearly four decades of service</h1>
          <p className="text-cream/85 text-lg">
            SAHARA's history, told through the milestones we have on record. No years are invented —
            where our confidence in a date or detail is lower, it's marked.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page">
          <div className="card p-5 mb-12 max-w-2xl mx-auto flex items-start gap-3">
            <Chip variant="verify">Earlier years</Chip>
            <div>
              <p className="text-sm text-ink-muted">{earlierYearsCluster.label}:</p>
              <ul className="text-sm text-ink-muted list-disc list-inside mt-1">
                {earlierYearsCluster.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-line" />
            <div className="space-y-10 lg:space-y-14">
              {milestones.map((m, i) => (
                <TimelineItem key={m.year + m.title} milestone={m} side={i % 2 === 0 ? "left" : "right"} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
