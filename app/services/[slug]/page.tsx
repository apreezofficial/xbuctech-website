import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceDetail } from "@/components/ServiceDetail";
import { getService, services } from "@/lib/services";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service ? `${service.shortTitle} | XBUC TECH` : "Service | XBUC TECH" };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <><Header /><ServiceDetail service={service} /><Footer /></>;
}
