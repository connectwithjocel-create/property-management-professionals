import type { LegalDoc } from "@/data/legal";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <section className="bg-ink py-16 text-white md:py-24">
        <div className="wrap max-w-4xl">
          <p className="eyebrow eyebrow-light">{doc.eyebrow}</p>
          <h1 className="display-xl mt-6 text-white">{doc.title}</h1>
          <p className="mt-6 max-w-2xl text-[16px] text-white/70">{doc.intro}</p>
          <p className="mt-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold-soft">Last updated: {doc.updated}</p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <nav aria-label="Sections" className="lg:col-span-4">
            <ol className="space-y-2 text-[14px] lg:sticky lg:top-48">
              {doc.sections.map((s, i) => (
                <li key={s.title}><a href={`#${slug(s.title)}`} className="flex gap-3 text-muted hover:text-ink"><span className="w-6 text-gold-deep">{i + 1}.</span>{s.title}</a></li>
              ))}
            </ol>
          </nav>
          <article className="max-w-none text-[15.5px] leading-[1.8] text-charcoal lg:col-span-8">
            <p className="border-l-2 border-gold bg-cream p-5 text-[15px]">{doc.preface}</p>
            {doc.sections.map((s, i) => (
              <section key={s.title} id={slug(s.title)} className="scroll-mt-48 border-b border-line py-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">Section {String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-2 font-display text-4xl font-semibold uppercase">{s.title}</h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((b, j) => Array.isArray(b)
                    ? <ul key={j} className="list-disc space-y-1.5 pl-5 marker:text-gold-deep">{b.map((li) => <li key={li}>{li}</li>)}</ul>
                    : <p key={j}>{b}</p>)}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
