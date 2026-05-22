import Link from "next/link";
import { ArrowRight, Server, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${siteConfig.assetBasePath}/images/hero-bg.jpg')`,
        }}
      />

      {/* 下面其他內容照舊 */}

      {/* 自動壓暗背景，讓文字突出 */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fff8e7]/92 via-[#fff8e7]/72 to-[#2f2618]/28" />

      {/* 上方柔光 */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-[#fff8e7]/95" />

      {/* 金色光暈 */}
      <div className="absolute left-[-8rem] top-24 h-96 w-96 rounded-full bg-[#f3d884]/45 blur-3xl" />
      <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-white/60 blur-3xl" />

      {/* 淡淡紙感底紋 */}
      <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#b9861f_0.7px,transparent_0.7px)] [background-size:18px_18px]" />

      <Container className="relative flex min-h-[720px] items-center py-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8a93d]/25 bg-white/65 px-4 py-2 text-sm text-[#7a5a20] shadow-sm backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            以光為名，展開一場溫柔而未知的冒險
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-[#2f2618] md:text-7xl">
            原初之光
            <span className="mt-2 block text-[#b9861f]">
              Original Light
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f4824] md:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/guide"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d8a93d] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(216,169,61,0.28)] transition hover:bg-[#b9861f]"
            >
              開始遊玩
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/systems"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d8a93d]/30 bg-white/62 px-6 py-3 text-sm font-semibold text-[#5f4824] shadow-sm backdrop-blur-md transition hover:bg-white/85"
            >
              查看系統介紹
            </Link>
          </div>

          <div className="mt-10 flex max-w-xl flex-wrap items-center gap-3 rounded-2xl border border-[#d8a93d]/22 bg-white/66 px-5 py-4 text-sm text-[#75664f] shadow-sm backdrop-blur-md">
            <Server className="h-4 w-4 text-[#b9861f]" />
            <span>{siteConfig.serverVersion}</span>
            <span className="text-[#d8a93d]/50">|</span>
            <code className="text-[#7a5a20]">{siteConfig.serverIp}</code>
          </div>
        </div>
      </Container>
    </section>
  );
}