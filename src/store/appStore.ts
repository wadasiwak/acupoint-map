import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "../i18n";

interface AppState {
  lang: Lang;
  /** Favorited acupoint ids (also used as the personal press routine). */
  favorites: string[];
  /** One-time disclaimer acknowledgement. */
  disclaimerSeen: boolean;
  soundOn: boolean;
  /** Best score in the locate-the-point quiz. */
  quizBest: number | null;
  setLang: (lang: Lang) => void;
  toggleSound: () => void;
  toggleFavorite: (pointId: string) => void;
  acceptDisclaimer: () => void;
  recordQuiz: (score: number) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      lang: "zh",
      favorites: [],
      disclaimerSeen: false,
      soundOn: true,
      quizBest: null,
      setLang: (lang) => set({ lang }),
      toggleSound: () => set((s) => ({ soundOn: !s.soundOn })),
      toggleFavorite: (pointId) =>
        set((s) => ({
          favorites: s.favorites.includes(pointId)
            ? s.favorites.filter((id) => id !== pointId)
            : [...s.favorites, pointId],
        })),
      acceptDisclaimer: () => set({ disclaimerSeen: true }),
      recordQuiz: (score) =>
        set((s) => ({ quizBest: Math.max(score, s.quizBest ?? 0) })),
    }),
    { name: "acumap-save" },
  ),
);
