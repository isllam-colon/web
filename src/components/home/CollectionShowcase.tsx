"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import type { Locale } from "@/types";
import Link from "next/link";

interface CollectionShowcaseProps {
  locale: Locale;
  heading: string;
  description?: string;
  collections: {
    id: string;
    name: string;
    href: string;
    gradient: string;
    accentColor: string;
    icon?: string;
  }[];
}

export function CollectionShowcase({
  locale,
  heading,
  description,
  collections,
}: CollectionShowcaseProps) {
  return (
    <section className="py-20">
      <div className="container-rube">
        <FadeIn className="text-center mb-16">
          <h2 className="heading-display text-4xl sm:text-5xl text-charcoal mb-4">{heading}</h2>
          {description && <p className="text-lg text-stone max-w-2xl mx-auto">{description}</p>}
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <FadeIn key={collection.id}>
              <Link href={collection.href}>
                <div
                  className={`group relative min-h-[240px] rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] bg-gradient-to-br ${collection.gradient}`}
                >
                  {/* Decorative pattern overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                      <defs>
                        <pattern id={`pattern-${collection.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#pattern-${collection.id})`} />
                    </svg>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-20 bg-white" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-2xl opacity-10 bg-off-white" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-center p-6 z-10">
                    {collection.icon && (
                      <div className="text-5xl mb-4">{collection.icon}</div>
                    )}
                    <h3 className="text-2xl font-bold text-off-white mb-2 tracking-tight group-hover:underline decoration-2 underline-offset-4">
                      {collection.name}
                    </h3>
                    <div className={`mt-auto pt-4 px-4 py-2 rounded-full ${collection.accentColor} text-charcoal font-semibold label-caps text-xs opacity-0 group-hover:opacity-100 transition-opacity`}>
                      Explore →
                    </div>
                  </div>

                  {/* Border highlight on hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
