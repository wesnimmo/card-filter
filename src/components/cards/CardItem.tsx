import type { Card } from "@/lib/cards/cards.types";
import { CardShell } from "./CardShell";

export function CardItem(props: { card: Card; onClick: () => void }) {
  const { card, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-[320px] flex-none text-left"
    >
      <CardShell card={card} size="grid" />
    </button>
  );
}