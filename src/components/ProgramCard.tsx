import { Link } from "react-router-dom";
import type { Program } from "@/data/programs";
import { Picture } from "@/components/Picture";
import { BookIcon, HeartIcon, ScissorsIcon, LaptopIcon, LeafIcon, CrossIcon } from "@/components/icons";
import { Chip } from "@/components/Chip";

const iconMap = {
  book: BookIcon,
  heart: HeartIcon,
  scissors: ScissorsIcon,
  laptop: LaptopIcon,
  leaf: LeafIcon,
  cross: CrossIcon,
};

export function ProgramCard({ program }: { program: Program }) {
  const Icon = iconMap[program.icon];
  return (
    <Link to={`/our-work#${program.slug}`} className="card group flex flex-col overflow-hidden h-full">
      <div className="relative aspect-[3/2] overflow-hidden">
        <Picture
          src={program.image}
          alt={program.promise}
          className="h-full w-full object-cover transition duration-slow group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 grid place-items-center h-10 w-10 rounded-md bg-paper/95 text-brand-forest shadow-sm">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="text-lg leading-tight">{program.name}</h3>
        <p className="text-sm text-ink-muted flex-1">{program.promise}</p>
        {program.statusNote && <Chip variant="verify">Shared image</Chip>}
        <span className="text-brand-forest text-sm font-semibold mt-1 group-hover:text-terracotta transition duration-fast">
          Learn more →
        </span>
      </div>
    </Link>
  );
}
