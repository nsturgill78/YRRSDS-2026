import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { committeeGroups } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Committees",
  description: "Organization and review committees for YRRSDS 2026.",
};

export default function CommitteesPage() {
  return (
    <section className="section-padding bg-zinc-50">
      <div className="container-page">
        <SectionTitle
          as="h1"
          eyebrow="Committees"
          title="Organization and review"
          description="This section is structured to match the typical workshop website layout and can be updated as names are finalized."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {committeeGroups.map((group) => (
            <div key={group.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold">{group.title}</h2>
              <ul className="list-inside list-disc space-y-3 text-sm text-zinc-700 md:text-base">
                {group.members.map((member) => (
                  <li key={member}>{member}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
