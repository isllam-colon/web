import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary, Locale } from "@/types";
import { Droplets, Heart, Move, Sparkles } from "lucide-react";

interface WhyRubeProps { locale: Locale; dict: Dictionary; }

export function WhyRube({ locale, dict }: WhyRubeProps) {
  const home = dict.home as Record<string, string>;

  const cards = [
    { icon: Sparkles, title: home.premiumFabrics,       desc: home.premiumFabricsDesc,       bg: "bg-soft-pink/50"  },
    { icon: Heart,    title: home.flatteringFits,        desc: home.flatteringFitsDesc,        bg: "bg-baby-pink/40"  },
    { icon: Move,     title: home.designedForMovement,   desc: home.designedForMovementDesc,   bg: "bg-silver-grey/50"},
    { icon: Droplets, title: home.everydayComfort,       desc: home.everydayComfortDesc,       bg: "bg-soft-pink/50"  },
  ];

  return (
    <section className="section-padding bg-off-white">
      <div className="container-rube">
        <FadeIn>
          <SectionHeading title={home.whyRube} subtitle={home.whyRubeSubtitle} />
        </FadeIn>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08}>
              <div className={`card-hover rounded-card ${card.bg} p-7`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm text-charcoal">
                  <card.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-sm font-semibold text-charcoal">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-medium-grey">{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
