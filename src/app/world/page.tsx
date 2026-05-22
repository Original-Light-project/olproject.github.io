import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function WorldPage() {
  return (
    <Section>
      <Container>
        <p className="text-sm font-medium tracking-[0.25em] text-yellow-100/70">
          WORLD
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          世界觀
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
          這裡將用來介紹由光構成的世界、皓黎大陸、銘暉者、光之精靈，以及玩家在劇情中逐步理解的真相。
        </p>
      </Container>
    </Section>
  );
}