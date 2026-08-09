import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { primaryNav, moreNav } from "@/data/nav";
import { Button } from "@/components/Button";
import { MenuIcon, CloseIcon, ChevronIcon, FacebookIcon, InstagramIcon, XIcon, LinkedInIcon, PhoneIcon } from "@/components/icons";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { socials, contact } from "@/data/site";
import { cn } from "@/utils/cn";

const socialIcon: Record<string, typeof FacebookIcon> = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  "X (Twitter)": XIcon,
  LinkedIn: LinkedInIcon,
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer/dropdown on route change
  useEffect(() => {
    setDrawerOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useLockBodyScroll(drawerOpen);
  useEscapeKey(drawerOpen, () => setDrawerOpen(false));
  useEscapeKey(moreOpen, () => setMoreOpen(false));

  useEffect(() => {
    if (!moreOpen) return;
    const onClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [moreOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-base duration-base border-b",
        scrolled ? "bg-cream/95 backdrop-blur border-line shadow-sm" : "bg-transparent border-transparent"
      )}
    >
      <div className="container-page flex h-[64px] sm:h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="SAHARA home">
          <img src="/assets/brand/sahara_logo_header.png" alt="SAHARA logo" className="h-10 sm:h-11 w-auto" />
          <span className="font-display font-semibold text-lg sm:text-xl text-brand-forest">SAHARA</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 rounded-sm text-sm font-semibold text-ink hover:text-terracotta transition-fast duration-fast",
                  isActive && "text-terracotta"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="relative" ref={moreRef}>
            <button
              type="button"
              className="px-3 py-2 rounded-sm text-sm font-semibold text-ink hover:text-terracotta inline-flex items-center gap-1"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
            >
              More <ChevronIcon className="w-4 h-4 rotate-90" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 mt-1 w-56 bg-paper border border-line rounded-md shadow-md p-2">
                {moreNav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block px-3 py-2 rounded-sm text-sm text-ink hover:bg-brand-green-050 hover:text-brand-forest"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button to="/donate" variant="primary" className="hidden sm:inline-flex">
            Donate
          </Button>
          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-brand-forest"
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((v) => !v)}
          >
            {drawerOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div
          ref={drawerRef}
          className="lg:hidden fixed inset-0 top-[64px] z-40 bg-brand-forest text-cream overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav aria-label="Mobile primary" className="container-page py-6 flex flex-col gap-1">
            {[...primaryNav, ...moreNav].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-display text-xl py-3 border-b border-cream/15 hover:text-marigold"
              >
                {item.label}
              </Link>
            ))}
            <Button to="/donate" variant="primary" className="mt-6 w-full">
              Donate
            </Button>
            <a href={`tel:+91${contact.phone}`} className="mt-4 flex items-center gap-2 text-cream/90">
              <PhoneIcon className="w-5 h-5" /> {contact.phoneDisplay}
            </a>
            <div className="mt-4 flex items-center gap-4">
              {socials.map((s) => {
                const Icon = socialIcon[s.name];
                return (
                  <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`SAHARA on ${s.name}`} className="text-cream/90 hover:text-marigold">
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
