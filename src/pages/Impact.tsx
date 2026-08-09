import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { stories } from "@/data/stories";
import { Picture } from "@/components/Picture";

const historicalAchievements = [
  "Supported more than 1,500 girl children to continue school education.",
  "Mainstreamed 600 beedi-rolling girl children after a bridge course.",
  "Provided joyful education to 246 children and made Boinpalli Mandal of Karimnagar District a child-labour-free mandal.",
  "Promoted children's clubs in 13 villages covering 1,355 children in one mandal.",
  "Developed an NGO network covering 511 organisations in Andhra Pradesh.",
  "Conducted project management workshops for 65 NGOs and strengthened youth clubs covering 3,715 youth.",
  "Organised aged care awareness events in 157 schools with 89,685 children, reaching a population of nearly 1,275,000.",
  "Generated awareness on HIV/AIDS covering a population of 150,000 in two districts.",
  "Provided 41 handpumps in drought-prone villages in Karimnagar district and planted around 50,155 saplings in drought-prone areas.",
  "Promoted sustainable agriculture in two districts covering 25,000 farmers.",
  "Promoted 610 Self-Help Groups with 11,123 women members.",
  "Provided skill development and vocational training to improve employability potential for 2,355 youth.",
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
          <Chip className="mb-3">
            Cumulative Impact
          </Chip>
          <p className="text-ink text-lg">
            Since 1986, SAHARA has touched thousands of lives across the region. 
            The achievements below reflect our cumulative impact over decades of dedicated service to the community.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page">
          <SectionHeader eyebrow="By the numbers" title="A lifetime of impact" />
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
