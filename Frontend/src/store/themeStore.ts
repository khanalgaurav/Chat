import { create } from "zustand";

type ThemeStore = {
  theme: string;
  setTheme: (theme: string) => void;
};
export const useThemeStore = create<ThemeStore>((set) => ({
  theme: localStorage.getItem("theme") || "dark",
  setTheme: (theme: any) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));
