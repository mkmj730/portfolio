import { projects } from "@/data/projects";
import Section from "@/components/Section";
import MockupFrame from "@/components/MockupFrame";
import GalleryLightbox from "@/components/GalleryLightbox";
import Link from "next/link";
import type { Viewport } from "next";
import RichContent from "@/components/RichContent";
import { getWorkContentBySlug } from "@/contents/work";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <div className="container py-20">프로젝트를 찾을 수 없습니다.</div>;
  const tabs = [p.case.problem, p.case.goals, p.case.solution, p.case.impact, p.case.learnings].filter(Boolean);
  const workContent = getWorkContentBySlug(p.slug);
  return (
    <div>
      <div className="mt-10">
        <Link href="/work" className="underline">← 프로젝트 목록으로</Link>
      </div>      
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
        {workContent?.blocks?.length ? (
          <div className="mt-10">
            <h3 className="font-semibold mb-3">상세</h3>
            <RichContent blocks={workContent.blocks} />
          </div>
        ) : null}
        {p.gallery?.length ? (
          <div className="mt-10">
            <GalleryLightbox
              images={p.gallery.map((g, i) => ({ src: g, alt: `${p.title} mockup ${i + 1}` }))}
            />
          </div>
        ) : null}
        <div className="mt-10">
          <Link href="/work" className="underline">← 프로젝트 목록으로</Link>
        </div>
      </Section>
    </div>
  );
}

export const viewport: Viewport = {
  themeColor: "#0064FF",
};


