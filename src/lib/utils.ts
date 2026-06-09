import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, locale: string = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function getLocalized<T extends Record<string, unknown>>(
  obj: T,
  locale: string
): string {
  const value = obj[locale as keyof T];
  if (typeof value === "string") return value;
  return (obj.en as string) ?? "";
}
