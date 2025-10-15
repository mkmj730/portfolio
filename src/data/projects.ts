export type CaseBlock = { title: string; md: string };
export type Project = {
  slug: string;
  title: string;
  period: string;
  role: string[];
  stack: string[];
  team?: string;
  domain?: string[];
  summary: string;
  cover: string;
  gallery: string[];
  highlights: string[];
  case: {
    problem: CaseBlock;
    goals: CaseBlock;
    solution: CaseBlock;
    impact: CaseBlock;
    learnings?: CaseBlock;
  };
};

export const projects: Project[] = [
  {
    slug: "zolbo-hedge-fund-2021",
    title: "ZOLBO Hedge Fund — 일일 결산 자동화와 신뢰의 시각화",
    period: "2021",
    role: ["기획", "프론트엔드"],
    stack: ["Django", "Vanilla JS", "Chart.js"],
    team: "2-3명",
    domain: ["FinTech", "Asset Mgmt"],
    summary:
      "도메인 제로에서 시작해 1일 결산/포인트 차감 자동화, 초기 신뢰를 만든 MVP.",
    cover: "/covers/zolbo-2021.png",
    gallery: ["/mockups/zolbo-2021-1.png", "/mockups/zolbo-2021-2.png"],
    highlights: ["MVP 3개월 1,000명", "누적 운용액 3.5억", "결산 자동화"],
    case: {
      problem: {
        title: "문제",
        md: "초기 펀드 서비스에 **신뢰 가능한 일일 결산**이 부재. 수동 처리로 오류와 지연 발생.",
      },
      goals: {
        title: "목표",
        md: "결산 자동화와 **성과의 시각화**로 초반 신뢰 확보, 운영 비용 절감.",
      },
      solution: {
        title: "해결",
        md: "- 엑셀 결산 스키마 → Django 모델 변환\n- 포인트 차감 로직/CRON 자동화\n- Chart.js로 성과 시각화\n- (비개발자 설명) 숫자의 흐름을 눈으로 확인 가능하게 설계",
      },
      impact: {
        title: "성과",
        md: "- 런칭 3개월 1,000명 가입 / 운용액 3.5억\n- 수작업 결산 시간 **90%↓**\n- 초기 이탈률 **감소**",
      },
      learnings: {
        title: "인사이트",
        md: "“질문은 성장의 언어다.” 도메인 이해가 기능보다 우선한다.",
      },
    },
  },
  {
    slug: "r-custom-mts-2022",
    title: "커스텀 크립토 MTS ‘R***’ — 실시간 WS와 문서화",
    period: "2022",
    role: ["프론트엔드"],
    stack: ["Django", "WebSocket", "Vanilla JS"],
    domain: ["Crypto", "Trading"],
    summary: "Deribit API 기반 실시간 구조, 비개발자 고객 납품을 위한 문서화.",
    cover: "/covers/r-2022.png",
    gallery: ["/mockups/r-2022-1.png"],
    highlights: ["Deribit 모바일 출시 전 MVP 납품", "인수인계 매뉴얼화"],
    case: {
      problem: { title: "문제", md: "실시간 체결/호가 데이터 수집과 UI 반영의 일관성 부족." },
      goals: { title: "목표", md: "안정적인 WS 핸들러 구조와 고객이 이해 가능한 문서화." },
      solution: {
        title: "해결",
        md: "- 소켓 핸들러/이벤트 체계 설계\n- UI 상태 전파 규칙 수립\n- 인수인계 문서/가이드 정리",
      },
      impact: { title: "성과", md: "- MVP 납품 성공\n- 유지보수 대응 속도 개선" },
      learnings: { title: "인사이트", md: "설명할 수 있을 때 비로소 이해한 것." },
    },
  },
  {
    slug: "s-advisory-2022-2023",
    title: "자문형 크립토 ‘S***’ — 실시간 시각화와 리텐션",
    period: "2022~2023",
    role: ["프론트엔드"],
    stack: ["Binance", "TradingView", "WebSocket", "CI/CD"],
    domain: ["Crypto", "Advisory"],
    summary: "TradingView 도입과 실시간 연결로 시각화 중심 UX 구현.",
    cover: "/covers/s-2023.png",
    gallery: ["/mockups/s-2023-1.png"],
    highlights: ["리텐션 30%↑", "실시간 차트 인터페이스"],
    case: {
      problem: { title: "문제", md: "자문형 흐름에서 데이터 신뢰/가시성 부족." },
      goals: { title: "목표", md: "실시간 시각화로 신뢰 체감도 향상." },
      solution: {
        title: "해결",
        md: "- TradingView 위젯/레이어 커스터마이즈\n- 사용자별 차트 요소 구성\n- 환경 분리와 자동배포",
      },
      impact: { title: "성과", md: "- 리텐션 **30% 증가**\n- 실시간 차트 기반 의사결정" },
      learnings: { title: "인사이트", md: "데이터는 보여지는 순간 신뢰가 된다." },
    },
  },
  {
    slug: "e-exchange-2023",
    title: "‘E***’ 거래소 — WS 재설계로 60% 처리속도 향상",
    period: "2023",
    role: ["프론트엔드"],
    stack: ["OKX", "Bybit", "WebSocket", "React/Next"],
    domain: ["Exchange"],
    summary: "절차형 WS를 핸들러 중심 구조로 재설계해 성능/안정성 개선.",
    cover: "/covers/e-2023.png",
    gallery: ["/mockups/e-2023-1.png"],
    highlights: ["거래 처리속도 60%↑", "렌더링 부하 개선"],
    case: {
      problem: { title: "문제", md: "WS 부하로 브라우저 다운/지연." },
      goals: { title: "목표", md: "비동기 최적화와 데이터 흐름 효율화." },
      solution: {
        title: "해결",
        md: "- 핸들러 기반 스트림 병합\n- 상태관리 도입\n- 렌더링 최적화",
      },
      impact: { title: "성과", md: "- 처리속도 **60%↑**\n- 안정성 향상" },
      learnings: { title: "인사이트", md: "효율적인 코드가 곧 UX." },
    },
  },
  {
    slug: "z-robo-2024-2025",
    title: "일임형 로보어드바이저 ‘Z****’ — 웹·앱 통합과 사용자 신뢰",
    period: "2024~2025",
    role: ["프론트엔드", "기획"],
    stack: ["Next.js", "Capacitor", "OAuth", "IAP"],
    domain: ["Robo-Advisor"],
    summary: "웹·앱 통합(PWA+iOS/AOS)과 인증/세션/스토어 런칭까지 리드.",
    cover: "/covers/z-2025.png",
    gallery: ["/mockups/z-2025-1.png"],
    highlights: ["DAU 2,800", "만족도 91%", "스토어 런칭"],
    case: {
      problem: { title: "문제", md: "다양한 디바이스/브라우저에서 경험 파편화." },
      goals: { title: "목표", md: "일관된 인증/세션과 UI 흐름으로 불안 최소화." },
      solution: {
        title: "해결",
        md: "- OAuth/IAP 구현\n- Zustand persist로 인증·세션 관리\n- SEO/AEO 최적화",
      },
      impact: { title: "성과", md: "- DAU **2,800**\n- 만족도 **91%**\n- 웹·앱 통합 배포/스토어 런칭" },
      learnings: { title: "인사이트", md: "기술은 문제를 해결, 고객은 불안을 해결받고 싶어 한다." },
    },
  },
];


