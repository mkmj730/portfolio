export const profile = {
  name: "김명재",
  title: "Frontend Developer",
  birth: "1994.07.30",
  education: "충남대학교 자유전공학부 (2013~2016)",
  totalExp: "6년",
  role: "Frontend Developer (토스뱅크 FE 챕터)"
};

export const narrative = {
  headline: "기획→기술→도메인→고객",
  steps: [
    {
      key: "기획",
      summary: "문제를 정의하는 힘: 강인함에서 배운 '문제 발견'의 태도",
      detail:
        "데이터 기반 KPI 설정, CRM 자동화, SEO/광고 트래킹으로 문제를 가시화하고 우선순위를 정하는 사고를 체득"
    },
    {
      key: "기술",
      summary: "기술로 해결하는 실행력",
      detail:
        "Django→React/Next.js 전환, WebSocket/상태관리/시각화로 문제 해결의 도구상자 확장"
    },
    {
      key: "도메인",
      summary: "맥락을 이해하는 설계",
      detail:
        "금융/트레이딩 도메인 학습과 결산·옵션·자문형 흐름 이해로 사용자의 실제 작업 맥락을 반영"
    },
    {
      key: "고객",
      summary: "불안을 줄이는 경험",
      detail:
        "실사용자 인터뷰·지표 기반 개선으로 '보이는 신뢰(시각화)'와 '매끄러운 흐름(성능/세션/배포)' 구현"
    }
  ],
  bridge:
    "강인함에서 문제를 발견하는 방법을 배웠고, 알케미랩에서 문제를 해결하는 방법을 배웠다.",
  closing:
    "지금 나는 ‘사용자의 불안을 기술로 해결하는 개발자’로 성장 중이다."
};

export type Project = {
  year: string;
  title: string;
  context: string;
  roles: string[];
  learnings: string[];
  outcomes: string[];
  insight: string;
  stacks?: string[]; // 기술 스택 키 값 목록 (아이콘 렌더링용)
};

export const projects: Project[] = [
  {
    year: "2024~2025",
    title: "일임형 로보어드바이저 ‘Z****’ App 개발 리드",
    context: "Next.js + Capacitor 웹·앱 통합, OAuth/IAP/SEO 리드",
    roles: [
      "디바이스/브라우저 호환 해결",
      "Zustand persist로 인증·세션 관리",
      "500명 인터뷰로 가치 재발견"
    ],
    learnings: [
      "고객 가치 전달 구조 재정의",
      "실사용자 피드백 기반 UX 개선"
    ],
    outcomes: [
      "MAU 100+, 만족도 91%",
      "웹-앱 통합 배포 및 스토어 런칭",
      "핵심 메시지 수립"
    ],
    insight: "기술은 문제를 해결, 고객은 불안을 해결받고 싶어 한다"
  },
  {
    year: "2023",
    title: "헷지펀드 매니징 서비스 & 거래소 ‘E***’ 개발 리드",
    context: "OKX→Bybit API 확장, 절차형 소켓 구조를 핸들러 중심으로 재설계",
    roles: [
      "비동기 최적화 및 데이터 흐름 개선",
      "상태관리 필요성 인식 및 구조화"
    ],
    learnings: [
      "async/await, Promise 체계",
      "렌더링 부하 개선과 UX의 상관",
      "React/Next.js, Zustand 학습 동기"
    ],
    outcomes: [
      "거래 처리속도 60% 향상",
      "렌더링 부하 대폭 개선"
    ],
    insight: "효율적인 코드가 곧 UX"
  },
  {
    year: "2022~2023",
    title: "자문형 크립토 서비스 ‘S***’",
    context: "Binance 연동 자문형 자동운용, TradingView 도입",
    roles: [
      "TradingView 실시간 시각화 인터페이스",
      "WebSocket 데이터 실시간 연결",
      "환경 분리 및 CI/CD 적용"
    ],
    learnings: [
      "데이터 시각화 UX 구현",
      "실시간 연결 구조 이해",
      "배포 체계 고도화"
    ],
    outcomes: [
      "실시간 차트 기반 플랫폼 런칭",
      "리텐션 30% 증가"
    ],
    insight: "데이터는 보여지는 순간 신뢰가 된다"
  },
  {
    year: "2022",
    title: "커스텀 크립토 MTS ‘R***’ / 펀드 매니징 시스템",
    context: "Deribit API 기반 Django + WebSocket 구조",
    roles: [
      "WebSocket 핸들러 및 송수신 구조 설계",
      "비개발자 대상 UI/UX 설계 및 납품",
      "문서화/인수인계 체계화"
    ],
    learnings: [
      "WebSocket 구조·이벤트 관리",
      "불친절한 API Docs 분석 집요함",
      "트레이더 업무 맥락 이해 및 커뮤니케이션"
    ],
    outcomes: [
      "Deribit 모바일 출시 전 MVP 납품",
      "유지보수 매뉴얼화로 대응 효율 향상"
    ],
    insight: "기술을 설명할 수 있어야 진짜 이해"
  },
  {
    year: "2021",
    title: "Hedge Fund 서비스 ‘ZOLBO’ 총괄 기획 및 런칭",
    context: "금융 도메인 지식이 전무한 상태에서 1일 결산 로직 설계 및 MVP 런칭",
    roles: [
      "엑셀 기반 1일 단위 결산 로직 설계",
      "Django + Vanilla JS로 회원/자산/포인트 구현",
      "Chart.js 성과 시각화"
    ],
    learnings: [
      "금융 데이터 구조·결산 개념 집중 학습",
      "모르는 걸 빠르게 흡수/정리하는 방법",
      "도메인 이해력이 완성도를 좌우"
    ],
    outcomes: [
      "3개월 MVP: 누적 운용액 1.5억",
      "1일 결산 자동화 및 포인트 차감 시스템"
    ],
    insight: "질문은 성장의 언어다. 기술이 아닌 문제를 해결"
  }
];

