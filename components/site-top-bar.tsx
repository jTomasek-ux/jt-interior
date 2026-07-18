"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { MenuButton, SiteMenu, useSiteMenu } from "@/components/site-menu";

type SiteTopBarProps = {
  desktopAction?: ReactNode;
};

/** Logo + Menu on mobile; optional desktop-only action on the right */
export function SiteTopBar({ desktopAction }: SiteTopBarProps) {
  const { open, setOpen, panelId } = useSiteMenu();

  return (
    <>
      <header className="flex shrink-0 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-[20px] leading-[24px] font-bold tracking-[-0.04em] md:text-[28px] md:leading-[32px]"
        >
          JT Interiors
        </Link>

        <MenuButton
          onClick={() => setOpen(true)}
          expanded={open}
          controls={panelId}
          className="md:hidden"
        />

        {desktopAction ? (
          <div className="hidden md:block">{desktopAction}</div>
        ) : null}
      </header>

      <SiteMenu open={open} onOpenChange={setOpen} panelId={panelId} />
    </>
  );
}
