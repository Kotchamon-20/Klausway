import { Hero } from "@/components/hero";
import { HomeProducts } from "@/components/home-products";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeProducts />
      <CtaSection />
    </>
  );
}
