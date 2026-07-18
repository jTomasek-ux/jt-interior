"use client";

import Link from "next/link";
import { ButtonPrimary } from "@/components/button-primary";
import { MenuButton, SiteMenu, useSiteMenu } from "@/components/site-menu";

const navLinks = [
  { href: "/works", label: "WORKS" },
  { href: "/studio", label: "STUDIO" },
  { href: "/process", label: "PROCESS" },
  { href: "/gallery", label: "GALLERY" },
] as const;

type PageHeaderProps = {
  activeHref?: string;
};

export function PageHeader({ activeHref }: PageHeaderProps) {
  const { open, setOpen, panelId } = useSiteMenu();

  return (
    <>
      <header className="relative z-20 flex items-center justify-between gap-4 bg-background px-4 py-6 text-foreground md:px-8 md:py-8 lg:px-12">
        <Link
          href="/"
          className="text-[20px] leading-[24px] font-bold tracking-[-0.04em] md:text-[28px] md:leading-[32px]"
        >
          JT Interiors
        </Link>

        <nav
          className="hidden items-center justify-center gap-[0.5em] md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = activeHref === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group text-[14px] leading-[14px] font-semibold tracking-[0.08em]"
                aria-current={active ? "page" : undefined}
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
            );
          })}
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

      <SiteMenu open={open} onOpenChange={setOpen} panelId={panelId} />
    </>
  );
}
