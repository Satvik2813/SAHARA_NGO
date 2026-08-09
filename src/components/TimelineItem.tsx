import { useState } from "react";
import type { Milestone } from "@/data/timeline";
import { Picture } from "@/components/Picture";
import { Chip } from "@/components/Chip";
import { LeafNodeIcon, ChevronIcon } from "@/components/icons";
import { cn } from "@/utils/cn";

export function TimelineItem({ milestone, side }: { milestone: Milestone; side: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const m = milestone;

  return (
    <div className={cn("relative flex", side === "right" ? "lg:justify-end" : "lg:justify-start")}>
      {/* Node on the spine (desktop) */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1 h-9 w-9 rounded-full bg-marigold text-brand-forest items-center justify-center ring-4 ring-cream z-10">
        <LeafNodeIcon className="h-4 w-4" />
      </div>
      {/* Node on the mobile spine */}
      <div className="lg:hidden absolute left-[-1.55rem] top-1 h-7 w-7 rounded-full bg-marigold text-brand-forest flex items-center justify-center ring-4 ring-cream">
        <LeafNodeIcon className="h-3.5 w-3.5" />
      </div>

      <article className="card p-5 w-full lg:w-[calc(50%-2.5rem)] ml-6 lg:ml-0">
        <div className="flex items-center justify-between gap-3 mb-2">
          <p className="font-display text-terracotta text-2xl">
            {m.approx && "≈ "}
            {m.year}
          </p>
          {m.needsVerification && <Chip variant="verify">Needs verification</Chip>}
        </div>
        <h3 className="text-lg mb-2">{m.title}</h3>
        {m.image && (
          <Picture
            src={m.image}
            alt=""
            duotone={m.duotone}
            className="w-full aspect-[4/3] object-cover rounded-sm mb-3"
          />
        )}
        <p className="text-sm text-ink-muted">{open ? m.description : `${m.description.slice(0, 90)}${m.description.length > 90 ? "…" : ""}`}</p>
        {m.description.length > 90 && (
          <button
            type="button"
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-forest hover:text-terracotta"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Show less" : "Read more"}
            <ChevronIcon className={cn("h-4 w-4 transition duration-fast", open ? "-rotate-90" : "rotate-90")} />
          </button>
        )}
        <p className="mt-3 text-xs text-ink-muted/80">Source: {m.source}</p>
      </article>
    </div>
  );
}
