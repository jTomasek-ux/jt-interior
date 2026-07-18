"use client";

import { useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

export function ContactScrollLock({ children }: { children: ReactNode }) {
  const lenis = useLenis();

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    lenis?.stop();

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      lenis?.start();
    };
  }, [lenis]);

  return <>{children}</>;
}
