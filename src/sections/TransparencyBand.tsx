import { annualReports } from "@/data/reports";
import { registration } from "@/data/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Chip } from "@/components/Chip";
import { Button } from "@/components/Button";

const partners = [
  "Concern India Foundation",
  "Deccan Development Society",
  "Give India",
  "Rotary Club of Hyderabad",
  "UNICEF",
  "Sight & Life",
  "Andheri Hilfe",
  "Sitaram Jindal Foundation",
];

export function TransparencyBand() {
  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="container-page">
        <SectionHeader
          eyebrow="Registered & accountable"
          title="Transparency, on the record"
          intro="SAHARA has published annual reports since 2013, and our governing board serves without remuneration."
          action={
            <Button to="/transparency" variant="ghost">
              Reports &amp; transparency →
            </Button>
          }
        />

        <div className="flex flex-wrap gap-2 mb-8">
          <Chip>{registration.society}</Chip>
          <Chip>{registration.eightyG}</Chip>
          <Chip>{registration.twelveA}</Chip>
          <Chip>Board serves unpaid</Chip>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mb-10">
          {annualReports.map((r) => (
            <div key={r.year} className="card p-3 text-center">
              <p className="font-display text-brand-forest text-sm">{r.year}</p>
            </div>
          ))}
        </div>

        <p className="text-sm font-semibold text-ink-muted mb-3">Our partners &amp; supporters</p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-ink-muted text-sm">
          {partners.map((p) => (
            <span key={p}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
