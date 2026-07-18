"use client";

import { useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

/** Locks page scroll on desktop only — mobile can scroll to reach the send button. */
export function ContactScrollLock({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const mq = window.matchMedia("(min-width: 768px)");

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    const apply = () => {
      if (mq.matches) {
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
        lenis?.stop();
      } else {
        html.style.overflow = prevHtmlOverflow;
        body.style.overflow = prevBodyOverflow;
        lenis?.start();
      }
    };

    apply();
    mq.addEventListener("change", apply);

    return () => {
      mq.removeEventListener("change", apply);
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      lenis?.start();
    };
  }, [lenis]);

  return <>{children}</>;
}
