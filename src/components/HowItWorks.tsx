import { Reveal, SectionKicker } from "./ui";

function StepVisual({ kind }: { kind: "route" | "fare" | "accept" | "status" }) {
  if (kind === "route") {
    return (
      <svg className="miniroute" viewBox="0 0 220 62" fill="none" aria-hidden="true">
        <path className="track" d="M8 50 C 60 50, 58 14, 106 14 S 168 40, 212 18" />
        <path className="anim" d="M8 50 C 60 50, 58 14, 106 14 S 168 40, 212 18" />
        <circle cx="8" cy="50" r="4" fill="#FF8A1F" />
        <circle cx="212" cy="18" r="4" stroke="#FFB03C" strokeWidth="2" />
      </svg>
    );
  }
  if (kind === "fare") {
    return (
      <div className="farechips">
        <span className="farechip">
          BASE <b>₱120</b>
        </span>
        <span className="farechip">
          DIST <b>₱560</b>
        </span>
        <span className="farechip">
          TIME <b>₱380</b>
        </span>
        <span className="farechip">
          TOLLS <b>₱180</b>
        </span>
      </div>
    );
  }
  if (kind === "accept") {
    return (
      <div className="pills">
        <span className="pill">
          <i />
          Requested
        </span>
        <span aria-hidden="true" style={{ color: "var(--ink-3)", fontSize: 11 }}>
          →
        </span>
        <span className="pill pill--ok">
          <i />
          Driver accepted
        </span>
      </div>
    );
  }
  return (
    <div className="pills">
      <span className="pill pill--active">
        <i />
        En route
      </span>
      <span className="pill">
        <i />
        Arriving
      </span>
      <span className="pill pill--ok">
        <i />
        Arrived
      </span>
    </div>
  );
}

const STEPS: Array<{ n: string; title: string; copy: string; kind: "route" | "fare" | "accept" | "status" }> = [
  {
    n: "01",
    title: "Set the route",
    copy: "Pickup, destination and any stops on a map, then choose the date and window. Your vehicle details come with the trip.",
    kind: "route",
  },
  {
    n: "02",
    title: "Read the estimate",
    copy: "A single itemised PHP estimate in Philippine Peso — base, distance, time, tolls — shown before you confirm anything.",
    kind: "fare",
  },
  {
    n: "03",
    title: "A driver accepts",
    copy: "Your request goes to eligible drivers with payout, route and schedule in full view. Nothing moves until one is accepted.",
    kind: "accept",
  },
  {
    n: "04",
    title: "Track to arrival",
    copy: "Follow each state as it changes — and the driver's arrival estimate once they are on their way to you.",
    kind: "status",
  },
];

export function HowItWorks() {
  return (
    <section className="section" id="how-it-works" aria-labelledby="how-h">
      <div className="container">
        <div className="section-head">
          <SectionKicker>01 — THE ROUTE</SectionKicker>
          <h2 className="h2" id="how-h">
            Four states. No mysteries in between.
          </h2>
          <p className="lede">
            Booking is a sequence with named states, not a black box. Every change — from request to completion — is
            explicit, timestamped and visible to you.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <article className="step">
                <span className="step__index">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <div className="step__visual">
                  <StepVisual kind={step.kind} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
