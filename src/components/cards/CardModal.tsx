"use client";

import type { Card } from "@/lib/cards/cards.types";
import { CardDetail } from "./CardDetail";

function wrapIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return (i + len) % len;
}

export function CardModal(props: {
  cards: Card[];
  activeIndex: number;
  onClose: () => void;
  onChangeIndex: (nextIndex: number) => void;
}) {
  const { cards, activeIndex, onClose, onChangeIndex } = props;
  const card = cards[activeIndex];

  if (!card) return null;

  const prev = () => onChangeIndex(wrapIndex(activeIndex - 1, cards.length));
  const next = () => onChangeIndex(wrapIndex(activeIndex + 1, cards.length));

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex w-full flex-col items-center">
        <div className="relative mx-auto w-[395px] max-w-full">
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-12 right-0 rounded-md border border-white/20 bg-black/40 px-3 py-1 text-sm text-white hover:bg-black/60"
          >
            Close
          </button>

          <CardDetail key={card.id} card={card} />

          <button
            type="button"
            onClick={prev}
            className="absolute z-40 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
            aria-label="Previous card"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute z-40 right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
            aria-label="Next card"
          >
            ›
          </button>
        </div>

        <div className="mt-3 text-center text-sm text-white/70">
          {activeIndex + 1} / {cards.length} • {card.type.toUpperCase()}
        </div>
      </div>


      
    </div>
  );
}