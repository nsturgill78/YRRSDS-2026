import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { collaboratorGroups } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Collaborators",
  description: "Workshop co-chairs and collaborators for YRRSDS 2026 at Emory University.",
};

export default function CollaboratorsPage() {
  return (
    <section className="section-padding bg-zinc-50">
      <div className="container-page">
        <SectionTitle
          as="h1"
          eyebrow="Collaborators"
          title="Workshop co-chairs and collaborators"
          description="YRRSDS 2026 is organized by workshop co-chairs and collaborators in the Emory NLP Lab."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {collaboratorGroups.map((group) => (
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
