"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type InViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

/** Tracks viewport visibility and re-fires whenever the element enters or leaves. */
export function useInView<T extends HTMLElement>(
  options: InViewOptions = {},
): [RefObject<T | null>, boolean] {
  const { threshold = 0.12, rootMargin = "0px 0px -80px 0px" } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
