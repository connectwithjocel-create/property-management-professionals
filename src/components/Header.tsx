"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { ghl } from "@/lib/img";
import { brand } from "@/data/media";
import { Close, Menu, Phone } from "./Icons";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const active = (href: string) => path === href || path.startsWith(href + "/");

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_0_var(--color-line)]" : ""}`}>
      <div className="hidden bg-ink text-[12.5px] text-white/75 md:block">
        <div className="wrap flex h-9 items-center justify-between">
          <p>Rentals, vacation stays &amp; property management in {site.region}</p>
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-gold-soft">{site.email}</a>
            <a href={site.phoneHref} className="font-semibold text-gold-soft hover:text-white">{site.phone}</a>
          </div>
        </div>
      </div>
      <div className="wrap flex h-[108px] items-center justify-between gap-6 lg:h-[136px]">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} home`}>
          <span className="block h-[84px] w-[118px] overflow-hidden lg:h-[108px] lg:w-[152px]"><img src={ghl(brand.logo, 600, 95)} alt={site.name} width={600} height={600} className="h-full w-full object-cover" style={{ objectPosition: "50% 46%" }} /></span>
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={active(n.href) ? "page" : undefined}
                  className={`relative py-2 text-[14px] font-medium transition-colors hover:text-gold-deep after:absolute after:inset-x-0 after:-bottom-0.5 after:h-[2px] after:origin-left after:bg-gold after:transition-transform after:duration-300 ${active(n.href) ? "text-ink after:scale-x-100" : "text-charcoal/80 after:scale-x-0 hover:after:scale-x-100"}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/management-quote" className="btn-gold hidden !py-3 sm:inline-flex">Management Quote</Link>
          <a href={site.phoneHref} className="grid h-11 w-11 place-items-center border border-line text-ink sm:hidden" aria-label={`Call ${site.phone}`}><Phone className="h-5 w-5" /></a>
          <button type="button" className="grid h-11 w-11 place-items-center bg-ink text-white lg:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}>
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <Close /> : <Menu />}
          </button>
        </div>
      </div>
      <div id="mobile-nav" hidden={!open} className="fixed inset-x-0 bottom-0 top-[108px] md:top-[144px] overflow-y-auto bg-ink text-white lg:hidden">
        <nav aria-label="Mobile" className="wrap flex min-h-full flex-col py-8">
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {[{ label: "Home", href: "/" }, ...nav].map((n, i) => (
              <li key={n.href}>
                <Link href={n.href} className="flex items-center justify-between py-4 font-display text-3xl font-semibold uppercase tracking-wide hover:text-gold-soft">
                  {n.label}<span className="font-sans text-sm text-gold">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Link href="/management-quote" className="btn-gold">Request a Management Quote</Link>
            <Link href="/rental-inquiry" className="btn-line-light">Send a Rental Inquiry</Link>
          </div>
          <div className="mt-auto pt-10 text-sm text-white/60">
            <a href={site.phoneHref} className="block text-lg font-semibold text-gold-soft">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="mt-1 block break-all">{site.email}</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
