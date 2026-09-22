import { ArrowUpRight, Plus } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata = {
  title: "FAQ | XBUC TECH",
  description:
    "Answers to common questions about XBUC TECH services, cloud, compliance, software testing, and client engagement.",
};

const faqs = [
  {
    question: "Do you work with small and medium-sized businesses?",
    answer:
      "Yes. Our solutions can be tailored to organizations of different sizes and technology environments. We work with clients to identify their specific IT, cybersecurity, and infrastructure requirements and recommend appropriate solutions.",
  },
  {
    question: "Can I choose only the services my business needs?",
    answer:
      "Yes. XBUC TECH can provide individual services or a combination of solutions based on your organization's needs, objectives, and existing technology environment.",
  },
  {
    question: "Can XBUC TECH help with compliance?",
    answer:
      "Yes. We help organizations strengthen security controls and support compliance initiatives aligned with applicable frameworks and standards, including HIPAA, PCI DSS, NIST, FISMA/NIST RMF, and ISO 27001.",
  },
  {
    question: "How does XBUC TECH get started with a new client?",
    answer:
      "We begin by understanding your business, technology environment, challenges, and objectives. We then assess your requirements and recommend practical solutions designed to improve security, reliability, and operational efficiency.",
  },
  {
    question: "Does XBUC TECH provide cloud services?",
    answer:
      "Yes. We provide cloud and infrastructure services that can include cloud administration, infrastructure management, cloud security, and backup and disaster recovery solutions.",
  },
  {
    question: "Do you offer software testing?",
    answer:
      "Yes. Our Software Testing & Quality Assurance services include manual testing, test automation, functional testing, regression testing, and defect identification and reporting.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="bg-neutral-950 text-white">
        <section className="border-b border-white/10 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
              <span className="h-px w-6 bg-indigo-400" />
              Frequently asked questions
            </p>
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Clear answers for your next technology decision.
              </h1>
              <p className="max-w-md text-base leading-7 text-neutral-400">
                Learn how XBUC TECH works with organizations, builds practical
                solutions, and supports security, infrastructure, cloud,
                testing, and compliance needs.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="divide-y divide-white/10 border-t border-white/10">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center gap-5 py-6 text-left marker:hidden [&::-webkit-details-marker]:hidden">
                  <span className="w-8 shrink-0 text-xs font-semibold tracking-widest text-indigo-400">
                    0{index + 1}
                  </span>
                  <span className="flex-1 text-lg font-medium text-white sm:text-xl">
                    {faq.question}
                  </span>
                  <Plus
                    size={20}
                    className="shrink-0 text-neutral-500 transition-transform duration-200 group-open:rotate-45 group-open:text-indigo-300"
                  />
                </summary>
                <p className="max-w-3xl pb-7 pl-13 text-base leading-7 text-neutral-400 sm:pl-[3.25rem]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm leading-6 text-neutral-400">
              Have a question about your specific environment? We can start with
              your priorities and recommend the right next step.
            </p>
            <Link href="/contact" className="site-button site-button--dark group">
              Talk to an expert
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
