import { schedule } from "@/data/site-data";

export function ScheduleTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200">
      <div className="grid grid-cols-[140px_1fr] bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-700">
        <div>Time</div>
        <div>Session</div>
      </div>
      {schedule.map((row, index) => (
        <div
          key={`${row.time}-${row.session}`}
          className={`grid grid-cols-[140px_1fr] px-4 py-3 text-sm md:text-base ${index % 2 === 0 ? "bg-white" : "bg-zinc-50"}`}
        >
          <div className="font-medium text-zinc-600">{row.time}</div>
          <div>{row.session}</div>
        </div>
      ))}
    </div>
  );
}
