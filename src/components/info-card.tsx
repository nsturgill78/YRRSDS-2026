import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type InfoCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function InfoCard({ title, children, className }: InfoCardProps) {
  return (
    <div className={cn("rounded-3xl bg-white p-6 shadow-sm", className)}>
      <h2 className="mb-4 text-xl font-semibold">{title}</h2>
      <div className="space-y-3 text-sm leading-6 text-zinc-700 md:text-base">{children}</div>
    </div>
  );
}
