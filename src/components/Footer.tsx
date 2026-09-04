import Image from "next/image";

const COLUMNS = [
  {
    title: "Solutions",
    links: ["PSP processing", "Crypto-fiat conversion", "Virtual IBAN", "Documentation"],
  },
  {
    title: "Industries",
    links: [
      "Marketplaces & platforms",
      "E-commerce",
      "FX & CFD brokers",
      "Gaming & entertainment",
      "Crypto exchanges & wallets",
      "Remittance & fintech",
    ],
  },
  {
    title: "Company",
    links: ["About", "Contact"],
  },
  {
    title: "Legal",
    links: ["Terms of service", "Privacy policy", "Security"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-navy-deep/40 bg-surface">
      <div className="container-shell py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Image src="/logo.png" alt="PeerPG" width={130} height={30} className="h-24 w-auto object-contain" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              PSP processing, crypto-fiat conversion, and virtual IBAN accounts for platforms and
              merchants operating across multiple markets and currencies.
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-deep/40 text-ink-soft transition-colors hover:border-ink/20 hover:text-ink"
              aria-label="PeerPG on LinkedIn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.15 1.45-2.15 2.94v5.66H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56z" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-ink">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-muted transition-colors hover:text-ink">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-navy-deep/30 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 PeerPG. All rights reserved.</span>
          <span>support@peerpg.com</span>
        </div>
      </div>
    </footer>
  );
}
