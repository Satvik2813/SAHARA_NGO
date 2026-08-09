import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/utils/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

/** Fades + rises content in once when it scrolls into view. Static under prefers-reduced-motion. */
export function Reveal({ children, className, delayMs = 0 }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        "transition duration-slow ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className
      )}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
