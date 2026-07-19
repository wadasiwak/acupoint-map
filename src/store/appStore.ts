import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "../i18n";
import { pointById } from "../data";

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
  /**
   * Restore a backup made by exportBackup(). Verifies the `__app` marker,
   * then MERGES: favorites are unioned (invalid ids dropped), quiz best
   * keeps the higher score. Returns false if the file isn't ours.
   */
  importBackup: (json: string) => boolean;
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
      importBackup: (json) => {
        try {
          const data = JSON.parse(json);
          if (
            typeof data !== "object" ||
            data === null ||
            data.__app !== "acupoint-map"
          )
            return false;
          const incoming: string[] = Array.isArray(data.favorites)
            ? data.favorites.filter(
                (id: unknown) => typeof id === "string" && pointById(id),
              )
            : [];
          set((s) => ({
            favorites: [...new Set([...s.favorites, ...incoming])],
            quizBest:
              typeof data.quizBest === "number"
                ? Math.max(data.quizBest, s.quizBest ?? 0)
                : s.quizBest,
          }));
          return true;
        } catch {
          return false;
        }
      },
    }),
    { name: "acumap-save" },
  ),
);

/** Backup JSON for download — favorites + quiz best, tagged with `__app`. */
export function exportBackup(): string {
  const s = useAppStore.getState();
  return JSON.stringify(
    {
      __app: "acupoint-map",
      exportedAt: new Date().toISOString().slice(0, 10),
      favorites: s.favorites,
      quizBest: s.quizBest,
    },
    null,
    2,
  );
}
