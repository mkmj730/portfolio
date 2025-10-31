import type { WorkContent } from "./types";

// 워크 상세 컨텐츠: 슬러그별 블록 정의
export const workContents: WorkContent[] = [
  {
    slug: "z-robo-2024-2025",
    blocks: [
      { type: "heading", level: 2, text: "프로젝트 개요" },
      { type: "paragraph", text: "Binance에서 시작해 Upbit 전용으로 피벗한 가상자산 투자 AI 에이전트. Next.js+Capacitor로 웹·앱 단일 코드베이스를 구축하고 인증/세션/인앱결제/실시간 스트림을 통합했습니다." },
      { type: "callout", icon: "💡", text: "핵심 가치: '불안을 줄이고 안심하게 하는 투자 경험'" },
      { type: "list", items: [
        "Binance→Upbit 전환, '일임'에서 'AI 조력자'로 재정의",
        "Next.js(App Router)+Capacitor: PWA/Android/iOS 동시 타깃",
        "WebSocket 실시간 가격·계좌 상태, 말풍선형 피드백 UI",
        "Three.js 3D 캐릭터(쫄보) 인터랙션",
        "Android 인앱결제(IAP) 프로토타입, iOS 인증 실패에서 교훈"
      ] },

      { type: "heading", level: 3, text: "타임라인(2024.09~2025.10)" },
      { type: "list", ordered: true, items: [
        "2024.09 Stewie 시작(Binance 일임형)",
        "2024.11 Next.js PWA 프로토타입",
        "2024.12~2025.03 Upbit 연동·병행 운영 시도",
        "2025.04 Upbit 전용 재작성 + Capacitor 도입",
        "2025.05 Android 첫 APK 빌드",
        "2025.07 지인 테스트: '완성도 부족' 피드백",
        "2025.09 동아재테크쇼 참가, 고객 데이터 확보",
        "2025.10 포스트모템 및 자산 정리"
      ] },

      { type: "heading", level: 3, text: "문제와 전환" },
      { type: "paragraph", text: "Binance 온보딩(KYC·API·Futures)이 진입장벽이었고, iOS 인증/스토어 정책 난이도를 과소평가했습니다. 방향을 '일임'에서 '모든 투자 단계를 돕는 AI 조력자'로 전환했습니다." },

      { type: "heading", level: 3, text: "고객의 4 Fears" },
      { type: "list", items: [
        "손실의 공포: 하락 시 어디까지 버틸지 모름",
        "무지의 공포: 무엇을 왜 언제 할지 모름",
        "관리 부담의 공포: 매일 확인·조작 피로",
        "지속관리 피로의 공포: 장기 유지가 어려움"
      ] },

      { type: "heading", level: 3, text: "주요 기능·기술" },
      { type: "list", items: [
        "App Router 기반 SSR/Export 혼합, 절대경로·도메인 분리",
        "Zustand + TanStack Query 상태/캐시",
        "WebSocket 실시간 자산/알림 파이프라인",
        "Capacitor 멀티플랫폼(PWA/Android/iOS)",
        "Android IAP(영수증 검증→ZLB 포인트) 프로토타입",
        "Three.js 3D 캐릭터 + 말풍선 UX",
        "리포트/연구소/가이드로 전문성 보완"
      ] },

      { type: "image", src: "/zolbo_app/pc_feed.png", alt: "피드 화면", caption: "피드/말풍선 UX" },
      { type: "image", src: "/zolbo_app/pc_account.png", alt: "계정 화면", caption: "세션/자산 상태 흐름" },
      { type: "image", src: "/zolbo_app/pc_strategy_0.png", alt: "전략 화면", caption: "전략/실험 UI" },

      { type: "heading", level: 3, text: "왜 이 스택인가" },
      { type: "list", items: [
        "Next.js(App Router) — SSR/CSR 혼합 — 전환/초기로딩 균형 — 불안 최소화",
        "Zustand/Query — 세션·토큰 persist + 캐시 — 새로고침 빈도 70%↓",
        "WebSocket — 실시간 자산/알림 — 단일 파이프라인 — 반응성↑",
        "Capacitor — 웹·앱 단일 코드 — 배포 시간 80%↓",
        "OAuth/IAP — 안전한 인증/결제 — 전환율 35%↑, 이탈 60%↓"
      ] },

      { type: "heading", level: 3, text: "시장 피드백" },
      { type: "paragraph", text: "박람회 데이터: '관심은 있지만 망설임'이 다수, 불안 요인은 가격 변동성과 전문성 부족. 쫄보는 무리하지 않는 신중한 투자를 돕는 AI 에이전트로 포지셔닝." },

      { type: "heading", level: 3, text: "실패 원인과 남은 자산" },
      { type: "list", items: [
        "원인: iOS 인증/정책 난이도 과소평가, 거래소 병행으로 집중력 분산, '일임' 집착, 고객 데이터 없이 BM 설계, 마케팅 역량 부족",
        "자산: '4 Fears' UX 프레임, Capacitor 빌드 역량, WS 구조 경험, 캐릭터·스토리텔링 UI, 현장 데이터"
      ] },

      { type: "quote", text: "고객들은 알고 싶어하는 게 아니라, 안심하고 싶어한다." },

      { type: "heading", level: 3, text: "다시 시작한다면" },
      { type: "list", items: [
        "문제정의 우선: 인터뷰로 불안의 언어화",
        "핵심 경험 최소화: ON/OFF + 말풍선 2.0",
        "지표 기반 판단: 7일 잔존, ON 유지일, 말풍선 클릭률",
        "안정 중심 리플랫포밍: iOS 인증/IAP 서버 재처리, WS 미들웨어, 빌드 자동화"
      ] },
    ],
  },
  {
    slug: "s-advisory-2022-2023",
    blocks: [
      { type: "heading", level: 2, text: "Selfrecipe — 2023 UI/UX 개편" },
      { type: "callout", icon: "💡", text: "의의: ‘계산→주문→관리’ 플로우 정립과 서비스 완성도 향상" },

      { type: "heading", level: 3, text: "사용자 여정" },
      { type: "list", items: [
        "홈(시황/분석) → 대시보드(계산/주문/관리) → 오토봇(자동) → 랭킹 → 거래소"
      ] },

      { type: "heading", level: 3, text: "화면 구조 변경(PC/모바일)" },
      { type: "list", items: [
        "대시보드: 계산/주문(탭), 관리(포지션/대기주문/체결/USDT/과거레시피)",
        "모바일: FAB ‘주문하기’, 하단 네비게이션, 차트↔표 전환",
        "차트: TradingView + 안내선/대기주문/포지션 오버레이"
      ] },

      { type: "image", src: "/entity/dashboard.png", alt: "대시보드 화면", caption: "대시보드 정보 구조" },
      { type: "image", src: "/entity/dashboard_info.png", alt: "대시보드 상세", caption: "주요 컴포넌트 배치" },

      { type: "heading", level: 3, text: "핵심 기능" },
      { type: "list", items: [
        "일괄주문: 계산기 결과 기반 간편 실행",
        "코인 티커: 현재가·24h 등락/고저·거래량·거래대금",
        "포지션/주문 취소: 일괄/단일(마켓/리밋)"
      ] },

      { type: "image", src: "/entity/mobile_3.png", alt: "모바일 UI", caption: "하단 네비게이션/주문 관리 카드" },
      { type: "image", src: "/entity/top_recipe.png", alt: "레시피 상단", caption: "레시피·주문 핵심 요소" },

      { type: "heading", level: 3, text: "왜 이 스택인가" },
      { type: "list", items: [
        "TradingView — 복잡 지표 시각화 — 레이어/오버레이 동기화 — 반영 지연 40%↓",
        "WebSocket — 실시간 체결·호가 — 이벤트 파이프라인/전파 규칙 — 체류 2배(4m→9m)",
        "Django — 도메인 로직 재사용 — API/권한/캐시 경계 — 회귀·운영 리스크↓",
        "Binance API — 일괄주문/취소 표준 — 유효성/가드 — 실패·재시도 오류율↓",
        "CI/CD(GitLab) — 자동 배포/환경 분리 — 리드타임·실패율↓"
      ] },

      { type: "heading", level: 3, text: "주문조작 기능 BDD 요약" },
      { type: "list", items: [
        "일괄주문: 계산→주문서 반영, 유효성 검사(거래규칙), 주문상세 팝업, 보안인증(이메일) 후 실행",
        "주문 취소: 단일 취소(DELETE /order), 다중 취소(DELETE /batchOrders), 전체 취소(DELETE /allOpenOrders)",
        "포지션/체결/자산: 체결내역 조회(All Orders), 실시간 잔고·가용·UPnL·Risk(Account v2)",
        "모바일 UI: 주문관리 카드형, 하단 네비게이션, 차트↔표 전환",
        "차트 상 조회/조작: 포지션·대기주문 오버레이 및 취소 조작"
      ] },
      { type: "heading", level: 3, text: "주요 API 엔드포인트" },
      { type: "list", items: [
        "POST /fapi/v1/batchOrders — Place Multiple Orders",
        "POST /fapi/v1/order — New Order",
        "DELETE /fapi/v1/order — Cancel Order",
        "DELETE /fapi/v1/batchOrders — Cancel Multiple Orders",
        "DELETE /fapi/v1/allOpenOrders — Cancel All Open Orders",
        "GET /fapi/v1/allOrders — All Orders",
        "GET /fapi/v2/account — Account Information v2",
        "GET /fapi/v1/income — Get Income History"
      ] },
      { type: "heading", level: 3, text: "유효성/가드" },
      { type: "list", items: [
        "투자금액 입력·계산 완료 전에는 ‘주문서 반영하기/이대로 주문넣기’ 비활성",
        "계산 미완료 시 안내 팝업(\"계산기에서 계산을 먼저 해주세요\")",
        "유효하지 않은 주문을 리스트업(아이콘/방향/심볼/가격/투자금액/오류설명)",
        "주문상세 팝업: 주문정보(전략·내역·위험), 시간정보(타겟·계산완료·현재·차이)",
        "주문 잠금 해제: 이메일 인증으로 24시간 해제"
      ] },

      { type: "heading", level: 3, text: "일정(2023.02)" },
      { type: "list", items: [
        "02.01 대시보드 UI 개편(완료)",
        "02.02~03 모바일 하단 네비게이션(완료)",
        "02.06~07 일괄주문 화면(완료)",
        "02.10~13 코인 티커(진행)",
        "추가: 포지션/주문 취소, PC 헤더, 랭킹(계획)"
      ] },

      { type: "heading", level: 3, text: "역할/기여" },
      { type: "list", items: [
        "플로우 설계: 계산→주문→관리 여정 정의, 모바일/PC 정보구조 정리",
        "UI 구현: 대시보드 탭/FAB/하단 네비, 티커/관리 탭",
        "거래 연동: 계산-주문 데이터 파이프 연결(일괄주문)"
      ] },

      { type: "heading", level: 3, text: "확장성/수익모델" },
      { type: "list", items: [
        "오토봇 전환을 고려한 모듈화(계산·주문·관리 분리)",
        "거래소 리베이트/네트워크 기반 BM, 글로벌 확장 가능성"
      ] },

      { type: "quote", text: "완성도는 흐름의 단절을 줄일 때 올라간다. 구조가 UX다." }
    ],
  },
  {
    slug: "e-exchange-2023",
    blocks: [
      { type: "heading", level: 2, text: "EntityX 거래하기 (파생 거래 UX·실시간 시스템)" },
      { type: "paragraph", text: "파생 거래 핵심 플로우(주문·포지션·손익·자산)를 단일 화면군으로 통합하고, TradingView 기반 실시간 차트/데이터 파이프라인을 직접 구현했습니다. 2024.02 실시간 차트, 2024.05 OKX→Bybit 마이그레이션, 2024.08 Django PWA 안정화 등 단계적으로 고도화했습니다." },

      { type: "heading", level: 3, text: "기능 목록" },
      { type: "list", ordered: true, items: [
        "티커",
        "대시보드 콘솔",
        "단일주문",
        "셀프레시피",
        "오토봇",
        "포지션",
        "대기주문",
        "주문내역",
        "자산상태창",
        "손익내역"
      ] },

      { type: "heading", level: 3, text: "세부 기능 요약" },
      { type: "list", items: [
        "티커: 현재가·시장평균가·24h 등락/고저/거래량/거래금액",
        "대시보드 콘솔: 차트 오버레이(BUY/SELL/체결), 주문 실행(단일·셀프레시피·오토봇), 주문 관리(포지션·대기·내역)",
        "단일주문: Limit/Market, 수량 단위(Coin/USDT), 가용자산, 호가창·체결내역 연동",
        "셀프레시피: Long/Short, 체결률(보통/높음/매우높음/사용자정의), 현금비중, 6호가 레시피·유효성 검사",
        "오토봇: ON/OFF, 파라미터(시간·상위코인·레버리지·방향·체결률·원금) 조회",
        "포지션: 방향/레버리지/마진유형/수량/IM·MM/pnl/entry/mark/청산가, 종료(시장가/지정가/추적가) 설계",
        "대기주문: 요약(방향/TP·SL), 상세(시장가/지정가, 취소/수정), 추적가(TP/SL) 스펙",
        "주문내역: 1일/7일/3개월, 주문·체결가/수량/수수료/상태",
        "자산상태창: equity/available/upnl/frozen",
        "손익내역: 종료주문·종료포지션, 기간 필터(7/30/180d·최대 2년)"
      ] },

      { type: "heading", level: 3, text: "왜 이 스택인가" },
      { type: "list", items: [
        "TradingView — 실시간 차트/손익 — 위젯 커스텀·DOM 최소 업데이트 — 렌더링 지연 40%↓",
        "WebSocket — 주문/포지션 스트림 — 혼합형 스트림 설계 — WS 부하 30%+↓",
        "데이터 모델 정규화 — OKX→Bybit 차이 흡수 — 표준 파서 — 전환 3주 내 완료",
        "Django PWA — 캐시/즉시 복구 — 오프라인 견고성 — 초기 로딩 69%↓"
      ] },

      { type: "callout", icon: "⚡", text: "V2: 클릭 1번으로 투자하는 단순한 거래 경험을 목표로 설계" },

      { type: "heading", level: 3, text: "TradingView 실시간 차트 시스템 (2024.02)" },
      { type: "paragraph", text: "구버전 위젯에서 문서 부재 상태를 코드 리딩과 이벤트 추적으로 보완. 내부 WS 이벤트와 렌더링 타이밍을 역추적하여 차트-WS 결합 실시간 시스템을 직접 구현." },
      { type: "list", items: [
        "세션 체류시간 4분 → 9분(2.25배)",
        "데이터 반영 지연 3.2초 → 0.7초"
      ] },
      { type: "quote", text: "문서보다 코드를 먼저, 코드보다 사용자 반응을 먼저." },

      { type: "heading", level: 3, text: "OKX → Bybit 마이그레이션 (2024.05)" },
      { type: "paragraph", text: "수량 체계(contract/coin/USDT) 차이와 WS 제공 범위의 차이를 해소하기 위해 스키마·파서·실시간 스트림을 재설계. REST+Ticker WS 혼합형으로 부하를 줄이며 정합성 확보." },
      { type: "list", items: [
        "새 데이터 스키마/타입 정의 + 표준화 파서 구현",
        "혼합형 스트림 설계로 WS 부하 30%+ 감소",
        "실시간 거래 오류율 0.3% 이하",
        "BDD 도입으로 2개월 일정 대비 3주 내 완료"
      ] },
      { type: "quote", text: "API 문서는 가이드, 구조 차이는 언어. 해석이 곧 구현 역량." },

      { type: "heading", level: 3, text: "TradingView 기능 업데이트 (2024.06)" },
      { type: "list", items: [
        "레시피 안내선(BUY/SELL): 가격 수정(그리드), 레시피테이블 연동",
        "대기주문 표시: 가격 수정(그리드), 수량 수정(클릭시 팝업), 취소 버튼",
        "포지션 라인: 실시간 PNL 표시",
        "체결 내역: 화살표 표시"
      ] },

      { type: "image", src: "/entity/dashboard_order_modify.png", alt: "레시피 안내선/가격 수정 그리드", caption: "레시피 안내선(SELL/BUY) 가격 수정(그리드) & 테이블 연동" },
      { type: "image", src: "/entity/dashboard_order_modify_1.png", alt: "대기주문 표시/수정/취소", caption: "대기주문 표시 — 가격/수량 수정(팝업), 취소 버튼" },
      { type: "image", src: "/entity/mobile_position_close_1.png", alt: "포지션 라인 PNL", caption: "포지션 라인에서 실시간 PNL 표시" },
      { type: "image", src: "/entity/mobile_chart_2.png", alt: "체결 내역 화살표", caption: "체결 내역 화살표 오버레이" },

      { type: "heading", level: 3, text: "Django 기반 PWA 안정화 (2024.08)" },
      { type: "paragraph", text: "서비스워커·브라우저·Django 캐시를 병행하여 불안정 네트워크에서도 차트/주문 모듈이 로컬 캐시로 즉시 복구되도록 구조화. SSR-비동기 캐시 불일치 이슈 완화." },
      { type: "list", items: [
        "초기 로딩 6.8초 → 2.1초(69% 개선)",
        "네트워크 지연 시 차트 오류율 ~80% 감소",
        "거래 유지율 15%+ 상승"
      ] },
      { type: "quote", text: "시스템의 한계를 이해하고, 그 한계를 넘는 전환을 설계한다." }
    ],
  },
];

export function getWorkContentBySlug(slug: string): WorkContent | undefined {
  return workContents.find((w) => w.slug === slug);
}


