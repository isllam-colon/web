import { CartDrawer } from "@/components/cart/CartDrawer";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StoreHydration } from "@/components/providers/StoreHydration";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getDirection, locales } from "@/lib/i18n/config";
import type { Locale } from "@/types";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();

  const dict = await getDictionary(locale as Locale);
  const dir = getDirection(locale);

  return (
    <div lang={locale} dir={dir}>
      <ThemeProvider>
        <StoreHydration>
          <Header locale={locale as Locale} dict={dict} />
          <main className="min-h-screen">{children}</main>
          <Footer locale={locale as Locale} dict={dict} />
          <CartDrawer locale={locale as Locale} dict={dict} />
        </StoreHydration>
      </ThemeProvider>
    </div>
  );
}
