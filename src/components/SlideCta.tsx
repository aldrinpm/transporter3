import type { CSSProperties } from "react";

type SlideCtaProps = {
  children: string;
  href?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  style?: CSSProperties;
};

/**
 * Sliding Text CTA — adapted from ThreeUI Community's `sliding-text-cta`
 * (github.com/MengTo/threeui, MIT). The label slides, blurs, and resolves
 * into its duplicate on hover; authored here as a real anchor with scoped CSS.
 */
export function SlideCta({ children, href, onClick, className = "", style }: SlideCtaProps) {
  const inner = (
    <>
      <span className="slide__a">{children}</span>
      <span className="slide__b" aria-hidden="true">
        {children}
      </span>
      <i className="slide__light" aria-hidden="true" />
    </>
  );

  if (href) {
    return (
      <a className={`btn slide ${className}`} href={href} onClick={onClick} style={style}>
        {inner}
      </a>
    );
  }
  return (
    <button className={`btn slide ${className}`} type="button" onClick={onClick} style={style}>
      {inner}
    </button>
  );
}
