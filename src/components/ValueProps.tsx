import Section from "./Section";

const items = [
  {
    title: "비즈니스 임팩트 중심",
    desc: "지표로 문제를 정의하고, 고객의 불안을 줄이는 흐름을 설계합니다.",
  },
  {
    title: "웹·앱 통합 실행력",
    desc: "Next.js와 Capacitor로 하나의 코드베이스에서 제품을 운영합니다.",
  },
  {
    title: "실시간·시각화 강점",
    desc: "WebSocket과 차트로 데이터를 신뢰로 전환합니다.",
  },
];

export default function ValueProps() {
  return (
    <Section id="value" subtitle="일하는 기준" title="핵심 가치">
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        {items.map((it, i) => (
          <div key={i} className="rounded-xl p-5 bg-white/50 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
            <h3 className="text-base sm:text-lg font-semibold mb-1.5 tracking-tight">{it.title}</h3>
            <p className="text-sm opacity-90 leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}


