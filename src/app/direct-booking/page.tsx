import type { Metadata } from "next";
import FormPage from "@/components/FormPage";
import { vacations } from "@/data/properties";

export const metadata: Metadata = {
  title: "Direct Booking Inquiry | Minnesota Vacation Rentals",
  description: "Plan your stay at Pokegama Views, Stark Woodland Retreat, Tall Pines Log Cabin or the Nostalgia Room. Share your dates and guest count and we'll follow up with availability and pricing.",
  alternates: { canonical: "/direct-booking" },
};

const stayOptions = vacations.flatMap((v) => (v.options ? v.options.map((o) => `Pokegama ${o.name}`) : [v.name]));

export default function DirectBookingPage() {
  return (
    <FormPage
      eyebrow="Direct booking"
      title={<>Plan your<br />stay</>}
      intro="Share your preferred property, dates and guest count. We'll follow up with availability and pricing."
      steps={["Pick your property, dates and guest count", "We confirm availability, pricing and terms", "Complete booking and payment, then get your stay details"]}
      photo="6b007c6a62e09e38ada1c4c2"
      alt="Lake-facing patio at Pokegama Haven"
      kind="direct-booking"
      formTitle="Direct Booking Inquiry"
      formIntro="Booking direct is simple. Tell us when you'd like to visit."
      submitLabel="Send booking inquiry"
      fields={[
        { name: "name", label: "Full name", type: "text", required: true, half: true, autoComplete: "name" },
        { name: "phone", label: "Phone", type: "tel", required: true, half: true, autoComplete: "tel" },
        { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
        { name: "property", label: "Preferred property", type: "select", required: true, options: stayOptions },
        { name: "checkin", label: "Check-in", type: "date", required: true, half: true },
        { name: "checkout", label: "Check-out", type: "date", required: true, half: true },
        { name: "guests", label: "Number of guests", type: "number", required: true, half: true },
        { name: "message", label: "Questions or special requests", type: "textarea" },
      ]}
      disclaimer="A Direct Booking Inquiry is not a reservation. Submitting an inquiry does not reserve the property or charge you. Availability, final pricing, payment and reservation terms must be confirmed before the booking is complete."
    />
  );
}
