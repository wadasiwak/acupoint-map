/**
 * Screen state + URL hash sync (nihongo-quest state.ts 模式).
 * hash 格式:#s/<symptomId> / #p/<pointId> / #region/<regionId> / #index /
 *          #meridian/<meridianId> / #quiz / #combined/<id,id,…> /
 *          #routine/<routineId> / #calibrate (dev, handled in App).
 * hashToRoute 嚴格驗證:id 查資料索引、region/meridian 查枚舉、routine 查用戶存檔,
 * 不合法一律安全落回首頁。
 * pushState(非 replace)讓瀏覽器 back/forward 可以在畫面間往返。
 */
import { create } from "zustand";
import type { BodyRegion } from "./data/types";
import { meridianById, pointById, symptomById } from "./data";
import { useAppStore } from "./store/appStore";

export type Screen =
  | { kind: "home" }
  | { kind: "symptom"; id: string }
  | { kind: "combined"; ids: string[] }
  | { kind: "region"; region: BodyRegion }
  | { kind: "meridian"; id: string }
  | { kind: "index" }
  | { kind: "quiz" };

export interface Route {
  screen: Screen;
  /** Point-card modal overlaid on the screen — URL-addressable as #p/<id>. */
  pointId: string | null;
  /** RoutineRunner modal for a saved routine — URL-addressable as #routine/<id>. */
  routineId: string | null;
}

const REGIONS: BodyRegion[] = ["head", "neck-shoulder", "torso", "arm", "leg"];
const isRegion = (s: string): s is BodyRegion =>
  (REGIONS as string[]).includes(s);

export function screenToHash(s: Screen): string {
  switch (s.kind) {
    case "home":
      return "";
    case "symptom":
      return `#s/${s.id}`;
    case "combined":
      return `#combined/${s.ids.join(",")}`;
    case "region":
      return `#region/${s.region}`;
    case "meridian":
      return `#meridian/${s.id}`;
    case "index":
      return "#index";
    case "quiz":
      return "#quiz";
  }
}

export function routeToHash(r: Route): string {
  if (r.routineId) return `#routine/${r.routineId}`;
  return r.pointId ? `#p/${r.pointId}` : screenToHash(r.screen);
}

const HOME: Route = { screen: { kind: "home" }, pointId: null, routineId: null };

export function hashToRoute(hash: string): Route {
  const h = hash.replace(/^#/, "");
  if (!h) return HOME;
  const slash = h.indexOf("/");
  const head = slash === -1 ? h : h.slice(0, slash);
  const rest = slash === -1 ? "" : h.slice(slash + 1);
  if (head === "index" && !rest)
    return { screen: { kind: "index" }, pointId: null, routineId: null };
  if (head === "quiz" && !rest)
    return { screen: { kind: "quiz" }, pointId: null, routineId: null };
  if (head === "s" && symptomById(rest))
    return { screen: { kind: "symptom", id: rest }, pointId: null, routineId: null };
  if (head === "p" && pointById(rest))
    return { screen: { kind: "home" }, pointId: rest, routineId: null };
  if (head === "region" && isRegion(rest))
    return { screen: { kind: "region", region: rest }, pointId: null, routineId: null };
  if (head === "meridian" && meridianById(rest))
    return { screen: { kind: "meridian", id: rest }, pointId: null, routineId: null };
  if (head === "combined") {
    const ids = [...new Set(rest.split(","))].filter((id) => symptomById(id));
    if (ids.length >= 2)
      return { screen: { kind: "combined", ids }, pointId: null, routineId: null };
  }
  if (
    head === "routine" &&
    useAppStore
      .getState()
      .routines.some((r) => r.id === rest && r.pointIds.length > 0)
  )
    return { screen: { kind: "index" }, pointId: null, routineId: rest };
  return HOME;
}

interface RouterState extends Route {
  go: (screen: Screen) => void;
  openPoint: (id: string) => void;
  closePoint: () => void;
  openRoutine: (id: string) => void;
  closeRoutine: () => void;
}

const push = (hash: string) => {
  if (hash !== window.location.hash) {
    history.pushState(
      null,
      "",
      hash || window.location.pathname + window.location.search,
    );
  }
};

export const useRoute = create<RouterState>((set, get) => ({
  ...hashToRoute(window.location.hash),
  go: (screen) => {
    set({ screen, pointId: null, routineId: null });
    push(screenToHash(screen));
    window.scrollTo(0, 0);
  },
  openPoint: (id) => {
    set({ pointId: id, routineId: null });
    push(`#p/${id}`);
  },
  closePoint: () => {
    set({ pointId: null });
    push(screenToHash(get().screen));
  },
  openRoutine: (id) => {
    set({ routineId: id, pointId: null });
    push(`#routine/${id}`);
  },
  closeRoutine: () => {
    set({ routineId: null });
    push(screenToHash(get().screen));
  },
}));

const syncFromLocation = () => {
  useRoute.setState(hashToRoute(window.location.hash));
};
window.addEventListener("hashchange", syncFromLocation);
window.addEventListener("popstate", syncFromLocation);
