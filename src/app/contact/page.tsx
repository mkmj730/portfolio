import Section from "@/components/Section";
import { profile } from "@/data/profile";

export default function ContactPage() {
  return (
    <Section title="Contact" subtitle="레퍼런스/질문 환영">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 flex flex-col gap-3">
        <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a>
        {/* <a className="underline" href={profile.github} target="_blank" rel="noreferrer">GitHub</a> */}
        <a className="underline" href={profile.resume}>Resume(PDF)</a>
      </div>
    </Section>
  );
}


