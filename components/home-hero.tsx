"use client";

import { getImageProps } from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ButtonPrimary } from "@/components/button-primary";
import { MenuButton, SiteMenu, useSiteMenu } from "@/components/site-menu";
import {
  HERO_READY_EVENT,
  LOADER_DONE_EVENT,
} from "@/components/page-loader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { href: "/works", label: "WORKS" },
  { href: "/studio", label: "STUDIO" },
  { href: "/process", label: "PROCESS" },
  { href: "/gallery", label: "GALLERY" },
] as const;

const heroAlt = "JT Interiors featured architectural interior";

/** Mobile portrait cover is height-driven; 130vw keeps 3x phones sharp. */
const heroMobileSizes = "130vw";
const heroDesktopSizes = "100vw";

const {
  props: { srcSet: heroDesktopSrcSet },
} = getImageProps({
  alt: heroAlt,
  sizes: heroDesktopSizes,
  quality: 90,
  priority: true,
  src: "/images/Hero(2).jpg",
  width: 6144,
  height: 3240,
});

const {
  props: {
    srcSet: heroMobileSrcSet,
    width: _heroWidth,
    height: _heroHeight,
    style: _heroStyle,
    ...heroImgProps
  },
} = getImageProps({
  alt: heroAlt,
  sizes: heroMobileSizes,
  quality: 90,
  priority: true,
  src: "/images/hero-mobile.jpg",
  width: 1823,
  height: 3240,
});

export function HomeHero() {
  const lenis = useLenis();
  const { open, setOpen, panelId } = useSiteMenu();
  const rootRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const centerRef = useRef<HTMLParagraphElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Entrance: image settle + staggered UI after loader
  useEffect(() => {
    const media = mediaRef.current;
    const header = headerRef.current;
    const center = centerRef.current;
    const bottom = bottomRef.current;
    if (!media || !header || !center || !bottom) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const bottomItems = bottom.children;

    if (reduceMotion) {
      gsap.set([media, header, center, bottomItems], {
        clearProps: "all",
      });
      return;
    }

    gsap.set(media, { scale: 1.08 });
    gsap.set(header, { y: -28, opacity: 0 });
    gsap.set(center, { y: 20, opacity: 0 });
    gsap.set(bottomItems, { y: 32, opacity: 0 });

    const playEntrance = () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.to(
        media,
        { scale: 1, duration: 1.45, ease: "power2.out" },
        0,
      )
        .to(header, { y: 0, opacity: 1, duration: 0.95 }, 0.12)
        .to(center, { y: 0, opacity: 1, duration: 0.9 }, 0.32)
        .to(
          bottomItems,
          { y: 0, opacity: 1, duration: 0.95, stagger: 0.12 },
          0.48,
        );

      return tl;
    };

    let entrance: gsap.core.Timeline | null = null;

    const start = () => {
      entrance = playEntrance();
    };

    if (document.documentElement.dataset.loaderDone === "true") {
      start();
    } else {
      window.addEventListener(LOADER_DONE_EVENT, start, { once: true });
    }

    return () => {
      window.removeEventListener(LOADER_DONE_EVENT, start);
      entrance?.kill();
    };
  }, []);

  // Scroll-linked parallax (after entrance baseline of scale 1)
  useEffect(() => {
    const root = rootRef.current;
    const media = mediaRef.current;
    const content = contentRef.current;
    const spacer = spacerRef.current;
    if (!root || !media || !content || !spacer) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        const { reduceMotion, isMobile } = context.conditions!;
        if (reduceMotion) return;

        const scaleTo = isMobile ? 1.04 : 1.14;
        const yPercentTo = isMobile ? 12 : 22;

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
          { yPercent: yPercentTo, scale: scaleTo, ease: "none" },
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
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <>
      <section
        ref={rootRef}
        className="fixed inset-0 z-0 h-dvh w-full overflow-hidden text-on-dark"
      >
        <div
          ref={mediaRef}
          className="absolute inset-0 will-change-transform"
        >
          <picture>
            <source
              media="(min-width: 768px)"
              srcSet={heroDesktopSrcSet}
              sizes={heroDesktopSizes}
            />
            <img
              {...heroImgProps}
              srcSet={heroMobileSrcSet}
              sizes={heroMobileSizes}
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
              ref={(img) => {
                if (!img) return;
                const markReady = () => {
                  document.documentElement.dataset.heroReady = "true";
                  window.dispatchEvent(new Event(HERO_READY_EVENT));
                };
                if (img.complete && img.naturalWidth > 0) {
                  markReady();
                  return;
                }
                img.addEventListener("load", markReady, { once: true });
              }}
            />
          </picture>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-gradient-to-t from-black/55 via-black/20 to-transparent"
          aria-hidden
        />

        <div
          ref={contentRef}
          className="relative z-10 flex h-dvh flex-col justify-between px-6 py-7 will-change-transform md:px-12 md:py-9 lg:px-16"
        >
          <header
            ref={headerRef}
            className="grid grid-cols-[1fr_auto] items-center gap-4 will-change-transform md:grid-cols-[auto_1fr_auto]"
          >
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
                  className="group text-[14px] leading-[14px] font-semibold tracking-[0.08em]"
                >
                  <span className="relative block h-[14px] overflow-hidden">
                    <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                      <span className="block h-[14px]">{link.label}</span>
                      <span className="block h-[14px]" aria-hidden>
                        {link.label}
                      </span>
                    </span>
                  </span>
                </Link>
              ))}
            </nav>

            <MenuButton
              onClick={() => setOpen(true)}
              expanded={open}
              controls={panelId}
              className="md:hidden"
            />
            <div className="hidden md:block">
              <ButtonPrimary />
            </div>
          </header>

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <p
              ref={centerRef}
              className="flex items-baseline gap-[0.28em] text-[15px] leading-[17px] font-black tracking-[0.08em] will-change-transform md:text-[16px] md:leading-[18px]"
            >
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
          </div>

          <div
            ref={bottomRef}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6"
          >
            <p className="w-full text-[22px] leading-[28px] font-bold tracking-[-0.02em] will-change-transform md:w-auto md:max-w-none md:text-[33px] md:leading-[39px]">
              The JT Interior style is defined by{" "}
              <br className="hidden md:block" />
              strong, solid forms with subtle elegance,{" "}
              <br className="hidden md:block" />
              natural balance and enduring appeal
            </p>

            <p className="text-[16px] leading-[19px] font-bold tracking-[0.06em] will-change-transform md:shrink-0 md:self-end">
              (SCROLL DOWN)
            </p>
          </div>
        </div>
      </section>

      <div
        ref={spacerRef}
        className="pointer-events-none relative z-0 h-dvh"
        aria-hidden
      />

      <SiteMenu open={open} onOpenChange={setOpen} panelId={panelId} />
    </>
  );
}
