import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Gallery — JT Interiors",
  description: "Browse JT Interiors projects and interiors.",
};

export default function GalleryPage() {
  const count = String(projects.length).padStart(2, "0");

  return (
    <main className="relative z-10 min-h-dvh bg-background text-foreground">
      <PageHeader activeHref="/gallery" />

      <section className="px-4 pb-16 pt-10 md:px-8 md:pb-24 md:pt-14 lg:px-12">
        <header className="mb-10 flex items-end justify-between gap-4 md:mb-14">
          <h1 className="text-[clamp(2.75rem,10.5vw,9.5rem)] leading-[0.9] font-bold tracking-[-0.04em] uppercase">
            Gallery
          </h1>
          <p className="shrink-0 self-end text-[clamp(1.75rem,5vw,4.5rem)] leading-none font-bold tracking-[-0.03em]">
            ({count})
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-12">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/gallery/${project.slug}`}
                className="group block"
              >
                <div className="relative mb-3 aspect-[4/5] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-3 px-0.5">
                  <span className="text-[14px] leading-[18px] font-bold tracking-[-0.02em]">
                    {project.name}
                  </span>
                  <span className="text-[11px] leading-[14px] font-medium tracking-[0.04em] text-foreground/60">
                    {project.category}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <SiteFooter />
    </main>
  );
}
