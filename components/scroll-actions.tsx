"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ButtonPrimary } from "@/components/button-primary";
import { MenuButton, SiteMenu, useSiteMenu } from "@/components/site-menu";

gsap.registerPlugin(ScrollTrigger);

export function ScrollActions() {
  const barRef = useRef<HTMLDivElement>(null);
  const { open, setOpen, panelId } = useSiteMenu();
  const pathname = usePathname();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    // Contact page is scroll-locked — keep chrome hidden
    if (pathname === "/contact") {
      gsap.set(bar, { autoAlpha: 0, pointerEvents: "none" });
      return;
    }

    const mm = gsap.matchMedia();
    const works = document.getElementById("works");

    const showConfig = works
      ? {
          trigger: "#works",
          start: "top top+=72",
          end: "top top+=24",
          toggleActions: "play none none reverse" as const,
        }
      : {
          start: 72,
          end: 110,
          toggleActions: "play none none reverse" as const,
        };

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(bar, { autoAlpha: 0, y: -16, pointerEvents: "none" });

      const tween = gsap.to(bar, {
        autoAlpha: 1,
        y: 0,
        pointerEvents: "auto",
        ease: "power2.out",
        duration: 0.45,
        scrollTrigger: showConfig,
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(bar, { autoAlpha: 0, pointerEvents: "none" });

      const trigger = ScrollTrigger.create({
        ...(works
          ? { trigger: "#works", start: "top top+=72" }
          : { start: 72 }),
        onEnter: () => {
          bar.style.opacity = "1";
          bar.style.pointerEvents = "auto";
        },
        onLeaveBack: () => {
          bar.style.opacity = "0";
          bar.style.pointerEvents = "none";
        },
      });

      return () => trigger.kill();
    });

    return () => mm.revert();
  }, [pathname]);

  return (
    <>
      <div
        ref={barRef}
        className="pointer-events-none fixed top-7 right-6 z-50 flex items-center gap-2.5 opacity-0 md:top-9 md:right-12 lg:right-16"
      >
        <ButtonPrimary />
        <MenuButton
          onClick={() => setOpen(true)}
          expanded={open}
          controls={panelId}
        />
      </div>

      <SiteMenu open={open} onOpenChange={setOpen} panelId={panelId} />
    </>
  );
}
