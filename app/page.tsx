import { CapabilitiesSection } from "@/components/capabilities-section";
import { HomeHero } from "@/components/home-hero";
import { PreFooter } from "@/components/pre-footer";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { TestimonialSection } from "@/components/testimonial-section";

export default function Home() {
  return (
    <>
      <HomeHero />
      <ProjectsSection />
      <CapabilitiesSection />
      <TestimonialSection />
      <PreFooter />
      <SiteFooter />
    </>
  );
}
