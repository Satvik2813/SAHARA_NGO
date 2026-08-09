import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  action?: ReactNode;
  light?: boolean; // for use on dark backgrounds
}

export function SectionHeader({ eyebrow, title, intro, align = "left", action, light }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 sm:mb-10 flex flex-col gap-3",
        align === "center" && "items-center text-center mx-auto max-w-2xl",
        align === "left" && "sm:flex-row sm:items-end sm:justify-between"
      )}
    >
      <div>
        {eyebrow && <p className={cn("eyebrow mb-2", light && "text-marigold")}>{eyebrow}</p>}
        <h2 className={cn("text-2xl sm:text-3xl lg:text-4xl", light && "text-cream")}>{title}</h2>
        {intro && <p className={cn("mt-3 text-ink-muted max-w-2xl", light && "text-cream/80")}>{intro}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
