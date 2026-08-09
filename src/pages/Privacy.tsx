import { Seo } from "@/components/Seo";
import { contact, org } from "@/data/site";

export function Privacy() {
  return (
    <>
      <Seo title="Privacy Policy — SAHARA" description="How SAHARA handles information submitted through this website." />
      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page max-w-prose">
          <h1 className="text-3xl sm:text-4xl mb-6">Privacy Policy</h1>
          <p className="text-ink-muted mb-4">
            This page explains, in plain language, how {org.name} handles information submitted through
            this website.
          </p>

          <h2 className="text-xl mt-8 mb-2">What we collect</h2>
          <p className="text-ink-muted mb-4">
            If you use the contact form on this site, we receive the name, email address, topic and
            message you choose to submit. We do not collect any other personal data automatically through
            this website.
          </p>

          <h2 className="text-xl mt-8 mb-2">How we use it</h2>
          <p className="text-ink-muted mb-4">
            Information submitted through the contact form is used only to respond to your enquiry — for
            example, questions about donations, volunteering, media or partnerships. We do not sell or
            share this information with third parties for marketing purposes.
          </p>

          <h2 className="text-xl mt-8 mb-2">Donations</h2>
          <p className="text-ink-muted mb-4">
            This website displays SAHARA's bank account, UPI and approved donation-platform details for
            your convenience. We do not collect or store any payment or card information on this website
            — donations are made directly through your bank, UPI app, or the listed third-party platforms,
            which have their own privacy practices.
          </p>

          <h2 className="text-xl mt-8 mb-2">Contact us about privacy</h2>
          <p className="text-ink-muted">
            If you have questions about this policy or would like your submitted information removed,
            please write to{" "}
            <a href={`mailto:${contact.email}`} className="text-brand-forest font-semibold">
              {contact.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
