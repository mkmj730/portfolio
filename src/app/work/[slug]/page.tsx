import { projects } from "@/data/projects";
import Section from "@/components/Section";
import MockupFrame from "@/components/MockupFrame";
import Link from "next/link";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function CaseStudyPage({ params }: Props) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return <div className="container py-20">프로젝트를 찾을 수 없습니다.</div>;
  const tabs = [p.case.problem, p.case.goals, p.case.solution, p.case.impact, p.case.learnings].filter(Boolean);
  return (
    <div>
      <Section title={p.title} subtitle={`${p.period} · ${p.role.join(", ")}`}>
        <div className="mb-6">
          <MockupFrame src={p.cover || "/covers/placeholder.svg"} alt={p.title} />
        </div>
        <p className="opacity-90 mb-6">{p.summary}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {p.stack.map((s, i) => (
            <span key={i} className="px-2 py-1 text-xs rounded-md bg-black/5 dark:bg-white/10">{s}</span>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tabs.map((b, i) => (
            <article key={i} className="rounded-2xl border border-black/10 dark:border-white/10 p-5">
              <h3 className="font-semibold mb-2">{b!.title}</h3>
              <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap">{b!.md}</div>
            </article>
          ))}
        </div>
        {p.gallery?.length ? (
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {p.gallery.map((g, i) => (
              <MockupFrame key={i} src={g} alt={`${p.title} mockup ${i + 1}`} />
            ))}
          </div>
        ) : null}
        <div className="mt-10">
          <Link href="/work" className="underline">← 프로젝트 목록으로</Link>
        </div>
      </Section>
    </div>
  );
}


