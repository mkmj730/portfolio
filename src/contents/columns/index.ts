import type { ColumnArticle } from "./types";

export const columnArticles: ColumnArticle[] = [
  /**
   * 1) Next.js + Capacitor 단일 코드베이스
   */
  {
    slug: "one-code-base",
    title: "한 코드베이스, 세 채널 동시 출격: Next.js + Capacitor",
    excerpt: "웹/PWA/Android/iOS를 한 번에. 속도와 신뢰를 동시에.",
    cover: "/social/one-code-base.png",
    blocks: [
      { type: "heading", level: 2, text: "한 문장 요약" },
      { type: "paragraph", text: "하나의 코드로 웹과 앱(안드로이드/아이폰)을 동시에 만듭니다. 유지보수는 한 곳, 배포는 세 채널." },
      { type: "callout", icon: "ℹ️", text: "배경지식 체크: 아래 용어가 낯설면 ‘용어 30초 요약’을 먼저 읽어보세요." },
      { type: "heading", level: 3, text: "용어 30초 요약" },
      { type: "list", items: [
        "PWA: 앱처럼 설치되는 웹",
        "SSR: 서버가 미리 화면을 만들어 속도/검색에 유리",
        "ISR: 캐시된 화면을 일정 시간마다 새로고침",
        "Capacitor: 웹을 앱으로 감싸 스토어에 올리게 해주는 도구",
        "딥링크/유니버설 링크: 링크로 앱을 바로 여는 방법"
      ]},
      { type: "heading", level: 2, text: "왜 단일 코드베이스인가" },
      { type: "paragraph", text: "PWA만으로는 스토어 신뢰·인앱결제·푸시를 모두 담기 어렵습니다. 웹 팀만으로 앱 생태계에 빠르게 진입해야 했습니다." },

      { type: "heading", level: 2, text: "그림으로 이해" },
      { type: "code", lang: "txt", code:
        `src (web)
          ↓ build (SSR | export)
        out (정적 결과)
          ↓ copy
        apps/www (앱에 탑재)
          ↓ 래퍼(Android/iOS)
        Google Play / App Store (배포)`
      },

      { type: "heading", level: 2, text: "작동 방식(3단계)" },
      { type: "list", items: [
        "웹을 빌드합니다(SSR 또는 정적 export).",
        "빌드 결과를 앱(www) 폴더로 복사합니다.",
        "Capacitor로 Android/iOS 래퍼를 열어 스토어에 올립니다."
      ]},

      { type: "heading", level: 2, text: "기술적 의사결정" },
      { type: "list", items: [
        "Next.js + Capacitor: 웹 코드 90% 재사용, 네이티브 권한만 최소 래핑 → 채택",
        "BUILD_TARGET=web|export 로 SSR/Static 빌드 분리",
        "의사결정 기준: 팀 규모 대비 ‘신뢰 지표’ 상승폭"
      ]},

      { type: "heading", level: 2, text: "언제 좋은가" },
      { type: "list", items: [
        "소수 인원으로 웹·앱을 동시에 내야 할 때",
        "웹과 앱의 화면/경험을 거의 동일하게 유지하고 싶을 때",
        "시장 반응을 빠르게 보고 자주 업데이트해야 할 때"
      ]},

      { type: "heading", level: 2, text: "주의할 점" },
      { type: "list", items: [
        "고성능 네이티브(대형 3D/AR/초고빈도 센서)는 별도 네이티브 고려",
        "스토어 심사 요건(ATS, Data Safety, 권한 목적문구) 미리 준비",
        "딥링크/앱링크/리다이렉트 주소 일관성 유지"
      ]},

      { type: "heading", level: 2, text: "프로젝트 구조" },
      { type: "code", lang: "txt", code:
          `hybrid-app/
          ├─ web/                  # Next.js(App Router) — PWA/SSR/ISR
          │  ├─ src/app            # 라우트·서버 액션
          │  ├─ src/api            # API 핸들러(edge/node)
          │  ├─ src/lib            # 공통 유틸·도메인 로직
          │  └─ public | out       # 정적 자산/정적 export 결과
          ├─ apps/                 # Capacitor 컨테이너
          │  ├─ android | ios      # 네이티브 래퍼
          │  └─ capacitor.config.ts
          └─ 빌드 흐름:
             1) web: npm run build:web / build:app
             2) copy: web/out → apps/www
             3) apps: npx cap copy && npx cap sync → 스토어 빌드`
      },

      { type: "heading", level: 2, text: "빌드/배포 플로우" },
      { type: "code", lang: "bash", code:
        `# Web (SSR)
        cd web
        npm run build:web && npm run dev  # http://localhost:3000

        # App (Android)
        npm run build:app && npm run copy:to-app
        cd ../apps && npx cap copy && npx cap sync
        npm run android:build && npm run android

        # iOS (준비 필요)
        npm run ios`
      },

      { type: "heading", level: 3, text: "경계(Interface) 우선" },
      { type: "paragraph", text: "웹-네이티브 경계를 먼저 정의합니다. Capacitor 플러그인 호출 시그니처를 표준화하고 브라우저 폴백을 제공해 테스트 가능성과 SSR 안전성을 확보합니다." },
      { type: "code", lang: "ts", code:
        `// device/clipboard.ts (web fallback)
        import { Clipboard } from '@capacitor/clipboard';

        export async function writeClipboard(text: string) {
          try {
            await Clipboard.write({ string: text });
          } catch {
            await navigator.clipboard?.writeText(text);
          }
        }`
      },
      { type: "callout", icon: "🧠", text: "배경지식 체크: ‘플러그인’은 카메라/푸시처럼 네이티브 기능입니다. 웹에서는 실패할 수 있어 try/catch + 웹 폴백을 같이 둡니다." },

      { type: "heading", level: 2, text: "Next.js + Capacitor 핵심 라이브러리/사용법" },
      { type: "list", items: [
        "@capacitor/app: 앱 상태/딥링크(appUrlOpen) 이벤트",
        "@capacitor/push-notifications: 권한 요청/토큰 발급/알림 수신",
        "@capacitor/browser: 인앱 브라우저(OAuth 리다이렉트 도움)",
        "@capacitor/clipboard: 복사/붙여넣기",
        "@capacitor/preferences(또는 community secure storage): 민감 정보 보관",
        "next-pwa: PWA 서비스워커/오프라인/설치 지원"
      ]},
      { type: "code", lang: "ts", code:
        `// platform-guard.ts (SSR/웹/앱 안전 가드)
        import { Capacitor } from '@capacitor/core';
        import { App } from '@capacitor/app';

        export function getPlatform() {
          // SSR에서는 window가 없음
          if (typeof window === 'undefined') return 'server';
          return Capacitor.getPlatform(); // 'ios' | 'android' | 'web'
        }

        export function listenDeepLink(onOpen: (url: string) => void) {
          if (typeof window === 'undefined') return; // SSR 가드
          App.addListener('appUrlOpen', ({ url }) => onOpen(url));
        }`
      },
      { type: "code", lang: "ts", code:
        `// push.ts (푸시 최소 예시)
        import { PushNotifications } from '@capacitor/push-notifications';

        export async function initPush() {
          const perm = await PushNotifications.requestPermissions();
          if (perm.receive !== 'granted') return;
          await PushNotifications.register();

          PushNotifications.addListener('registration', (token) => {
            // 서버에 token.value 전송
          });
          PushNotifications.addListener('pushNotificationReceived', (n) => {
            // 알림 수신 시 UX 처리
          });
        }`
      },
      { type: "code", lang: "js", code:
        `// next.config.js (next-pwa 간단 설정)
        const withPWA = require('next-pwa')({
          dest: 'public',
          disable: process.env.NODE_ENV === 'development',
        });
        module.exports = withPWA({});`
      },
      { type: "heading", level: 3, text: "SSR 안전 수칙" },
      { type: "list", items: [
        "플러그인 호출은 항상 클라이언트에서만(SSR 가드: typeof window 체크)",
        "네이티브 전용 코드는 dynamic import({ ssr: false })로 분리",
        "항상 웹 폴백을 준비(클립보드/브라우저/알림)"
      ]},

      { type: "heading", level: 2, text: "난제 & 해결" },
      { type: "list", items: [
        "Google OAuth 리다이렉트: 앱 스킴 등록(kr.zolbo.app:/oauth2redirect)으로 해결",
        "WS 끊김: visibilitychange/foreground에 재구독 + 지수 백오프",
        "번들 용량: route-level chunk·이미지 최적화·dynamic import",
        "심사 리젝: ATS/권한 최소·개인정보 고지/리다이렉트 일관성 체크리스트"
      ]},

      { type: "heading", level: 2, text: "임팩트(지표)" },
      { type: "list", items: [
        "고객 신뢰 설문 48% → 79%",
        "가입→활성 전환율 30% → 56%",
        "출시 리드타임 1.0x → 0.7x(웹 플로우 재사용)"
      ]},

      { type: "heading", level: 2, text: "운영 체크리스트" },
      { type: "list", items: [
        "PWA: manifest/서비스워커/오프라인 전략",
        "Android: keystore/권한/IAP 선언",
        "iOS: Provisioning/Capabilities/ATS",
        "공통: SSO redirect, App/Universal Links"
      ]},

      { type: "callout", icon: "💡", text: "한 팀으로 네이티브 신뢰를 가져오는 가장 짧은 길." },

      { type: "heading", level: 2, text: "핵심 배움" },
      { type: "list", items: [
        "코드는 재사용하고, 경험은 네이티브처럼",
        "결정 기준은 비용이 아니라 ‘신뢰 지표’",
        "웹 팀만으로 앱 생태계 진입 가능"
      ]}
    ]
  },

  /**
   * 2) 실시간 WebSocket
   */
  {
    slug: "websocket",
    title: "실시간 WebSocket: 데이터가 끊기지 않게",
    excerpt: "스트림 상태·재접속·백오프 전략까지 운영 레벨로 설계합니다.",
    cover: "/social/websocket.png",
    blocks: [
      { type: "heading", level: 2, text: "문제 정의" },
      { type: "paragraph", text: "체결/자산 지연은 곧 불신과 이탈입니다. 초기에는 재접속/백오프/백그라운드 제어가 없어 ‘데이터 멈춤’이 종종 발생했습니다." },

      { type: "heading", level: 2, text: "기술 목표" },
      { type: "list", items: [
        "절대 끊김 최소화: 자동 재접속, 상태 구독 단위화",
        "서버 보호: backpressure + exponential backoff",
        "사용자 인지 이전에 복구: 지연 배지/토스트 안내"
      ]},

      { type: "heading", level: 2, text: "상태 머신" },
      { type: "paragraph", text: "OPEN → AUTH → SUBSCRIBED → STALL → RETRY → CLOSED. 전이마다 타임아웃·지수 백오프·알림을 바인딩합니다." },

      { type: "heading", level: 3, text: "구독 설계" },
      { type: "list", items: [
        "최소 단위: channel + symbol",
        "보이는 화면만 구독(visibilitychange 기반)",
        "ACK 필요 채널(주문/체결) 분리"
      ]},

      { type: "code", lang: "ts", code:
`// reconnect.ts
let attempt = 0;
function nextDelay() {
  return Math.min(30_000, 2 ** attempt * 500 + Math.random() * 300);
}
export async function withReconnect(connect: () => Promise<void>) {
  while (true) {
    try {
      await connect();
      attempt = 0;
      return;
    } catch {
      attempt++;
      await new Promise(r => setTimeout(r, nextDelay()));
    }
  }
}`
      },

      { type: "heading", level: 2, text: "운영 전략" },
      { type: "list", items: [
        "Heartbeat ping-pong으로 zombie 연결 제거",
        "송신 큐/UX 이벤트 분리로 backpressure 제어",
        "시리얼라이저 통일로 파싱 비용 감소",
        "지연 중 배지/스켈레톤으로 심리적 안정 제공"
      ]},

      { type: "heading", level: 2, text: "결과(지표)" },
      { type: "list", items: [
        "WS 이동 평균 지연 210ms → 48ms",
        "오류 신고 주 11건 → 0~1건",
        "ON 상태 유지율 71% → 83%"
      ]},

      { type: "callout", icon: "📡", text: "실시간은 기능이 아니라 ‘복구 UX’를 포함한 운영 전략입니다." },

      { type: "heading", level: 2, text: "핵심 배움" },
      { type: "list", items: [
        "보이지 않을 때는 받지 않는다",
        "사용자 인지 전에 회복한다",
        "‘무결성·속도·서버 보호’ 3축을 동시에 다룬다"
      ]},

      { type: "heading", level: 2, text: "한 문장 요약" },
      { type: "paragraph", text: "필요한 것만 구독하고(보이는 화면), 끊기면 알아서 붙고(백오프), 문제는 티 내지 않고 복구 UX로 덮습니다." },
      { type: "callout", icon: "ℹ️", text: "배경지식 체크: ‘채널’은 데이터 종류(체결/호가/현재가), ‘스냅샷’은 초기 전체 데이터, ‘업데이트’는 이후 변경분입니다." },

      { type: "heading", level: 3, text: "용어 30초 요약" },
      { type: "list", items: [
        "채널: ticker(현재가)/trade(체결)/orderbook(호가) 같은 구독 단위",
        "스냅샷 vs 업데이트: 처음엔 전체(snap), 이후엔 변화(update)만",
        "백오프+지터: 재연결 간격을 점점 늘리고 약간 랜덤화",
        "가시성 이벤트: 화면이 보일 때만 연결(visibilitychange)",
        "하트비트: 끊긴 연결을 빠르게 감지/정리하는 신호"
      ]},

      { type: "heading", level: 2, text: "그림으로 이해" },
      { type: "code", lang: "txt", code:
        `Client(브라우저/앱)
          ├─ connect → auth(token)
          ├─ subscribe: ticker, trade, orderbook...
          ├─ receive: snapshot → update → update → ...
          ├─ (hidden/offline) → disconnect
          └─ (visible/online) → reconnect(backoff)

        WS Server
          ├─ 토큰 검증/세션 유지
          ├─ 채널별 발행
          └─ (선택) heartbeat/ping-pong`
      },

      { type: "heading", level: 2, text: "작동 방식(3단계)" },
      { type: "list", items: [
        "연결: 서버와 WebSocket 연결(필요 시 토큰 포함)",
        "구독: 보이는 화면에 필요한 채널만 subscribe",
        "갱신: 스냅샷 1번 받고, 이후 업데이트만 반영"
      ]},

      { type: "heading", level: 2, text: "구독 모델(실전)" },
      { type: "list", items: [
        "최소 단위는 channel+symbol (예: ticker+KRW-BTC)",
        "보이는 화면만 구독: visibilitychange에서 connect/disconnect",
        "원하는 집합(desired)과 실제(subscribed)를 분리하고 디바운스 재구독",
        "프레임 합성: requestAnimationFrame으로 UI 업데이트를 묶어 성능 개선"
      ]},
      { type: "code", lang: "ts", code:
        `// Upbit 구독 예시(payload)
        ws.send(JSON.stringify([
          { ticket: 'zolbo-price' },
          { type: 'ticker', codes: ['KRW-BTC','KRW-ETH'] },
          { format: 'DEFAULT' },
        ]));

        // 가시성/네트워크 이벤트
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') disconnect();
          else reconnect();
        });
        window.addEventListener('online', reconnect);
        window.addEventListener('offline', disconnect);`
      },

      { type: "heading", level: 2, text: "배치(성능)" },
      { type: "paragraph", text: "들쭉날쭉 들어오는 프레임을 프레임 단위로 한 번에 반영하면 리렌더를 줄일 수 있습니다." },
      { type: "code", lang: "ts", code:
        `let pending: Record<string, any> = {};
        let rafId: number | null = null;
        function scheduleFrameUpdate(update: Record<string, any>) {
          Object.assign(pending, update);
          if (rafId) return;
          rafId = requestAnimationFrame(() => {
            applyToUI(pending); // 상태 병합 후 한 번에 반영
            pending = {}; rafId = null;
          });
        }`
      },

      { type: "heading", level: 2, text: "하트비트/백프레셔" },
      { type: "list", items: [
        "하트비트: 서버 ping-pong 또는 앱 레벨 heartbeat로 끊김 감지",
        "백프레셔: 송신 큐를 별도로 두고 UI 이벤트와 분리",
        "스루풋: 차트/표는 ‘차이(diff)’만 반영해 불필요 렌더 감소"
      ]},

      { type: "heading", level: 2, text: "보안/인증(토큰 만료)" },
      { type: "paragraph", text: "토큰 만료로 소켓이 끊기면 토큰을 갱신하고, 짧은 지연 후 재연결합니다." },
      { type: "code", lang: "ts", code:
        `socket.onclose = async (event) => {
          const reason = event.reason?.toLowerCase() || '';
          if (reason.includes('unauthorized') || reason.includes('401')) {
            const next = await refreshToken();
            if (!next) return logout();
            setTimeout(() => connect(), 500);
          }
        };`
      },

      { type: "heading", level: 2, text: "테스트 매트릭스" },
      { type: "list", items: [
        "가시성: visible ↔ hidden 전환 시 구독/해제",
        "네트워크: online/offline 전환 후 자동 복구",
        "토큰: 만료/갱신 후 자동 재연결",
        "채널: 구독/해제 순서/중복/에러 처리",
        "대량: 100+ 심볼 구독 시 UI 프레임 드랍 여부"
      ]},

      { type: "heading", level: 2, text: "운영 지표" },
      { type: "list", items: [
        "WS 지연(ms) 이동 평균",
        "분당 재연결 횟수/성공률",
        "메시지 드랍률(파싱 실패/과부하)",
        "UI 프레임 드랍율(리렌더 횟수, rAF 간격)"
      ]},

      { type: "heading", level: 2, text: "FAQ" },
      { type: "list", items: [
        "왜 보일 때만 구독하나요? → 불필요 트래픽/배터리/리스크를 줄입니다.",
        "클라에서 ping을 못 보내면? → 프로토콜 메시지로 heartbeat를 정의하거나 서버 ping을 활용합니다.",
        "API와 WS가 충돌할 때? → 리스트는 API+캐시, 실시간 변화는 WS로 역할을 분리합니다."
      ]}
    ]
  },

  /**
   * 3) 운영 신뢰성(캐시·복구·CI/CD)
   */
  {
    slug: "ci-cd",
    title: "운영 신뢰성: 캐시·복구·CI/CD",
    excerpt: "중단 없는 경험을 위한 관찰성/자동화/복구 라인",
    cover: "/social/ci-cd.png",
    blocks: [
      { type: "heading", level: 2, text: "한 문장 요약" },
      { type: "paragraph", text: "항상 안정적으로 돌아가는 서비스 = 작은 단위로 배포하고(자주), 자동으로 점검하고(헬스체크·스모크), 필요하면 바로 되돌립니다(롤백)." },
      { type: "callout", icon: "ℹ️", text: "배경지식 체크: CI/CD(자동 빌드·배포), 프리뷰(머지 전 미리보기), 헬스체크(정상 응답 확인), 롤백(이전 버전으로 되돌리기)" },

      { type: "heading", level: 3, text: "용어 30초 요약" },
      { type: "list", items: [
        "CI: 코드를 푸시하면 자동으로 테스트/빌드를 실행",
        "CD: 빌드 결과를 자동으로 배포(Amplify/GitLab)",
        "프리뷰 배포: PR마다 별도 URL로 실제처럼 확인",
        "헬스체크: /api/healthz 같은 경로로 OK 여부 확인",
        "롤백: 실패 시 이전 정상 릴리즈로 즉시 돌아가기"
      ]},

      { type: "heading", level: 2, text: "그림으로 이해" },
      { type: "code", lang: "txt", code:
        `개발자 → PR 생성 → 프리뷰 배포(URL)
                ↓ 확인/리뷰 후 머지
        main → 빌드 → 헬스체크 → 트래픽 전환(무중단)
                          ↘ 실패: 즉시 롤백`
      },

      { type: "heading", level: 2, text: "작동 방식(3단계)" },
      { type: "list", items: [
        "Build: 의존성 설치 → 타입/린트 → 빌드",
        "Verify: /api/healthz 200 확인 + 핵심 화면 스모크",
        "Release: 정상 시 트래픽 전환, 실패 시 자동/수동 롤백"
      ]},

      { type: "heading", level: 2, text: "Amplify 예시(무중단)" },
      { type: "list", items: [
        "브랜치 연동: PR → 프리뷰 URL 자동 발급",
        "main 머지: 자동 빌드/배포 + 이전 릴리즈 롤백 가능",
        "환경변수 분리: PREVIEW/PROD 각각 설정"
      ]},

      { type: "code", lang: "yaml", code:
        `# amplify.yml (예시)
        version: 1
        frontend:
          phases:
            preBuild:
              commands:
                - npm ci
            build:
              commands:
                - npm run build
          artifacts:
            baseDirectory: .next
            files:
              - '**/*'
          cache:
            paths:
              - node_modules/**/*`
      },

      { type: "heading", level: 2, text: "GitLab CI 예시(간단)" },
      { type: "code", lang: "yaml", code:
        `# .gitlab-ci.yml (요약 예시)
        stages: [install, test, build, deploy]
        install:
          stage: install
          script: ["npm ci"]
          artifacts: { paths: [node_modules/] }
        test:
          stage: test
          script: ["npm run lint", "npm run type-check"]
        build:
          stage: build
          script: ["npm run build"]
          artifacts: { paths: [.next/] }
        deploy:
          stage: deploy
          script: ["./scripts/deploy.sh"]
          when: manual  # 필요 시 수동 승인`
      },

      { type: "heading", level: 2, text: "헬스체크/스모크" },
      { type: "code", lang: "ts", code:
        `// app/api/healthz/route.ts (Next.js)
        export async function GET() {
          return new Response('OK', { status: 200 });
        }`
      },
      { type: "list", items: [
        "헬스체크: 배포 직후 /api/healthz 200 확인",
        "스모크: 홈/로그인/핵심 버튼 클릭 정도 자동 확인",
        "실패 시: 트래픽 전환 차단 → 이전 릴리즈로 롤백"
      ]},

      { type: "heading", level: 2, text: "모니터링(기본)" },
      { type: "list", items: [
        "Sentry 최소 연동: 에러 수/페이지 기준 알림",
        "GA4: 전환 퍼널(방문→가입→활성)만 우선",
        "릴리즈 태깅: 배포 버전과 에러를 연결"
      ]},
      { type: "code", lang: "ts", code:
        `// sentry.client.config.ts (개념 예시)
        import * as Sentry from '@sentry/nextjs';
        Sentry.init({ dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, tracesSampleRate: 0.1 });`
      },

      { type: "heading", level: 2, text: "운영 체크리스트(쉬운 것부터)" },
      { type: "list", items: [
        "PR마다 프리뷰 URL 확인(화면 깨짐·로그인)",
        "배포 직후 /api/healthz 확인",
        "이상 알림 오면 즉시 롤백, 원인 분석은 이후",
        "환경변수/시크릿은 프리뷰/프로덕션 분리"
      ]},

      { type: "heading", level: 2, text: "결과(지표)" },
      { type: "list", items: [
        "배포 중 다운타임 0초",
        "프리뷰로 UI 버그 사전 발견률 증가",
        "롤백 평균 소요 5분 → 1분(버튼/스크립트화)"
      ]},

      { type: "callout", icon: "🔧", text: "항상 안정적으로 돌아가는 서비스는 ‘작은 배포 + 빠른 롤백’에서 시작됩니다." },

      { type: "heading", level: 2, text: "향후 보완 로드맵(가벼운 단계부터)" },
      { type: "list", items: [
        "캐시: React Query staleTime/TTL 가이드 도입",
        "복구 UX: 오프라인 배너/재시도 토스트 추가",
        "관찰성: Sentry Release Health·에러 버짓 시범 적용",
        "배포: 롤백 자동화 스크립트 → 버튼 1회로 단축"
      ]}
    ]
  },

  /**
   * 4) End-to-End 올라운더
   */
  {
    slug: "end-to-end",
    title: "End-to-End 올라운더: 기획·개발·배포",
    excerpt: "기획→개발→배포 전 과정을 주도하고, 필요 시 백엔드/인프라까지 손끝으로.",
    cover: "/social/end-to-end.png",
    blocks: [
      { type: "heading", level: 2, text: "한 문장 요약" },
      { type: "paragraph", text: "PM 역량을 갖춘 프론트엔드 개발자로, 기획부터 배포까지 끝까지 책임집니다. 필요하면 백엔드/인프라도 직접 손봅니다." },

      { type: "heading", level: 2, text: "업무 프로세스(끝까지 책임지는 6단계)" },
      { type: "list", items: [
        "기획(Notion): 목적·범위·기간·지표·기술스택을 한 페이지로 정리",
        "리서치(AI/Youtube/Google): 레퍼런스·배경지식 수집으로 도메인 확립",
        "디자인(Figma): 빠른 UI/UX 시안으로 합의 형성",
        "개발(Next.js + Capacitor): 웹/앱 동시 개발로 손에 잡히는 결과",
        "배포(Amplify/GitLab): 프리뷰→무중단 배포→헬스체크/롤백",
        "피드백(지표/정성): 전환/이탈·정성 피드백을 바탕으로 개선"
      ]},

      { type: "heading", level: 2, text: "사용 도구" },
      { type: "list", items: [
        "기획: Notion",
        "디자인: Figma",
        "FE: Next.js 14, TypeScript, Tailwind, Zustand, React Query",
        "앱: Capacitor 7 (Android/iOS)",
        "배포: AWS Amplify, GitLab CI/CD",
        "관찰성: Sentry(최소), GA4(핵심 퍼널)"
      ]},

      { type: "heading", level: 2, text: "속도 전략: PMF·POC·MCP" },
      { type: "list", items: [
        "POC(Proof of Concept): 기술/도메인 타당성 검증 — 가장 작은 화면 1~2개",
        "MCP(Minimum Compelling Product): 설득력 있는 최소 제품 — 핵심 플로우만",
        "PMF(Product-Market Fit): 지표로 맞물림 확인 — 전환/리텐션 목표 달성"
      ]},

      { type: "heading", level: 2, text: "역할 스펙트럼" },
      { type: "list", items: [
        "프론트엔드 중심: 제품을 눈에 보이게 빠르게",
        "백엔드(필요 시): 간단한 API/웹소켓, 인증·세션 연동",
        "인프라(필요 시): Amplify 파이프라인, 도메인/HTTPS, 간단 모니터링"
      ]},

      { type: "heading", level: 2, text: "일하는 태도" },
      { type: "list", items: [
        "하나부터 열까지 꼼꼼하게",
        "처음부터 끝까지 주도적으로"
      ]},
      { type: "heading", level: 2, text: "프레임워크" },
      { type: "list", items: [
        "문제: 고객의 ‘불안’을 문장으로 정의",
        "가설: 전환/리텐션에 영향을 줄 행동 가설 수립",
        "실험: 최소 변경으로 측정 가능한 실험 설계",
        "검증: 지표·정성 피드백 기반 반영"
      ]},
      { type: "heading", level: 2, text: "지표 설계" },
      { type: "list", items: [
        "선행지표(활동) vs 최종지표(비즈니스) 분리",
        "관찰 창/샘플 사이즈/유의성 기준 명시",
        "릴리즈 노트/체인지로그로 맥락 보존"
      ]},
      { type: "heading", level: 2, text: "케이스 스터디" },
      { type: "list", items: [
        "OAuth 플로우 단순화 → 가입 전환 +35%",
        "실시간 시각화 최적화 → 이탈 -50%",
        "앱 통합 배포 → 출시 리드타임 -80%"
      ]},
      { type: "callout", icon: "🧭", text: "속도는 방향과 학습이 있을 때만 성과로 이어집니다." }
    ]
  },

//   /**
//    * 5) App Router 하이브리드 & 캐싱
//    */
//   {
//     slug: "app-router-ssr-caching",
//     title: "Next.js App Router: SSR/CSR 하이브리드와 캐싱 설계",
//     excerpt: "검색·속도·상태를 함께 잡는 실전 전략",
//     cover: "/social/app-router.png",
//     blocks: [
//       { type: "heading", level: 2, text: "균형 잡기" },
//       { type: "paragraph", text: "SEO 민감/리스트는 SSR/ISR, 상호작용 이후는 CSR로 전환합니다. 세그먼트 캐시와 태그 무효화로 부분 새로고침을 구현합니다." },
//       { type: "list", items: [
//         "Route segment config, revalidate/ISR",
//         "Streaming/Suspense로 LCP 개선",
//         "서버 액션과 클라 훅의 경계 고정"
//       ]},
//       { type: "code", lang: "ts", code:
// `// app/(shop)/products/page.tsx
// export const revalidate = 60;
// export default async function Page() {
//   const res = await fetch(process.env.API + '/products', { next: { tags: ['products'] } });
//   const products = await res.json();
//   return <List data={products}/>;
// }
// // mutate 후 무효화
// export async function POST() {
//   // ...
//   revalidateTag('products');
// }`
//       },
//       { type: "callout", icon: "⚙️", text: "캐시는 ‘무효화 전략’이 함께 있어야 가치가 생깁니다." }
//     ]
//   },

//   /**
//    * 6) TradingView 커스터마이징
//    */
//   {
//     slug: "tradingview-realtime",
//     title: "TradingView 커스터마이징과 실시간 시각화",
//     excerpt: "체감 성능을 만드는 도메인 모델링",
//     cover: "/social/tradingview.png",
//     blocks: [
//       { type: "heading", level: 2, text: "도메인 모델" },
//       { type: "paragraph", text: "캔들/체결/포지션/손익을 표준 이벤트로 정규화하고 차트에는 변화분(diff)만 전달합니다." },
//       { type: "list", items: [
//         "Candle(upsert), Trade(append), PnL(recalc) 규약",
//         "updateBars(diff) 호출 최소화",
//         "심볼·거래소 추상화 계층"
//       ]},
//       { type: "code", lang: "ts", code:
// `// aggregator.ts
// export function applyTrade(candle, trade) {
//   candle.close = trade.price;
//   candle.high = Math.max(candle.high, trade.price);
//   candle.low = Math.min(candle.low, trade.price);
//   candle.volume += trade.size;
//   return candle;
// }`
//       },
//       { type: "callout", icon: "📈", text: "모델을 단순하게 유지하면 성능 최적화는 자연스럽습니다." }
//     ]
//   },

//   /**
//    * 7) 인증/인앱결제 마찰 제거
//    */
//   {
//     slug: "oauth-iap-auth",
//     title: "OAuth·세션·인앱결제: 인증/결제의 마찰 줄이기",
//     excerpt: "전환을 방해하는 작은 마찰을 제거하는 체크리스트",
//     cover: "/social/oauth-iap.png",
//     blocks: [
//       { type: "heading", level: 2, text: "세션 흐름" },
//       { type: "list", items: [
//         "만료 전 Silent Refresh, 실패 시 Soft Logout",
//         "토큰 보관: secure storage 우선 + 안전 폴백",
//         "리다이렉트/딥링크/앱링크 일관성"
//       ]},
//       { type: "code", lang: "ts", code:
// `// axios-interceptor.ts
// api.interceptors.response.use(undefined, async (err) => {
//   if (err.response?.status === 401) {
//     await refreshToken();
//     return api.request(err.config);
//   }
//   return Promise.reject(err);
// });`
//       },
//       { type: "heading", level: 3, text: "IAP 검증" },
//       { type: "list", items: [
//         "클라 결제 성공 → 영수증 서버 전달",
//         "서버 영수증 검증 → 구독/권한 갱신",
//         "실패 시 재시도/재송신/문의 채널 안내"
//       ]},
//       { type: "callout", icon: "🔐", text: "전환은 ‘마찰 제거’의 다른 이름입니다." }
//     ]
//   },

//   /**
//    * 8) Zustand + React Query 경계
//    */
//   {
//     slug: "zustand-react-query",
//     title: "Zustand + React Query: 클라 상태와 서버 캐시의 경계",
//     excerpt: "로그인·토큰 persist와 서버 상태 캐싱을 분리하기",
//     cover: "/social/zustand-rq.png",
//     blocks: [
//       { type: "heading", level: 2, text: "소유권 구분" },
//       { type: "list", items: [
//         "앱 상태(Zustand): 사용자/토큰/디바이스/프리퍼런스",
//         "서버 상태(RQ): 목록/상세/페이지네이션 응답",
//         "UI 상태: 일시적 입력/모달"
//       ]},
//       { type: "code", lang: "ts", code:
// `// stores/session.ts
// import { create } from 'zustand';
// export const useSession = create((set) => ({
//   token: undefined as string | undefined,
//   setToken: (t?: string) => set({ token: t }),
// }));
// // hooks/useUser.ts
// export function useUser() {
//   return useQuery({ queryKey: ['me'], queryFn: fetchMe, staleTime: 60_000 });
// }`
//       },
//       { type: "heading", level: 3, text: "동시성/무결성" },
//       { type: "list", items: [
//         "invalidate vs refetchOnWindowFocus 기준",
//         "옵티미스틱 업데이트 롤백",
//         "에러 바운더리 + 토스트 복구 UX"
//       ]},
//       { type: "callout", icon: "🧩", text: "경계를 지키면 유지보수 비용이 눈에 띄게 줄어듭니다." }
//     ]
//   },

//   /**
//    * 9) Capacitor 스토어 배포 체크리스트
//    */
//   {
//     slug: "capacitor-store",
//     title: "Capacitor 스토어 배포 체크리스트",
//     excerpt: "PWA·Android·iOS 한 번에 가져가는 운영 팁",
//     cover: "/social/capacitor-store.png",
//     blocks: [
//       { type: "heading", level: 2, text: "함정과 해법" },
//       { type: "list", items: [
//         "권한: 카메라/파일/푸시 플랫폼별 선언 차이",
//         "스플래시/아이콘: 해상도·다크모드 대응",
//         "서명/프로비저닝: 팀/환경 분리와 시크릿 관리"
//       ]},
//       { type: "code", lang: "ts", code:
// `// capacitor.config.ts (발췌)
// const config: CapacitorConfig = {
//   ios: { contentInset: 'automatic', scrollEnabled: true },
//   android: { allowMixedContent: true },
// };
// export default config;`
//       },
//       { type: "heading", level: 3, text: "스토어 운영 팁" },
//       { type: "list", items: [
//         "메타데이터/스크린샷 자동화 스크립트",
//         "리뷰 대응 템플릿 + 크래시 재현 로그",
//         "리젝 플레이북(ATS·개인정보·추적)"
//       ]},
//       { type: "callout", icon: "🚀", text: "배포가 루틴이 되면 스트레스는 사라집니다." }
//     ]
//   },

//   /**
//    * 10) SEO·CRM·KPI
//    */
//   {
//     slug: "seo-crm-kpi",
//     title: "SEO·CRM·광고 트래킹으로 KPI 설계하기",
//     excerpt: "문제를 숫자로 드러내고 우선순위를 정하는 법",
//     cover: "/social/seo-crm-kpi.png",
//     blocks: [
//       { type: "heading", level: 2, text: "이벤트 스키마" },
//       { type: "list", items: [
//         "UTM 표준화·캠페인 매핑 테이블",
//         "전환 정의(가입/결제/구독) 합의",
//         "데이터 품질: 중복/봇/내부 트래픽 필터"
//       ]},
//       { type: "code", lang: "js", code:
// `// gtm push 예시
// window.dataLayer.push({
//   event: 'signup',
//   method: 'oauth',
//   plan: 'pro',
//   value: 1,
// });`
//       },
//       { type: "heading", level: 3, text: "CRM 파이프라인" },
//       { type: "list", items: [
//         "리드→상담→결제 단계 자동 알림",
//         "응답 SLA와 이탈 경로 분석",
//         "광고/SEO와 CRM을 잇는 공통 ID"
//       ]},
//       { type: "callout", icon: "📊", text: "보이는 것만 관리됩니다. 숫자에 이름을 붙이세요." }
//     ]
//   },

//   /**
//    * 11) 금융에서 ‘보이는 신뢰’
//    */
//   {
//     slug: "trust-visualization",
//     title: "금융에서 ‘보이는 신뢰’를 만드는 방법",
//     excerpt: "결산·손익·리스크를 사용자 언어로 보여주기",
//     cover: "/social/trust.png",
//     blocks: [
//       { type: "heading", level: 2, text: "맥락화된 숫자" },
//       { type: "list", items: [
//         "지표 정의 통일(수익률/최대낙폭/변동성/승률)",
//         "비개발 용어 라벨(‘이번 달 손익’)",
//         "이벤트 타임라인과 지표를 한 화면에"
//       ]},
//       { type: "code", lang: "ts", code:
// `// pnl-series.ts
// export function toSeries(dailies) {
//   return dailies.map(d => ({ t: d.date, y: d.equity }));
// }`
//       },
//       { type: "heading", level: 3, text: "신뢰 UX 디테일" },
//       { type: "list", items: [
//         "중요 공지 고정 + 체인지로그 공개",
//         "단위/소수점/타임존 일관성",
//         "에러/지연을 숨기지 않고 복구 경로 제시"
//       ]},
//       { type: "callout", icon: "🧭", text: "사용자는 ‘안심’을 구매합니다. 신뢰는 보이게 만들어야 합니다." }
//     ]
//   }
];
