"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

type GalleryLightboxProps = {
  images: { src: string; alt: string }[];
  className?: string;
};

export default function GalleryLightbox({ images, className }: GalleryLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const safeImages = useMemo(() => images?.filter(Boolean) ?? [], [images]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % safeImages.length);
      if (e.key === "ArrowLeft") setCurrentIndex((i) => (i - 1 + safeImages.length) % safeImages.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, safeImages.length]);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className={className}>
      <div className="grid md:grid-cols-2 gap-6">
        {safeImages.map((img, i) => (
          <button
            key={i}
            type="button"
            className="text-left group"
            onClick={() => openAt(i)}
            aria-label={`${img.alt} 확대 보기`}
          >
            <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 overflow-hidden transition-shadow group-hover:shadow-lg">
              <div className="h-8 bg-black/10 dark:bg-white/10 flex items-center gap-1 px-3">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-green-400" />
              </div>
              <div className="relative aspect-[16/10]">
                <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
              </div>
            </div>
          </button>
        ))}
      </div>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="relative z-10 w-full max-w-6xl px-4">
            <div className="relative rounded-2xl overflow-hidden bg-black/70 ring-1 ring-white/10">
              <div className="relative aspect-[16/10]">
                <Image
                  src={safeImages[currentIndex]?.src}
                  alt={safeImages[currentIndex]?.alt || "gallery image"}
                  fill
                  className="object-contain"
                />
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 inline-flex items-center justify-center size-9 rounded-full bg-white/90 text-black hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="닫기"
              >
                <IoClose size={20} />
              </button>

              {safeImages.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((i) => (i - 1 + safeImages.length) % safeImages.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-10 rounded-full bg-white/90 text-black hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label="이전 이미지"
                  >
                    <IoChevronBack size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((i) => (i + 1) % safeImages.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-10 rounded-full bg-white/90 text-black hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label="다음 이미지"
                  >
                    <IoChevronForward size={22} />
                  </button>
                </>
              ) : null}
            </div>

            <div className="mt-3 text-center text-white/80 text-sm">
              {currentIndex + 1} / {safeImages.length}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}


