import { Reveal } from "@/components/Reveal";

const iconProps = {
  width: 30,
  height: 30,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const STEPS = [
  {
    n: "01",
    title: "Connect",
    description:
      "Integrate the PeerPG API or a prebuilt SDK and start processing in a sandbox environment the same day you sign up.",
    icon: (
      <svg {...iconProps}>
        <path d="M9.5 14.5l5-5" />
        <path d="M8 12a3.5 3.5 0 0 1 0-5l2-2a3.5 3.5 0 0 1 5 5" />
        <path d="M16 12a3.5 3.5 0 0 1 0 5l-2 2a3.5 3.5 0 0 1-5-5" />
      </svg>
    ),
  },
  {
    n: "02",
    title: "Configure",
    description:
      "Set routing rules, currency preferences, and compliance settings to match how your business actually operates.",
    icon: (
      <svg {...iconProps}>
        <line x1="4" y1="6" x2="20" y2="6" />
        <circle cx="14" cy="6" r="2" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <circle cx="8" cy="12" r="2" />
        <line x1="4" y1="18" x2="20" y2="18" />
        <circle cx="16" cy="18" r="2" />
      </svg>
    ),
  },
  {
    n: "03",
    title: "Go live",
    description:
      "Move to production on the same integration you built against, no rebuild, no second migration, no new contract.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l2.5 2.5L16 9.5" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="pb-12">
      <div className="container-shell">
        <Reveal className="mx-auto max-w-xl text-center" stagger={0.1}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-strong">
            How it works
          </span>
          <h2 className="text-balance mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            From sandbox to production in three steps.
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            No separate integration for testing and production, <br /> No re-negotiated contract once you&apos;re ready to scale.
          </p>
        </Reveal>

        <Reveal
          className="relative mt-16 grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"
          stagger={0.15}
          y={28}
        >
          <div className="pointer-events-none absolute top-9 right-0 left-0 hidden border-t border-dashed border-border-soft lg:block" />
          {STEPS.map((step) => (
            <div key={step.n} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full bg-surface text-ink ring-1 ring-border-soft">
                {step.icon}
              </div>
              <span className="mt-5 font-mono text-xs text-muted">{step.n}</span>
              <h3 className="mt-2 text-xl font-medium tracking-tight text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
