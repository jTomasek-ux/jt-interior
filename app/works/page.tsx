import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SiteFooter } from "@/components/site-footer";
import { WorksContent } from "@/components/works-content";

export const metadata: Metadata = {
  title: "Works — JT Interiors",
  description: "Browse all JT Interiors projects and featured works.",
};

export default function WorksPage() {
  return (
    <main className="relative z-10 min-h-dvh bg-background text-foreground">
      <PageHeader activeHref="/works" />
      <WorksContent />
      <SiteFooter />
    </main>
  );
}
