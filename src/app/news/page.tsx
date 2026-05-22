import { NewsCard } from "@/components/cards/NewsCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { newsItems } from "@/data/news";

export default function NewsPage() {
  return (
    <Section>
      <Container>
        <p className="text-sm font-medium tracking-[0.25em] text-yellow-100/70">
          NEWS
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          公告
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
          收錄伺服器公告、更新日誌、活動資訊、維護通知與開發紀錄。
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {newsItems.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </Section>
  );
}