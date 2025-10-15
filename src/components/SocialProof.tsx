import Image from "next/image";

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-14 sm:py-20">
      <div className="container">
        <div className="mb-8 text-center">
          <div className="text-sm opacity-70 mb-2">신뢰의 근거</div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">함께한 팀과 성과</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
          <div className="opacity-90 dark:opacity-100">
            <Image className="dark:invert" src="/logos/kanginham_full.png" alt="㈜ 강인함" width={120} height={40} />
          </div>
          <div className="opacity-90 dark:opacity-100">
            <Image className="dark:invert" src="/logos/alchemilab.png" alt="AlchemiLab" width={120} height={40} />
          </div>
          <div className="opacity-90 dark:opacity-100">
            <Image className="dark:brightness-125" src="/logos/cnu.png" alt="충남대학교" width={120} height={40} />
          </div>
          <div className="opacity-90 dark:opacity-100">
            <Image className="dark:brightness-125" src="/logos/army.svg" alt="대한민국 육군" width={120} height={40} />
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl p-4 text-center bg-white/50 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
            <div className="text-2xl font-extrabold">월평균 +178% 성장</div>
            <div className="text-sm opacity-80">서비스 제품 초기 운영</div>
          </div>
          <div className="rounded-xl p-4 text-center bg-white/50 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
            <div className="text-2xl font-extrabold">91% 만족도</div>
            <div className="text-sm opacity-80">사용자 인터뷰 기반 개선</div>
          </div>
          <div className="rounded-xl p-4 text-center bg-white/50 dark:bg-white/5 ring-1 ring-black/5 dark:ring-white/10">
            <div className="text-2xl font-extrabold">+5 프로젝트</div>
            <div className="text-sm opacity-80">크립토/거래 도메인 납품 및 리드</div>
          </div>
        </div>
      </div>
    </section>
  );
}


