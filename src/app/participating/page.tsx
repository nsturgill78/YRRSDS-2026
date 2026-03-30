import type { Metadata } from "next";
import Link from "next/link";
import { InfoCard } from "@/components/info-card";
import { SectionTitle } from "@/components/section-title";
import { site } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Participating",
  description: "Registration, presenter, and local logistics information for YRRSDS 2026.",
};

export default function ParticipatingPage() {
  return (
    <section className="section-padding bg-zinc-50">
      <div className="container-page">
        <SectionTitle
          as="h1"
          eyebrow="Participating"
          title="How participation will work"
          description="This page keeps the same role as the previous website: making attendance, presentation expectations, and practical logistics easy to find."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard title="Registration">
            <p>Registration details can be linked here once SIGDIAL 2026 registration opens.</p>
            <p>Add organizer-side forms, presenter confirmations, and local attendance instructions in this block.</p>
          </InfoCard>

          <InfoCard title="Oral sessions">
            <p>Authors can present accepted work during the paper sessions.</p>
            <p>
              Use this area for final talk length, Q&amp;A duration, slide guidance, and any poster or lightning
              fallback format.
            </p>
          </InfoCard>

          <InfoCard title="Local information">
            <p>
              Hosted at {site.venue}. Include venue directions, travel notes, accessibility information, and
              dinner/social plans here.
            </p>
            <Link href={site.logisticsUrl} className="inline-block font-medium text-[#d83a34] hover:underline">
              Atlanta logistics placeholder
            </Link>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
