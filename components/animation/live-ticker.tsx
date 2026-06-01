"use client";

import { useEffect, useState } from "react";
import { formatCompactUsd, formatNumber, formatUsd } from "@/lib/format-number";

type FormatKey = "money" | "money-thousands" | "money-millions" | "number" | "percent";

type Props = {
  start: number;
  maxIncrement?: number;
  interval?: number;
  format?: FormatKey;
  decimals?: number;
  className?: string;
};

function formatValue(n: number, key: FormatKey, decimals: number): string {
  switch (key) {
    case "money":
      return formatUsd(n, decimals);
    case "money-thousands":
      return formatCompactUsd(n, decimals);
    case "money-millions":
      return `$${formatNumber(n / 1_000_000, decimals)}M`;
    case "percent":
      return `${formatNumber(n, decimals)}%`;
    case "number":
    default:
      return String(Math.round(n));
  }
}

export function LiveTicker({
  start,
  maxIncrement = 250,
  interval = 4200,
  format = "money",
  decimals = 1,
  className,
}: Props) {
  const [value, setValue] = useState(start);
  const [flash, setFlash] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let flashTimer: ReturnType<typeof setTimeout> | null = null;
    const tick = () => {
      if (document.hidden) return;
      const inc = Math.round(Math.random() * maxIncrement) + 1;
      setValue((v) => v + inc);
      setFlash(true);
      if (flashTimer) clearTimeout(flashTimer);
      flashTimer = setTimeout(() => setFlash(false), 700);
    };
    const id = setInterval(tick, interval);
    return () => {
      clearInterval(id);
      if (flashTimer) clearTimeout(flashTimer);
    };
  }, [interval, maxIncrement]);

  return (
    <span
      suppressHydrationWarning
      className={`${className ?? ""} inline-block transition-colors duration-700 ${
        mounted && flash ? "text-lime-300" : ""
      }`}
    >
      {formatValue(value, format, decimals)}
    </span>
  );
}
