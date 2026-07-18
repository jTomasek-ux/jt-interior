import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonPrimary } from "@/components/button-primary";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { getProjectBySlug, projects } from "@/lib/projects";

type GalleryProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: GalleryProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.name} — JT Interiors`,
    description: `${project.name}, ${project.category} interior by JT Interiors.`,
  };
}

export default async function GalleryProjectPage({
  params,
}: GalleryProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="relative z-10 min-h-dvh bg-background text-foreground">
      <PageHeader activeHref="/gallery" />

      <article className="px-4 pb-16 pt-8 md:px-8 md:pb-24 md:pt-10 lg:px-12">
        <div className="mb-8 flex items-center justify-between gap-4 md:mb-10">
          <Link
            href="/gallery"
            className="group inline-flex text-[13px] leading-[14px] font-bold tracking-[0.06em] uppercase"
          >
            <span className="relative block h-[14px] overflow-hidden">
              <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                <span className="block h-[14px]">← Gallery</span>
                <span className="block h-[14px]" aria-hidden>
                  ← Gallery
                </span>
              </span>
            </span>
          </Link>
          <p className="text-[13px] leading-[14px] font-bold tracking-[0.06em] uppercase text-foreground/55">
            ({String(index + 1).padStart(2, "0")}/
            {String(projects.length).padStart(2, "0")})
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start md:gap-12 lg:gap-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[3/4]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-8 md:sticky md:top-10 md:gap-10">
            <div>
              <p className="mb-3 text-[13px] leading-[16px] font-bold tracking-[0.06em] uppercase text-foreground/55">
                ({project.category})
              </p>
              <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] font-bold tracking-[-0.04em]">
                {project.name}
              </h1>
              <p className="mt-4 text-[60px] leading-none font-bold tracking-[-0.06em] text-foreground/15 md:text-[80px]">
                {project.monogram}
              </p>
            </div>

            <p className="max-w-[36ch] text-[16px] leading-[1.45] font-medium tracking-[-0.01em] text-foreground/80 md:text-[18px]">
              A {project.category.toLowerCase()} interior by JT Interiors,
              shaped with strong form, quiet elegance, and enduring material
              choices.
            </p>

            <ButtonPrimary href="/contact" label="ENQUIRE ABOUT THIS PROJECT" />

            <div className="flex items-center justify-between gap-4 border-t border-black/15 pt-6">
              <Link
                href={`/gallery/${prev.slug}`}
                className="group inline-flex text-[13px] leading-[14px] font-bold tracking-[0.06em] uppercase"
              >
                <span className="relative block h-[14px] overflow-hidden">
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                    <span className="block h-[14px]">← {prev.name}</span>
                    <span className="block h-[14px]" aria-hidden>
                      ← {prev.name}
                    </span>
                  </span>
                </span>
              </Link>
              <Link
                href={`/gallery/${next.slug}`}
                className="group inline-flex text-[13px] leading-[14px] font-bold tracking-[0.06em] uppercase"
              >
                <span className="relative block h-[14px] overflow-hidden">
                  <span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
                    <span className="block h-[14px]">{next.name} →</span>
                    <span className="block h-[14px]" aria-hidden>
                      {next.name} →
                    </span>
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
