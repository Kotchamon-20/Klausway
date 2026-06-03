import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { portfolioPageHeader } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: portfolioPageHeader.subtitle,
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Klaus Way"
        title={
          <>
            Our{" "}
            <span className="text-gradient-animated">Portfolio</span>
          </>
        }
        description={portfolioPageHeader.subtitle}
      />
      <PortfolioGrid hideHeader />
      <CtaSection />
    </>
  );
}
