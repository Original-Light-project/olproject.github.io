import Link from "next/link";
import { navigationItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-10">
      <Container className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="text-lg font-semibold text-yellow-100">
            {siteConfig.zhName} | {siteConfig.name}
          </div>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/55">
            {siteConfig.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-3 md:justify-end">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/50 transition hover:text-yellow-100"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}