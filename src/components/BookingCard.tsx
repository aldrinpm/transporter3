import { useEffect, useRef, useState } from "react";

import { BeamCta } from "./BeamCta";
import { Glyph, ProductPreviewChip } from "./ui";

/* ---------------------------------------------------------------------------
   Booking preview — a guided, honest demo of the booking surface.
   States: idle → computing → quoted → requested. All data is illustrative and
   labelled as such; nothing here claims live system state (charter, principle 7).
   ------------------------------------------------------------------------- */

type Stage = "idle" | "computing" | "quoted" | "requested";

const PHASES = ["MATCHING ROUTE", "PRICING LEVELS", "ESTIMATE READY"] as const;

const BASE = {
  from: "UP Ayala Technohub, Quezon City",
  to: "Greenbelt 5, Makati Ave",
  waypoint: "SM Megamall, Ortigas Center",
  vehicle: "Your SUV · Automatic",
  date: "SAT · NOV 7 · 07:30",
  base: 120,
  distance: [23.4, 560],
  time: [47, 380],
  tolls: 180,
  stop: 120,
  ref: "TR-2847",
} as const;

const peso = (v: number) => `₱${v.toLocaleString("en-PH")}`;

export function BookingCard() {
  const [stage, setStage] = useState<Stage>("idle");
  const [waypoint, setWaypoint] = useState(false);
  const [phase, setPhase] = useState(0);
  const timers = useRef<number[]>([]);
  const requestedRef = useRef<HTMLDivElement>(null);

  useEffect(
    () => () => {
      timers.current.forEach(clearTimeout);
    },
    [],
  );

  const compute = () => {
    if (stage !== "idle") return;
    setStage("computing");
    setPhase(0);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const step = reduced ? 140 : 620;
    timers.current = [
      window.setTimeout(() => setPhase(1), step),
      window.setTimeout(() => {
        setPhase(2);
        window.setTimeout(() => setStage("quoted"), reduced ? 200 : 520);
      }, step * 2),
    ];
  };

  const toggleWaypoint = () => {
    setWaypoint(!waypoint);
    if (stage === "quoted" || stage === "requested") {
      setStage("idle");
    }
  };

  const total = BASE.base + BASE.distance[1] + BASE.time[1] + BASE.tolls + (waypoint ? BASE.stop : 0);

  return (
    <div className="bcard" id="demo" role="group" aria-label="Booking preview with illustrative data">
      <div className="bcard__top">
        <span className="mono">
          BOOKING <b>PREVIEW</b>
        </span>
        <ProductPreviewChip />
      </div>

      <div className="bcard__body">
        <div className="route">
          <i className="route__spine" aria-hidden="true" />
          <div className="route__pin">
            <i className="route__dot route__dot--from" aria-hidden="true" />
            <div className="route__labels">
              <span className="route__tag">PICKUP</span>
              <span className="route__place">{BASE.from}</span>
            </div>
          </div>
          {waypoint && (
            <div className="route__pin">
              <i className="route__dot route__dot--way" aria-hidden="true" />
              <div className="route__labels">
                <span className="route__tag">STOP</span>
                <span className="route__place">{BASE.waypoint}</span>
              </div>
            </div>
          )}
          <div className="route__pin">
            <i className="route__dot" aria-hidden="true" />
            <div className="route__labels">
              <span className="route__tag">DESTINATION</span>
              <span className="route__place">{BASE.to}</span>
            </div>
          </div>
        </div>

        <div className="metas">
          <span className="meta">
            <Glyph name="clock" />
            {BASE.date}
          </span>
          <span className="meta">
            <Glyph name="car" />
            {BASE.vehicle}
          </span>
          <button className="meta meta--btn" type="button" aria-pressed={waypoint} onClick={toggleWaypoint}>
            <Glyph name="plus" />
            {waypoint ? "Remove stop" : "Add a stop"}
          </button>
          {waypoint && stage === "idle" && <span className="mono">{`+${peso(BASE.stop)}`}</span>}
        </div>

        {stage !== "requested" && (
          <div className="est" aria-live="polite">
            <div className="est__label">
              <span className="mono">ESTIMATE</span>
              <span className="mono">{stage === "idle" ? "PHP" : stage === "computing" ? "FORMING" : "PROVIDED"}</span>
            </div>

            {stage === "idle" && (
              <p className="est__note" style={{ margin: "6px 0 0" }}>
                A complete PHP estimate appears here before you confirm: distance, driver time, base fare, tolls and
                added stops — itemised.
              </p>
            )}

            {stage === "computing" && (
              <div className="stage">
                <div className="est__bar">
                  <i />
                </div>
                <div className="est__phases">
                  {PHASES.map((p, i) => (
                    <span key={p} style={{ color: i <= phase ? "var(--amber)" : undefined }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {stage === "quoted" && (
              <div className="stage">
                <div className="est__price">
                  <span className="est__peso">
                    <sup>₱</sup>
                    {total.toLocaleString("en-PH")}
                  </span>
                  <span className="mono">EST · PHP</span>
                </div>
                <p className="est__note">
                  {`BASE ${peso(BASE.base)} · DIST ${BASE.distance[0]} KM ${peso(BASE.distance[1])} · TIME ${BASE.time[0]} MIN ${peso(
                    BASE.time[1],
                  )} · TOLLS ${peso(BASE.tolls)}`}
                  {waypoint ? ` · STOP ${peso(BASE.stop)}` : ""}
                </p>
              </div>
            )}
          </div>
        )}

        {stage === "requested" && (
          <div className="est stage" ref={requestedRef} aria-live="polite">
            <div className="est__label">
              <span className="mono">REQUEST</span>
              <span className="mono">{BASE.ref}</span>
            </div>
            <div className="est__price" style={{ marginTop: 4 }}>
              <span className="est__peso" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <i className="pulse" aria-hidden="true" />
                <span style={{ fontSize: "0.62em", letterSpacing: "0.08em", color: "var(--ink-2)" }}>REQUESTED</span>
              </span>
              <span className="mono">AWAITING DRIVER</span>
            </div>
            <p className="est__note">
              Your request is with dispatch. The next driver sees pickup, route, schedule and payout — when one accepts,
              you receive their name, licence class and an arrival estimate by SMS.
            </p>
          </div>
        )}
      </div>

      <div className="bcard__foot">
        {stage !== "requested" && (
          <BeamCta className="bcard__cta" onClick={compute} disabled={stage === "computing"}>
            {stage === "idle" ? "Compute estimate" : stage === "computing" ? "Forming quote…" : "Request a driver"}
          </BeamCta>
        )}
        {stage === "requested" && (
          <button className="textlink" type="button" style={{ padding: "6px 0" }} onClick={() => setStage("idle")}>
            Cancel request — free before a driver accepts
          </button>
        )}
        <span className="caption" style={{ textAlign: "left" }}>
          Example inputs and fares — your quote forms from live inputs at booking.
        </span>
      </div>
    </div>
  );
}
