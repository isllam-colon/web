"use client";

import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { reviews } from "@/lib/data/reviews";
import { getRelatedProducts } from "@/lib/data/products";
import { useCartStore } from "@/lib/store/cart-store";
import { useWishlistStore } from "@/lib/store/wishlist-store";
import { cn, formatPrice, getLocalized } from "@/lib/utils";
import type { Dictionary, Locale, Product } from "@/types";
import { CheckCircle2, ChevronDown, Heart, Ruler, Star, Truck } from "lucide-react";
import { useState } from "react";

interface ProductDetailProps {
  product: Product;
  locale: Locale;
  dict: Dictionary;
}

export function ProductDetail({ product, locale, dict }: ProductDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const addItem = useCartStore((s) => s.addItem);
  const { toggle, has } = useWishlistStore();
  const isWishlisted = has(product.id);
  const priceLocale = locale === "ar" ? "ar-SA" : "en-US";
  const name = getLocalized(product.name, locale);
  const related = getRelatedProducts(product.slug);
  const productReviews = reviews.filter(
    (r) => !r.productSlug || r.productSlug === product.slug
  );

  const sizes = [...new Set(product.variants.map((v) => v.size))];
  const uniqueColors = [...new Map(product.variants.map((v) => [v.colorHex, v])).values()];

  const handleAddToCart = () => {
    if (selectedVariant.stock > 0) {
      addItem(product, selectedVariant);
    }
  };

  const toggleSection = (key: string) =>
    setExpandedSection(expandedSection === key ? null : key);

  const accordionSections = [
    {
      key: "fabric",
      title: dict.product.fabric,
      content: <p className="text-sm leading-relaxed text-stone">{getLocalized(product.fabric, locale)}</p>,
    },
    {
      key: "fit",
      title: dict.product.fit,
      content: <p className="text-sm leading-relaxed text-stone">{getLocalized(product.fit, locale)}</p>,
    },
    {
      key: "benefits",
      title: dict.product.benefits,
      content: (
        <ul className="space-y-2">
          {(product.benefits[locale] ?? product.benefits.en).map((b) => (
            <li key={b} className="flex items-center gap-2 text-sm text-stone">
              <CheckCircle2 className="h-3.5 w-3.5 text-mauve shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <>
      <div className="container-rube pt-20 pb-12 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_480px] lg:gap-16">
          {/* Gallery */}
          <FadeIn>
            <ProductGallery
              images={product.images}
              lifestyleImages={product.lifestyleImages}
              alt={name}
            />
          </FadeIn>

          {/* Info panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <FadeIn delay={0.1}>
              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {product.isNew && (
                  <span className="rounded-full bg-charcoal px-3 py-1 label-caps text-off-white">
                    {dict.common.new}
                  </span>
                )}
                {product.isBestSeller && (
                  <span className="rounded-full bg-mauve/90 px-3 py-1 label-caps text-charcoal">
                    {dict.common.bestSeller}
                  </span>
                )}
              </div>

              {/* Name & wishlist */}
              <div className="flex items-start justify-between gap-4">
                <h1 className="heading-display text-2xl text-charcoal sm:text-3xl">
                  {name}
                </h1>
                <button
                  type="button"
                  onClick={() => toggle(product.id)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand transition hover:bg-cream"
                  aria-label={
                    isWishlisted
                      ? dict.product.removeFromWishlist
                      : dict.product.addToWishlist
                  }
                >
                  <Heart
                    className={cn(
                      "h-5 w-5",
                      isWishlisted ? "fill-mauve text-mauve" : "text-stone"
                    )}
                  />
                </button>
              </div>

              {/* Rating */}
              <div className="mt-2 flex items-center gap-2">
                <div className="flex text-mauve">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-3.5 w-3.5",
                        i < Math.floor(product.rating)
                          ? "fill-current"
                          : "fill-none opacity-30"
                      )}
                    />
                  ))}
                </div>
                <span className="text-xs text-stone">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-2xl font-bold text-charcoal tracking-tight">
                  {formatPrice(product.price, priceLocale)}
                </span>
                {product.compareAtPrice && (
                  <span className="text-base text-pebble line-through">
                    {formatPrice(product.compareAtPrice, priceLocale)}
                  </span>
                )}
                {product.compareAtPrice && (
                  <span className="rounded-full bg-mauve/20 px-2.5 py-1 text-xs font-semibold text-charcoal">
                    Save {Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                  </span>
                )}
              </div>

              {/* Short description */}
              <p className="mt-4 text-sm leading-relaxed text-stone">
                {getLocalized(product.shortDescription, locale)}
              </p>

              {/* Divider */}
              <div className="my-6 border-t border-sand/60" />

              {/* Color selector */}
              {uniqueColors.length > 1 && (
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2.5">
                    <p className="label-caps text-charcoal">{dict.product.selectColor}</p>
                    <p className="text-xs text-stone font-medium">{selectedVariant.color}</p>
                  </div>
                  <div className="flex gap-2.5">
                    {uniqueColors.map((v) => (
                      <button
                        key={v.colorHex}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={cn(
                          "h-9 w-9 rounded-full border-2 transition-all",
                          selectedVariant.colorHex === v.colorHex
                            ? "border-charcoal scale-110 ring-2 ring-charcoal/20 ring-offset-1"
                            : "border-sand hover:border-stone"
                        )}
                        style={{ backgroundColor: v.colorHex }}
                        title={v.color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size selector */}
              <div className="mb-5">
                <div className="flex items-center justify-between mb-2.5">
                  <p className="label-caps text-charcoal">{dict.product.selectSize}</p>
                  <button
                    type="button"
                    onClick={() => setSizeGuideOpen(!sizeGuideOpen)}
                    className="flex items-center gap-1 text-xs text-stone hover:text-charcoal transition-colors"
                  >
                    <Ruler className="h-3 w-3" />
                    {dict.product.sizeGuide}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => {
                    const variant =
                      product.variants.find(
                        (v) => v.size === size && v.color === selectedVariant.color
                      ) ?? product.variants.find((v) => v.size === size);
                    if (!variant) return null;
                    const outOfStock = variant.stock === 0;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => !outOfStock && setSelectedVariant(variant)}
                        disabled={outOfStock}
                        className={cn(
                          "min-w-[3rem] rounded-full border px-4 py-2.5 text-sm font-semibold transition-all",
                          selectedVariant.size === size
                            ? "border-charcoal bg-charcoal text-off-white"
                            : outOfStock
                            ? "border-sand text-pebble opacity-50 cursor-not-allowed line-through"
                            : "border-sand text-charcoal hover:border-charcoal"
                        )}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>

                {/* Size guide table */}
                {sizeGuideOpen && (
                  <div className="mt-4 rounded-2xl bg-cream p-5">
                    <p className="label-caps text-charcoal mb-3">Size Guide (inches)</p>
                    <table className="w-full text-xs text-stone">
                      <thead>
                        <tr className="border-b border-sand/60">
                          <th className="pb-2 text-start font-semibold text-charcoal">Size</th>
                          <th className="pb-2 font-semibold text-charcoal">Bust</th>
                          <th className="pb-2 font-semibold text-charcoal">Waist</th>
                          <th className="pb-2 font-semibold text-charcoal">Hip</th>
                        </tr>
                      </thead>
                      <tbody className="[&>tr]:border-b [&>tr]:border-sand/30">
                        <tr><td className="py-2">XS</td><td>30–32&quot;</td><td>22–24&quot;</td><td>32–34&quot;</td></tr>
                        <tr><td className="py-2">S</td><td>32–34&quot;</td><td>24–26&quot;</td><td>34–36&quot;</td></tr>
                        <tr><td className="py-2">M</td><td>34–36&quot;</td><td>26–28&quot;</td><td>36–38&quot;</td></tr>
                        <tr><td className="py-2">L</td><td>36–38&quot;</td><td>28–30&quot;</td><td>38–40&quot;</td></tr>
                        <tr><td className="py-2">XL</td><td>38–40&quot;</td><td>30–32&quot;</td><td>40–42&quot;</td></tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Stock status */}
              <p className="mb-5 text-xs text-stone flex items-center gap-1.5">
                <span
                  className={cn(
                    "h-2 w-2 rounded-full",
                    selectedVariant.stock === 0
                      ? "bg-pebble"
                      : selectedVariant.stock <= 5
                      ? "bg-amber-400"
                      : "bg-emerald-500"
                  )}
                />
                {selectedVariant.stock === 0
                  ? dict.common.soldOut
                  : selectedVariant.stock <= 5
                  ? dict.product.lowStock
                  : dict.product.inStock}
              </p>

              {/* Add to cart */}
              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  disabled={selectedVariant.stock === 0}
                  className="flex-1"
                  size="lg"
                >
                  {dict.common.addToCart}
                </Button>
                <button
                  type="button"
                  onClick={() => toggle(product.id)}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all",
                    isWishlisted
                      ? "border-mauve bg-mauve/10"
                      : "border-sand hover:border-charcoal"
                  )}
                >
                  <Heart
                    className={cn(
                      "h-5 w-5",
                      isWishlisted ? "fill-mauve text-mauve" : "text-stone"
                    )}
                  />
                </button>
              </div>

              {/* Shipping nudge */}
              <div className="mt-4 flex items-center gap-2 rounded-2xl bg-cream px-4 py-3">
                <Truck className="h-4 w-4 text-stone shrink-0" />
                <p className="text-xs text-stone">
                  Free shipping on orders over <strong className="text-charcoal">$100</strong>
                </p>
              </div>

              {/* Accordion details */}
              <div className="mt-6 space-y-1 border-t border-sand/60 pt-6">
                {accordionSections.map((section) => (
                  <div key={section.key} className="border-b border-sand/40">
                    <button
                      type="button"
                      onClick={() => toggleSection(section.key)}
                      className="flex w-full items-center justify-between py-4"
                    >
                      <span className="label-caps text-charcoal">{section.title}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-stone transition-transform duration-200",
                          expandedSection === section.key && "rotate-180"
                        )}
                      />
                    </button>
                    {expandedSection === section.key && (
                      <div className="pb-4">{section.content}</div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Full description */}
        <div className="mt-16 max-w-2xl">
          <p className="text-sm leading-relaxed text-stone sm:text-base">
            {getLocalized(product.description, locale)}
          </p>
        </div>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand/50 bg-off-white/95 p-4 backdrop-blur-md lg:hidden dark:bg-[#1E1E1B]/95">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-charcoal">{name}</p>
            <p className="text-sm text-stone">
              {formatPrice(product.price, priceLocale)}
            </p>
          </div>
          <Button onClick={handleAddToCart} size="md" disabled={selectedVariant.stock === 0}>
            {dict.common.addToCart}
          </Button>
        </div>
      </div>

      {/* Reviews */}
      {productReviews.length > 0 && (
        <section className="section-padding bg-cream">
          <div className="container-rube">
            <FadeIn>
              <SectionHeading title={dict.product.reviews} align="left" />
            </FadeIn>
            <div className="grid gap-3 sm:grid-cols-2">
              {productReviews.map((r) => (
                <blockquote
                  key={r.id}
                  className="rounded-[var(--radius-card)] bg-off-white p-6"
                >
                  <div className="flex text-mauve mb-3">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-charcoal-mid">
                    &ldquo;{getLocalized(r.text, locale)}&rdquo;
                  </p>
                  <footer className="mt-4 text-xs text-stone">
                    <strong className="text-charcoal">{r.author}</strong>
                    {" · "}
                    {r.location}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <section className="section-padding pb-24 lg:pb-16">
          <div className="container-rube">
            <FadeIn>
              <SectionHeading title={dict.product.related} align="left" />
            </FadeIn>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  locale={locale}
                  dict={dict}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
