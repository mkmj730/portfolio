import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <Link href={`/work/${p.slug}`} className="group rounded-2xl border border-black/10 dark:border-white/10 p-0 overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative aspect-[16/10]">
        <Image src={p.cover || "/covers/placeholder.svg"} alt={p.title} fill className="object-cover" />
      </div>
      <div className="p-5">
      <div className="text-xs opacity-70 mb-1">{p.period}</div>
      <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-brand">{p.title}</h3>
      <p className="text-sm opacity-90 mb-3 line-clamp-2">{p.summary}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {p.role.slice(0, 2).map((r, i) => (
          <span key={`role-${i}`} className="px-2 py-1 rounded-md text-[11px] bg-black/5 dark:bg-white/10">{r}</span>
        ))}
        {(p.domain ?? []).slice(0, 2).map((d, i) => (
          <span key={`domain-${i}`} className="px-2 py-1 rounded-md text-[11px] bg-brand/5 text-brand ring-1 ring-brand/20">{d}</span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {p.highlights.slice(0, 3).map((h, i) => (
          <span key={i} className="px-2 py-1 rounded-full text-xs bg-brand/5 text-foreground/80 dark:text-foreground/80">
            {h}
          </span>
        ))}
      </div>
      </div>
    </Link>
  );
}


