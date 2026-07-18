import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";

type GalleryProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: GalleryProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.name} | JT Interiors`,
    description: `${project.name} — ${project.category} project by JT Interiors.`,
  };
}

export default async function GalleryProjectPage({
  params,
}: GalleryProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="min-h-dvh bg-background px-6 py-10 md:px-12 md:py-14">
      <Link
        href="/#works"
        className="text-[14px] leading-[14px] font-semibold tracking-[0.08em] text-foreground"
      >
        ← BACK
      </Link>

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-[10px] leading-[13px] font-medium tracking-[0.08em] uppercase text-foreground">
            {project.category}
          </p>
          <h1 className="mt-3 text-[40px] leading-[44px] font-bold tracking-[-0.03em] text-foreground md:text-[56px] md:leading-[59px]">
            {project.name}
          </h1>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-foreground/80">
            A JT Interiors project defined by strong, solid forms with subtle
            elegance, natural balance and enduring appeal.
          </p>
        </div>
      </div>
    </main>
  );
}
