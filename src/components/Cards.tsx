import Link from "next/link";
import Photo from "./Photo";
import { Arrow } from "./Icons";
import type { Rental, Vacation } from "@/data/properties";

export function bedSummary(r: Rental) {
  const beds = Array.from(new Set(r.units.map((u) => u.beds).filter((b): b is number => b !== null))).sort();
  const n = r.units.length;
  const unitLabel = r.type === "Single-family home" ? "Single-family" : `${n} unit${n > 1 ? "s" : ""}`;
  return `${unitLabel} · ${beds.join(" & ")} BR`;
}

export function RentalCard({ r, large = false, sizes = "(min-width:1024px) 33vw, 100vw" }: { r: Rental; large?: boolean; sizes?: string }) {
  return (
    <Link href={`/property-listed#${r.slug}`} className="group reveal block">
      <div className="zoom-wrap relative aspect-[4/3] bg-stone">
        <Photo id={r.photo} alt={r.alt} sizes={sizes} />
        <span className="absolute left-0 top-5 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">{r.type}</span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4 border-b border-line pb-5">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-deep">{r.town}, MN</p>
          <h3 className={`mt-1.5 font-display font-semibold uppercase ${large ? "text-4xl" : "text-[28px]"}`}>{r.address}</h3>
          <p className="mt-2 text-[14px] text-muted">{r.summary}</p>
        </div>
        <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center border border-line text-ink transition-colors group-hover:border-gold group-hover:bg-gold">
          <Arrow />
        </span>
      </div>
    </Link>
  );
}

export function StayCard({ v, tall = false, sizes = "(min-width:1024px) 40vw, 100vw" }: { v: Vacation; tall?: boolean; sizes?: string }) {
  return (
    <Link href={`/vacation-rentals/${v.slug}`} className="group reveal relative block h-full overflow-hidden bg-ink text-white">
      <div className="zoom-wrap relative aspect-[4/3]">
        <Photo id={v.cover} alt={v.coverAlt} sizes={sizes} className="absolute inset-0 img-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-soft">{v.town}, MN</p>
        <h3 className={`mt-2 font-display font-semibold uppercase text-white ${tall ? "text-4xl sm:text-5xl" : "text-3xl"}`}>{v.name}</h3>
        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-white/80">
          <span>Up to {v.guests} guests</span><span>{v.bedrooms} bedroom{v.bedrooms > 1 ? "s" : ""}</span><span>{v.baths} bath{v.baths > 1 ? "s" : ""}</span>
          {v.options && <span className="text-gold-soft">{v.options.length} ways to book</span>}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-white">View the stay <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
      </div>
    </Link>
  );
}
