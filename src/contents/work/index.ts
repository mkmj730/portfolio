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


