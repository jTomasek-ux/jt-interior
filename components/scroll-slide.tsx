"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

type ScrollSlideProps = {
  children: ReactNode;
  className?: string;
  /** Starting Y offset in px — higher = more dramatic slide-in. */
  fromY?: number;
};

export function ScrollSlide({
  children,
  className = "",
  fromY = 120,
}: ScrollSlideProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.fromTo(
        el,
        { y: fromY, opacity: 0.25 },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            end: "top 40%",
            scrub: 0.9,
          },
        },
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [fromY]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
