const CAPABILITIES = [
  "PSP PROCESSING",
  "CRYPTO → FIAT",
  "FIAT → CRYPTO",
  "VIRTUAL IBAN ACCOUNTS",
  "MULTI-CURRENCY SETTLEMENT",
  "REAL-TIME CONVERSION",
];

export function CapabilitiesMarquee() {
  const track = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <section className="border-y border-border-soft bg-surface py-8">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
          {track.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap font-mono text-xs tracking-[0.15em] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12" aria-hidden="true">
          {track.map((item, i) => (
            <span
              key={`dup-${item}-${i}`}
              className="whitespace-nowrap font-mono text-xs tracking-[0.15em] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
