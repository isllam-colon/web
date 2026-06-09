import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getNewArrivals } from "@/lib/data/products";
import type { Dictionary, Locale } from "@/types";

interface NewCollectionProps {
  locale: Locale;
  dict: Dictionary;
}

export function NewCollection({ locale, dict }: NewCollectionProps) {
  const items = getNewArrivals().slice(0, 4);
  const home = dict.home as Record<string, string>;

  return (
    <section className="section-padding bg-cream">
      <div className="container-rube">
        <FadeIn>
          <SectionHeading
            title={home.newCollection}
            subtitle={home.newCollectionSubtitle}
          />
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
        <FadeIn className="mt-10 flex justify-center">
          <Button href="/shop/new-arrivals" locale={locale} variant="primary">
            {dict.common.viewAll}
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
