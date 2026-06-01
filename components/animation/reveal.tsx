"use client";

import {
  createElement,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

type RevealTag = "div" | "section" | "li" | "article" | "header" | "footer";

type RevealProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: 0 | 100 | 200 | 300 | 400;
  threshold?: number;
  rootMargin?: string;
  as?: RevealTag;
};

export function Reveal({
  children,
  className,
  id,
  delay = 0,
  threshold = 0.12,
  rootMargin = "0px 0px -80px 0px",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.reveal = "visible";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        (entry.target as HTMLElement).dataset.reveal = entry.isIntersecting
          ? "visible"
          : "hidden";
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return createElement(
    Tag,
    {
      ref,
      id,
      className,
      "data-reveal": "hidden",
      ...(delay > 0 ? { "data-reveal-delay": String(delay) } : {}),
    },
    children,
  );
}
