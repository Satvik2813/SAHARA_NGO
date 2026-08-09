import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { stories } from "@/data/stories";
import { Picture } from "@/components/Picture";

const historicalAchievements = [
  "Support in establishing an orphanage in Medak district for orphan and handicapped children.",
  "Sewing centres providing tailoring training to women in Karimnagar district.",
  "Rainwater recharge and recycling units constructed across multiple villages.",
  "Free eye camps organised with the Government Leprosy Control Unit of Medak district.",
  "Vitamin-A distribution and blindness-prevention awareness reaching children under six.",
  "Kerala flood relief and COVID-19 ration/hygiene-kit distribution during crises.",
];

export function Impact() {
  return (
    <>
      <Seo title="Our Impact — SAHARA" description="The reach of SAHARA's work across education, health, livelihoods and the environment." path="/impact" />

      <section className="bg-brand-forest text-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-marigold mb-2">Impact</p>
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">Reach, rooted in community</h1>
          <p className="text-cream/85 text-lg">
            SAHARA has worked across education, healthcare, livelihood development, women's empowerment
            and environmental protection since 1986. We believe in presenting our impact honestly.
          </p>
        </div>
      </section>

      <section className="py-14 bg-marigold/10 border-b border-marigold/30">
        <div className="container-page max-w-3xl text-center">
          <Chip variant="verify" className="mb-3">
            A note on our numbers
          </Chip>
          <p className="text-ink">
            Current, verified impact statistics were not available for publication at this time. Rather
            than estimate a figure, we are choosing not to display one. The achievements below are drawn
            from SAHARA's documented history and annual reports, and are presented as historical record —
            not as current totals.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page">
          <SectionHeader eyebrow="Historical record" title="What our history shows" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {historicalAchievements.map((a) => (
              <div key={a} className="card p-5 text-sm text-ink-muted">
                {a}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button to="/journey" variant="secondary">
              See the full journey
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-paper">
        <div className="container-page">
          <SectionHeader eyebrow="Where we work" title="Rooted in Hyderabad, active across Telangana" />
          <p className="text-ink-muted max-w-2xl mb-6">
            SAHARA's current work is centred on Hyderabad, Rangareddy, Karimnagar and Nizamabad districts,
            with a broader historical footprint across Telangana including Adilabad, Mahabubnagar and
            Nalgonda.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Hyderabad", "Rangareddy", "Karimnagar", "Nizamabad"].map((d) => (
              <Chip key={d}>{d}</Chip>
            ))}
            {["Adilabad", "Mahabubnagar", "Nalgonda"].map((d) => (
              <Chip key={d} variant="verify">
                {d} (historical)
              </Chip>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-brand-green-050">
        <div className="container-page">
          <SectionHeader eyebrow="Evidence in stories" title="Proof, in people" />
          <div className="grid sm:grid-cols-3 gap-6">
            {stories.slice(0, 3).map((s) => (
              <div key={s.slug} className="card overflow-hidden">
                <Picture src={s.image} alt="" className="w-full aspect-[4/3] object-cover" />
                <div className="p-4">
                  <h3 className="text-base mb-1">{s.title}</h3>
                  <p className="text-sm text-ink-muted">{s.teaser}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
