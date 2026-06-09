import { ProductCard } from "@/components/product/ProductCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { CategoryHero } from "@/components/home/CategoryHero";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getProductsByCategory } from "@/lib/data/products";
import type { Locale } from "@/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

const validCategories = ["sets", "tops", "bottoms", "modest-swimwear", "new-arrivals"];
const PRODUCTS_PER_PAGE = 12; // Limit products shown per category

const categoryDescriptions: Record<string, { en: string; ar: string }> = {
  shop: { en: "Explore our full collection", ar: "اكتشفي مجموعتنا الكاملة" },
  sets: { en: "Matching sets designed for movement and confidence", ar: "طقم متناسق مصمم للحركة والثقة" },
  tops: { en: "Versatile tops that layer beautifully", ar: "القمصان المتعددة الاستخدامات" },
  bottoms: { en: "High-waist bottoms with full coverage", ar: "السروال بخصر عالي وتغطية كاملة" },
  "modest-swimwear": { en: "Modest, stylish swimwear for every body", ar: "ملابس سباحة متواضعة وأنيقة" },
  "new-arrivals": { en: "Just dropped: New styles this season", ar: "الوصول الجديد هذا الموسم" },
};

export async function generateMetadata({
  params,
}: { params: Promise<{ locale: string; category?: string[] }> }): Promise<Metadata> {
  const { locale, category } = await params;
  const dict = await getDictionary(locale as Locale);
  const slug = category?.[0];
  const title =
    slug && validCategories.includes(slug)
      ? (dict.categories as Record<string, string>)[slug]
      : dict.nav.shop;
  return { title };
}

export async function generateStaticParams() {
  const locales: Locale[] = ["en", "ar"];
  const paths: Array<{ locale: string; category: string[] }> = [];

  // Add shop root paths
  locales.forEach((locale) => {
    paths.push({ locale, category: [] });
  });

  // Add category paths
  locales.forEach((locale) => {
    validCategories.forEach((cat) => {
      paths.push({ locale, category: [cat] });
    });
  });

  return paths;
}

export default async function ShopPage({
  params,
}: { params: Promise<{ locale: string; category?: string[] }> }) {
  const { locale, category } = await params;
  const slug = category?.[0];
  if (slug && !validCategories.includes(slug)) notFound();

  const dict = await getDictionary(locale as Locale);
  const cat = slug ?? "shop";
  const allProducts = getProductsByCategory(cat);
  const productList = allProducts.slice(0, PRODUCTS_PER_PAGE);
  const hasMore = allProducts.length > PRODUCTS_PER_PAGE;
  
  const title =
    slug && validCategories.includes(slug)
      ? (dict.categories as Record<string, string>)[slug]
      : dict.nav.shop;

  const description = categoryDescriptions[cat];
  const subtitleText = locale === "ar" ? description.ar : description.en;

  return (
    <div>
      {/* Category Hero */}
      <CategoryHero title={title} subtitle={subtitleText} category={cat} locale={locale as Locale} />

      <div className="container-rube py-10">
        {/* Category pills */}
        <FadeIn>
          <div className="flex flex-wrap gap-2 pb-8 overflow-x-auto">
            <CategoryPill href={`/${locale}/shop`} label={dict.nav.shop} active={!slug} />
            {validCategories.map((c) => (
              <CategoryPill
                key={c}
                href={`/${locale}/shop/${c}`}
                label={(dict.categories as Record<string, string>)[c]}
                active={slug === c}
              />
            ))}
          </div>
        </FadeIn>

        {/* Product count and view all link */}
        <div className="flex items-center justify-between mb-8">
          <p className="label-caps text-stone">{productList.length} of {allProducts.length} items</p>
          {hasMore && (
            <Link 
              href="#view-more"
              className="text-sm font-medium text-dusty-pink hover:text-mauve transition"
            >
              View all →
            </Link>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              locale={locale as Locale}
              dict={dict}
            />
          ))}
        </div>

        {/* View More CTA */}
        {hasMore && (
          <div className="mt-16 text-center" id="view-more">
            <FadeIn>
              <div className="inline-block rounded-full bg-soft-pink px-8 py-4 backdrop-blur-sm border border-dusty-pink/30">
                <p className="text-sm text-charcoal mb-4">
                  Viewing {productList.length} of {allProducts.length} items
                </p>
                <button className="w-full px-6 py-3 rounded-full bg-charcoal text-off-white font-semibold label-caps transition hover:bg-charcoal/90">
                  View All {allProducts.length} Items
                </button>
              </div>
            </FadeIn>
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryPill({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <a
      href={href}
      className={`rounded-full px-5 py-2.5 label-caps transition-colors ${
        active
          ? "bg-charcoal text-off-white"
          : "bg-cream text-stone hover:bg-sand/60 hover:text-charcoal"
      }`}
    >
      {label}
    </a>
  );
}
