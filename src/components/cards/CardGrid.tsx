import type { Card } from "@/lib/cards/cards.types";
import { CardItem } from "./CardItem";

export function CardGrid(props: {
  cards: Card[];
  onSelectIndex: (index: number) => void;
}) {
  const { cards, onSelectIndex } = props;

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {cards.map((card, idx) => (
        <CardItem
          key={card.id}
          card={card}
          onClick={() => onSelectIndex(idx)}
        />
      ))}
    </div>
  );
}