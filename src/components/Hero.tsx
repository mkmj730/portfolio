"use client";
import { profile } from "@/contents/profile";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RecruitModal from "@/components/RecruitModal";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <section id="home" className="pt-8 pb-16 sm:py-24">
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* 텍스트 영역 */}
        <div className="order-2 md:order-1">
          <div className="text-center md:text-left">
            <div className="text-xs sm:text-sm opacity-70">스스로 배우고, 만들고, 실행까지</div>
            <h1 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight">
              임팩트에 집중하는 <span className="text-brand">개발자</span>
            </h1>
            <p className="mt-3 text-sm sm:text-base opacity-80">{profile.name} | {profile.title}</p>
            <p className="mt-6 text-base sm:text-lg opacity-90 leading-relaxed max-w-2xl">
              Next.js와 Capacitor로 웹·앱을 하나의 코드베이스로 운영할 수 있습니다. 실시간 데이터와 시각화,
              인증·세션·성능 최적화까지 전 과정에서 전환과 안정성을 끌어올립니다.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <button onClick={() => setOpen(true)} className="px-4 py-2.5 rounded-md bg-brand text-white text-sm font-semibold hover:brightness-110">
                무료로 면접보기
              </button>
              <Link target="_blank" rel="noreferrer" href="/resume_standard.pdf" className="px-4 py-2.5 rounded-md ring-1 ring-black/10 dark:ring-white/20 text-sm font-semibold hover:bg-white/60 dark:hover:bg-white/10">
                이력서 보기
              </Link>
            </div>
          </div>
        </div>
        {/* 프로필 사진 */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-56 h-56 sm:w-80 sm:h-80 rounded-[32px] overflow-hidden ring-8 ring-black/5 dark:ring-white/10 shadow-lg bg-gradient-to-br from-brand/10 to-transparent">
            <Image src="/images/profile.png" alt="김명재 프로필 사진" fill sizes="(max-width: 768px) 320px, 400px" className="object-cover" priority />
          </div>
        </div>
      </div>
      {open && <RecruitModal open={open} onClose={() => setOpen(false)} />}
    </section>
  );
}


