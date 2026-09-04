"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP, ensureGsapRegistered } from "@/lib/gsap";

ensureGsapRegistered();

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Developers", href: "#developers" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const THRESHOLD = 64;
    if (typeof window !== "undefined" && window.scrollY > THRESHOLD) {
      setScrolled(true);
    }
    const trigger = ScrollTrigger.create({
      start: 0,
      end: 1000000,
      onUpdate: (self) => setScrolled(self.scroll() > THRESHOLD),
    });
    return () => trigger.kill();
  }, []);

  useGSAP(
    () => {
      if (open) {
        gsap.set(overlayRef.current, { display: "flex" });
        gsap.fromTo(
          overlayRef.current,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.4, ease: "power2.out" }
        );
        const items = linksRef.current ? Array.from(linksRef.current.children) : [];
        gsap.fromTo(
          items,
          { y: 48, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.06,
            delay: 0.1,
          }
        );
      } else if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          autoAlpha: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => gsap.set(overlayRef.current, { display: "none" }),
        });
      }
    },
    { dependencies: [open] }
  );

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 flex justify-center transition-[padding] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled ? "px-4 pt-4 sm:pt-6" : "px-0 pt-0"
        }`}
      >
        <div
          className={`flex w-full items-center justify-between transition-[max-width,border-radius,background-color,border-color,box-shadow,padding] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            scrolled
              ? "max-w-4xl rounded-full border border-border-soft bg-white/70 py-2 pl-3 pr-2 shadow-[0_8px_30px_rgba(10,22,56,0.08)] backdrop-blur-xl sm:pl-4"
              : "max-w-9xl rounded-none border border-transparent bg-transparent py-5 pl-6 pr-4 sm:pl-10 sm:pr-6"
          }`}
        >
          <Link href="#top" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <Image src="/logo.png" alt="PeerPG" width={112} height={26} priority className={`${scrolled ? "h-12" : "h-24"} w-auto object-contain transition-[height] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]`}/>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 ${scrolled ? "text-sm" : "text-xl"} font-medium whitespace-nowrap text-ink-soft transition-[font-size,color,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-ink/[0.04] hover:text-ink`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-1 md:flex">
            <a
              href="#contact"
              className={`rounded-full ${scrolled ? "px-5 py-2 text-sm" : "px-8 py-4 text-lg"} font-medium whitespace-nowrap text-ink-soft transition-[padding,font-size,color,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-ink/[0.04] hover:text-ink`}
            >
              Log in
            </a>
            <a
              href="#contact"
              className={`rounded-full bg-ink ${scrolled ? "px-5 py-2 text-sm" : "px-12 py-4 text-lg"} font-medium whitespace-nowrap text-white transition-[padding,font-size,background-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-navy-deep`}
            >
              Get started
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[5px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[5px]"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-40 hidden flex-col justify-center bg-canvas/95 px-8 backdrop-blur-2xl md:hidden"
        style={{ visibility: "hidden" }}
      >
        <div ref={linksRef} className="flex flex-col gap-2">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border-soft py-4 text-3xl font-medium tracking-tight text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex w-fit items-center rounded-full bg-ink px-6 py-3 text-base font-medium text-white"
          >
            Get started
          </a>
        </div>
      </div>
    </>
  );
}
