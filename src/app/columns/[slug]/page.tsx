import Link from "next/link";
import Section from "@/components/Section";
import Image from "next/image";
import RichContent from "@/components/RichContent";
import { columnArticles } from "@/contents/columns";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return columnArticles.map((c) => ({ slug: c.slug }));
}

export default async function ColumnDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = columnArticles.find((c) => c.slug === slug);
  if (!article) return <div className="container py-20">칼럼을 찾을 수 없습니다.</div>;

  return (
    <div>
      <div className="mt-10">
        <Link href="/columns" className="underline">← 칼럼 목록으로</Link>
      </div>
      <Section title={article.title}>
        {article.cover ? (
          <div className="mb-6">
            <Image
              src={article.cover}
              alt={article.title}
              width={1600}
              height={900}
              className="w-full h-auto rounded-xl border border-black/10 dark:border-white/10"
              sizes="100vw"
              priority={false}
            />
          </div>
        ) : null}
        <RichContent blocks={article.blocks} />
      </Section>
    </div>
  );
}


