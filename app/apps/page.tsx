import type { Metadata } from "next";
import { ServicesSection } from "@/components/services-section";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { servicesPageHeader } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services",
  description: servicesPageHeader.subtitle,
};

export default function AppsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Klaus Way"
        title={
          <>
            Our{" "}
            <span className="text-gradient-animated">Services</span>
          </>
        }
        description={servicesPageHeader.subtitle}
      />
      <ServicesSection showHeader={false} />
      <CtaSection />
    </>
  );
}
