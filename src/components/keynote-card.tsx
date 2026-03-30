import { Mic2 } from "lucide-react";

type KeynoteCardProps = {
  title: string;
  speaker: string;
  affiliation: string;
  abstract: string;
};

export function KeynoteCard({ title, speaker, affiliation, abstract }: KeynoteCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d83a34]/10 text-[#d83a34]">
        <Mic2 className="h-6 w-6" />
      </div>
      <h2 className="text-2xl font-semibold">{speaker}</h2>
      <div className="mt-1 text-sm font-medium text-zinc-500">
        {title} - {affiliation}
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-700 md:text-base">{abstract}</p>
    </div>
  );
}
