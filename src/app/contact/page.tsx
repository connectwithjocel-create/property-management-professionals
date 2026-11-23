import Link from "next/link";
import type { Metadata } from "next";
import FormPage from "@/components/FormPage";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact Property Management Professionals",
  description: "Call (612) 210-8424 or email info@propertymanagementprofessionals.net. Questions about rentals, vacation stays or property management in East Central Minnesota.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <FormPage
      eyebrow="Contact our team"
      title={<>Let&apos;s<br />talk</>}
      intro="Questions about a rental, a vacation stay or managing your property? Call, email or send a message and our local team will get back to you."
      steps={["Renters: ask about a property or unit", "Guests: ask about a stay or booking", "Owners: ask about management"]}
      photo="6ac63ea57d735ea2a17e7c15"
      alt="Tall Pines log cabin in North Branch, MN"
      kind="contact"
      formTitle="Send us a message"
      formIntro="For a faster reply on a specific request, use the Rental Inquiry, Direct Booking or Management Quote form instead."
      submitLabel="Send message"
      fields={[
        { name: "name", label: "Full name", type: "text", required: true, half: true, autoComplete: "name" },
        { name: "phone", label: "Phone", type: "tel", half: true, autoComplete: "tel" },
        { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
        { name: "topic", label: "I'm asking about", type: "select", required: true, options: ["A rental home", "A vacation stay", "Property management", "Something else"] },
        { name: "message", label: "Message", type: "textarea", required: true },
      ]}
      disclaimer="Please don't include sensitive personal or financial information in this message."
      aside={
        <div className="mt-10 grid gap-2 text-[14px]">
          <Link href="/rental-inquiry" className="inline-flex items-center gap-2 text-white hover:text-gold-soft">Rental Inquiry<Arrow /></Link>
          <Link href="/direct-booking" className="inline-flex items-center gap-2 text-white hover:text-gold-soft">Direct Booking Inquiry<Arrow /></Link>
          <Link href="/management-quote" className="inline-flex items-center gap-2 text-white hover:text-gold-soft">Management Quote<Arrow /></Link>
        </div>
      }
    />
  );
}
