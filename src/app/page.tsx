import Link from "next/link";
import { Hero } from "@/components/hero";
import { InfoCard } from "@/components/info-card";
import { ScheduleTable } from "@/components/schedule-table";
import { SectionTitle } from "@/components/section-title";
import { importantDates, site } from "@/data/site-data";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-padding bg-zinc-50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Program"
            title="One-day workshop structure"
            description="The framework mirrors last year's workshop style while adapting it to a concentrated single-day Atlanta program."
          />

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold">Draft schedule</h2>
              <ScheduleTable />
            </div>

            <div className="space-y-6">
              <InfoCard title="Format highlights">
                <ul className="list-inside list-disc space-y-3">
                  <li>2 keynotes</li>
                  <li>2 paper sessions</li>
                  <li>1 panel or roundtable</li>
                  <li>Optional evening dinner / social event</li>
                  <li>Extended abstracts as the submission model</li>
                </ul>
              </InfoCard>

              <InfoCard title="Venue">
                <p>{site.venue}</p>
                <p>
                  Hosted at Emory University in Atlanta, Georgia. Add final building, room details, map,
                  accessibility notes, and on-site logistics here.
                </p>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            eyebrow="Important dates"
            title="Planning timeline"
            description="The current website scaffold uses the working timeline from the planning draft and keeps the remaining details as placeholders."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {importantDates.map((item) => (
              <div key={item.label} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-wide text-[#d83a34]">{item.date}</div>
                <div className="mt-2 text-base font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/cfp"
              className="rounded-2xl bg-[#d83a34] px-5 py-3 font-medium text-white transition-colors hover:bg-[#bf312c]"
            >
              Call for Papers
            </Link>
            <Link
              href="/participating"
              className="rounded-2xl border border-zinc-300 px-5 py-3 font-medium text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              Participation Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
