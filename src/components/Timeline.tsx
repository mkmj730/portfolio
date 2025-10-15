import { timeline } from "@/data/timeline";
import Badge from "./Badge";

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-2 top-0 bottom-0 w-px bg-black/10 dark:bg-white/10" />
      {timeline.map((t, i) => (
        <div key={i} className="ms-6 py-5">
          <span className="absolute -start-2 mt-2 size-5 rounded-full bg-foreground/90" />
          <div className="text-sm opacity-70">{t.year} · {t.keyword}</div>
          <div className="font-semibold mb-1">{t.learn}</div>
          {t.details && (
            <ul className="list-disc ps-5 text-sm opacity-90 space-y-1">
              {t.details.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          )}
          {t.tags && t.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {t.tags.map((tag, j) => (
                <Badge key={j}>{tag}</Badge>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


