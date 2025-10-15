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
      <h3 className="text-lg font-semibold tracking-tight mb-2 group-hover:underline">{p.title}</h3>
      <p className="text-sm opacity-90 mb-4 line-clamp-2">{p.summary}</p>
      <div className="flex flex-wrap gap-2">
        {p.highlights.slice(0, 3).map((h, i) => (
          <span key={i} className="px-2 py-1 rounded-full text-xs bg-black/5 dark:bg-white/10">{h}</span>
        ))}
      </div>
      </div>
    </Link>
  );
}


