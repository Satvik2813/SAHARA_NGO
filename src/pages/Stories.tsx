import { useState } from "react";
import { Seo } from "@/components/Seo";
import { stories, type Story } from "@/data/stories";
import { Picture } from "@/components/Picture";
import { Chip } from "@/components/Chip";
import { Button } from "@/components/Button";
import { cn } from "@/utils/cn";

const categories: Array<Story["category"] | "All"> = [
  "All",
  "Women's Livelihoods",
  "Children & Education",
  "Elderly Dignity",
  "Crisis Response",
];

export function Stories() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? stories : stories.filter((s) => s.category === filter);

  return (
    <>
      <Seo title="Stories of Change — SAHARA" description="Real, privacy-conscious stories of the people SAHARA has supported." path="/stories" />

      <section className="bg-brand-forest text-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-marigold mb-2">Stories</p>
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">Stories of change</h1>
          <p className="text-cream/85 text-lg">
            Real outcomes from SAHARA's programmes, told with care. Personal details are kept minimal by
            design, even where permission to share a story has been given.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter stories by category">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "chip transition duration-fast",
                  filter === c ? "bg-brand-forest text-cream border-brand-forest" : "hover:bg-brand-green-200"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {filtered.map((s) => (
              <article key={s.slug} className="card overflow-hidden flex flex-col">
                <Picture src={s.image} alt="" className="w-full aspect-[4/5] object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <Chip className="self-start mb-3">{s.category}</Chip>
                  <h2 className="text-xl mb-2">{s.title}</h2>
                  <p className="text-sm text-ink-muted mb-4 flex-1">{s.body}</p>
                  <Button to="/donate" variant="secondary" className="self-start">
                    Support this work
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
