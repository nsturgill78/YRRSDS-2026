import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, MapPin, CalendarDays, Users, FileText, Mic2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const site = {
  shortTitle: "YRRSDS 2026",
  fullTitle: "YRRSDS 2026: Young Researchers’ Roundtable on Spoken Dialogue Systems",
  subtitle:
    "A one-day workshop at Emory University in Atlanta, directly preceding SIGDIAL 2026, centered on emerging research in spoken dialogue systems.",
  yearLabel: "2026 Edition",
  location: "Atlanta, Georgia, USA",
  date: "Late July 2026",
  venue: "Emory University, Atlanta, Georgia, USA",
  sigdialText: "Co-located with SIGDIAL 2026",
  heroImage:
    "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=1600&q=80",
  accent: "#d83a34",
};

const navItems = [
  { id: "home", label: "Home" },
  { id: "program", label: "Program" },
  { id: "keynotes", label: "Keynotes" },
  { id: "participating", label: "Participating" },
  { id: "cfp", label: "Call for Papers" },
  { id: "committees", label: "Committees" },
];

const programSchedule = [
  { time: "8:00–8:45", session: "Registration / coffee" },
  { time: "8:45–9:00", session: "Welcome remarks" },
  { time: "9:00–9:45", session: "Keynote I" },
  { time: "10:00–11:30", session: "Paper Session I" },
  { time: "11:30–12:15", session: "Lunch" },
  { time: "12:15–1:00", session: "Keynote II" },
  { time: "1:15–2:15", session: "Panel / roundtable" },
  { time: "2:30–4:00", session: "Paper Session II" },
  { time: "4:00–4:15", session: "Closing remarks" },
  { time: "Evening", session: "Optional dinner / social event" },
];

const importantDates = [
  { label: "CFP and website announcement", date: "Mid-March 2026" },
  { label: "Submission deadline", date: "Late April 2026" },
  { label: "Review period", date: "Early–mid May 2026" },
  { label: "Notifications sent", date: "Mid-May 2026" },
  { label: "Presenter confirmations due", date: "Late May 2026" },
  { label: "Final program published", date: "Mid-June 2026" },
  { label: "Workshop held in Atlanta", date: "Late July 2026" },
];

const keynotePlaceholders = [
  {
    title: "Keynote I",
    speaker: "Speaker TBA",
    affiliation: "Affiliation TBA",
    description:
      "Use this block for the invited morning keynote and a short abstract once confirmed.",
  },
  {
    title: "Keynote II",
    speaker: "Speaker TBA",
    affiliation: "Affiliation TBA",
    description:
      "Use this block for the invited afternoon keynote and a short abstract once confirmed.",
  },
];

const cfpBullets = [
  "Submission format: extended abstracts only",
  "Recommended length: 750–1000 words",
  "Target review load: 2 reviews per submission when possible",
  "Decision types: talk / lightning or poster (if needed) / decline",
  "Workshop design: one day, with two keynotes, two paper sessions, and one panel or roundtable",
];

const committeeGroups = [
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
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center">
      {eyebrow ? (
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d83a34]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="mx-auto mt-4 max-w-3xl text-base text-zinc-600">{description}</p> : null}
    </div>
  );
}

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-16 md:px-10 md:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function NavLink({ item, active, onClick, mobile = false }) {
  return (
    <a
      href={`#${item.id}`}
      onClick={onClick}
      className={
        mobile
          ? `block rounded-xl px-4 py-3 text-base font-medium ${
              active ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/5 hover:text-white"
            }`
          : `text-sm font-medium transition ${
              active ? "text-white" : "text-zinc-300 hover:text-white"
            }`
      }
    >
      {item.label}
    </a>
  );
}

