import { projects } from "@/contents/profile";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">성장 스토리 타임라인</h2>
      <ol className="relative border-s border-black/10 dark:border-white/10">
        {projects.map((p, idx) => (
          <li key={idx} className="ms-6 py-6">
            <span className="absolute -start-3 mt-2 size-5 rounded-full bg-foreground/90" />
            <div className="flex flex-col gap-3">
              <div className="text-sm opacity-70">{p.year}</div>
              <h3 className="text-lg sm:text-xl font-semibold">{p.title}</h3>
              <p className="opacity-90">{p.context}</p>
              <div className="grid sm:grid-cols-3 gap-3">
                <Card title="핵심 역할" items={p.roles} />
                <Card title="문제 해결·성장" items={p.learnings} />
                <Card title="성과" items={p.outcomes} />
              </div>
              <blockquote className="text-sm sm:text-base italic opacity-90 border-l-2 pl-3">
                {p.insight}
              </blockquote>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
      <div className="text-sm font-semibold mb-2">{title}</div>
      <ul className="list-disc ps-5 space-y-1 text-sm opacity-90">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}


