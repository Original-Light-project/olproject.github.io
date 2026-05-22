import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function EventsPage() {
  return (
    <Section>
      <Container>
        <p className="text-sm font-medium tracking-[0.25em] text-yellow-100/70">
          EVENTS
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          活動
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
          這裡將用來展示進行中活動、世界事件、獎勵內容、歷史活動與未來可能串接的 WorldInteraction 事件進度。
        </p>
      </Container>
    </Section>
  );
}