import Link from "next/link";
import { NewsCard } from "@/components/cards/NewsCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { newsItems } from "@/data/news";

export function LatestNews() {
  const latestNews = newsItems.slice(0, 3);

  return (
    <Section>
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium tracking-[0.25em] text-[#b9861f]">
              LATEST NEWS
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#2f2618] md:text-4xl">
              最新公告
            </h2>
          </div>

          <Link
            href="/news"
            className="text-sm font-medium text-[#b9861f] transition hover:text-[#d8a93d]"
          >
            查看全部公告 →
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {latestNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}