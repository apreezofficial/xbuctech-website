import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceOverview } from "@/components/ServiceOverview";
import { ServicesHero } from "@/components/ServicesHero";
import { services } from "@/lib/services";

export const metadata = {
  title: "IT and Cybersecurity Services",
  description:
    "Explore XBUC TECH managed IT, cybersecurity, cloud infrastructure, compliance, and software testing services built around your business.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <ServicesHero />

      <main className="bg-neutral-950">
        <section className="border-b border-white/10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                <span className="h-px w-6 bg-indigo-400" />
                Our services
              </p>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Smart IT &amp; cybersecurity solutions,{" "}
                <em className="not-italic text-indigo-400">
                  tailored for you.
                </em>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-neutral-400">
              Explore solutions designed to protect your systems, support
              your users, strengthen your infrastructure, and help your
              business operate securely and efficiently.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceOverview
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      <ContactSection />
      <Footer />
    </>
  );
}