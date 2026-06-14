"use client";

import { useEffect, useMemo, useState } from "react";
import type { Card, PlayerId, Region } from "@/lib/cards/cards.types";
import {
  CATEGORY_LABEL,
  CATEGORY_COLOR,
  PLAYER_CARD_ID,
  PLAYER_LABEL,
  REGION_LABEL,
} from "@/lib/cards/cards.constants";

type Panel =
  | { label: string; kind: "text"; text: string }
  | { label: string; kind: "piped"; values: string[] }
  | { label: string; kind: "regions"; values: Region[] }
  | { label: string; kind: "players"; values: PlayerId[] }
  | { label: string; kind: "events"; values: string[] };

function buildPanels(card: Card): Panel[] {
  const dates: Panel = { label: "Dates", kind: "text", text: card.dates };
  const regions: Panel = { label: "Regions", kind: "regions", values: card.regions };
  const impact: Panel = { label: "Impact", kind: "text", text: card.impact };

  if (card.type === "event") {
    return [
      { label: "Provocation", kind: "piped", values: card.provocation },
      dates,
      { label: "Players", kind: "players", values: card.players },
      regions,
      impact,
    ];
  }

  return [
    { label: "Roles", kind: "piped", values: card.roles },
    dates,
    { label: "Events", kind: "events", values: card.events },
    regions,
    impact,
  ];
}

export function CardDetail(props: {
  card: Card;
  onRegionSelect?: (region: Region) => void;
  onPlayerSelect?: (playerId: PlayerId) => void;
}) {
  const { card, onRegionSelect, onPlayerSelect } = props;

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
      className="flex aspect-[395/485] w-full max-w-[395px] max-h-[90dvh] overflow-hidden rounded-xl pb-2 pr-2 pt-2 shadow-lg sm:pb-3 sm:pr-3 sm:pt-3"
      style={{ backgroundColor: stockColor }}
    >
      <div className="flex w-6 shrink-0 items-start justify-center pt-4 sm:w-7 sm:pt-6">
        <span className="text-[11px] font-bold tracking-[0.22em] text-zinc-300 opacity-80 [writing-mode:vertical-rl] sm:text-[13px] sm:tracking-[0.25em]">
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
          className="absolute right-2 top-2 z-40 rounded-full border border-white/20 bg-black/55 p-1.5 text-white transition hover:bg-black/75 sm:right-3 sm:top-3 sm:p-2"
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
          <div className="absolute left-3 right-1 top-2 rounded-l-md bg-black/55 px-2 py-1 text-white backdrop-blur-[1px] sm:left-4 sm:right-0">
            <h2 className="truncate pr-8 text-[18px] font-bold leading-tight whitespace-nowrap sm:pr-10 sm:text-[21px] md:text-[23px]">
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

          <div className="absolute bottom-2 left-3 right-1 rounded-l-xl bg-black/55 px-2 pb-7 pt-1 text-white backdrop-blur-[1px] sm:left-4 sm:right-0">
            <div className="mb-2 inline-block border-b-4 border-white pb-0.5 text-[14px] font-semibold sm:text-[16px]">
              {panel.label}
            </div>

            <div className="flex min-h-[72px] items-start">
              {panel.kind === "text" && (
                <p className="text-[13px] font-light leading-relaxed text-pretty sm:text-[15px]">
                  {panel.text}
                </p>
              )}

              {panel.kind === "piped" && (
                <p className="flex flex-wrap items-center gap-y-1 text-[13px] font-light leading-relaxed text-pretty sm:text-[15px]">
                  {panel.values.map((value, i) => (
                    <span key={value} className="inline-flex items-center">
                      {i > 0 && (
                        <span
                          aria-hidden
                          className="mx-2 inline-block h-[1.1em] w-[3px] shrink-0 rounded-full bg-white/75"
                        />
                      )}
                      {value}
                    </span>
                  ))}
                </p>
              )}

              {panel.kind === "events" && (
                <div className="flex flex-wrap gap-1.5">
                  {panel.values.map((event) => (
                    <span
                      key={event}
                      className="rounded-full border border-white/40 bg-white/15 px-2 py-0.5 text-[14px] font-light"
                    >
                      {event}
                    </span>
                  ))}
                </div>
              )}

              {panel.kind === "regions" && (
                <div className="flex flex-wrap gap-1.5">
                  {panel.values.map((region) =>
                    onRegionSelect ? (
                      <button
                        key={region}
                        type="button"
                        onClick={() => onRegionSelect(region)}
                        className="rounded-full border border-white/40 bg-white/15 px-2 py-0.5 text-[14px] font-light transition hover:border-white/60 hover:bg-white/25"
                      >
                        {REGION_LABEL[region]}
                      </button>
                    ) : (
                      <span
                        key={region}
                        className="rounded-full border border-white/25 bg-white/10 px-1 py-0.5 text-[14px] font-light"
                      >
                        {REGION_LABEL[region]}
                      </span>
                    )
                  )}
                </div>
              )}

              {panel.kind === "players" && (
                <div className="flex flex-wrap gap-1.5">
                  {panel.values.map((playerId) => {
                    const hasCard = Boolean(PLAYER_CARD_ID[playerId]);

                    if (hasCard && onPlayerSelect) {
                      return (
                        <button
                          key={playerId}
                          type="button"
                          onClick={() => onPlayerSelect(playerId)}
                          className="rounded-full border border-white/40 bg-white/16 px-2 py-0.5 text-[14px] font-light transition hover:border-white/60 hover:bg-white/25"
                        >
                          {PLAYER_LABEL[playerId]}
                        </button>
                      );
                    }

                    return (
                      <span
                        key={playerId}
                        className="rounded-full border border-white/25 bg-white/10 px-1 py-0.5 text-[14px] font-light"
                      >
                        {PLAYER_LABEL[playerId]}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>

            <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-2">
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
