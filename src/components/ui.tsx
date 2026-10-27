import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { useDecodeOnView } from "../lib/useDecodeOnView";

/* capture-time flag: ?static renders everything in its settled state
   (screenshot tooling, crawlers, e2e floors) */
const isStaticCapture =
  typeof location !== "undefined" && new URLSearchParams(location.search).has("static");

/* ------------------------------------------------------------------ reveal -- */

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Scroll-reveal wrapper — translateY + opacity, once, eased; static under reduced motion. */
export function Reveal({ children, delay = 0, y = 26, className }: RevealProps) {
  const reduced = useReducedMotion();
  if (reduced || isStaticCapture) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------- lazy field -- */

type FieldProps = {
  children: ReactNode;
  className?: string;
  /** rootMargin to pre-mount before entering view */
  margin?: string;
};

/**
 * Mounts WebGL/canvas backdrop fields only when they near the viewport,
 * and only once (deployment keeps the render cost paid once).
 */
export function Field({ children, className = "field", margin = "20%" }: FieldProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(isStaticCapture);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || mounted || isStaticCapture) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin: margin },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [mounted, margin]);

  return (
    <div ref={hostRef} className={className} aria-hidden="true">
      {mounted ? children : null}
    </div>
  );
}

/* ------------------------------------------------------------------- glyph -- */

export function Glyph({ name, ...rest }: { name: string } & React.SVGProps<SVGSVGElement>) {
  const paths: Record<string, ReactNode> = {
    route: (
      <>
        <circle cx="5.5" cy="18.6" r="2.4" />
        <circle cx="18.5" cy="5.4" r="2.4" />
        <path d="M7.9 17.7 11.6 14m4.5-4.4 2.8-2.5" />
        <path d="M5.9 13.2c1.4-1.2 4-.5 5.4.8s3.9 1.9 5.2.7" strokeDasharray="0" opacity="0.55" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-6.8-5.6-6.8-10.9A6.8 6.8 0 0 1 12 3.4a6.8 6.8 0 0 1 6.8 6.7C18.8 15.4 12 21 12 21Z" />
        <circle cx="12" cy="10" r="2.4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.6" />
        <path d="M12 7.2V12l3.2 2" />
      </>
    ),
    car: (
      <>
        <path d="M4.6 13.4 6.2 8.6A2 2 0 0 1 8.1 7.2h7.8a2 2 0 0 1 1.9 1.4l1.6 4.8" />
        <path d="M4.2 13.4h15.6a1 1 0 0 1 1 1v2.4a1 1 0 0 1-1 1h-1" />
        <path d="M3.2 16.8v-2.4a1 1 0 0 1 1-1" />
        <path d="M6 18.6H4.2v-1.2" opacity="0" />
        <circle cx="7.2" cy="16.9" r="1.7" />
        <circle cx="16.8" cy="16.9" r="1.7" />
        <path d="M9 16.9h6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.2 5.2 5.9v5.6c0 4.6 3 7.6 6.8 9.3 3.8-1.7 6.8-4.7 6.8-9.3V5.9Z" />
        <path d="m9.2 11.8 2 2 3.6-3.9" />
      </>
    ),
    check: <path d="m5 12.6 4.4 4.4L19 7.4" />,
    doc: (
      <>
        <path d="M7 3.2h7.4L18.6 7.4v13.4H7a1.4 1.4 0 0 1-1.4-1.4V4.6A1.4 1.4 0 0 1 7 3.2Z" strokeWidth="1.6" />
        <path d="M14.4 3.2v4.2h4.2" strokeWidth="1.6" />
        <path d="M8.8 12h6.4M8.8 15.4h6.4" strokeWidth="1.6" />
      </>
    ),
    wheel: (
      <>
        <circle cx="12" cy="12" r="8.6" />
        <circle cx="12" cy="12" r="3.1" />
        <path d="M12 3.4v5.5M12 15.1v5.5M4 9.3l4.9 1.9M15.1 12.8l4.9 1.9" opacity="0.85" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8.2" r="3.1" />
        <path d="M3.6 19.5c.6-3 2.9-4.8 5.4-4.8s4.8 1.8 5.4 4.8" />
        <path d="M15.5 5.6a3 3 0 0 1 1.9 5.4M17.5 14.9c1.6.6 2.7 2 3 4.6" opacity="0.8" />
      </>
    ),
    swap: <path d="M7 8h10.4M14.4 4.6 17.8 8 14.4 11.4M17 16H6.6M9.6 12.6 6.2 16l3.4 3.4" />,
    arrow: <path d="M4.6 12h14.2M13.4 6.4 19 12l-5.6 5.6" />,
    plus: <path d="M12 5.4v13.2M5.4 12h13.2" />,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {paths[name] ?? null}
    </svg>
  );
}

/* -------------------------------------------------------------- sample tag -- */

export function SampleChip({ label = "SAMPLE VIEW" }: { label?: string }) {
  return <span className="orbit-badge sample-chip">{label}</span>;
}

export function ProductPreviewChip() {
  return (
    <span className="orbit-badge">
      PRODUCT PREVIEW · ILLUSTRATIVE DATA
    </span>
  );
}

/* ----------------------------------------------------------- section kicker -- */

/** Mono section eyebrow with the vendored ThreeUI scramble-decode on first view. */
export function SectionKicker({ children, center }: { children: string; center?: boolean }) {
  const ref = useDecodeOnView<HTMLParagraphElement>();
  return (
    <p className="kicker" ref={ref} style={center ? ({ justifyContent: "center" } as React.CSSProperties) : undefined}>
      <span data-article-heading>{children}</span>
    </p>
  );
}
