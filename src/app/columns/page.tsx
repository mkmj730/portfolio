import Link from "next/link";
import Section from "@/components/Section";
import { columnArticles } from "@/contents/columns";

export default function ColumnsIndexPage() {
  return (
    <Section title="Column" subtitle="생각을 구조화하고, 실행으로 검증합니다.">
      <div className="grid gap-6 md:grid-cols-2">
        {columnArticles.map((c) => (
          <Link
            key={c.slug}
            href={`/columns/${c.slug}`}
            className="group block rounded-2xl border border-black/10 dark:border-white/10 p-5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <div className="text-sm opacity-70 mb-2">Column</div>
            <h3 className="text-xl font-semibold mb-2 group-hover:underline">{c.title}</h3>
            {c.excerpt ? <p className="opacity-80">{c.excerpt}</p> : null}
          </Link>
        ))}
      </div>
    </Section>
  );
}


