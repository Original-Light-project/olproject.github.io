import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/data/site";

export default function GuidePage() {
  return (
    <Section>
      <Container>
        <p className="text-sm font-medium tracking-[0.25em] text-yellow-100/70">
          GUIDE
        </p>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          遊玩指南
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/60">
          這裡會整理如何加入伺服器、新手流程、常用指令、規則、FAQ 與推薦遊玩路線。
        </p>

        <div className="mt-10 rounded-3xl border border-yellow-200/20 bg-yellow-200/10 p-6">
          <div className="text-sm text-white/55">伺服器版本</div>
          <div className="mt-2 text-xl font-semibold text-white">
            {siteConfig.serverVersion}
          </div>

          <div className="mt-6 text-sm text-white/55">伺服器 IP</div>
          <code className="mt-2 block text-xl font-semibold text-yellow-100">
            {siteConfig.serverIp}
          </code>
        </div>
      </Container>
    </Section>
  );
}