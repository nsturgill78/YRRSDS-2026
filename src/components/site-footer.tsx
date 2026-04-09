import Link from "next/link";
import { site } from "@/data/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-[#1e1f22] px-6 py-12 text-zinc-200 md:px-10">
      <div className="container-page grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="text-xl font-bold text-white">{site.name}</div>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300 md:text-base">
            Official website for the 2026 Young Researchers' Roundtable on Spoken Dialogue Systems at Emory
            University in Atlanta, directly preceding SIGDIAL 2026.
          </p>
        </div>
        <div className="grid gap-2 text-sm md:justify-self-end md:text-right">
          <Link href="/">Home</Link>
          <Link href="/cfp">Call for Papers</Link>
          <Link href="/program">Program</Link>
          <Link href="/participating">Participating</Link>
        </div>
      </div>
    </footer>
  );
}
