import { Capabilities } from "@/components/Capabilities";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { MissionVision } from "@/components/MissionVision";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { HowWeWork } from "@/components/HowWeWork";
import { PricingSection } from "@/components/PricingSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section className="intro shell" id="about">
        <div><p className="eyebrow">/ About X-BUC Tech</p><h2>Technology that<br /><em>holds up.</em></h2></div>
        <div className="intro-copy"><p>X-BUC TECH is an IT and cybersecurity solutions company focused on helping businesses protect their technology, manage their IT environments, and build reliable, secure infrastructure.</p><a className="text-link" href="#approach">See our approach <span>↘</span></a></div>
      </section>

      <Approach />
      <WhyUs />
      <MissionVision />
      <Services />
      <ServiceHighlights />
      <HowWeWork />
      <Capabilities />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}