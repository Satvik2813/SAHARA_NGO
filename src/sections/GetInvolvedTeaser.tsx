import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { BookIcon, ScissorsIcon, HeartIcon } from "@/components/icons";

const options = [
  {
    icon: BookIcon,
    title: "Volunteer & Interns",
    text: "Students from institutions including TISS, Christ University and the University of Oslo have interned with SAHARA.",
  },
  {
    icon: ScissorsIcon,
    title: "Partner with us",
    text: "Corporates, foundations and community organisations can partner with SAHARA on CSR and joint programmes.",
  },
  {
    icon: HeartIcon,
    title: "Donate in kind",
    text: "Notebooks, clothes, and household essentials help sustain our children's and elderly-care programmes.",
  },
];

export function GetInvolvedTeaser() {
  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="container-page">
        <SectionHeader
          eyebrow="Beyond giving"
          title="Get involved"
          action={
            <Button to="/get-involved" variant="ghost">
              All ways to help →
            </Button>
          }
        />
        <div className="grid sm:grid-cols-3 gap-6">
          {options.map((o) => (
            <div key={o.title} className="card p-6">
              <o.icon className="h-8 w-8 text-brand-green mb-3" />
              <h3 className="text-lg mb-2">{o.title}</h3>
              <p className="text-sm text-ink-muted">{o.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
