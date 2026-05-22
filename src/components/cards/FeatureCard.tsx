import type { Feature } from "@/lib/types";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="group rounded-3xl border border-[#d8a93d]/18 bg-white/72 p-6 shadow-[0_18px_48px_rgba(95,72,36,0.08)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#d8a93d]/35 hover:bg-white">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d8a93d]/25 bg-[#fff0b8]/65 text-[#b9861f]">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-xl font-semibold text-[#2f2618]">{feature.title}</h3>

      <p className="mt-3 text-sm leading-7 text-[#75664f]">
        {feature.description}
      </p>
    </article>
  );
}