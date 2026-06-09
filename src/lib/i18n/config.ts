export const locales = ["en", "ar"] as const;
export const defaultLocale = "en";

export function isRtl(locale: string) {
  return locale === "ar";
}

export function getDirection(locale: string): "ltr" | "rtl" {
  return isRtl(locale) ? "rtl" : "ltr";
}
