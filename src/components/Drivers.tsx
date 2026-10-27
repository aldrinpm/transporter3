import { Reveal, Glyph, SampleChip, SectionKicker } from "./ui";

const CHECKS = [
  {
    icon: "doc",
    title: "Identity and licence, verified",
    copy: "A government ID and the licence class your vehicle needs — checked at onboarding and kept in the record with your consent.",
  },
  {
    icon: "wheel",
    title: "Assessed on the road",
    copy: "Driving is judged in traffic, not on paper — handling, courtesy and vehicle care on a live route before a driver ever serves you.",
  },
  {
    icon: "shield",
    title: "Screened, then watched lightly",
    copy: "A clean record check to start. After every completed trip, your rating and feedback keep the standard honest in both directions.",
  },
  {
    icon: "users",
    title: "Your gear, their hands",
    copy: "Drivers arrive to your pickup point, drive your car on your plan, and hand it back where it belongs — with fuel and condition noted.",
  },
];

export function Drivers() {
  return (
    <section className="section" id="drivers" aria-labelledby="drivers-h">
      <div className="container">
        <div className="section-head">
          <SectionKicker>02 — THE DRIVER</SectionKicker>
          <h2 className="h2" id="drivers-h">
            The person at the wheel, <span className="amber-word">in full view.</span>
          </h2>
        </div>

        <div className="split">
          <Reveal>
            <p className="body-copy" style={{ marginBottom: 22 }}>
              Handing over your car is trust. We earn it with visible evidence — identity documents, on-road
              assessment, ratings that cut both ways — never with claims.
            </p>
            <div className="ckecks">
              {CHECKS.map((check) => (
                <div className="ccheck" key={check.title}>
                  <span className="ccheck__glyph">
                    <Glyph name={check.icon} />
                  </span>
                  <div>
                    <h4>{check.title}</h4>
                    <p>{check.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="drivercard">
              <SampleChip />
              <div className="drivercard__head">
                <span className="avatar" aria-hidden="true">
                  JR
                </span>
                <div>
                  <div className="drivercard__name">J. Rivera</div>
                  <div className="drivercard__sub">
                    <span>
                      LIC <span style={{ color: "var(--ink-2)" }}>
                        PRO · AUTO
                      </span>
                    </span>
                    <span className="star">★ 4.9</span>
                    <span>212 TRIPS</span>
                  </div>
                </div>
              </div>
              <div className="drivercard__rows">
                <div className="drow">
                  <span className="drow__k">Vehicle handed</span>
                  <span className="drow__v">Owner's SUV, automatic</span>
                </div>
                <div className="drow">
                  <span className="drow__k">Covers</span>
                  <span className="drow__v">
                    NCR · Pilot
                    <small>Metro Manila corridors</small>
                  </span>
                </div>
                <div className="drow">
                  <span className="drow__k">On-time arrival</span>
                  <span className="drow__v">Measured per trip</span>
                </div>
                <div className="drow">
                  <span className="drow__k">Contact</span>
                  <span className="drow__v">Shared at acceptance</span>
                </div>
              </div>
            </div>

            <div className="caption" style={{ marginTop: 14 }}>
              Sample profile — what you see the moment a driver accepts
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
