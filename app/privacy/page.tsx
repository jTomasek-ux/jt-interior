import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — JT Interiors",
  description:
    "How JT Interiors collects, uses, and protects personal information.",
};

const sections = [
  {
    title: "Who we are",
    paragraphs: [
      "JT Interiors (“we”, “us”, “our”) is an interior design studio. This Privacy Policy explains how we handle personal information when you visit our website, contact us, or enquire about a project.",
      "If you have questions about this policy, contact us at hello@jtinteriors.com or +420 721 551 834.",
    ],
  },
  {
    title: "Information we collect",
    paragraphs: [
      "We may collect information you choose to provide, such as your name, email address, phone number, project details, and any message you send through our contact channels.",
      "We may also collect limited technical data automatically, such as browser type, device information, and general usage data needed to operate and improve the website.",
    ],
  },
  {
    title: "How we use your information",
    paragraphs: [
      "We use personal information to respond to enquiries, discuss potential projects, provide our services, communicate with you, and improve our website and studio operations.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "Legal bases",
    paragraphs: [
      "Where applicable (including under the GDPR), we process personal data based on your consent, our legitimate interests in operating the studio and responding to enquiries, and/or steps taken at your request before entering into a contract.",
    ],
  },
  {
    title: "Sharing and retention",
    paragraphs: [
      "We may share information with trusted service providers who help us run our website, email, or operations, only as needed to provide those services. We may also disclose information when required by law.",
      "We keep personal information only as long as needed for the purposes described above, unless a longer period is required or permitted by law.",
    ],
  },
  {
    title: "Your rights",
    paragraphs: [
      "Depending on your location, you may have rights to access, correct, delete, or restrict use of your personal information, and to object to certain processing or withdraw consent where processing is based on consent.",
      "To exercise these rights, contact hello@jtinteriors.com. You may also have the right to lodge a complaint with your local data protection authority.",
    ],
  },
  {
    title: "Cookies and updates",
    paragraphs: [
      "Our website may use essential cookies or similar technologies required for basic functionality. If we introduce additional analytics or marketing cookies, we will update this policy and provide any required notices or choices.",
      "We may update this Privacy Policy from time to time. The “Last updated” date at the top of this page will change when we do.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="18 July 2026"
      intro="This policy describes how JT Interiors handles personal information in connection with our website and studio enquiries."
      sections={sections}
    />
  );
}
