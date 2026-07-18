import { HomeHero } from "@/components/home-hero";
import { ProjectsSection } from "@/components/projects-section";
import { ScrollActions } from "@/components/scroll-actions";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ScrollActions />
      <ProjectsSection />
    </>
  );
}
