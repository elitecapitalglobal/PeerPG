"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, ensureGsapRegistered } from "@/lib/gsap";

ensureGsapRegistered();

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  stagger?: number;
  y?: number;
  delay?: number;
};

export function Reveal({
  children,
  className,
  as: Tag = "div",
  stagger = 0.12,
  y = 48,
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = ref.current ? Array.from(ref.current.children) : [];
        if (!targets.length) return;

        gsap.set(targets, { autoAlpha: 0, y, filter: "blur(6px)" });

        const trigger = ScrollTrigger.create({
          trigger: ref.current,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(targets, {
              autoAlpha: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1,
              ease: "power3.out",
              stagger,
              delay,
            }),
        });

        return () => trigger.kill();
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  const Component = Tag as ElementType;
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
