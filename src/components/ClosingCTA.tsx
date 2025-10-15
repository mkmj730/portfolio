import { narrative } from "@/contents/profile";

export default function ClosingCTA() {
  return (
    <section id="closing" className="py-16 sm:py-24 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">마무리</h2>
      <p className="max-w-3xl mx-auto text-base sm:text-lg opacity-90 leading-relaxed mb-6">
        {narrative.closing}
      </p>
      <div className="flex gap-3 justify-center">
        <a href="#contact" className="px-5 py-2.5 rounded-md bg-foreground text-background text-sm font-semibold hover:opacity-90">협업 제안하기</a>
        <a href="#alchemylab" className="px-5 py-2.5 rounded-md border border-black/10 dark:border-white/15 text-sm hover:bg-black/5 dark:hover:bg-white/10">프로젝트 다시 보기</a>
      </div>
    </section>
  );
}


