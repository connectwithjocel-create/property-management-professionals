"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import Photo from "./Photo";
import { Arrow, Pin } from "./Icons";
import type { Rental } from "@/data/properties";
import { bedSummary } from "./Cards";

const dash = (v: number | null, fmt?: (n: number) => string) => (v === null ? "–" : fmt ? fmt(v) : String(v));

export default function RentalBrowser({ rentals, towns }: { rentals: Rental[]; towns: string[] }) {
  const [q, setQ] = useState("");
  const [town, setTown] = useState("All");
  const [beds, setBeds] = useState("Any");

  const list = useMemo(() => rentals.filter((r) => {
    const text = `${r.address} ${r.town} ${r.type} ${r.units.map((u) => u.unit).join(" ")}`.toLowerCase();
    if (q && !text.includes(q.toLowerCase().trim())) return false;
    if (town !== "All" && r.town !== town) return false;
    if (beds !== "Any" && !r.units.some((u) => u.beds !== null && u.beds >= Number(beds[0]))) return false;
    return true;
  }), [rentals, q, town, beds]);

  return (
    <div>
      <div className="grid gap-4 border border-line bg-white p-5 sm:grid-cols-[1fr_auto_auto] sm:items-end">
        <div>
          <label htmlFor="rq" className="label">Search address or unit</label>
          <input id="rq" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. Ashland, 150 S Irving, Unit 2" className="field" />
        </div>
        <div>
          <label htmlFor="rt" className="label">Town</label>
          <select id="rt" value={town} onChange={(e) => setTown(e.target.value)} className="field sm:w-48">
            {["All", ...towns].map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="rb" className="label">Bedrooms</label>
          <select id="rb" value={beds} onChange={(e) => setBeds(e.target.value)} className="field sm:w-36">
            {["Any", "1+ BR", "2+ BR", "3+ BR"].map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>
      <p className="mt-5 text-[14px] text-muted" aria-live="polite">Showing {list.length} of {rentals.length} properties</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {list.map((r) => (
          <article key={r.slug} id={r.slug} className="group flex scroll-mt-32 flex-col border border-line bg-white transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgba(25,28,32,0.45)] target:outline target:outline-2 target:outline-gold">
            <div className="zoom-wrap relative aspect-[4/3] bg-stone">
              <Photo id={r.photo} alt={r.alt} sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw" />
              <span className="absolute left-0 top-4 bg-ink px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">{r.type}</span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold-deep"><Pin className="h-3.5 w-3.5" />{r.town}, MN</p>
              <h2 className="mt-2 font-display text-3xl font-semibold uppercase">{r.address}</h2>
              <p className="mt-1 text-[14px] text-muted">{r.summary}</p>
              <p className="mt-3 text-[13px] font-medium text-ink">{bedSummary(r)}</p>
              <details className="mt-4 border-t border-line pt-3 text-[13px]">
                <summary className="cursor-pointer font-semibold text-ink hover:text-gold-deep">Unit details</summary>
                <table className="mt-3 w-full text-left">
                  <thead className="text-[11px] uppercase tracking-[0.12em] text-muted">
                    <tr><th className="py-1.5 font-medium">Unit</th><th className="font-medium">Beds</th><th className="font-medium">Baths</th><th className="font-medium">Approx. sq ft</th></tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {r.units.map((u) => (
                      <tr key={u.unit}><td className="py-1.5">{u.unit}</td><td>{dash(u.beds)}</td><td>{dash(u.baths)}</td><td>{dash(u.sqft, (n) => n.toLocaleString())}</td></tr>
                    ))}
                  </tbody>
                </table>
              </details>
              <div className="mt-auto pt-5">
                <Link href={`/rental-inquiry?property=${encodeURIComponent(r.address)}`} className="link-arrow">Ask about availability<Arrow /></Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      {list.length === 0 && (
        <div className="mt-8 border border-dashed border-line p-10 text-center">
          <p className="font-display text-2xl font-semibold uppercase">No matches</p>
          <p className="mt-2 text-[14px] text-muted">Try another town or clear your search. You can also <Link href="/rental-inquiry" className="underline decoration-gold">send a Rental Inquiry</Link> and tell us what you need.</p>
        </div>
      )}
    </div>
  );
}
