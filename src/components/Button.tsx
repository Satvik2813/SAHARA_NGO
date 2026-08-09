import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  to?: string; // internal route (react-router)
  href?: string; // external / mailto / tel
  variant?: Variant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost: "btn-ghost",
};

export function Button({ to, href, variant = "primary", children, className, onClick, type }: ButtonProps) {
  const cls = cn(variantClass[variant], className);

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
