"use client";

import { useInView } from "./use-in-view";

type Props = {
  data: number[];
  labels: string[];
};

export function AnimatedBarChart({ data, labels }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 });
  const max = Math.max(...data);

  return (
    <div ref={ref}>
      <div className="flex h-40 items-end gap-1.5">
        {data.map((v, i) => (
          <div
            key={i}
            className="group relative flex-1 origin-bottom rounded-t-sm bg-gradient-to-t from-brand-500 to-brand-400 transition-all hover:from-brand-400 hover:to-brand-300"
            style={{
              height: `${(v / max) * 100}%`,
              transform: inView ? "scaleY(1)" : "scaleY(0)",
              transition: `transform 1s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`,
            }}
          >
            <span className="absolute -top-5 left-1/2 hidden -translate-x-1/2 text-[9px] font-medium text-foreground group-hover:block">
              ${v}K
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex gap-1.5">
        {labels.map((m, i) => (
          <div
            key={i}
            className="flex-1 text-center text-[9px] text-muted-foreground"
          >
            {m}
          </div>
        ))}
      </div>
    </div>
  );
}
