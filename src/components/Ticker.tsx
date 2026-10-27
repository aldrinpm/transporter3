const ITEMS = [
  "Verified drivers",
  "Itemised PHP estimates",
  "Status updates after acceptance",
  "Your car stays yours",
  "Free cancellation before dispatch",
  "Waypoints supported",
  "No surge pricing",
  "Metro Manila pilot",
];

export function Ticker() {
  const row = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} style={{ display: "flex", gap: 48 }}>
      {ITEMS.map((item) => (
        <div className="ticker__item" role="listitem" key={item}>
          {item}
        </div>
      ))}
    </div>
  );

  return (
    <div className="ticker" role="list" aria-label="Service highlights">
      <div className="ticker__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
