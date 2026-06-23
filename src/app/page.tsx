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

      <section id="schedule" className="section-padding scroll-mt-24 bg-zinc-50">
        <div className="container-page">
          <SectionTitle
            eyebrow="Schedule"
            title="Half-day workshop structure"
            description="The program is designed as a compact afternoon workshop with one keynote, a research roundtable, and a guided discussion."
          />

          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold">Schedule</h2>
              <ScheduleTable />
            </div>

            <div className="space-y-6">
              <InfoCard title="Venue">
                <p>{site.venue}</p>
                <p>
                  The workshop is scheduled for {site.dateLabel}. Travel planning, parking, nearby dining,
                  and local area guidance are available on the participation page.
                </p>
                <Link href="/participating#local-guide" className="inline-block font-medium text-[#d83a34] hover:underline">
                  View travel and local guide
                </Link>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <SectionTitle
            eyebrow="Important dates"
            title="Schedule timeline"
            description="The workshop schedule has been published for the 2026 program."
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
              href="/participating"
              className="rounded-2xl bg-[#d83a34] px-5 py-3 font-medium text-white transition-colors hover:bg-[#bf312c]"
            >
              Participation Info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