export const strengths = [
  { section: "Frontend", items: ["React", "Next.js", "TypeScript", "Zustand", "Tailwind", "React Query"] },
  { section: "Mobile", items: ["Capacitor", "PWA", "OAuth", "In-App Purchase"] },
  { section: "Backend/Infra", items: ["Django REST", "Docker", "AWS", "CI/CD"] },
  { section: "기획/디자인", items: ["Figma", "Builder.io", "Adobe XD", "Photoshop"] },
  { section: "데이터/마케팅", items: ["GA4", "GTM", "SEO", "AEO", "광고 분석"] }
];

export const kangInHam = {
  company: "㈜ 강인함",
  title: "신사업팀장",
  period: "2020.02 ~ 2021.04",
  type: "온라인 교육 스타트업 (입시·컨설팅 기반 신규사업)",
  role: "신사업 기획·개발·마케팅 총괄",
  duties: [
    "WordPress 기반 홈페이지 개발/운영 (SEO 구조화)",
    "브랜드 디자인(랜딩/배너/포스터) 제작",
    "Google Spreadsheet CRM 자동화(상담/결제/등록/피드백)",
    "GA4 & GTM 전환/상담/경로 트래킹 설계",
    "네이버/카카오/구글 광고 운영 및 ROAS 최적화",
    "교육청 신고, 계약서, 개인정보 보호정책 수립"
  ],
  outcomes: [
    "웹사이트 트래픽 월 1,000 → 3,200명 (3.2배)",
    "광고 전환율 2.1% → 4.3% (+104%)",
    "CRM 응답속도 1.8일 → 0.7일 (60% 단축)",
    "고객 유지율 +15%",
    "분기 매출 2.5배 / 월평균 +178% 성장",
    "GA4+GTM+CRM 연동으로 KPI 기반 의사결정 정착"
  ],
  insight:
    "스타트업은 문제의 집합, 해결책은 배워서 직접 만드는 것. 배워서 해결하는 자세가 개발 전향의 출발점"
};


