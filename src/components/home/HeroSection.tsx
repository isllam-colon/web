"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Dictionary, Locale } from "@/types";
import Image from "next/image";

interface HeroSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function HeroSection({ locale, dict }: HeroSectionProps) {
  const home = dict.home as Record<string, string>;

  return (
    <section className="relative">
      <div className="relative aspect-[16/9] sm:aspect-[21/9]">
        <Image
          src="/photos/1.PNG"
          alt="RUBE hero"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/35" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="container-rube w-full">
          <FadeIn>
            <div className="max-w-xl">
              <p className="label-caps text-mauve-light mb-3">{home.heroKicker ?? ""}</p>
              <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-off-white text-balance">
                {home.heroTitle}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-off-white/85 sm:text-base">
                {home.heroSubtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={`/${locale}/shop/sets`}
                  locale={locale}
                  variant="secondary"
                >
                  {dict.common.shopNow}
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

