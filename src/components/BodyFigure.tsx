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
  /** "guess" renders a distinct red crosshair (quiz feedback). */
  variant?: "guess";
}

interface Props {
  view: ViewId;
  points: FigurePoint[];
  onPointClick?: (id: string) => void;
  /** Crop the viewBox to a square around this point (for detail cards). */
  focus?: { x: number; y: number; radius: number };
  showLabels?: boolean;
  /** Dev calibration grid (every 20 units, labeled every 100). */
  showGrid?: boolean;
  /** Raw click on the SVG canvas (quiz: tap-to-locate). */
  onSvgClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  className?: string;
}

/** A schematic body view with acupoint dots overlaid. */
export default function BodyFigure({
  view,
  points,
  onPointClick,
  focus,
  showLabels,
  showGrid,
  onSvgClick,
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
      onClick={onSvgClick}
    >
      {showGrid &&
        (() => {
          const lines = [];
          for (let x = 0; x <= def.width; x += 20)
            lines.push(
              <line key={`vx${x}`} x1={x} y1={0} x2={x} y2={def.height} stroke="#3a3226" strokeWidth={x % 100 === 0 ? 0.7 : 0.3} />,
            );
          for (let y = 0; y <= def.height; y += 20)
            lines.push(
              <line key={`hy${y}`} x1={0} y1={y} x2={def.width} y2={y} stroke="#3a3226" strokeWidth={y % 100 === 0 ? 0.7 : 0.3} />,
            );
          return <g>{lines}</g>;
        })()}
      {def.art}
      {points.map((p) =>
        p.variant === "guess" ? (
          <g key={p.id} className="acu-guess">
            <line x1={p.x - 6 * scale} y1={p.y - 6 * scale} x2={p.x + 6 * scale} y2={p.y + 6 * scale} />
            <line x1={p.x - 6 * scale} y1={p.y + 6 * scale} x2={p.x + 6 * scale} y2={p.y - 6 * scale} />
          </g>
        ) : (
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
        ),
      )}
    </svg>
  );
}
