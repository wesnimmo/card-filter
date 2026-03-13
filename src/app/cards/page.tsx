"use client";

import { useMemo, useState } from "react";
import type { Category, TypeFilter } from "@/lib/cards/cards.types";
import { CATEGORY_LIST, CATEGORY_LABEL, CATEGORY_COLOR } from "@/lib/cards/cards.constants";
import { mockCards } from "@/lib/cards/cards.mock";
import { filterCards } from "@/lib/cards/cards.filter";
import { CardGrid } from "@/components/cards/CardGrid";
import { CardModal } from "@/components/cards/CardModal";


export default function CardsPage() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const filtered = useMemo(() => {
    return filterCards({
      cards: mockCards,
      selectedCategories,
      matchMode: "any",
      typeFilter,
    });
  }, [selectedCategories, typeFilter])

  function openAtIndex(index: number) {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  function toggleCategory(cat: Category) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function clear() {
    setSelectedCategories([]);
    setTypeFilter("all");
  }

  return (
    <main className="min-h-screen bg-zinc-800 p-6 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5">
        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Julius Caesar Unit Cards</h1>
          <p className="text-sm text-white/70">
            Multi-select category filtering (OR mode) + optional type filter.
          </p>
        </header>

        {/* Type filter */}
        <section className="flex flex-col gap-3 rounded-xl border border-white/10 bg-black/20 p-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Filter Cards
            </h2>
            <p className="text-xs text-white/60">
              Filter by card type or category.
            </p>
          </div>

          {/* Type filters */}
          <div className="flex flex-wrap items-center gap-2">
            {(["all", "player", "event"] as const).map((t) => (
              <button
                key={t}
                className={[
                  "rounded-md border px-3 py-1 text-sm transition",
                  typeFilter === t
                    ? "border-white/30 bg-white/15 text-white"
                    : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10",
                ].join(" ")}
                onClick={() => setTypeFilter(t)}
                type="button"
                aria-pressed={typeFilter === t}
              >
                {t === "all" ? "All" : t === "player" ? "Players" : "Events"}
              </button>
            ))}

            <button
              className="ml-0 rounded-md border border-white/15 px-3 py-1 text-sm text-white/80 transition hover:bg-white/10 md:ml-2"
              onClick={clear}
              type="button"
            >
              Clear
            </button>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORY_LIST.map((category) => {
              const isSelected = selectedCategories.includes(category);

              return (
                <button
                  key={category}
                  className={[
                    "rounded-full px-3 py-1 text-sm font-medium text-white transition",
                    CATEGORY_COLOR[category],
                    isSelected
                      ? "ring-2 ring-white/80 ring-offset-2 ring-offset-zinc-800"
                      : "opacity-80 hover:opacity-100",
                  ].join(" ")}
                  onClick={() => toggleCategory(category)}
                  type="button"
                  aria-pressed={isSelected}
                >
                  {CATEGORY_LABEL[category]}
                </button>
              );
            })}
          </div>
        </section>

        <div className="text-sm text-white/70">
          Showing <span className="font-semibold text-white">{filtered.length}</span>{" "}
          cards
        </div>

        {/* Grid */}
        <CardGrid cards={filtered} onSelectIndex={openAtIndex} />

        {isModalOpen && (
          <CardModal
            cards={filtered}
            activeIndex={activeIndex}
            onClose={() => setIsModalOpen(false)}
            onChangeIndex={setActiveIndex}
          />
        )}


      </div>
    </main>
  );
}
