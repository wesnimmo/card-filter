"use client";

import type { Card } from "@/lib/cards/cards.types";

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
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" role="dialog" aria-modal="true">
      <div className="w-full max-w-3xl overflow-hidden rounded-2xl border bg-zinc-950 text-white shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 p-3">
          <div className="text-sm text-white/70">
            {activeIndex + 1} / {cards.length} • {card.type.toUpperCase()}
          </div>
          <button type="button" onClick={onClose} className="rounded-md border px-3 py-1 text-sm hover:bg-white/10">
            Close
          </button>
        </div>

        <div className="relative p-6">
          <h2 className="text-2xl font-semibold">{card.title}</h2>
          <div className="mt-1 text-sm text-white/70">{card.dates}</div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white/5 p-4">
              {card.type === "player" ? (
                <>
                  <div className="text-sm font-semibold">Roles</div>
                  <div className="text-sm text-white/80">{card.roles.join(", ")}</div>

                  <div className="mt-3 text-sm font-semibold">Events</div>
                  <div className="text-sm text-white/80">{card.events.join(", ")}</div>
                </>
              ) : (
                <>
                  <div className="text-sm font-semibold">Provocation</div>
                  <div className="text-sm text-white/80">{card.provocation.join(", ")}</div>

                  <div className="mt-3 text-sm font-semibold">Players</div>
                  <div className="text-sm text-white/80">{card.players.join(", ")}</div>
                </>
              )}
            </div>

            <div className="rounded-xl bg-white/5 p-4">
              <div className="text-sm font-semibold">Impact</div>
              <p className="mt-2 text-sm leading-6 text-white/80">{card.impact}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border bg-black/40 px-3 py-2 hover:bg-black/60"
            aria-label="Previous card"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border bg-black/40 px-3 py-2 hover:bg-black/60"
            aria-label="Next card"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
