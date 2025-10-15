import Image from "next/image";
import Badge from "./Badge";

export type TimelineNode = {
  title: string;
  org: string;
  period: string;
  location?: string;
  bullets?: string[];
  skills?: string[];
  logo?: string; // public path
};

type Props = { items: TimelineNode[] };

export default function ResumeTimeline({ items }: Props) {
  return (
    <div className="relative border-black/10 dark:border-white/10">
      {items.map((item, i) => (
        <div key={i} className="ms-6 py-6">
          <span className="absolute -start-2 mt-2 size-5 rounded-full bg-foreground/90" />
          <div className="flex items-start gap-3">
            {item.logo && (
              <div className="shrink-0 rounded-md bg-white p-1 shadow-sm ring-1 ring-black/5">
                <Image src={item.logo} alt={`${item.org} 로고`} width={40} height={40} />
              </div>
            )}
            <div className="min-w-0">
              <div className="text-sm opacity-70">{item.period}{item.location ? ` · ${item.location}` : ""}</div>
              <div className="font-semibold">{item.title}</div>
              <div className="text-sm opacity-80">{item.org}</div>
              {item.bullets && (
                <ul className="list-disc ps-5 mt-2 space-y-1 text-sm opacity-90">
                  {item.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              )}
              {item.skills && item.skills.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.skills.map((s, j) => (
                    <Badge key={j}>{s}</Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


