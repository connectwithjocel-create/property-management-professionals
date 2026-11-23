// Central business configuration. Every value here was verified against the
// live site (propertymanagementprofessionals.com) on Nov 23, 2026 unless noted.

export const site = {
  name: "Property Management Professionals",
  shortName: "PMP",
  legalNote: "Property Management Professionals is a DBA of Property Investment Professionals LLC.",
  tagline: "Rentals, vacation stays and property management in East Central Minnesota",
  // Production domain (canonical). The Vercel preview is noindexed until approval.
  url: "https://www.propertymanagementprofessionals.com",
  phone: "(612) 210-8424",
  phoneHref: "tel:+16122108424",
  email: "info@propertymanagementprofessionals.net",
  facebook: "https://www.facebook.com/eastcentralpropertymanagementprofessionals",
  region: "East Central Minnesota",
  // Towns named on the live site (vacation stays) and in company property records.
  serviceTowns: ["North Branch", "Harris", "Pine City", "Cambridge", "Rush City", "Mora", "Braham", "Isanti", "Wyoming"],
  guestsSubdomain: "https://guests.propertymanagementprofessionals.net",
};

// Set NEXT_PUBLIC_SITE_PREVIEW=false only when the production launch is approved.
export const isPreview = process.env.NEXT_PUBLIC_SITE_PREVIEW !== "false";

export const nav = [
  { label: "Rentals", href: "/property-listed" },
  { label: "Vacation Stays", href: "/vacation-rentals" },
  { label: "For Owners", href: "/property-owners" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const family = [
  {
    name: "Property Investment Professionals",
    note: "Investment & private lending",
    // Approved production URL as linked from the live management site footer.
    href: "https://www.propertyinvestmentprofessionals.com/",
  },
  {
    name: "Property Maintenance Professionals",
    note: "Repairs, maintenance & remodeling",
    href: "https://propertymaintenanceprofessionals.com/",
  },
];

// GoHighLevel surveys currently live on the management site.
// mode "preview": safe demo forms that send nothing (Vercel review build).
// mode "ghl": embeds the approved survey (use only after approval / in GHL).
export const forms = {
  mode: (process.env.NEXT_PUBLIC_FORMS_MODE === "ghl" ? "ghl" : "preview") as "ghl" | "preview",
  surveys: {
    rentalInquiry: "8KPeFp84YWpZRHkeV5xU",
    managementQuote: "48trkLlawOwuTX7VZ2th",
    directBooking: "68zrcuEXC6ccKB3FK5AA",
  },
  surveyUrl: (id: string) => `https://api.leadconnectorhq.com/widget/survey/${id}`,
};

export const airbnb = (id: string) => `https://www.airbnb.com/rooms/${id}`;
