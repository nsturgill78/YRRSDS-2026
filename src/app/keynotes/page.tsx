import type { Metadata } from "next";
import { KeynoteCard } from "@/components/keynote-card";
import { SectionTitle } from "@/components/section-title";
import { keynotes } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Keynotes",
  description: "Invited speakers for YRRSDS 2026.",
};

export default function KeynotesPage() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          as="h1"
          eyebrow="Keynotes"
          title="Invited speakers"
          description="Invited keynote speakers and talk details will be announced soon."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {keynotes.map((keynote) => (
            <KeynoteCard key={keynote.title} {...keynote} />
          ))}
        </div>
      </div>
    </section>
  );
}
