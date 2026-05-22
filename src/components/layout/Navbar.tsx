import Link from "next/link";
import { Sparkles } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8a93d]/20 bg-[#fffdf5]/82 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#d8a93d]/25 bg-[#fff0b8]/70 shadow-[0_0_24px_rgba(216,169,61,0.22)]">
            <Sparkles className="h-5 w-5 text-[#b9861f]" />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-[0.2em] text-[#5f4824]">
              {siteConfig.name}
            </div>
            <div className="text-xs text-[#8a7352]">{siteConfig.zhName}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[#75664f] transition hover:text-[#b9861f]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/guide"
          className="rounded-full border border-[#d8a93d]/25 bg-[#fff0b8]/80 px-4 py-2 text-sm font-medium text-[#5f4824] shadow-sm transition hover:bg-[#f3d884]"
        >
          加入伺服器
        </Link>
      </Container>
    </header>
  );
}