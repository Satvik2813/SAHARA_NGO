import { Seo } from "@/components/Seo";
import { Button } from "@/components/Button";
import { BookIcon, HeartIcon, ScissorsIcon, LaptopIcon, LeafIcon } from "@/components/icons";

const options = [
  {
    icon: HeartIcon,
    title: "Donate",
    text: "Support SAHARA's programmes through a one-time or recurring gift — every rupee reaches a real person.",
    cta: "Donate now",
    to: "/donate",
  },
  {
    icon: BookIcon,
    title: "Sponsor a Child",
    text: "Support a child's education, nutrition and essentials so they can stay in school.",
    cta: "Sponsor a child",
    to: "/donate#sponsor-child",
  },
  {
    icon: HeartIcon,
    title: "Adopt an Elder",
    text: "Provide monthly sustenance and dignity to a destitute elder within their own community.",
    cta: "Adopt an elder",
    to: "/donate#adopt-elder",
  },
  {
    icon: LaptopIcon,
    title: "Volunteer & Interns",
    text: "Students from institutions including TISS, Christ University, Presidency University and the University of Oslo have interned with SAHARA.",
    cta: "Get in touch",
    to: "/contact",
  },
  {
    icon: ScissorsIcon,
    title: "Partner with Us",
    text: "Corporates, foundations, schools and community organisations can partner with SAHARA on CSR and joint programmes.",
    cta: "Discuss a partnership",
    to: "/contact",
  },
  {
    icon: LeafIcon,
    title: "Donate in Kind",
    text: "Notebooks, clothes, and household essentials help sustain SAHARA's children's and elderly-care programmes. Current logistics are being confirmed.",
    cta: "Ask how to help",
    to: "/contact",
  },
];

export function GetInvolved() {
  return (
    <>
      <Seo title="Get Involved — Donate, Sponsor, Volunteer" description="Donate, sponsor a child, adopt an elder, volunteer or partner with SAHARA." path="/get-involved" />

      <section className="bg-brand-forest text-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-marigold mb-2">Get involved</p>
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">Every helping hand matters</h1>
          <p className="text-cream/85 text-lg">
            Whether it's a donation, your time, or a partnership — there are many ways to support SAHARA's work.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((o) => (
            <div key={o.title} className="card p-6 flex flex-col">
              <o.icon className="h-8 w-8 text-brand-green mb-3" />
              <h2 className="text-lg mb-2">{o.title}</h2>
              <p className="text-sm text-ink-muted mb-5 flex-1">{o.text}</p>
              <Button to={o.to} variant="secondary" className="self-start">
                {o.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