export default function YRRSDS2026Website() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sectionIds = useMemo(() => navItems.map((n) => n.id), []);

  React.useEffect(() => {
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0.01 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1e1f22]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#home" className="flex items-center gap-3 text-white">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-sm font-extrabold"
              style={{ backgroundColor: site.accent }}
            >
              YR
            </div>
            <div>
              <div className="text-sm font-semibold">{site.shortTitle}</div>
              <div className="text-xs text-zinc-400">{site.yearLabel}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink key={item.id} item={item} active={active === item.id} />
            ))}
            <Button className="rounded-2xl bg-[#d83a34] hover:bg-[#bf312c]">Register / Updates</Button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="rounded-xl border border-white/10 p-2 text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-white/10 bg-[#1e1f22] px-4 py-4 md:hidden">
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  item={item}
                  active={active === item.id}
                  mobile
                  onClick={() => setMobileOpen(false)}
                />
              ))}
              <Button className="mt-2 w-full rounded-2xl bg-[#d83a34] hover:bg-[#bf312c]">
                Register / Updates
              </Button>
            </div>
          </div>
        ) : null}
      </header>

      <Section id="home" className="px-0 pt-20 md:pt-20">
        <div className="relative overflow-hidden">
          <div
            className="relative flex min-h-[72vh] items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${site.heroImage})` }}
          >
            <div className="px-6 text-center text-white md:px-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mx-auto max-w-4xl"
              >
                <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
                  {site.yearLabel}
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{site.fullTitle}</h1>
                <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-100 md:text-xl">{site.subtitle}</p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                    <MapPin className="h-4 w-4" /> {site.location}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                    <CalendarDays className="h-4 w-4" /> {site.date}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                    <Users className="h-4 w-4" /> {site.sigdialText}
                  </span>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Button className="rounded-2xl bg-[#d83a34] px-6 py-6 text-base hover:bg-[#bf312c]">
                    View Call for Papers
                  </Button>
                  <Button variant="secondary" className="rounded-2xl px-6 py-6 text-base">
                    Explore Program
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="program" className="bg-zinc-50">
        <SectionTitle
          eyebrow="Program"
          title="One-day workshop structure"
          description="The framework mirrors last year’s workshop style while adapting it to a concentrated single-day Atlanta program with two keynotes, two paper sessions, and one panel or roundtable."
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Draft schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-2xl border border-zinc-200">
                <div className="grid grid-cols-[140px_1fr] bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-700">
                  <div>Time</div>
                  <div>Session</div>
                </div>
                {programSchedule.map((row, idx) => (
                  <div
                    key={`${row.time}-${row.session}`}
                    className={`grid grid-cols-[140px_1fr] px-4 py-3 text-sm md:text-base ${
                      idx % 2 === 0 ? "bg-white" : "bg-zinc-50"
                    }`}
                  >
                    <div className="font-medium text-zinc-600">{row.time}</div>
                    <div>{row.session}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="rounded-3xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Format highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-6 text-zinc-700 md:text-base">
                  <li>• 2 keynotes</li>
                  <li>• 2 paper sessions</li>
                  <li>• 1 panel or roundtable</li>
                  <li>• Optional evening dinner / social event</li>
                  <li>• Extended abstracts as the submission model</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Venue</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-zinc-700 md:text-base">
                <p>{site.venue}</p>
                <p>Hosted at Emory University in Atlanta, Georgia. Add final building, room details, map, accessibility notes, and on-site logistics here.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section id="keynotes">
        <SectionTitle
          eyebrow="Keynotes"
          title="Invited speakers"
          description="These cards are ready to be replaced with confirmed keynote details, talk titles, bios, and abstracts."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {keynotePlaceholders.map((k) => (
            <Card key={k.title} className="rounded-3xl border border-zinc-200 shadow-sm">
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d83a34]/10 text-[#d83a34]">
                  <Mic2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{k.speaker}</CardTitle>
                <div className="text-sm font-medium text-zinc-500">{k.title} · {k.affiliation}</div>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-zinc-700 md:text-base">
                {k.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="participating" className="bg-zinc-50">
        <SectionTitle
          eyebrow="Participating"
          title="How participation will work"
          description="This section keeps the same role as the previous website: making attendance, presentation expectations, and practical logistics easy to find."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-3xl border-0 shadow-sm lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-zinc-700 md:text-base">
              <p>Registration details can be linked here once SIGDIAL 2026 registration opens.</p>
              <p>Add organizer-side forms, presenter confirmations, and local attendance instructions in this block.</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-sm lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">Oral sessions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-zinc-700 md:text-base">
              <p>Authors can present accepted work during the paper sessions.</p>
              <p>Use this area for final talk length, Q&A duration, slide guidance, and any poster or lightning fallback format.</p>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-sm lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-xl">Local information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-zinc-700 md:text-base">
              <p>Include venue directions, travel notes, accessibility information, and dinner/social plans.</p>
              <a href="#" className="inline-flex items-center gap-2 font-medium text-[#d83a34] hover:underline">
                Atlanta logistics placeholder <ExternalLink className="h-4 w-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="cfp">
        <SectionTitle
          eyebrow="Call for Papers"
          title="Extended abstracts for a focused one-day program"
          description="This CFP section is scaffolded from the planning notes and is ready for official wording, submission links, and final policy details."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="rounded-3xl border border-zinc-200 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <FileText className="h-6 w-6 text-[#d83a34]" /> Submission model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm leading-6 text-zinc-700 md:text-base">
                {cfpBullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border border-zinc-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Important dates</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {importantDates.map((item) => (
                  <div key={item.label} className="flex items-start justify-between gap-4 rounded-2xl border border-zinc-200 px-4 py-4">
                    <div className="font-medium">{item.label}</div>
                    <div className="whitespace-nowrap rounded-full bg-[#d83a34]/10 px-3 py-1 text-sm font-semibold text-[#d83a34]">
                      {item.date}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="committees" className="bg-zinc-50">
        <SectionTitle
          eyebrow="Committees"
          title="Organization and review"
          description="This section is structured to match the typical workshop website layout and can be updated as names are finalized."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {committeeGroups.map((group) => (
            <Card key={group.title} className="rounded-3xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">{group.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-zinc-700 md:text-base">
                  {group.members.map((member) => (
                    <li key={member}>• {member}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <footer className="border-t border-zinc-200 bg-[#1e1f22] px-6 py-12 text-zinc-200 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="text-xl font-bold text-white">{site.shortTitle}</div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300 md:text-base">
              Web framework draft for the 2026 Atlanta edition. Replace placeholders with final keynote speakers,
              committee members, venue details, submission links, and SIGDIAL coordination information.
            </p>
          </div>
          <div className="grid gap-2 text-sm md:justify-self-end md:text-right">
            <a href="#home" className="hover:text-white">Back to top</a>
            <a href="#cfp" className="hover:text-white">Call for Papers</a>
            <a href="#program" className="hover:text-white">Program</a>
            <a href="#participating" className="hover:text-white">Participating</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
