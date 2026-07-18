import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service — JT Interiors",
  description:
    "Terms governing use of the JT Interiors website and related enquiries.",
};

const sections = [
  {
    title: "Agreement",
    paragraphs: [
      "By accessing or using the JT Interiors website, you agree to these Terms of Service. If you do not agree, please do not use the site.",
      "These terms apply to website use and general enquiries. Project engagements are governed by a separate written agreement or proposal between you and JT Interiors.",
    ],
  },
  {
    title: "Our services",
    paragraphs: [
      "JT Interiors provides interior design and related studio services. Content on this website is for general information and portfolio presentation. It does not constitute a binding offer, professional advice for a specific site, or a guarantee of availability, fees, or timelines.",
    ],
  },
  {
    title: "Enquiries and proposals",
    paragraphs: [
      "Submitting an enquiry does not create a client relationship. We review enquiries and may follow up to discuss fit, scope, and next steps. Any fees, deliverables, and timelines are confirmed only in writing.",
    ],
  },
  {
    title: "Intellectual property",
    paragraphs: [
      "All website content, including text, imagery, graphics, and branding, is owned by JT Interiors or used with permission. You may not copy, reproduce, distribute, or create derivative works from site content without our prior written consent, except for personal, non-commercial viewing.",
      "Project images and descriptions remain subject to applicable client and photographer rights.",
    ],
  },
  {
    title: "Acceptable use",
    paragraphs: [
      "You agree not to misuse the website, attempt to disrupt its operation, scrape content at scale, submit unlawful or harmful material, or use the site for any purpose other than legitimate browsing and contact with the studio.",
    ],
  },
  {
    title: "Disclaimer and liability",
    paragraphs: [
      "The website is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, JT Interiors disclaims warranties regarding accuracy, completeness, uninterrupted access, or fitness for a particular purpose.",
      "To the fullest extent permitted by law, JT Interiors is not liable for indirect, incidental, or consequential damages arising from your use of the website. Nothing in these terms excludes liability that cannot be excluded under applicable law.",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Czech Republic, without regard to conflict-of-law principles. Courts in the Czech Republic shall have jurisdiction over disputes arising from these terms, subject to any mandatory consumer protections that apply to you.",
    ],
  },
  {
    title: "Contact and changes",
    paragraphs: [
      "For questions about these Terms of Service, contact hello@jtinteriors.com or +420 721 551 834.",
      "We may update these terms from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms. The “Last updated” date at the top of this page will change when we revise them.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="18 July 2026"
      intro="These terms govern your use of the JT Interiors website. Please read them carefully."
      sections={sections}
    />
  );
}
