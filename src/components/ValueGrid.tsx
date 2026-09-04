import Image from "next/image";
import { Reveal } from "@/components/Reveal";

type Feature = {
  title: string;
  description: string;
  span: string;
  image?: string;
  alt?: string;
};

const FEATURES: Feature[] = [
  {
    title: "PSP processing",
    description:
      "Accept cards, bank transfers, and local payment methods through one merchant-facing PSP connection, one integration, one settlement ledger.",
    span: "md:col-span-4 md:row-span-2",
    image: "/images/features/psp-processing.jpg",
    alt: "Macro shot of an EMV chip on a payment card",
  },
  {
    title: "Crypto ↔ fiat conversion",
    description: "Convert incoming crypto to fiat, or fiat to crypto, at the point of settlement, hold exposure only as long as you choose to.",
    span: "md:col-span-2",
  },
  {
    title: "Virtual IBAN accounts",
    description: "Issue a dedicated IBAN per client or merchant for SEPA transfers, reconciled automatically against their balance.",
    span: "md:col-span-2",
  },
  {
    title: "Real-time FX",
    description: "Conversion rates are quoted and locked at the point of transaction, not estimated after the fact.",
    span: "md:col-span-3",
  },
  {
    title: "Risk & compliance tooling",
    description: "Screening and transaction monitoring run inline with processing, not as a bolt-on afterward.",
    span: "md:col-span-3",
  },
];

export function ValueGrid() {
  return (
    <section id="products" className="py-24">
      <div className="container-shell">
        <Reveal className="max-w-2xl" stagger={0.1}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-strong">
            Platform
          </span>
          <h2 className="text-balance mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Built for how money actually moves through your business.
          </h2>
        </Reveal>

        <Reveal
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6"
          stagger={0.08}
          y={32}
        >
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={`rounded-[1.75rem] bg-ink/[0.03] p-1.5 ring-1 ring-ink/5 ${feature.span}`}
            >
              <div
                className={`flex h-full flex-col rounded-[1.4rem] bg-surface p-7 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] md:p-8 ${
                  feature.image ? "" : "justify-between"
                }`}
              >
                <h3 className="text-lg font-medium tracking-tight text-ink">{feature.title}</h3>
                {feature.image && (
                  <div className="relative my-5 min-h-[160px] flex-1 overflow-hidden rounded-2xl ring-1 ring-ink/5">
                    <Image
                      src={feature.image}
                      alt={feature.alt ?? ""}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <p
                  className={`text-sm leading-relaxed text-muted ${feature.image ? "max-w-xl" : "mt-3 max-w-sm"}`}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
