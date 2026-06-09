import { ProductDetail } from "@/components/product/ProductDetail";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getProductBySlug, products } from "@/lib/data/products";
import type { Locale } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocalized } from "@/lib/utils";

export function generateStaticParams() {
  const locales: Locale[] = ["en", "ar"];
  return locales.flatMap((locale) =>
    products.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: getLocalized(product.name, locale),
    description: getLocalized(product.shortDescription, locale),
    openGraph: { images: [product.images[0]] },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <ProductDetail
      product={product}
      locale={locale as Locale}
      dict={dict}
    />
  );
}
