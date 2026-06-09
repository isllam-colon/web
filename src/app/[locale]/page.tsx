import { BestSellers } from "@/components/home/BestSellers";
import { CommunitySection } from "@/components/home/CommunitySection";
import { CustomerReviews } from "@/components/home/CustomerReviews";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { HeroSection } from "@/components/home/HeroSection";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { LifestyleBanner } from "@/components/home/LifestyleBanner";
import { NewCollection } from "@/components/home/NewCollection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { WhyRube } from "@/components/home/WhyRube";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import type { Locale } from "@/types";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "RUBE | Built For The Way You Move",
    alternates: {
      languages: { en: "/en", ar: "/ar" },
    },
    openGraph: { locale: locale === "ar" ? "ar_SA" : "en_US" },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <HeroSection locale={locale as Locale} dict={dict} />
      <FeaturedCollections locale={locale as Locale} dict={dict} />
      <BestSellers locale={locale as Locale} dict={dict} />
      <LifestyleBanner locale={locale as Locale} dict={dict} />
      <NewCollection locale={locale as Locale} dict={dict} />
      <WhyRube locale={locale as Locale} dict={dict} />
      <CustomerReviews locale={locale as Locale} dict={dict} />
      <CommunitySection locale={locale as Locale} dict={dict} />
      <InstagramFeed locale={locale as Locale} dict={dict} />
      <NewsletterSection locale={locale as Locale} dict={dict} />
    </>
  );
}
