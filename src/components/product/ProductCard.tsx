"use client";

import { cn, formatPrice, getLocalized } from "@/lib/utils";
import { useCartStore } from "@/lib/store/cart-store";
import { useWishlistStore } from "@/lib/store/wishlist-store";
import type { Dictionary, Locale, Product } from "@/types";
import { Heart, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductCardProps {
  product: Product; locale: Locale; dict: Dictionary; showQuickAdd?: boolean;
}

export function ProductCard({ product, locale, dict, showQuickAdd = true }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const { toggle, has } = useWishlistStore();
  const isWishlisted = has(product.id);
  const name = getLocalized(product.name, locale);
  const defaultVariant = product.variants[0];
  const priceLocale = locale === "ar" ? "ar-SA" : "en-US";

  return (
    <motion.article
      className="group relative"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Link href={`/${locale}/product/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-card bg-soft-pink/30">
          <Image
            src={product.images[0]} alt={name} fill
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
            className={cn("object-cover image-premium", hovered && product.hoverImage && "opacity-0")}
          />
          {product.hoverImage && (
            <Image
              src={product.hoverImage} alt="" fill
              sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
              className={cn("object-cover image-premium absolute inset-0 transition-opacity duration-500",
                hovered ? "opacity-100 scale-[1.03]" : "opacity-0")}
              aria-hidden
            />
          )}

          {/* Badges */}
          <div className="absolute start-3 top-3 flex flex-col gap-1.5">
            {product.isNew && (
              <span className="rounded-full bg-charcoal px-2.5 py-1 label-caps text-off-white text-xs">
                {dict.common.new}
              </span>
            )}
            {product.isBestSeller && !product.isNew && (
              <span className="rounded-full bg-dusty-pink px-2.5 py-1 label-caps text-charcoal text-xs">
                {dict.common.bestSeller}
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(product.id); }}
            className={cn(
              "absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-off-white/90 backdrop-blur-sm transition-colors hover:bg-soft-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dusty-pink",
              isWishlisted && "text-dusty-pink"
            )}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart className={cn("h-4 w-4", isWishlisted && "fill-current")} />
          </button>

          {/* Quick add */}
          {showQuickAdd && (
            <div className="absolute inset-x-3 bottom-3 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-sm:opacity-100 max-sm:translate-y-0">
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); if (defaultVariant.stock > 0) addItem(product, defaultVariant); }}
                disabled={defaultVariant.stock === 0}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-charcoal/95 py-3 label-caps text-off-white backdrop-blur-sm transition hover:bg-charcoal disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dusty-pink"
                aria-label={defaultVariant.stock > 0 ? `Add ${name} to cart` : "Out of stock"}
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                {dict.common.quickAdd}
              </button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="mt-3 space-y-0.5">
          <h3 className="text-sm font-semibold text-charcoal tracking-tight line-clamp-2">{name}</h3>
          <p className="text-sm text-medium-grey">
            {formatPrice(product.price, priceLocale)}
            {product.compareAtPrice && (
              <span className="ms-2 text-soft-grey line-through">
                {formatPrice(product.compareAtPrice, priceLocale)}
              </span>
            )}
          </p>
          {/* Color swatches */}
          {product.variants.length > 1 && (
            <div className="flex gap-1.5 pt-1.5">
              {[...new Map(product.variants.map(v => [v.colorHex, v])).values()].slice(0, 4).map((v) => (
                <div key={v.colorHex} className="h-3.5 w-3.5 rounded-full border border-light-grey/70"
                  style={{ backgroundColor: v.colorHex }} title={v.color} />
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
