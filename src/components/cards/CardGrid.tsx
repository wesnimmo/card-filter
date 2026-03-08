import type { Card } from "@/lib/cards/cards.types";
import { CardItem } from "./CardItem";

export function CardGrid(props: {
  cards: Card[];
  onSelectIndex: (index: number) => void;
}) {
  const { cards, onSelectIndex } = props;

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {cards.map((card, idx) => (
        <CardItem key={card.id} card={card} onClick={() => onSelectIndex(idx)} />
      ))}
    </div>
  );
}
