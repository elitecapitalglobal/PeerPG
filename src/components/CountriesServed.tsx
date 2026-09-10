import { Reveal } from "@/components/Reveal";

type Market = {
  flag: string;
  name: string;
  focus: string;
};

const MARKETS: Market[] = [
  { flag: "🇮🇳", name: "India", focus: "P2C · P2P" },
  { flag: "🇵🇰", name: "Pakistan", focus: "Forex · iGaming" },
  { flag: "🇳🇬", name: "Nigeria", focus: "Bank transfer" },
  { flag: "🇪🇬", name: "Egypt", focus: "iGaming · Forex" },
  { flag: "🇵🇭", name: "Philippines", focus: "BT · e-wallets" },
  { flag: "🇸🇬", name: "Singapore", focus: "Local IBAN" },
  { flag: "🇻🇳", name: "Vietnam", focus: "QR · Momo" },
  { flag: "🇲🇲", name: "Myanmar", focus: "E-wallet · BT" },
  { flag: "🇮🇩", name: "Indonesia", focus: "VA · QRIS" },
  { flag: "🇲🇽", name: "Mexico", focus: "SPEI" },
  { flag: "🇪🇺", name: "EU Cards", focus: "Gaming vertical" },
  { flag: "🪙", name: "Crypto PG", focus: "Onchain / fiat" },
];

export function CountriesServed() {
  return (
    <section id="countries" className="pt-8 pb-12">
      <div className="container-shell">
        <Reveal className="max-w-2xl" stagger={0.1}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-strong">
            Coverage
          </span>
          <h2 className="text-balance mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Ten markets, plus EU cards and crypto, on one contract.
          </h2>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
            Local payment methods across Asia, Africa, and Latin America, backed by EU card
            acquiring and native crypto settlement.
          </p>
        </Reveal>

        <Reveal
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          stagger={0.05}
          y={24}
        >
          {MARKETS.map((market) => (
            <div
              key={market.name}
              className="rounded-2xl border border-border-soft bg-surface p-5 text-center transition-colors hover:border-ink/15"
            >
              <span className="text-2xl leading-none" aria-hidden="true">
                {market.flag}
              </span>
              <h3 className="mt-3 text-sm font-medium tracking-tight text-ink">{market.name}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{market.focus}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
