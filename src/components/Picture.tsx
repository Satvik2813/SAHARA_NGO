import { cn } from "@/utils/cn";

interface PictureProps {
  src: string; // path without extension is NOT required — pass the .jpg path; .webp is derived
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  duotone?: boolean;
  sizes?: string;
}

/**
 * Serves WebP with a JPEG/PNG fallback via <picture>. Every processed photo
 * was exported as both formats (see assets/processed/asset-manifest.md).
 */
export function Picture({ src, alt, className, loading = "lazy", duotone, sizes }: PictureProps) {
  const webp = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const skipWebp = src.includes("Replacement");
  return (
    <picture>
      {!skipWebp && <source srcSet={webp} type="image/webp" sizes={sizes} />}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn(duotone && "duotone", className)}
      />
    </picture>
  );
}
