import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgressClient } from "@/components/scroll-progress-client";
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
    default: `${brand.portal} — Modern Business Operations & Automation Ecosystem`,
    template: `%s · ${brand.portal}`,
  },
  description:
    "The central gateway for modern business operations, automation, and seamless workflows. Klaus Connect CRM, AI voice, n8n automation, FileMaker tools, and more — unified in one portal.",
  keywords: [
    "Klaus Way",
    "Klaus Connect",
    "CRM",
    "business automation",
    "n8n",
    "Voice AI",
    "FileMaker",
    "customer portal",
    "workflow automation",
  ],
  openGraph: {
    title: `${brand.portal} — Your Central Business Gateway`,
    description:
      "Universal CRM, AI & automation, developer tools, and finance — all connected in one ecosystem.",
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
      </body>
    </html>
  );
}
