import ExperienceTimeline from "@/components/ExperienceTimeline";
import Projects from "@/components/Projects";

export default function AlchemyLabSection() {
  return (
    <section id="alchemylab" className="py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">㈜ 알케미랩 | 서비스개발실 실장</h2>
      <p className="opacity-80 text-sm mb-6">2021.04 ~ 현재 · 서비스 기획 및 프론트엔드 개발 총괄</p>
      <div className="space-y-10">
        <ExperienceTimeline />
        <Projects />
      </div>
    </section>
  );
}


