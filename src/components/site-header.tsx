"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems, site } from "@/data/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1e1f22]/95 backdrop-blur">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-sm font-extrabold"
            style={{ backgroundColor: site.accent }}
          >
            YR
          </div>
          <div>
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="text-xs text-zinc-400">{site.yearLabel}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active ? "text-white" : "text-zinc-300 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={site.registrationUrl}
            className="rounded-2xl bg-[#d83a34] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#bf312c]"
          >
            Register / Updates
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-xl border border-white/10 p-2 text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#1e1f22] md:hidden">
          <div className="container-page space-y-2 py-4">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 transition-colors",
                    active
                      ? "bg-white/10 text-white"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href={site.registrationUrl}
              onClick={() => setOpen(false)}
              className="block rounded-xl bg-[#d83a34] px-4 py-3 text-center font-medium text-white transition-colors hover:bg-[#bf312c]"
            >
              Register / Updates
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
