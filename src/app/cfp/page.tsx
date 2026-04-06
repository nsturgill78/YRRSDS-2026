import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { cfpBullets, importantDates, site } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Call for Papers",
  description: "Extended abstract call for papers for YRRSDS 2026. Submissions open April 8, 2026 and close May 1, 2026.",
};

export default function CFPPage() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          as="h1"
          eyebrow="Call for Papers"
          title="Extended abstracts for a focused one-day program"
          description="Submissions open on April 8, 2026 and close on May 1, 2026 for the workshop on July 31, 2026."
        />

        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-200 bg-[#d83a34]/5 p-5 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#d83a34]">Submissions open</div>
            <div className="mt-2 text-lg font-semibold">{site.submissionOpenLabel}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-[#d83a34]/5 p-5 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#d83a34]">Submissions close</div>
            <div className="mt-2 text-lg font-semibold">{site.submissionCloseLabel}</div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-[#d83a34]/5 p-5 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wide text-[#d83a34]">Workshop date</div>
            <div className="mt-2 text-lg font-semibold">{site.dateLabel}</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Submission model</h2>
            <p className="mb-4 text-sm leading-6 text-zinc-700 md:text-base">
              The current plan is for the submission portal to open on {site.submissionOpenLabel} and close on{" "}
              {site.submissionCloseLabel}. Replace the placeholder submission link once the external system is live.
            </p>
            <ul className="list-inside list-disc space-y-3 text-sm leading-6 text-zinc-700 md:text-base">
              {cfpBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Important dates</h2>
            <div className="space-y-4">
              {importantDates.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-4 rounded-2xl border border-zinc-200 px-4 py-4"
                >
                  <div className="font-medium">{item.label}</div>
                  <div className="whitespace-nowrap rounded-full bg-[#d83a34]/10 px-3 py-1 text-sm font-semibold text-[#d83a34]">
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
