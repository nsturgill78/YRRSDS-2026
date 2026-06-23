import type { Metadata } from "next";
import { ScheduleTable } from "@/components/schedule-table";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Program",
  description: "Half-day afternoon program for YRRSDS 2026 at Emory University in Atlanta.",
};

export default function ProgramPage() {
  return (
    <section className="section-padding bg-zinc-50">
      <div className="container-page">
        <SectionTitle
          as="h1"
          eyebrow="Program"
          title="Workshop schedule"
          description="A half-day afternoon structure with one keynote, a research roundtable, a guided discussion, and closing remarks."
        />
        <div className="rounded-3xl bg-white p-6 shadow-sm">
          <ScheduleTable />
        </div>
      </div>
    </section>
  );
}
