export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string;
  shortTitle: string;
  description: string;
  detail: string;
  accent: string;
  capabilities: string[];
  ctaLabel: string;
};

export const services: Service[] = [
  {
    slug: "cybersecurity",
    eyebrow: "01 / Cybersecurity solutions",
    title: "Cybersecurity Solutions",
    tagline: "Protect your business. Reduce risk. Stay prepared.",
    shortTitle: "Cybersecurity",
    description: "XBUC TECH provides practical cybersecurity solutions designed to help organizations identify threats, strengthen security controls, and protect their systems, applications, data, and users. We take a proactive, risk-based approach to help businesses improve their security posture and respond to evolving cybersecurity challenges.",
    detail: "Our cybersecurity services help organizations understand their exposure, prioritize action, and implement security controls that support a stronger security posture.",
    accent: "#36c36a",
    capabilities: ["Vulnerability Management", "Security Control Implementation and Assessments", "Cybersecurity Awareness & Training", "Data Encryption & SSL/TLS", "Network Infrastructure & Visibility", "Risk Assessment & Remediation Guidance"],
    ctaLabel: "Strengthen your security",
  },
  {
    slug: "managed-it",
    eyebrow: "02 / Managed IT & systems",
    title: "Managed IT & Systems",
    tagline: "Reliable technology. Responsive support. Smooth operations.",
    shortTitle: "Managed IT",
    description: "XBUC TECH helps businesses maintain secure, reliable, and efficient IT environments through ongoing technical support and systems management. We help manage the technology your business depends on, resolve technical issues, and keep systems properly configured, maintained, and available.",
    detail: "Our managed IT work keeps essential systems supported and available while giving your team responsive help with the technical issues that slow operations down.",
    accent: "#65d5ff",
    capabilities: ["System Administration", "Active Directory Management", "Endpoint Management", "IT Support & Help Desk", "Patch & Configuration Management", "System Troubleshooting & Maintenance"],
    ctaLabel: "Get IT support",
  },
  {
    slug: "cloud-infrastructure",
    eyebrow: "03 / Cloud & infrastructure",
    title: "Cloud & Infrastructure Solutions",
    tagline: "Build smarter. Scale confidently. Stay resilient.",
    shortTitle: "Cloud & Infrastructure",
    description: "XBUC TECH helps organizations manage and optimize the infrastructure that supports their business operations. From cloud administration and infrastructure management to backup, disaster recovery, and cloud security, we provide solutions designed to improve reliability, scalability, security, and business continuity.",
    detail: "We help you build and maintain an infrastructure foundation that stays reliable, resilient, secure, and ready for what is next.",
    accent: "#ffbd73",
    capabilities: ["Cloud Administration", "Infrastructure Management", "Backup & Disaster Recovery", "Cloud Security", "Server & Systems Management", "Infrastructure Optimization"],
    ctaLabel: "Optimize your infrastructure",
  },
  {
    slug: "compliance-security",
    eyebrow: "04 / Compliance & security",
    title: "Compliance & Security",
    tagline: "Strengthen security. Reduce risk. Support compliance.",
    shortTitle: "Compliance",
    description: "XBUC TECH helps organizations assess and strengthen their security practices while supporting compliance initiatives aligned with recognized industry frameworks and standards. We evaluate security controls, identify gaps and risks, and provide practical recommendations to help organizations improve their security and compliance posture.",
    detail: "Our compliance and security work helps translate requirements into practical controls, clearer priorities, and measurable improvements to your organization's security posture.",
    accent: "#d4a7ff",
    capabilities: ["HIPAA", "PCI DSS", "NIST", "FISMA / NIST RMF", "ISO 27001", "Security & Control Assessments", "Risk Assessments & Gap Analysis", "Policy & Control Reviews"],
    ctaLabel: "Schedule a consultation",
  },
  {
    slug: "software-testing",
    eyebrow: "05 / Software testing & QA",
    title: "Software Testing & Quality Assurance",
    tagline: "Build with confidence. Deliver with quality.",
    shortTitle: "Software Testing",
    description: "XBUC TECH provides software testing and quality assurance services designed to help businesses identify defects, validate functionality, and improve application reliability before software reaches end users. We use a combination of manual and automated testing to evaluate applications across key workflows, functionality, and changes.",
    detail: "Our testing process helps teams find defects earlier, validate critical workflows, and deliver software with greater confidence and fewer surprises.",
    accent: "#ff7f9f",
    capabilities: ["Manual Testing", "Test Automation", "Functional Testing", "Regression Testing", "Defect Identification & Reporting", "Test Documentation & Quality Validation"],
    ctaLabel: "Discuss your testing needs",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
