import type { Metadata } from "next";
import FormPage from "@/components/FormPage";
import { propertyTypes } from "@/data/services";

export const metadata: Metadata = {
  title: "Request a Property Management Quote | East Central Minnesota",
  description: "Own a rental home, multi-unit building or vacation property in East Central Minnesota? Tell us about it and we'll follow up with management options.",
  alternates: { canonical: "/management-quote" },
};

export default function QuotePage() {
  return (
    <FormPage
      eyebrow="Management quote"
      title={<>Tell us about<br />your property</>}
      intro="Share your property type, location and goals. We'll follow up with management options and next steps."
      steps={["Tell us about the property and your goals", "We follow up with management options", "Nothing is binding until a written agreement is signed"]}
      photo="6b007a22565ed309afa34413"
      alt="Rental home in North Branch, MN"
      kind="management-quote"
      formTitle="Request a Management Quote"
      formIntro="A few details help us prepare useful options for you."
      submitLabel="Request my quote"
      fields={[
        { name: "name", label: "Full name", type: "text", required: true, half: true, autoComplete: "name" },
        { name: "phone", label: "Phone", type: "tel", required: true, half: true, autoComplete: "tel" },
        { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
        { name: "address", label: "Property address", type: "text", required: true, autoComplete: "street-address" },
        { name: "type", label: "Property type", type: "select", required: true, half: true, options: propertyTypes },
        { name: "units", label: "Number of units", type: "number", half: true },
        { name: "goals", label: "Rental goals", type: "select", required: true, options: ["Long-term rental", "Short-term or Airbnb rental", "Not sure yet"] },
        { name: "message", label: "Tell us more about the property", type: "textarea", placeholder: "Current condition, occupancy, timing, questions..." },
      ]}
      disclaimer="A Management Quote request is not a management agreement. Services, fees and responsibilities apply only after both parties agree on terms and sign a written management agreement."
    />
  );
}
