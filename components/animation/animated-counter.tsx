"use client";

import { useEffect, useRef, useState } from "react";
import { formatNumber } from "@/lib/format-number";
import { useInView } from "./use-in-view";

type Props = {
  to: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
  className?: string;
};

export function AnimatedCounter({
  to,
  decimals = 0,
  duration = 1600,
  prefix = "",
  suffix = "",
  separator = true,
  className,
}: Props) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    if (!inView) {
      setValue(0);
      return;
    }

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(to);
      return;
    }

    setValue(0);
    const t0 = performance.now();
    const tick = (now: number) => {
      const elapsed = now - t0;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = null;
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, to, duration]);

  const raw = formatNumber(value, decimals);
  const formatted = separator
    ? raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : raw;

  return (
    <span ref={ref} suppressHydrationWarning className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
