"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollSlide } from "@/components/scroll-slide";
import { testimonial } from "@/lib/testimonial";

export function TestimonialSection() {
  return (
    <section
      id="testimonial"
      className="relative z-10 bg-background px-4 pb-24 pt-8 md:px-8 md:pb-32 md:pt-12 lg:px-12"
      aria-label="Client testimonial"
    >
      <ScrollSlide fromY={100} className="mb-4 md:mb-5">
        <p className="text-[14px] leading-[17px] font-bold tracking-[0.06em] uppercase text-foreground">
          (&nbsp;Hear from our client)
        </p>
      </ScrollSlide>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end md:gap-14 lg:gap-20">
        <ScrollSlide fromY={140} className="flex flex-col gap-10 md:gap-12">
          <blockquote className="flex flex-col gap-6 md:gap-7">
            {testimonial.quote.map((paragraph, index) => {
              const isFirst = index === 0;
              const isLast = index === testimonial.quote.length - 1;

              return (
                <p
                  key={paragraph}
                  className="max-w-[34ch] text-[clamp(1.35rem,2.8vw,2.15rem)] leading-[1.25] font-bold tracking-[-0.03em] text-foreground"
                >
                  {isFirst ? `"${paragraph}` : paragraph}
                  {isLast ? `"` : ""}
                </p>
              );
            })}
          </blockquote>

          <footer className="flex flex-col gap-1">
            <cite className="text-[18px] leading-[22px] font-bold not-italic tracking-[-0.02em] text-foreground">
              {testimonial.name}
            </cite>
            <p className="text-[14px] leading-[18px] font-medium tracking-[0.02em] text-foreground/65">
              {testimonial.role}
            </p>
          </footer>
        </ScrollSlide>

        <ScrollSlide fromY={120}>
          <Link
            href={`/gallery/${testimonial.projectSlug}`}
            className="group block max-w-[420px] md:ml-auto"
          >
            <div className="mb-4">
              <Image
                src={testimonial.projectImage}
                alt={testimonial.projectName}
                width={1600}
                height={1200}
                sizes="(max-width: 768px) 100vw, 35vw"
                className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </div>

            <div className="flex items-end justify-between gap-4">
              <div className="min-w-0">
                <p className="text-[16px] leading-[20px] font-bold tracking-[-0.02em] text-foreground">
                  {testimonial.projectName}
                </p>
                <p className="mt-1 text-[12px] leading-[15px] font-medium tracking-[0.04em] text-foreground/60">
                  {testimonial.projectMeta}
                </p>
              </div>

              <span className="relative shrink-0 overflow-hidden text-[13px] leading-[16px] font-bold tracking-[0.06em] text-foreground">
                <span className="relative block h-[16px] overflow-hidden">
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                    <span className="block h-[16px]">View project →</span>
                    <span className="block h-[16px]" aria-hidden>
                      View project →
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </Link>
        </ScrollSlide>
      </div>
    </section>
  );
}
