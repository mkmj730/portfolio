import Section from "@/components/Section";
import KangInHamSection from "@/components/KangInHam";
import AlchemiLabSection from "@/components/AlchemiLab";

export default function ExperiencePage() {
  return (
    <div>
      <Section title="Experience" subtitle="회사별 역할과 KPI">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
          <p className="opacity-90 text-sm">회사별 상세는 아래 섹션에서 확인할 수 있습니다.</p>
        </div>
      </Section>
      <KangInHamSection />
      <AlchemiLabSection />
    </div>
  );
}


