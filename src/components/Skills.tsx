import { strengths } from "@/contents/profile";

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8">핵심 역량</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {strengths.map((group, idx) => (
          <div key={idx} className="rounded-lg border border-black/10 dark:border-white/10 p-4">
            <div className="font-semibold mb-2">{group.section}</div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((it, i) => (
                <span key={i} className="px-2 py-1 text-xs rounded-md bg-black/5 dark:bg-white/10">
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


