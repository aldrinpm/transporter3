import { Reveal, SectionKicker } from "./ui";

const ROWS: Array<{ l: string; note?: string; v: string; small?: string }> = [
  { l: "Base platform fare", note: "per booking", v: "₱120.00" },
  { l: "Distance", note: "23.4 km this route", v: "₱560.00" },
  { l: "Driver time", note: "47 min · window included", v: "₱380.00" },
  { l: "Tolls & parking", note: "pass-through, receipts kept", v: "₱180.00" },
  { l: "Added stop", note: "optional waypoint", v: "₱120.00", small: "each" },
];

export function Pricing() {
  return (
    <section className="section" id="pricing" aria-labelledby="pricing-h">
      <div className="container">
        <div className="section-head">
          <SectionKicker>03 — THE ESTIMATE</SectionKicker>
          <h2 className="h2" id="pricing-h">
            The number you saw <span className="amber-word">stays the number</span> you discuss.
          </h2>
        </div>

        <div className="split">
          <Reveal>
            <p className="body-copy" style={{ marginBottom: 26 }}>
              Pricing is a published formula applied to your route — not a mood, and never a surge. The estimate is
              itemised before confirmation, so the only honest surprises are real-world ones.
            </p>
            <div className="quadfacts">
              <div className="qfact">
                <b>No surge pricing</b>
                <span>One published rate card, visible even before you add a route.</span>
              </div>
              <div className="qfact">
                <b>Itemised lines</b>
                <span>Base, distance, time, tolls and stops — addition you can audit.</span>
              </div>
              <div className="qfact">
                <b>Change = requote</b>
                <span>If the route or stops change, the estimate re-forms before you resubmit.</span>
              </div>
              <div className="qfact">
                <b>Pay after the trip</b>
                <span>Cash, GCash or card — options shown at checkout with receipts by email.</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="board" aria-label="Example estimate breakdown">
              <div className="board__head">
                <span className="mono">EXAMPLE RATE CARD</span>
                <span className="mono" style={{ color: "var(--amber)" }}>
                  TECHNOHUB → GREENBELT
                </span>
              </div>
              <div className="board__rows">
                {ROWS.map((row) => (
                  <div className="fare" key={row.l}>
                    <span className="fare__l">
                      {row.l} {row.note && <small>{row.note.toUpperCase()}</small>}
                    </span>
                    <span className="fare__v">
                      {row.v} {row.small && <small>{row.small.toUpperCase()}</small>}
                    </span>
                  </div>
                ))}
              </div>
              <div className="board__total">
                <span className="fare__l" style={{ color: "var(--ink)" }}>
                  <b style={{ fontWeight: 600 }}>Estimated total</b>
                </span>
                <span className="fare__v">₱1,360.00</span>
              </div>
              <div className="board__foot">
                The total includes the optional stop. Without it, the route example above is ₱1,240. Final fare follows
                actual distance, duration and the posted toll schedule — always itemised on your receipt.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
