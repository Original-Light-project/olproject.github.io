import Link from "next/link";
import type { NewsItem } from "@/lib/types";

const typeLabels: Record<NewsItem["type"], string> = {
  announcement: "公告",
  update: "更新",
  event: "活動",
  maintenance: "維護",
  devlog: "開發日誌",
};

type NewsCardProps = {
  item: NewsItem;
};

export function NewsCard({ item }: NewsCardProps) {
  return (
    <Link
      href={item.href}
      className="block rounded-3xl border border-[#d8a93d]/18 bg-white/72 p-6 shadow-[0_18px_48px_rgba(95,72,36,0.08)] backdrop-blur-sm transition hover:border-[#d8a93d]/35 hover:bg-white"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-[#d8a93d]/22 bg-[#fff0b8]/70 px-3 py-1 text-xs text-[#7a5a20]">
          {typeLabels[item.type]}
        </span>

        <time className="text-xs text-[#8a7352]">{item.date}</time>
      </div>

      <h3 className="mt-4 text-xl font-semibold text-[#2f2618]">{item.title}</h3>

      <p className="mt-3 text-sm leading-7 text-[#75664f]">{item.excerpt}</p>
    </Link>
  );
}