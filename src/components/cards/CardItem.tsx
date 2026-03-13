import type { Card } from "@/lib/cards/cards.types";
import { CardTile } from "./CardTile";

export function CardItem(props: { card: Card; onClick: () => void }) {
  const { card, onClick } = props;

  return (
    <button type="button" onClick={onClick} className="w-full text-left">
      <CardTile card={card} />
    </button>
  );
}