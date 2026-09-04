"use client";

import { useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { ScrollTrigger, useGSAP, ensureGsapRegistered } from "@/lib/gsap";

ensureGsapRegistered();

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PANELS = [
  {
    key: "gateway",
    tab: "Payment Gateway",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M3 10h18" />
      </svg>
    ),
    badge: "PSP",
    title: "Payment Gateway",
    description:
      "A hosted checkout and API that lets your clients pay in BTC, ETH, USDT and 50+ assets across every major network.",
    bullets: ["Hosted or API checkout", "Binance Pay one-click", "Automated payouts"],
    mockup: "checkout" as const,
  },
  {
    key: "conversion",
    tab: "Crypto ↔ Fiat",
    icon: (
      <svg {...iconProps}>
        <path d="M4 8h13M13 4l4 4-4 4" />
        <path d="M20 16H7M11 12l-4 4 4 4" />
      </svg>
    ),
    badge: "CONVERSION",
    title: "Crypto ↔ Fiat",
    description:
      "Convert incoming crypto to USD, EUR or stablecoins at a fixed 1:1 rate and fund client wallets from fiat on-ramps.",
    bullets: ["Crypto-to-fiat settlement", "Fiat-to-crypto on-ramp", "Zero market exposure"],
    mockup: "convert" as const,
  },
  {
    key: "iban",
    tab: "Virtual IBAN",
    icon: (
      <svg {...iconProps}>
        <path d="M3 10 12 4l9 6" />
        <path d="M5 10v9M10 10v9M14 10v9M19 10v9" />
        <path d="M3 19h18" />
      </svg>
    ),
    badge: "BANKING",
    title: "Virtual IBAN",
    description:
      "Dedicated named IBANs per merchant or per end client, with SEPA and SWIFT rails for collections and payouts.",
    bullets: ["Per-client IBAN issuance", "SEPA / SWIFT transfers", "Reconciliation by reference"],
    mockup: "iban" as const,
  },
];

function MockupShell({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[2rem] bg-ink/[0.02] p-2 ring-1 ring-ink/5 shadow-[0_20px_60px_rgba(10,22,56,0.08)]">
      <div className="rounded-[1.6rem] bg-surface p-6 sm:p-8">{children}</div>
    </div>
  );
}

function CheckoutMockup() {
  const rows = [
    { code: "US", name: "USDT", sub: "TRC-20", amount: "1,450.00" },
    { code: "BT", name: "BTC", sub: "Bitcoin", amount: "0.01824" },
    { code: "ET", name: "ETH", sub: "Ethereum", amount: "0.4102" },
  ];
  return (
    <MockupShell>
      <div className="flex items-center justify-between">
        <span className="text-base font-semibold tracking-tight text-ink">Checkout</span>
        <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
          Live
        </span>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        {rows.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between rounded-2xl bg-ink/[0.03] px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-deep text-[11px] font-semibold text-white">
                {row.code}
              </span>
              <div>
                <div className="text-sm font-semibold text-ink">{row.name}</div>
                <div className="text-xs text-muted">{row.sub}</div>
              </div>
            </div>
            <span className="text-sm font-semibold text-ink">{row.amount}</span>
          </div>
        ))}
      </div>
      <button
        type="button"
        tabIndex={-1}
        className="mt-6 w-full rounded-full bg-navy-deep py-4 text-sm font-semibold text-white"
      >
        Pay 1,450.00 USD
      </button>
    </MockupShell>
  );
}

function ConvertMockup() {
  return (
    <MockupShell>
      <div className="relative grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-ink/[0.03] p-6">
          <div className="text-[11px] font-medium uppercase tracking-wide text-muted">
            You receive
          </div>
          <div className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            10,000 USDT
          </div>
        </div>
        <div className="rounded-2xl bg-ink/[0.03] p-6">
          <div className="text-[11px] font-medium uppercase tracking-wide text-muted">
            Settled
          </div>
          <div className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            10,000 USD
          </div>
        </div>
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy-deep text-white ring-4 ring-surface">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M17 3v4H4M7 21v-4h13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="mt-6 flex flex-wrap gap-2 border-t border-border-soft pt-6">
        {["Rate locked 1:1", "0 market exposure", "T+0 settlement"].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-ink/[0.03] px-3 py-1.5 text-xs font-medium text-ink-soft"
          >
            {tag}
          </span>
        ))}
      </div>
    </MockupShell>
  );
}

