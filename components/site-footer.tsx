"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollSlide } from "@/components/scroll-slide";
import {
  footerImage,
  footerInfo,
  footerNav,
  footerStudioNote,
} from "@/lib/footer";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative z-10 bg-background px-4 pb-8 pt-8 md:px-8 md:pb-10 md:pt-12 lg:px-12"
    >
      <ScrollSlide fromY={100}>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          <div className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden">
            <Image
              src={footerImage}
              alt="JT Interiors project exterior"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <nav aria-label="Footer">
            <p className="mb-6 text-[12px] leading-[15px] font-bold tracking-[0.08em] uppercase text-foreground md:mb-8">
              (Navigation)
            </p>
            <ul className="flex flex-col">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex py-0.5 text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.02] font-bold tracking-[-0.035em] text-foreground"
                  >
                    <span className="relative block h-[1.02em] overflow-hidden">
                      <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                        <span className="block h-[1.02em]">{item.label}</span>
                        <span className="block h-[1.02em]" aria-hidden>
                          {item.label}
                        </span>
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-10 md:gap-12">
            <div>
              <p className="mb-4 text-[12px] leading-[15px] font-bold tracking-[0.08em] uppercase text-foreground">
                (Studio)
              </p>
              <p className="max-w-[36ch] text-[14px] leading-[1.35] font-medium tracking-[-0.01em] text-foreground">
                {footerStudioNote}
              </p>
            </div>

            <div>
              <p className="mb-4 text-[12px] leading-[15px] font-bold tracking-[0.08em] uppercase text-foreground">
                (Info)
              </p>
              <ul className="flex flex-col gap-2">
                {footerInfo.map((row) => (
                  <li
                    key={row.label}
                    className="flex gap-3 text-[14px] leading-[1.35] font-medium tracking-[-0.01em] text-foreground"
                  >
                    <span className="w-4 shrink-0 font-bold">{row.label}:</span>
                    {"href" in row && row.href ? (
                      <a href={row.href} className="hover:underline">
                        {row.value}
                      </a>
                    ) : (
                      <span>{row.value}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-foreground md:mt-20">
          <svg
            className="block w-full font-sans"
            viewBox="0 0 1000 160"
            preserveAspectRatio="xMidYMax meet"
            role="img"
            aria-label="JT Interiors"
          >
            <text
              x="0"
              y="155"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              fill="currentColor"
              style={{
                fontSize: 155,
                fontWeight: 700,
                fontFamily: "inherit",
              }}
            >
              JT Interiors
            </text>
          </svg>

          <div className="flex flex-col gap-6 border-t border-black/10 pt-6 text-[11px] leading-[14px] font-bold tracking-[0.06em] uppercase md:flex-row md:items-start md:justify-between md:gap-8">
            <div className="flex flex-col gap-1">
              <span>© {year} JT Interiors</span>
              <span className="font-medium tracking-[0.04em] text-foreground/55">
                By appointment
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <Link href="/privacy" className="group inline-flex w-fit">
                <span className="relative block h-[14px] overflow-hidden">
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                    <span className="block h-[14px]">Privacy Policy</span>
                    <span className="block h-[14px]" aria-hidden>
                      Privacy Policy
                    </span>
                  </span>
                </span>
              </Link>
              <Link href="/terms" className="group inline-flex w-fit">
                <span className="relative block h-[14px] overflow-hidden">
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                    <span className="block h-[14px]">Terms of Service</span>
                    <span className="block h-[14px]" aria-hidden>
                      Terms of Service
                    </span>
                  </span>
                </span>
              </Link>
            </div>

            <div className="flex items-baseline gap-[0.35em]">
              <span>site by</span>
              <a
                href="https://jtomasek.com"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex border-b border-current pb-px"
              >
                <span className="relative block h-[14px] overflow-hidden">
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                    <span className="block h-[14px]">jTomasek</span>
                    <span className="block h-[14px]" aria-hidden>
                      jTomasek
                    </span>
                  </span>
                </span>
              </a>
            </div>

            <div className="flex md:justify-end">
              <Link href="/contact" className="group inline-flex">
                <span className="relative block h-[14px] overflow-hidden">
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                    <span className="block h-[14px] underline underline-offset-2">
                      Get in touch
                    </span>
                    <span
                      className="block h-[14px] underline underline-offset-2"
                      aria-hidden
                    >
                      Get in touch
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </ScrollSlide>
    </footer>
  );
}
