"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";

type BannerItem = {
  title: string;
  description: string;
  proof?: string;
  tags?: string[];
};

type CarouselBannerProps = {
  items: BannerItem[];
  className?: string;
};

export default function CarouselBanner({ items, className = "" }: CarouselBannerProps) {
  const slides = useMemo(() => (Array.isArray(items) ? items.filter(Boolean) : []), [items]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const paginate = useCallback(
    (dir: 1 | -1) => {
      if (slides.length === 0) return;
      setDirection(dir);
      setIndex((prev) => (prev + dir + slides.length) % slides.length);
    },
    [slides.length]
  );

  if (slides.length === 0) return null;

  return (
    <div className={`relative rounded-2xl p-[1px] bg-gradient-to-r from-brand/30 via-brand/10 to-transparent ${className}`}>
      <div className="rounded-[15px] border border-black/10 dark:border-white/15 p-4 sm:p-5 bg-[rgb(var(--background))]/70 backdrop-blur shadow-lg">
      <div className="relative overflow-hidden">

        <div className="h-full h-[160px] sm:h-[170px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={index}
              custom={direction}
              drag="x"
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80) paginate(-1);
                else if (info.offset.x < -80) paginate(1);
              }}
              variants={{
                enter: (dir: 1 | -1) => ({ x: dir * 40, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (dir: 1 | -1) => ({ x: -dir * 40, opacity: 0 })
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
              className="cursor-grab active:cursor-grabbing"
            >
              <Slide item={slides[index]} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </div>
    </div>
  );
}

function Slide({ item }: { item: BannerItem }) {
  return (
    <div className="h-full px-6 flex flex-col justify-center">
      <div>
        <div className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-brand to-pink-500 bg-clip-text text-transparent">{item.title}</div>
        <p className="mt-2 text-sm sm:text-base opacity-90 leading-relaxed">{item.description}</p>
        {item.proof ? <p className="mt-2 text-xs sm:text-sm opacity-70">{item.proof}</p> : null}
        {item.tags && item.tags.length ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.tags.map((t, i) => (
              <span key={i} className="px-2 py-0.5 text-[11px] rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10">
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}


