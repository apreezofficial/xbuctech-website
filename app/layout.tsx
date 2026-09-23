import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xbuc.pxxl.dev"),
  title: {
    default: "XBUC TECH | IT and Cybersecurity Solutions",
    template: "%s | XBUC TECH",
  },
  description:
    "XBUC TECH provides managed IT, cybersecurity, cloud infrastructure, compliance, and software testing solutions for secure, reliable business operations.",
  applicationName: "XBUC TECH",
  keywords: [
    "managed IT services",
    "cybersecurity solutions",
    "cloud infrastructure",
    "IT support",
    "compliance security",
    "software testing",
    "Austin IT services",
  ],
  authors: [{ name: "XBUC TECH" }],
  creator: "XBUC TECH",
  publisher: "XBUC TECH",
  verification: {
    google: "z_MkeforSz_85xlRgmmXIV42sZXk_z6LprvbZ5AZKWk",
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xbuc.pxxl.dev",
    siteName: "XBUC TECH",
    title: "XBUC TECH | IT and Cybersecurity Solutions",
    description:
      "Managed IT, cybersecurity, cloud infrastructure, compliance, and software testing solutions for secure, reliable business operations.",
  },
  twitter: {
    card: "summary",
    title: "XBUC TECH | IT and Cybersecurity Solutions",
    description:
      "Secure your technology, manage your IT environment, and build reliable infrastructure with XBUC TECH.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}