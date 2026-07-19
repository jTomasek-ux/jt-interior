"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const HOLD_AT = 60;
const MAX_MS = 8000;
export const HERO_READY_EVENT = "jt:hero-ready";

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function waitForHero() {
  return new Promise<void>((resolve) => {
    if (document.documentElement.dataset.heroReady === "true") {
      resolve();
      return;
    }

    window.addEventListener(HERO_READY_EVENT, () => resolve(), { once: true });
  });
}

/**
 * Staged preloader (common GSAP pattern):
 * 1) tween progress to 60%
 * 2) pause / hold until assets are ready
 * 3) tween to 100%, then exit
 */
export function PageLoader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const sweepRef = useRef<HTMLDivElement>(null);
  const progressProxy = useRef({ value: 0 });

  useEffect(() => {
    let cancelled = false;
    const isHome = pathname === "/";
    const sweep = sweepRef.current;
    if (!sweep) return;

    document.documentElement.classList.add("is-loading");
    progressProxy.current.value = 0;
    setProgress(0);
    gsap.set(sweep, { width: "0vw" });

    const syncSweep = () => {
      const value = progressProxy.current.value;
      gsap.set(sweep, { width: `${value}vw` });
      setProgress(value);
    };

    const tl = gsap.timeline({
      onUpdate: syncSweep,
    });

    // 1) Go to 60%
    tl.to(progressProxy.current, {
      value: HOLD_AT,
      duration: 1.75,
      ease: "power2.out",
    });

    // 2) Hold here until we call play() again after load
    tl.addPause();

    // 3) Finish to 100%
    tl.to(progressProxy.current, {
      value: 100,
      duration: 0.9,
      ease: "power3.inOut",
    });

    const waitUntilPaused = () =>
      new Promise<void>((resolve) => {
        if (tl.paused()) {
          resolve();
          return;
        }
        const id = window.setInterval(() => {
          if (cancelled || tl.paused()) {
            window.clearInterval(id);
            resolve();
          }
        }, 40);
      });

    const waitUntilComplete = () =>
      new Promise<void>((resolve) => {
        if (!tl.isActive() && tl.progress() === 1) {
          resolve();
          return;
        }
        tl.eventCallback("onComplete", () => resolve());
      });

    const finish = async () => {
      if (cancelled) return;

      await waitUntilPaused();
      if (cancelled) return;

      tl.play(); // resume past the pause → 60% to 100%
      await waitUntilComplete();
      if (cancelled) return;

      setProgress(100);
      setExiting(true);
      await wait(700);
      if (cancelled) return;

      setVisible(false);
      document.documentElement.classList.remove("is-loading");
    };

    const run = async () => {
      await Promise.race([
        Promise.all([
          document.fonts?.ready ?? Promise.resolve(),
          isHome ? waitForHero() : Promise.resolve(),
        ]),
        wait(MAX_MS),
      ]);

      await finish();
    };

    void run();

    return () => {
      cancelled = true;
      tl.kill();
      document.documentElement.classList.remove("is-loading");
    };
  }, [pathname]);

  if (!visible) return null;

  const counter = String(Math.min(100, Math.round(progress))).padStart(2, "0");

  return (
    <div
      className={`loader-screen ${exiting ? "loader-screen--exit" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading ${counter} percent`}
      aria-hidden={exiting}
    >
      <div className="loader-copy loader-copy--base" aria-hidden>
        <p className="loader-brand">JT Interiors</p>
        <p className="loader-counter">{counter}</p>
      </div>

      <div ref={sweepRef} className="loader-sweep">
        <div className="loader-copy loader-copy--invert" aria-hidden>
          <p className="loader-brand">JT Interiors</p>
          <p className="loader-counter">{counter}</p>
        </div>
      </div>

      <span className="sr-only">JT Interiors — loading {counter}%</span>
    </div>
  );
}
