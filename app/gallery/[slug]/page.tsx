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
    description: `${project.name} — work in progress.`,
  };
}

export default async function GalleryProjectPage({
  params,
}: GalleryProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="flex min-h-dvh flex-col bg-background px-6 py-10 md:px-12 md:py-14">
      <Link
        href="/#works"
        className="text-[14px] leading-[14px] font-semibold tracking-[0.08em] text-foreground"
      >
        ← BACK
      </Link>

      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <p className="text-[10px] leading-[13px] font-medium tracking-[0.08em] uppercase text-foreground/60">
          {project.name}
        </p>
        <h1 className="mt-4 text-[40px] leading-[44px] font-bold tracking-[-0.03em] text-foreground md:text-[56px] md:leading-[59px]">
          Work in progress
        </h1>
      </div>
    </main>
  );
}
