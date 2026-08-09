import { Button } from "@/components/Button";
import { org } from "@/data/site";

export function DonateBand() {
  return (
    <section className="py-16 sm:py-20 bg-terracotta text-white">
      <div className="container-page text-center max-w-2xl mx-auto">
        <p className="eyebrow text-cream/90 mb-2">{org.tagline}</p>
        <h2 className="text-3xl sm:text-4xl text-white mb-4">Extend a helping hand</h2>
        <p className="text-white/90 mb-8">
          Every rupee reaches a child, a woman, a young person or an elder who needs it. Donations are
          intended to be 80G tax-exempt in India.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button to="/donate" className="!bg-white !text-terracotta hover:!bg-cream">
            Donate now
          </Button>
          <Button to="/donate#sponsor-child" variant="outline-light">
            Sponsor a child
          </Button>
          <Button to="/donate#adopt-elder" variant="outline-light">
            Adopt an elder
          </Button>
        </div>
      </div>
    </section>
  );
}
