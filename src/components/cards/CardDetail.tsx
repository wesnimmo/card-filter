"use client";

import { useEffect, useMemo, useState } from "react";
import type { Card } from "@/lib/cards/cards.types";
import { CATEGORY_LABEL, CATEGORY_COLOR } from "@/lib/cards/cards.constants";

type Panel =
  | { label: string; kind: "chips"; values: string[] }
  | { label: string; kind: "text"; text: string };

function titleCase(value: string) {
  return value.replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildPanels(card: Card): Panel[] {
  const dates: Panel = { label: "Dates", kind: "text", text: card.dates };
  const regions: Panel = {
    label: "Regions",
    kind: "chips",
    values: card.regions.map(titleCase),
  };
  const impact: Panel = { label: "Impact", kind: "text", text: card.impact };

  if (card.type === "event") {
    return [
      { label: "Provocation", kind: "chips", values: card.provocation },
      dates,
      { label: "Players", kind: "chips", values: card.players.map(titleCase) },
      regions,
      impact,
    ];
  }

  return [
    { label: "Roles", kind: "chips", values: card.roles },
    dates,
    { label: "Events", kind: "chips", values: card.events },
    regions,
    impact,
  ];
}

export function CardDetail(props: { card: Card }) {
  const { card } = props;

  const panels = useMemo(() => buildPanels(card), [card]);
  const [activePanel, setActivePanel] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    setActivePanel(0);
  }, [card.id]);

  const panel = panels[activePanel];
  const stockColor = card.type === "event" ? "#4A4A4A" : "#000000";

  return (
    <div
      className="flex h-[485px] w-full max-w-[395px] overflow-hidden rounded-xl pb-3 pr-3 pt-3 shadow-lg"
      style={{ backgroundColor: stockColor }}
    >
      <div className="flex w-7 flex-shrink-0 items-start justify-center pt-6">
        <span className="text-[13px] font-bold tracking-[0.25em] text-zinc-300 opacity-80 [writing-mode:vertical-rl]">
          {card.type.toUpperCase()}
        </span>
      </div>

      <div className="relative flex-1 overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center brightness-90"
          style={{ backgroundImage: `url(${card.image})` }}
          aria-hidden
        />

        <button
          type="button"
          onClick={() => setShowOverlay((v) => !v)}
          aria-label={showOverlay ? "Hide card details" : "Show card details"}
          aria-pressed={!showOverlay}
          className="absolute right-3 top-3 z-40 rounded-full border border-white/20 bg-black/55 p-2 text-white transition hover:bg-black/75"
        >
          {showOverlay ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3 3 18 18" />
              <path d="M10.584 10.587a2 2 0 1 0 2.829 2.829" />
              <path d="M9.363 5.365A10.76 10.76 0 0 1 12 5c4.167 0 7.77 2.386 9.938 7a10.78 10.78 0 0 1-4.264 5.118" />
              <path d="M6.228 6.228A10.78 10.78 0 0 0 2.062 12c1.011 2.155 2.713 3.895 4.78 5.028" />
            </svg>
          )}
        </button>

        <div
          className={`absolute inset-0 z-10 transition-opacity duration-200 ${
            showOverlay ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="absolute left-4 right-0 top-2 rounded-l-md bg-black/55 px-3 py-2 text-white backdrop-blur-[1px]">
            <h2 className="pr-10 text-[21px] font-bold leading-tight text-balance">
              {card.title}
            </h2>
            <div className="mt-1 flex flex-wrap gap-1">
              {card.categories.map((c) => (
                <span
                  key={c}
                  className={`rounded-sm px-2 py-[2px] text-[11px] font-medium text-white ${CATEGORY_COLOR[c]}`}
                >
                  {CATEGORY_LABEL[c]}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute inset-x-3 bottom-3 rounded-xl bg-black/55 px-4 pb-9 pt-3 text-white backdrop-blur-[1px]">
            <div className="mb-3 inline-block border-b-2 border-white pb-1 text-[15px] font-semibold">
              {panel.label}
            </div>

            <div className="flex min-h-[88px] items-start">
              {panel.kind === "chips" ? (
                <div className="flex flex-wrap gap-2">
                  {panel.values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[13px] font-light"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-[15px] font-light leading-relaxed text-pretty">
                  {panel.text}
                </p>
              )}
            </div>

            <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2">
              {panels.map((p, i) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => setActivePanel(i)}
                  aria-label={`Show ${p.label}`}
                  aria-current={i === activePanel}
                  className={`h-2 rounded-full transition-all ${
                    i === activePanel
                      ? "w-5 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
