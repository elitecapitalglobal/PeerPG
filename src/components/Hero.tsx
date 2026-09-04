import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { HeroImage } from "@/components/HeroImage";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-12 lg:pt-42 lg:pb-0 mt-12">
      <div className="container-shell grid grid-cols-1 items-center lg:gap-16 lg:grid-cols-2">
        <Reveal stagger={0.15} className="relative z-10 mt-22">
          <span className="inline-flex items-center rounded-full bg-accent-soft px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-accent-strong">
            PSP · Crypto-fiat · Virtual IBAN
          </span>

          <h1 className="text-balance mt-6 max-w-xl text-[2.5rem] font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-6xl">
            One PSP connection for crypto, fiat, and everything between.
          </h1>

          <p className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-muted">
            PeerPG combines payment processing, crypto-to-fiat conversion, and dedicated virtual
            IBAN accounts into a single integration, built for platforms that move money across
            both worlds.
          </p>

          <div className="mt-10 mb-22 flex flex-wrap items-center gap-3">
            <MagneticButton href="#contact">Talk to our team</MagneticButton>
            <MagneticButton href="#how-it-works" variant="ghost">
              See how it works
            </MagneticButton>
          </div>
        </Reveal>

        <div className="lg:hidden">
          <HeroImage />
        </div>
      </div>

      <div className="absolute right-0 bottom-0 top-32 hidden w-[48vw] md:top-36 lg:block">
        <HeroImage bleed />
      </div>
    </section>
  );
}
