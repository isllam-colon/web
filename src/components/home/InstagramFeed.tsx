import { FadeIn } from "@/components/ui/FadeIn";
import type { Dictionary, Locale } from "@/types";
import { Instagram } from "lucide-react";
import Image from "next/image";

interface InstagramFeedProps { locale: Locale; dict: Dictionary; }

const feedPhotos = [
  { id: "a", src: "/photos/8.PNG" },
  { id: "b", src: "/photos/9.PNG" },
  { id: "c", src: "/photos/4.PNG" },
  { id: "d", src: "/photos/5.PNG" },
];

export function InstagramFeed({ locale, dict }: InstagramFeedProps) {
  const home = dict.home as Record<string, string>;

  return (
    <section className="py-14 sm:py-16 bg-charcoal">
      <div className="container-rube">
        <FadeIn className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-baby-pink/20">
              <Instagram className="h-5 w-5 text-baby-pink" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-off-white tracking-tight">@rube.activewear</h2>
              <p className="text-sm text-light-grey/70 mt-0.5">{home.instagram}</p>
            </div>
          </div>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="label-caps text-dusty-pink hover:text-baby-pink transition-colors border-b border-dusty-pink/40 pb-0.5">
            {dict.common.viewAll}
          </a>
        </FadeIn>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
          {feedPhotos.map((item) => (
            <a key={item.id} href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-xl sm:rounded-card group">
              <Image src={item.src} alt="" fill sizes="25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-baby-pink/0 group-hover:bg-baby-pink/15 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
