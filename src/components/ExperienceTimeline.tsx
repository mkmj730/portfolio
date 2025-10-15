import { projects } from "@/contents/profile";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-10 sm:py-14">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">성장 스토리 타임라인</h2>
      <ol className="relative border-s border-brand/15">
        {projects.map((p, idx) => (
          <li key={idx} className="ms-6 py-5">
            <span className="absolute -start-2 mt-2 size-4 rounded-full bg-brand ring-4 ring-brand/15" />
            <div className="flex flex-col gap-2.5">
              <div className="text-xs opacity-70">{p.year}</div>
              <h3 className="text-base sm:text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="opacity-90 text-sm leading-relaxed">{p.context}</p>
              <div className="grid sm:grid-cols-3 gap-2.5">
                <Card title="핵심 역할" items={p.roles} />
                <Card title="문제 해결·성장" items={p.learnings} highlight />
                <Card title="성과" items={p.outcomes} />
              </div>
              <blockquote className="text-sm italic opacity-90 border-l-2 pl-3 border-brand/40">
                {p.insight}
              </blockquote>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Card({ title, items, highlight }: { title: string; items: string[]; highlight?: boolean }) {
  return (
    <div className={`rounded-lg p-4 ${highlight ? "bg-brand/10 ring-1 ring-brand/15" : "bg-white/50 dark:bg-white/5"}`}>
      <div className="text-xs font-semibold mb-2 opacity-90">{title}</div>
      <ul className="list-disc ps-5 space-y-1 text-sm opacity-90">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}


