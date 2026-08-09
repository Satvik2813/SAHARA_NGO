import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ChipProps {
  children: ReactNode;
  variant?: "default" | "verify";
  className?: string;
}

export function Chip({ children, variant = "default", className }: ChipProps) {
  return <span className={cn(variant === "verify" ? "chip-verify" : "chip", className)}>{children}</span>;
}
