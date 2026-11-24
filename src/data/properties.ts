// Property data compiled from:
//  - the live management site's Rental Properties page (unit beds/baths/sq ft)
//  - Property Investment Professionals portfolio pages (towns, short descriptions)
//  - GHL Media Storage folders (one folder per address, photos matched by folder)
// Unit values shown as null were not confirmed in company records ("-" on the live site).
// No rents or live availability exist in any source, so none are shown.

export type Unit = { unit: string; beds: number | null; baths: number | null; sqft: number | null };

export type Rental = {
  slug: string;
  address: string;
  town: string;
  type: string;
  summary: string;
  units: Unit[];
  photo: string;
  alt: string;
  note?: string;
};

const u = (unit: string, beds: number | null, baths: number | null = null, sqft: number | null = null): Unit => ({ unit, beds, baths, sqft });

export const rentals: Rental[] = [
  { slug: "140-davis-st-s", address: "140 Davis St S", town: "Cambridge", type: "Duplex",
    summary: "Two 2-bedroom apartments, about 900 sq ft each.",
    units: [u("Unit 1", 2, 1, 900), u("Unit 2", 2, 1, 900)],
    photo: "6b007aa0d50d9db796228fc5", alt: "Two-story rental house at 140 Davis St S in Cambridge, MN" },
  { slug: "15-s-eliot-ave", address: "15 S Eliot Ave", town: "Rush City", type: "Fourplex",
    summary: "Four 2-bedroom apartments in a brick two-story building.",
    units: [u("Unit 1", 2), u("Unit 2", 2), u("Unit 3", 2), u("Unit 4", 2)],
    photo: "6b007a22d40dd2061747a1fb", alt: "Brick fourplex apartment building at 15 S Eliot Ave in Rush City, MN" },
  { slug: "150-s-irving-ave", address: "150 S Irving Ave", town: "Rush City", type: "Apartment building",
    summary: "Nine-unit apartment building with one and two bedroom units.",
    units: [u("101", 1), u("102", 2), u("103", 1), u("104", 2), u("105", 1), u("201", 2), u("202", 2), u("203", 2), u("204", 2)],
    photo: "6b007a2262e09e38ada16ab6", alt: "Two-story apartment building with parking at 150 S Irving Ave in Rush City, MN" },
  { slug: "2271-335th-ln-ne", address: "2271 335th Ln NE", town: "Cambridge", type: "Duplex",
    summary: "One 3-bedroom and one 2-bedroom unit on a wooded lot.",
    units: [u("Unit 1", 3, 1, 1000), u("Unit 2", 2, 1, 900)],
    photo: "6b007a288368d0ae483cf6d4", alt: "Blue rambler on a wooded lot at 2271 335th Ln NE near Cambridge, MN" },
  { slug: "634-ashland-st-s", address: "634 Ashland St S", town: "Cambridge", type: "Duplex",
    summary: "Victorian home with a wraparound porch. 3 BR and 2 BR units.",
    units: [u("Unit 1", 3), u("Unit 2", 2)],
    photo: "6b007a288368d0ae483cf6e2", alt: "Victorian house with turret and wraparound porch at 634 Ashland St S in Cambridge, MN" },
  { slug: "904-dellwood-st-s", address: "904 Dellwood St S", town: "Cambridge", type: "Duplex",
    summary: "Rambler with a fenced yard. 3 BR and 2 BR units.",
    units: [u("Unit 1", 3), u("Unit 2", 2)],
    photo: "6b007a22268fda5bfe62d198", alt: "Tan rambler with a large front lawn at 904 Dellwood St S in Cambridge, MN" },
  { slug: "325-forest-ave-e", address: "325 Forest Ave E", town: "Mora", type: "Duplex",
    summary: "Two 2-bedroom units with a detached garage.",
    units: [u("Unit 1", 2), u("Unit 2", 2)],
    photo: "6b007a228368d0ae483cf5af", alt: "Blue two-unit house with detached garage at 325 Forest Ave E in Mora, MN" },
  { slug: "512-central-ave-e", address: "512 Central Ave E", town: "Mora", type: "Duplex",
    summary: "Units 512 and 514, both 2 bedrooms.",
    units: [u("512", 2), u("514", 2)],
    photo: "6b007a22565ed309afa343fb", alt: "Single-level duplex at 512 Central Ave E in Mora, MN" },
  { slug: "539-park-st-s", address: "539 Park St S", town: "Mora", type: "Duplex",
    summary: "One 2-bedroom and one 1-bedroom unit.",
    units: [u("Unit 1", 2), u("Unit 2", 1)],
    photo: "6b007a28565ed309afa3450b", alt: "Rambler with attached garage at 539 Park St S in Mora, MN" },
  { slug: "717-summit-ln", address: "717 Summit Ln", town: "Mora", type: "Triplex",
    summary: "Three residential units. Details for the third unit are pending.",
    units: [u("Unit 1", 1), u("Unit 2", 3), u("Unit 3", null)],
    photo: "6b007a2262e09e38ada16ace", alt: "Brick split-level home at 717 Summit Ln in Mora, MN" },
  { slug: "38986-grand-ave", address: "38986 Grand Ave", town: "North Branch", type: "Duplex",
    summary: "One 3-bedroom and one 2-bedroom unit.",
    units: [u("Unit 1", 3), u("Unit 2", 2)],
    photo: "6b007a28565ed309afa344e5", alt: "Rambler among mature trees at 38986 Grand Ave in North Branch, MN" },
  { slug: "4525-saint-croix-trl", address: "4525 Saint Croix Trl", town: "North Branch", type: "Duplex",
    summary: "One 3-bedroom and one 2-bedroom unit.",
    units: [u("Unit 1", 3), u("Unit 2", 2)],
    photo: "6b007a22565ed309afa34413", alt: "White rambler with a large front yard at 4525 Saint Croix Trl in North Branch, MN" },
  { slug: "48975-dogwood-ave", address: "48975 Dogwood Ave", town: "Rush City", type: "Duplex",
    summary: "One 3-bedroom and one 2-bedroom unit on a rural lot.",
    units: [u("Unit 1", 3), u("Unit 2", 2)],
    photo: "6b007a228368d0ae483cf5e6", alt: "Two-story house with a stone chimney at 48975 Dogwood Ave near Rush City, MN" },
  { slug: "27290-pine-tree-dr", address: "27290 Pine Tree Dr", town: "Pine City", type: "Duplex",
    summary: "One 2-bedroom and one 3-bedroom unit.",
    units: [u("Unit 1", 2), u("Unit 2", 3)],
    photo: "6b007a22d40dd2061747a230", alt: "Single-level side-by-side home at 27290 Pine Tree Dr in Pine City, MN" },
  { slug: "810-5th-ave-nw", address: "810 5th Ave NW", town: "Pine City", type: "Single-family home",
    summary: "Single-family home with 3 bedrooms.",
    units: [u("Home", 3)],
    photo: "6b007a2862e09e38ada16bd1", alt: "Gray single-family home at 810 5th Ave NW in Pine City, MN" },
  { slug: "509-central-dr-w", address: "509 Central Dr W", town: "Braham", type: "Duplex",
    summary: "Units 509 and 511, both 2 bedrooms.",
    units: [u("509", 2), u("511", 2)],
    photo: "6b007a2262e09e38ada16afc", alt: "Split-entry duplex at 509 Central Dr W in Braham, MN" },
  { slug: "909-wendover-st-ne", address: "909 Wendover St NE", town: "Isanti", type: "Single-family home",
    summary: "Single-family home with 3 bedrooms.",
    units: [u("Home", 3)],
    photo: "6b007a222c68ebcf4633ffd5", alt: "Split-level home with two-car garage at 909 Wendover St NE in Isanti, MN" },
  { slug: "26396-fenwick-ave", address: "26396 Fenwick Ave", town: "Wyoming", type: "Fourplex",
    summary: "Four 2-bedroom units with garages.",
    units: [u("Unit 1", 2), u("Unit 2", 2), u("Unit 3", 2), u("Unit 4", 2, 2)],
    photo: "6b007a27d40dd2061747a32b", alt: "Fourplex with attached garages at 26396 Fenwick Ave in Wyoming, MN" },
];

