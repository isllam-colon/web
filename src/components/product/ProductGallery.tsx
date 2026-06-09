"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ZoomIn } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  lifestyleImages?: string[];
  alt: string;
}

export function ProductGallery({
  images,
  lifestyleImages = [],
  alt,
}: ProductGalleryProps) {
  const allImages = [...images, ...lifestyleImages];
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div className="space-y-3">
        <div
          className="relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-[var(--radius-card)] bg-soft-pink/30"
          onClick={() => setZoomed(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setZoomed(true)}
          aria-label="Zoom image"
        >
          <Image
            src={allImages[active]}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 hover:scale-[1.02]"
          />
          <span className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-off-white/80 backdrop-blur-sm">
            <ZoomIn className="h-4 w-4 text-charcoal" />
          </span>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {allImages.map((img, i) => (
            <button
              key={img + i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "relative h-20 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition",
                active === i
                  ? "border-dusty-pink"
                  : "border-transparent opacity-70 hover:opacity-100"
              )}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="64px" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4"
            onClick={() => setZoomed(false)}
            role="dialog"
            aria-modal
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative h-[85vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[active]}
                alt={alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
