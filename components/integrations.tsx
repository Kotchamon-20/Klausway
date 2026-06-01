import Link from "next/link";
import { Reveal } from "./animation/reveal";
import { routes } from "@/lib/navigation";

const integrations = [
  { name: "n8n", color: "from-rose-400 to-red-500", icon: "n8" },
  { name: "VAPI", color: "from-violet-400 to-purple-500", icon: "VA" },
  { name: "FileMaker", color: "from-blue-400 to-indigo-600", icon: "FM" },
  { name: "QuickBooks", color: "from-emerald-500 to-teal-600", icon: "QB" },
  { name: "Gmail", color: "from-rose-400 to-red-500", icon: "G" },
  { name: "Outlook", color: "from-blue-400 to-blue-600", icon: "O" },
  { name: "Slack", color: "from-violet-400 to-purple-500", icon: "S" },
  { name: "Microsoft Teams", color: "from-indigo-400 to-blue-600", icon: "T" },
  { name: "Stripe", color: "from-violet-500 to-fuchsia-600", icon: "St" },
  { name: "Twilio", color: "from-rose-500 to-red-600", icon: "Tw" },
  { name: "Zapier", color: "from-orange-500 to-amber-600", icon: "Zp" },
  { name: "Google Calendar", color: "from-blue-400 to-cyan-500", icon: "GC" },
  { name: "WhatsApp", color: "from-emerald-400 to-green-500", icon: "W" },
  { name: "Shopify", color: "from-lime-500 to-green-600", icon: "Sp" },
  { name: "Notion", color: "from-zinc-300 to-zinc-500", icon: "N" },
  { name: "Mailchimp", color: "from-amber-400 to-yellow-500", icon: "Mc" },
];

export function Integrations({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {!hideHeader && (
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Connected ecosystem
            </div>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Every app talks to
              <br />
              <span className="text-gradient-animated">every other app</span>
            </h2>
            <p className="mt-5 text-balance text-lg text-muted-foreground">
              n8n Console connects your entire stack. Sync databases, trigger
              workflows, and automate handoffs between Klaus Connect, finance tools,
              and third-party services.
            </p>
          </Reveal>
        )}

        <div className={`mx-auto grid max-w-5xl grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8 ${hideHeader ? "" : "mt-12"}`}>
          {integrations.map((i, idx) => (
            <Reveal
              key={i.name}
              delay={((idx % 5) * 100) as 0 | 100 | 200 | 300 | 400}
            >
              <div className="hover-lift group flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-card/40 p-4 transition-all hover:border-white/10 hover:bg-card/60 hover:shadow-lg">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${i.color} text-xs font-semibold text-white shadow-lg transition-transform group-hover:scale-110 group-hover:-rotate-3`}
                >
                  {i.icon}
                </div>
                <span className="text-[10px] text-muted-foreground transition-colors group-hover:text-foreground">
                  {i.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`${routes.docs}#templates`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-300 transition-colors hover:text-brand-200"
          >
            View n8n workflow templates
            <svg
              className="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
