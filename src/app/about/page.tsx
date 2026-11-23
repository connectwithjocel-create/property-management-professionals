import Link from "next/link";
import type { Metadata } from "next";
import Photo from "@/components/Photo";
import VideoSlot from "@/components/VideoSlot";
import { CtaBand, PageHero, SectionHead } from "@/components/Ui";
import { Arrow } from "@/components/Icons";
import { team, videos } from "@/data/media";
import { family } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | Our Local Property Management Team",
  description: "Meet the team behind Property Management Professionals: leadership, operations, maintenance, remodeling and cleaning working together across East Central Minnesota.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const [bob, ...crew] = team;
  return (
    <>
      <PageHero
        eyebrow="Meet Property Management Professionals"
        title={<>The people<br />behind every<br />property</>}
        intro="Our team works together to keep rental homes and vacation properties cared for, communication clear, and day-to-day details moving in the right direction."
        photo="6b007a28565ed309afa344e5"
        alt="Rental home in North Branch, MN"
      >
        <a href="#team" className="btn-gold">Meet our team<Arrow /></a>
        <Link href="/property-listed" className="btn-line-light">Explore rental properties</Link>
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <SectionHead className="lg:col-span-5" eyebrow="About us" title="A hands-on team focused on well-cared-for properties." />
          <div className="reveal space-y-5 text-[16px] text-muted lg:col-span-6 lg:col-start-7 lg:pt-12">
            <p>Property Management Professionals supports a collection of residential rental homes and vacation properties across East Central Minnesota.</p>
            <p>Our work brings together operations, maintenance, cleaning, communication, scheduling and property care so that the details behind each home are handled consistently and efficiently.</p>
            <p>We also manage long-term rentals, short-term rentals and Airbnb properties for other owners, with the same team and the same level of care.</p>
            <p>Whether someone is looking for a rental home, planning a vacation stay or looking for help managing a property, our goal is to provide clear communication and dependable support throughout the experience.</p>
          </div>
        </div>
        <div className="wrap mt-16">
          <ul className="reveal grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
            {[["Residential rentals", "Long-term and shorter-stay options"], ["Vacation stays", "Minnesota getaways for guests"], ["Owner management", "Long-term, short-term and Airbnb"], ["Property care", "Operations, maintenance and cleaning"]].map(([t, d], i) => (
              <li key={t} className={`py-7 sm:px-6 ${i ? "lg:border-l lg:border-line" : "sm:pl-0"}`}>
                <p className="font-display text-2xl font-semibold uppercase">{t}</p>
                <p className="mt-1 text-[14px] text-muted">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="team" className="scroll-mt-36 bg-ink py-20 text-white md:py-28">
        <div className="wrap">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="reveal relative lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-slate">
                <Photo id={bob.photo} alt={`${bob.name}, ${bob.role}`} sizes="(min-width:1024px) 40vw, 100vw" position="center top" />
              </div>
              <span className="absolute -bottom-4 left-6 bg-gold px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink">{bob.role}</span>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <SectionHead light eyebrow="Leadership" title={bob.name}>
                <p>{bob.bio}</p>
              </SectionHead>
              <div className="reveal mt-10"><VideoSlot slot={videos.bobIntro} /></div>
            </div>
          </div>

          <div className="mt-24">
            <SectionHead light eyebrow="Our team" title="Meet the people behind PMP.">
              <p>Leadership, operations, maintenance, remodeling and cleaning work together to keep each property cared for.</p>
            </SectionHead>
            <ul className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
              {crew.map((m, i) => (
                <li key={m.name} className={`reveal ${i % 2 ? "lg:mt-12" : ""}`}>
                  <div className="aspect-[3/4] overflow-hidden bg-slate">
                    <Photo id={m.photo} alt={`${m.name}, ${m.role}`} sizes="(min-width:1024px) 20vw, 50vw" position="center top" />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{m.role}</p>
                  <h3 className="mt-1 font-display text-2xl font-semibold uppercase text-white">{m.name}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{m.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <SectionHead className="lg:col-span-5" eyebrow="How we work" title="Different roles, working together.">
            <p>Good property care depends on communication between operations, maintenance, cleaning and the people responsible for each home.</p>
          </SectionHead>
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
            {[["Clear communication", "Important property details, scheduling and follow-up are communicated clearly."], ["Dependable property care", "Maintenance, repairs, cleaning and improvements are handled with attention to each property's condition and comfort."], ["Attention to details", "From scheduling to turnovers and maintenance, the team works together so details are not overlooked."]].map(([t, d], i) => (
              <div key={t} className="reveal border-t-2 border-gold pt-5">
                <p className="font-display text-4xl font-bold text-gold-deep/70">0{i + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold uppercase">{t}</h3>
                <p className="mt-2 text-[14px] text-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone py-16">
        <div className="wrap grid gap-8 md:grid-cols-12 md:items-center">
          <div className="reveal md:col-span-5">
            <p className="eyebrow">Our family of companies</p>
            <p className="mt-4 text-[15px] text-muted">Property Management Professionals is a DBA of Property Investment Professionals LLC. Our related companies focus on real estate investment and on property repairs and remodeling.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 md:col-span-7">
            {family.map((f) => (
              <li key={f.name} className="reveal">
                <a href={f.href} target="_blank" rel="noopener noreferrer" className="group block border border-charcoal/15 bg-white p-6 transition-colors hover:border-gold">
                  <span className="font-display text-2xl font-semibold uppercase">{f.name}</span>
                  <span className="mt-1 block text-[13px] text-muted">{f.note}</span>
                  <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-gold-deep">Visit site<Arrow /></span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={<>Own a rental<br />property?</>}
        text="Let the same team manage your long-term, short-term or Airbnb property."
        photo="6b007a2262e09e38ada16afc"
        primary={{ label: "Get a Management Quote", href: "/management-quote" }}
        secondary={{ label: "Browse rentals", href: "/property-listed" }}
      />
    </>
  );
}
