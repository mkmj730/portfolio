import ExperienceTimeline from "@/components/ExperienceTimeline";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function AlchemyLabSection() {
  return (
    <section id="alchemylab" className="py-14 sm:py-20">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-7 bg-white/50 dark:bg-white/5">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-md bg-white p-1 shadow-sm ring-1 ring-black/5">
            <Image src="/logos/alchemylab.png" alt="알케미랩 로고" width={56} height={56} />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">㈜ 알케미랩 <span className="opacity-70">| 서비스개발실 실장</span></h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-brand/10 text-brand ring-1 ring-brand/20">핀테크</span>
            </div>
            <div className="mt-1 text-xs sm:text-sm opacity-75">2021.04 ~ 현재 · 서비스 기획 및 프론트엔드 개발 총괄</div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "Zustand", "Capacitor", "OAuth", "IAP"].map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-brand/10 text-brand ring-1 ring-brand/20">#{tag}</span>
          ))}
        </div>

        <div className="mt-6 space-y-10">
          <ExperienceTimeline />
          <Projects />
        </div>
      </div>
    </section>
  );
}


