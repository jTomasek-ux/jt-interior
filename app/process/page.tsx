import type { Metadata } from "next";
import Image from "next/image";
import { ButtonPrimary } from "@/components/button-primary";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import {
  capabilities,
  capabilitiesCopy,
  capabilitiesImage,
} from "@/lib/capabilities";

export const metadata: Metadata = {
  title: "Process — JT Interiors",
  description:
    "Our 6-stage interior design process — from concept and brief through delivery and coordination.",
};

export default function ProcessPage() {
  return (
    <main className="relative z-10 min-h-dvh bg-background text-foreground">
      <PageHeader activeHref="/process" />

      <section className="px-4 pb-20 pt-10 md:px-8 md:pb-28 md:pt-14 lg:px-12">
        <p className="mb-10 text-[14px] leading-[17px] font-bold tracking-[0.06em] uppercase md:mb-14">
          (Process)
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:gap-12 lg:gap-20">
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden">
              <Image
                src={capabilitiesImage}
                alt="JT Interiors process"
                fill
                sizes="(max-width: 768px) 100vw, 38vw"
                className="object-cover"
                priority
              />
            </div>

            <ol className="flex flex-col md:max-w-[420px]">
              {capabilities.map((capability) => (
                <li
                  key={capability.id}
                  className="flex items-baseline gap-3 border-t border-black/15 py-3.5 text-[14px] leading-[18px] font-medium tracking-[-0.01em] last:border-b"
                >
                  <span className="shrink-0 tabular-nums text-foreground/60">
                    ({capability.index})
                  </span>
                  <span>{capability.title}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-10 md:gap-12 md:pt-2">
            <div className="flex flex-col gap-6 md:gap-7">
              {capabilitiesCopy.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[22ch] text-[clamp(1.75rem,3.8vw,3.25rem)] leading-[1.02] font-bold tracking-[-0.035em]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-8 border-t border-black/15 pt-8">
              {capabilities.map((capability) => (
                <div key={capability.id} className="grid grid-cols-[auto_1fr] gap-4 md:gap-6">
                  <span className="text-[13px] leading-[18px] font-bold tracking-[0.04em] text-foreground/50">
                    ({capability.index})
                  </span>
                  <div>
                    <h2 className="mb-1 text-[18px] leading-[22px] font-bold tracking-[-0.02em] md:text-[20px]">
                      {capability.title}
                    </h2>
                    <p className="max-w-[46ch] text-[14px] leading-[1.45] font-medium text-foreground/75 md:text-[15px]">
                      {capability.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <ButtonPrimary
              href="/contact"
              label="TELL US ABOUT YOUR PROJECT"
              className="w-fit"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
