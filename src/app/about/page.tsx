import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import SectionCard from "@/components/SectionCard";
import ResumeTimeline, { TimelineNode } from "@/components/ResumeTimeline";
import Badge from "@/components/Badge";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import Image from "next/image";

export default function AboutPage() {
  const principles = [
    {
      key: "고객 중심",
      desc: "지표와 인터뷰로 고객의 불안을 먼저 정의합니다.",
    },
    {
      key: "본질 추구",
      desc: "겉기술이 아닌 문제의 핵심 흐름을 설계합니다.",
    },
    {
      key: "가장 쉽게",
      desc: "복잡도를 줄이는 단순한 해법을 우선 적용합니다.",
    },
    {
      key: "1등이 된다",
      desc: "속도와 품질을 높여 사용자가 먼저 추천하게 만듭니다.",
    },
  ];
  const failLogs = [
    {
      title: "소켓 재연결 폭주",
      context: "실시간 데이터 장애 시 무한 재연결로 서버 부하 발생",
      fix: "지수 백오프·상태기반 재시도·스토어 단일화",
      impact: "에러 회복 시간 -63%, 사용자 끊김 체감 감소",
      tags: ["WebSocket", "Retry", "Zustand"],
    },
    {
      title: "중복 트래킹으로 지표 왜곡",
      context: "GA4 이벤트 중복 전송으로 전환/세션 불일치",
      fix: "디바운스·세션키 검증·테스트 플로우 문서화",
      impact: "전환데이터 신뢰도 회복 및 캠페인 최적화 재개",
      tags: ["GA4", "GTM", "QA"],
    },
    {
      title: "상태/서버상태 혼용",
      context: "로컬 상태와 서버 캐시가 섞여 레이스컨디션 발생",
      fix: "Zustand(클라이언트)·React Query(서버) 경계 재정의",
      impact: "버그 리포트 -48%, 렌더 낭비 감소",
      tags: ["State", "React Query", "Architecture"],
    },
    {
      title: "SEO Canonical 누락",
      context: "리스트/상세 중복 인덱싱으로 검색 노출 분산",
      fix: "Canonical/OG 메타 일원화·사이트맵 재생성",
      impact: "상위 키워드 노출 2배, CTR 개선",
      tags: ["SEO", "OG", "Sitemap"],
    },
  ];
  const education: TimelineNode[] = [
    {
      title: "자유전공학부 학사",
      org: "충남대학교",
      period: "2013.03 - 2017.02",
      location: "대전",
      logo: "/logos/cnu.png",
      // bullets: ["데이터 분석 및 정책 의사결정 과목 수료", "리서치 기반 보고서 작성 경험"],
    },
  ];
  const experiences: TimelineNode[] = [
    {
      title: "Software Developer / Front Dev Manager",
      org: "Alchemilab",
      period: "2021.04 - 현재 (4년 7개월)",
      location: "서울",
      logo: "/logos/alchemilab.png",
      bullets: [
        "Next.js 기반 웹·앱 통합(웹뷰/Capacitor) 및 상태관리 고도화",
        "SEO/퍼포먼스 최적화로 유입 및 전환률 개선",
      ],
      skills: ["Next.js", "TypeScript", "Zustand", "React Query", "GA4/GTM"],
    },
    {
      title: "신사업팀장",
      org: "주식회사 강인함",
      period: "2020.02 - 2021.04 (1년 3개월)",
      location: "서울",
      logo: "/logos/kanginham.png",
      bullets: ['신사업 프로젝트 "입시콕" 총괄 및 법률리스크 관리', "웹사이트 총괄 및 CRM 프로세스 구축"],
      skills: ["WordPress", "CRM", "브랜딩"],
    },
    {
      title: "소대장",
      org: "수도기계화보병사단",
      period: "2017.03 - 2019.07 (2년 5개월)",
      location: "경기도 가평",
      logo: "/logos/army.svg",
      bullets: ["인력/자원 관리 및 리더십"],
      skills: ["인력관리", "리스크관리"],
    },
  ];
  const certificates: TimelineNode[] = [
    {
      title: "투자자산운용사",
      org: "금융투자협회",
      period: "2024년 6월 | 식별번호 24-010053",
      logo: "/certs/investment.svg",
      bullets: ["포트폴리오 이론 및 리스크 관리"],
    },
    {
      title: "SQLD",
      org: "한국데이터산업진흥원",
      period: "2023년 7월 | 식별번호 SQLD-049006432",
      logo: "/certs/sqld.svg",
      bullets: ["데이터 모델링 및 SQL 최적화"],
    },
  ];
  return (
    <div>
      <Section title="About me" subtitle={profile.tagline}>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          <SectionCard className="flex flex-col items-center justify-center">
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden ring-8 ring-black/5 dark:ring-white/10 shadow-md">
                <Image src="/images/profile.png" alt="김명재 프로필 사진" fill className="object-cover" />
              </div>
              <div className="mt-4 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2">
                    <span className="text-base">👤</span>
                    <div className="text-sm opacity-90"><span className="font-semibold">이름</span> 김명재</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2">
                    <span className="text-base">🎂</span>
                    <div className="text-sm opacity-90"><span className="font-semibold">생년월일</span> 1994.07.30</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2">
                    <span className="text-base">🧭</span>
                    <div className="text-sm opacity-90"><span className="font-semibold">MBTI</span> ENFP</div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2">
                    <span className="text-base">⏳</span>
                    <div className="text-sm opacity-90"><span className="font-semibold">경력</span> 5년</div>
                  </div>                  
                  <div className="flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2 sm:col-span-2">
                    <span className="text-base">💻</span>
                    <div className="text-sm opacity-90"><span className="font-semibold">직무</span> 프론트엔드 개발자</div>
                  </div>
                </div>
              </div>
          </SectionCard>
          <SectionCard className="md:col-span-2" title="소개" subtitle="문제정의 → 해결 → 신뢰 시각화">
            <p className="opacity-90 text-sm mb-5">
              가상자산·핀테크 분야에서 기획부터 개발, 배포까지 전 과정을 경험한 프론트엔드 개발자입니다. 사용자의 불안과 불편을
              기술로 덜어내는 데 집중합니다.
            </p>
            <span className="font-semibold text-sm">🚀 킥오프</span> 
            <p className="opacity-90 text-sm mb-5">
              모든 프로젝트는 “왜 이 일을 하는가, 누구를 위한가”라는 질문에서 시작합니다.
              기술을 선택하기 전에 목적을 먼저 정의하고, 그 목적이 팀과 고객의 방향성과 맞는지부터 확인합니다.
            </p>
            <span className="font-semibold text-sm">🧭 추진</span> 
            <p className="opacity-90 text-sm mb-5">
              흔들리지 않는 유스케이스와 가설을 세운 뒤, 관련 서비스와 레퍼런스를 신속히 조사합니다.
              핵심 UI/UX를 프로토타입으로 구현해 ‘손에 잡히는 형태’로 검증하고, 그 결과를 바탕으로 구체적인 기획과 개발 전략을 수립합니다.
              이후 디자이너, 기획자, 개발팀과 함께 방향을 정교화하며 완성도를 높여갑니다.
            </p>
            <span className="font-semibold text-sm">⚙ 개발</span> 
            <p className="opacity-90 text-sm mb-5">
              Next.js, TypeScript, Zustand, Tailwind, Capacitor 기반의 하이브리드 앱(PWA/Android/iOS)을
              개발하며 사용자 중심의 인터랙션과 안정적인 배포 환경을 구현해왔습니다. 기획과 구현을 모두 경험했기에, 기술적 의사결정과
              사용자 경험 개선을 균형 있게 이끌 수 있습니다.
            </p>
            <p className="opacity-90 text-sm mt-3">
              “기술은 문제를 해결하지만, 고객은 결국 불안을 해결받고 싶어한다.” 저는 그 교차점에서 신뢰를 만드는 프론트엔드 개발자입니다.
            </p>
          </SectionCard>

          <SectionCard className="md:col-span-3" title="일의 4원칙" subtitle="고객 → 본질 → 단순 → 1등">
            <div className="grid sm:grid-cols-2 gap-3">
              {principles.map((p, i) => (
                <div key={p.key} className="rounded-xl border border-black/10 dark:border-white/10 p-3 bg-white/50 dark:bg-white/0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center justify-center size-5 rounded-full bg-brand/90 text-white text-[11px] font-semibold">
                      {i + 1}
                    </span>
                    <div className="text-sm font-semibold">{p.key}</div>
                  </div>
                  <p className="text-sm opacity-90">{p.desc}</p>
                </div>
              ))}
            </div>
          </SectionCard>
          <SectionCard className="md:col-span-3" title="스킬 맵">
            <div className="grid sm:grid-cols-2 gap-3">
              {skills.map((g, i) => (
                <div key={i} className="rounded-xl border border-black/10 dark:border-white/10 p-3">
                  <div className="text-sm font-semibold mb-2">{g.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((it, j) => (
                      <span key={j} className="px-2 py-1 text-xs rounded-md bg-black/5 dark:bg-white/10">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </Section>
      <Section title="삽질에서 배운 것" subtitle="실패 기록 → 재발 방지 → 속도 향상">
        <div className="grid md:grid-cols-2 gap-6">
          {failLogs.map((f) => (
            <SectionCard key={f.title} title={f.title} subtitle={f.context} className="bg-gray-50 dark:bg-white/5 rounded-xl">
              <ul className="list-disc ps-5 text-sm opacity-90 space-y-1">
                <li><span className="font-semibold">해결</span>: {f.fix}</li>
                <li><span className="font-semibold">임팩트</span>: {f.impact}</li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {f.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </SectionCard>
          ))}
        </div>
      </Section>
      <Section title="경력" subtitle="임팩트를 만든 경험">
        <SectionCard className="bg-gray-50 dark:bg-white/5 rounded-xl">
          <ResumeTimeline items={experiences} />
        </SectionCard>
      </Section>     
      <Section title="자격증/수료" subtitle="검증된 역량">
        <SectionCard className="bg-gray-50 dark:bg-white/5 rounded-xl">
          <ResumeTimeline items={certificates} />
        </SectionCard>
      </Section>       
      <Section title="학력" subtitle="배움의 기반">
        <SectionCard className="bg-gray-50 dark:bg-white/5 rounded-xl">
          <ResumeTimeline items={education} />
        </SectionCard>
      </Section>
      <Section title="Timeline" subtitle="지속적인 성장">
        <Timeline />
      </Section>
    </div>
  );
}


