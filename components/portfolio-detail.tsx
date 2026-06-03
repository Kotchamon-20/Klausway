import Link from "next/link";
import { ArrowLeft, CircleCheck } from "lucide-react";
import { Reveal } from "./animation/reveal";
import type { PortfolioProject } from "@/lib/portfolio";
import { routes } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type PortfolioDetailProps = {
  project: PortfolioProject;
};

export function PortfolioDetail({ project }: PortfolioDetailProps) {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <Link
            href={routes.portfolio}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </Reveal>

        <Reveal delay={100} className="mt-8">
          <div
            className={cn(
              "h-1.5 w-full rounded-full bg-gradient-to-r",
              project.accent,
            )}
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          <DetailBlock title="Key Features" items={project.keyFeatures} delay={200} />
          <DetailBlock title="Benefits" items={project.benefits} delay={300} />
          <DetailBlock
            title="Use Cases"
            items={project.useCases}
            delay={400}
            checkmark
          />
        </div>
      </div>
    </section>
  );
}

function DetailBlock({
  title,
  items,
  delay,
  checkmark = false,
}: {
  title: string;
  items: string[];
  delay: 0 | 100 | 200 | 300 | 400;
  checkmark?: boolean;
}) {
  return (
    <Reveal
      delay={delay}
      className="rounded-2xl border border-white/5 bg-card/40 p-6 backdrop-blur md:p-8"
    >
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
          >
            <CircleCheck
              className={cn(
                "mt-0.5 h-4 w-4 shrink-0",
                checkmark ? "text-lime-400" : "text-brand-300",
              )}
            />
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
