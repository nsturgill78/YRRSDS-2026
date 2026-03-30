import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { cfpBullets, importantDates } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Call for Papers",
  description: "Extended abstract call for papers for YRRSDS 2026.",
};

export default function CFPPage() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          as="h1"
          eyebrow="Call for Papers"
          title="Extended abstracts for a focused one-day program"
          description="This CFP page is scaffolded from the planning notes and is ready for official wording, submission links, and final policy details."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-2xl font-semibold">Submission model</h2>
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
