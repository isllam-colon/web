"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem, Product, ProductVariant } from "@/types";

interface CartState {
  items: CartItem[];
  promoCode: string | null;
  discount: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  applyPromo: (code: string) => boolean;
  clearPromo: () => void;
  clearCart: () => void;
  subtotal: () => number;
  total: () => number;
  itemCount: () => number;
}

const PROMO_CODES: Record<string, number> = {
  RUBE10: 0.1,
  WELCOME15: 0.15,
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      promoCode: null,
      discount: 0,
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      addItem: (product, variant, quantity = 1) => {
        set((state) => {
          const existing = state.items.find((i) => i.variantId === variant.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.variantId === variant.id
                  ? { ...i, quantity: i.quantity + quantity }
                  : i
              ),
              isOpen: true,
            };
          }
          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                variantId: variant.id,
                quantity,
                product,
                variant,
              },
            ],
            isOpen: true,
          };
        });
      },
      removeItem: (variantId) =>
        set((state) => ({
          items: state.items.filter((i) => i.variantId !== variantId),
        })),
      updateQuantity: (variantId, quantity) => {
        if (quantity < 1) {
          get().removeItem(variantId);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.variantId === variantId ? { ...i, quantity } : i
          ),
        }));
      },
      applyPromo: (code) => {
        const upper = code.toUpperCase();
        const discount = PROMO_CODES[upper];
        if (discount) {
          set({ promoCode: upper, discount });
          return true;
        }
        return false;
      },
      clearPromo: () => set({ promoCode: null, discount: 0 }),
      clearCart: () => set({ items: [], promoCode: null, discount: 0 }),
      subtotal: () =>
        get().items.reduce(
          (sum, i) => sum + i.product.price * i.quantity,
          0
        ),
      total: () => {
        const sub = get().subtotal();
        return sub - sub * get().discount;
      },
      itemCount: () =>
        get().items.reduce((sum, i) => sum + i.quantity, 0),
    }),
    { name: "rube-cart" }
  )
);
