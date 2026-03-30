export const site = {
  name: "YRRSDS 2026",
  fullTitle: "YRRSDS 2026: Young Researchers' Roundtable on Spoken Dialogue Systems",
  description:
    "A one-day workshop at Emory University in Atlanta, directly preceding SIGDIAL 2026, centered on emerging research in spoken dialogue systems.",
  yearLabel: "2026 Edition",
  location: "Atlanta, Georgia, USA",
  venue: "Emory University, Atlanta, Georgia, USA",
  dateLabel: "Late July 2026",
  sigdialLabel: "Directly preceding SIGDIAL 2026",
  accent: "#d83a34",
  registrationUrl: "#",
  submissionUrl: "#",
  logisticsUrl: "#",
  heroImage: "/hero.jpg",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/program", label: "Program" },
  { href: "/keynotes", label: "Keynotes" },
  { href: "/participating", label: "Participating" },
  { href: "/cfp", label: "Call for Papers" },
  { href: "/committees", label: "Committees" },
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
  { label: "CFP and website announcement", date: "Mid-March 2026" },
  { label: "Submission deadline", date: "Late April 2026" },
  { label: "Review period", date: "Early-mid May 2026" },
  { label: "Notifications sent", date: "Mid-May 2026" },
  { label: "Presenter confirmations due", date: "Late May 2026" },
  { label: "Final program published", date: "Mid-June 2026" },
  { label: "Workshop held in Atlanta", date: "Late July 2026" },
] as const;

export const keynotes = [
  {
    title: "Keynote I",
    speaker: "Speaker TBA",
    affiliation: "Affiliation TBA",
    abstract:
      "Placeholder for the invited morning keynote. Replace with confirmed title, speaker bio, and abstract.",
  },
  {
    title: "Keynote II",
    speaker: "Speaker TBA",
    affiliation: "Affiliation TBA",
    abstract:
      "Placeholder for the invited afternoon keynote. Replace with confirmed title, speaker bio, and abstract.",
  },
] as const;

export const cfpBullets = [
  "Submission format: extended abstracts only",
  "Recommended length: 750-1000 words",
  "Target review load: 2 reviews per submission when possible",
  "Decision types: talk / lightning or poster (if needed) / decline",
  "Program design: one day, with two keynotes, two paper sessions, and one panel or roundtable",
] as const;

export const committeeGroups = [
  {
    title: "Organizing Committee",
    members: ["Name TBA", "Name TBA", "Name TBA"],
  },
  {
    title: "Program Committee",
    members: ["Name TBA", "Name TBA", "Name TBA", "Name TBA"],
  },
  {
    title: "Local / Logistics Support",
    members: ["Name TBA", "Name TBA"],
  },
] as const;
