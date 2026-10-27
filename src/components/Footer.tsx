import { Brand } from "./Nav";

const COLS: Array<{ title: string; links: Array<{ label: string; href: string }> }> = [
  {
    title: "Service",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Safety & standards", href: "#safety" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Drivers",
    links: [
      { label: "Dispatch lives in the app", href: "#drivers" },
      { label: "Payouts & trips", href: "#drivers" },
      { label: "Standards, twice over", href: "#safety" },
    ],
  },
  {
    title: "Base stations",
    links: [
      { label: "Manila", href: "#" },
      { label: "Makati", href: "#" },
      { label: "Taguig", href: "#" },
      { label: "Quezon City", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brandline">
          <p className="footer__phrase">
            Your car.
            <br />
            Driven well<span style={{ color: "var(--amber)" }}>.</span>
          </p>
          <Brand />
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <h5>TRANSPORTER</h5>
            <p style={{ margin: 0, color: "var(--ink-2)", fontSize: 13.5, maxWidth: "34ch", lineHeight: 1.65 }}>
              A driver-first mobility service: hire a qualified driver for your own vehicle, with itemised PHP
              estimates and explicit trip states. Now onboarding drivers for the Metro Manila pilot.
            </p>
            <a className="textlink" href="#faq" style={{ marginTop: 14, display: "inline-block" }}>
              Read the six answers most asked →
            </a>
          </div>
          {COLS.map((col) => (
            <div className="footer__col" key={col.title}>
              <h5>{col.title.toUpperCase()}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__meter">
          <span>© 2026 TRANSPORTER — LANDING PREVIEW · ALL EXAMPLE DATA IS ILLUSTRATIVE</span>
          <span>DESIGN SYSTEM · THREEUI COMMUNITY (MIT)</span>
        </div>
      </div>
    </footer>
  );
}
