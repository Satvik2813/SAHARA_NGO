import type { GalleryImage } from "@/data/gallery";
import { Picture } from "@/components/Picture";
import { CloseIcon, ChevronIcon } from "@/components/icons";
import { useEscapeKey } from "@/hooks/useEscapeKey";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useFocusTrap } from "@/hooks/useFocusTrap";

interface LightboxProps {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const image = images[index];
  useLockBodyScroll(true);
  useEscapeKey(true, onClose);
  const trapRef = useFocusTrap(true);

  const prev = () => onNavigate((index - 1 + images.length) % images.length);
  const next = () => onNavigate((index + 1) % images.length);

  return (
    <div
      ref={trapRef}
      className="fixed inset-0 z-[60] bg-brand-forest/95 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${image.caption}`}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="absolute top-4 right-4 text-cream hover:text-marigold p-2"
      >
        <CloseIcon className="h-7 w-7" />
      </button>

      <button
        type="button"
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-2 sm:left-6 text-cream hover:text-marigold p-2"
      >
        <ChevronIcon className="h-8 w-8 rotate-180" />
      </button>

      <figure className="max-w-3xl max-h-[80vh] flex flex-col items-center">
        <Picture
          src={image.src}
          alt={image.caption}
          duotone={image.historical}
          className="max-h-[65vh] w-auto object-contain rounded-sm"
        />
        <figcaption className="text-cream/90 text-sm mt-4 text-center max-w-xl">
          {image.caption}
          {image.historical && <span className="ml-2 text-marigold">(Historical)</span>}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={next}
        aria-label="Next photo"
        className="absolute right-2 sm:right-6 text-cream hover:text-marigold p-2"
      >
        <ChevronIcon className="h-8 w-8" />
      </button>
    </div>
  );
}
