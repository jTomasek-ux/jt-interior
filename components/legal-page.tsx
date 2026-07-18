import Link from "next/link";
import type { ReactNode } from "react";
import { SiteTopBar } from "@/components/site-top-bar";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  children?: ReactNode;
};

function BackHomeLink() {
  return (
    <Link
      href="/"
      className="group inline-flex text-[13px] leading-[14px] font-bold tracking-[0.06em] uppercase"
    >
      <span className="relative block h-[14px] overflow-hidden">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
          <span className="block h-[14px]">← Back home</span>
          <span className="block h-[14px]" aria-hidden>
            ← Back home
          </span>
        </span>
      </span>
    </Link>
  );
}

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  children,
}: LegalPageProps) {
  return (
    <main className="relative z-10 min-h-dvh bg-background px-4 pb-20 pt-10 text-foreground md:px-8 md:pb-28 md:pt-14 lg:px-12">
      <div className="mb-12 md:mb-16">
        <SiteTopBar desktopAction={<BackHomeLink />} />
      </div>

      <article className="mx-auto max-w-3xl">
        <p className="mb-4 text-[13px] leading-[16px] font-bold tracking-[0.06em] uppercase text-foreground/55">
          (Legal)
        </p>
        <h1 className="mb-3 text-[clamp(2.5rem,8vw,4.5rem)] leading-[0.95] font-bold tracking-[-0.04em]">
          {title}
        </h1>
        <p className="mb-10 text-[13px] leading-[17px] font-medium text-foreground/55 md:mb-14">
          Last updated: {updated}
        </p>

        <p className="mb-10 text-[18px] leading-[1.45] font-medium tracking-[-0.01em] md:mb-12 md:text-[20px] md:leading-[1.4]">
          {intro}
        </p>

        <div className="flex flex-col gap-10 md:gap-12">
          {sections.map((section, index) => (
            <section key={section.title}>
              <h2 className="mb-3 text-[16px] leading-[20px] font-bold tracking-[-0.02em] md:text-[18px]">
                <span className="mr-2 text-foreground/45">
                  ({String(index + 1).padStart(2, "0")})
                </span>
                {section.title}
              </h2>
              <div className="flex flex-col gap-3">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-[15px] leading-[1.55] font-medium tracking-[-0.01em] text-foreground/85 md:text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {children}
      </article>
    </main>
  );
}
