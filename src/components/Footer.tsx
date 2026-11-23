import Link from "next/link";
import { family, site } from "@/lib/site";
import { ghl } from "@/lib/img";
import { brand } from "@/data/media";
import { ArrowUpRight, Facebook, Mail, Phone } from "./Icons";

const cols = [
  { title: "Rentals & Stays", links: [
    { label: "Rental Properties", href: "/property-listed" },
    { label: "Rental Inquiry", href: "/rental-inquiry" },
    { label: "Vacation Rentals", href: "/vacation-rentals" },
    { label: "Direct Booking", href: "/direct-booking" },
  ] },
  { title: "For Owners", links: [
    { label: "Management Services", href: "/property-owners" },
    { label: "Management Quote", href: "/management-quote" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ] },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Link href="/" className="inline-block bg-white px-4 py-3" aria-label={`${site.name} home`}>
            <span className="block h-[104px] w-[146px] overflow-hidden"><img src={ghl(brand.logo, 600, 95)} alt={site.name} width={600} height={600} loading="lazy" className="h-full w-full object-cover" /></span>
          </Link>
          <p className="mt-6 max-w-xs text-[14px] leading-relaxed">
            Rental homes for everyday living, vacation properties for your next Minnesota getaway, and local management for property owners.
          </p>
          <ul className="mt-6 space-y-2.5 text-[14px]">
            <li><a href={site.phoneHref} className="inline-flex items-center gap-3 text-white hover:text-gold-soft"><Phone className="h-4 w-4 text-gold" />{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="inline-flex items-center gap-3 break-all hover:text-gold-soft"><Mail className="h-4 w-4 shrink-0 text-gold" />{site.email}</a></li>
            <li><a href={site.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 hover:text-gold-soft"><Facebook className="h-4 w-4 text-gold" />Facebook<span className="sr-only"> (opens in a new tab)</span></a></li>
          </ul>
        </div>
        {cols.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <h2 className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-soft">{c.title}</h2>
            <ul className="mt-5 space-y-3 text-[14px]">
              {c.links.map((l) => <li key={l.href}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>)}
            </ul>
          </div>
        ))}
        <div className="md:col-span-4">
          <h2 className="font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-gold-soft">Our Family of Companies</h2>
          <ul className="mt-5 divide-y divide-white/10 border-y border-white/10">
            {family.map((f) => (
              <li key={f.name}>
                <a href={f.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-4">
                  <span>
                    <span className="block font-display text-xl font-semibold uppercase tracking-wide text-white group-hover:text-gold-soft">{f.name}</span>
                    <span className="text-[13px]">{f.note}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-3 py-6 text-[12.5px] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved. {site.legalNote}</p>
          <ul className="flex gap-6">
            <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
