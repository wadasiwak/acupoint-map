import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "../i18n";
import { pointById } from "../data";

/** A named press routine: an ordered sequence of acupoints, run in RoutineRunner. */
export interface Routine {
  id: string;
  name: string;
  pointIds: string[];
}

const newRoutineId = () =>
  `r${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;

interface AppState {
  lang: Lang;
  /** Favorited acupoint ids — a bookmark list (routines are separate). */
  favorites: string[];
  /** Named press routines, each runnable in RoutineRunner. */
  routines: Routine[];
  /** One-time disclaimer acknowledgement. */
  disclaimerSeen: boolean;
  soundOn: boolean;
  /** Best score in the locate-the-point quiz. */
  quizBest: number | null;
  /** Best score in the symptom↔point match quiz (added later; may be absent
   *  in old saves — persist's shallow merge defaults it to null). */
  matchBest: number | null;
  setLang: (lang: Lang) => void;
  toggleSound: () => void;
  toggleFavorite: (pointId: string) => void;
  /** Create a routine; returns its id. */
  addRoutine: (name: string, pointIds: string[]) => string;
  renameRoutine: (id: string, name: string) => void;
  deleteRoutine: (id: string) => void;
  /** Replace a routine's sequence (reorder / add / remove). */
  setRoutinePoints: (id: string, pointIds: string[]) => void;
  /** Append a point to a routine if not already in it. */
  addPointToRoutine: (id: string, pointId: string) => void;
  acceptDisclaimer: () => void;
  recordQuiz: (score: number) => void;
  recordMatch: (score: number) => void;
  /**
   * Restore a backup made by exportBackup(). Verifies the `__app` marker,
   * then MERGES: favorites are unioned (invalid ids dropped), routines with
   * a new name are appended (same-name keeps the existing one), quiz best
   * keeps the higher score. Returns false if the file isn't ours.
   */
  importBackup: (json: string) => boolean;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      lang: "zh",
      favorites: [],
      routines: [],
      disclaimerSeen: false,
      soundOn: true,
      quizBest: null,
      matchBest: null,
      setLang: (lang) => set({ lang }),
      toggleSound: () => set((s) => ({ soundOn: !s.soundOn })),
      toggleFavorite: (pointId) =>
        set((s) => ({
          favorites: s.favorites.includes(pointId)
            ? s.favorites.filter((id) => id !== pointId)
            : [...s.favorites, pointId],
        })),
      addRoutine: (name, pointIds) => {
        const id = newRoutineId();
        set((s) => ({
          routines: [...s.routines, { id, name: name.trim(), pointIds }],
        }));
        return id;
      },
      renameRoutine: (id, name) =>
        set((s) => ({
          routines: s.routines.map((r) =>
            r.id === id && name.trim() ? { ...r, name: name.trim() } : r,
          ),
        })),
      deleteRoutine: (id) =>
        set((s) => ({ routines: s.routines.filter((r) => r.id !== id) })),
      setRoutinePoints: (id, pointIds) =>
        set((s) => ({
          routines: s.routines.map((r) =>
            r.id === id ? { ...r, pointIds } : r,
          ),
        })),
      addPointToRoutine: (id, pointId) =>
        set((s) => ({
          routines: s.routines.map((r) =>
            r.id === id && !r.pointIds.includes(pointId)
              ? { ...r, pointIds: [...r.pointIds, pointId] }
              : r,
          ),
        })),
      acceptDisclaimer: () => set({ disclaimerSeen: true }),
      recordQuiz: (score) =>
        set((s) => ({ quizBest: Math.max(score, s.quizBest ?? 0) })),
      recordMatch: (score) =>
        set((s) => ({ matchBest: Math.max(score, s.matchBest ?? 0) })),
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
          // Sanitize incoming routines: real name, known points only, non-empty.
          const incomingRoutines: Routine[] = (
            Array.isArray(data.routines) ? data.routines : []
          )
            .filter(
              (r: unknown): r is Routine =>
                typeof r === "object" &&
                r !== null &&
                typeof (r as Routine).name === "string" &&
                (r as Routine).name.trim() !== "" &&
                Array.isArray((r as Routine).pointIds),
            )
            .map((r: Routine) => ({
              id: typeof r.id === "string" && r.id ? r.id : newRoutineId(),
              name: r.name.trim(),
              pointIds: r.pointIds.filter(
                (id: unknown) => typeof id === "string" && pointById(id),
              ),
            }))
            .filter((r: Routine) => r.pointIds.length > 0);
          set((s) => {
            const names = new Set(s.routines.map((r) => r.name));
            const ids = new Set(s.routines.map((r) => r.id));
            const added = incomingRoutines
              .filter((r) => !names.has(r.name)) // same name → keep existing
              .map((r) => (ids.has(r.id) ? { ...r, id: newRoutineId() } : r));
            return {
              favorites: [...new Set([...s.favorites, ...incoming])],
              routines: [...s.routines, ...added],
              quizBest:
                typeof data.quizBest === "number"
                  ? Math.max(data.quizBest, s.quizBest ?? 0)
                  : s.quizBest,
              matchBest:
                typeof data.matchBest === "number"
                  ? Math.max(data.matchBest, s.matchBest ?? 0)
                  : s.matchBest,
            };
          });
          return true;
        } catch {
          return false;
        }
      },
    }),
    {
      name: "acumap-save",
      version: 1,
      // v0 → v1: favorites doubled as "the" routine. Preserve that as a
      // named routine「我的收藏」so old users keep their one-tap sequence.
      migrate: (persisted, version) => {
        const s = (persisted ?? {}) as Partial<AppState> & {
          routines?: Routine[];
        };
        if (version < 1) {
          const favs = Array.isArray(s.favorites) ? s.favorites : [];
          if (favs.length && !s.routines?.length) {
            s.routines = [
              {
                id: newRoutineId(),
                name: s.lang === "en" ? "My favorites" : "我的收藏",
                pointIds: [...favs],
              },
            ];
          }
        }
        return s as AppState;
      },
    },
  ),
);

/** Backup JSON for download — favorites + routines + quiz best, tagged with `__app`. */
export function exportBackup(): string {
  const s = useAppStore.getState();
  return JSON.stringify(
    {
      __app: "acupoint-map",
      exportedAt: new Date().toISOString().slice(0, 10),
      favorites: s.favorites,
      routines: s.routines,
      quizBest: s.quizBest,
      matchBest: s.matchBest,
    },
    null,
    2,
  );
}
