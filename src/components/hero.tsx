import Link from "next/link";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { site } from "@/data/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative flex min-h-[72vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.55)), url(${site.heroImage})`,
        }}
      >
        <div className="px-6 text-center text-white md:px-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              {site.yearLabel}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">{site.fullTitle}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-zinc-100 md:text-xl">{site.description}</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-100">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <MapPin className="h-4 w-4" /> {site.venue}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <CalendarDays className="h-4 w-4" /> {site.dateLabel}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                <Users className="h-4 w-4" /> {site.sigdialLabel}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/cfp"
                className="rounded-2xl bg-[#d83a34] px-6 py-4 text-base font-medium text-white transition-colors hover:bg-[#bf312c]"
              >
                View Call for Papers
              </Link>
              <Link
                href="/program"
                className="rounded-2xl bg-white px-6 py-4 text-base font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
              >
                Explore Program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
