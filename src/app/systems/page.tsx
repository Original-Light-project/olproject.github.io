import { SystemCard } from "@/components/cards/SystemCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { systems } from "@/data/systems";

export default function SystemsPage() {
  return (
    <Section>
      <Container>
        <p className="text-sm font-medium tracking-[0.25em] text-yellow-100/70">
          SYSTEMS
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          系統介紹
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
          所有系統皆以模塊化方式建立，未來可以持續加入新的 RPG 系統、互動事件、武器技能、資源循環與活動機制。
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {systems.map((system) => (
            <SystemCard key={system.id} system={system} />
          ))}
        </div>
      </Container>
    </Section>
  );
}