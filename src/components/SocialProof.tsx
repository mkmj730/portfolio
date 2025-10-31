import Image from "next/image";
import Link from "next/link";

type Card = {
  iconSrc: string;
  name: string;
  title: string;
  href: string;
  imageSrc: string;
};

const cards_1: Card[] = [
  {
    iconSrc: "/next.svg",
    name: "웹·앱 통합",
    title: "Next.js + Capacitor 단일 코드베이스",
    href: "#projects",
    imageSrc: "/homepage/v1/home.png",
  },
  {
    iconSrc: "/globe.svg",
    name: "실시간 데이터",
    title: "WebSocket 기반 스트림·시각화",
    href: "#projects",
    imageSrc: "/homepage/v1/business.png",
  },
  {
    iconSrc: "/file.svg",
    name: "안정성",
    title: "인증·세션·에러 복구 파이프라인",
    href: "#projects",
    imageSrc: "/homepage/v1/media.png",
  },
  {
    iconSrc: "/window.svg",
    name: "성장",
    title: "지표 기반 개선과 배포 자동화",
    href: "#projects",
    imageSrc: "/homepage/v1/about.png",
  },
];

const cards: Card[] = [
  {
    iconSrc: "/next.svg",
    name: "Next.js + Capacitor",
    title: "웹·앱을 단 하나의 코드베이스로",
    href: "/columns/one-code-base",
    imageSrc: "/social/one-code-base.png",
  },
  {
    iconSrc: "/globe.svg",
    name: "실시간 WebSocket",
    title: "끊김 없이 반영되는 실시간 데이터",
    href: "/columns/websocket",
    imageSrc: "/social/websocket.png",
  },
  {
    iconSrc: "/file.svg",
    name: "End-to-End 올라운더",
    title: "기획·개발·배포까지 고객을 중심으로",
    href: "/columns/end-to-end",
    imageSrc: "/social/end-to-end.png",
  },
  {
    iconSrc: "/window.svg",
    name: "운영 신뢰성",
    title: "캐시·복구·CI/CD로 중단 없는 경험",
    href: "/columns/ci-cd",
    imageSrc: "/social/ci-cd.png",
  },
];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-14 sm:py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <div className="text-sm opacity-70 mb-2">채용 임팩트</div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">투입 즉시 효과를 내는 역량</h2>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {cards.map((c, i) => (
            <div key={i} className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 dark:ring-white/10 bg-[#F8FAFB] dark:bg-white/5">
              {/* 상단: 콘텐츠 (패딩 적용 영역) */}
              <div className="p-6 sm:p-8">
                {/* 헤더: 아이콘 + 라벨 */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-brand ring-1 ring-black/5 dark:ring-white/10 flex items-center justify-center">
                    <Image src={c.iconSrc} alt="아이콘" width={20} height={20} className="opacity-90 brightness-0 invert" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold opacity-90">{c.name}</span>
                </div>

                {/* 타이틀 */}
                <h3 className="mt-5 text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight text-black/90 dark:text-white">
                  {c.title}
                </h3>

                {/* CTA */}
                <div className="mt-6">
                  <Link href={c.href} className="inline-flex items-center gap-2 text-brand font-semibold hover:underline">
                    더 알아보기
                    <span aria-hidden>›</span>
                  </Link>
                </div>
              </div>

              {/* 하단: 이미지 (패딩 없음, 카드 가장자리 밀착) */}
              <div className="w-full overflow-hidden">
                <Image
                  src={c.imageSrc}
                  alt="소셜 프루프 데모 이미지"
                  width={1600}
                  height={900}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


