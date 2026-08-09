import { galleryImages } from "@/data/gallery";
import { Picture } from "@/components/Picture";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/Button";

const teaserIds = ["P01", "P04", "P18", "P24", "P11", "P12", "P21", "P34"];

export function GalleryTeaser() {
  const images = teaserIds
    .map((id) => galleryImages.find((g) => g.id === id))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  return (
    <section className="py-16 sm:py-20 bg-cream">
      <div className="container-page">
        <SectionHeader
          eyebrow="See the work"
          title="Moments from the field"
          action={
            <Button to="/gallery" variant="ghost">
              View gallery →
            </Button>
          }
        />
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {images.map((img) => (
            <div key={img.id} className="min-w-[70%] sm:min-w-[45%] lg:min-w-0 snap-start rounded-md overflow-hidden">
              <Picture src={img.src} alt={img.caption} className="w-full aspect-square object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
