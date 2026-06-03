import type { Metadata } from "next";
import { BlogGrid } from "@/components/blog-grid";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { blogPageHeader } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: blogPageHeader.subtitle,
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Klaus Way"
        title={
          <>
            Our{" "}
            <span className="text-gradient-animated">Blog</span>
          </>
        }
        description={blogPageHeader.subtitle}
      />
      <BlogGrid hideHeader />
      <CtaSection />
    </>
  );
}
