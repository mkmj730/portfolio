"use client";

import React from "react";
import type { Block } from "@/contents/work/types";

type Props = {
  blocks: Block[];
};

function headingClass(level: 1 | 2 | 3 | 4) {
  switch (level) {
    case 1:
      return "mt-10 mb-4 text-3xl md:text-4xl font-bold tracking-tight";
    case 2:
      return "mt-8 mb-3 text-2xl md:text-3xl font-semibold tracking-tight";
    case 3:
      return "mt-6 mb-2 text-xl md:text-2xl font-semibold";
    case 4:
    default:
      return "mt-5 mb-2 text-lg md:text-xl font-semibold";
  }
}

export default function RichContent({ blocks }: Props) {
  return (
    <div className="max-w-3xl mx-auto text-[15px] md:text-base leading-7 text-black/85 dark:text-white/85">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const cls = headingClass(block.level);
            if (block.level === 1) return <h1 key={index} className={cls}>{block.text}</h1>;
            if (block.level === 2) return <h2 key={index} className={cls}>{block.text}</h2>;
            if (block.level === 3) return <h3 key={index} className={cls}>{block.text}</h3>;
            return <h4 key={index} className={cls}>{block.text}</h4>;
          }
          case "paragraph":
            return (
              <p key={index} className="mt-4">
                {block.text}
              </p>
            );
          case "list":
            if (block.ordered) {
              return (
                <ol key={index} className="mt-4 list-decimal pl-6 space-y-1 marker:text-black/50 dark:marker:text-white/50">
                  {block.items.map((item, i) => (
                    <li key={i} className="[&>p]:m-0">{item}</li>
                  ))}
                </ol>
              );
            }
            return (
              <ul key={index} className="mt-4 list-disc pl-6 space-y-1 marker:text-black/50 dark:marker:text-white/50">
                {block.items.map((item, i) => (
                  <li key={i} className="[&>p]:m-0">{item}</li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={index} className="my-6 text-center">
                <img src={block.src} alt={block.alt || ""} className="mx-auto rounded-lg shadow-sm border border-black/10 dark:border-white/10" />
                {block.caption ? <figcaption className="mt-2 text-sm text-black/60 dark:text-white/60">{block.caption}</figcaption> : null}
              </figure>
            );
          case "quote":
            return (
              <blockquote key={index} className="my-6 border-l-4 border-black/20 dark:border-white/20 pl-4 py-3 rounded-r-lg bg-black/5 dark:bg-white/5 italic">
                <p className="m-0">{block.text}</p>
                {block.cite ? <cite className="mt-2 block not-italic text-sm text-black/60 dark:text-white/60">{block.cite}</cite> : null}
              </blockquote>
            );
          case "code":
            return (
              <pre key={index} className="my-4 p-4 rounded-lg bg-black/90 text-white dark:bg-white/10 overflow-x-auto text-sm">
                <code className="font-mono">{block.code}</code>
              </pre>
            );
          case "callout":
            return (
              <div key={index} className="my-4 flex items-start gap-3 rounded-xl border border-amber-200/70 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30 p-4 shadow-sm">
                {block.icon ? <span className="shrink-0 text-xl" aria-hidden>{block.icon}</span> : null}
                <span className="text-amber-950 dark:text-amber-100">{block.text}</span>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}


