import Image from "next/image";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";

export function CTASection() {
  return (
    <section id="contact" className="pt-12">
      <div className="container-shell">
        <Reveal
          className="relative overflow-hidden rounded-[2rem] bg-navy-deep px-8 py-16 text-center sm:px-16 sm:py-20"
          stagger={0.12}
        >
          <div className="pointer-events-none absolute -right-34 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-[#1b2fa3]/20 blur-3xl" />

          <div className="pointer-events-none absolute -right-34 -top-24 flex h-72 w-72 items-center justify-center">
            <Image src="/mark-white.png" alt="" aria-hidden="true" width={180} height={250} className="h-28 w-auto opacity-10" />
          </div>
          <div className="pointer-events-none absolute -bottom-24 -left-16 flex h-72 w-72 items-center justify-center">
            <Image src="/mark-white.png" alt="" aria-hidden="true" width={180} height={250} className="h-28 w-auto opacity-10" />
          </div>

          <h2 className="text-balance relative mx-auto max-w-xl text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Ready to simplify how your business moves money?
          </h2>
          <p className="text-balance relative mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/65">
            Tell us how your platform handles payments today and we&apos;ll map out where PeerPG
            fits.
          </p>
          <div className="relative mt-9 flex justify-center">
            <MagneticButton href="mailto:support@peerpg.com" variant="light">
              Talk to our team
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
