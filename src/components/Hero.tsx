import { profile } from "@/contents/profile";

export default function Hero() {
  return (
    <section id="home" className="py-14 sm:py-20">
      <div className="grid gap-6 sm:gap-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          {profile.name} <span className="opacity-70">| {profile.title}</span>
        </h1>
        <p className="text-base sm:text-lg opacity-90 leading-relaxed max-w-2xl">
          스타트업 현장에서 ‘문제를 정의하고, 기술로 해결하는 개발자’. 기획·디자인·개발·마케팅을 잇는
          사용자 중심 흐름을 설계합니다. Next.js, TypeScript, Zustand, Capacitor 기반 웹·앱 통합 개발.
        </p>
        <div className="flex gap-3">
          <a href="#projects" className="px-4 py-2 rounded-md bg-foreground text-background text-sm font-semibold hover:opacity-90">
            프로젝트 보기
          </a>
          <a href="#contact" className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 text-sm hover:bg-black/5 dark:hover:bg-white/10">
            이력서 다운로드
          </a>
        </div>
      </div>
    </section>
  );
}


