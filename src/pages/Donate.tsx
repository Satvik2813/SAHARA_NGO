import { Seo } from "@/components/Seo";
import { SectionHeader } from "@/components/SectionHeader";
import { BankAccountCard } from "@/components/BankAccountCard";
import { CopyField } from "@/components/CopyField";
import { Chip } from "@/components/Chip";
import { Button } from "@/components/Button";
import { bankAccounts, upi, cashDonation, donationPlatforms } from "@/data/donations";
import { contact, registration } from "@/data/site";

const givingOptions = [
  {
    id: "sponsor-child",
    title: "Sponsor a Child",
    text: "Support a child's education, nutrition and essentials. Giving amounts are being finalised with SAHARA and will be published once confirmed.",
  },
  {
    id: "adopt-elder",
    title: "Adopt an Elder",
    text: "Help provide monthly sustenance, healthcare and dignity to a destitute elder within their community. Giving amounts are being finalised with SAHARA and will be published once confirmed.",
  },
  {
    id: "general",
    title: "General Donation",
    text: "Any amount helps sustain SAHARA's programmes across education, elderly care, women's empowerment, youth skills, environment and health.",
  },
];

export function Donate() {
  const indian = bankAccounts.filter((a) => a.type === "Indian");
  const foreign = bankAccounts.filter((a) => a.type === "Overseas");

  return (
    <>
      <Seo title="Donate to SAHARA" description="Support SAHARA's work for the poor and needy in Telangana." path="/donate" />

      <section className="bg-terracotta text-white py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-white/90 mb-2">Donate</p>
          <h1 className="text-4xl sm:text-5xl text-white mb-4">Extend a helping hand</h1>
          <p className="text-white/90 text-lg mb-4">
            Every account below has been confirmed by SAHARA. Please double-check details in your banking
            app before transferring, and reach out if anything looks unclear.
          </p>
          <div className="flex flex-wrap gap-2">
            <Chip className="!bg-white/15 !border-white/30 !text-white">{registration.eightyG}</Chip>
            <Chip className="!bg-white/15 !border-white/30 !text-white">{registration.twelveA}</Chip>
          </div>
        </div>
      </section>

      {/* Choose how to give */}
      <section className="py-14 sm:py-16 bg-cream">
        <div className="container-page">
          <SectionHeader eyebrow="Choose how to give" title="Every rupee reaches someone who needs it" />
          <div className="grid sm:grid-cols-3 gap-6">
            {givingOptions.map((g) => (
              <div key={g.id} id={g.id} className="card p-6 scroll-mt-32">
                <h3 className="text-lg mb-2">{g.title}</h3>
                <p className="text-sm text-ink-muted">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indian bank accounts */}
      <section className="py-14 sm:py-16 bg-paper">
        <div className="container-page">
          <SectionHeader eyebrow="Bank transfer" title="Indian donations" intro="Five accounts are held in SAHARA's name. Choose whichever is easiest for you." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {indian.map((a) => (
              <BankAccountCard key={a.id} account={a} />
            ))}
          </div>
        </div>
      </section>

      {/* Foreign accounts */}
      <section className="py-14 sm:py-16 bg-cream">
        <div className="container-page">
          <SectionHeader eyebrow="International" title="Overseas donations" />
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
            {foreign.map((a) => (
              <BankAccountCard key={a.id} account={a} />
            ))}
          </div>
        </div>
      </section>

      {/* UPI + Cash */}
      <section className="py-14 sm:py-16 bg-paper">
        <div className="container-page grid lg:grid-cols-2 gap-6">
          <div className="card overflow-hidden">
            <div className="bg-brand-forest text-cream px-5 py-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-sm w-8 h-8 flex items-center justify-center shrink-0">
                  <img src="/assets/banks/upi-icon.png" alt="UPI logo" className="max-w-full max-h-full object-contain" />
                </div>
                <h3 className="font-display text-lg text-cream">UPI</h3>
              </div>
            </div>
            <div className="p-5">
              {upi.map((u) => (
                <CopyField key={u.label} label={u.label} value={u.value} icons={u.icons} />
              ))}
            </div>
          </div>
          <div className="card overflow-hidden">
            <div className="bg-brand-forest text-cream px-5 py-3 flex items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-sm w-8 h-8 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#053f2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 12h.01M18 12h.01" />
                  </svg>
                </div>
                <h3 className="font-display text-lg text-cream">Cash donations</h3>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm text-ink-muted mb-4">{cashDonation}</p>
              <Button to="/contact" variant="secondary">
                Contact us to arrange
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Online platforms */}
      <section className="py-14 sm:py-16 bg-cream">
        <div className="container-page">
          <SectionHeader eyebrow="Online" title="Approved giving platforms" />
          <div className="flex flex-wrap gap-4">
            {donationPlatforms.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Donate on {p.name} →
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-14 bg-brand-green-050">
        <div className="container-page max-w-2xl">
          <h3 className="text-lg mb-2">Before you transfer</h3>
          <p className="text-sm text-ink-muted mb-3">
            Please confirm the latest account details with SAHARA before transferring a large amount.
            Donations are intended to be 80G tax-exempt in India; please contact us for a receipt.
          </p>
          <p className="text-sm text-ink-muted mb-4">
            Questions about donating? Reach us at{" "}
            <a href={`mailto:${contact.email}`} className="font-semibold text-brand-forest">
              {contact.email}
            </a>{" "}
            or{" "}
            <a href={`tel:+91${contact.phone}`} className="font-semibold text-brand-forest">
              {contact.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