export type StayOption = { name: string; guests: number; bedrooms: number; beds: number; baths: number; airbnbId: string; blurb: string };

export type Vacation = {
  slug: string;
  name: string;
  town: string;
  address: string;
  intro: string;
  story: string[];
  highlights: string[];
  guests: number;
  bedrooms: number;
  baths: number;
  beds?: number;
  land?: string;
  cover: string;
  coverAlt: string;
  gallery: { id: string; alt: string }[];
  // Photos from the stay's own Airbnb listing (used where Media Storage has none), shown uncropped.
  listingPhotos?: { src: string; alt: string }[];
  airbnbId?: string;
  options?: StayOption[];
  note?: string;
};

export const vacations: Vacation[] = [
  {
    slug: "pokegama-views", name: "Pokegama Views Lakefront Retreat", town: "Pine City",
    address: "11156 Lakeview Shore Dr, Pine City, MN 55063",
    intro: "One lakefront property on Pokegama Lake with two homes, Haven and Hideaway. Book either home on its own, or both together for a larger group.",
    story: [
      "Haven and Hideaway sit side by side on the shore. Couples and small families can take one home; reunions and friend groups can book both and still have two kitchens to work with.",
      "Both homes share a hot tub that looks out over the lake, plus a dock, kayaks and a fire pit by the water.",
    ],
    highlights: ["Lakefront on Pokegama Lake", "Shared hot tub with a lake view", "Dock and kayaks", "Shoreline fire pit", "Three ways to book"],
    guests: 14, bedrooms: 4, baths: 2, beds: 5,
    cover: "6b007be02c68ebcf46344450", coverAlt: "Pokegama Haven lake home at sunset in Pine City, MN",
    gallery: [
      { id: "6b007c53d40dd2061747fe39", alt: "Living room with wood stove at Pokegama Haven" },
      { id: "6b007c6a62e09e38ada1c4c2", alt: "Patio facing the lake at Pokegama Haven" },
      { id: "6b007c582c68ebcf4634569c", alt: "Hot tub overlooking Pokegama Lake" },
      { id: "6b007c6c306ac237512fb76f", alt: "Fire pit on the shoreline at Pokegama Hideaway" },
      { id: "6b007c7a2c68ebcf46345c0e", alt: "Open kitchen and dining area at Pokegama Hideaway" },
      { id: "6b007c51565ed309afa39fe7", alt: "Full kitchen at Pokegama Haven" },
      { id: "6b007bfb17b3903898af51b0", alt: "Bedroom at Pokegama Haven" },
      { id: "6b007c7262e09e38ada1c5ee", alt: "Bedroom at Pokegama Hideaway" },
    ],
    options: [
      { name: "Haven", guests: 8, bedrooms: 2, beds: 3, baths: 1, airbnbId: "1202817380407110825",
        blurb: "Lakefront home with a full kitchen, a wood stove and a patio facing the water." },
      { name: "Hideaway", guests: 6, bedrooms: 2, beds: 2, baths: 1, airbnbId: "1202444183322863867",
        blurb: "Lakefront home with an open kitchen and dining area." },
      { name: "Haven & Hideaway", guests: 14, bedrooms: 4, beds: 5, baths: 2, airbnbId: "1247752542369517281",
        blurb: "Both homes booked together, with two kitchens, for larger groups and family gatherings." },
    ],
  },
  {
    slug: "stark-woodland-retreat", name: "Stark Woodland Retreat", town: "Harris",
    address: "2035 Stark Rd, Harris, MN 55032",
    intro: "A 5-bedroom retreat on more than 50 acres near Harris, with a sauna, hot tub, sport court and a separate game room.",
    story: [
      "There is space here for a big group to spread out: five bedrooms, three bathrooms and a dining table sized for a crowd.",
      "The game room has a pool table and table tennis. Outside you will find a cedar sauna, a hot tub and an outdoor sport court, all surrounded by open and wooded land.",
    ],
    highlights: ["50+ acres of open and wooded land", "Cedar sauna and hot tub", "Outdoor sport court", "Game room with pool table", "Sleeps up to 14"],
    guests: 14, bedrooms: 5, baths: 3, beds: 7, land: "50+ acres",
    cover: "6ac7b49761217e682bb7a54f", coverAlt: "Hot tub and patio at sunset at Stark Woodland Retreat in Harris, MN",
    gallery: [
      { id: "6b007cbb17b3903898af6bc3", alt: "Exterior of Stark Woodland Retreat" },
      { id: "6b007cdb306ac237512fcb40", alt: "Game room with pool table at Stark Woodland Retreat" },
      { id: "6b007c9e565ed309afa3ac14", alt: "Bedroom at Stark Woodland Retreat" },
      { id: "6b007cbb268fda5bfe6335d6", alt: "Full bathroom at Stark Woodland Retreat" },
    ],
    airbnbId: "1022361329821568220",
  },
  {
    slug: "tall-pines-log-cabin", name: "Tall Pines Log Cabin Retreat", town: "North Branch",
    address: "6695 372nd St, North Branch, MN 55056",
    intro: "A 5-bedroom log home on 10 wooded acres, set up for groups of up to 14 guests.",
    story: [
      "A stone fireplace anchors the two-story living room, with five bedrooms and three bathrooms spread through the house.",
      "Outside there is a wraparound porch, a hot tub under the pines and a large event space on the property.",
    ],
    highlights: ["10 wooded acres", "Stone fireplace", "Hot tub under the pines", "Wraparound porch", "Event space"],
    guests: 14, bedrooms: 5, baths: 3, beds: 6, land: "10 acres",
    cover: "6ac63ea57d735ea2a17e7c15", coverAlt: "Tall Pines log cabin with balcony and stone chimney in North Branch, MN",
    gallery: [
      { id: "6b007bcf17b3903898af4ab6", alt: "Living room with stone fireplace at Tall Pines Log Cabin" },
      { id: "6b007bbb565ed309afa389f7", alt: "Hot tub surrounded by pines at Tall Pines Log Cabin" },
      { id: "6b007b9c8b5100b36a2d0b5c", alt: "Covered log balcony at Tall Pines Log Cabin" },
      { id: "6b007ba4306ac237512f9e2e", alt: "Event room at Tall Pines Log Cabin" },
    ],
    airbnbId: "1249916637657804211",
  },
  {
    slug: "nostalgia-room", name: "Nostalgia Room Downtown Loft", town: "North Branch",
    address: "6355 Main St, North Branch, MN 55056",
    intro: "A one-bedroom loft in a historic brick building on Main Street in downtown North Branch.",
    story: [
      "The loft sits upstairs in one of downtown North Branch's historic brick buildings, the one with the painted vintage sign on its side wall.",
      "Inside there is an open kitchen with an island, a living area with tall windows, a bedroom with a wall bed, a private deck and in-unit laundry.",
    ],
    highlights: ["Historic downtown building", "Private deck", "In-unit laundry", "Walk to Main Street", "Sleeps up to 4"],
    guests: 4, bedrooms: 1, baths: 1, beds: 1,
    cover: "6ac63e9b22bc27f58fb72a0c", coverAlt: "Historic brick building with a painted vintage sign on Main Street in North Branch, MN",
    gallery: [],
    listingPhotos: [
      { src: "https://a0.muscache.com/im/pictures/miso/Hosting-53028668/original/902e1358-c953-4f88-9bc4-d566754beb31.jpeg", alt: "Open living area and kitchen island in the Nostalgia Room loft" },
      { src: "https://a0.muscache.com/im/pictures/miso/Hosting-53028668/original/f29b478b-8a43-4873-83ca-6f0c17373df6.jpeg", alt: "Bedroom with a wall bed in the Nostalgia Room loft" },
      { src: "https://a0.muscache.com/im/pictures/miso/Hosting-53028668/original/46937f68-de19-4708-b252-8a417ca51afc.jpeg", alt: "Living room with tall windows and a smart TV in the Nostalgia Room loft" },
      { src: "https://a0.muscache.com/im/pictures/miso/Hosting-53028668/original/ed3c73b1-ff25-4b8e-a24c-8951c9f6bc0b.jpeg", alt: "Private deck beside the painted vintage sign on the historic brick building" },
      { src: "https://a0.muscache.com/im/pictures/miso/Hosting-53028668/original/1a2d1775-e840-4720-9a3f-63ab8a9de3d7.jpeg", alt: "Main Street view of the Nostalgia Room building in downtown North Branch" },
    ],
    airbnbId: "53028668",
  },
];

export const unitCount = rentals.reduce((n, r) => n + r.units.length, 0);
export const towns = Array.from(new Set(rentals.map((r) => r.town))).sort();
