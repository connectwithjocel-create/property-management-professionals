import Link from "next/link";
import type { Metadata } from "next";
import Photo from "@/components/Photo";
import VideoSlot from "@/components/VideoSlot";
import { RentalCard, StayCard } from "@/components/Cards";
import { CtaBand, SectionHead } from "@/components/Ui";
import { Arrow, ArrowUpRight, Check, Phone } from "@/components/Icons";
import { rentals, vacations } from "@/data/properties";
import { services, ownerSteps } from "@/data/services";
import { videos } from "@/data/media";
import { airbnb, site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Property Management in East Central Minnesota | Property Management Professionals" },
  alternates: { canonical: "/" },
};

const featured = ["150-s-irving-ave", "634-ashland-st-s", "15-s-eliot-ave", "904-dellwood-st-s"].map((s) => rentals.find((r) => r.slug === s)!);
const towns = new Set([...rentals.map((r) => r.town), ...vacations.map((v) => v.town)]);

export default function Home() {
  const [poke, ...otherStays] = vacations;
  return (
    <>
      {/* HERO */}
      <section className="grain relative overflow-hidden bg-cream">
        <div className="wrap grid gap-12 pb-0 pt-12 lg:grid-cols-12 lg:gap-8 lg:pt-20">
          <div className="lg:col-span-6 lg:pb-28">
            <p className="eyebrow">Property management · East Central Minnesota</p>
            <h1 className="mt-7 font-display font-bold uppercase leading-[0.9]" style={{ fontSize: "clamp(2.9rem, 5.3vw, 5.1rem)" }}>
              Your property.<br /><span className="text-gold-deep">Professionally</span><br />managed.
            </h1>
            <p className="lead mt-8 max-w-[34rem]">
              A local team in East Central Minnesota that leases, maintains, cleans and cares for rental homes and vacation stays. We run our own, and we can run yours.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/management-quote" className="btn-dark">Request a Management Quote<Arrow /></Link>
              <Link href="/property-listed" className="btn-line text-ink">Explore Available Rentals</Link>
            </div>
            <a href={site.phoneHref} className="mt-8 inline-flex items-center gap-3 text-[14px] text-muted hover:text-ink">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold/20 text-gold-deep"><Phone /></span>
              Talk to our team: <strong className="font-semibold text-ink">{site.phone}</strong>
            </a>
          </div>
          <div className="relative lg:col-span-6 lg:pb-14">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:mt-10">
              <Photo id="6b007a288368d0ae483cf6e2" alt="Victorian rental home with a wraparound porch at 634 Ashland St S in Cambridge, MN" priority sizes="(min-width:1024px) 50vw, 100vw" />
            </div>
            <div className="absolute -left-14 bottom-0 hidden w-[34%] border-[6px] border-cream shadow-[0_30px_60px_-30px_rgba(25,28,32,0.5)] lg:block">
              <div className="aspect-[4/3]"><Photo id="6b007be02c68ebcf46344450" alt="Pokegama Haven lake home at sunset" sizes="25vw" /></div>
            </div>
            <p className="absolute right-0 top-6 bg-ink px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">634 Ashland St S · Cambridge</p>
          </div>
        </div>
      </section>

      {/* THREE PATHS */}
      <section aria-label="Choose your path" className="bg-ink text-white">
        <div className="wrap grid divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { n: "01", t: "Rent a home", d: "Apartments, duplexes and houses across the region.", href: "/property-listed" },
            { n: "02", t: "Plan a getaway", d: "Lakefront, wooded and downtown vacation stays.", href: "/vacation-rentals" },
            { n: "03", t: "Own a rental?", d: "Long-term, short-term and Airbnb management.", href: "/property-owners" },
          ].map((p) => (
            <Link key={p.n} href={p.href} className="group flex items-center justify-between gap-6 py-7 md:px-8 md:first:pl-0 md:last:pr-0">
              <span>
                <span className="font-sans text-[12px] font-semibold text-gold">{p.n}</span>
                <span className="mt-1 block font-display text-3xl font-semibold uppercase tracking-wide group-hover:text-gold-soft">{p.t}</span>
                <span className="mt-1 block text-[14px] text-white/60">{p.d}</span>
              </span>
              <Arrow className="h-6 w-6 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="reveal lg:col-span-7">
            <p className="eyebrow">Who we are</p>
            <p className="display-md mt-6 normal-case">
              One local team for rental homes, vacation stays and the owners behind them.
            </p>
          </div>
          <div className="reveal lg:col-span-5 lg:pt-14">
            <p className="lead">
              Property Management Professionals operates residential rentals and vacation properties across East Central Minnesota. Operations, maintenance, cleaning and guest communication all sit with the same people, so details do not fall between companies.
            </p>
            <p className="mt-5 text-[15px] text-muted">
              Renters find a home through us. Guests book a getaway with us. Owners hand us the work of running a rental.
            </p>
          </div>
        </div>
        <div className="wrap mt-16">
          <dl className="reveal grid grid-cols-1 border-y border-line sm:grid-cols-3">
            {[
              { k: `${rentals.length}`, v: "Residential rental properties" },
              { k: `${vacations.length}`, v: "Vacation properties, six ways to book" },
              { k: `${towns.size}`, v: "Towns across East Central Minnesota" },
            ].map((s, i) => (
              <div key={s.v} className={`flex items-baseline gap-5 py-8 sm:block ${i ? "sm:border-l sm:border-line sm:pl-10" : ""}`}>
                <dt className="font-display text-6xl font-bold text-ink sm:text-7xl">{s.k}</dt>
                <dd className="text-[14px] text-muted sm:mt-2">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-stone py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-48">
              <SectionHead eyebrow="Management services" title="The work behind a well-run rental.">
                <p>From the first showing to the last turnover, here is what our team handles for property owners.</p>
              </SectionHead>
              <div className="reveal zoom-wrap mt-10 hidden aspect-[4/3] lg:block">
                <Photo id="6b007bcf17b3903898af4ab6" alt="Living room with stone fireplace at Tall Pines Log Cabin" sizes="40vw" />
              </div>
            </div>
          </div>
          <ol className="lg:col-span-7">
            {services.map((s, i) => (
              <li key={s.title} className="reveal grid grid-cols-[3.25rem_1fr] gap-x-4 border-t border-charcoal/15 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[5rem_1fr]">
                <span className="font-display text-4xl font-bold text-gold-deep/70 sm:text-5xl">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-[30px] font-semibold uppercase">{s.title}</h3>
                  <p className="mt-2 text-[15px] text-muted">{s.text}</p>
                </div>
              </li>
            ))}
            <li className="reveal pl-[4.25rem] pt-2 sm:pl-24"><Link href="/property-owners" className="link-arrow">See how management works<Arrow /></Link></li>
          </ol>
        </div>
      </section>

      {/* OWNER BENEFITS */}
      <section className="bg-ink text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[4/3] lg:self-center">
            <Photo id="6b007a2262e09e38ada16ab6" alt="Apartment building at 150 S Irving Ave in Rush City, MN" sizes="(min-width:1024px) 50vw, 100vw" className="absolute inset-0 img-cover" />
          </div>
          <div className="px-5 py-20 sm:px-10 lg:px-16 lg:py-24 xl:pr-[max(4rem,calc((100vw-1240px)/2+2rem))]">
            <SectionHead light eyebrow="For property owners" title="We run rentals like our own. Because we do." >
              <p>The team that would manage your property already looks after our own apartments, houses and vacation stays every day.</p>
            </SectionHead>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                ["In-house maintenance", "Our own maintenance and remodeling crew handles repair requests."],
                ["A dedicated cleaning team", "Turnovers between residents and guests are done by our people."],
                ["Long-term and short-term", "Leases, Airbnb stays and direct bookings under one roof."],
                ["Clear owner updates", "Repairs, occupancy and decisions are communicated as they happen."],
              ].map(([t, d]) => (
                <li key={t} className="reveal border-t border-white/15 pt-5">
                  <p className="flex items-center gap-2.5 font-display text-2xl font-semibold uppercase tracking-wide"><Check className="h-5 w-5 text-gold" />{t}</p>
                  <p className="mt-2 text-[14px] text-white/65">{d}</p>
                </li>
              ))}
            </ul>
            <div className="reveal mt-12 flex flex-wrap gap-3">
              <Link href="/management-quote" className="btn-gold">Get a Management Quote<Arrow /></Link>
              <a href={site.phoneHref} className="btn-line-light">Call {site.phone}</a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow="Properties we manage" title="Homes across the region.">
              <p>A look at a few of the residential properties our team leases and maintains. Availability changes, so ask us about any home that fits.</p>
            </SectionHead>
            <Link href="/property-listed" className="reveal link-arrow">View all {rentals.length} properties<Arrow /></Link>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 lg:grid-cols-12">
            <div className="lg:col-span-7"><RentalCard r={featured[0]} large sizes="(min-width:1024px) 58vw, 100vw" /></div>
            <div className="grid gap-14 lg:col-span-5 lg:pt-24"><RentalCard r={featured[1]} sizes="(min-width:1024px) 40vw, 100vw" /></div>
            <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:col-span-12 lg:grid-cols-12">
              <div className="lg:col-span-5 lg:col-start-2"><RentalCard r={featured[2]} /></div>
              <div className="lg:col-span-5 lg:pt-16"><RentalCard r={featured[3]} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* VACATION */}
      <section className="bg-cream py-20 md:py-28">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHead className="lg:col-span-7" eyebrow="Vacation stays" title="Places to unwind, close to home.">
              <p>A lakefront retreat on Pokegama Lake, a log cabin under the pines, a woodland property with a sauna, and a loft above Main Street. Book direct with us or on Airbnb.</p>
            </SectionHead>
            <div className="reveal lg:col-span-5 lg:text-right"><Link href="/vacation-rentals" className="btn-line text-ink">Explore vacation rentals</Link></div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {[poke, ...otherStays].map((v) => <StayCard key={v.slug} v={v} sizes="(min-width:768px) 50vw, 100vw" />)}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow="For owners" title="How management works." />
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {ownerSteps.map((s, i) => (
              <li key={s.title} className="reveal relative lg:pr-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink font-display text-xl font-bold text-gold">{i + 1}</span>
                  {i < ownerSteps.length - 1 && <span className="hidden h-px flex-1 bg-gold/60 lg:block" />}
                </div>
                <h3 className="mt-6 font-display text-[28px] font-semibold uppercase">{s.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-stone py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <SectionHead className="lg:col-span-4" eyebrow="See the properties" title="A closer look.">
            <p>A short film from the homes and vacation stays our team looks after every day.</p>
          </SectionHead>
          <div className="reveal lg:col-span-8"><VideoSlot slot={videos.homeIntro} /></div>
        </div>
      </section>

      {/* REVIEWS: real reviews live on Airbnb; none are reproduced or invented here */}
      <section className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <SectionHead className="lg:col-span-5" eyebrow="Guest reviews" title="Hear it from our guests.">
            <p>Our vacation stays carry many 5-star guest reviews on Airbnb. Read them in full, in the guests&apos; own words, on each listing.</p>
          </SectionHead>
          <ul className="reveal divide-y divide-line border-y border-line lg:col-span-7">
            {vacations.flatMap((v) => (v.options ? v.options.map((o) => ({ name: `Pokegama ${o.name}`, town: v.town, id: o.airbnbId })) : [{ name: v.name, town: v.town, id: v.airbnbId! }])).map((l) => (
              <li key={l.id}>
                <a href={airbnb(l.id)} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-6 py-5">
                  <span>
                    <span className="block font-display text-2xl font-semibold uppercase">{l.name}</span>
                    <span className="text-[13px] text-muted">{l.town}, MN · Reviews on Airbnb</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-deep transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={<>Own a rental?<br />Let&apos;s talk about it.</>}
        text="Tell us about your home, duplex, apartment building or vacation property. We will follow up with management options and next steps."
        photo="6b007a28565ed309afa344e5"
        primary={{ label: "Request a Management Quote", href: "/management-quote" }}
        secondary={{ label: "Contact our team", href: "/contact" }}
      />
    </>
  );
}
