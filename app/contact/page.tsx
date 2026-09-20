import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = { title: "Contact | X-BUC Tech", description: "Talk with X-BUC Tech about your IT, cybersecurity, cloud, compliance, or software testing needs." };

const serviceLabels: Record<string, string> = {
  cybersecurity: "Cybersecurity Consultation",
  "managed-it": "Managed IT Support",
  "cloud-infrastructure": "Cloud & Network Services",
  "compliance-security": "Compliance & Security",
  "software-testing": "Software Testing & QA",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const params = await searchParams;
  const selectedService = params.service ? serviceLabels[params.service] || params.service : undefined;
  return <><Header /><main className="contact-page shell"><div className="contact-page-intro"><p className="eyebrow">/ Contact us</p><h1>Let&apos;s discuss your<br /><em>IT & security needs.</em></h1><p className="contact-page-lede">Tell us what you are building, protecting, or trying to untangle. We&apos;ll bring a practical point of view and a clear next step.</p><div className="contact-info"><a href="mailto:info@xbuctech.com"><span>Email address</span>info@xbuctech.com</a><a href="tel:+15125846924"><span>Phone number</span>512-584-6924</a><span><span>Office</span>14205 N Mopac Expy #500<br />Austin, TX 78731</span></div></div><div className="contact-form-wrap"><div className="form-heading"><span>01</span><p>Schedule a strategy call</p><span>Secure inquiry</span></div><ContactForm selectedService={selectedService} /></div></main><Footer /></>;
}
