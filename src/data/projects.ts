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
    title: "가상자산 투자 일임형 서비스 쫄보 — 일일 결산 자동화와 신뢰의 시각화",
    period: "2021",
    role: ["기획", "프론트엔드"],
    stack: ["Django", "Vanilla JS", "Chart.js"],
    team: "2-3명",
    domain: ["FinTech", "Asset Mgmt"],
    summary:
      "도메인 제로에서 시작해 1일 결산/포인트 차감 자동화, 초기 신뢰를 만든 MVP.",
    cover: "/covers/zolbo-2021.png",
    gallery: ["/zolbo_web/zolbo-2021-0.png", "/zolbo_web/zolbo-2021-1.png", "/zolbo_web/zolbo-2021-2.png", "/zolbo_web/zolbo-2021-3.png", "/zolbo_web/zolbo-2021-4.png", "/zolbo_web/zolbo-2021-5.png", "/zolbo_web/zolbo-2021-6.png", "/zolbo_web/zolbo-2021-7.png"],
    highlights: ["MVP 3개월 1,000명", "누적 운용액 3.5억", "결산 자동화"],
    case: {
      problem: {
        title: "문제",
        md: "초기 펀드 서비스에 신뢰 가능한 일일 결산이 부재. 수동 처리로 오류와 지연 발생.",
      },
      goals: {
        title: "목표",
        md: "결산 자동화와 성과의 시각화로 초반 신뢰 확보, 운영 비용 절감.",
      },
      solution: {
        title: "해결",
        md: "- 엑셀 결산 스키마 → Django 모델 변환\n- 포인트 차감 로직/CRON 자동화\n- Chart.js로 성과 시각화\n- (비개발자 설명) 숫자의 흐름을 눈으로 확인 가능하게 설계",
      },
      impact: {
        title: "성과",
        md: "- 런칭 3개월 1,000명 가입 / 누적 운용액 3.5억\n- 수작업 결산 시간 90%↓\n- 초기 이탈률 감소",
      },
      learnings: {
        title: "인사이트",
        md: "“질문은 성장의 언어다.” 도메인 이해가 기능보다 우선한다.",
      },
    },
  },
  {
    slug: "r-custom-mts-2022",
    title: "커스텀 크립토 MTS ‘Ragnar’ — 실시간 WS와 문서화",
    period: "2022",
    role: ["프론트엔드"],
    stack: ["Django", "WebSocket", "Vanilla JS", "Docker", "AWS EC2"],
    domain: ["Crypto", "Trading"],
    summary: "Deribit API 기반 실시간 구조, 비개발자 고객 납품을 위한 문서화.",
    cover: "/covers/ragnar.png",
    gallery: ["/ragnar/r-2022-0.png", "/ragnar/r-2022-1.png", "/ragnar/r-2022-2.png", "/ragnar/r-2022-3.png", "/ragnar/r-2022-4.png", "/ragnar/r-2022-5.png"],
    highlights: [
      "실시간 처리속도 45%↑",
      "주문 응답 700→300ms",
      "Docker+EC2 운영비 20%↓",
      "Deribit 모바일 출시 전 MVP 납품"
    ],
    case: {
      problem: { title: "문제", md: "실시간 체결/호가 데이터 수집과 UI 반영의 일관성 부족." },
      goals: { title: "목표", md: "안정적인 WS 핸들러 구조와 고객이 이해 가능한 문서화." },
      solution: {
        title: "해결",
        md: "- 소켓 핸들러/이벤트 체계 설계\n- UI 상태 전파 규칙 수립\n- Docker 기반 개발/운영 환경 분리\n- AWS EC2 배포 자동화\n- 인수인계 문서/가이드 정리",
      },
      impact: {
        title: "성과",
        md: "- 실시간 처리속도 45% 향상\n- 주문 응답 700ms→300ms\n- 인프라 전환으로 운영비 20% 절감\n- MVP 납품 및 운영 안정성 확보",
      },
      learnings: { title: "인사이트", md: "설명할 수 있을 때 비로소 이해한 것." },
    },
  },
  {
    slug: "s-advisory-2022-2023",
    title: "자문형 크립토 ‘Selfrecipe’ — 실시간 시각화와 리텐션",
    period: "2023",
    role: ["프론트엔드"],
    stack: ["Django", "Binance", "TradingView", "WebSocket", "CI/CD"],
    domain: ["Crypto", "Advisory"],
    summary: "TradingView 도입과 실시간 연결로 시각화 중심 UX 구현.",
    cover: "/covers/selfrecipe.png",
    gallery: ["/selfrecipe/s-2023-0.png", "/selfrecipe/s-2023-1.png", "/selfrecipe/s-2023-2.png", "/selfrecipe/s-2023-3.png", "/selfrecipe/s-2023-4.png", "/selfrecipe/s-2023-5.png", "/selfrecipe/s-2023-6.png", "/selfrecipe/s-2023-7.png", "/selfrecipe/s-2023-8.png", "/selfrecipe/s-2023-9.png", "/selfrecipe/s-2023-10.png"],
    highlights: [
      "대시보드 UI 개편(계산/주문/관리 탭)",
      "모바일 하단 네비게이션",
      "일괄주문 플로우(FAB)",
      "코인 티커(현재가/24h/고저/거래량/대금)",
      "리텐션 30%↑ · 체류시간 2배 · 지연 40%↓"
    ],
    case: {
      problem: {
        title: "문제",
        md: "‘주문넣기’ 부재와 화면 간 UI 비일관성으로 사용자 여정이 단절되고, 자문형 흐름에서 데이터 신뢰/가시성이 낮음.",
      },
      goals: {
        title: "목표",
        md: "대시보드 재설계로 ‘계산→주문→관리’ 일관 플로우 제공, 실시간 시각화로 신뢰 체감도 향상.",
      },
      solution: {
        title: "해결",
        md:
          "- 대시보드 탭 구조(계산/주문/관리)로 정보·행동 동선 정렬\n" +
          "- 모바일 하단 네비게이션으로 ‘홈→대시보드→오토봇(→랭킹)’ 여정 명시\n" +
          "- 계산 연동 일괄주문 도입(PC 버튼, 모바일 FAB)\n" +
          "- 코인 티커 추가(현재가·24h 등락·고저·거래량·거래대금)\n" +
          "- 포지션/주문 취소(일괄·단일) 화면 설계\n" +
          "- TradingView 레이어 커스터마이즈 + WebSocket 실시간 반영\n" +
          "- 환경 분리 및 CI/CD 자동배포",
      },
      impact: {
        title: "성과",
        md:
          "- UX 일관성 향상으로 흐름의 단절 감소, 주문 전환 경로 명확화\n" +
          "- 리텐션 30% 증가, 세션 체류시간 2배(4m→9m)\n" +
          "- 데이터 렌더링 지연 40% 감소, 실시간 차트 기반 의사결정 강화",
      },
      learnings: {
        title: "인사이트",
        md: "서비스 철학(계산→주문→관리)을 UI/UX로 번역할 때 신뢰가 형성된다.",
      },
    },
  },
  {
    slug: "e-exchange-2023",
    title: "EntityX — 실시간 대시보드와 주문, Bybit 마이그레이션",
    period: "2023.10~2024.06",
    role: ["프론트엔드 리드"],
    stack: ["Django", "Vanilla JS", "WebSocket", "TradingView"],
    domain: ["Exchange"],
    summary: "초당 수백 건 체결 데이터를 처리하는 실시간 대시보드/주문 UI와 OKX→Bybit 전환 운영 안정화.",
    cover: "/covers/entityx.png",
    gallery: [
      "/entity/pc_1.png",
      "/entity/dashboard.png",
      "/entity/dashboard_info.png",
      "/entity/dashboard_order_modify.png",
      "/entity/dashboard_order_modify_1.png",
      "/entity/home_0.png",
      "/entity/home_2.png",
      "/entity/home_3.png",
      "/entity/kyc.png",
      "/entity/kyc_1.png",
      "/entity/top_recipe.png",
      "/entity/autobot.png",
      "/entity/mobile_benchmark.png",
      "/entity/mobile_chart_1.png",
      "/entity/mobile_chart_2.png",
      "/entity/mobile_recipe.png",
      "/entity/mobile_recipe_2.png",
      "/entity/mobile_autobot.png",
      "/entity/mobile_position_close_1.png",
      "/entity/mobile_position_close_2.png",
      "/entity/mobile_3.png",
      "/entity/pc_sns.png"
    ],
    highlights: ["차트 렌더링 지연 40%↓", "OKX→Bybit 전환 2개월→3주", "이탈률 50%↓"],
    case: {
      problem: { title: "문제", md: "WS 부하로 인한 렌더링 지연, 거래소 전환(OKX→Bybit)에 따른 API/데이터모델 차이." },
      goals: { title: "목표", md: "실시간 데이터 처리 성능 최적화와 모델 정규화로 전환 리스크 최소화." },
      solution: {
        title: "해결",
        md: "- WebSocket 기반 주문·포지션 스트림 파이프라인 설계\n- TradingView 차트 커스터마이징 및 손익 시각화\n- DOM 업데이트 최소화로 렌더링 병목 제거\n- OKX→Bybit 데이터 모델 정규화 및 API 차이 흡수",
      },
      impact: { title: "성과", md: "- 차트 렌더링 지연 40% 감소\n- 거래소 전환 기간 3주→1주 단축\n- 사용자 이탈률 50% 감소" },
      learnings: { title: "인사이트", md: "효율적인 코드가 곧 UX." },
    },
  },
  {
    slug: "z-robo-2024-2025",
    title: "일임형 로보어드바이저 ‘zolbo’ — 웹·앱 통합과 사용자 신뢰",
    period: "2024.09~2025.09",
    role: ["프론트엔드 리드"],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "React Query",
      "WebSocket",
      "Capacitor",
      "OAuth",
      "IAP"
    ],
    domain: ["Robo-Advisor"],
    summary: "하이브리드 앱(PWA/Android/iOS) 단일 코드베이스, 인증·세션·인앱결제까지 런칭 리드.",
    cover: "/covers/z-2025.png",
    gallery: ["/zolbo_app/pc_home.png", "/zolbo_app/pc_strategy_0.png", "/zolbo_app/pc_strategy_1.png", "/zolbo_app/pc_strategy_2.png", "/zolbo_app/pc_strategy_3.png", "/zolbo_app/pc_lab.png", "/zolbo_app/pc_account.png", "/zolbo_app/pc_feed.png", "/zolbo_app/pc_lab.png"],
    highlights: ["가입 전환율 35%↑", "이탈률 60%↓", "배포 시간 80%↓", "스토어 런칭"],
    case: {
      problem: { title: "문제", md: "다양한 디바이스/브라우저에서 경험 파편화." },
      goals: { title: "목표", md: "일관된 인증/세션과 UI 흐름으로 불안 최소화, 전환/리텐션 개선." },
      solution: {
        title: "해결",
        md: "- Next.js(App Router) 기반 SSR/CSR 통합 구조\n- Zustand 기반 로그인·토큰 persist, React Query 캐싱/병렬 요청\n- WebSocket 실시간 자산/주문 스트림 통합\n- Google OAuth + 휴대폰 인증 BottomSheet 3단계 프로세스\n- 포인트(ZLB) 결제·보상 설계 및 인앱결제(Google Play) 연동\n- AWS Amplify + GitLab CI/CD로 자동 빌드·배포",
      },
      impact: {
        title: "성과",
        md: "- 가입 전환율 35%↑, 플로우 이탈 60%↓\n- MAU 40%↑, 배포 시간 80%↓\n- 새로고침 빈도 70%↓, 기능 도입 속도 2배\n- 웹·앱 통합 배포 및 스토어 런칭",
      },
      learnings: { title: "인사이트", md: "기술은 문제를 해결, 고객은 불안을 해결받고 싶어 한다." },
    },
  },
  {
    slug: "hwarazol-2023",
    title: "화라쫄 (HwaraZol) — 화이트라벨 펀드마켓 솔루션",
    period: "2023.02~2023.07",
    role: ["프론트엔드 리드"],
    stack: ["Django", "Tailwind"],
    domain: ["Crypto", "Fund Platform"],
    summary:
      "ZOLBO 기술을 활용한 화이트라벨 SaaS로, 운용사별 맞춤형 펀드마켓(정산 자동화·브랜드 테마)을 빠르게 제공.",
    cover: "/covers/wlb.png",
    gallery: [],
    highlights: ["파트너사 3사 계약", "정산/보수/회원 자동화", "브랜드 커스터마이징"],
    case: {
      problem: {
        title: "문제",
        md: "개별 운용의 법/시스템 제약으로 확장 어려움. 신뢰 가능한 정산·보수 표준 부재.",
      },
      goals: {
        title: "목표",
        md: "법적 안전성과 정산 자동화, 브랜드 커스터마이징을 갖춘 화이트라벨 제공.",
      },
      solution: {
        title: "해결",
        md: "- Django 기반 멀티 테넌트 구조 설계\n- 브랜드별 UI 커스터마이징(로고·컬러·모드)\n- 관리자 대시보드 및 정산 자동화 로직 구축",
      },
      impact: {
        title: "성과",
        md: "- 파트너사 3곳(MC9, Inus, Lia Holdings) 상용화\n- 온보딩 속도 2배 향상, 운영비 30% 절감",
      },
      learnings: {
        title: "인사이트",
        md: "화이트라벨의 본질은 기술보다 프로세스와 신뢰 설계.",
      },
    },
  },

  // 신규: 알케미랩 홈페이지 리뉴얼
  {
    slug: "alchemilab-website-2022",
    title: "알케미랩 홈페이지 리뉴얼 — 미션·비전·핵심가치의 웹 반영",
    period: "2022.11",
    role: ["프로젝트 리드"],
    stack: ["Django", "Tailwind"],
    domain: ["Branding", "Website"],
    summary: "브랜딩 리뉴얼로 조직의 미션·비전·가치를 웹 전반에 반영하고 반응형으로 개선.",
    cover: "/covers/placeholder.svg",
    gallery: [],
    highlights: ["내부 공감도 90%", "페이지 조회수 2.3배"],
    case: {
      problem: { title: "문제", md: "조직의 정체성과 핵심가치가 웹에서 통일되지 않아 전달력이 낮음." },
      goals: { title: "목표", md: "스타일가이드/브랜드 언어 수립과 반응형 웹 구현으로 메시지 일관성 강화." },
      solution: { title: "해결", md: "- UI 스타일가이드·브랜드 언어·핵심가치 페이지 설계\n- Django + Tailwind 기반 반응형 개발" },
      impact: { title: "성과", md: "- 내부 공감도 90% 달성\n- 홈페이지 조회수 2.3배 증가" },
    },
  },
];


