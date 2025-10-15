"use client";

import { useFilterStore } from "@/stores/useFilterStore";

const pill = "px-3 py-1.5 rounded-full text-xs border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10";

export default function ProjectFilters({ domains, years, roles }: { domains: string[]; years: string[]; roles: string[] }) {
  const { domain, year, role, setDomain, setYear, setRole, clear } = useFilterStore();
  return (
    <div className="flex flex-wrap gap-2 items-center">
      <span className="text-sm opacity-70 mr-2">필터</span>
      <button className={pill} onClick={() => clear()}>전체</button>
      {domains.map((d) => (
        <button key={d} className={pill + (domain === d ? " bg-black/10 dark:bg-white/15" : "")} onClick={() => setDomain(domain === d ? null : d)}>{d}</button>
      ))}
      {years.map((y) => (
        <button key={y} className={pill + (year === y ? " bg-black/10 dark:bg-white/15" : "")} onClick={() => setYear(year === y ? null : y)}>{y}</button>
      ))}
      {roles.map((r) => (
        <button key={r} className={pill + (role === r ? " bg-black/10 dark:bg-white/15" : "")} onClick={() => setRole(role === r ? null : r)}>{r}</button>
      ))}
    </div>
  );
}


