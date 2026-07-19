import { useState } from "react";
import { ACUPOINTS, pointById } from "../data";
import { PRESET_ROUTINES } from "../data/presets";
import { useAppStore, type Routine } from "../store/appStore";
import { useT, L } from "../i18n";
import { playClick } from "../lib/sound";

/**
 * "我的按摩方案" block on the index screen: named routines (list / create /
 * rename / delete / reorder points) + one-tap starter presets.
 */
export default function RoutinesSection({
  onStart,
}: {
  onStart: (routineId: string) => void;
}) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const routines = useAppStore((s) => s.routines);
  const addRoutine = useAppStore((s) => s.addRoutine);
  const deleteRoutine = useAppStore((s) => s.deleteRoutine);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [newName, setNewName] = useState("");

  const create = () => {
    const name = newName.trim();
    if (!name) return;
    const id = addRoutine(name, []);
    setNewName("");
    setCreating(false);
    setEditingId(id); // jump straight into adding points
    playClick();
  };

  // Presets already applied (matched by name in either language) are hidden.
  const names = new Set(routines.map((r) => r.name));
  const presets = PRESET_ROUTINES.filter(
    (p) => !names.has(p.name.zh) && !names.has(p.name.en),
  );

  return (
    <section className="cat-section">
      <h3 className="cat-head">📋 {t("routines_head")}</h3>
      {routines.length === 0 && (
        <p className="muted empty-note">{t("routines_empty")}</p>
      )}
      {routines.length > 0 && (
        <div className="routine-list">
          {routines.map((r) => (
            <div key={r.id} className="routine-item">
              <div className="routine-item-head">
                <span className="routine-item-title">
                  <span className="routine-name">{r.name}</span>
                  <span className="routine-count">
                    {t("routine_points_n", { n: r.pointIds.length })}
                  </span>
                </span>
                <span className="routine-actions">
                  <button
                    className="btn btn--primary btn--sm"
                    disabled={r.pointIds.length === 0}
                    onClick={() => onStart(r.id)}
                  >
                    {t("routine_start")}
                  </button>
                  <button
                    className="btn btn--ghost btn--sm"
                    onClick={() => {
                      setEditingId(editingId === r.id ? null : r.id);
                      setConfirmId(null);
                    }}
                  >
                    {editingId === r.id ? t("routine_edit_done") : t("routine_edit")}
                  </button>
                  {confirmId === r.id ? (
                    <button
                      className="btn btn--sm routine-delete-confirm"
                      onClick={() => {
                        deleteRoutine(r.id);
                        setConfirmId(null);
                        if (editingId === r.id) setEditingId(null);
                      }}
                    >
                      {t("routine_delete_confirm")}
                    </button>
                  ) : (
                    <button
                      className="btn btn--ghost btn--sm"
                      onClick={() => setConfirmId(r.id)}
                    >
                      {t("routine_delete")}
                    </button>
                  )}
                </span>
              </div>
              {editingId === r.id && <RoutineEditor routine={r} />}
            </div>
          ))}
        </div>
      )}

      {creating ? (
        <div className="routine-new-form">
          <input
            className="routine-name-input"
            placeholder={t("routine_name_ph")}
            value={newName}
            maxLength={30}
            autoFocus
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && create()}
          />
          <button
            className="btn btn--primary btn--sm"
            disabled={!newName.trim()}
            onClick={create}
          >
            {t("routine_create")}
          </button>
          <button
            className="btn btn--ghost btn--sm"
            onClick={() => {
              setCreating(false);
              setNewName("");
            }}
          >
            {t("routine_cancel")}
          </button>
        </div>
      ) : (
        <button
          className="btn btn--ghost btn--sm routine-new-btn"
          onClick={() => {
            setCreating(true);
            playClick();
          }}
        >
          {t("routine_new")}
        </button>
      )}

      {presets.length > 0 && (
        <div className="preset-block">
          <h4 className="preset-head">{t("routine_presets_head")}</h4>
          <div className="chip-row">
            {presets.map((p) => (
              <button
                key={p.name.zh}
                className="chip preset-chip"
                title={p.pointIds
                  .map((id) => pointById(id))
                  .filter(Boolean)
                  .map((pt) => L(pt!.name, lang))
                  .join(" · ")}
                onClick={() => {
                  addRoutine(L(p.name, lang), [...p.pointIds]);
                  playClick();
                }}
              >
                {t("routine_apply")} {L(p.name, lang)}{" "}
                <small>{t("routine_points_n", { n: p.pointIds.length })}</small>
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

/** Inline editor: rename + reorder/remove points + add from favorites/search. */
function RoutineEditor({ routine }: { routine: Routine }) {
  const t = useT();
  const lang = useAppStore((s) => s.lang);
  const favorites = useAppStore((s) => s.favorites);
  const renameRoutine = useAppStore((s) => s.renameRoutine);
  const setRoutinePoints = useAppStore((s) => s.setRoutinePoints);
  const [name, setName] = useState(routine.name);
  const [q, setQ] = useState("");

  const move = (i: number, d: -1 | 1) => {
    const next = [...routine.pointIds];
    const j = i + d;
    if (j < 0 || j >= next.length) return;
    [next[i], next[j]] = [next[j], next[i]];
    setRoutinePoints(routine.id, next);
  };
  const remove = (i: number) =>
    setRoutinePoints(
      routine.id,
      routine.pointIds.filter((_, k) => k !== i),
    );
  const append = (pid: string) => {
    if (!routine.pointIds.includes(pid))
      setRoutinePoints(routine.id, [...routine.pointIds, pid]);
  };

  const favCandidates = favorites.filter((id) => !routine.pointIds.includes(id));
  const qq = q.trim().toLowerCase();
  const matches = qq
    ? ACUPOINTS.filter(
        (p) =>
          !routine.pointIds.includes(p.id) &&
          (p.name.zh.includes(qq) ||
            p.name.en.toLowerCase().includes(qq) ||
            p.code.toLowerCase().includes(qq)),
      ).slice(0, 10)
    : [];

  return (
    <div className="routine-editor">
      <div className="routine-new-form">
        <input
          className="routine-name-input"
          value={name}
          maxLength={30}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="btn btn--ghost btn--sm"
          disabled={!name.trim() || name.trim() === routine.name}
          onClick={() => renameRoutine(routine.id, name)}
        >
          {t("routine_rename_save")}
        </button>
      </div>

      {routine.pointIds.length === 0 ? (
        <p className="muted empty-note">{t("routine_no_points")}</p>
      ) : (
        <ol className="routine-edit-list">
          {routine.pointIds.map((pid, i) => {
            const p = pointById(pid);
            if (!p) return null;
            return (
              <li key={pid} className="routine-edit-row">
                <span className="point-order">{i + 1}</span>
                <span className="routine-edit-name">
                  {L(p.name, lang)} <small>{p.code}</small>
                </span>
                <span className="routine-edit-btns">
                  <button
                    className="icon-btn"
                    aria-label={t("routine_move_up")}
                    disabled={i === 0}
                    onClick={() => move(i, -1)}
                  >
                    ↑
                  </button>
                  <button
                    className="icon-btn"
                    aria-label={t("routine_move_down")}
                    disabled={i === routine.pointIds.length - 1}
                    onClick={() => move(i, 1)}
                  >
                    ↓
                  </button>
                  <button
                    className="icon-btn"
                    aria-label={t("routine_remove_point")}
                    onClick={() => remove(i)}
                  >
                    ✕
                  </button>
                </span>
              </li>
            );
          })}
        </ol>
      )}

      {favCandidates.length > 0 && (
        <>
          <div className="routine-add-label">★ {t("routine_add_from_fav")}</div>
          <div className="chip-row">
            {favCandidates.map((id) => {
              const p = pointById(id);
              if (!p) return null;
              return (
                <button
                  key={id}
                  className="chip chip--point"
                  onClick={() => append(id)}
                >
                  ＋ {L(p.name, lang)} <small>{p.code}</small>
                </button>
              );
            })}
          </div>
        </>
      )}

      <input
        className="search routine-add-search"
        placeholder={t("routine_search_ph")}
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      {matches.length > 0 && (
        <div className="chip-row">
          {matches.map((p) => (
            <button
              key={p.id}
              className="chip chip--point"
              onClick={() => append(p.id)}
            >
              ＋ {L(p.name, lang)} <small>{p.code}</small>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
