import { narrative } from "@/contents/profile";

export default function StoryStepper() {
  return (
    <section id="story" className="py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">{narrative.headline}</h2>
      <p className="opacity-80 mb-8">{narrative.bridge}</p>
      <ol className="relative border-s border-black/10 dark:border-white/10">
        {narrative.steps.map((s, i) => (
          <li key={i} className="ms-6 py-5">
            <span className="absolute -start-2 mt-2 size-5 rounded-full bg-foreground/90" />
            <div className="flex flex-col gap-1">
              <div className="text-sm font-semibold opacity-80">{s.key}</div>
              <div className="text-base sm:text-lg font-semibold">{s.summary}</div>
              <p className="opacity-90 text-sm">{s.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}


