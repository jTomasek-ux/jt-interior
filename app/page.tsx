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
        src="/images/Hero.jpg"
        alt="JT Interiors living space with concrete walls, modular sofa, and forest views"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative z-10 flex min-h-dvh flex-col justify-between px-5 py-6 md:px-10 md:py-8">
        <header className="grid grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[auto_1fr_auto]">
          <Link
            href="/"
            className="text-[24px] leading-[28px] font-normal tracking-tight md:text-[56px] md:leading-[59px]"
          >
            JT Interiors
          </Link>

          <nav
            className="hidden items-center justify-center gap-8 md:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[14px] leading-[14px] font-semibold tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[100px] bg-black px-3.5 py-2 text-[14px] leading-[14px] font-semibold text-on-dark"
          >
            GET IN TOUCH
          </Link>
        </header>

        <div className="flex items-end justify-between gap-6">
          <p className="max-w-[18ch] text-[22px] leading-[28px] font-normal md:max-w-none md:text-[33px] md:leading-[39px]">
            The JT Interior style is defined by
            <br />
            strong, solid forms with subtle elegance,
            <br />
            natural balance and enduring appeal
          </p>

          <p className="shrink-0 self-end text-[14px] leading-[17px] font-normal">
            (SCROLL DOWN)
          </p>
        </div>
      </div>
    </section>
  );
}
