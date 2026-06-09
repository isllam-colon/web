import { FadeIn } from "@/components/ui/FadeIn";
import { NewsletterForm } from "@/components/home/NewsletterForm";
import type { Dictionary, Locale } from "@/types";

interface NewsletterSectionProps { locale: Locale; dict: Dictionary; }

export function NewsletterSection({ locale, dict }: NewsletterSectionProps) {
  const home = dict.home as Record<string, string>;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-baby-pink/30">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -start-20 h-72 w-72 rounded-full bg-dusty-pink/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -end-20 h-72 w-72 rounded-full bg-baby-pink/30 blur-3xl" />

      <div className="container-rube relative">
        <FadeIn>
          <div className="mx-auto max-w-lg text-center">
            <p className="label-caps text-dusty-pink mb-3">Stay in the loop</p>
            <h2 className="heading-display text-3xl text-charcoal sm:text-4xl text-balance">
              {home.newsletter}
            </h2>
            <p className="mt-3 text-sm text-medium-grey sm:text-base">{home.newsletterSubtitle}</p>
            <div className="mt-8">
              <NewsletterForm locale={locale} dict={dict} />
            </div>
            <p className="mt-4 text-xs text-medium-grey/70">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
