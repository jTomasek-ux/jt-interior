"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

const menuLinks = [
  { href: "/", label: "HOME" },
  { href: "/works", label: "WORKS" },
  { href: "/studio", label: "STUDIO" },
  { href: "/process", label: "PROCESS" },
  { href: "/gallery", label: "GALLERY" },
  { href: "/contact", label: "CONTACT" },
] as const;

type MenuButtonProps = {
  onClick: () => void;
  expanded: boolean;
  controls: string;
  className?: string;
};

export function MenuButton({
  onClick,
  expanded,
  controls,
  className = "",
}: MenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center rounded-[100px] bg-[#F8F8F8] px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-black ${className}`}
      aria-expanded={expanded}
      aria-controls={controls}
    >
      <span className="relative block h-[14px] overflow-hidden">
        <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
          <span className="block h-[14px]">Menu</span>
          <span className="block h-[14px]" aria-hidden>
            Menu
          </span>
        </span>
      </span>
    </button>
  );
}

type SiteMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  panelId?: string;
};

export function SiteMenu({ open, onOpenChange, panelId }: SiteMenuProps) {
  const fallbackId = useId();
  const id = panelId ?? fallbackId;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onOpenChange(false);
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onOpenChange]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-[visibility] duration-300 ${
        open ? "visible" : "invisible delay-300"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close menu"
        onClick={() => onOpenChange(false)}
      />

      <nav
        id={id}
        aria-label="Site"
        className={`absolute top-0 right-0 flex h-full w-full max-w-md flex-col bg-[#F8F8F8] px-8 py-8 transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] md:px-10 md:py-9 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-16 flex items-center justify-between gap-4">
          <p className="text-[14px] leading-[14px] font-bold tracking-[0.08em] text-black">
            Menu
          </p>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="group inline-flex items-center rounded-[100px] bg-black px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark"
          >
            <span className="relative block h-[14px] overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                <span className="block h-[14px]">Close</span>
                <span className="block h-[14px]" aria-hidden>
                  Close
                </span>
              </span>
            </span>
          </button>
        </div>

        <ul className="flex flex-col gap-5">
          {menuLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => onOpenChange(false)}
                className="group inline-flex text-[42px] leading-[1.05] font-bold tracking-[-0.04em] text-black md:text-[56px]"
              >
                <span className="relative block h-[44px] overflow-hidden md:h-[59px]">
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                    <span className="block h-[44px] md:h-[59px]">
                      {link.label}
                    </span>
                    <span className="block h-[44px] md:h-[59px]" aria-hidden>
                      {link.label}
                    </span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

/** Shared menu controller for hero + scroll chrome */
export function useSiteMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  return { open, setOpen, panelId };
}
