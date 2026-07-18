"use client";

import { ProjectCard } from "@/components/project-card";
import { ScrollSlide } from "@/components/scroll-slide";
import { getProjectRows, projects } from "@/lib/projects";

export function ProjectsSection() {
  const rows = getProjectRows();
  const count = String(projects.length).padStart(2, "0");

  return (
    <section
      id="works"
      className="relative z-10 bg-background px-2 pb-3 pt-20 md:px-3 md:pb-4 md:pt-28"
      aria-label="Projects"
    >
      <ScrollSlide fromY={160} className="mb-10 md:mb-14">
        <header className="flex items-end justify-between gap-4 px-0">
          <div className="w-fit">
            <p className="text-[clamp(2.75rem,10.5vw,9.5rem)] leading-[0.9] font-bold tracking-[-0.04em] uppercase text-foreground">
              Featured
            </p>
            <p className="mt-4 text-right text-[clamp(2.75rem,10.5vw,9.5rem)] leading-[0.9] font-bold tracking-[-0.04em] uppercase text-foreground md:mt-5">
              Works
            </p>
          </div>
          <p className="shrink-0 self-end pr-2 text-[clamp(1.75rem,5vw,4.5rem)] leading-none font-bold tracking-[-0.03em] text-foreground md:pr-3">
            ({count})
          </p>
        </header>
      </ScrollSlide>

      <div className="flex flex-col gap-10 md:gap-14">
        {rows.map((row, rowIndex) => (
          <ScrollSlide
            key={rowIndex}
            fromY={140}
            className={
              row.length === 4
                ? "grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-2.5"
                : "grid grid-cols-1 gap-2 sm:grid-cols-3 md:gap-2.5"
            }
          >
            {row.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                tall={row.length === 4}
              />
            ))}
          </ScrollSlide>
        ))}
      </div>
    </section>
  );
}
