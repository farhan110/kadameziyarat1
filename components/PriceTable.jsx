import Reveal from "./Reveal";

export default function PriceTable({ columns, rows }) {
  return (
    <Reveal className="overflow-hidden rounded-2xl border border-gold/20">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-charcoal to-coal text-xs uppercase tracking-[0.2em] text-gold">
              {columns.map((c) => (
                <th key={c} className="px-6 py-4 font-semibold">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={`border-t border-gold/10 transition-colors hover:bg-gold/5 ${
                  i % 2 ? "bg-coal/60" : "bg-night"
                }`}
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-6 py-4 ${
                      j === 0
                        ? "font-display text-base text-goldbright"
                        : j === row.length - 1
                        ? "font-semibold gold-text"
                        : "text-ivory/85"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
}
