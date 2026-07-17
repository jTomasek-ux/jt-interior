import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/works", label: "WORKS" },
  { href: "/studio", label: "STUDIO" },
  { href: "/process", label: "PROCESS" },
  { href: "/gallery", label: "GALLERY" },
] as const;

export default function Home() {
  return (
    <section className="relative min-h-dvh w-full overflow-hidden text-on-dark">
      <Image
        src="/images/Hero(2).jpg"
        alt="JT Interiors featured architectural interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-gradient-to-t from-black/55 via-black/20 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-dvh flex-col justify-between px-6 py-7 md:px-12 md:py-9 lg:px-16">
        <header className="grid grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[auto_1fr_auto]">
          <Link
            href="/"
            className="text-[24px] leading-[28px] font-bold tracking-[-0.04em] md:text-[56px] md:leading-[59px]"
          >
            JT Interiors
          </Link>

          <nav
            className="hidden items-center justify-center gap-[0.5em] md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] leading-[14px] font-semibold tracking-[0.08em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-[100px] bg-black px-5 py-4 text-[14px] leading-[14px] font-bold tracking-[0.06em] text-on-dark"
          >
            GET IN TOUCH
            <span
              className="inline-block size-2.5 shrink-0 rounded-full border border-white"
              aria-hidden
            />
          </Link>
        </header>

        <div className="flex items-end justify-between gap-6">
          <p className="max-w-[22ch] text-[22px] leading-[28px] font-bold tracking-[-0.02em] md:max-w-none md:text-[33px] md:leading-[39px]">
            The JT Interior style is defined by
            <br />
            strong, solid forms with subtle elegance,
            <br />
            natural balance and enduring appeal
          </p>

          <p className="shrink-0 self-end text-[14px] leading-[17px] font-normal tracking-[0.06em]">
            (SCROLL DOWN)
          </p>
        </div>
      </div>
    </section>
  );
}
