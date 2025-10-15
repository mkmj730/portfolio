export type TimelineItem = {
  year: string;
  keyword: string;
  learn: string;
  details?: string[];
  tags?: string[];
};

export const timeline: TimelineItem[] = [
  {
    year: "2017~2019",
    keyword: "리더십/운영",
    learn: "사람과 자원의 우선순위",
    details: [
      "현장에서의 의사결정과 리스크 관리 경험",
      "작은 실패를 빠르게 공유하며 팀 학습 속도 향상",
    ],
    tags: ["리더십", "리스크관리", "우선순위"],
  },
  {
    year: "2020",
    keyword: "신사업(비개발)",
    learn: "가설→실험→검증으로 사업의 뼈대",
    details: [
      "마케팅/디자인/브랜딩 총괄, CRM 퍼널 설계",
      "교육청 신고·개인정보·계약 등 법률 근거 정비",
    ],
    tags: ["CRM", "브랜딩", "법률"],
  },
  {
    year: "2021",
    keyword: "개발 시작",
    learn: "Django + Vanilla JS로 기본기 다지기",
    details: [
      "회원/자산/포인트 등 서버-클라이언트 흐름 구현",
      "MVP 릴리스와 운영을 통해 기초 아키텍처 학습",
    ],
    tags: ["Django", "VanillaJS", "MVP"],
  },
  {
    year: "2022",
    keyword: "Django 확장·실시간 기초",
    learn: "운영 관점의 문서화와 커뮤니케이션",
    details: [
      "Django API 확장 및 거래소(WebSocket) 연동 기초",
      "운영/핸드오버 문서화로 유지보수 체계 정리",
    ],
    tags: ["Django", "API", "WebSocket", "Docs"],
  },
  {
    year: "2023",
    keyword: "Django WebSocket · TradingView · 거래소 API",
    learn: "실시간 데이터 파이프라인과 시각화",
    details: [
      "Django 기반 WebSocket 핸들러와 이벤트 처리",
      "TradingView 연동으로 실시간 차트/오더북 시각화",
      "OKX/Bybit 등 거래소 API 통합 및 에러 핸들링",
    ],
    tags: ["Django", "WebSocket", "TradingView", "Exchange API"],
  },
  {
    year: "2024",
    keyword: "웹·앱 통합, Next.js 도입(연말)",
    learn: "고객 경험과 기술의 결합",
    details: [
      "웹뷰/Capacitor 통합으로 릴리즈 속도 향상",
      "2024년 말 Next.js 전환 시작 및 SEO 체계화",
    ],
    tags: ["Capacitor", "PWA", "Next.js"],
  },
  {
    year: "2025",
    keyword: "Next.js 안정화/성능·운영 고도화",
    learn: "안정성과 속도를 동시에",
    details: [
      "App Router/캐싱/스트리밍 도입 및 성능 튜닝",
      "CI/CD·모니터링·로그 표준화, SEO 고도화",
    ],
    tags: ["Next.js", "Performance", "CI/CD", "SEO"],
  },
];


