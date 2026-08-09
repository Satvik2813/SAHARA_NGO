import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { annualReports, governanceNote } from "@/data/reports";
import { registration } from "@/data/site";
import { Chip } from "@/components/Chip";

export function Transparency() {
  return (
    <>
      <Seo title="Reports & Transparency — SAHARA" description="SAHARA's annual reports, governance and registration details." />

      <section className="bg-brand-forest text-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-marigold mb-2">Transparency</p>
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">Accountable by design</h1>
          <p className="text-cream/85 text-lg">
            SAHARA publishes annual reports and operates with a governing board that serves without
            remuneration.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page">
          <SectionHeader eyebrow="Reports" title="Annual reports" intro={governanceNote} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {annualReports.map((r) => (
              <div key={r.year} className="card p-6 flex flex-col">
                <p className="font-display text-brand-forest text-xl mb-1">{r.year}</p>
                <h3 className="text-base mb-2">{r.title}</h3>
                <p className="text-sm text-ink-muted mb-4 flex-1">{r.highlight}</p>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-terracotta hover:text-terracotta-hover"
                >
                  View report (PDF) →
                </a>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card p-6">
              <h2 className="text-lg mb-3">Governance</h2>
              <p className="text-sm text-ink-muted mb-3">
                SAHARA is governed by a General Body and Executive Committee drawn from social workers,
                doctors, engineers, lawyers and business professionals.
              </p>
              <Chip>Board serves unpaid</Chip>
            </div>

            <div className="card p-6">
              <h2 className="text-lg mb-3">Registration &amp; legal status</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                <Chip>{registration.society}</Chip>
                <Chip>{registration.eightyG}</Chip>
                <Chip>{registration.twelveA}</Chip>
              </div>
              <p className="text-xs text-ink-muted">{registration.note}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
