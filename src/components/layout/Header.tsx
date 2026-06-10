"use client";

import { cn } from "@/lib/utils";
import { useCartStore } from "@/lib/store/cart-store";
import { useWishlistStore } from "@/lib/store/wishlist-store";
import { useThemeStore } from "@/lib/store/theme-store";
import type { Dictionary, Locale } from "@/types";
import { Heart, Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface HeaderProps { locale: Locale; dict: Dictionary; }

const navLinks = (locale: string) => [
  { href: `/${locale}`,                         labelKey: "home"           as const },
  { href: `/${locale}/shop`,                    labelKey: "shop"           as const },
  { href: `/${locale}/shop/new-arrivals`,       labelKey: "newArrivals"    as const },
  { href: `/${locale}/shop/sets`,               labelKey: "sets"           as const },
  { href: `/${locale}/shop/tops`,               labelKey: "tops"           as const },
  { href: `/${locale}/shop/bottoms`,            labelKey: "bottoms"        as const },
  { href: `/${locale}/shop/modest-swimwear`,    labelKey: "modestSwimwear" as const },
  { href: `/${locale}/about`,                   labelKey: "about"          as const },
  { href: `/${locale}/contact`,                 labelKey: "contact"        as const },
];

export function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(true);
  const pathname  = usePathname();
  const openCart  = useCartStore((s) => s.openCart);
  const itemCount = useCartStore((s) => s.itemCount());
  const wishlistCount = useWishlistStore((s) => s.productIds.length);
  const { theme, toggle } = useThemeStore();
  const otherLocale = locale === "en" ? "ar" : "en";
  const switchPath  = pathname.replace(`/${locale}`, `/${otherLocale}`) || `/${otherLocale}`;
  const isHeroPage  = pathname === `/${locale}` || pathname === `/${locale}/`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  const dark = !scrolled && isHeroPage;

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-baby-pink/60 text-center py-2 fixed inset-x-0 top-0 z-40">
        <p className="label-caps text-charcoal/70 text-[10px]">
          Free shipping on orders over $100 · Code&nbsp;
          <span className="font-semibold text-charcoal">RUBE10</span> for 10% off
        </p>
      </div>

      <header
        className={cn(
          "fixed inset-x-0 top-7 z-50 transition-all duration-500",
          scrolled
            ? "bg-off-white/95 shadow-[0_1px_0_0_rgba(43,43,43,0.08)] backdrop-blur-md"
            : isHeroPage
            ? "bg-transparent"
            : "bg-off-white/95 backdrop-blur-md"
        )}
      >
        <div className="container-rube flex h-16 items-center justify-between">
          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
              dark ? "text-off-white hover:bg-white/10" : "text-charcoal hover:bg-soft-pink/50"
            )}
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Wordmark / Logo — uses /logo.svg in `public/` with text fallback */}
          <Link
            href={`/${locale}`}
            aria-label="Home"
            className={cn(
              "wordmark absolute start-1/2 -translate-x-1/2 lg:static lg:translate-x-0 transition-colors",
              dark ? "text-off-white" : "text-charcoal"
            )}
          >
            {logoLoaded ? (
              <img
                src="/logo.svg"
                alt="RUBE"
                className={cn("h-6 w-auto", dark ? "invert" : "")}
                onError={() => setLogoLoaded(false)}
              />
            ) : (
              <span className="font-bold">rube</span>
            )}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks(locale).slice(1, 8).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "label-caps transition-colors",
                  dark
                    ? "text-off-white/80 hover:text-off-white"
                    : "text-medium-grey hover:text-charcoal",
                  pathname === link.href && (dark ? "text-off-white" : "text-charcoal")
                )}
              >
                {dict.nav[link.labelKey]}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Link
              href={switchPath}
              className={cn(
                "hidden label-caps sm:flex items-center justify-center h-9 px-2 transition-colors rounded-full",
                dark ? "text-off-white/80 hover:text-off-white hover:bg-white/10" : "text-medium-grey hover:text-charcoal hover:bg-soft-pink/50"
              )}
              aria-label={`Switch to ${otherLocale === "ar" ? "English" : "Arabic"}`}
            >
              {otherLocale === "ar" ? "عربي" : "EN"}
            </Link>

            <button
              type="button" onClick={toggle}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dusty-pink",
                dark ? "text-off-white/80 hover:bg-white/10" : "text-medium-grey hover:bg-soft-pink/50"
              )}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <Link
              href={`/${locale}/wishlist`}
              className={cn(
                "relative flex h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dusty-pink",
                dark ? "text-off-white/80 hover:bg-white/10" : "text-medium-grey hover:bg-soft-pink/50"
              )}
              aria-label={`Wishlist (${wishlistCount} items)`}
            >
              <Heart className="h-4 w-4" />
              {wishlistCount > 0 && (
                <span className="absolute -end-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-dusty-pink text-[9px] font-bold text-charcoal" aria-hidden="true">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              type="button" onClick={openCart}
              className={cn(
                "relative flex h-9 w-9 items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dusty-pink",
                dark ? "text-off-white/80 hover:bg-white/10" : "text-medium-grey hover:bg-soft-pink/50"
              )}
              aria-label={`Shopping bag (${itemCount} items)`}
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -end-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-charcoal text-[9px] font-bold text-off-white" aria-hidden="true">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-charcoal/30 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: locale === "ar" ? "100%" : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: locale === "ar" ? "100%" : "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed inset-y-0 start-0 z-[70] flex w-[min(100%,300px)] flex-col bg-off-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-light-grey/50 px-6 py-5">
                <span className="wordmark text-charcoal">rube</span>
                <button
                  type="button" onClick={() => setMobileOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-soft-pink/50"
                >
                  <X className="h-5 w-5 text-charcoal" />
                </button>
              </div>
              <ul className="flex-1 overflow-y-auto px-6 py-4 space-y-0.5">
                {navLinks(locale).map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center py-3.5 label-caps border-b border-light-grey/30 transition-colors",
                        pathname === link.href
                          ? "text-charcoal font-semibold"
                          : "text-medium-grey hover:text-charcoal"
                      )}
                    >
                      {dict.nav[link.labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="border-t border-light-grey/50 px-6 py-5">
                <Link href={switchPath} className="label-caps text-medium-grey hover:text-charcoal">
                  {otherLocale === "ar" ? "العربية" : "English"}
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
