import type { Card } from "@/lib/cards/cards.types";
import { CardItem } from "./CardItem";

export function CardGrid(props: { cards: Card[]; onSelectIndex: (index: number) => void }) {
  const { cards, onSelectIndex } = props;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, idx) => (
        <CardItem key={card.id} card={card} onClick={() => onSelectIndex(idx)} />
      ))}
    </div>
  );
}
