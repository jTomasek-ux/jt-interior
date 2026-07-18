"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";
import { ParallaxImage } from "@/components/parallax-image";

type ProjectCardProps = {
  project: Project;
  tall?: boolean;
};

export function ProjectCard({ project, tall = false }: ProjectCardProps) {
  const [line1, line2] = project.nameLines;

  return (
    <Link href={`/gallery/${project.slug}`} className="group block min-w-0">
      <div
        className={`relative overflow-hidden ${tall ? "aspect-[3/4]" : "aspect-square"}`}
      >
        <ParallaxImage
          src={project.image}
          alt={project.name}
          sizes="(max-width: 768px) 50vw, 25vw"
          travel={tall ? 18 : 24}
          className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        <div
          className="absolute inset-x-0 bottom-0 z-10 flex h-[1in] translate-y-full items-stretch justify-between px-3 py-2.5 transition-transform duration-500 ease-out group-hover:translate-y-0 md:px-4"
          style={{ backgroundColor: project.hoverColor }}
        >
          <div className="flex min-w-0 flex-col justify-between">
            <div className="text-[15px] leading-tight font-black tracking-[-0.02em] text-black md:text-[18px]">
              <span className="block">{line1}</span>
              {line2 ? <span className="block">{line2}</span> : null}
            </div>
            <span className="text-[10px] leading-[13px] font-black text-black">
              {project.category}
            </span>
          </div>

          <span
            className="self-center text-[60px] leading-none font-bold tracking-[-0.06em] select-none md:text-[80px]"
            style={{
              color: project.hoverColor,
              textShadow:
                "1px 1px 0 rgba(255,255,255,0.28), -1px -1px 0 rgba(0,0,0,0.18), 2px 3px 6px rgba(0,0,0,0.2)",
              filter: "brightness(0.92)",
            }}
            aria-hidden
          >
            {project.monogram}
          </span>
        </div>
      </div>

      <div className="mt-2 flex items-baseline justify-between gap-2 px-0.5">
        <span className="text-[11px] leading-[14px] font-bold tracking-tight text-foreground">
          {project.name}
        </span>
        <span className="text-[10px] leading-[13px] font-medium text-foreground">
          {project.category}
        </span>
      </div>
    </Link>
  );
}
