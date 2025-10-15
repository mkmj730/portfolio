import { profile } from "@/contents/profile";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="py-14 sm:py-20">
      <div className="grid md:grid-cols-2 items-center gap-8">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {profile.name} <span className="opacity-70">| {profile.title}</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg opacity-90 leading-relaxed max-w-2xl">
            스타트업 현장에서 ‘문제를 정의하고, 기술로 해결하는 개발자’. 기획·디자인·개발·마케팅을 잇는 사용자 중심 흐름을 설계합니다. Next.js, TypeScript, Zustand, Capacitor 기반 웹·앱 통합 개발.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/work" className="px-4 py-2 rounded-md bg-foreground text-background text-sm font-semibold hover:opacity-90">
              프로젝트 보기
            </Link>
            <Link href="/contact" className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 text-sm hover:bg-black/5 dark:hover:bg-white/10">
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


