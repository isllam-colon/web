"use client";

import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { products } from "@/lib/data/products";
import { useWishlistStore } from "@/lib/store/wishlist-store";
import type { Dictionary, Locale } from "@/types";
import { useParams } from "next/navigation";
import enDict from "@/messages/en.json";
import arDict from "@/messages/ar.json";

export default function WishlistPage() {
  const params = useParams();
  const locale = (params.locale as Locale) ?? "en";
  const dict = (locale === "ar" ? arDict : enDict) as Dictionary;
  const productIds = useWishlistStore((s) => s.productIds);
  const wishlistProducts = products.filter((p) =>
    productIds.includes(p.id)
  );

  return (
    <div className="container-rube section-padding pt-28">
      <h1 className="heading-display text-3xl font-medium">
        {dict.nav.wishlist}
      </h1>
      {wishlistProducts.length === 0 ? (
        <div className="mt-12 text-center">
          <p className="text-medium-grey">
            {locale === "ar"
              ? "قائمة المفضلة فارغة"
              : "Your wishlist is empty"}
          </p>
          <Button href="/shop" locale={locale} className="mt-6">
            {dict.hero.shopNow}
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {wishlistProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              locale={locale}
              dict={dict}
            />
          ))}
        </div>
      )}
    </div>
  );
}
