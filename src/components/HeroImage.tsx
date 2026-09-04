"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP, ensureGsapRegistered } from "@/lib/gsap";

ensureGsapRegistered();

type HeroImageProps = {
  bleed?: boolean;
};

export function HeroImage({ bleed = false }: HeroImageProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".hero-illustration",
          { scale: 1.06 },
          { scale: 1, duration: 1.4, ease: "power3.out" }
        );
      });
      return () => mm.revert();
    },
    { scope: rootRef }
  );

  const frame = bleed
    ? "absolute inset-0 overflow-hidden rounded-tl-[3rem] bg-navy-deep"
    : "relative aspect-[4/5] overflow-hidden rounded-[1.9rem] m-4 shadow-[0_30px_80px_rgba(6,16,44,0.28)] bg-navy-deep";

  return (
    <div ref={rootRef} className={bleed ? "relative h-full w-full" : "relative mx-auto w-full max-w-lg"}>
      {bleed ? (
        <>
          <div className="absolute inset-0 translate-x-10 -translate-y-8 rounded-tl-[3.5rem] border border-ink/30 bg-white/40 shadow-[0_6px_20px_rgba(10,22,56,0.04)]" />
          <div className="absolute inset-0 translate-x-4 -translate-y-4 rounded-tl-[3.25rem] border border-ink/30 bg-white/70 shadow-[0_6px_20px_rgba(10,22,56,0.05)]" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 translate-x-0 -translate-y-6 rounded-[2.4rem] border border-ink/20 bg-white/40 shadow-[0_6px_20px_rgba(10,22,56,0.04)]" />
          <div className="absolute inset-0 translate-x-0 -translate-y-3 rounded-[2.1rem] border border-ink/20 bg-white/70 shadow-[0_6px_20px_rgba(10,22,56,0.05)]" />
        </>
      )}
      <div className={frame}>
        <Image
          src="/images/hero/hero.jpg"
          alt="Isometric illustration of PeerPG connecting a payment terminal to cash, data, virtual IBAN, and crypto wallet storage"
          fill
          priority
          sizes={bleed ? "48vw" : "(min-width: 1024px) 32rem, 90vw"}
          className="hero-illustration object-cover"
        />
      </div>
    </div>
  );
}
