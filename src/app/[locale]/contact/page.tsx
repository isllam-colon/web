"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Dictionary, Locale } from "@/types";
import { useParams } from "next/navigation";
import { useState } from "react";
import enDict from "@/messages/en.json";
import arDict from "@/messages/ar.json";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const params = useParams();
  const locale = (params.locale as Locale) ?? "en";
  const dict = (locale === "ar" ? arDict : enDict) as Dictionary;
  const [sent, setSent] = useState(false);

  return (
    <div className="pt-16 pb-20">
      {/* Header */}
      <div className="bg-cream-deep py-16 sm:py-20">
        <div className="container-rube text-center">
          <FadeIn>
            <p className="label-caps text-mauve mb-3">Get in Touch</p>
            <h1 className="heading-display text-4xl text-charcoal sm:text-5xl">{dict.contact.title}</h1>
            <p className="mt-3 text-stone sm:text-base max-w-sm mx-auto">{dict.contact.subtitle}</p>
          </FadeIn>
        </div>
      </div>

      <div className="container-rube py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
          {/* Form */}
          <FadeIn>
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center rounded-[var(--radius-card)] bg-cream">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mauve/20 mb-5">
                  <MessageCircle className="h-7 w-7 text-mauve" />
                </div>
                <h2 className="text-xl font-bold text-charcoal">{dict.contact.success}</h2>
                <p className="mt-2 text-sm text-stone">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form
                className="space-y-4"
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    placeholder={dict.contact.name}
                    className="w-full rounded-2xl border border-sand bg-cream px-5 py-3.5 text-sm text-charcoal outline-none transition placeholder:text-pebble focus:border-mauve"
                  />
                  <input
                    type="email"
                    required
                    placeholder={dict.contact.email}
                    className="w-full rounded-2xl border border-sand bg-cream px-5 py-3.5 text-sm text-charcoal outline-none transition placeholder:text-pebble focus:border-mauve"
                  />
                </div>
                <input
                  placeholder="Subject"
                  className="w-full rounded-2xl border border-sand bg-cream px-5 py-3.5 text-sm text-charcoal outline-none transition placeholder:text-pebble focus:border-mauve"
                />
                <textarea
                  required
                  rows={6}
                  placeholder={dict.contact.message}
                  className="w-full rounded-2xl border border-sand bg-cream px-5 py-3.5 text-sm text-charcoal outline-none transition placeholder:text-pebble focus:border-mauve resize-none"
                />
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  {dict.contact.send}
                </Button>
              </form>
            )}
          </FadeIn>

          {/* Info cards */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              {[
                { icon: Mail, title: "Email Us", detail: "hello@rubeactivewear.com", sub: "Response within 24 hours" },
                { icon: MapPin, title: "Based In", detail: "Egypt & Saudi Arabia", sub: "Shipping across MENA & worldwide" },
                { icon: MessageCircle, title: "Social", detail: "@rube.activewear", sub: "DM us on Instagram" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 rounded-[var(--radius-card)] bg-cream p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-off-white">
                    <item.icon className="h-5 w-5 text-charcoal" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{item.title}</p>
                    <p className="text-sm text-stone">{item.detail}</p>
                    <p className="text-xs text-pebble mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
