import { kangInHam } from "@/contents/profile";
import Image from "next/image";

export default function KangInHamSection() {
  return (
    <section id="kanginham" className="py-14 sm:py-20">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-7 bg-white/50 dark:bg-white/5">
        <div className="flex items-start gap-4">
          <div className="shrink-0 rounded-md bg-white p-1 shadow-sm ring-1 ring-black/5">
            <Image src="/logos/kanginham.png" alt="강인함 로고" width={56} height={56} />
          </div>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                {kangInHam.company} <span className="opacity-70">| {kangInHam.title}</span>
              </h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-brand/10 text-brand ring-1 ring-brand/20">
                스타트업
              </span>
            </div>
            <div className="mt-1 text-xs sm:text-sm opacity-75 flex flex-wrap items-center gap-2">
              <span>{kangInHam.period}</span>
              <span className="h-1 w-1 rounded-full bg-foreground/40 inline-block align-middle" />
              <span>{kangInHam.type}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-white/0">
            <div className="text-sm font-semibold mb-2 flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-brand" />
              주요 수행 업무
            </div>
            <ul className="list-disc ps-5 space-y-1 text-sm opacity-90">
              {kangInHam.duties.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-4 bg-white/60 dark:bg-white/0">
            <div className="text-sm font-semibold mb-2 flex items-center gap-2">
              <span className="inline-block size-2 rounded-full bg-brand" />
              주요 성과
            </div>
            <ul className="list-disc ps-5 space-y-1 text-sm opacity-90">
              {kangInHam.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "SEO", "CRM 자동화", "광고 최적화", "데이터 기반 KPI", "브랜딩"
          ].map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-xs rounded-md bg-brand/10 text-brand ring-1 ring-brand/20">#{tag}</span>
          ))}
        </div>

        <blockquote className="mt-6 text-sm sm:text-base italic opacity-90 border-l-2 pl-3 border-brand/50">
          {kangInHam.insight}
        </blockquote>
      </div>
    </section>
  );
}


