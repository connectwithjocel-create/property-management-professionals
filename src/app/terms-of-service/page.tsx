import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms that apply when you use the Property Management Professionals website, submit inquiries or request a management quote.",
  alternates: { canonical: "/terms-of-service" },
};

export default function Page() { return <LegalPage doc={terms} />; }
