import { ArrowUpRight } from "lucide-react";

type ServiceLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function ServiceLink({ href, children, className = "" }: ServiceLinkProps) {
  return (
    <a className={`inline-flex items-center gap-2 ${className}`} href={href}>
      {children}
      <ArrowUpRight size={17} />
    </a>
  );
}