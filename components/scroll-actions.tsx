"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ButtonPrimary } from "@/components/button-primary";

gsap.registerPlugin(ScrollTrigger);

const menuLinks = [
  { href: "/works", label: "WORKS" },
  { href: "/studio", label: "STUDIO" },
  { href: "/process", label: "PROCESS" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact", label: "CONTACT" },
] as const;

export function ScrollActions() {
  const barRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuTitleId = useId();

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set(bar, { autoAlpha: 0, y: -16, pointerEvents: "none" });

      const tween = gsap.to(bar, {
        autoAlpha: 1,
        y: 0,
        pointerEvents: "auto",
        ease: "power2.out",
        duration: 0.45,
        scrollTrigger: {
          trigger: "#works",
          start: "top top+=72",
          end: "top top+=24",
          toggleActions: "play none none reverse",
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      const trigger = ScrollTrigger.create({
        trigger: "#works",
        start: "top top+=72",
        onEnter: () => {
          bar.style.opacity = "1";
          bar.style.pointerEvents = "auto";
        },
        onLeaveBack: () => {
          bar.style.opacity = "0";
          bar.style.pointerEvents = "none";
        },
      });

      bar.style.opacity = "0";
      bar.style.pointerEvents = "none";

      return () => trigger.kill();
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <div
        ref={barRef}
        className="pointer-events-none fixed top-7 right-6 z-50 flex items-center gap-2.5 opacity-0 md:top-9 md:right-12 lg:right-16"
      >
        <ButtonPrimary />
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="group inline-flex items-center rounded-[100px] bg-[#F8F8F8] px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-black"
          aria-expanded={menuOpen}
          aria-controls={menuTitleId}
        >
          <span className="relative block h-[14px] overflow-hidden">
            <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
              <span className="block h-[14px]">Menu</span>
              <span className="block h-[14px]" aria-hidden>
                Menu
              </span>
            </span>
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[60] transition-[visibility] duration-300 ${
          menuOpen ? "visible" : "invisible delay-300"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />

        <nav
          id={menuTitleId}
          aria-label="Site"
          className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-[#F8F8F8] px-8 py-8 transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] md:px-10 md:py-9 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mb-16 flex items-center justify-between gap-4">
            <p className="text-[14px] leading-[14px] font-bold tracking-[0.08em] text-black">
              Menu
            </p>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="group inline-flex items-center rounded-[100px] bg-black px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark"
            >
              <span className="relative block h-[14px] overflow-hidden">
                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                  <span className="block h-[14px]">Close</span>
                  <span className="block h-[14px]" aria-hidden>
                    Close
                  </span>
                </span>
              </span>
            </button>
          </div>

          <ul className="flex flex-col gap-5">
            {menuLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group inline-flex text-[42px] leading-[1.05] font-bold tracking-[-0.04em] text-black md:text-[56px]"
                >
                  <span className="relative block h-[44px] overflow-hidden md:h-[59px]">
                    <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                      <span className="block h-[44px] md:h-[59px]">
                        {link.label}
                      </span>
                      <span className="block h-[44px] md:h-[59px]" aria-hidden>
                        {link.label}
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
