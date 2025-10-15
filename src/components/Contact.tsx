export default function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">연락</h2>
      <p className="opacity-90 mb-4">프로젝트 논의 또는 협업 제안은 아래 채널로 연락해주세요.</p>
      <div className="flex flex-wrap gap-3">
        <a href="mailto:mkmj730@gmail.com" className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 text-sm">이메일</a>
        {/* <a href="https://github.com/your-github" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 text-sm">GitHub</a> */}
        <a href="/resume.pdf" className="px-4 py-2 rounded-md bg-foreground text-background text-sm font-semibold hover:opacity-90">이력서 PDF</a>
      </div>
    </section>
  );
}


