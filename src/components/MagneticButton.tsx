"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap, useGSAP, ensureGsapRegistered } from "@/lib/gsap";

ensureGsapRegistered();

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const btn = btnRef.current;
      const icon = iconRef.current;
      if (!btn || !icon) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const xTo = gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });
      const iconXTo = gsap.quickTo(icon, "x", { duration: 0.4, ease: "power3.out" });
      const iconYTo = gsap.quickTo(icon, "y", { duration: 0.4, ease: "power3.out" });

      const handleMove = (e: PointerEvent) => {
        const rect = btn.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        xTo(relX * 0.25);
        yTo(relY * 0.25);
        iconXTo(relX * 0.12);
        iconYTo(relY * 0.12);
      };
      const handleLeave = () => {
        xTo(0);
        yTo(0);
        iconXTo(0);
        iconYTo(0);
      };

      btn.addEventListener("pointermove", handleMove);
      btn.addEventListener("pointerleave", handleLeave);
      return () => {
        btn.removeEventListener("pointermove", handleMove);
        btn.removeEventListener("pointerleave", handleLeave);
      };
    },
    { scope: btnRef }
  );

  const base =
    "group relative inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-[0.95rem] font-medium transition-[background-color,box-shadow] duration-300 active:scale-[0.97]";
  const styles =
    variant === "primary"
      ? "bg-ink text-white hover:bg-navy-deep"
      : variant === "light"
        ? "bg-white text-navy-deep hover:bg-white/90"
        : "bg-transparent text-ink ring-1 ring-border-soft hover:ring-ink/20";

  return (
    <Link href={href} ref={btnRef} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <span
        ref={iconRef}
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
          variant === "primary"
            ? "bg-white/15 group-hover:bg-white/25"
            : "bg-ink/5 group-hover:bg-ink/10"
        }`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M2 12L12 2M12 2H4M12 2V10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
