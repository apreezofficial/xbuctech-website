export type Service = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  detail: string;
  accent: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "cybersecurity",
    eyebrow: "01 / Cybersecurity solutions",
    title: "Protect the systems your business depends on.",
    shortTitle: "Cybersecurity",
    description: "Practical, risk-based security solutions that help identify threats, strengthen controls, and protect systems, applications, data, and users.",
    detail: "We take a proactive approach to evolving cyber risk, helping your team understand exposure, prioritize action, and build security controls that hold up in the real world.",
    accent: "#b7f34a",
    capabilities: ["Vulnerability management", "Security control implementation", "Cybersecurity awareness & training", "Data encryption & SSL/TLS", "Network infrastructure & visibility", "Risk assessment & remediation guidance"],
  },
  {
    slug: "managed-it",
    eyebrow: "02 / Managed IT & systems",
    title: "Keep your operation moving.",
    shortTitle: "Managed IT",
    description: "Secure, reliable, and efficient IT environments through ongoing technical support and systems management.",
    detail: "We manage the technology your business depends on, resolve technical issues, and keep systems properly configured, maintained, and available.",
    accent: "#65d5ff",
    capabilities: ["System administration", "Active Directory", "Endpoint management", "IT support & help desk", "Patch management", "Configuration management"],
  },
  {
    slug: "cloud-infrastructure",
    eyebrow: "03 / Cloud & infrastructure",
    title: "Build infrastructure with room to grow.",
    shortTitle: "Cloud & Infrastructure",
    description: "Infrastructure solutions designed to improve reliability, scalability, security, and business continuity.",
    detail: "From cloud administration to backup, disaster recovery, and infrastructure optimization, we help you build a foundation that stays ready for what is next.",
    accent: "#ffbd73",
    capabilities: ["Cloud administration", "Infrastructure management", "Backup & disaster recovery", "Cloud security", "Server & systems management", "Infrastructure optimization"],
  },
  {
    slug: "compliance-security",
    eyebrow: "04 / Compliance & security",
    title: "Turn compliance into confidence.",
    shortTitle: "Compliance",
    description: "Assess and strengthen security practices while supporting compliance initiatives aligned with recognized frameworks and standards.",
    detail: "We evaluate controls, identify gaps and risks, and provide practical recommendations that improve both your security posture and your compliance readiness.",
    accent: "#d4a7ff",
    capabilities: ["HIPAA", "PCI DSS", "NIST", "FISMA / NIST RMF", "ISO 27001", "Security & control assessments", "Risk assessments & gap analysis", "Policy & control reviews"],
  },
  {
    slug: "software-testing",
    eyebrow: "05 / Software testing & QA",
    title: "Ship with fewer surprises.",
    shortTitle: "Software Testing",
    description: "Testing and quality assurance services that identify defects, validate functionality, and improve application reliability.",
    detail: "We combine manual and automated testing to evaluate applications across key workflows, functionality, and changes before software reaches end users.",
    accent: "#ff7f9f",
    capabilities: ["Manual testing", "Test automation", "Functional testing", "Regression testing", "Defect identification & reporting", "Test documentation & quality validation"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
