import Link from "next/link";
import type { Metadata } from "next";
import Photo from "@/components/Photo";
import VideoSlot from "@/components/VideoSlot";
import { CtaBand, PageHero, SectionHead } from "@/components/Ui";
import { Arrow, Check } from "@/components/Icons";
import { faqs, ownerSteps, services } from "@/data/services";
import { videos } from "@/data/media";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Property Management Services for Owners in East Central MN",
  description: "Long-term rental, short-term and Airbnb management in East Central Minnesota: tenant placement, leasing, rent collection, in-house maintenance, cleaning and owner updates.",
  alternates: { canonical: "/property-owners" },
};

const ownerFaqs = faqs.filter((f) => /manage/.test(f.q));

export default function OwnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Your property. Our team."
        title={<>Property<br />management</>}
        intro="Own a rental home, a multi-unit building or a vacation property? Our local team manages residents, guests, repairs and cleaning, so you don't have to."
        photo="6b007a22d40dd2061747a1fb"
        alt="Brick fourplex at 15 S Eliot Ave in Rush City, MN"
      >
        <Link href="/management-quote" className="btn-gold">Get a management quote<Arrow /></Link>
        <a href={site.phoneHref} className="btn-line-light">Call {site.phone}</a>
      </PageHero>

      <section className="border-b border-line">
        <ul className="wrap flex flex-wrap gap-x-10 gap-y-3 py-6 text-[13px] font-medium uppercase tracking-[0.12em] text-charcoal/80">
          {["Long-term rental management", "Airbnb & vacation hosting", "In-house maintenance team", "Cleaning & turnovers", "One local team to call"].map((t) => (
            <li key={t} className="flex items-center gap-2"><Check className="h-4 w-4 text-gold-deep" />{t}</li>
          ))}
        </ul>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap">
          <SectionHead eyebrow="What we handle" title="Six parts of the job, one team.">
            <p>Every service below is carried out by the same people who run our own rental homes and vacation stays.</p>
          </SectionHead>
          <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-2">
            {services.map((s, i) => (
              <article key={s.title} className={`reveal bg-white p-8 sm:p-10 ${i === 0 ? "md:bg-cream" : ""} ${i === 3 ? "md:bg-cream" : ""} ${i === 4 ? "md:bg-cream" : ""}`}>
                <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-deep">Service {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-4xl font-semibold uppercase">{s.title}</h2>
                <p className="mt-3 text-[15px] text-muted">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHead light eyebrow="Long-term and short-term" title="Leases or guest stays. We run both.">
              <p>Long-term residents need responsive maintenance and clear lease administration. Vacation guests need fast communication, spotless turnovers and a well-kept listing. We do both every week across our own properties.</p>
            </SectionHead>
            <div className="reveal mt-8 border-l-2 border-gold pl-5 text-[15px] text-white/75">
              Our vacation stays carry many 5-star guest reviews on Airbnb.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-7">
            <div className="reveal zoom-wrap aspect-[4/3]"><Photo id="6b007a22268fda5bfe62d198" alt="Rambler rental home at 904 Dellwood St S in Cambridge" sizes="30vw" /></div>
            <div className="reveal zoom-wrap mt-12 aspect-[4/3]"><Photo id="6b007c6a62e09e38ada1c4c2" alt="Lake-facing patio at Pokegama Haven vacation rental" sizes="30vw" /></div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Getting started" title="From first call to day-to-day." />
            <ol className="mt-10 space-y-8">
              {ownerSteps.map((s, i) => (
                <li key={s.title} className="reveal flex gap-5">
                  <span className="font-display text-5xl font-bold leading-none text-gold">{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold uppercase">{s.title}</h3>
                    <p className="mt-1 text-[15px] text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-7">
            <div className="reveal"><VideoSlot slot={videos.ownerServices} /></div>
            <div className="reveal mt-10 bg-stone p-8">
              <h3 className="font-display text-3xl font-semibold uppercase">Larger projects</h3>
              <p className="mt-2 text-[15px] text-muted">For larger repairs, remodeling and improvements, our related company Property Maintenance Professionals provides local support.</p>
              <a href="https://propertymaintenanceprofessionals.com/" target="_blank" rel="noopener noreferrer" className="link-arrow mt-4">Visit Property Maintenance Professionals<Arrow /><span className="sr-only">(opens in a new tab)</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <SectionHead className="lg:col-span-4" eyebrow="Owner questions" title="Good to know." />
          <div className="lg:col-span-8">
            {[...ownerFaqs, { q: "What does management cost?", a: "Fees depend on the property and the services it needs. We share options after learning about your property, and nothing applies until both parties sign a written management agreement." }].map((f) => (
              <details key={f.q} className="reveal group border-b border-charcoal/15 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-2xl font-semibold uppercase">
                  {f.q}<span className="text-2xl text-gold-deep transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-2xl text-[15px] text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Tell us about<br />your property.</>}
        text="Share your property type, location and goals. We'll follow up with management options and next steps."
        photo="6b007a2262e09e38ada16ace"
        primary={{ label: "Request a Management Quote", href: "/management-quote" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  );
}
