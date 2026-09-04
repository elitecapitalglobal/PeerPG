import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { CapabilitiesMarquee } from "@/components/CapabilitiesMarquee";
import { ValueGrid } from "@/components/ValueGrid";
import { HowItWorks } from "@/components/HowItWorks";
import { Industries } from "@/components/Industries";
import { Solutions } from "@/components/Solutions";
import { DeveloperPanel } from "@/components/DeveloperPanel";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CapabilitiesMarquee />
        <ValueGrid />
        <Solutions />
        <Industries />
        <HowItWorks />
        <CTASection />
        <DeveloperPanel />
      </main>
      <Footer />
    </>
  );
}
