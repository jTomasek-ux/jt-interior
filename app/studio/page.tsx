import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonPrimary } from "@/components/button-primary";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { capabilitiesImage } from "@/lib/capabilities";
import { studioCopy } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Studio — JT Interiors",
  description:
    "JT Interiors designs spaces guided by strong form, quiet elegance, and enduring materials.",
};

export default function StudioPage() {
  return (
    <main className="relative z-10 min-h-dvh bg-background text-foreground">
      <PageHeader activeHref="/studio" />

      <section className="px-4 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-14 lg:gap-20">
          <div>
            <p className="mb-6 text-[14px] leading-[17px] font-bold tracking-[0.06em] uppercase">
              {studioCopy.eyebrow}
            </p>
            <div className="relative aspect-[3/4] w-full max-w-[480px] overflow-hidden">
              <Image
                src={capabilitiesImage}
                alt="JT Interiors studio atmosphere"
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8 md:gap-10">
            <h1 className="max-w-[12ch] text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] font-bold tracking-[-0.04em]">
              {studioCopy.headline}
            </h1>

            <div className="flex flex-col gap-5">
              {studioCopy.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[42ch] text-[17px] leading-[1.4] font-medium tracking-[-0.01em] text-foreground/85 md:text-[19px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 border-t border-black/15 pt-8 sm:grid-cols-3">
              {studioCopy.values.map((value) => (
                <div key={value.title}>
                  <h2 className="mb-2 text-[15px] leading-[18px] font-bold tracking-[-0.02em]">
                    {value.title}
                  </h2>
                  <p className="text-[13px] leading-[1.4] font-medium text-foreground/70">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <ButtonPrimary href="/contact" label="GET IN TOUCH" />
              <Link
                href="/process"
                className="group inline-flex text-[14px] leading-[14px] font-bold tracking-[0.06em]"
              >
                <span className="relative block h-[14px] overflow-hidden">
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                    <span className="block h-[14px]">Our process →</span>
                    <span className="block h-[14px]" aria-hidden>
                      Our process →
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
