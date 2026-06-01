import type { ReactNode } from "react";
import { AmbientBackground } from "./animation/ambient-background";
import { Reveal } from "./animation/reveal";

type PageHeaderProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16">
      <AmbientBackground variant="section" />
      <div className="dot-pattern mask-fade-bottom absolute inset-0 -z-10 opacity-30" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              {eyebrow}
            </div>
          )}
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
