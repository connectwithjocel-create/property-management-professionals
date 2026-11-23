import type { ReactNode } from "react";
import Photo from "./Photo";
import InquiryForm, { type Field } from "./InquiryForm";
import { Mail, Phone } from "./Icons";
import { site } from "@/lib/site";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  steps: string[];
  photo: string;
  alt: string;
  kind: "rental-inquiry" | "management-quote" | "direct-booking" | "contact";
  formTitle: string;
  formIntro: string;
  fields: Field[];
  submitLabel: string;
  disclaimer: string;
  aside?: ReactNode;
};

export default function FormPage(p: Props) {
  return (
    <section className="bg-cream">
      <div className="grid lg:grid-cols-12">
        <div className="relative bg-ink text-white lg:col-span-5">
          <Photo id={p.photo} alt={p.alt} priority sizes="(min-width:1024px) 42vw, 100vw" className="absolute inset-0 img-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink" />
          <div className="relative px-5 py-16 sm:px-8 lg:sticky lg:top-[110px] lg:py-24 lg:pl-[max(2rem,calc((100vw-1240px)/2+2rem))] lg:pr-12">
            <p className="eyebrow eyebrow-light">{p.eyebrow}</p>
            <h1 className="display-xl mt-6 text-white">{p.title}</h1>
            <p className="mt-6 max-w-md text-[16px] text-white/75">{p.intro}</p>
            <ol className="mt-10 space-y-4">
              {p.steps.map((s, i) => (
                <li key={s} className="flex gap-4 border-t border-white/15 pt-4 text-[14px] text-white/80">
                  <span className="font-display text-2xl font-bold leading-none text-gold">0{i + 1}</span>{s}
                </li>
              ))}
            </ol>
            <div className="mt-10 space-y-2 text-[14px]">
              <a href={site.phoneHref} className="flex items-center gap-3 text-gold-soft hover:text-white"><Phone />{site.phone}</a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all text-white/70 hover:text-white"><Mail className="h-4 w-4 shrink-0" />{site.email}</a>
            </div>
            {p.aside}
          </div>
        </div>
        <div className="px-5 py-16 sm:px-8 lg:col-span-7 lg:py-24 lg:pl-16 lg:pr-[max(2rem,calc((100vw-1240px)/2+2rem))]">
          <div className="bg-white p-6 shadow-[0_30px_60px_-40px_rgba(25,28,32,0.35)] sm:p-10">
            <h2 className="display-md">{p.formTitle}</h2>
            <p className="mt-3 text-[15px] text-muted">{p.formIntro}</p>
            <div className="mt-8"><InquiryForm kind={p.kind} fields={p.fields} submitLabel={p.submitLabel} /></div>
          </div>
          <p className="mt-6 text-[13px] leading-relaxed text-muted">{p.disclaimer}</p>
        </div>
      </div>
    </section>
  );
}
