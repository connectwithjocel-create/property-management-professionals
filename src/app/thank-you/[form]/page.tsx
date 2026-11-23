import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Arrow, Check } from "@/components/Icons";
import { site } from "@/lib/site";

const copy = {
  "rental-inquiry": { title: "Thanks for your rental inquiry", text: "Our team will review your inquiry and contact you about availability and the appropriate next steps.", next: { label: "Browse more rentals", href: "/property-listed" } },
  "management-quote": { title: "Thanks for telling us about your property", text: "We'll review the details and follow up with management options and next steps.", next: { label: "Read about our services", href: "/property-owners" } },
  "direct-booking": { title: "Thanks for your booking inquiry", text: "We'll follow up with availability and pricing. Your inquiry does not reserve the property or charge you.", next: { label: "Explore vacation rentals", href: "/vacation-rentals" } },
  contact: { title: "Thanks for reaching out", text: "Our team will get back to you soon.", next: { label: "Back to home", href: "/" } },
} as const;

type Key = keyof typeof copy;
export const dynamicParams = false;
export function generateStaticParams() { return Object.keys(copy).map((form) => ({ form })); }
export const metadata: Metadata = { title: "Thank you", robots: { index: false, follow: false } };

export default async function ThankYou({ params }: { params: Promise<{ form: string }> }) {
  const c = copy[(await params).form as Key];
  if (!c) notFound();
  return (
    <section className="grain bg-cream py-24 md:py-36">
      <div className="wrap max-w-3xl text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ink text-gold"><Check className="h-7 w-7" /></span>
        <h1 className="display-lg mt-8">{c.title}</h1>
        <p className="lead mx-auto mt-6 max-w-xl">{c.text}</p>
        <p className="mt-4 text-[14px] text-muted">Need us sooner? Call <a href={site.phoneHref} className="font-semibold text-ink underline decoration-gold">{site.phone}</a>.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href={c.next.href} className="btn-dark">{c.next.label}<Arrow /></Link>
          <Link href="/" className="btn-line text-ink">Home</Link>
        </div>
      </div>
    </section>
  );
}
