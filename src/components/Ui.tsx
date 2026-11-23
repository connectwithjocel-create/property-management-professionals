import Link from "next/link";
import type { ReactNode } from "react";
import Photo from "./Photo";
import { Arrow } from "./Icons";

export function SectionHead({ eyebrow, title, children, light, className = "" }: { eyebrow: string; title: ReactNode; children?: ReactNode; light?: boolean; className?: string }) {
  return (
    <div className={`reveal max-w-2xl ${className}`}>
      <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>
      <h2 className={`display-lg mt-5 ${light ? "text-white" : ""}`}>{title}</h2>
      {children && <div className={`mt-6 text-[17px] leading-[1.75] ${light ? "text-white/70" : "text-muted"}`}>{children}</div>}
    </div>
  );
}

// Inner-page hero: dark editorial panel beside a photograph.
export function PageHero({ eyebrow, title, intro, photo, alt, children, position }: { eyebrow: string; title: ReactNode; intro: string; photo: string; alt: string; children?: ReactNode; position?: string }) {
  return (
    <section className="relative bg-ink text-white">
      <div className="grid lg:grid-cols-12">
        <div className="relative z-10 flex flex-col justify-center px-5 py-16 sm:px-8 lg:col-span-6 lg:py-24 lg:pl-[max(2rem,calc((100vw-1240px)/2+2rem))] lg:pr-14">
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h1 className="display-xl mt-6 text-white">{title}</h1>
          <p className="mt-7 max-w-xl text-[17px] leading-[1.75] text-white/70">{intro}</p>
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
        <div className="relative min-h-[300px] sm:min-h-[400px] lg:col-span-6 lg:min-h-[560px]">
          <Photo id={photo} alt={alt} priority sizes="(min-width:1024px) 50vw, 100vw" position={position} className="absolute inset-0 img-cover" />
          <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-ink to-transparent lg:block" />
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, text, photo, primary, secondary }: { title: ReactNode; text: string; photo: string; primary: { label: string; href: string }; secondary?: { label: string; href: string } }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Photo id={photo} alt="" sizes="100vw" className="absolute inset-0 -z-10 img-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
      <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:items-end md:py-28">
        <div className="reveal md:col-span-7">
          <p className="eyebrow eyebrow-light">Next step</p>
          <h2 className="display-lg mt-5 text-white">{title}</h2>
          <p className="mt-6 max-w-xl text-[17px] text-white/70">{text}</p>
        </div>
        <div className="reveal flex flex-wrap gap-3 md:col-span-5 md:justify-end">
          <Link href={primary.href} className="btn-gold">{primary.label}<Arrow /></Link>
          {secondary && <Link href={secondary.href} className="btn-line-light">{secondary.label}</Link>}
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
