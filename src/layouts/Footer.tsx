import { Link } from "react-router-dom";
import { footerExplore, footerInvolved, footerTrust } from "@/data/nav";
import { org, contact, socials, registration } from "@/data/site";
import { FacebookIcon, InstagramIcon, XIcon, LinkedInIcon, PhoneIcon, MailIcon, PinIcon } from "@/components/icons";
import { Chip } from "@/components/Chip";

const socialIcon: Record<string, typeof FacebookIcon> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  "X (Twitter)": XIcon,
  LinkedIn: LinkedInIcon,
};

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <h3 className="font-display text-cream text-base mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-cream/75 hover:text-marigold text-sm">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-forest text-cream">
      <div className="container-page py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <img src="/assets/brand/sahara_logo_footer.png" alt="" aria-hidden="true" className="h-9 w-auto" />
            <span className="font-display text-lg">{org.name}</span>
          </div>
          <p className="text-cream/75 text-sm mb-4">{org.tagline}</p>
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = socialIcon[s.name];
              return (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SAHARA on ${s.name}`}
                  className="text-cream/80 hover:text-marigold transition duration-fast"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        <FooterCol title="Explore" items={footerExplore} />
        <FooterCol title="Get Involved" items={footerInvolved} />
        <FooterCol title="Trust" items={footerTrust} />

        <div>
          <h3 className="font-display text-cream text-base mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-cream/75">
            <li className="flex gap-2">
              <PinIcon className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{contact.addressLines.join(", ")}</span>
            </li>
            <li className="flex gap-2 items-center">
              <PhoneIcon className="w-4 h-4 shrink-0" />
              <a href={`tel:+91${contact.phone}`} className="text-cream/75 hover:text-marigold transition-colors">
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <MailIcon className="w-4 h-4 shrink-0" />
              <a href={`mailto:${contact.email}`} className="text-cream/75 hover:text-marigold transition-colors">
                {contact.email}
              </a>
            </li>
          </ul>
          <div className="flex gap-2 mt-4 flex-wrap">
            <Chip>{registration.society}</Chip>
            <Chip>{registration.eightyG}</Chip>
            <Chip>{registration.twelveA}</Chip>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>&copy; {year} {org.name}. Donations are intended to be 80G tax-exempt in India.</p>
          <Link to="/privacy" className="text-cream/60 hover:text-marigold transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
