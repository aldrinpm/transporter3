import { TopologyField } from "@designcodeio/threeui/components/TopologyField";

import { BookingCard } from "./BookingCard";
import { BeamCta } from "./BeamCta";
import { SlideCta } from "./SlideCta";
import { Field, Glyph, SectionKicker } from "./ui";

const CHIPS = [
  { icon: "shield", label: "Verified drivers" },
  { icon: "doc", label: "Itemised PHP estimates" },
  { icon: "route", label: "Status updates" },
  { icon: "wheel", label: "Your car stays yours" },
];

export function Hero() {
  return (
    <section className="hero" id="booking" aria-label="Transporter — book a qualified driver for your own car">
      <div className="hero__backdrop">
        <Field margin="0px" className="field">
          <TopologyField mode="dark" />
        </Field>
      </div>

      <div className="container hero__grid">
        <div className="hero__copy">
          <div className="rise" style={{ "--d": "40ms" } as React.CSSProperties}>
            <SectionKicker>TRANSPORTER · DRIVER SERVICE · METRO MANILA</SectionKicker>
          </div>

          <h1 className="display hero__title rise" style={{ "--d": "120ms" } as React.CSSProperties}>
            A test001 professional at the wheel of <span className="amber-underlined">your own car</span>.
          </h1>

          <p className="lede rise" style={{ "--d": "220ms" } as React.CSSProperties}>
            Transporter sends a qualified driver to drive your vehicle between your chosen locations — with an itemised
            PHP estimate before you confirm, and clear status updates once a driver accepts.
          </p>

          <div className="hero__actions rise" style={{ "--d": "320ms" } as React.CSSProperties}>
            <BeamCta href="#pricing">See an estimate</BeamCta>
            <SlideCta href="#how-it-works">How it works</SlideCta>
          </div>

          <div className="hero__chips rise" style={{ "--d": "420ms" } as React.CSSProperties}>
            {CHIPS.map((chip) => (
              <span className="chip" key={chip.label}>
                <Glyph name={chip.icon} />
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        <div className="rise" style={{ "--d": "360ms" } as React.CSSProperties}>
          <BookingCard />
        </div>
      </div>
    </section>
  );
}
