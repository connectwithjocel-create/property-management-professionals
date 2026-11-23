import type { Metadata } from "next";
import FormPage from "@/components/FormPage";
import { rentals } from "@/data/properties";

export const metadata: Metadata = {
  title: "Rental Inquiry | Rental Homes in East Central Minnesota",
  description: "Tell us which rental property or unit you're interested in and answer a few quick rental questions. Our team follows up about availability and next steps.",
  alternates: { canonical: "/rental-inquiry" },
};

export default function RentalInquiryPage() {
  return (
    <FormPage
      eyebrow="Residential rental inquiry"
      title={<>Looking for a<br />rental home?</>}
      intro="Tell us which property or unit you're interested in and answer a few quick rental questions. Our team will review your inquiry and follow up."
      steps={["Choose the property or unit you're interested in", "Answer a few quick rental questions", "Our team contacts you about availability and next steps"]}
      photo="6b007a22d40dd2061747a1fb"
      alt="Brick fourplex in Rush City, MN"
      kind="rental-inquiry"
      formTitle="Rental Inquiry"
      formIntro="Answer the questions below and our team will follow up. On the live site this step is the approved GoHighLevel rental survey."
      submitLabel="Send Rental Inquiry"
      fields={[
        { name: "name", label: "Full name", type: "text", required: true, half: true, autoComplete: "name" },
        { name: "phone", label: "Phone", type: "tel", required: true, half: true, autoComplete: "tel" },
        { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
        { name: "property", label: "Property you're interested in", type: "select", required: true, options: [...rentals.map((r) => r.address), "Not sure yet"] },
        { name: "unit", label: "Unit (if known)", type: "text", half: true, placeholder: "e.g. Unit 2" },
        { name: "movein", label: "Preferred move-in date", type: "date", half: true },
        { name: "message", label: "Anything else we should know?", type: "textarea" },
      ]}
      disclaimer="Submitting a Rental Inquiry does not guarantee availability, approval or create a lease. Rental terms, availability, screening requirements and next steps must be confirmed with our team."
    />
  );
}
