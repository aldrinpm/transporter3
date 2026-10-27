import { useEffect, useRef } from "react";

import { startArticleHeadingDecode } from "./articleHeadingDecode";

const DECODE_OPTIONS = {
  duration: 640,
  stagger: 140,
  scrambleLength: 9,
  preserveChance: 0.3,
  tailChance: 0.16,
};

/**
 * Decode-on-view for [data-article-heading] targets using the vendored
 * ThreeUI Article Headings decoder (MIT). Runs once when the host enters
 * the viewport; the decoder no-ops under prefers-reduced-motion.
 */
export function useDecodeOnView<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const host = ref.current;
    if (!host) return undefined;

    let cleanup = () => {};
    let cancelled = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (cancelled || !entry?.isIntersecting) return;
        cleanup = startArticleHeadingDecode(host, DECODE_OPTIONS);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.25 },
    );
    observer.observe(host);

    return () => {
      cancelled = true;
      observer.disconnect();
      cleanup();
    };
  }, []);

  return ref;
}
