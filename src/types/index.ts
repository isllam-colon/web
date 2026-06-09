export type Locale = "en" | "ar";

export type Category =
  | "sets"
  | "tops"
  | "bottoms"
  | "modest-swimwear"
  | "new-arrivals";

export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  colorHex: string;
  stock: number;
}

export interface Product {
  id: string;
  slug: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  price: number;
  compareAtPrice?: number;
  category: Category;
  images: string[];
  hoverImage?: string;
  lifestyleImages: string[];
  variants: ProductVariant[];
  fabric: Record<Locale, string>;
  fit: Record<Locale, string>;
  benefits: Record<Locale, string[]>;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  product: Product;
  variant: ProductVariant;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: Record<Locale, string>;
  productSlug?: string;
  date: string;
}

export interface UGCItem {
  id: string;
  image: string;
  handle: string;
  caption: Record<Locale, string>;
}

export interface Dictionary {
  nav: Record<string, string>;
  hero: Record<string, string>;
  collections: Record<string, string>;
  common: Record<string, string>;
  home: Record<string, string | Record<string, string>>;
  product: Record<string, string>;
  cart: Record<string, string>;
  checkout: Record<string, string>;
  footer: Record<string, string>;
  about: Record<string, string>;
  contact: Record<string, string>;
  categories: Record<Category, string>;
}
