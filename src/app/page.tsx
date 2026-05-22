import { FeatureGrid } from "@/components/home/FeatureGrid";
import { HeroSection } from "@/components/home/HeroSection";
import { LatestNews } from "@/components/home/LatestNews";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { systems } from "@/data/systems";
import { SystemCard } from "@/components/cards/SystemCard";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />

      <Section>
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-medium tracking-[0.25em] text-[#b9861f]">
              CORE SYSTEMS
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#2f2618] md:text-4xl">
              核心系統
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#75664f]">
              以模塊化方式整理伺服器系統，後續可以持續新增 RPG、活動、資源、任務與戰鬥內容。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {systems.map((system) => (
              <SystemCard key={system.id} system={system} />
            ))}
          </div>
        </Container>
      </Section>

      <LatestNews />
    </>
  );
}