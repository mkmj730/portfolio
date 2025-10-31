"use client";

import { useEffect, useMemo, useState } from "react";

type BannerItem = {
  title: string;
  description: string;
  proof?: string;
};

type RotatingBannerProps = {
  items: BannerItem[];
  intervalMs?: number;
  className?: string;
};

export default function RotatingBanner({ items, intervalMs = 5000, className = "" }: RotatingBannerProps) {
  const safeItems = useMemo(() => (Array.isArray(items) ? items.filter(Boolean) : []), [items]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (safeItems.length <= 1) return;
    const timerId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeItems.length);
    }, intervalMs);
    return () => clearInterval(timerId);
  }, [safeItems.length, intervalMs]);

  if (safeItems.length === 0) return null;
  const active = safeItems[activeIndex];

  return (
    <div className={`rounded-2xl border border-black/10 dark:border-white/15 p-4 sm:p-5 bg-[rgb(var(--background))]/60 backdrop-blur transition-colors ${className}`}>
      <div className="flex items-start gap-3">
        <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand" aria-hidden />
        <div>
          <div className="text-base sm:text-lg font-semibold">{active.title}</div>
          <p className="mt-1 text-sm sm:text-base opacity-90 leading-relaxed">{active.description}</p>
          {active.proof ? (
            <p className="mt-2 text-xs sm:text-sm opacity-70">{active.proof}</p>
          ) : null}
        </div>
      </div>

      {safeItems.length > 1 ? (
        <div className="mt-3 flex gap-1.5" aria-hidden>
          {safeItems.map((_, i) => (
            <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === activeIndex ? "bg-brand" : "bg-black/10 dark:bg-white/15"}`} />
          ))}
        </div>
      ) : null}
    </div>
  );
}


