"use client";

import { useMemo, useState } from "react";
import type { Category, TypeFilter } from "@/lib/cards/cards.types";
import { mockCards } from "@/lib/cards/cards.mock";
import { filterCards } from "@/lib/cards/cards.filter";
import { CardGrid } from "@/components/cards/CardGrid";
import { CardModal } from "@/components/cards/CardModal";


//notice how CATEGORIES is an array making it easy to loop over
//whereas a Record is an object more complex to loop over
const CATEGORIES: { key: Category; label: string }[] = [
  { key: "military", label: "Military" },
  { key: "government", label: "Government" },
  { key: "religion", label: "Religion" },
  { key: "artsLiterature", label: "Arts & Lit" },
  { key: "technology", label: "Technology" },
];

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
      <div className="mx-auto flex max-w-5xl flex-col gap-5">
        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Cards Sandbox</h1>
          <p className="text-sm text-white/70">
            Multi-select category filtering (OR mode) + optional type filter.
          </p>
        </header>

        {/* Type filter */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            className="rounded-md border px-3 py-1 text-sm hover:bg-white/10"
            onClick={clear}
            type="button"
          >
            Clear
          </button>

          <div className="ml-auto flex gap-2">
            {(["all", "player", "event"] as const).map((t) => (
              <button
                key={t}
                className={[
                  "rounded-md border px-3 py-1 text-sm",
                  typeFilter === t ? "bg-white/15" : "hover:bg-white/10",
                ].join(" ")}
                onClick={() => setTypeFilter(t)}
                type="button"
                aria-pressed={typeFilter === t}
              >
                {t === "all" ? "All" : t === "player" ? "Players" : "Events"}
              </button>
            ))}
          </div>
        </div>
        

        {/* Category filters */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(({ key, label }) => {
            const on = selectedCategories.includes(key);
            return (
              <button
                key={key}
                className={[
                  "rounded-full border px-3 py-1 text-sm",
                  on ? "bg-white/15" : "hover:bg-white/10",
                ].join(" ")}
                onClick={() => toggleCategory(key)}
                type="button"
                aria-pressed={on}
              >
                {label}
              </button>
            );
          })}
        </div>

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
