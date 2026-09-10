import { Reveal } from "@/components/Reveal";

type Industry = {
  title: string;
  description: string;
  span: string;
  icon: React.ReactNode;
};

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const INDUSTRIES: Industry[] = [
  {
    title: "Marketplaces & platforms",
    description: "Split payments and route payouts to multiple sellers or service providers from a single order.",
    span: "md:col-span-4",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M9 9v11" />
      </svg>
    ),
  },
  {
    title: "E-commerce",
    description: "Accept payments across regions and settle into the currency your finance team actually reports in.",
    span: "md:col-span-2",
    icon: (
      <svg {...iconProps}>
        <path d="M6 6h15l-1.5 9h-12z" />
        <path d="M6 6 5 3H2" />
        <circle cx="9" cy="19" r="1.4" />
        <circle cx="17" cy="19" r="1.4" />
      </svg>
    ),
  },
  {
    title: "Gaming & digital entertainment",
    description: "Handle high-volume microtransactions with payout flexibility for creators and partners.",
    span: "md:col-span-2",
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="8" width="19" height="9" rx="4" />
        <path d="M7 11v3M5.5 12.5h3M15.5 12h.01M18 10.5h.01" />
      </svg>
    ),
  },
  {
    title: "Remittance & fintech",
    description: "Move funds cross-border with transparent FX and local delivery methods on the receiving end.",
    span: "md:col-span-4",
    icon: (
      <svg {...iconProps}>
        <path d="M4 7h13M4 7l4-4M4 7l4 4M20 17H7M20 17l-4-4M20 17l-4 4" />
      </svg>
    ),
  },
  {
    title: "FX & CFD brokers",
    description: "Onboard traders globally with local payment methods and same-day crypto or fiat settlement.",
    span: "md:col-span-4",
    icon: (
      <svg {...iconProps}>
        <path d="M3 17l6-6 4 4 8-9" />
        <path d="M15 6h6v6" />
      </svg>
    ),
  },
  {
    title: "Crypto exchanges & wallets",
    description: "Bridge on-chain balances to fiat rails without holding unnecessary crypto exposure.",
    span: "md:col-span-2",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="7" width="18" height="13" rx="2.5" />
        <path d="M3 10h18M7 3.5 9.5 7M17 3.5 14.5 7" />
        <circle cx="16" cy="14" r="1.4" />
      </svg>
    ),
  },
];

export function Industries() {
  return (
    <section id="industries" className="pt-24">
      <div className="container-shell">
        <Reveal className="max-w-2xl" stagger={0.1}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-strong">
            Industries
          </span>
          <h2 className="text-balance mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Purpose-built for businesses that move money at volume.
          </h2>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6" stagger={0.08} y={28}>
          {INDUSTRIES.map((industry) => (
            <div
              key={industry.title}
              className={`rounded-2xl border border-border-soft bg-surface p-7 transition-colors hover:border-ink/15 ${industry.span}`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                {industry.icon}
              </div>
              <h3 className="mt-5 text-base font-medium tracking-tight text-ink">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{industry.description}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
