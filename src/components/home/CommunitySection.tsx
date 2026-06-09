"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Dictionary, Locale } from "@/types";
import Image from "next/image";

interface CommunitySectionProps { locale: Locale; dict: Dictionary; }

export function CommunitySection({ locale, dict }: CommunitySectionProps) {
  const home = dict.home as Record<string, string>;

  return (
    <section className="section-padding overflow-hidden bg-soft-pink/25">
      <div className="container-rube">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                <Image src="/photos/3.PNG" alt="rube community" fill
                  className="object-cover" sizes="(max-width:1024px) 100vw, 50vw" />
              </div>
              {/* Floating inset with baby-pink border */}
              <div className="absolute -bottom-6 -end-6 w-2/5 aspect-square overflow-hidden rounded-card shadow-xl border-4 border-off-white">
                <Image src="/photos/1.PNG" alt="" fill className="object-cover" sizes="20vw" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="label-caps text-dusty-pink">rube community</p>
            <h2 className="heading-display mt-3 text-3xl text-charcoal sm:text-4xl text-balance">
              {home.community}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-medium-grey sm:text-base max-w-sm">
              {home.communitySubtitle}
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-light-grey/60 pt-8">
              {[
                { value: "50K+", label: "Community"    },
                { value: "4.9★", label: "Avg Rating"   },
                { value: "100%", label: "Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-charcoal tracking-tight">{stat.value}</p>
                  <p className="label-caps text-medium-grey mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button href="/about" locale={locale} variant="secondary" className="mt-8">
              {home.joinCommunity}
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
