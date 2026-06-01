import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Reveal } from "./animation/reveal";
import { routes } from "@/lib/navigation";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 via-fuchsia-600/15 to-rose-600/10" />
        <div className="dot-pattern absolute inset-0 opacity-20" />
      </div>
      <div className="mx-auto max-w-4xl px-6">
        <Reveal
          as="div"
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-card/60 p-10 text-center backdrop-blur-xl md:p-16"
        >
          <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-500/30 blur-3xl animate-pulse-glow" />
          <div className="absolute -bottom-20 right-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob-2" />
          <h2 className="relative text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Your business gateway
            <br />
            <span className="text-gradient-animated">starts here</span>
          </h2>
          <p className="relative mx-auto mt-5 max-w-lg text-balance text-base text-muted-foreground">
            Access the full Unix29 Apps Portal — CRM, AI, automation,
            developer tools, and finance in one connected ecosystem.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={routes.pricing}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/30 active:scale-100"
            >
              Request portal access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={routes.apps}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold backdrop-blur transition-all hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
            >
              Explore all apps
            </Link>
          </div>

          <div className="relative mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-lime-400" />
              Single sign-on
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-lime-400" />
              Modular plans
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-lime-400" />
              Any industry
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
