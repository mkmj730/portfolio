import type { ColumnArticle } from "./types";

export const columnArticles: ColumnArticle[] = [
  {
    slug: "one-code-base",
    title: "웹·앱 단일 코드베이스: Next.js + Capacitor",
    excerpt: "한 번 빌드로 웹/PWA/Android/iOS를 동시에 타깃합니다.",
    cover: "/social/one-code-base.png",
    blocks: [
      { type: "heading", level: 2, text: "왜 단일 코드베이스인가" },
      { type: "paragraph", text: "제품 속도와 운영 효율을 위해 웹과 앱을 하나의 코드로 관리했습니다. App Router 기반의 Next.js에 Capacitor를 결합하여 네이티브 기능 접근과 스토어 배포 루틴을 단순화했습니다." },
      { type: "list", items: [
        "Next.js(App Router)+Capacitor 구성",
        "웹/PWA/Android/iOS 일관된 UX",
        "스토어 배포 자동화 골격 마련"
      ] },
      { type: "callout", icon: "💡", text: "웹-앱 동시성은 제품 실험/확장의 속도를 결정합니다." }
    ]
  },
  {
    slug: "websocket",
    title: "실시간 WebSocket: 데이터가 끊기지 않게",
    excerpt: "스트림 상태·재접속·백오프 전략까지 운영 레벨로 설계합니다.",
    cover: "/social/websocket.png",
    blocks: [
      { type: "heading", level: 2, text: "실시간의 핵심은 안정성" },
      { type: "paragraph", text: "네트워크 품질과 서버 상태에 따라 연결이 흔들리는 상황을 전제로, 재접속/백오프/큐잉 전략을 체계화했습니다. UI는 지연과 실패를 가시화합니다." },
      { type: "list", items: [
        "지수 백오프 재연결",
        "메시지 드롭 방지 큐",
        "UX 레벨 로딩/지연 표시"
      ] },
      { type: "callout", icon: "📡", text: "실시간은 체감 품질이 전부입니다. 복구 전략이 제품 신뢰도를 만듭니다." }
    ]
  },
  {
    slug: "end-to-end",
    title: "End-to-End 올라운더: 기획·개발·배포",
    excerpt: "문제 정의부터 지표 기반 개선까지 한 사이클로 굴립니다.",
    cover: "/social/end-to-end.png",
    blocks: [
      { type: "heading", level: 2, text: "고객-문제-가설-검증의 일관성" },
      { type: "paragraph", text: "기능 구현을 넘어서 고객 문제를 정의하고 가설을 세워 실험/검증까지 이어갑니다. 조직 규모와 무관하게 작은 배치로 빠르게 학습합니다." },
      { type: "list", items: [
        "가설→실험→검증 루프",
        "정량/정성 지표 설계",
        "릴리즈 노트와 회고 습관화"
      ] },
      { type: "callout", icon: "🧭", text: "속도는 방향이 있을 때 의미가 있습니다." }
    ]
  },
  {
    slug: "ci-cd",
    title: "운영 신뢰성: 캐시·복구·CI/CD",
    excerpt: "중단 없는 경험을 위한 관찰성/자동화/복구 라인.",
    cover: "/social/ci-cd.png",
    blocks: [
      { type: "heading", level: 2, text: "예측 가능한 배포와 빠른 복구" },
      { type: "paragraph", text: "빌드/테스트/배포를 자동화하고, 장애를 가정한 복구 시나리오를 미리 준비합니다. 캐싱 전략과 피처 플래그로 안전한 롤아웃을 지향합니다." },
      { type: "list", items: [
        "CI 파이프라인과 체커",
        "CD 단계적 롤아웃",
        "에러 버젯과 알림 라우팅"
      ] },
      { type: "callout", icon: "🔧", text: "운영은 제품의 품질을 완성하는 마지막 공정입니다." }
    ]
  }
];


