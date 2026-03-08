"use client";

import type { Card } from "@/lib/cards/cards.types";
import { CardShell } from "./CardShell";

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
      <div className="flex w-full max-w-[920px] flex-col items-center">
        <div className="relative flex w-full justify-center">
          <button
            type="button"
            onClick={onClose}
            className="absolute -top-12 right-0 rounded-md border border-white/20 bg-black/40 px-3 py-1 text-sm text-white hover:bg-black/60"
          >
            Close
          </button>

          <CardShell
            key={card.id}
            card={card}
            size="modal"
            showEyeToggle={true}
          />

          <button
            type="button"
            onClick={prev}
            className="absolute left-[-10px] top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
            aria-label="Previous card"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-[-10px] top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
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