import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "rube | Premium Women's Activewear",
    template: "%s | rube",
  },
  description:
    "Premium activewear for confident women. Feminine, modern, and designed for movement — from studio to street.",
  keywords: ["women activewear", "premium athleisure", "pilates wear", "modest swimwear", "rube"],
  openGraph: { type: "website", locale: "en_US", siteName: "rube" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>{children}</body>
    </html>
  );
}
