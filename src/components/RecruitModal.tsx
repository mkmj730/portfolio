"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { useRecruitFormStore } from "@/stores/useRecruitFormStore";
import type { RecruitForm } from "@/stores/useRecruitFormStore";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function RecruitModal({ open, onClose }: Props) {
  const { form, setField } = useRecruitFormStore();
  const [step, setStep] = useState(0);

  const steps = [
    { key: "basic", label: "기본정보" },
    { key: "role", label: "포지션/형태" },
    { key: "세부사항", label: "세부사항" },
  ];

  const disabled = useMemo(() => {
    return !form.company || !form.contact || !form.email || !form.role || !form.agree;
  }, [form]);

  const update = useCallback(<K extends keyof RecruitForm>(key: K, value: RecruitForm[K]) => setField(key, value), [setField]);

  const canProceed = useCallback((s: number) => {
    if (s === 0) return !!form.company && !!form.contact && !!form.email;
    if (s === 1) return !!form.role; // 유형/형태는 기본값 세팅됨
    return true;
  }, [form]);

  // 자동 이동 제거: 사용자가 명시적으로 '다음' 버튼으로만 이동

  // 최초 진입 시 합리적 기본값 자동 세팅
  useEffect(() => {
    if (!open) return;
    if (!form.hiringType) setField("hiringType", "무관");
    if (!form.workType) setField("workType", "무관");
    if (!form.startAt) setField("startAt", "협의 가능");
    if (!form.budget) setField("budget", "협의 가능");
    if (!form.location) setField("location", "무관");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

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
    window.location.href = `mailto:mkmj730@gmail.com?subject=${subject}&body=${body}`;
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 flex items-start sm:items-center justify-center p-4 overflow-y-auto">
        <div role="dialog" aria-modal="true" className="w-full max-w-3xl rounded-2xl bg-white dark:bg-neutral-900 ring-1 ring-black/10 dark:ring-white/10 shadow-xl overflow-hidden flex flex-col max-h-[90dvh]">
          <div className="px-6 py-4 border-b border-black/5 dark:border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs opacity-70">채용/프로젝트 제안</div>
                <h3 className="text-lg font-semibold tracking-tight">간단한 정보를 알려주세요</h3>
              </div>
              <button onClick={onClose} aria-label="닫기" className="w-8 h-8 rounded-md hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center">✕</button>
            </div>
            <StepBreadcrumb steps={steps.map((s) => s.label)} current={step} onSelect={(to) => setStep(Math.min(to, step))} />
          </div>

          <div className="px-6 py-5 overflow-y-auto">
            {step === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="회사명" value={form.company} onChange={(v) => update("company", v)} required />
                <Input label="담당자명" value={form.contact} onChange={(v) => update("contact", v)} required />
                <Input label="이메일" type="email" value={form.email} onChange={(v) => update("email", v)} required />
                <Input label="연락처" value={form.phone} onChange={(v) => update("phone", v)} placeholder="010-1234-5678" />
              </div>
            )}

            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <BadgeGroup label="채용 유형" value={form.hiringType} onChange={(v) => { update("hiringType", v); }} options={["무관", "정규직", "계약", "프리랜서", "컨설팅"]} />
                <Input label="모집 포지션" value={form.role} onChange={(v) => update("role", v)} required />
                <BadgeGroup label="근무 형태" value={form.workType} onChange={(v) => update("workType", v)} options={["무관", "상주", "원격", "하이브리드"]} />
                <div>
                  <Input label="시작 시기" value={form.startAt} onChange={(v) => update("startAt", v)} />
                  <QuickBadgeRow className="mt-2" options={["ASAP", "협의 가능", "무관"]} onPick={(v) => update("startAt", v)} />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input label="예산/연봉" value={form.budget} onChange={(v) => update("budget", v)} />
                  <QuickBadgeRow className="mt-2" options={["협의 가능", "무관"]} onPick={(v) => update("budget", v)} />
                </div>
                <div>
                  <Input label="근무지" value={form.location} onChange={(v) => update("location", v)} />
                  <QuickBadgeRow className="mt-2" options={["서울", "무관", "원격"]} onPick={(v) => update("location", v)} />
                </div>
                <Input label="핵심 기술스택" value={form.stack} onChange={(v) => update("stack", v)} placeholder="Next.js, TypeScript, WebSocket" />
                <Input label="관련 링크" value={form.links} onChange={(v) => update("links", v)} placeholder="채용공고/Notion/Drive 링크 등" />
                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Textarea label="프로젝트/조직 배경 및 요청" placeholder="프로젝트/조직 배경 및 요청을 입력해주세요." value={form.description} onChange={(v) => update("description", v)} rows={5} />
                  <DateTime label="면접 희망 일시" value={form.interviewDate} onChange={(v) => update("interviewDate", v)} />
                </div>
                <label className="md:col-span-2 mt-1 flex items-start gap-2 text-sm">
                  <input type="checkbox" className="mt-1" checked={form.agree} onChange={(e) => update("agree", e.target.checked)} />
                  <span className="opacity-80">문의 처리 목적의 개인정보 수집·이용에 동의합니다.</span>
                </label>
              </div>
            )}

            <div className="mt-6 flex flex-wrap justify-between gap-2">
              <div className="flex items-center gap-2">
                <button className="px-3 py-2 rounded-md text-sm ring-1 ring-black/10 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/10 disabled:opacity-50" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>이전</button>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2.5 rounded-md text-sm ring-1 ring-black/10 dark:ring-white/20 hover:bg-black/5 dark:hover:bg-white/10" onClick={onClose}>취소</button>
                {step < steps.length - 1 ? (
                  <button className="px-4 py-2.5 rounded-md text-sm font-semibold bg-brand text-white disabled:opacity-50" onClick={() => setStep(step + 1)} disabled={!canProceed(step)}>다음</button>
                ) : (
                  <button disabled={disabled} onClick={openMail} className="px-4 py-2.5 rounded-md text-sm font-semibold bg-brand text-white disabled:opacity-50">메일 열기</button>
                )}
              </div>
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

