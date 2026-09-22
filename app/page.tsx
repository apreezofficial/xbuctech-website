import { Capabilities } from "@/components/Capabilities";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
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
        <div><p className="eyebrow">/ About us</p><h2>Smart IT and Cyber Defense,<br /><em>Tailored for You</em></h2></div>
        <div className="intro-copy">
          <p>XBUC TECH provides innovative IT solutions and advanced cybersecurity services designed to help businesses operate efficiently, securely, and confidently in this digital world. We operate on the simple belief that security is not just a feature, but the vital foundation of every successful digital operation.</p>
          <p>In an era of AI-driven and increasingly sophisticated cyberattacks, reactive security is no longer enough. Businesses face growing challenges from cyber threats, technology complexity, system vulnerabilities, and evolving compliance requirements. That&apos;s where XBUC TECH makes the difference. We combine managed IT, cybersecurity, network infrastructure and cloud solutions expertise to help businesses protect their technology, reduce risk, and maintain reliable operations.</p>
          <a className="text-link" href="#approach">See our approach <span>↘</span></a>
        </div>
      </section>

      <Approach />
      <WhyUs />
      <MissionVision />
      <ServiceHighlights />
      <HowWeWork />
      <Capabilities />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}