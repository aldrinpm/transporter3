import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { BeamCta } from "./BeamCta";

const LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#drivers", label: "Drivers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#safety", label: "Safety" },
  { href: "#faq", label: "FAQ" },
];

export function BrandMark({ className = "brand__mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#121316" stroke="rgba(244,243,238,0.16)" />
      <circle cx="16" cy="16" r="9.2" fill="none" stroke="#FFB03C" strokeWidth="1.6" />
      <circle cx="16" cy="16" r="3.1" fill="#FFB03C" />
      <g stroke="#FFB03C" strokeWidth="1.4" strokeLinecap="round">
        <path d="M16 6.8v3" />
        <path d="M16 22.2v3" />
        <path d="M7.6 11.4l2.9 1" />
        <path d="M21.5 19.6l2.9 1" />
      </g>
    </svg>
  );
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand" href="#main" aria-label="Transporter — home">
      <BrandMark />
      {!compact && (
        <span className="brand__word">
          Transporter<i>.</i>
        </span>
      )}
    </a>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock scroll behind the mobile sheet */
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="nav" data-scrolled={scrolled} data-open={open}>
        <div className="container nav__inner">
          <Brand />

          <nav className="nav__links" aria-label="Primary">
            {LINKS.map((l) => (
              <a key={l.href} className="nav__link" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav__cta">
            <a className="nav__link" href="#faq">
              Sign in
            </a>
            <BeamCta href="#booking" compact>
              Book a driver
            </BeamCta>
          </div>

          <button className="nav__burger" data-open={open} type="button" aria-expanded={open} aria-controls="mobile-sheet" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            <svg className="open" viewBox="0 0 18 18" fill="none" strokeWidth="1.8" strokeLinecap="round">
              <path d="M2 5h14M2 9h14M2 13h14" />
            </svg>
            <svg className="close" viewBox="0 0 18 18" fill="none" strokeWidth="1.8" strokeLinecap="round">
              <path d="m4 4 10 10M14 4 4 14" />
            </svg>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-sheet"
            className="sheet"
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {LINKS.map((l) => (
              <a key={l.href} className="sheet__link" href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <BeamCta href="#booking" onClick={() => setOpen(false)}>
              Book a driver
            </BeamCta>
            <a className="textlink" href="#faq" style={{ justifySelf: "center", padding: "10px 0 2px" }} onClick={() => setOpen(false)}>
              Sign in
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
