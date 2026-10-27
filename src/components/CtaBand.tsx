import { HalftoneFlow } from "@designcodeio/threeui/components/HalftoneFlow";

import { BeamCta } from "./BeamCta";
import { SlideCta } from "./SlideCta";
import { Field, SectionKicker } from "./ui";

export function CtaBand() {
  return (
    <section className="ctaband" aria-labelledby="cta-h">
      <Field margin="15%" className="field">
        <HalftoneFlow mode="dark" saturation={0.9} brightness={0.62} />
      </Field>
      <div className="container ctaband__inner">
        <SectionKicker center>READY WHEN YOU ARE</SectionKicker>
        <h2 id="cta-h">Put your car in a professional's hands.</h2>
        <p className="lede" style={{ textAlign: "center" }}>
          Open the booking flow, trace your route, and read the estimate. You confirm only when the numbers make sense
          to you.
        </p>
        <div className="ctaband__actions">
          <BeamCta href="#booking">Book a driver</BeamCta>
          <SlideCta href="#drivers">Meet the standard first</SlideCta>
        </div>
        <span className="ctaband__footnote">METRO MANILA PILOT · ESTIMATES IN PHP · NO ACCOUNT NEEDED TO BROWSE</span>
      </div>
    </section>
  );
}
