import type { Metadata } from "next";
import { ScheduleTable } from "@/components/schedule-table";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Program",
  description: "Draft one-day program for YRRSDS 2026 at Emory University in Atlanta.",
};

export default function ProgramPage() {
  return (
    <section className="section-padding bg-zinc-50">
      <div className="container-page">
        <SectionTitle
          as="h1"
          eyebrow="Program"
          title="Draft workshop schedule"
          description="A one-day structure with two keynotes, two paper sessions, one panel or roundtable, and an optional evening social event."
        />
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <ScheduleTable />
        </div>
      </div>
    </section>
  );
}
