import Link from "next/link";
import type { SystemItem } from "@/lib/types";

type SystemCardProps = {
  system: SystemItem;
};

export function SystemCard({ system }: SystemCardProps) {
  return (
    <Link
      href={system.href}
      className="group block rounded-3xl border border-[#d8a93d]/18 bg-white/72 p-6 shadow-[0_18px_48px_rgba(95,72,36,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#d8a93d]/35 hover:bg-white"
    >
      <div className="text-xs font-medium tracking-[0.2em] text-[#b9861f]">
        {system.category}
      </div>

      <h3 className="mt-3 text-2xl font-semibold text-[#2f2618]">
        {system.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[#75664f]">
        {system.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {system.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#d8a93d]/18 bg-[#fff8e7] px-3 py-1 text-xs text-[#7a5a20]"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}