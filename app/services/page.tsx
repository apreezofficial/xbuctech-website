import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceOverview } from "@/components/ServiceOverview";
import { ServicesHero } from "@/components/ServicesHero";
import { services } from "@/lib/services";

export const metadata = { title: "Services | X-BUC Tech", description: "Managed IT, cybersecurity, cloud infrastructure, compliance, and software testing from X-BUC Tech." };

export default function ServicesPage() {
  return <><Header /><ServicesHero /><main className="services-index"><section className="services-intro shell"><div><p className="eyebrow">/ Our services</p><h2>Smart IT & cybersecurity solutions, <em>tailored for you.</em></h2></div><p>Explore solutions designed to protect your systems, support your users, strengthen your infrastructure, and help your business operate securely and efficiently.</p></section><section className="service-overviews shell">{services.map((service, index) => <ServiceOverview key={service.slug} service={service} index={index} />)}</section></main><ContactSection /><Footer /></>;
}
