"use client";

import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/lib/store/cart-store";
import { formatPrice, getLocalized } from "@/lib/utils";
import type { Dictionary, Locale } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import enDict from "@/messages/en.json";
import arDict from "@/messages/ar.json";

export default function CheckoutPage() {
  const params = useParams();
  const locale = (params.locale as Locale) ?? "en";
  const dict = (locale === "ar" ? arDict : enDict) as Dictionary;
  const { items, subtotal, total, discount, clearCart } = useCartStore();
  const [placed, setPlaced] = useState(false);
  const priceLocale = locale === "ar" ? "ar-SA" : "en-US";

  useEffect(() => {
    document.title = `${dict.checkout.title} | RUBE`;
  }, [dict.checkout.title]);

  if (placed) {
    return (
      <div className="container-rube flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
        <h1 className="heading-display text-3xl">Thank You</h1>
        <p className="mt-4 text-medium-grey">
          {locale === "ar"
            ? "تم استلام طلبك. سنرسل تأكيداً قريباً."
            : "Your order has been received. We'll send a confirmation shortly."}
        </p>
        <Link
          href={`/${locale}/shop`}
          className="mt-8 text-sm uppercase tracking-widest underline"
        >
          {dict.cart.continueShopping}
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-rube py-32 text-center">
        <p className="text-medium-grey">{dict.cart.empty}</p>
        <Link
          href={`/${locale}/shop`}
          className="mt-4 inline-block text-sm uppercase tracking-widest underline"
        >
          {dict.cart.continueShopping}
        </Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    setPlaced(true);
  };

  return (
    <div className="container-rube py-24 lg:py-28">
      <h1 className="heading-display text-3xl font-medium">
        {dict.checkout.title}
      </h1>
      <p className="mt-2 text-sm text-medium-grey">
        {dict.checkout.shippingNote}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 grid gap-12 lg:grid-cols-5"
      >
        <div className="space-y-8 lg:col-span-3">
          <fieldset>
            <legend className="text-xs font-medium uppercase tracking-widest">
              {dict.checkout.contact}
            </legend>
            <input
              type="email"
              required
              placeholder={dict.checkout.email}
              className="mt-3 w-full rounded-xl border border-light-grey bg-transparent px-4 py-3 text-sm outline-none focus:border-dusty-pink"
            />
          </fieldset>
          <fieldset>
            <legend className="text-xs font-medium uppercase tracking-widest">
              {dict.checkout.shipping}
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <input
                required
                placeholder={dict.checkout.firstName}
                className="rounded-xl border border-light-grey bg-transparent px-4 py-3 text-sm outline-none focus:border-dusty-pink"
              />
              <input
                required
                placeholder={dict.checkout.lastName}
                className="rounded-xl border border-light-grey bg-transparent px-4 py-3 text-sm outline-none focus:border-dusty-pink"
              />
            </div>
            <input
              required
              placeholder={dict.checkout.address}
              className="mt-3 w-full rounded-xl border border-light-grey bg-transparent px-4 py-3 text-sm outline-none focus:border-dusty-pink"
            />
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <input
                required
                placeholder={dict.checkout.city}
                className="rounded-xl border border-light-grey bg-transparent px-4 py-3 text-sm outline-none focus:border-dusty-pink"
              />
              <input
                required
                placeholder={dict.checkout.country}
                className="rounded-xl border border-light-grey bg-transparent px-4 py-3 text-sm outline-none focus:border-dusty-pink"
              />
              <input
                required
                placeholder={dict.checkout.postalCode}
                className="rounded-xl border border-light-grey bg-transparent px-4 py-3 text-sm outline-none focus:border-dusty-pink"
              />
            </div>
          </fieldset>
          <fieldset>
            <legend className="text-xs font-medium uppercase tracking-widest">
              {dict.checkout.payment}
            </legend>
            <input
              required
              placeholder="Card number"
              className="mt-3 w-full rounded-xl border border-light-grey bg-transparent px-4 py-3 text-sm outline-none focus:border-dusty-pink"
            />
          </fieldset>
        </div>

        <aside className="rounded-[var(--radius-card)] border border-light-grey/50 bg-soft-pink/20 p-6 lg:col-span-2 lg:h-fit">
          <h2 className="text-xs font-medium uppercase tracking-widest">
            {dict.checkout.orderSummary}
          </h2>
          <ul className="mt-4 space-y-4">
            {items.map((item) => (
              <li key={item.variantId} className="flex gap-3">
                <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={item.product.images[0]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="flex-1 text-sm">
                  <p className="font-medium">
                    {getLocalized(item.product.name, locale)}
                  </p>
                  <p className="text-xs text-medium-grey">
                    {item.variant.size} × {item.quantity}
                  </p>
                </div>
                <p className="text-sm">
                  {formatPrice(
                    item.product.price * item.quantity,
                    priceLocale
                  )}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-2 border-t border-light-grey/50 pt-4 text-sm">
            <div className="flex justify-between">
              <span className="text-medium-grey">{dict.cart.subtotal}</span>
              <span>{formatPrice(subtotal(), priceLocale)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-dusty-pink">
                <span>{dict.cart.discount}</span>
                <span>-{formatPrice(subtotal() * discount, priceLocale)}</span>
              </div>
            )}
            <div className="flex justify-between font-medium">
              <span>{dict.cart.total}</span>
              <span>{formatPrice(total(), priceLocale)}</span>
            </div>
          </div>
          <Button type="submit" className="mt-6 w-full" size="lg">
            {dict.checkout.placeOrder}
          </Button>
        </aside>
      </form>
    </div>
  );
}
