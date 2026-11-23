import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Property Management Professionals collects, uses and protects information submitted through our website and inquiry forms.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() { return <LegalPage doc={privacy} />; }
