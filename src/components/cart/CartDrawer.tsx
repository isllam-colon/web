"use client";

import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/Button";
import { cn, formatPrice, getLocalized } from "@/lib/utils";
import { products } from "@/lib/data/products";
import { useCartStore } from "@/lib/store/cart-store";
import type { Dictionary, Locale } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CartDrawerProps {
  locale: Locale;
  dict: Dictionary;
}

export function CartDrawer({ locale, dict }: CartDrawerProps) {
  const {
    items, isOpen, closeCart, removeItem,
    updateQuantity, applyPromo, promoCode,
    discount, subtotal, total, itemCount,
  } = useCartStore();
  const [promoInput, setPromoInput] = useState("");
  const [promoError, setPromoError] = useState(false);
  const priceLocale = locale === "ar" ? "ar-SA" : "en-US";

  const upsell = products
    .filter((p) => !items.some((i) => i.productId === p.id))
    .slice(0, 2);

  const handlePromo = () => {
    const ok = applyPromo(promoInput);
    setPromoError(!ok);
    if (ok) setPromoInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-charcoal/30 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden
          />
          <motion.aside
            initial={{ x: locale === "ar" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: locale === "ar" ? "-100%" : "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 320 }}
            className={cn(
              "fixed inset-y-0 z-[90] flex w-full max-w-[420px] flex-col bg-off-white shadow-2xl dark:bg-[#1E1E1B]",
              locale === "ar" ? "start-0" : "end-0"
            )}
            role="dialog"
            aria-label={dict.cart.title}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-sand/50 px-6 py-5">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-charcoal" />
                <h2 className="font-bold text-charcoal tracking-tight">
                  {dict.cart.title}
                  {itemCount() > 0 && (
                    <span className="ms-2 text-sm font-normal text-stone">
                      ({itemCount()})
                    </span>
                  )}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-cream transition-colors"
                aria-label="Close cart"
              >
                <X className="h-4 w-4 text-stone" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream mb-4">
                    <ShoppingBag className="h-7 w-7 text-pebble" />
                  </div>
                  <p className="text-sm font-semibold text-charcoal">{dict.cart.empty}</p>
                  <p className="mt-1 text-xs text-stone">Add something beautiful</p>
                  <Button
                    href="/shop"
                    locale={locale}
                    variant="primary"
                    className="mt-6"
                    onClick={closeCart}
                  >
                    {dict.cart.continueShopping}
                  </Button>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li key={item.variantId} className="flex gap-4">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[var(--radius-soft)] bg-cream">
                        <Image
                          src={item.product.images[0]}
                          alt={getLocalized(item.product.name, locale)}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <Link
                          href={`/${locale}/product/${item.product.slug}`}
                          onClick={closeCart}
                          className="text-sm font-semibold text-charcoal hover:underline"
                        >
                          {getLocalized(item.product.name, locale)}
                        </Link>
                        <p className="mt-0.5 text-xs text-stone">
                          {item.variant.size} · {item.variant.color}
                        </p>
                        <p className="mt-1 text-sm font-bold text-charcoal">
                          {formatPrice(item.product.price * item.quantity, priceLocale)}
                        </p>
                        <div className="mt-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-full border border-sand px-1">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                              className="flex h-7 w-7 items-center justify-center hover:text-charcoal text-stone"
                              aria-label="Decrease"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-semibold text-charcoal">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                              className="flex h-7 w-7 items-center justify-center hover:text-charcoal text-stone"
                              aria-label="Increase"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(item.variantId)}
                            className="text-xs text-pebble hover:text-charcoal transition-colors"
                          >
                            {dict.cart.remove}
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Upsell */}
              {items.length > 0 && upsell.length > 0 && (
                <div className="mt-8 border-t border-sand/40 pt-6">
                  <p className="mb-4 label-caps text-charcoal">
                    {dict.cart.youMayLike}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {upsell.map((p) => (
                      <ProductCard
                        key={p.id}
                        product={p}
                        locale={locale}
                        dict={dict}
                        showQuickAdd
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-sand/50 bg-off-white px-6 py-5 dark:bg-[#1E1E1B]">
                {/* Promo code */}
                <div className="mb-4 flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => { setPromoInput(e.target.value); setPromoError(false); }}
                    placeholder={dict.cart.promoPlaceholder}
                    className="flex-1 rounded-full border border-sand bg-cream px-4 py-2.5 text-sm outline-none focus:border-mauve text-charcoal placeholder:text-pebble"
                  />
                  <button
                    type="button"
                    onClick={handlePromo}
                    className="rounded-full bg-charcoal px-4 text-xs font-semibold uppercase tracking-wider text-off-white transition hover:bg-charcoal-mid"
                  >
                    {dict.cart.apply}
                  </button>
                </div>
                {promoError && (
                  <p className="mb-2 text-xs text-red-400">{dict.cart.invalidPromo}</p>
                )}
                {promoCode && (
                  <p className="mb-2 text-xs text-stone">✓ {dict.cart.promoApplied}: <strong>{promoCode}</strong></p>
                )}

                {/* Totals */}
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-stone">
                    <span>{dict.cart.subtotal}</span>
                    <span>{formatPrice(subtotal(), priceLocale)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-mauve">
                      <span>{dict.cart.discount}</span>
                      <span>−{formatPrice(subtotal() * discount, priceLocale)}</span>
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-charcoal border-t border-sand/50 pt-2 mt-2">
                    <span>{dict.cart.total}</span>
                    <span>{formatPrice(total(), priceLocale)}</span>
                  </div>
                </div>

                <Button
                  href="/checkout"
                  locale={locale}
                  className="mt-4 w-full"
                  size="lg"
                  onClick={closeCart}
                >
                  {dict.cart.checkout}
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
