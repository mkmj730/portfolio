import Section from "@/components/Section";
import KangInHamSection from "@/components/KangInHam";
import AlchemiLabSection from "@/components/AlchemiLab";

export default function ExperiencePage() {
  return (
    <div>
      <Section title="Experience" subtitle="역할과 KPI에 집중">
        <div className="">
          <p className="opacity-90 text-sm sm:text-base leading-relaxed">
            <span className="inline-block size-2 rounded-full bg-brand mr-3" />
            <span className="font-semibold">문제를 데이터로 드러내고</span> 기술로 해결해, <span className="font-semibold">고객의 불안을 줄이는 결과</span>를 만들어 왔습니다.
          </p>
          <ul className="mt-3 list-disc ps-5 space-y-1 text-sm opacity-90">
            <li>Next.js + Capacitor 웹·앱 통합, 스토어 런칭 및 MAU 100+</li>
            <li>TradingView 실시간 시각화, WebSocket 구조 설계·최적화</li>
            <li>OAuth·IAP·세션 관리 설계로 인증·결제 경험 안정화</li>
            <li>SEO·CRM 자동화·광고 트래킹으로 KPI 기반 개선 리드</li>
          </ul>
        </div>
      </Section>
      <AlchemiLabSection />
      <KangInHamSection />
    </div>
  );
}


