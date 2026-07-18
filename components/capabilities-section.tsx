"use client";

import Image from "next/image";
import { ButtonPrimary } from "@/components/button-primary";
import { ScrollSlide } from "@/components/scroll-slide";
import {
  capabilities,
  capabilitiesCopy,
  capabilitiesImage,
} from "@/lib/capabilities";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative z-10 bg-background px-4 pb-24 pt-16 md:px-8 md:pb-32 md:pt-20 lg:px-12"
      aria-label="Capabilities"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] md:gap-10 lg:gap-16 xl:gap-24">
        <ScrollSlide fromY={120} className="flex flex-col gap-8 md:gap-10">
          <p className="text-[14px] leading-[17px] font-bold tracking-[0.06em] uppercase text-foreground">
            (&nbsp;Our Capabilities)
          </p>

          <div className="relative aspect-[3/4] w-full overflow-hidden md:max-w-[420px]">
            <Image
              src={capabilitiesImage}
              alt="JT Interiors spatial detail"
              fill
              sizes="(max-width: 768px) 100vw, 38vw"
              className="object-cover"
            />
          </div>

          <ol className="flex flex-col md:max-w-[420px]">
            {capabilities.map((capability) => (
              <li
                key={capability.id}
                className="flex items-baseline gap-3 border-t border-black/15 py-3.5 text-[14px] leading-[18px] font-medium tracking-[-0.01em] text-foreground last:border-b"
              >
                <span className="shrink-0 tabular-nums text-foreground/60">
                  ({capability.index})
                </span>
                <span>{capability.title}</span>
              </li>
            ))}
          </ol>
        </ScrollSlide>

        <ScrollSlide
          fromY={140}
          className="flex flex-col justify-between gap-12 md:min-h-full md:pt-10 lg:pt-14"
        >
          <div className="flex flex-col gap-7 md:gap-8">
            {capabilitiesCopy.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[22ch] text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.02] font-bold tracking-[-0.035em] text-foreground md:max-w-[20ch]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ButtonPrimary
            href="/process"
            label="GET TO KNOW OUR PROCESS"
            className="w-fit self-start md:self-center"
          />
        </ScrollSlide>
      </div>
    </section>
  );
}
