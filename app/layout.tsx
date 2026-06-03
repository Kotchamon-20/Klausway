import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgressClient } from "@/components/scroll-progress-client";
import { VapiChatWidget } from "@/components/vapi-chat-widget";
import { brand } from "@/lib/brand";
import { assetPath } from "@/lib/asset-path";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kotchamon-20.github.io/unix29",
  ),
  icons: {
    icon: assetPath("/Logo.jpg"),
    apple: assetPath("/Logo.jpg"),
  },
  title: {
    default: `${brand.name} — Strategic IT Solutions for Business Growth`,
    template: `%s · ${brand.name}`,
  },
  description:
    "Comprehensive IT solutions designed to drive your business forward. IT consulting, custom apps, system integration, smart automation, data analytics, and cloud services.",
  keywords: [
    "Klaus Way",
    "IT consulting",
    "custom software",
    "CRM",
    "system integration",
    "business automation",
    "cloud migration",
    "data analytics",
  ],
  openGraph: {
    title: `${brand.name} — Strategic IT Solutions`,
    description:
      "Transform your digital infrastructure with custom apps, integration, automation, and cloud expertise.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="dark" suppressHydrationWarning>
      <body
        className="min-h-screen bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <ScrollProgressClient />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <VapiChatWidget />
      </body>
    </html>
  );
}
