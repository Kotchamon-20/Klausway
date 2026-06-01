import { Quote, Star } from "lucide-react";
import { Reveal } from "./animation/reveal";
import { AnimatedCounter } from "./animation/animated-counter";

const testimonials = [
  {
    quote:
      "Klaus Connect replaced three separate systems for us. Sales, operations, and finance finally share one source of truth — and our clients love the self-service portal.",
    author: "Priya Patel",
    role: "Operations Director, BuildRight Construction",
    avatar: "PP",
    rating: 5,
  },
  {
    quote:
      "The n8n Console eliminated hours of manual data entry every week. Workflows between Klaus Connect and QuickBooks now run automatically while we sleep.",
    author: "James Rodriguez",
    role: "IT Manager, Pacific Roofing Co.",
    avatar: "JR",
    rating: 5,
  },
  {
    quote:
      "CRM Intelligence & AI Call handles our inbound leads 24/7. The VAPI integration captures every detail straight into Klaus Connect — our reps only talk to qualified prospects.",
    author: "Olivia Chen",
    role: "Sales Lead, Metro Insurance Group",
    avatar: "OC",
    rating: 5,
  },
  {
    quote:
      "FileMaker Analyzer saved us weeks on our database migration. We validated every Data API call before going live — zero surprises on launch day.",
    author: "Marcus Thompson",
    role: "Lead Developer, DataFlow Solutions",
    avatar: "MT",
    rating: 5,
  },
  {
    quote:
      "The Roof Estimator field app changed how our sales team works on-site. Instant quotes from the truck, synced to Klaus Connect before they leave the driveway.",
    author: "David Kim",
    role: "VP Sales, Summit Roofing LLC",
    avatar: "DK",
    rating: 5,
  },
  {
    quote:
      "Spendledger plus QuickBooks Payment links closed our finance gap. Clients pay faster, we track every dollar, and it all flows back into the CRM automatically.",
    author: "Emma Williams",
    role: "CFO, GreenField Services",
    avatar: "EW",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="customers" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-fuchsia-500/[0.03] to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            Trusted across industries
          </div>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Teams run smarter
            <br />
            <span className="text-gradient-animated">on the Unix29 Portal</span>
          </h2>
          <p className="mt-5 text-balance text-lg text-muted-foreground">
            From construction and field services to insurance and finance —
            businesses of every size rely on the Unix29 ecosystem.
          </p>
        </Reveal>

        <Reveal as="div" delay={100} className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-card/40 p-8 backdrop-blur md:grid-cols-4">
          <Stat to={9} label="Portal apps" />
          <Stat to={4} label="Business pillars" />
          <Stat to={98} suffix="%" label="Workflow uptime" />
          <Stat to={3} suffix="×" label="Avg. efficiency gain" />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              as="div"
              key={i}
              delay={((i % 3) * 100) as 0 | 100 | 200 | 300 | 400}
              className="hover-lift group relative flex flex-col rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur transition-all hover:border-white/10 hover:bg-card/60 hover:shadow-xl hover:shadow-brand-500/5"
            >
              <Quote className="h-6 w-6 text-brand-400/40 transition-colors group-hover:text-brand-300/60" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-fuchsia-500 text-xs font-semibold text-white">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-medium">{t.author}</div>
                  <div className="text-[10px] text-muted-foreground">
                    {t.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  to,
  prefix,
  suffix,
  decimals,
  label,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="text-3xl font-semibold tracking-tight md:text-4xl">
        <span className="text-gradient-animated tabular-nums">
          <AnimatedCounter
            to={to}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
            duration={2000}
          />
        </span>
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
