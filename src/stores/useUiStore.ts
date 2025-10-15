import { create } from "zustand";

type UiState = {
  theme: "light" | "dark";
  mobileMenuOpen: boolean;
  setTheme: (t: UiState["theme"]) => void;
  openMobileMenu: () => void;
  closeMobileMenu: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  theme: "light",
  mobileMenuOpen: false,
  setTheme: (t) => set({ theme: t }),
  openMobileMenu: () => set({ mobileMenuOpen: true }),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
}));


