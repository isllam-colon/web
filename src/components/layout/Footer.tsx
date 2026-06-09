import type { Dictionary, Locale } from "@/types";
import Link from "next/link";
import { NewsletterForm } from "@/components/home/NewsletterForm";
import { Instagram } from "lucide-react";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

export function Footer({ locale, dict }: FooterProps) {
  const shopLinks = [
    { href: `/${locale}/shop`, label: dict.nav.shop },
    { href: `/${locale}/shop/new-arrivals`, label: dict.nav.newArrivals },
    { href: `/${locale}/shop/sets`, label: dict.nav.sets },
    { href: `/${locale}/shop/tops`, label: dict.nav.tops },
    { href: `/${locale}/shop/bottoms`, label: dict.nav.bottoms },
    { href: `/${locale}/shop/modest-swimwear`, label: dict.nav.modestSwimwear },
  ];

  const supportLinks = [
    { href: "#", label: dict.footer.shipping },
    { href: "#", label: dict.footer.faq },
    { href: "#", label: dict.footer.sizeGuide },
  ];

  const companyLinks = [
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
    { href: "#", label: dict.footer.privacy },
    { href: "#", label: dict.footer.terms },
  ];

  return (
    <footer className="bg-charcoal text-off-white">
      {/* Main footer */}
      <div className="container-rube py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link
              href={`/${locale}`}
              className="wordmark text-off-white block"
            >
              rube
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-pebble">
              {dict.footer.tagline}
            </p>
            <div className="mt-6 max-w-sm">
              <NewsletterForm locale={locale} dict={dict} compact dark />
            </div>
            {/* Social */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-pebble transition hover:bg-mauve hover:text-charcoal"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-pebble transition hover:bg-mauve hover:text-charcoal label-caps text-xs font-bold"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h3 className="label-caps text-off-white mb-5">
                {dict.footer.shop}
              </h3>
              <ul className="space-y-3">
                {shopLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-pebble transition hover:text-off-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label-caps text-off-white mb-5 text-xs">
                {dict.footer.support}
              </h3>
              <ul className="space-y-3">
                {supportLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-pebble transition hover:text-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dusty-pink rounded px-1"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="label-caps text-off-white mb-5 text-xs">
                {dict.footer.company}
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-pebble transition hover:text-off-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dusty-pink rounded px-1"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-rube flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-pebble text-center sm:text-start">{dict.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-pebble">
            <span>Secure checkout</span>
            <span className="opacity-40">·</span>
            <span>Egypt & Saudi Arabia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
