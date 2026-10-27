import { SectionKicker } from "./ui";

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: "Whose car does the driver drive?",
    a: "Yours. A Transporter driver travels to your pickup point and takes the wheel of your vehicle — your setup, your belongings, your gear. The driver does not bring a different car for the route.",
  },
  {
    q: "Does my own insurance still apply?",
    a: "Your vehicle policy remains the primary cover on your car, exactly as when you drive it. Before you confirm a booking, we present the coverage picture in plain terms — who is listed to drive, what the driver was screened for, and how incidents are reported with a full, timestamped trail.",
  },
  {
    q: "Can I cancel, and what does that cost?",
    a: "Cancelling before any driver accepts your request is always free. Once a driver has accepted, a dispatch fee may apply — the exact amount is shown at the moment you confirm the booking, never invented afterwards.",
  },
  {
    q: "How and when do I pay?",
    a: "Payment is taken after the trip is completed. At checkout you choose cash, GCash or card, and a receipt with the itemised fare — your estimate next to the actual — is emailed at completion.",
  },
  {
    q: "Can I include stops or go out of town?",
    a: "Up to two waypoints are supported — each stop appears as an explicit line in your estimate. The Metro Manila pilot serves drives that begin and end inside the pilot cities; longer inter-region hauls are on the roadmap once one area is validated.",
  },
  {
    q: "Do you track the driver all the time?",
    a: "No. Location is used for what you book: confirming arrival, and updating your trip status. We do not run always-on GPS surveillance of drivers, and what location data is collected and when is disclosed in the app before any trip starts.",
  },
];

export function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-h">
      <div className="container">
        <div className="section-head">
          <SectionKicker>05 — QUESTIONS</SectionKicker>
          <h2 className="h2" id="faq-h">
            Straight answers, before you ask twice.
          </h2>
        </div>

        <div className="faqlist">
          {FAQS.map((item, i) => (
            <details key={item.q} {...(i === 0 ? { open: true } : {})}>
              <summary>
                <span className="q">{String(i + 1).padStart(2, "0")}</span>
                {item.q}
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
