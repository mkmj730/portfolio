import { kangInHam } from "@/contents/profile";

export default function KangInHamSection() {
  return (
    <section id="kanginham" className="py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">{kangInHam.company} | {kangInHam.title}</h2>
      <div className="opacity-80 text-sm mb-6">{kangInHam.period} · {kangInHam.type}</div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <div className="font-semibold mb-2">주요 수행 업무</div>
          <ul className="list-disc ps-5 space-y-1 text-sm opacity-90">
            {kangInHam.duties.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-black/10 dark:border-white/10 p-4">
          <div className="font-semibold mb-2">주요 성과</div>
          <ul className="list-disc ps-5 space-y-1 text-sm opacity-90">
            {kangInHam.outcomes.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </div>
      </div>
      <blockquote className="mt-6 text-sm sm:text-base italic opacity-90 border-l-2 pl-3">
        {kangInHam.insight}
      </blockquote>
    </section>
  );
}


