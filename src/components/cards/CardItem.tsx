import type { Card, Category } from "@/lib/cards/cards.types";

// Record is a tool used to build an object type where you define exactly what the keys and the values should look like. 

const LABEL: Record<Category, string> = {
  military: "Military",
  government: "Government",
  religion: "Religion",
  artsLiterature: "Arts & Lit",
  technology: "Technology",
};

export function CardItem(props: { card: Card; onClick: () => void }) {
  const { card, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-xl border bg-black/40 p-4 text-left hover:bg-black/50"
    >
      <div className="text-xs tracking-widest text-white/60">{card.type.toUpperCase()}</div>
      <div className="mt-1 text-lg font-semibold">{card.title}</div>

      <div className="mt-2 flex flex-wrap gap-1">
        {card.categories.map((c) => (
          <span key={c} className="rounded-sm bg-white/15 px-2 py-0.5 text-[11px] text-white/90">
            {LABEL[c]}
          </span>
        ))}
      </div>

      <div className="mt-2 text-sm text-white/70">{card.dates}</div>

      <p className="mt-3 line-clamp-4 text-sm leading-6 text-white/80">{card.impact}</p>
    </button>
  );
}
