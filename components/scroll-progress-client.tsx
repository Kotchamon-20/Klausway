"use client";

import dynamic from "next/dynamic";

export const ScrollProgressClient = dynamic(
  () =>
    import("@/components/animation/scroll-progress").then(
      (m) => m.ScrollProgress,
    ),
  { ssr: false },
);
