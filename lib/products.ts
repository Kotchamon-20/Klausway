export type Product = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  badge: string;
  pillarId: string;
  pillarLabel: string;
  color: string;
  icon: string;
};

export type Pillar = {
  id: string;
  label: string;
  title: string;
  description: string;
  apps: Omit<Product, "pillarId" | "pillarLabel">[];
};

export const pillars: Pillar[] = [
  {
    id: "pillar-1",
    label: "Pillar 1",
    title: "Universal CRM & Core Business",
    description:
      "The heart of your operations. Designed to fit any industry, connecting every phase of your business.",
    apps: [
      {
        id: "klaus-connect",
        eyebrow: "Klaus Connect",
        title: "Your full-cycle, universal CRM",
        subtitle: "From lead to payment in one platform",
        description:
          "Manage everything from initial leads and dynamic quoting to project delivery and payments. Seamlessly bridge the gap between Sales, Operations, and Finance in one unified platform.",
        bullets: [
          "Lead capture through dynamic quoting",
          "Project delivery and milestone tracking",
          "Integrated payments and invoicing",
          "Sales, Ops & Finance in one workflow",
        ],
        badge: "Core",
        color: "from-blue-400 to-cyan-400",
        icon: "KC",
      },
      {
        id: "klaus-admin",
        eyebrow: "Klaus Connect Admin & Reports",
        title: "The powerful back-office engine",
        subtitle: "Settings, migrations, and real-time reports",
        description:
          "Manage organizational settings, oversee data migrations, and access real-time internal reports to make data-driven decisions across your entire operation.",
        bullets: [
          "Organizational settings & permissions",
          "Data migration oversight tools",
          "Real-time internal reporting",
          "Cross-department analytics",
        ],
        badge: "Core",
        color: "from-violet-400 to-purple-400",
        icon: "AR",
      },
      {
        id: "customer-portal",
        eyebrow: "Klaus Customer Portal",
        title: "An exclusive self-service gateway",
        subtitle: "Empower clients 24/7",
        description:
          "An exclusive, self-service gateway for your clients. Empower them to track project statuses, securely e-sign documents, and communicate with your team 24/7, building institutional trust.",
        bullets: [
          "Real-time project status tracking",
          "Secure e-signature workflows",
          "24/7 client communication hub",
          "Branded, trusted client experience",
        ],
        badge: "Core",
        color: "from-fuchsia-400 to-pink-400",
        icon: "CP",
      },
    ],
  },
  {
    id: "pillar-2",
    label: "Pillar 2",
    title: "AI & Automation",
    description:
      "Work smarter, not harder. Leverage cutting-edge technology to eliminate manual tasks and scale your capabilities.",
    apps: [
      {
        id: "crm-intelligence",
        eyebrow: "CRM Intelligence & AI Call",
        title: "Elevate customer interactions with Voice AI",
        subtitle: "VAPI-powered intelligent voice assistants",
        description:
          "Elevate your customer interactions with our Voice AI platform. Utilize the VAPI Admin Console to deploy and manage intelligent voice assistants that handle calls and data collection automatically.",
        bullets: [
          "VAPI Admin Console integration",
          "Intelligent voice assistant deployment",
          "Automated call handling & data capture",
          "CRM-connected conversation intelligence",
        ],
        badge: "New",
        color: "from-amber-400 to-orange-400",
        icon: "AI",
      },
      {
        id: "n8n-console",
        eyebrow: "n8n Console",
        title: "Your central hub for workflow automation",
        subtitle: "Connect apps, sync data, eliminate manual entry",
        description:
          "Your central hub for workflow automation. Connect your favorite apps, sync databases, and build custom automated workflows to eliminate repetitive manual entry and supercharge efficiency.",
        bullets: [
          "Visual workflow builder",
          "App & database sync connectors",
          "Custom automation triggers",
          "Eliminate repetitive manual tasks",
        ],
        badge: "Automation",
        color: "from-emerald-400 to-teal-400",
        icon: "n8",
      },
    ],
  },
  {
    id: "pillar-3",
    label: "Pillar 3",
    title: "Modernization & Developer Tools",
    description:
      "Robust infrastructure and developer utilities to keep your underlying systems running at peak performance.",
    apps: [
      {
        id: "filemaker",
        eyebrow: "FileMaker Analyzer & Tester",
        title: "Essential tools for developers",
        subtitle: "Analyze DDRs, validate Data API calls",
        description:
          "Essential tools for developers. Perform deep analysis of FileMaker DDRs and rigorously test and validate FileMaker Data API calls to optimize and modernize your database architecture.",
        bullets: [
          "Deep FileMaker DDR analysis",
          "Data API call testing & validation",
          "Architecture optimization insights",
          "Modernize legacy database systems",
        ],
        badge: "Developer",
        color: "from-rose-400 to-red-400",
        icon: "FM",
      },
      {
        id: "mailagent",
        eyebrow: "MailAgent",
        title: "Streamlined high-volume email management",
        subtitle: "Route, manage, and execute at scale",
        description:
          "A streamlined utility tool designed to help you manage, route, and execute high-volume email communications efficiently across your business workflows.",
        bullets: [
          "High-volume email routing",
          "Template & campaign management",
          "Delivery tracking & analytics",
          "CRM-triggered email automation",
        ],
        badge: "Utility",
        color: "from-indigo-400 to-blue-400",
        icon: "MA",
      },
    ],
  },
  {
    id: "pillar-4",
    label: "Pillar 4",
    title: "Finance & Specialized Operations",
    description:
      "Targeted add-ons and financial tools designed to plug right into your main workflow.",
    apps: [
      {
        id: "spendledger",
        eyebrow: "Spendledger & QuickBooks Payment",
        title: "Simplify your financial tracking",
        subtitle: "Expense management & secure payment links",
        description:
          "Simplify your financial tracking. Access the Spendledger portal for expense management, and use the QuickBooks admin login to easily generate and manage secure payment links.",
        bullets: [
          "Spendledger expense management portal",
          "QuickBooks payment link generation",
          "Secure admin login & controls",
          "Financial data synced to Klaus Connect",
        ],
        badge: "Finance",
        color: "from-lime-400 to-green-400",
        icon: "SL",
      },
      {
        id: "field-apps",
        eyebrow: "Specialized Field Apps",
        title: "Purpose-built for field services & construction",
        subtitle: "KLR upload, Roof Estimator & regional workflows",
        description:
          "Purpose-built add-on modules for field services and construction. Includes an Instant Roof Estimator to enhance sales logic, alongside dedicated KLR upload and reporting systems for specialized regional workflows.",
        bullets: [
          "Instant Roof Estimator for sales teams",
          "KLR upload & reporting system",
          "Regional workflow customization",
          "Field-ready mobile experience",
        ],
        badge: "Field",
        color: "from-cyan-400 to-sky-400",
        icon: "FL",
      },
    ],
  },
];

export const allProducts: Product[] = pillars.flatMap((pillar) =>
  pillar.apps.map((app) => ({
    ...app,
    pillarId: pillar.id,
    pillarLabel: pillar.label,
  })),
);
