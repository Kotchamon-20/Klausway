import type { Metadata } from "next";
import { PricingCompare } from "@/components/pricing-compare";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Portal Access & Pricing",
  description:
    "Modular Unix29 portal plans — Core, Automation, and Enterprise. Single sign-on across all 9 apps.",
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portal Access"
        title={
          <>
            Plans built for{" "}
            <span className="text-gradient-animated">how you work</span>
          </>
        }
        description="Stop paying for disconnected tools. Access the full Unix29 ecosystem with modular plans — add only the apps your business needs."
      />
      <PricingCompare hideHeader />
      <CtaSection />
    </>
  );
}
