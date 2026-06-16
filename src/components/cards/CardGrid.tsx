import type { Card } from "@/lib/cards/cards.types";
import { CardItem } from "./CardItem";

export function CardGrid(props: {
  cards: Card[];
  onSelectIndex: (index: number) => void;
}) {
  const { cards, onSelectIndex } = props;

  return (
    <div className="grid w-full min-w-0 grid-cols-2 gap-4 pb-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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