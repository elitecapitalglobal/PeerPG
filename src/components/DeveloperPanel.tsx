import { Reveal } from "@/components/Reveal";

const CODE_LINES = [
  { text: "const account = await peerpg.virtualIban.create({", indent: 0 },
  { text: "currency: \"EUR\",", indent: 1 },
  { text: "owner: {", indent: 1 },
  { text: "name: \"Acme Merchant Ltd\",", indent: 2 },
  { text: "reference: \"client_2291\",", indent: 2 },
  { text: "},", indent: 1 },
  { text: "settlement: \"auto\",", indent: 1 },
  { text: "});", indent: 0 },
];

export function DeveloperPanel() {
  return (
    <section id="developers" className="py-24">
      <div className="container-shell grid grid-cols-1 items-center gap-14 lg:grid-cols-12">

        <Reveal className="lg:col-span-7" y={32}>
          <div className="overflow-hidden rounded-2xl bg-navy-deep">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-5 py-3.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="ml-3 font-mono text-[11px] text-white/40">virtual-iban.js</span>
            </div>
            <pre className="overflow-x-auto px-6 py-6 font-mono text-[13px] leading-relaxed">
              {CODE_LINES.map((line, i) => (
                <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                  <span className="text-white/80">{line.text}</span>
                </div>
              ))}
            </pre>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" stagger={0.12}>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-strong">
            Developers
          </span>
          <h2 className="text-balance mt-4 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            One API for PSP processing, conversion, and account issuance.
          </h2>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted">
            Issue a virtual IBAN, trigger a crypto-fiat conversion, or process a card payment,
            the same client, the same auth, the same ledger.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
