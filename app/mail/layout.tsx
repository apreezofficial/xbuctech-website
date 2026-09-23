import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internal Mail",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function MailLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
