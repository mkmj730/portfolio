"use client";

import React from "react";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="py-4 md:py-10">
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-10">
            {subtitle && <div className="text-sm opacity-70 mb-2">{subtitle}</div>}
            {title && <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>}
          </div>
        )}
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}


