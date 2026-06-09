import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary, Locale } from "@/types";
import Image from "next/image";

interface UGCSectionProps { locale: Locale; dict: Dictionary; }

const ugcPhotos = [
  { id: "1", src: "/photos/1.PNG", handle: "@yasmin.active"    },
  { id: "2", src: "/photos/2.PNG", handle: "@rube.activewear"  },
  { id: "3", src: "/photos/3.PNG", handle: "@sara.wellness"    },
  { id: "4", src: "/photos/4.PNG", handle: "@maya.moves"       },
  { id: "5", src: "/photos/8.PNG", handle: "@leila.fit"        },
  { id: "6", src: "/photos/9.PNG", handle: "@nour.studio"      },
];

export function UGCSection({ locale, dict }: UGCSectionProps) {
  const home = dict.home as Record<string, string>;

  return (
    <section className="section-padding bg-off-white">
      <div className="container-rube">
        <FadeIn>
          <SectionHeading title={home.ugc} subtitle={home.ugcSubtitle} />
        </FadeIn>
        <div className="grid grid-cols-3 gap-2 sm:gap-2.5 lg:grid-cols-6">
          {ugcPhotos.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.05}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-xl sm:rounded-card">
                <Image src={item.src} alt={`Community by ${item.handle}`} fill
                  sizes="(max-width:640px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-charcoal/60 to-transparent p-2.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-[10px] font-medium text-off-white/90">{item.handle}</span>
                </div>
                {/* Pink tint on hover */}
                <div className="absolute inset-0 bg-baby-pink/0 group-hover:bg-baby-pink/10 transition-colors duration-300" />
              </a>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-8 text-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 label-caps text-medium-grey hover:text-charcoal transition-colors border-b border-dusty-pink/50 pb-0.5">
            Follow @rube.activewear on Instagram
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
