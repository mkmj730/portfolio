import { create } from "zustand";

type FilterState = {
  domain: string | null;
  year: string | null;
  role: string | null;
  setDomain: (d: string | null) => void;
  setYear: (y: string | null) => void;
  setRole: (r: string | null) => void;
  clear: () => void;
};

export const useFilterStore = create<FilterState>((set) => ({
  domain: null,
  year: null,
  role: null,
  setDomain: (d) => set({ domain: d }),
  setYear: (y) => set({ year: y }),
  setRole: (r) => set({ role: r }),
  clear: () => set({ domain: null, year: null, role: null }),
}));


