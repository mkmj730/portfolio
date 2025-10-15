import Section from "@/components/Section";
import Timeline from "@/components/Timeline";
import SectionCard from "@/components/SectionCard";
import ResumeTimeline, { TimelineNode } from "@/components/ResumeTimeline";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import Image from "next/image";

export default function AboutPage() {
  const education: TimelineNode[] = [
    {
      title: "공공안전학전공 학사",
      org: "충남대학교",
      period: "2013.03 - 2017.02",
      location: "대전",
      logo: "/logos/cnu.png",
      bullets: ["데이터 분석 및 정책 의사결정 과목 수료", "리서치 기반 보고서 작성 경험"],
    },
  ];
  const experiences: TimelineNode[] = [
    {
      title: "Software Developer / Front Dev Manager",
      org: "Alchemylab",
      period: "2021.04 - 현재 (4년 7개월)",
      location: "서울",
      logo: "/logos/alchemylab.png",
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
      bullets: ['신사업 프로젝트 "입시굿" 총괄 및 법률리스크 관리', "웹사이트 총괄 및 CRM 프로세스 구축"],
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
      logo: "/certs/investment.png",
      bullets: ["포트폴리오 이론 및 리스크 관리"],
    },
    {
      title: "SQLD",
      org: "한국데이터산업진흥원",
      period: "2023년 7월 | 식별번호 SQLD-049006432",
      logo: "/certs/sqld.png",
      bullets: ["데이터 모델링 및 SQL 최적화"],
    },
  ];
  return (
    <div>
      <Section title="About me" subtitle={profile.tagline}>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <SectionCard className="md:col-span-2" title="소개" subtitle="문제정의 → 해결 → 신뢰 시각화">
            <p className="opacity-90 text-sm">
              사용자의 불안과 비효율을 줄이는 데 집중합니다. 웹·앱 통합(웹뷰/Capacitor), 상태관리 구조화(Zustand/React Query),
              데이터 기반 의사결정(GA4/GTM/SEO)으로 제품의 성장 지표를 개선해 왔습니다.
            </p>
          </SectionCard>
          <SectionCard className="flex justify-center">
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden ring-8 ring-black/5 dark:ring-white/10 shadow-md">
              <Image src="/images/profile.png" alt="김명재 프로필 사진" fill className="object-cover" />
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
      <Section title="학력" subtitle="배움의 기반">
        <SectionCard>
          <ResumeTimeline items={education} />
        </SectionCard>
      </Section>
      <Section title="경력" subtitle="임팩트를 만든 경험">
        <SectionCard>
          <ResumeTimeline items={experiences} />
        </SectionCard>
      </Section>
      <Section title="자격증/수료" subtitle="검증된 역량">
        <SectionCard>
          <ResumeTimeline items={certificates} />
        </SectionCard>
      </Section>
      <Section title="Timeline" subtitle="배운 점의 흐름">
        <Timeline />
      </Section>
    </div>
  );
}


