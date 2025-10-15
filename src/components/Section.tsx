"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) controls.start({ opacity: 1, y: 0 });
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section id={id} className="py-4 md:py-10">
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-10">
            {subtitle && <div className="text-sm opacity-70 mb-2">{subtitle}</div>}
            {title && <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>}
          </div>
        )}
        <motion.div ref={ref} initial={{ opacity: 0, y: 12 }} animate={controls} transition={{ duration: 0.4 }}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}


