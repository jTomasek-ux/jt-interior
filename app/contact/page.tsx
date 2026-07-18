import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ContactScrollLock } from "@/components/contact-scroll-lock";
import { SiteTopBar } from "@/components/site-top-bar";
import { footerInfo } from "@/lib/footer";

export const metadata: Metadata = {
  title: "Contact — JT Interiors",
  description:
    "Tell us about your project. JT Interiors will review your enquiry and get back to you.",
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

export default function ContactPage() {
  return (
    <ContactScrollLock>
      <main
        id="contact"
        className="relative z-10 flex min-h-dvh flex-col overflow-y-auto bg-background px-4 py-6 text-foreground md:h-dvh md:max-h-dvh md:overflow-hidden md:px-8 md:py-8 lg:px-12"
      >
        <SiteTopBar desktopAction={<BackHomeLink />} />

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-12 md:overflow-hidden lg:gap-20">
          <div className="min-h-0">
            <p className="mb-2 text-[12px] leading-[15px] font-bold tracking-[0.06em] uppercase text-foreground/55 md:mb-3">
              (Contact)
            </p>
            <h1 className="mb-3 text-[clamp(2rem,5.5vw,3.5rem)] leading-[0.95] font-bold tracking-[-0.04em] md:mb-4">
              Tell us about your project
            </h1>
            <p className="mb-6 max-w-[34ch] text-[15px] leading-[1.35] font-medium tracking-[-0.01em] text-foreground/80 md:mb-8 md:text-[17px]">
              Share a few details and we will review your enquiry, then be in
              touch to discuss next steps.
            </p>

            <ul className="flex flex-col gap-2 border-t border-black/15 pt-4">
              {footerInfo.map((row) => (
                <li
                  key={row.label}
                  className="flex gap-3 text-[13px] leading-[1.35] font-medium tracking-[-0.01em] md:text-[14px]"
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

          <div id="enquiry" className="min-h-0 pb-8 md:pb-0">
            <p className="mb-4 text-[12px] leading-[15px] font-bold tracking-[0.06em] uppercase text-foreground/55 md:mb-5">
              (Enquiry)
            </p>
            <ContactForm />
          </div>
        </div>
      </main>
    </ContactScrollLock>
  );
}