function BadgeGroup({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[]; }) {
  return (
    <label className="block text-sm">
      <span className="opacity-70">{label}</span>
      <div className="mt-1 flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={
                "px-3 py-1.5 rounded-full text-sm ring-1 " +
                (active
                  ? "bg-brand text-white ring-brand"
                  : "bg-white dark:bg-neutral-900 text-current ring-black/10 dark:ring-white/10 hover:bg-black/5 dark:hover:bg-white/10")
              }
            >
              {opt}
            </button>
          );
        })}
      </div>
    </label>
  );
}

function Textarea({ label, value, onChange, rows = 4, placeholder }: { label: string; value: string; onChange: (v: string) => void; rows?: number; placeholder?: string; }) {
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

function QuickBadgeRow({ options, onPick, className = "" }: { options: string[]; onPick: (v: string) => void; className?: string; }) {
  return (
    <div className={"flex flex-wrap gap-2 " + className}>
      {options.map((opt) => (
        <button key={opt} type="button" onClick={() => onPick(opt)}
          className="px-2.5 py-1.5 rounded-full text-xs ring-1 ring-black/10 dark:ring-white/10 hover:bg-black/5 dark:hover:bg-white/10">
          {opt}
        </button>
      ))}
    </div>
  );
}

function StepBreadcrumb({ steps, current, onSelect }: { steps: string[]; current: number; onSelect: (i: number) => void; }) {
  return (
    <div className="mt-4">
      <ol className="flex items-center gap-2">
        {steps.map((label, idx) => {
          const reached = idx <= current;
          return (
            <li key={label} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => onSelect(idx)}
                className={
                  "w-7 h-7 rounded-full text-xs font-semibold flex items-center justify-center ring-1 " +
                  (reached
                    ? "bg-brand text-white ring-brand"
                    : "bg-white dark:bg-neutral-900 text-current ring-black/10 dark:ring-white/10")
                }
                aria-current={idx === current ? "step" : undefined}
              >
                {idx + 1}
              </button>
              <span className={"text-xs " + (reached ? "opacity-100" : "opacity-60")}>{label}</span>
              {idx < steps.length - 1 && <span className="mx-1 w-8 h-px bg-black/10 dark:bg-white/10" />}
            </li>
          );
        })}
      </ol>
    </div>
  );
}


