export const routes = {
  home: "/",
  apps: "/apps",
  pricing: "/pricing",
  integrations: "/integrations",
  docs: "/docs",
} as const;

export type RouteKey = keyof typeof routes;

export const navItems = [
  {
    label: "Apps",
    href: routes.apps,
    hasDropdown: true,
    children: [
      { label: "Universal CRM & Core", href: `${routes.apps}#pillar-1` },
      { label: "AI & Automation", href: `${routes.apps}#pillar-2` },
      { label: "Developer Tools", href: `${routes.apps}#pillar-3` },
      { label: "Finance & Field Ops", href: `${routes.apps}#pillar-4` },
    ],
  },
  { label: "Integrations", href: routes.integrations },
  { label: "Portal Access", href: routes.pricing },
  { label: "Docs", href: routes.docs },
] as const;

export const footerLinks = {
  core: [
    { label: "Klaus Connect", href: `${routes.apps}#klaus-connect` },
    { label: "Admin & Reports", href: `${routes.apps}#klaus-admin` },
    { label: "Customer Portal", href: `${routes.apps}#customer-portal` },
  ],
  ai: [
    { label: "CRM Intelligence & AI Call", href: `${routes.apps}#crm-intelligence` },
    { label: "n8n Console", href: `${routes.apps}#n8n-console` },
    { label: "MailAgent", href: `${routes.apps}#mailagent` },
  ],
  devFinance: [
    { label: "FileMaker Analyzer", href: `${routes.apps}#filemaker` },
    { label: "Spendledger", href: `${routes.apps}#spendledger` },
    { label: "QuickBooks Payment", href: `${routes.apps}#spendledger` },
    { label: "Field Apps (KLR & Roof)", href: `${routes.apps}#field-apps` },
  ],
  resources: [
    { label: "Documentation", href: routes.docs },
    { label: "API Reference", href: `${routes.docs}#api` },
    { label: "n8n Templates", href: `${routes.docs}#templates` },
    { label: "Portal Status", href: `${routes.docs}#status` },
    { label: "Contact", href: `${routes.docs}#contact` },
  ],
} as const;
