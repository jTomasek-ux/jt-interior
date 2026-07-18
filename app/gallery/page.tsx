import Link from "next/link";
import { projects } from "@/lib/projects";

export default function GalleryPage() {
  return (
    <main className="min-h-dvh bg-background px-6 py-10 md:px-12 md:py-14">
      <h1 className="text-[40px] leading-[44px] font-bold tracking-[-0.03em] md:text-[56px] md:leading-[59px]">
        Gallery
      </h1>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/gallery/${project.slug}`}
              className="text-[16px] font-bold tracking-tight hover:underline"
            >
              {project.name}
              <span className="ml-2 text-[12px] font-medium text-foreground/60">
                {project.category}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
