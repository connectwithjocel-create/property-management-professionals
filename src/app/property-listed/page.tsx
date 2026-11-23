import Link from "next/link";
import type { Metadata } from "next";
import RentalBrowser from "@/components/RentalBrowser";
import VideoSlot from "@/components/VideoSlot";
import { CtaBand, PageHero, SectionHead } from "@/components/Ui";
import { Arrow } from "@/components/Icons";
import { rentals, towns } from "@/data/properties";
import { videos } from "@/data/media";

export const metadata: Metadata = {
  title: "Rental Homes & Apartments in East Central Minnesota",
  description: "Browse our residential rental properties in Cambridge, Rush City, Mora, North Branch, Pine City, Braham, Isanti and Wyoming, MN, then send a Rental Inquiry about availability.",
  alternates: { canonical: "/property-listed" },
};

export default function RentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rental properties"
        title={<>Find your<br />next home</>}
        intro="Browse our residential rental property collection across East Central Minnesota. Compare locations, units, bedrooms and bathrooms, then send a Rental Inquiry when a property fits."
        photo="6b007a288368d0ae483cf6d4"
        alt="Blue rambler rental home on a wooded lot near Cambridge, MN"
      >
        <a href="#browse" className="btn-gold">Browse properties<Arrow /></a>
        <Link href="/rental-inquiry" className="btn-line-light">Rental Inquiry</Link>
      </PageHero>

      <section id="browse" className="scroll-mt-24 bg-cream py-16 md:py-24">
        <div className="wrap">
          <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
            <SectionHead className="lg:col-span-7" eyebrow="Residential rentals" title="Our property collection." />
            <p className="reveal text-[14px] text-muted lg:col-span-5">
              This is our property collection, not a live vacancy list. Rent, deposits, lease terms and availability vary by property and must be confirmed with our team. Details not yet confirmed are shown with a dash.
            </p>
          </div>
          <RentalBrowser rentals={rentals} towns={towns} />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHead eyebrow="Three simple steps" title="How renting with us works." />
            <ol className="mt-10 space-y-6">
              {[
                ["Find your property", "Review the address and unit details that best match what you're looking for."],
                ["Send a Rental Inquiry", "Tell us which property or unit interests you and answer a few quick rental questions."],
                ["Confirm availability", "Our team follows up about current availability and the appropriate next steps."],
              ].map(([t, d], i) => (
                <li key={t} className="reveal flex gap-5 border-t border-line pt-6">
                  <span className="font-display text-4xl font-bold leading-none text-gold-deep">0{i + 1}</span>
                  <div><h3 className="font-display text-2xl font-semibold uppercase">{t}</h3><p className="mt-1 text-[15px] text-muted">{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal lg:col-span-7"><VideoSlot slot={videos.propertyTour} /></div>
        </div>
      </section>

      <CtaBand
        title={<>Interested in<br />a property?</>}
        text="Send a Rental Inquiry with the property or unit you're considering and our team will follow up about availability and next steps."
        photo="6b007a27d40dd2061747a32b"
        primary={{ label: "Start Rental Inquiry", href: "/rental-inquiry" }}
      />
    </>
  );
}
