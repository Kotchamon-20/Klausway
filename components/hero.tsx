import Link from "next/link";
import { ArrowRight, Sparkles, CircleCheck } from "lucide-react";
import { CrmDashboardPreview } from "./crm-dashboard-preview";
import { AmbientBackground } from "./animation/ambient-background";
import { routes } from "@/lib/navigation";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <AmbientBackground variant="hero" />
      <div className="dot-pattern mask-fade-bottom absolute inset-0 -z-10 opacity-40" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href={routes.apps}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10 hover:text-foreground animate-fade-up"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-lime-400/70 animate-ping-soft" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-lime-400 shadow-[0_0_8px_rgba(163,230,53,0.8)]" />
            </span>
            Unix29 Apps Portal — one gateway for your entire business stack
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <h1
            className="mt-8 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl animate-fade-up-stagger"
            style={{ animationDelay: "100ms" }}
          >
            The central gateway for
            <br />
            <span className="text-gradient-animated">modern business operations</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl animate-fade-up-stagger"
            style={{ animationDelay: "250ms" }}
          >
            Automation, CRM, AI voice, developer tools, and finance —
            <br />
            connected in one seamless workflow ecosystem.
          </p>

          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up-stagger"
            style={{ animationDelay: "400ms" }}
          >
            <Link
              href={routes.pricing}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/20 active:scale-100"
            >
              Access the Portal
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#features"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-white/20 hover:bg-white/10"
            >
              <Sparkles className="h-4 w-4 text-brand-300 transition-transform group-hover:rotate-12" />
              Explore all apps
            </Link>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground animate-fade-up-stagger"
            style={{ animationDelay: "550ms" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-lime-400" />
              9 integrated apps
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-lime-400" />
              Single sign-on access
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-lime-400" />
              Built for any industry
            </span>
          </div>
        </div>

        <div
          className="relative mt-20 animate-fade-up-stagger"
          style={{ animationDelay: "700ms" }}
        >
          <div className="absolute -inset-x-20 -top-10 -bottom-10 -z-10 bg-radial-glow blur-3xl" />
          <CrmDashboardPreview />
        </div>

        <ProductGridLinks />
      </div>
    </section>
  );
}

const products = [
  { label: "Klaus Connect", color: "from-blue-400 to-cyan-400", id: "klaus-connect" },
  { label: "Admin & Reports", color: "from-violet-400 to-purple-400", id: "klaus-admin" },
  { label: "Customer Portal", color: "from-fuchsia-400 to-pink-400", id: "customer-portal" },
  { label: "CRM Intelligence", color: "from-amber-400 to-orange-400", id: "crm-intelligence" },
  { label: "n8n Console", color: "from-emerald-400 to-teal-400", id: "n8n-console" },
  { label: "FileMaker Tools", color: "from-rose-400 to-red-400", id: "filemaker" },
  { label: "MailAgent", color: "from-indigo-400 to-blue-400", id: "mailagent" },
  { label: "Spendledger", color: "from-lime-400 to-green-400", id: "spendledger" },
  { label: "Field Apps", color: "from-cyan-400 to-sky-400", id: "field-apps" },
];

function ProductGridLinks() {
  return (
    <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-3">
      {products.map((p, i) => (
        <Link
          key={p.label}
          href={`#${p.id}`}
          className="hover-lift group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all hover:border-white/10 hover:bg-white/[0.04] animate-fade-up-stagger"
          style={{ animationDelay: `${i * 50}ms` }}
        >
          <span
            className={`absolute inset-x-0 -bottom-px h-px bg-gradient-to-r ${p.color} opacity-0 transition-opacity group-hover:opacity-100`}
          />
          <span
            className={`pointer-events-none absolute -left-10 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100`}
          />
          <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
            {p.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
