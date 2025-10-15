import { projects } from "@/contents/profile";

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">주요 프로젝트</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, idx) => (
          <article key={idx} className="rounded-xl border border-black/10 dark:border-white/10 p-5 flex flex-col gap-3">
            <div className="text-xs opacity-70">{p.year}</div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="opacity-90 text-sm">{p.context}</p>
            <ul className="text-sm list-disc ps-5 space-y-1">
              {p.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
            <blockquote className="text-sm italic opacity-90 border-l-2 pl-3">{p.insight}</blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}


