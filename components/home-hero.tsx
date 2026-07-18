"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "/works", label: "WORKS" },
  { href: "/studio", label: "STUDIO" },
  { href: "/process", label: "PROCESS" },
  { href: "/gallery", label: "GALLERY" },
] as const;

export function HomeHero() {
  const lenis = useLenis();
  const rootRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const media = mediaRef.current;
    const content = contentRef.current;
    const spacer = spacerRef.current;
    if (!root || !media || !content || !spacer) return;

    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: spacer,
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      });

      tl.fromTo(
        media,
        { yPercent: 0, scale: 1 },
        { yPercent: 22, scale: 1.14, ease: "none" },
        0,
      ).fromTo(
        content,
        { yPercent: 0, opacity: 1 },
        { yPercent: -18, opacity: 0, ease: "none" },
        0,
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <section
        ref={rootRef}
        className="fixed inset-0 z-0 h-dvh w-full overflow-hidden text-on-dark"
      >
        <div ref={mediaRef} className="absolute inset-0 will-change-transform">
          <Image
            src="/images/Hero(2).jpg"
            alt="JT Interiors featured architectural interior"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-gradient-to-t from-black/55 via-black/20 to-transparent"
          aria-hidden
        />

        <div
          ref={contentRef}
          className="relative z-10 flex h-dvh flex-col justify-between px-6 py-7 will-change-transform md:px-12 md:py-9 lg:px-16"
        >
          <header className="grid grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[auto_1fr_auto]">
            <Link
              href="/"
              className="text-[24px] leading-[28px] font-bold tracking-[-0.04em] md:text-[56px] md:leading-[59px]"
            >
              JT Interiors
            </Link>

            <nav
              className="hidden items-center justify-center gap-[0.5em] md:flex"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] leading-[14px] font-semibold tracking-[0.08em]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-[100px] bg-black px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark"
            >
              <span className="relative block h-[14px] overflow-hidden">
                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                  <span className="block h-[14px]">GET IN TOUCH</span>
                  <span className="block h-[14px]" aria-hidden>
                    GET IN TOUCH
                  </span>
                </span>
              </span>
              <span
                className="inline-block size-1.5 shrink-0 rounded-full border border-white transition-[background-color] duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:bg-white group-focus-visible:bg-white"
                aria-hidden
              />
            </Link>
          </header>

          <p className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-baseline gap-[0.28em] text-[15px] leading-[17px] font-black tracking-[0.08em] md:text-[16px] md:leading-[18px]">
            <span>we are</span>
            <Link
              href="#works"
              onClick={(event) => {
                event.preventDefault();
                if (lenis) {
                  lenis.scrollTo("#works", { offset: -24 });
                  return;
                }
                document
                  .getElementById("works")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex border-b border-current pb-px"
            >
              <span className="relative block h-[17px] overflow-hidden md:h-[18px]">
                <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                  <span className="block h-[17px] md:h-[18px]">different</span>
                  <span className="block h-[17px] md:h-[18px]" aria-hidden>
                    different
                  </span>
                </span>
              </span>
            </Link>
          </p>

          <div className="flex items-end justify-between gap-6">
            <p className="max-w-[22ch] text-[22px] leading-[28px] font-bold tracking-[-0.02em] md:max-w-none md:text-[33px] md:leading-[39px]">
              The JT Interior style is defined by
              <br />
              strong, solid forms with subtle elegance,
              <br />
              natural balance and enduring appeal
            </p>

            <p className="shrink-0 self-end text-[16px] leading-[19px] font-bold tracking-[0.06em]">
              (SCROLL DOWN)
            </p>
          </div>
        </div>
      </section>

      {/* Scroll runway — works section slides over the fixed hero */}
      <div
        ref={spacerRef}
        className="pointer-events-none relative z-0 h-dvh"
        aria-hidden
      />
    </>
  );
}
