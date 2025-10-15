import { projects } from "@/contents/profile";
import StackIcons from "./StackIcons";

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-20">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">주요 프로젝트</h2>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((p, idx) => (
          <article
            key={idx}
            className="rounded-2xl p-5 sm:p-6 flex flex-col gap-3 bg-white/60 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10 hover:shadow-sm hover:ring-brand/30 transition"
          >
            <div className="text-[11px] sm:text-xs opacity-70">{p.year}</div>
            <h3 className="text-base sm:text-lg font-semibold tracking-tight">{p.title}</h3>
            <StackIcons stacks={p.stacks} />
            <p className="opacity-90 text-sm leading-relaxed">{p.context}</p>
            <ul className="text-sm list-disc ps-5 space-y-1">
              {p.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
            <blockquote className="text-sm italic opacity-90 border-l-2 pl-3 border-brand/40">{p.insight}</blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}


