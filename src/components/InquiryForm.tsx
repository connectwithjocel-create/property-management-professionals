"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { forms } from "@/lib/site";
import { Arrow } from "./Icons";

export type Field =
  | { name: string; label: string; type: "text" | "email" | "tel" | "date" | "number"; required?: boolean; half?: boolean; placeholder?: string; autoComplete?: string }
  | { name: string; label: string; type: "select"; options: string[]; required?: boolean; half?: boolean }
  | { name: string; label: string; type: "textarea"; required?: boolean; placeholder?: string };

type Kind = "rental-inquiry" | "management-quote" | "direct-booking" | "contact";

const surveyFor: Partial<Record<Kind, string>> = {
  "rental-inquiry": forms.surveys.rentalInquiry,
  "management-quote": forms.surveys.managementQuote,
  "direct-booking": forms.surveys.directBooking,
};

export default function InquiryForm({ kind, fields, submitLabel, defaults = {} }: { kind: Kind; fields: Field[]; submitLabel: string; defaults?: Record<string, string> }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [preset, setPreset] = useState(defaults);

  // Allow ?property=... links from listing cards to preselect a property.
  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("property");
    if (p) setPreset((d) => ({ ...d, property: p }));
  }, []);

  const survey = surveyFor[kind];
  if (forms.mode === "ghl" && survey) {
    return (
      <iframe src={forms.surveyUrl(survey)} title={submitLabel} className="h-[760px] w-full border-0" loading="lazy" />
    );
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!e.currentTarget.reportValidity()) return;
    setBusy(true);
    // Preview build: nothing is sent. The approved GHL survey replaces this on launch.
    router.push(`/thank-you/${kind}`);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate={false} key={JSON.stringify(preset)}>
      {fields.map((f) => {
        const id = `${kind}-${f.name}`;
        const span = f.type === "textarea" || !("half" in f && f.half) ? "sm:col-span-2" : "";
        return (
          <div key={f.name} className={span}>
            <label htmlFor={id} className="label">{f.label}{f.required && <span className="text-gold-deep"> *</span>}</label>
            {f.type === "select" ? (
              <select id={id} name={f.name} required={f.required} defaultValue={preset[f.name] ?? ""} className="field appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23856215%22 stroke-width=%222%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:18px] bg-[right_14px_center] bg-no-repeat pr-10">
                <option value="" disabled>Select one</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : f.type === "textarea" ? (
              <textarea id={id} name={f.name} required={f.required} rows={4} placeholder={f.placeholder} defaultValue={preset[f.name]} className="field resize-y" />
            ) : (
              <input id={id} name={f.name} type={f.type} required={f.required} placeholder={f.placeholder} autoComplete={f.autoComplete} defaultValue={preset[f.name]} min={f.type === "number" ? 1 : undefined} className="field" />
            )}
          </div>
        );
      })}
      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={busy} className="btn-dark disabled:opacity-60">{submitLabel}<Arrow /></button>
        <p className="text-[12.5px] text-muted">Preview form. Nothing is sent from this review site.</p>
      </div>
    </form>
  );
}
