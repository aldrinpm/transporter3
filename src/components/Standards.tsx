import { PerformanceGauges } from "@designcodeio/threeui/components/PerformanceGauges";

import { Reveal, Field, Glyph, SectionKicker } from "./ui";

const PRINCIPLES = [
  {
    icon: "clock",
    title: "Arrival accuracy",
    copy: "The estimate stamped when your driver heads out is compared against when they actually arrive — every trip feeds the next estimate.",
  },
  {
    icon: "wheel",
    title: "Gentle handling",
    copy: "Your vehicle is rated on how it is driven and returned — smoothness, fuel state, condition notes on every completed trip.",
  },
  {
    icon: "route",
    title: "Route discipline",
    copy: "Drivers follow the booked route, waypoint order and schedule — deviations are recorded against your request, visible to you.",
  },
  {
    icon: "doc",
    title: "Auditable state changes",
    copy: "Requested, accepted, en route, arrived, completed — each transition is timestamped and reviewable, so support is never guessing.",
  },
];

export function Standards() {
  return (
    <section className="section" id="safety" aria-labelledby="safety-h">
      <div className="container">
        <div className="section-head">
          <SectionKicker>04 — THE STANDARD</SectionKicker>
          <h2 className="h2" id="safety-h">
            Driving is measured, <span className="amber-word">not claimed.</span>
          </h2>
          <p className="lede">
            Four standards govern the service. They are instrumented, not aspirational — and every driver sees the same
            gauges you do.
          </p>
        </div>

        <div className="split split--wide">
          <Reveal>
            <div className="ckecks">
              {PRINCIPLES.map((p) => (
                <div className="ccheck" key={p.title}>
                  <span className="ccheck__glyph">
                    <Glyph name={p.icon} />
                  </span>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="gaugecard">
              <Field margin="10%" className="field">
                <PerformanceGauges variant="tachometer" mode="dark" saturation={0.9} brightness={0.95} />
              </Field>
              <i className="gaugecard__glow" aria-hidden="true" />
            </div>
            <div className="caption" style={{ marginTop: 14 }}>
              Instrument illustration — one of the standards we gauge
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
