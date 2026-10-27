import type { CSSProperties } from "react";
import type { MouseEventHandler } from "react";

type Common = {
  children: string;
  className?: string;
  style?: CSSProperties;
};

type BeamLink = Common & {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  type?: never;
};

type BeamButton = Common & {
  href?: undefined;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

type BeamProps = (BeamLink | BeamButton) & {
  compact?: boolean;
};

/**
 * Gradient Beam CTA — adapted from ThreeUI Community's `gradient-beam-cta`
 * (github.com/MengTo/threeui, MIT). Re-authored as a real anchor/button with
 * scoped CSS: rotating amber edge beam, drifting dot texture, hover bloom.
 */
export function BeamCta(props: BeamProps) {
  const { children, className = "", style, compact } = props;
  const sizing = compact ? { height: 44, padding: "0 20px", fontSize: 13.5 } : undefined;

  if (typeof props.href === "string") {
    return (
      <a className={`btn beam ${className}`} href={props.href} onClick={props.onClick} style={{ ...sizing, ...style }}>
        <BeamDecor />
        <span style={{ position: "relative", zIndex: 10 }}>{children}</span>
      </a>
    );
  }

  return (
    <button className={`btn beam ${className}`} type={props.type ?? "button"} onClick={props.onClick} disabled={props.disabled} style={{ ...sizing, ...style }}>
      <BeamDecor />
      <span style={{ position: "relative", zIndex: 10 }}>{children}</span>
    </button>
  );
}

function BeamDecor() {
  return (
    <>
      <i className="beam__glow" aria-hidden="true" />
      <i className="beam__frame" aria-hidden="true" />
      <i className="beam__casing" aria-hidden="true" />
    </>
  );
}
