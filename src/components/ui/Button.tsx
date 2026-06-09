"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "pink";
type Size    = "sm" | "md" | "lg";

interface ButtonProps {
  variant?:  Variant;
  size?:     Size;
  href?:     string;
  locale?:   string;
  children:  ReactNode;
  className?: string;
  onClick?:  (e: React.MouseEvent<HTMLElement>) => void;
  type?:     "button" | "submit" | "reset";
  disabled?: boolean;
}

/* Official Rube palette */
const variants: Record<Variant, string> = {
  primary:  "bg-charcoal text-off-white hover:bg-[#3A3A3A]",
  secondary:"bg-baby-pink text-charcoal hover:bg-dusty-pink",
  pink:     "bg-dusty-pink text-charcoal hover:bg-baby-pink",
  ghost:    "bg-transparent text-charcoal hover:bg-soft-pink/60",
  outline:  "border border-light-grey bg-transparent text-charcoal hover:border-dusty-pink hover:bg-soft-pink/40",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[11px] tracking-[0.1em]",
  md: "px-6 py-3 text-[11px] tracking-[0.1em]",
  lg: "px-8 py-3.5 text-[11px] tracking-[0.12em]",
};

export function Button({
  variant = "primary", size = "md", href, locale = "en",
  children, className, onClick, type = "button", disabled,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dusty-pink disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    locale === "ar" ? "rtl:flex-row-reverse" : "",
    className
  );

  if (href) {
    const path = href.startsWith("/") ? `/${locale}${href}` : href;
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
        <Link href={path} className={classes} onClick={onClick}>{children}</Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type} disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={classes} onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
