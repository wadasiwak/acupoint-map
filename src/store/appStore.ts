import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "../i18n";

interface AppState {
  lang: Lang;
  /** Favorited acupoint ids. */
  favorites: string[];
  /** One-time disclaimer acknowledgement. */
  disclaimerSeen: boolean;
  setLang: (lang: Lang) => void;
  toggleFavorite: (pointId: string) => void;
  acceptDisclaimer: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      lang: "zh",
      favorites: [],
      disclaimerSeen: false,
      setLang: (lang) => set({ lang }),
      toggleFavorite: (pointId) =>
        set((s) => ({
          favorites: s.favorites.includes(pointId)
            ? s.favorites.filter((id) => id !== pointId)
            : [...s.favorites, pointId],
        })),
      acceptDisclaimer: () => set({ disclaimerSeen: true }),
    }),
    { name: "acumap-save" },
  ),
);
