import { FeatureCard } from "@/components/cards/FeatureCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { features } from "@/data/features";

export function FeatureGrid() {
  return (
    <Section>
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-medium tracking-[0.25em] text-[#b9861f]">
            SERVER FEATURES
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#2f2618] md:text-4xl">
            不只是生存，而是共同推進世界
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#75664f]">
            Original Light 的設計重點在於讓玩家的行動被世界記住，並透過系統、劇情與事件形成長期遊玩目標。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </Section>
  );
}