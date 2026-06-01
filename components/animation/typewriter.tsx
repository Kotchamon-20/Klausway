"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "./use-in-view";

type Props = {
  text: string;
  speed?: number;
  startDelay?: number;
  caret?: boolean;
  className?: string;
};

export function Typewriter({
  text,
  speed = 22,
  startDelay = 200,
  caret = true,
  className,
}: Props) {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.4 });
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const clearAll = () => {
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };

    clearAll();

    if (!inView) {
      setOut("");
      setDone(false);
      return;
    }

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setOut(text);
      setDone(true);
      return;
    }

    setOut("");
    setDone(false);

    const startTimer = setTimeout(() => {
      for (let i = 1; i <= text.length; i++) {
        timeoutsRef.current.push(
          setTimeout(() => {
            setOut(text.slice(0, i));
            if (i === text.length) setDone(true);
          }, i * speed),
        );
      }
    }, startDelay);
    timeoutsRef.current.push(startTimer);

    return clearAll;
  }, [inView, text, speed, startDelay]);

  return (
    <span ref={ref} className={`${className ?? ""} ${caret && !done ? "caret" : ""}`}>
      {out}
    </span>
  );
}
