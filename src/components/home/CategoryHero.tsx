"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import type { Locale } from "@/types";

interface CategoryHeroProps {
  title: string;
  subtitle?: string;
  category: string;
  locale: Locale;
}

const categoryGradients: Record<string, { from: string; to: string; accent: string }> = {
  shop: { from: "from-charcoal", to: "to-charcoal-mid", accent: "bg-dusty-pink" },
  "new-arrivals": { from: "from-charcoal", to: "to-charcoal-mid", accent: "bg-dusty-pink" },
  sets: { from: "from-charcoal", to: "to-charcoal-mid", accent: "bg-dusty-pink" },
  tops: { from: "from-charcoal", to: "to-charcoal-mid", accent: "bg-dusty-pink" },
  bottoms: { from: "from-charcoal", to: "to-charcoal-mid", accent: "bg-dusty-pink" },
  "modest-swimwear": { from: "from-charcoal", to: "to-charcoal-mid", accent: "bg-dusty-pink" },
};

export function CategoryHero({ title, subtitle, category, locale }: CategoryHeroProps) {
  const gradientConfig = categoryGradients[category] || categoryGradients.shop;
  const isArabic = locale === "ar";

  return (
    <div className={`relative min-h-[28rem] bg-gradient-to-br ${gradientConfig.from} ${gradientConfig.to} overflow-hidden pt-16`}>
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#dots)" />
        </svg>
      </div>

      {/* Gradient accent shape */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 bg-off-white" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-2xl opacity-15 bg-baby-pink" />

      {/* Content */}
      <div className="container-rube relative z-10 flex h-full items-center justify-center min-h-[28rem]">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <div className={`inline-block mb-6 px-4 py-2 rounded-full ${gradientConfig.accent} ${category === "shop" ? "text-charcoal" : "text-charcoal"}`}>
            <p className="label-caps text-xs font-semibold tracking-wider">
              {category === "shop" ? "Our Collection" : "Shop Category"}
            </p>
          </div>

          <h1 className={`heading-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-off-white mb-4`}>
            {title}
          </h1>

          {subtitle && (
            <p className={`text-lg sm:text-xl leading-relaxed max-w-xl mx-auto text-off-white/80`}>
              {subtitle}
            </p>
          )}

          {/* Decorative elements */}
          <div className={`mt-8 flex items-center justify-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
            <div className={`h-1 w-12 rounded-full ${gradientConfig.accent}`} />
            <span className={`text-sm font-medium tracking-widest label-caps text-off-white/60`}>
              rube
            </span>
            <div className={`h-1 w-12 rounded-full ${gradientConfig.accent}`} />
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
