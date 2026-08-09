import { useState } from "react";
import { Seo } from "@/components/Seo";
import { galleryImages, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { Picture } from "@/components/Picture";
import { Lightbox } from "@/components/Lightbox";
import { cn } from "@/utils/cn";

export function Gallery() {
  const [filter, setFilter] = useState<GalleryCategory | "All">("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((g) => g.category === filter);

  return (
    <>
      <Seo title="Gallery — SAHARA in Action" description="Photos of SAHARA's programs across children, elderly care, women, youth and the environment." />

      <section className="bg-brand-forest text-cream py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow text-marigold mb-2">Gallery</p>
          <h1 className="text-4xl sm:text-5xl text-cream mb-4">Moments from the field</h1>
          <p className="text-cream/85 text-lg">
            Authentic photographs from SAHARA's programmes, curated by area of work.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-cream">
        <div className="container-page">
          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter gallery by category">
            {(["All", ...galleryCategories] as const).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={cn(
                  "chip transition duration-fast",
                  filter === c ? "bg-brand-forest text-cream border-brand-forest" : "hover:bg-brand-green-200"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
            {filtered.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setOpenIndex(i)}
                className="mb-4 block w-full break-inside-avoid rounded-md overflow-hidden group relative focus-visible:ring-4 focus-visible:ring-marigold"
                aria-label={`View photo: ${img.caption}`}
              >
                <Picture
                  src={img.src}
                  alt={img.caption}
                  duotone={img.historical}
                  className="w-full object-cover transition duration-base group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-forest/85 to-transparent text-cream text-xs p-3 opacity-0 group-hover:opacity-100 transition duration-fast text-left">
                  {img.caption}
                </span>
              </button>
            ))}
          </div>

          {filtered.length === 0 && <p className="text-ink-muted">No photos in this category yet.</p>}
        </div>
      </section>

      {openIndex !== null && (
        <Lightbox images={filtered} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={setOpenIndex} />
      )}
    </>
  );
}
