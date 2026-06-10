"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Dictionary, Locale } from "@/types";
import Image from "next/image";

interface LifestyleBannerProps {
  locale: Locale;
  dict: Dictionary;
}

export function LifestyleBanner({ locale, dict }: LifestyleBannerProps) {
  const home = dict.home as Record<string, string>;

  return (
    <section className="relative overflow-hidden">
      <div className="relative aspect-[4/5] sm:aspect-[21/9]">
        <Image
          src="/photos/6.PNG"
          alt="rube lifestyle — studio to street"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-charcoal/30" />

        <div className="absolute inset-0 flex items-center">
          <div className="container-rube">
            <FadeIn className="max-w-lg">
              <p className="label-caps text-mauve-light mb-3">The Collection</p>
              <h2 className="heading-display text-3xl text-off-white sm:text-4xl lg:text-5xl text-balance">
                {home.lifestyleTitle}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-off-white/85 sm:text-base max-w-xs">
                {home.lifestyleSubtitle}
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
