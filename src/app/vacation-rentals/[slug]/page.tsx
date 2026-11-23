import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { StayCard } from "@/components/Cards";
import { JsonLd, SectionHead } from "@/components/Ui";
import { Arrow, ArrowUpRight, Check, Pin } from "@/components/Icons";
import { vacations } from "@/data/properties";
import { airbnb, site } from "@/lib/site";
import { ghl } from "@/lib/img";

export const dynamicParams = false;
export function generateStaticParams() { return vacations.map((v) => ({ slug: v.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = vacations.find((x) => x.slug === slug);
  if (!v) return {};
  return {
    title: `${v.name} | Vacation Rental in ${v.town}, MN`,
    description: `${v.intro} Sleeps up to ${v.guests}. Book direct with Property Management Professionals or on Airbnb.`,
    alternates: { canonical: `/vacation-rentals/${v.slug}` },
    openGraph: { images: [{ url: ghl(v.cover, 1200), width: 1200, height: 900 }] },
  };
}

export default async function StayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = vacations.find((x) => x.slug === slug);
  if (!v) notFound();
  const others = vacations.filter((x) => x.slug !== v.slug);
  const [street, ...rest] = v.address.split(", ");

  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "VacationRental", name: v.name, description: v.intro, image: [ghl(v.cover, 1200), ...v.gallery.map((g) => ghl(g.id, 1200))],
        address: { "@type": "PostalAddress", streetAddress: street, addressLocality: v.town, addressRegion: "MN", postalCode: rest.at(-1)?.split(" ").at(-1), addressCountry: "US" },
        containsPlace: { "@type": "Accommodation", occupancy: { "@type": "QuantitativeValue", maxValue: v.guests }, numberOfBedrooms: v.bedrooms, numberOfBathroomsTotal: v.baths },
        brand: { "@type": "Organization", name: site.name } }} />

      <section className="bg-cream">
        <div className="wrap pb-10 pt-10 md:pt-14">
          <nav aria-label="Breadcrumb" className="text-[13px] text-muted">
            <Link href="/vacation-rentals" className="hover:text-ink">Vacation Rentals</Link> <span className="mx-2 text-gold">/</span> <span className="text-ink">{v.name}</span>
          </nav>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="eyebrow">{v.town}, Minnesota</p>
              <h1 className="display-xl mt-5">{v.name}</h1>
            </div>
            <p className="flex items-start gap-2 text-[14px] text-muted lg:col-span-4 lg:justify-end"><Pin className="mt-1 h-4 w-4 shrink-0 text-gold-deep" />{v.address}</p>
          </div>
        </div>
        <div className="mx-auto max-w-[1440px] lg:px-8">
          <div className={v.gallery.length ? "grid gap-2 md:grid-cols-4 md:grid-rows-2" : "mx-auto max-w-[1040px]"}>
            <div className={`relative aspect-[4/3] ${v.gallery.length ? "md:col-span-2 md:row-span-2 md:aspect-auto" : ""}`}>
              <Photo id={v.cover} alt={v.coverAlt} priority sizes="(min-width:768px) 50vw, 100vw" className="absolute inset-0 img-cover" />
            </div>
            {v.gallery.slice(0, 4).map((g) => (
              <div key={g.id} className="relative hidden aspect-[4/3] md:block">
                <Photo id={g.id} alt={g.alt} sizes="25vw" className="absolute inset-0 img-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <dl className="reveal grid grid-cols-2 border-y border-line sm:grid-cols-4">
              {[["Guests", `Up to ${v.guests}`], ["Bedrooms", v.bedrooms], ["Bathrooms", v.baths], v.land ? ["Land", v.land] : ["Beds", v.beds ?? "–"]].map(([k, val]) => (
                <div key={String(k)} className="py-5"><dt className="text-[11px] uppercase tracking-[0.14em] text-muted">{k}</dt><dd className="font-display text-3xl font-semibold text-ink">{val}</dd></div>
              ))}
            </dl>
            <p className="reveal mt-10 font-display text-3xl font-medium leading-tight text-ink">{v.intro}</p>
            {v.story.map((p) => <p key={p} className="reveal mt-5 text-[16px] text-muted">{p}</p>)}
            <ul className="reveal mt-10 grid gap-3 sm:grid-cols-2">
              {v.highlights.map((h) => <li key={h} className="flex items-center gap-3 border-b border-line pb-3 text-[15px] text-ink"><Check className="h-4 w-4 text-gold-deep" />{h}</li>)}
            </ul>

            {v.options && (
              <div className="mt-14">
                <SectionHead eyebrow="One property, three ways to stay" title="Haven, Hideaway or both." />
                <div className="mt-8 divide-y divide-line border-y border-line">
                  {v.options.map((o) => (
                    <article key={o.name} className="reveal grid gap-4 py-6 sm:grid-cols-[1fr_auto] sm:items-center">
                      <div>
                        <h3 className="font-display text-3xl font-semibold uppercase">{o.name}</h3>
                        <p className="mt-1 text-[13px] font-medium text-gold-deep">Sleeps {o.guests} · {o.bedrooms} bedrooms · {o.beds} beds · {o.baths} bath{o.baths > 1 ? "s" : ""}</p>
                        <p className="mt-2 text-[14px] text-muted">{o.blurb}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:flex-col">
                        <Link href={`/direct-booking?property=${encodeURIComponent(`Pokegama ${o.name}`)}`} className="btn-dark !px-5 !py-3 text-[13px]">Book direct &amp; save</Link>
                        <a href={airbnb(o.airbnbId)} target="_blank" rel="noopener noreferrer" className="btn-line !px-5 !py-3 text-[13px] text-ink">View on Airbnb<ArrowUpRight /><span className="sr-only">(opens in a new tab)</span></a>
                      </div>
                    </article>
                  ))
                }
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-40 bg-ink p-8 text-white sm:p-10">
              <p className="eyebrow eyebrow-light">Plan your stay</p>
              <h2 className="display-md mt-4 text-white">Book direct &amp; save</h2>
              <p className="mt-4 text-[15px] text-white/70">Share your dates and guest count. We&apos;ll follow up with availability and pricing. An inquiry does not reserve the property or charge you.</p>
              <div className="mt-8 grid gap-3">
                <Link href={v.options ? "/direct-booking" : `/direct-booking?property=${encodeURIComponent(v.name)}`} className="btn-gold">Send a direct booking inquiry<Arrow /></Link>
                {v.airbnbId && <a href={airbnb(v.airbnbId)} target="_blank" rel="noopener noreferrer" className="btn-line-light">View on Airbnb<ArrowUpRight /><span className="sr-only">(opens in a new tab)</span></a>}
                <a href={site.phoneHref} className="mt-2 text-center text-[14px] text-white/70 hover:text-gold-soft">Or call {site.phone}</a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {v.gallery.length > 0 && (
        <section className="bg-stone py-16 md:py-24">
          <div className="wrap">
            <SectionHead eyebrow="Gallery" title="Inside and out." />
            <div className="mt-10 columns-1 gap-3 sm:columns-2 lg:columns-3">
              {v.gallery.map((g) => (
                <figure key={g.id} className="reveal zoom-wrap mb-3 break-inside-avoid">
                  <Photo id={g.id} alt={g.alt} sizes="(min-width:1024px) 33vw, 50vw" className="block h-auto w-full" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="wrap">
          <SectionHead eyebrow="More stays" title="Other getaways." />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {others.map((o) => <StayCard key={o.slug} v={o} sizes="(min-width:768px) 33vw, 100vw" />)}
          </div>
        </div>
      </section>
    </>
  );
}
