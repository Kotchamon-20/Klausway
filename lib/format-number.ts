/**
 * Deterministic number formatting for SSR/client hydration safety.
 * Avoids `toLocaleString` which can differ between Node and browser ICU.
 */
export function formatNumber(
  value: number,
  decimals = 0,
): string {
  if (decimals <= 0) return String(Math.round(value));
  const factor = 10 ** decimals;
  return (Math.round(value * factor) / factor).toFixed(decimals);
}

export function formatCompactUsd(
  value: number,
  decimals = 1,
): string {
  if (value >= 1_000_000) {
    return `$${formatNumber(value / 1_000_000, decimals)}M`;
  }
  if (value >= 1_000) {
    return `$${formatNumber(value / 1_000, decimals)}K`;
  }
  return `$${formatNumber(value, decimals)}`;
}

export function formatUsd(value: number, decimals = 0): string {
  const n = Math.round(value);
  return `$${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
