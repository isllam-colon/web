import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Dictionary, Locale } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface FeaturedCollectionsProps { locale: Locale; dict: Dictionary; }

const collections = [
  { slug: "sets",            image: "/photos/2.PNG", labelKey: "sets"           as const },
  { slug: "tops",            image: "/photos/3.PNG", labelKey: "tops"           as const },
  { slug: "bottoms",         image: "/photos/4.PNG", labelKey: "bottoms"        as const },
  { slug: "modest-swimwear", image: "/photos/1.PNG", labelKey: "modestSwimwear" as const },
  { slug: "new-arrivals",    image: "/photos/6.PNG", labelKey: "newArrivals"    as const },
];

export function FeaturedCollections({ locale, dict }: FeaturedCollectionsProps) {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-rube">
        <FadeIn>
          <SectionHeading title={dict.collections.title} />
        </FadeIn>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-5">
          {collections.map((col, i) => (
            <FadeIn key={col.slug} delay={i * 0.07}>
              <Link
                href={`/${locale}/shop/${col.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-card"
              >
                <Image
                  src={col.image} alt={dict.collections[col.labelKey]} fill
                  sizes="(max-width: 640px) 50vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Soft pink-tinted gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/10 to-transparent" />
                {/* Hover: baby pink tint */}
                <div className="absolute inset-0 bg-baby-pink/0 transition-colors duration-300 group-hover:bg-baby-pink/10" />
                <div className="absolute inset-x-0 bottom-0 px-3 pb-4 text-center">
                  <span className="label-caps text-off-white">{dict.collections[col.labelKey]}</span>
                </div>
                {/* Pink underline on hover */}
                <div className="absolute inset-x-4 bottom-2 h-0.5 bg-dusty-pink scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
