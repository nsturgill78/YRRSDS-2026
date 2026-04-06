import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";
import { InfoCard } from "@/components/info-card";
import { SectionTitle } from "@/components/section-title";
import { amenityResources, emoryAreaMap, localSearchLinks, site, travelResources } from "@/data/site-data";

export const metadata: Metadata = {
  title: "Participating",
  description: "Registration, presenter, travel, and local logistics information for YRRSDS 2026 on July 31, 2026.",
};

export default function ParticipatingPage() {
  return (
    <section className="section-padding bg-zinc-50">
      <div className="container-page">
        <SectionTitle
          as="h1"
          eyebrow="Participating"
          title="How participation will work"
          description="This page combines attendance details with a practical Emory travel guide, nearby amenities, and local planning tools for July 31, 2026."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard title="Registration">
            <p>
              The workshop takes place on {site.dateLabel}. Registration details can be linked here once SIGDIAL
              2026 registration opens.
            </p>
            <p>Add organizer-side forms, presenter confirmations, and local attendance instructions in this block.</p>
          </InfoCard>

          <InfoCard title="Oral sessions">
            <p>Authors can present accepted work during the paper sessions on July 31, 2026.</p>
            <p>
              Submissions are planned to open on {site.submissionOpenLabel} and close on {site.submissionCloseLabel}.
              Use this area for final talk length, Q&amp;A duration, slide guidance, and any poster or lightning
              fallback format once decisions are finalized.
            </p>
          </InfoCard>

          <InfoCard title="Local information">
            <p>
              Hosted at {site.venue}. Start with the official Emory campus map, visitor parking guide, and shuttle
              pages below, then use the area map and live search links to explore food, lodging, and essentials.
            </p>
            <Link href={site.logisticsUrl} className="inline-block font-medium text-[#d83a34] hover:underline">
              Jump to the Emory local guide
            </Link>
          </InfoCard>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d83a34]/10 text-[#d83a34]">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Travel planning for Emory</h2>
                <p className="text-sm text-zinc-600">
                  Start with official campus and airport resources, then move to the local map and neighborhood tools.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {travelResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-[#d83a34]/40 hover:bg-zinc-50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold">{resource.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{resource.description}</p>
                    </div>
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-zinc-400" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Nearby amenities</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              These links emphasize official directories and nearby visitor anchors so attendees can plan meals,
              lodging, and off-campus time without leaving the conference site.
            </p>

            <div className="mt-6 grid gap-4">
              {amenityResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-[#d83a34]/40 hover:bg-zinc-50"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold">{resource.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">{resource.description}</p>
                    </div>
                    <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-zinc-400" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div id="local-guide" className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
            <div className="border-b border-zinc-200 p-6">
              <h2 className="text-2xl font-semibold">Emory and Decatur area map</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                This map is centered on Emory University and shows the surrounding corridor toward Decatur, including
                popular visitor areas for food, coffee, lodging, and transit connections.
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                <a
                  href={emoryAreaMap.openStreetMapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#d83a34] hover:underline"
                >
                  Open full map
                </a>
                <a
                  href={emoryAreaMap.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#d83a34] hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            <iframe
              title="Map of Emory University and nearby Decatur"
              src={emoryAreaMap.embedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
            />
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Live neighborhood searches</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              These quick links open live map results so attendees can compare nearby options by budget, dietary
              preference, and distance from campus.
            </p>

            <div className="mt-6 grid gap-3">
              {localSearchLinks.map((search) => (
                <a
                  key={search.label}
                  href={search.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-zinc-200 px-4 py-4 text-sm font-medium transition-colors hover:border-[#d83a34]/40 hover:bg-zinc-50"
                >
                  <span>{search.label}</span>
                  <ExternalLink className="h-4 w-4 text-zinc-400" />
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm leading-6 text-zinc-600">
              The local area around Emory gives attendees several planning options: stay close to campus, head toward
              Decatur for a denser restaurant district, or use airport and shuttle resources to keep day-of travel
              simple.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
