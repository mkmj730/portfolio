"use client";

import Section from "@/components/Section";
import ProjectFilters from "@/components/ProjectFilters";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { useFilterStore } from "@/stores/useFilterStore";

export default function WorkPage() {
  const domains = Array.from(new Set(projects.flatMap((p) => p.domain ?? [])));
  const years = Array.from(new Set(projects.map((p) => p.period)));
  const roles = Array.from(new Set(projects.flatMap((p) => p.role)));

  const { domain, year, role } = useFilterStore();

  const getYearKey = (period: string) => {
    const matches = period.match(/\d{4}/g);
    if (!matches) return 0;
    return Number(matches[matches.length - 1]);
  };

  const sorted = [...projects].sort((a, b) => getYearKey(b.period) - getYearKey(a.period));

  const filtered = sorted.filter((p) => {
    const domainOk = !domain || (p.domain ?? []).includes(domain);
    const yearOk = !year || p.period === year;
    const roleOk = !role || p.role.includes(role);
    return domainOk && yearOk && roleOk;
  });

  return (
    <Section title="Projects" subtitle="문제 → 목표 → 해결 → 성과">
      <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-7 bg-white/50 dark:bg-white/5 mb-6">
        <p className="opacity-90 text-sm">실제 이력 기반으로 업데이트되었습니다. 각 케이스에서 문제·목표·해결·성과를 확인할 수 있어요.</p>
      </div>
      <div className="mb-6">
        <ProjectFilters domains={domains} years={years} roles={roles} />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} p={p} />
        ))}
      </div>
    </Section>
  );
}


