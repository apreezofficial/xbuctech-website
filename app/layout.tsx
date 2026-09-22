import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XBUC TECH | Secure. Manage. Innovate.",
  description: "Enterprise IT and cybersecurity solutions for resilient businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}