function IbanMockup() {
  const fields = [
    { label: "Holder", value: "Acme Markets Ltd" },
    { label: "Rails", value: "SEPA / SWIFT" },
    { label: "Currency", value: "EUR · USD · GBP" },
    { label: "Status", value: "Active" },
  ];
  return (
    <MockupShell>
      <div className="text-[11px] font-medium uppercase tracking-wide text-muted">
        Dedicated account
      </div>
      <div className="mt-2 font-mono text-xl font-semibold tracking-wide text-ink sm:text-2xl">
        DE89 3704 0044 0532 0130 00
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {fields.map((field) => (
          <div key={field.label} className="rounded-2xl bg-ink/[0.03] p-5">
            <div className="text-xs text-muted">{field.label}</div>
            <div className="mt-1 text-sm font-semibold text-ink">{field.value}</div>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

const MOCKUPS: Record<(typeof PANELS)[number]["mockup"], () => ReactNode> = {
  checkout: CheckoutMockup,
  convert: ConvertMockup,
  iban: IbanMockup,
};

export function Solutions() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const triggers = PANELS.map((_, i) => {
        const panel = panelRefs.current[i];
        if (!panel) return null;
        return ScrollTrigger.create({
          trigger: panel,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
      return () => triggers.forEach((t) => t?.kill());
    },
    { scope: sectionRef }
  );

  const scrollToPanel = (i: number) => {
    panelRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section ref={sectionRef} id="solutions" className="pt-6">
      <div className="container-shell grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-32" stagger={0.1}>
            <h2 className="text-balance text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              One infrastructure. Crypto, fiat and banking rails.
            </h2>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-muted">
              Collect in crypto, settle in fiat, pay out globally. Every product shares the same
              merchant dashboard, API and compliance layer.
            </p>

            <div className="mt-8 flex flex-row gap-2 overflow-x-auto lg:flex-col lg:gap-1.5 lg:overflow-visible">
              {PANELS.map((panel, i) => (
                <button
                  key={panel.key}
                  type="button"
                  onClick={() => scrollToPanel(i)}
                  aria-current={active === i}
                  className={`flex shrink-0 items-center gap-3 rounded-2xl px-5 py-4 text-left transition-colors duration-300 lg:shrink ${
                    active === i
                      ? "bg-ink/[0.04] text-ink"
                      : "border border-border-soft text-muted hover:border-ink/15 hover:text-ink-soft"
                  }`}
                >
                  <span className={active === i ? "text-navy-deep" : "text-muted"}>
                    {panel.icon}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap">{panel.tab}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          {PANELS.map((panel, i) => {
            const Mockup = MOCKUPS[panel.mockup];
            return (
              <div
                key={panel.key}
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
                className="flex flex-col justify-center mt-8 py-16 opacity-100 first:border-t-0 first:pt-0 transition-opacity duration-500 lg:min-h-[65vh] lg:py-0 lg:opacity-[var(--panel-opacity)]"
                style={{ "--panel-opacity": active === i ? 1 : 0.45 } as CSSProperties}
              >
                <span className="inline-flex w-fit items-center rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                  {panel.badge}
                </span>
                <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                  {panel.title}
                </h3>
                <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-muted">
                  {panel.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {panel.bullets.map((bullet) => (
                    <span key={bullet} className="flex items-center gap-2 text-sm text-ink-soft">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {bullet}
                    </span>
                  ))}
                </div>
                <div className="mt-8 w-full">
                  <Mockup />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
