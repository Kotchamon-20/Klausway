import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Code2,
  GitBranch,
  Mail,
  Activity,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/animation/reveal";
import { CtaSection } from "@/components/cta-section";
import { routes } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Documentation & Resources",
  description:
    "Unix29 portal documentation, API reference, n8n workflow templates, system status, and contact.",
};

const sections = [
  {
    id: "docs",
    icon: BookOpen,
    title: "Documentation",
    description:
      "Guides for Klaus Connect, Customer Portal, n8n Console, and every app in the Unix29 ecosystem.",
    links: [
      "Getting started with the portal",
      "Klaus Connect CRM setup",
      "Customer Portal configuration",
      "n8n workflow basics",
    ],
  },
  {
    id: "api",
    icon: Code2,
    title: "API Reference",
    description:
      "REST endpoints for Klaus Connect, FileMaker Data API testing, and webhook integrations.",
    links: [
      "Authentication & SSO",
      "Klaus Connect REST API",
      "FileMaker Data API",
      "Webhook events",
    ],
  },
  {
    id: "templates",
    icon: GitBranch,
    title: "n8n Templates",
    description:
      "Pre-built workflow templates connecting Klaus Connect, QuickBooks, Gmail, and Slack.",
    links: [
      "Lead → CRM → Slack notify",
      "Invoice → QuickBooks sync",
      "AI call → CRM record update",
      "Customer portal status alerts",
    ],
  },
  {
    id: "status",
    icon: Activity,
    title: "Portal Status",
    description:
      "Real-time status for all nine portal apps, scheduled maintenance, and incident history.",
    links: [
      "All systems operational",
      "Klaus Connect — 99.98% uptime",
      "n8n Console — 99.95% uptime",
      "Scheduled maintenance",
    ],
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact & Support",
    description:
      "Request portal access, enterprise pricing, or technical support from the Unix29 team.",
    links: [
      "Request portal access",
      "Enterprise sales",
      "Technical support",
      "Partner integrations",
    ],
  },
];

export default function DocsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title={
          <>
            Docs, API &{" "}
            <span className="text-gradient-animated">support</span>
          </>
        }
        description="Everything you need to deploy, integrate, and scale on the Unix29 Apps Portal."
      />

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((section, i) => (
              <Reveal
                key={section.id}
                id={section.id}
                delay={(i * 100) as 0 | 100 | 200 | 300}
                className="scroll-mt-28 hover-lift rounded-2xl border border-white/5 bg-card/40 p-6 transition-colors hover:border-white/10 hover:bg-card/60"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                    <section.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold tracking-tight">
                      {section.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {section.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {section.links.map((link) => (
                        <li
                          key={link}
                          className="flex items-center gap-2 text-sm text-foreground/90"
                        >
                          <span className="h-1 w-1 rounded-full bg-brand-400" />
                          {link}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-brand-500/10 to-fuchsia-500/5 p-8 text-center md:p-10">
            <h3 className="text-xl font-semibold">Ready to get started?</h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Explore the full app ecosystem or request portal access for your team.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={routes.apps}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold backdrop-blur transition-all hover:border-white/20 hover:bg-white/10"
              >
                Browse all apps
              </Link>
              <Link
                href={routes.pricing}
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:shadow-lg hover:shadow-white/20"
              >
                Request access
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
