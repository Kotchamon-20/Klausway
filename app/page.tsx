import { Hero } from "@/components/hero";
import { LogoCloud } from "@/components/logo-cloud";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <Features />
      <Testimonials />
      <CtaSection />
    </>
  );
}
