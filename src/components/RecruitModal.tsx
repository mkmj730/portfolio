"use client";

import { useMemo } from "react";
import { useRecruitFormStore } from "@/stores/useRecruitFormStore";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function RecruitModal({ open, onClose }: Props) {
  const { form, setField } = useRecruitFormStore();

  const disabled = useMemo(() => {
    return !form.company || !form.contact || !form.email || !form.role || !form.agree;
  }, [form]);

  const update = (key: keyof typeof form, value: string | boolean) => setField(key as any, value as any);

  const buildPlain = () => {
    const bodyLines = [
      `회사명: ${form.company}`,
      `담당자: ${form.contact}`,
      `이메일: ${form.email}`,
      `연락처: ${form.phone}`,
      `채용유형: ${form.hiringType}`,
      `포지션: ${form.role}`,
      `근무형태: ${form.workType}`,
      `시작 시기: ${form.startAt}`,
      `예산/연봉: ${form.budget}`,
      `근무지: ${form.location}`,
      `기술스택: ${form.stack}`,
      `관련 링크: ${form.links}`,
      "",
      "요청/배경",
      form.description,
    ];
    return bodyLines.join("\n");
  };

  const openMail = () => {
    if (disabled) return;
    const subject = encodeURIComponent(`채용/프로젝트 문의 - ${form.company} (${form.role})`);
    const body = encodeURIComponent(buildPlain());
    window.location.href = `mailto:myeongjae.kim.dev@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
        <div role="dialog" aria-modal="true" className="w-full max-w-3xl rounded-2xl bg-white dark:bg-neutral-900 ring-1 ring-black/10 dark:ring-white/10 shadow-xl overflow-hidden flex flex-col max-h-[90dvh]">
          <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/10">
            <div>
              <div className="text-xs opacity-70">채용/프로젝트 제안</div>
              <h3 className="text-lg font-semibold tracking-tight">간단한 정보를 알려주세요</h3>
            </div>
            <button onClick={onClose} aria-label="닫기" className="w-8 h-8 rounded-md hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center">✕</button>
          </div>

          <div className="px-6 py-5 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="회사명" value={form.company} onChange={(v) => update("company", v)} required />
              <Input label="담당자명" value={form.contact} onChange={(v) => update("contact", v)} required />
              <Input label="이메일" type="email" value={form.email} onChange={(v) => update("email", v)} required />
              <Input label="연락처" value={form.phone} onChange={(v) => update("phone", v)} placeholder="010-1234-5678" />

              <Select label="채용 유형" value={form.hiringType} onChange={(v) => update("hiringType", v)} options={["정규직", "계약", "프리랜서", "컨설팅"]} />
              <Input label="모집 포지션" value={form.role} onChange={(v) => update("role", v)} required />

              <Select label="근무 형태" value={form.workType} onChange={(v) => update("workType", v)} options={["상주", "원격", "하이브리드"]} />
              <Input label="시작 시기" value={form.startAt} onChange={(v) => update("startAt", v)} />

              <Input label="예산/연봉" value={form.budget} onChange={(v) => update("budget", v)} />
              <Input label="근무지" value={form.location} onChange={(v) => update("location", v)} />

              <Input label="핵심 기술스택" value={form.stack} onChange={(v) => update("stack", v)} placeholder="Next.js, TypeScript, WebSocket" />
              <Input label="관련 링크" value={form.links} onChange={(v) => update("links", v)} placeholder="채용공고/Notion/Drive 링크 등" />
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Textarea label="프로젝트/조직 배경 및 요청" value={form.description} onChange={(v) => update("description", v)} rows={5} />
              <DateTime label="면접 희망 일시" value={form.interviewDate} onChange={(v) => update("interviewDate", v)} />
            </div>

            <label className="mt-4 flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" checked={form.agree} onChange={(e) => update("agree", e.target.checked)} />
              <span className="opacity-80">문의 처리 목적의 개인정보 수집·이용에 동의합니다.</span>
            </label>

            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button className="px-4 py-2.5 rounded-md text-sm ring-1 ring-black/10 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/10" onClick={onClose}>취소</button>
              <button disabled={disabled} onClick={openMail} className="px-4 py-2.5 rounded-md text-sm font-semibold bg-brand text-white disabled:opacity-50">메일 열기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", placeholder, required }: { label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; required?: boolean; }) {
  return (
    <label className="block text-sm">
      <span className="opacity-70">{label}{required && <span className="text-brand"> *</span>}</span>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="mt-1 w-full rounded-md bg-white dark:bg-neutral-900 ring-1 ring-black/10 dark:ring-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/60" />
    </label>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[]; }) {
  return (
    <label className="block text-sm">
      <span className="opacity-70">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md bg-white dark:bg-neutral-900 ring-1 ring-black/10 dark:ring-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/60">
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}

function Textarea({ label, value, onChange, rows = 4 }: { label: string; value: string; onChange: (v: string) => void; rows?: number; }) {
  return (
    <label className="block text-sm w-full">
      <span className="opacity-70">{label}</span>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} rows={rows}
        className="mt-1 w-full rounded-md bg-white dark:bg-neutral-900 ring-1 ring-black/10 dark:ring-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/60" />
    </label>
  );
}

function DateTime({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void; }) {
  return (
    <label className="block text-sm w-full">
      <span className="opacity-70">{label}</span>
      <input type="datetime-local" value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md bg-white dark:bg-neutral-900 ring-1 ring-black/10 dark:ring-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand/60" />
    </label>
  );
}


