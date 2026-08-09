import { Button } from "@/components/Button";
import { Chip } from "@/components/Chip";
import { org, registration } from "@/data/site";
import { mission } from "@/data/site";

export function IdentityTrust() {
  return (
    <section className="py-14 sm:py-16 bg-brand-green-050">
      <div className="container-page grid lg:grid-cols-[2fr_1fr] gap-8 items-center">
        <div>
          <p className="eyebrow mb-2">Who we are</p>
          <p className="text-lg sm:text-xl text-ink leading-relaxed max-w-2xl">
            {org.name} is a grassroots voluntary organisation serving underprivileged and vulnerable
            communities across Telangana, through an integrated, community-based approach — founded and
            registered in {org.foundedYear}.
          </p>
          <p className="mt-3 text-ink-muted max-w-2xl">{mission}</p>
          <Button to="/about" variant="ghost" className="mt-4 !px-0">
            About SAHARA →
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 lg:justify-end">
          <Chip>{registration.society}</Chip>
          <Chip>{registration.eightyG}</Chip>
          <Chip>{registration.twelveA}</Chip>
        </div>
      </div>
    </section>
  );
}
