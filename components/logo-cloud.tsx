const logos = [
  "BuildRight",
  "Pacific Roofing",
  "Metro Insurance",
  "DataFlow",
  "Summit Roofing",
  "GreenField",
  "KLR Services",
  "NorthStar Ops",
  "Wayne Tech",
  "Acme Corp",
];

export function LogoCloud() {
  return (
    <section className="border-y border-white/5 bg-background/50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Powering operations across construction, field services, insurance &amp; finance
        </p>
        <div className="mask-fade-right mt-8 overflow-hidden">
          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-2 text-xl font-semibold tracking-tight text-muted-foreground/60"
              >
                <div className="h-6 w-6 rounded bg-muted-foreground/20" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
