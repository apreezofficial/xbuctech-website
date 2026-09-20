type ServiceLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function ServiceLink({ href, children, className = "", style }: ServiceLinkProps) {
  return (
    <a className={`inline-flex cursor-pointer items-center gap-2 ${className}`} href={href} style={style}>
      {children}
    </a>
  );
}