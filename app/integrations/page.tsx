import type { Metadata } from "next";
import { Integrations } from "@/components/integrations";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect Klaus Connect, n8n, VAPI, QuickBooks, FileMaker, and 16+ services through the Unix29 portal.",
};

export default function IntegrationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Connected ecosystem"
        title={
          <>
            Every app talks to{" "}
            <span className="text-gradient-animated">every other app</span>
          </>
        }
        description="n8n Console connects your entire stack. Sync databases, trigger workflows, and automate handoffs between Klaus Connect, finance tools, and third-party services."
      />
      <Integrations hideHeader />
      <CtaSection />
    </>
  );
}
