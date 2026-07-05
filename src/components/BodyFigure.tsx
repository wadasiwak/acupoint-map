import { BODY_VIEWS } from "../lib/bodyViews";
import type { ViewId } from "../data/types";

export interface FigurePoint {
  id: string;
  x: number;
  y: number;
  /** Highlighted (glowing) vs plain reference dot. */
  active?: boolean;
  /** Priority number badge (1-based) shown next to active dots. */
  order?: number;
  label?: string;
}

interface Props {
  view: ViewId;
  points: FigurePoint[];
  onPointClick?: (id: string) => void;
  /** Crop the viewBox to a square around this point (for detail cards). */
  focus?: { x: number; y: number; radius: number };
  showLabels?: boolean;
  className?: string;
}

/** A schematic body view with acupoint dots overlaid. */
export default function BodyFigure({
  view,
  points,
  onPointClick,
  focus,
  showLabels,
  className,
}: Props) {
  const def = BODY_VIEWS[view];
  const viewBox = focus
    ? `${focus.x - focus.radius} ${focus.y - focus.radius} ${focus.radius * 2} ${focus.radius * 2}`
    : def.viewBox;
  // Keep dot/badge sizes visually constant when cropped.
  const scale = focus ? (focus.radius * 2) / Math.max(def.width, def.height) : 1;

  return (
    <svg
      viewBox={viewBox}
      className={`body-figure ${className ?? ""}`}
      role="img"
    >
      {def.art}
      {points.map((p) => (
        <g
          key={p.id}
          className={`acu-dot ${p.active ? "acu-dot--active" : ""} ${
            onPointClick ? "acu-dot--clickable" : ""
          }`}
          onClick={onPointClick ? () => onPointClick(p.id) : undefined}
        >
          {p.active && (
            <circle cx={p.x} cy={p.y} r={9 * scale} className="acu-halo" />
          )}
          <circle
            cx={p.x}
            cy={p.y}
            r={(p.active ? 4.5 : 3) * scale}
            className="acu-core"
          />
          {/* generous invisible hit area */}
          {onPointClick && (
            <circle cx={p.x} cy={p.y} r={12 * scale} fill="transparent" />
          )}
          {p.active && p.order !== undefined && (
            <text
              x={p.x + 8 * scale}
              y={p.y - 6 * scale}
              className="acu-order"
              style={{ fontSize: 9 * scale }}
            >
              {p.order}
            </text>
          )}
          {showLabels && p.label && (
            <text
              x={p.x + 6 * scale}
              y={p.y + 3 * scale}
              className="acu-label"
              style={{ fontSize: 6.5 * scale }}
            >
              {p.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
