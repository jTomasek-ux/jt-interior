import { CapabilitiesSection } from "@/components/capabilities-section";
import { HomeHero } from "@/components/home-hero";
import { ProjectsSection } from "@/components/projects-section";
import { ScrollActions } from "@/components/scroll-actions";
import { TestimonialSection } from "@/components/testimonial-section";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ScrollActions />
      <ProjectsSection />
      <CapabilitiesSection />
      <TestimonialSection />
    </>
  );
}
