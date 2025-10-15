import { profile } from "@/contents/profile";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="py-14 sm:py-20">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            본질을 추구하는 개발자
          </h1>
          <p className="mt-3 text-sm sm:text-base opacity-80">{profile.name} | {profile.title}</p>
          <p className="mt-6 text-base sm:text-lg opacity-90 leading-relaxed max-w-2xl">
            지표와 인터뷰로 리스크를 명확히 정의하고, Next.js + Capacitor로 웹·앱을 하나의 흐름으로 통합해 빠르게 검증합니다. WebSocket 기반 실시간 데이터·시각화로 신뢰를 만들고, OAuth·세션·성능 최적화로 전환을 높입니다.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="#contact" className="px-4 py-2 rounded-md bg-brand text-white text-sm font-semibold hover:brightness-110">
              협업 제안하기
            </Link>
            <Link href="/resume.pdf" className="px-4 py-2 rounded-md border border-brand/40 text-sm text-brand hover:bg-brand/10">
              이력서 다운로드
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden ring-8 ring-black/5 dark:ring-white/10 shadow-md">
            <Image src="/images/profile.png" alt="김명재 프로필 사진" fill sizes="(max-width: 768px) 224px, 288px" className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}


