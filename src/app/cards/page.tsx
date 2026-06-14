"use client";

import { useMemo, useState } from "react";
import type { Category, PlayerId, Region, TypeFilter } from "@/lib/cards/cards.types";
import {
  CATEGORY_LIST,
  CATEGORY_LABEL,
  CATEGORY_COLOR,
  REGION_LIST,
  REGION_LABEL,
  PLAYER_CARD_ID,
} from "@/lib/cards/cards.constants";
import { mockCards } from "@/lib/cards/cards.mock";
import { filterCards } from "@/lib/cards/cards.filter";
import { CardGrid } from "@/components/cards/CardGrid";
import { CardModal } from "@/components/cards/CardModal";

const UNIT_NAME = "Julius Caesar";

export default function CardsPage() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<Region[]>([]);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const unitCardCount = mockCards.length;

  const filtered = useMemo(() => {
    return filterCards({
      cards: mockCards,
      selectedCategories,
      selectedRegions,
      matchMode: "any",
      typeFilter,
    });
  }, [selectedCategories, selectedRegions, typeFilter]);

  const hasTopicFilter = selectedCategories.length > 0;
  const hasRegionFilter = selectedRegions.length > 0;
  const hasSidebarFilter = hasTopicFilter || hasRegionFilter;

  function openAtIndex(index: number) {
    setActiveIndex(index);
    setIsModalOpen(true);
  }

  function toggleCategory(cat: Category) {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  }

  function toggleRegion(region: Region) {
    setSelectedRegions((prev) =>
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  }

  function clearSidebarFilters() {
    setSelectedCategories([]);
    setSelectedRegions([]);
  }

  function handleRegionSelect(region: Region) {
    toggleRegion(region);
    setIsModalOpen(false);
  }

  function handlePlayerSelect(playerId: PlayerId) {
    const cardId = PLAYER_CARD_ID[playerId];
    if (!cardId) return;

    let index = filtered.findIndex((c) => c.id === cardId);

    if (index < 0) {
      setSelectedCategories([]);
      setSelectedRegions([]);
      setTypeFilter("all");

      const unfiltered = filterCards({
        cards: mockCards,
        selectedCategories: [],
        selectedRegions: [],
        matchMode: "any",
        typeFilter: "all",
      });
      index = unfiltered.findIndex((c) => c.id === cardId);
    }

    if (index >= 0) {
      setActiveIndex(index);
      setIsModalOpen(true);
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-zinc-800 p-4 text-white sm:p-6">
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-4 sm:gap-5">
        <header className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold sm:text-2xl">{UNIT_NAME} Unit</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-white/70">
            <span className="font-semibold text-white">{unitCardCount}</span> cards
            from the {UNIT_NAME} unit — click any card to explore, or filter by theme
            to trace ideas across the period.
          </p>
        </header>

        <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
          {/* Main: type filter + card grid */}
          <div className="min-w-0 flex-1">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <div
                className="inline-flex rounded-lg border border-white/15 bg-black/20 p-0.5"
                role="group"
                aria-label="Card type"
              >
                {(["all", "player", "event"] as const).map((t) => (
                  <button
                    key={t}
                    className={[
                      "rounded-md px-3 py-1.5 text-sm transition",
                      typeFilter === t
                        ? "bg-white/15 font-medium text-white"
                        : "text-white/60 hover:text-white/90",
                    ].join(" ")}
                    onClick={() => setTypeFilter(t)}
                    type="button"
                    aria-pressed={typeFilter === t}
                  >
                    {t === "all" ? "All" : t === "player" ? "Players" : "Events"}
                  </button>
                ))}
              </div>

              {filtered.length !== unitCardCount && (
                <p className="text-sm text-white/50">
                  Showing{" "}
                  <span className="font-medium text-white/80">{filtered.length}</span> of{" "}
                  {unitCardCount}
                </p>
              )}
            </div>

            <CardGrid cards={filtered} onSelectIndex={openAtIndex} />
          </div>

          {/* Right sidebar: topic + region filters */}
          <aside className="w-full shrink-0 rounded-xl border border-white/10 bg-black/20 p-4 lg:w-56">
            <div className="mb-3">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                Topics
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {CATEGORY_LIST.map((category) => {
                  const isSelected = selectedCategories.includes(category);
                  const isDimmed = hasTopicFilter && !isSelected;

                  return (
                    <button
                      key={category}
                      className={[
                        "rounded-full px-2.5 py-1 text-xs font-medium text-white transition",
                        CATEGORY_COLOR[category],
                        isSelected
                          ? "ring-2 ring-white/80 ring-offset-1 ring-offset-zinc-900"
                          : isDimmed
                            ? "opacity-30 grayscale hover:opacity-50"
                            : "opacity-90 hover:opacity-100",
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
            </div>

            <div className="mb-3 border-t border-white/10 pt-3">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                Regions
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {REGION_LIST.map((region) => {
                  const isSelected = selectedRegions.includes(region);
                  const isDimmed = hasRegionFilter && !isSelected;

                  return (
                    <button
                      key={region}
                      className={[
                        "rounded-full border px-2.5 py-1 text-xs font-medium transition",
                        isSelected
                          ? "border-white/50 bg-white/20 text-white ring-2 ring-white/80 ring-offset-1 ring-offset-zinc-900"
                          : isDimmed
                            ? "border-white/10 bg-white/5 text-white/30 hover:text-white/50"
                            : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
                      ].join(" ")}
                      onClick={() => toggleRegion(region)}
                      type="button"
                      aria-pressed={isSelected}
                    >
                      {REGION_LABEL[region]}
                    </button>
                  );
                })}
              </div>
            </div>

            {hasSidebarFilter && (
              <button
                className="w-full rounded-md border border-white/15 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
                onClick={clearSidebarFilters}
                type="button"
              >
                Clear filters
              </button>
            )}
          </aside>
        </div>

        {isModalOpen && (
          <CardModal
            cards={filtered}
            activeIndex={activeIndex}
            onClose={() => setIsModalOpen(false)}
            onChangeIndex={setActiveIndex}
            onRegionSelect={handleRegionSelect}
            onPlayerSelect={handlePlayerSelect}
          />
        )}
      </div>
    </main>
  );
}
