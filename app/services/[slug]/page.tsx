import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService, services } from "@/lib/services";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service Not Found", robots: { index: false, follow: false } };
  }

  return {
    title: service.title,
    description: service.description,
    keywords: [service.shortTitle, ...service.capabilities, "XBUC TECH"],
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | XBUC TECH`,
      description: service.description,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <><Header /><ServiceDetail service={service} /><Footer /></>;
}
