import { ghl } from "@/lib/img";
import { isPreview } from "@/lib/site";
import type { VideoSlot as Slot } from "@/data/media";
import { Play } from "./Icons";

// 16:9 responsive video. With no `src` yet, it shows a poster placeholder.
// Replace by setting `src` in src/data/media.ts (MP4, H.264, 1920x1080).
export default function VideoSlot({ slot, className = "" }: { slot: Slot; className?: string }) {
  const poster = ghl(slot.poster, 1600);
  if (slot.src) {
    return (
      <div className={`relative aspect-video overflow-hidden bg-ink ${className}`}>
        <video className="h-full w-full object-cover" controls preload="none" playsInline poster={poster} aria-label={slot.title}>
          <source src={slot.src} type="video/mp4" />
        </video>
      </div>
    );
  }
  return (
    <figure className={`group relative aspect-video overflow-hidden bg-ink ${className}`} data-video-slot={slot.id}>
      <img src={poster} alt="" loading="lazy" width={1600} height={900} className="img-cover opacity-60 transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      <span className="absolute left-4 top-4 bg-gold px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink sm:left-6 sm:top-6">
        {isPreview ? `${slot.id} · footage pending` : "Video coming soon"}
      </span>
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-4 p-4 text-white sm:gap-5 sm:p-6">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-gold group-hover:text-ink sm:h-16 sm:w-16">
          <Play className="ml-0.5 h-5 w-5" />
        </span>
        <span className="min-w-0">
          <span className="block font-display text-xl font-semibold uppercase leading-tight tracking-wide sm:text-3xl">{slot.title}</span>
          <span className="mt-1 hidden max-w-lg text-[13px] text-white/75 sm:block">{slot.description}</span>
        </span>
      </figcaption>
    </figure>
  );
}
