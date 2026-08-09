import { Seo } from "@/components/Seo";
import { pressItems } from "@/data/press";
import { Picture } from "@/components/Picture";
import { Chip } from "@/components/Chip";
import { contact } from "@/data/site";

export function News() {
  return (
    <>
      <Seo title="News & Media — SAHARA in the Press" description="Press coverage and media mentions of SAHARA's work." path="/news" />

      <section className="bg-brand-forest text-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-marigold mb-2">News &amp; media</p>
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">SAHARA in the news</h1>
          <p className="text-cream/85 text-lg">
            Coverage of SAHARA's work, reproduced from the clippings supplied to us.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 gap-8 mb-14">
            {pressItems.map((p) => (
              <article key={p.id} className="card overflow-hidden flex flex-col sm:flex-row">
                <Picture src={p.image} alt={`Newspaper clipping: ${p.outlet}, ${p.headline}`} className="w-full sm:w-48 h-56 sm:h-auto object-cover" />
                <div className="p-5 flex-1">
                  <p className="text-xs font-semibold text-terracotta uppercase tracking-wide mb-1">{p.outlet}</p>
                  <h2 className="text-lg mb-2 leading-snug">{p.headline}</h2>
                  <p className="text-sm text-ink-muted mb-3">{p.summary}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Chip>{p.date}</Chip>
                    {p.status === "date-unconfirmed" && <Chip variant="verify">Date needs verification</Chip>}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="card p-6 max-w-2xl">
            <h2 className="text-lg mb-2">Media enquiries</h2>
            <p className="text-sm text-ink-muted mb-3">
              For interviews, statements or further information, please contact SAHARA directly.
            </p>
            <a href={`mailto:${contact.email}`} className="text-brand-forest font-semibold">
              {contact.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
