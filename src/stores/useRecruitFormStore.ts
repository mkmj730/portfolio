import { create } from "zustand";

export type RecruitForm = {
  company: string;
  contact: string;
  email: string;
  phone: string;
  hiringType: string;
  role: string;
  workType: string;
  startAt: string;
  budget: string;
  location: string;
  stack: string;
  links: string;
  description: string;
  interviewDate: string; // datetime-local
  agree: boolean;
};

type RecruitFormStore = {
  form: RecruitForm;
  setField: <K extends keyof RecruitForm>(key: K, value: RecruitForm[K]) => void;
  reset: () => void;
};

const initial: RecruitForm = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  hiringType: "정규직",
  role: "프론트엔드 개발자",
  workType: "하이브리드",
  startAt: "즉시",
  budget: "면접 후 협의",
  location: "서울/원격",
  stack: "Next.js, TypeScript, Capacitor",
  links: "",
  description: "프로젝트/조직/역할 배경을 간단히 적어주세요.",
  interviewDate: "",
  agree: false,
};

export const useRecruitFormStore = create<RecruitFormStore>((set) => ({
  form: initial,
  setField: (key, value) => set((s) => ({ form: { ...s.form, [key]: value } })),
  reset: () => set({ form: initial }),
}));


