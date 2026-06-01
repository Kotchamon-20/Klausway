import type { Metadata } from "next";
import { Features } from "@/components/features";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Apps & Pillars",
  description:
    "Explore all 9 Unix29 portal apps across four pillars — CRM, AI automation, developer tools, and finance.",
};

export default function AppsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Unix29 Apps Portal Ecosystem"
        title={
          <>
            Nine apps,{" "}
            <span className="text-gradient-animated">one connected portal</span>
          </>
        }
        description="From Klaus Connect CRM to n8n automation and field service tools — every app shares data, workflows, and single sign-on."
      />
      <Features />
      <CtaSection />
    </>
  );
}
