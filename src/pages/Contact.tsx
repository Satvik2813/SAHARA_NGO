import { useState, type FormEvent } from "react";
import { Seo } from "@/components/Seo";
import { contact, socials, org } from "@/data/site";
import { PhoneIcon, MailIcon, PinIcon, FacebookIcon, InstagramIcon, XIcon, LinkedInIcon } from "@/components/icons";

const socialIcon: Record<string, typeof FacebookIcon> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  "X (Twitter)": XIcon,
  LinkedIn: LinkedInIcon,
};

const topics = ["General enquiry", "Donation question", "Volunteer / Intern", "Media", "Partnership"];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !message) {
      setError("Please fill in your name, email and message.");
      return;
    }
    setError("");
    // No backend is wired up yet -- this is a UI-complete form ready to be
    // connected to an email/API endpoint in a later phase.
    setSubmitted(true);
  };

  return (
    <>
      <Seo title="Contact SAHARA" description="Reach SAHARA in Amberpet, Hyderabad — address, phone, email and enquiry form." path="/contact" />

      <section className="bg-brand-forest text-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-marigold mb-2">Contact</p>
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">Get in touch</h1>
          <p className="text-cream/85 text-lg">We'd love to hear from you — whether you want to give, volunteer, or just say hello.</p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl mb-5">{org.name} office</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-3">
                <PinIcon className="h-5 w-5 text-brand-forest shrink-0 mt-0.5" />
                <span className="text-ink-muted">{contact.addressLines.join(", ")}</span>
              </li>
              <li className="flex gap-3 items-center">
                <PhoneIcon className="h-5 w-5 text-brand-forest shrink-0" />
                <a href={`tel:+91${contact.phone}`} className="text-ink-muted hover:text-brand-forest">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <MailIcon className="h-5 w-5 text-brand-forest shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-ink-muted hover:text-brand-forest break-all">
                  {contact.email}
                </a>
              </li>
            </ul>

            <h3 className="text-base font-semibold mb-3">Follow SAHARA</h3>
            <div className="flex gap-4 mb-8">
              {socials.map((s) => {
                const Icon = socialIcon[s.name];
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`SAHARA on ${s.name}`}
                    className="h-10 w-10 rounded-full bg-brand-green-050 text-brand-forest grid place-items-center hover:bg-brand-green-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="rounded-md overflow-hidden border border-line aspect-video">
              <iframe
                title="Map showing SAHARA's office in Amberpet, Hyderabad"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Tirumalanagar,+Amberpet,+Hyderabad,+500013&output=embed"
              />
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-5">Send a message</h2>
            {submitted ? (
              <div className="card p-6" role="status">
                <p className="text-brand-forest font-semibold mb-1">Thank you — your message has been noted.</p>
                <p className="text-sm text-ink-muted">SAHARA will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-1">
                    Name
                  </label>
                  <input id="name" name="name" type="text" required className="w-full rounded-sm border border-line px-4 py-3 text-base bg-paper" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-1">
                    Email
                  </label>
                  <input id="email" name="email" type="email" inputMode="email" required className="w-full rounded-sm border border-line px-4 py-3 text-base bg-paper" />
                </div>
                <div>
                  <label htmlFor="topic" className="block text-sm font-semibold mb-1">
                    Topic
                  </label>
                  <select id="topic" name="topic" className="w-full rounded-sm border border-line px-4 py-3 text-base bg-paper">
                    {topics.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-1">
                    Message
                  </label>
                  <textarea id="message" name="message" required rows={5} className="w-full rounded-sm border border-line px-4 py-3 text-base bg-paper" />
                </div>
                {error && (
                  <p role="alert" className="text-sm text-state-error">
                    {error}
                  </p>
                )}
                <button type="submit" className="btn-primary">
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
