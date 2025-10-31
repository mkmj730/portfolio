import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="레퍼런스/질문 환영">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 flex flex-col gap-3">
        <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 w-fit" href={profile.github} target="_blank" rel="noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden>
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.428 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.852.004 1.71.115 2.51.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.309.679.919.679 1.852 0 1.337-.012 2.415-.012 2.743 0 .268.18.58.688.481A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clipRule="evenodd" />
          </svg>
          <span>GitHub</span>
        </a>
        <a className="underline" href="/resume_notion.pdf" target="_blank" rel="noreferrer">이력서 (IT)</a>
        <a className="underline" href="/resume_standard.pdf" target="_blank" rel="noreferrer">이력서 (일반)</a>
      </div>
    </Section>
  );
}


