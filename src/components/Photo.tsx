import { ghl, ghlSrcSet } from "@/lib/img";

type Props = {
  id: string;
  alt: string;
  sizes?: string;
  className?: string;
  priority?: boolean;
  width?: number;
  position?: string;
};

// Responsive GHL photo. Width/height attributes reserve space (4:3 source) to prevent layout shift.
export default function Photo({ id, alt, sizes = "100vw", className = "img-cover", priority, width = 1200, position }: Props) {
  return (
    <img
      src={ghl(id, width)}
      srcSet={ghlSrcSet(id)}
      sizes={sizes}
      alt={alt}
      width={1600}
      height={1200}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      className={className}
      style={position ? { objectPosition: position } : undefined}
    />
  );
}
