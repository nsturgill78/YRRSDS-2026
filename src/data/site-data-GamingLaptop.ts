export const site = {
  name: "YRRSDS 2026",
  fullTitle: "YRRSDS 2026: Young Researchers' Roundtable on Spoken Dialogue Systems",
  description:
    "A half-day workshop on Sunday, August 2, 2026 at Emory University in Atlanta, co-located with SIGDIAL 2026 and centered on emerging research in spoken dialogue systems.",
  yearLabel: "2026 Edition",
  location: "Atlanta, Georgia, USA",
  venue: "Emory University, Atlanta, Georgia, USA",
  dateLabel: "Sunday, August 2, 2026",
  sigdialLabel: "Co-located with SIGDIAL 2026",
  accent: "#d83a34",
  logisticsUrl: "/participating#local-guide",
  heroImage: "/hero.jpg",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program" },
  { href: "/keynotes", label: "Keynotes" },
  { href: "/participating", label: "Participating" },
  { href: "/collaborators", label: "Collaborators" },
] as const;

export const schedule = [
  { time: "2:30-2:45", session: "Welcome" },
  { time: "2:45-3:30", session: "Keynote" },
  { time: "3:30-3:45", session: "Break" },
  { time: "3:45-4:45", session: "Research roundtable" },
  { time: "4:45-5:30", session: "Guided discussion: open challenges in spoken dialogue systems" },
  { time: "5:30-5:45", session: "Closing remarks" },
] as const;

export const importantDates = [
  { label: "Schedule published", date: "June 23, 2026" },
  { label: "Workshop held in Atlanta", date: "August 2, 2026" },
] as const;

export const keynotes = [
  {
    title: "Keynote",
    speaker: "T.B.A.",
    affiliation: "Bio and talk overview forthcoming",
    abstract: "The keynote details will be announced once the speaker bio and talk overview are finalized.",
  },
] as const;

export const collaboratorGroups = [
  {
    title: "Workshop co-chairs",
    members: [
      "Noah Sturgill (1st Year PhD student, Emory NLP Lab)",
      "Winston Zeng (1st Year PhD student, Emory NLP Lab)",
    ],
  },
  {
    title: "Collaborator",
    members: ["Nayoung Choi (2nd Year PhD Candidate, Emory NLP Lab)"],
  },
] as const;

export const travelResources = [
  {
    title: "Campus map",
    href: "https://map.emory.edu/MoreMaps.html",
    description: "Interactive maps for buildings, parking, and shuttle layers around the Atlanta campus.",
  },
  {
    title: "Visitor parking",
    href: "https://transportation.emory.edu/campus-parking-guide",
    description: "Official parking guidance covering visitor-accessible decks, rules, and deck-specific locations.",
  },
  {
    title: "Shuttles and transit",
    href: "https://transportation.emory.edu/shuttles",
    description: "Official Emory shuttle hub with live route lookup, stop filters, and system maps.",
  },
  {
    title: "Airport ground transportation",
    href: "https://www.atl.com/ground-transportation/",
    description: "Official ATL airport page for rideshare, taxi, rental car, and MARTA rail information.",
  },
] as const;

export const amenityResources = [
  {
    title: "Campus dining",
    href: "https://dining.emory.edu/",
    description: "Current on-campus dining locations, menus, and hours from Emory Dining.",
  },
  {
    title: "Emory Village and The Point",
    href: "https://candler.emory.edu/admissions/visit-candler/where-to-eat/",
    description: "Emory visitor dining guide covering Emory Village, The Point, and nearby Decatur options.",
  },
  {
    title: "Decatur guide",
    href: "https://visitdecaturga.com/",
    description: "Official Decatur visitor guide for restaurants, shops, events, and neighborhood planning.",
  },
  {
    title: "Nearby hotel",
    href: "https://www.emoryconferencecenter.com/",
    description: "Emory Conference Center Hotel, a nearby lodging option with Emory-focused visitor amenities.",
  },
] as const;

export const localSearchLinks = [
  {
    label: "Hotels near Emory",
    href: "https://www.google.com/maps/search/hotels+near+Emory+University+Atlanta",
  },
  {
    label: "Coffee near campus",
    href: "https://www.google.com/maps/search/coffee+near+Emory+University+Atlanta",
  },
  {
    label: "Restaurants near Emory",
    href: "https://www.google.com/maps/search/restaurants+near+Emory+University+Atlanta",
  },
  {
    label: "Groceries and essentials",
    href: "https://www.google.com/maps/search/grocery+or+pharmacy+near+Emory+University+Atlanta",
  },
  {
    label: "Decatur Square",
    href: "https://www.google.com/maps/search/Decatur+Square+Decatur+GA",
  },
  {
    label: "Emory Conference Center Hotel",
    href: "https://www.google.com/maps/search/Emory+Conference+Center+Hotel",
  },
] as const;

export const emoryAreaMap = {
  embedUrl:
    "https://www.openstreetmap.org/export/embed.html?bbox=-84.3510%2C33.7775%2C-84.2840%2C33.8060&layer=mapnik&marker=33.7925%2C-84.3237",
  openStreetMapUrl:
    "https://www.openstreetmap.org/?mlat=33.7925&mlon=-84.3237#map=15/33.7925/-84.3237",
  googleMapsUrl: "https://www.google.com/maps/search/Emory+University+Atlanta",
} as const;
