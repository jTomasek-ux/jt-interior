"use client";

import { ButtonPrimary } from "@/components/button-primary";
import { ScrollSlide } from "@/components/scroll-slide";

export function PreFooter() {
  return (
    <section
      className="relative z-10 bg-background px-4 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24 lg:px-12"
      aria-label="Get started"
    >
      <ScrollSlide fromY={120} className="flex flex-col items-stretch gap-12 md:gap-16">
        <h2 className="text-[clamp(2.75rem,11vw,9.5rem)] leading-[0.88] font-bold tracking-[-0.05em] uppercase text-foreground">
          <span className="block">Strong in form</span>
          <span className="mt-1 block pl-[12%] md:mt-2 md:pl-[18%]">
            Quiet in elegance
          </span>
        </h2>

        <div className="flex justify-center">
          <ButtonPrimary
            href="/contact"
            label="TELL US ABOUT YOUR PROJECT"
          />
        </div>
      </ScrollSlide>
    </section>
  );
}
