import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <div className="relative border-s border-black/10 dark:border-white/10">
      {timeline.map((t, i) => (
        <div key={i} className="ms-6 py-5">
          <span className="absolute -start-2 mt-2 size-5 rounded-full bg-foreground/90" />
          <div className="text-sm opacity-70">{t.year} · {t.keyword}</div>
          <div className="font-semibold">{t.learn}</div>
        </div>
      ))}
    </div>
  );
}


