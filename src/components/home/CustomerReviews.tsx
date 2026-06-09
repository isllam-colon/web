"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/lib/data/reviews";
import { getLocalized } from "@/lib/utils";
import type { Dictionary, Locale } from "@/types";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface CustomerReviewsProps { locale: Locale; dict: Dictionary; }

export function CustomerReviews({ locale, dict }: CustomerReviewsProps) {
  const home = dict.home as Record<string, string>;

  return (
    <section className="section-padding bg-soft-pink/30">
      <div className="container-rube">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <SectionHeading title={home.reviews} align="left" className="mb-0" />
            <div className="flex items-center gap-3 rounded-2xl bg-off-white px-5 py-3 shrink-0 shadow-sm">
              <div className="flex gap-0.5 text-dusty-pink">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">4.9 / 5</p>
                <p className="label-caps text-medium-grey">1,200+ Reviews</p>
              </div>
            </div>
          </div>
        </FadeIn>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-card bg-off-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-dusty-pink">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-medium-grey">
                &ldquo;{getLocalized(review.text, locale)}&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-baby-pink/60 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-charcoal">{review.author[0]}</span>
                </div>
                <div>
                  <cite className="not-italic text-xs font-semibold text-charcoal block">{review.author}</cite>
                  <span className="text-[11px] text-medium-grey">{review.location}</span>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
