export const site = {
  name: "YRRSDS 2026",
  fullTitle: "YRRSDS 2026: Young Researchers' Roundtable on Spoken Dialogue Systems",
  description:
    "A one-day workshop on Friday, July 31, 2026 at Emory University in Atlanta, directly preceding SIGDIAL 2026 and centered on emerging research in spoken dialogue systems.",
  yearLabel: "2026 Edition",
  location: "Atlanta, Georgia, USA",
  venue: "Emory University, Atlanta, Georgia, USA",
  dateLabel: "Friday, July 31, 2026",
  submissionOpenLabel: "April 8, 2026",
  submissionCloseLabel: "May 1, 2026",
  sigdialLabel: "Directly preceding SIGDIAL 2026",
  accent: "#d83a34",
  registrationUrl: "#",
  submissionUrl: "#",
  logisticsUrl: "/participating#local-guide",
  heroImage: "/hero.jpg",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program" },
  { href: "/keynotes", label: "Keynotes" },
  { href: "/participating", label: "Participating" },
  { href: "/cfp", label: "Call for Papers" },
  { href: "/collaborators", label: "Collaborators" },
] as const;

export const schedule = [
  { time: "8:00-8:45", session: "Registration / coffee" },
  { time: "8:45-9:00", session: "Welcome remarks" },
  { time: "9:00-9:45", session: "Keynote I" },
  { time: "10:00-11:30", session: "Paper Session I" },
  { time: "11:30-12:15", session: "Lunch" },
  { time: "12:15-1:00", session: "Keynote II" },
  { time: "1:15-2:15", session: "Panel / roundtable" },
  { time: "2:30-4:00", session: "Paper Session II" },
  { time: "4:00-4:15", session: "Closing remarks" },
  { time: "Evening", session: "Optional dinner / social event" },
] as const;

export const importantDates = [
  { label: "Submissions open", date: "April 8, 2026" },
  { label: "Submissions close", date: "May 1, 2026" },
  { label: "Review period", date: "May 2026" },
  { label: "Notifications sent", date: "May 15, 2026" },
  { label: "Presenter confirmations due", date: "May 31, 2026" },
  { label: "Final program published", date: "June 15, 2026" },
  { label: "Workshop held in Atlanta", date: "July 31, 2026" },
] as const;

export const keynotes = [
  {
    title: "Keynote I",
    speaker: "To be announced",
    affiliation: "Speaker details forthcoming",
    abstract: "The invited morning keynote will be announced soon.",
  },
  {
    title: "Keynote II",
    speaker: "To be announced",
    affiliation: "Speaker details forthcoming",
    abstract: "The invited afternoon keynote will be announced soon.",
  },
] as const;

export const cfpBullets = [
  "Submission format: extended abstracts only",
  "Recommended length: 750-1000 words",
  "Target review load: 2 reviews per submission when possible",
  "Decision types: talk / lightning or poster (if needed) / decline",
  "Program design: one day, with two keynotes, two paper sessions, and one panel or roundtable",
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
