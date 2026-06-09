import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBestSellers } from "@/lib/data/products";
import type { Dictionary, Locale } from "@/types";

interface BestSellersProps {
  locale: Locale;
  dict: Dictionary;
}

export function BestSellers({ locale, dict }: BestSellersProps) {
  const items = getBestSellers().slice(0, 4);
  const home = dict.home as Record<string, string>;

  return (
    <section className="section-padding bg-off-white">
      <div className="container-rube">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-10 sm:mb-12">
            <SectionHeading
              title={home.bestSellers}
              align="left"
              className="mb-0"
            />
            <Button href="/shop" locale={locale} variant="ghost" size="sm">
              {dict.common.viewAll} →
            </Button>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale}
              dict={dict}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
