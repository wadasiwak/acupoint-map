import { useT } from "../i18n";

/**
 * "How to measure with your fingers" modal — the plain-language cun system
 * every howToFind text relies on: 1 thumb-width, 2/3/4 finger-widths.
 */

/** Schematic fingers (n=1 draws a thumb) with a width bracket underneath. */
function Fingers({ n }: { n: number }) {
  const w = n === 1 ? 26 : 14;
  const gap = 2;
  const total = n === 1 ? w : n * w + (n - 1) * gap;
  const x0 = (100 - total) / 2;
  const heights = n === 1 ? [40] : [44, 50, 46, 38].slice(0, n);
  return (
    <svg viewBox="0 0 100 80" role="img">
      {heights.map((h, i) => {
        const x = x0 + i * (w + gap);
        return (
          <rect
            key={i}
            x={x}
            y={56 - h}
            width={w}
            height={h}
            rx={w / 2.4}
            className="body-line"
          />
        );
      })}
      <path
        d={`M${x0} 66 L${x0} 70 L${x0 + total} 70 L${x0 + total} 66`}
        className="body-landmark"
      />
    </svg>
  );
}

export default function CunGuide({ onClose }: { onClose: () => void }) {
  const t = useT();
  const rows = [
    { n: 1, key: "cun_1" },
    { n: 2, key: "cun_2" },
    { n: 3, key: "cun_3" },
    { n: 4, key: "cun_4" },
  ];
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="card-close" onClick={onClose} aria-label={t("close")}>
          ✕
        </button>
        <h2>📏 {t("cun_title")}</h2>
        <p style={{ fontSize: 13 }}>{t("cun_intro")}</p>
        <div className="cun-guide">
          {rows.map(({ n, key }) => (
            <div className="cun-guide-row" key={key}>
              <Fingers n={n} />
              <p dangerouslySetInnerHTML={{ __html: t(key) }} />
            </div>
          ))}
        </div>
        <p className="cun-note">{t("cun_note")}</p>
      </div>
    </div>
  );
}
