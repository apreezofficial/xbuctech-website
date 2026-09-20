type IconName = "arrow" | "shield" | "network" | "spark" | "menu";

type IconProps = { name: IconName; size?: number };

export function Icon({ name, size = 20 }: IconProps) {
  const paths = {
    arrow: <><path d="M4 16 16 4" /><path d="M7 4h9v9" /></>,
    shield: <><path d="M12 3 19 6v5c0 4.5-2.9 8-7 10-4.1-2-7-5.5-7-10V6l7-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    network: <><circle cx="12" cy="5" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="18" r="2" /><path d="M12 7v5M12 12 5 16M12 12l7 4" /></>,
    spark: <><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  };

  return <svg aria-hidden="true" className="icon" fill="none" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg">{paths[name]}</svg>;
}
