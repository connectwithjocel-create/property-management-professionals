// Central media registry. IDs are GHL Media Storage file IDs from the
// Property Management Professionals sub-account (location swY61qxZ1CfPz1q1mNN3).

export const brand = {
  logo: "6abbca2712c0bdec2cb03d03", // official logo used on the live site
};

export const team = [
  { name: "Bob Blaisdell", role: "Founder & CEO", photo: "6ac639db045e7749919b3fd1",
    bio: "Bob leads Property Management Professionals with a practical, property-owner-focused approach. He is committed to building a dependable team, keeping communication clear, and making sure every home is well cared for, whether it is rented long-term or booked for a getaway." },
  { name: "Aaron Bronson", role: "Maintenance Lead", photo: "6ac639dbc478ac553523c3da",
    bio: "Aaron is known for his reliability and for responding quickly to maintenance concerns. His steady, dependable approach gives residents and guests peace of mind." },
  { name: "Erik Kuronen", role: "Remodeler & Carpenter", photo: "6ac639db7d735ea2a17e1fdd",
    bio: "Erik brings years of experience remodeling high-end homes throughout the Twin Cities. His craftsmanship and attention to detail help keep our properties comfortable and functional." },
  { name: "Ken Herbsleb", role: "Maintenance Technician", photo: "6ac639db0fb2818e7bcb3b0a",
    bio: "Ken enjoys working with his hands and making things look new again. He is dependable and hardworking, and he treats every property with care and respect." },
  { name: "Jocel Jualo", role: "Operations Assistant", photo: "6ac639db7d735ea2a17e1fe8",
    bio: "Jocel coordinates day-to-day operations, team communication, scheduling, follow-up, and internal systems. Her organized approach helps make sure property needs and details are communicated clearly and handled efficiently." },
  { name: "Miranda Bendickson", role: "Cleaning Team Member", photo: "6ac639dbbbad531ac80bb7d1",
    bio: "Miranda helps keep our properties clean, comfortable, and ready for residents and guests. She takes pride in the details that make a space feel well cared for." },
];

// Video slots. Set `src` (an MP4 in /public/videos or a hosted URL) when
// Bob's footage is ready; the placeholder is replaced automatically.
export type VideoSlot = { id: string; title: string; description: string; poster: string; src?: string };

export const videos: Record<string, VideoSlot> = {
  homeIntro: { id: "VIDEO 01", title: "Homepage introduction",
    description: "A short introduction filmed at the properties we manage, showing how our team looks after homes, residents and guests.",
    poster: "6b007be02c68ebcf46344450" },
  bobIntro: { id: "VIDEO 02", title: "A word from Bob",
    description: "Bob introduces Property Management Professionals and the services our team provides.",
    poster: "6b007a288368d0ae483cf6e2" },
  vacationShowcase: { id: "VIDEO 03", title: "Vacation rental showcase",
    description: "Interiors, exteriors and amenities from our Minnesota vacation stays.",
    poster: "6b007c53d40dd2061747fe39" },
  propertyTour: { id: "VIDEO 04", title: "Featured property tour",
    description: "A walkthrough of one of our managed rental homes.",
    poster: "6b007a228368d0ae483cf5cb" },
  ownerServices: { id: "VIDEO 05", title: "How we support owners",
    description: "Bob explains how our team manages rental properties for owners.",
    poster: "6b007a22268fda5bfe62d198" },
};
