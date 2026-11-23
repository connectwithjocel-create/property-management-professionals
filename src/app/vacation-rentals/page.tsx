import Link from "next/link";
import type { Metadata } from "next";
import Photo from "@/components/Photo";
import VideoSlot from "@/components/VideoSlot";
import { SectionHead } from "@/components/Ui";
import { Arrow, ArrowUpRight } from "@/components/Icons";
import { vacations } from "@/data/properties";
import { videos } from "@/data/media";
import { airbnb, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vacation Rentals in Pine City, Harris & North Branch, MN",
  description: "Lakefront, wooded and downtown vacation rentals in East Central Minnesota: Pokegama Views on Pokegama Lake, Stark Woodland Retreat, Tall Pines Log Cabin and the Nostalgia Room loft. Book direct or on Airbnb.",
  alternates: { canonical: "/vacation-rentals" },
};

export default function VacationPage() {
  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-ink text-white">
        <Photo id="6b007be02c68ebcf46344450" alt="Pokegama Haven lake home at sunset in Pine City, MN" priority sizes="100vw" className="absolute inset-0 -z-10 img-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/10" />
        <div className="wrap flex min-h-[78vh] flex-col justify-end pb-16 pt-28 md:pb-24">
          <p className="eyebrow eyebrow-light">Minnesota vacation stays</p>
          <h1 className="display-xl mt-6 max-w-4xl text-white">Your next<br />Minnesota getaway</h1>
          <p className="mt-7 max-w-xl text-[17px] text-white/80">Lake mornings in Pine City, a log cabin under the pines, fifty acres near Harris and a loft above Main Street in North Branch.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/direct-booking" className="btn-gold">Book direct &amp; save<Arrow /></Link>
            <a href="#stays" className="btn-line-light">See the stays</a>
          </div>
        </div>
      </section>

      <section id="stays" className="scroll-mt-36 bg-cream py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow="Four properties, six ways to book" title="Choose your stay.">
            <p>Send us a direct booking inquiry and we will confirm availability, pricing and reservation terms. Every stay is also listed on Airbnb.</p>
          </SectionHead>

          <div className="mt-16 space-y-20 md:space-y-28">
            {vacations.map((v, i) => (
              <article key={v.slug} className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
                <Link href={`/vacation-rentals/${v.slug}`} className={`reveal zoom-wrap relative block aspect-[4/3] lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                  <Photo id={v.cover} alt={v.coverAlt} sizes="(min-width:1024px) 58vw, 100vw" />
                  <span className="absolute bottom-0 left-0 bg-cream px-4 py-2 font-display text-lg font-semibold uppercase tracking-wide text-ink">0{i + 1}</span>
                </Link>
                <div className={`reveal lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-deep">{v.town}, Minnesota</p>
                  <h2 className="display-md mt-3">{v.name}</h2>
                  <p className="mt-4 text-[16px] text-muted">{v.intro}</p>
                  <dl className="mt-6 grid grid-cols-4 border-y border-charcoal/15 py-4 text-center">
                    {[["Guests", v.guests], ["Bedrooms", v.bedrooms], ["Baths", v.baths], [v.land ? "Land" : "Beds", v.land ?? v.beds ?? "–"]].map(([k, val]) => (
                      <div key={String(k)}><dt className="text-[11px] uppercase tracking-[0.12em] text-muted">{k}</dt><dd className="font-display text-2xl font-semibold text-ink">{val}</dd></div>
                    ))}
                  </dl>
                  {v.options && (
                    <ul className="mt-5 space-y-2 text-[14px]">
                      {v.options.map((o) => (
                        <li key={o.name} className="flex flex-wrap items-center justify-between gap-2 bg-white px-4 py-3">
                          <span><strong className="font-semibold text-ink">{o.name}</strong> <span className="text-muted">· sleeps {o.guests} · {o.bedrooms} BR · {o.baths} bath</span></span>
                          <a href={airbnb(o.airbnbId)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[13px] font-semibold text-gold-deep hover:text-ink">Airbnb<ArrowUpRight className="h-3.5 w-3.5" /><span className="sr-only"> listing for {o.name} (opens in a new tab)</span></a>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Link href={`/vacation-rentals/${v.slug}`} className="btn-dark">View the stay<Arrow /></Link>
                    <Link href={v.options ? "/direct-booking" : `/direct-booking?property=${encodeURIComponent(v.name)}`} className="link-arrow">Book direct</Link>
                    {v.airbnbId && <a href={airbnb(v.airbnbId)} target="_blank" rel="noopener noreferrer" className="link-arrow">Airbnb<ArrowUpRight /><span className="sr-only">(opens in a new tab)</span></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="reveal lg:col-span-8"><VideoSlot slot={videos.vacationShowcase} /></div>
          <div className="lg:col-span-4">
            <SectionHead eyebrow="Booking direct" title="How it works." />
            <ol className="mt-8 space-y-5 text-[15px]">
              {[["Choose your getaway", "Pick your property, dates and guest count."], ["Send a direct inquiry", "We confirm availability, pricing and reservation terms."], ["Confirm your reservation", "Complete the booking steps and payment, then receive your stay details."]].map(([t, d], i) => (
                <li key={t} className="reveal flex gap-4"><span className="font-display text-3xl font-bold leading-none text-gold-deep">{i + 1}</span><div><p className="font-semibold text-ink">{t}</p><p className="text-muted">{d}</p></div></li>
              ))}
            </ol>
            <p className="reveal mt-6 text-[13px] text-muted">An inquiry does not reserve a property or charge you.</p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="wrap flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="reveal max-w-2xl">
            <p className="eyebrow eyebrow-light">Stayed with us before?</p>
            <h2 className="display-md mt-4 text-white">Guest Registration &amp; Rewards</h2>
            <p className="mt-3 text-white/70">Register as a returning guest and save 10% on your next direct booking.</p>
          </div>
          <a href={site.guestsSubdomain} target="_blank" rel="noopener noreferrer" className="reveal btn-gold shrink-0">Register as a guest<ArrowUpRight /><span className="sr-only">(opens in a new tab)</span></a>
        </div>
      </section>
    </>
  );
}
