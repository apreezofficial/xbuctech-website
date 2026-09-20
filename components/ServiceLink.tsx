import { Icon } from "./Icon";

type ServiceLinkProps = { href: string; children: React.ReactNode; className?: string };

export function ServiceLink({ href, children, className = "" }: ServiceLinkProps) {
  return <a className={`service-link ${className}`} href={href}>{children}<Icon name="arrow" size={17} /></a>;
}
