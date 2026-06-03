import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { aboutPageHeader } from "@/lib/about";

export const metadata: Metadata = {
  title: "About",
  description: aboutPageHeader.subtitle,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Klaus Way"
        title={
          <>
            About{" "}
            <span className="text-gradient-animated">Us</span>
          </>
        }
        description={aboutPageHeader.subtitle}
      />
      <AboutSection />
      <CtaSection />
    </>
  );
}
