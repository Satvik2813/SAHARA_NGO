import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { Chip } from "@/components/Chip";
import { Button } from "@/components/Button";
import { Picture } from "@/components/Picture";
import { org, mission, vision, approach, registration } from "@/data/site";

export function About() {
  return (
    <>
      <Seo
        title="About SAHARA — Our Story & Mission"
        description="How SAHARA began, our mission and approach, leadership, and registration information."
        path="/about"
      />

      <section className="bg-brand-forest text-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-marigold mb-2">About us</p>
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">Our story</h1>
          <p className="text-cream/85 text-lg">
            {org.name} began in {org.foundedYear} to serve poor, underprivileged and vulnerable communities
            in Telangana — a belief that every individual deserves the opportunity to live with dignity,
            hope and independence.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page grid lg:grid-cols-[1.2fr_1fr] gap-12">
          <div className="prose-measure">
            <h2 className="text-2xl sm:text-3xl mb-4">A grassroots approach</h2>
            <p className="text-ink-muted mb-4">
              {org.name} is a grassroots voluntary organisation working with an integrated,
              community-based approach — we cannot separate a child, a mother or an elder from their
              family and community in order to help them.
            </p>
            <p className="text-ink-muted mb-8">
              Founded and registered in {org.foundedYear} by {org.founderName}, {org.name} has grown into
              programmes spanning children's education, elderly care, women's empowerment, youth skill
              development, environmental sustainability and health &amp; hygiene.
            </p>

            <h3 className="text-xl mb-3">Mission</h3>
            <blockquote className="border-l-4 border-brand-green pl-4 italic text-ink mb-8">{mission}</blockquote>

            <h3 className="text-xl mb-3">Vision</h3>
            <blockquote className="border-l-4 border-terracotta pl-4 italic text-ink mb-8">{vision}</blockquote>

            <h3 className="text-xl mb-4">Our approach</h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {approach.map((a) => (
                <div key={a.title} className="card p-5">
                  <p className="font-display text-brand-forest text-lg mb-2">{a.title}</p>
                  <p className="text-sm text-ink-muted">{a.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Picture
              src="/assets/timeline/P32_childrens_club_hist.jpg"
              alt="A SAHARA community gathering"
              duotone
              className="w-full aspect-[4/3] object-cover rounded-md"
            />

            <div className="card p-6">
              <h3 className="text-lg mb-3">Leadership</h3>
              <p className="text-sm text-ink-muted mb-2">
                <span className="font-semibold text-ink">{org.founderName}</span> — Founder Member
              </p>
              <p className="text-xs text-ink-muted">{org.founderNote}</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Registration &amp; legal status</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <Chip>{registration.society}</Chip>
                <Chip>{registration.eightyG}</Chip>
                <Chip>{registration.twelveA}</Chip>
              </div>
              <p className="text-xs text-ink-muted">{registration.note}</p>
            </div>

            <div className="card p-6">
              <h3 className="text-lg mb-3">Recognition</h3>
              <p className="text-sm text-ink-muted">
                SAHARA has been recognised for its contribution to community development. Award details
                are being confirmed for accurate public display.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-brand-green-050">
        <div className="container-page">
          <SectionHeader
            eyebrow="Governance"
            title="Accountable by design"
            intro="SAHARA's governing board serves without remuneration, and annual reports have been published since 2013."
            action={
              <Button to="/transparency" variant="secondary">
                Reports &amp; transparency
              </Button>
            }
          />
        </div>
      </section>
    </>
  );
}
