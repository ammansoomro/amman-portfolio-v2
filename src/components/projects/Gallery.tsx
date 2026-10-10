"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (index === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-border bg-surface focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            <Image
              src={src}
              alt={`${alt} screenshot ${i + 1}`}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </button>
        ))}
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {index !== null && (
              <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={`${alt} image viewer`}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close gallery"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
            >
              <X size={18} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous image"
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent md:left-8"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent md:right-8"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="relative h-full w-full max-w-5xl"
            >
              <Image
                src={images[index]}
                alt={`${alt} screenshot ${index + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

                <p className="absolute bottom-5 font-mono text-xs text-white/60">
                  {index + 1} / {images.length}
                </p>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
