import { useState } from "react";
import type { Card, Category } from "@/lib/cards/cards.types";

const CATEGORY_LABEL: Record<Category, string> = {
  military: "Military",
  government: "Government",
  religion: "Religion",
  artsLiterature: "Arts-Literature",
  technology: "Technology",
};

const CHIP_CLASS: Record<Category, string> = {
  military: "bg-purple-700",
  government: "bg-blue-700",
  religion: "bg-amber-700",
  artsLiterature: "bg-green-700",
  technology: "bg-slate-700",
};

export function CardShell(props: {
  card: Card;
  size?: "grid" | "modal";
  showEyeToggle?: boolean;
}) {
  const {
    card,
    size = "grid",
    showEyeToggle = false,
  } = props;

  const maxWidthClass = size === "modal" ? "max-w-[395px]" : "max-w-[320px]";
  const heightClass = size === "modal" ? "h-[485px]" : "h-[450px]";

  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <div
      className={`relative w-full ${maxWidthClass} overflow-hidden rounded-xl bg-black text-left shadow-lg`}
    >
      {/* Vertical label strip */}
      <div className="absolute left-0 top-0 z-20 h-full w-6 bg-black/90">
        <div className="flex h-full items-center justify-center text-[11px] font-bold tracking-[0.25em] text-zinc-400 opacity-80 [writing-mode:vertical-rl]">
          {card.type.toUpperCase()}
        </div>
      </div>

      {/* Card body */}
      <div className={`relative ml-6 ${heightClass}`}>
        {/* Background image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center brightness-90"
          style={{ backgroundImage: `url(${card.image})` }}
          aria-hidden
        />

        {/* Eye toggle: modal only */}
        {showEyeToggle && (
          <button
            type="button"
            onClick={() => setShowOverlay(!showOverlay)}
            aria-label={showOverlay ? "Hide card details" : "Show card details"}
            aria-pressed={!showOverlay}
            className="absolute right-3 top-3 z-30 rounded-full border border-white/20 bg-black/55 p-2 text-white hover:bg-black/75"
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
        )}

        {/* Overlay content layer */}
        <div
          className={[
            "absolute inset-0 z-10 transition-opacity duration-200",
            showOverlay ? "opacity-100" : "pointer-events-none opacity-0",
          ].join(" ")}
        >
          {/* Top name overlay */}
          <div className="absolute left-4 right-0 top-2 rounded-l-md bg-black/30 px-3 py-2 text-white backdrop-blur-[1px]">
            <h2 className="pr-10 text-[21px] font-bold leading-tight">
              {card.title}
            </h2>
            <div className="mt-1 flex flex-wrap gap-1">
              {card.categories.map((c) => (
                <span
                  key={c}
                  className={`rounded-sm px-2 py-[2px] text-[11px] font-medium text-white ${CHIP_CLASS[c]}`}
                >
                  {CATEGORY_LABEL[c]}
                </span>
              ))}
            </div>
          </div>

          {/* Left data column */}
          <div className="absolute bottom-2 left-3 w-[172px] space-y-3 text-white">
            {card.type === "player" ? (
              <>
                <DataBlock label="Roles" value={card.roles.join(", ")} />
                <DataBlock label="Dates" value={card.dates} />
                <DataBlock label="Regions" value={card.regions.join(", ")} />
                <DataBlock label="Events" value={card.events.join(", ")} />
              </>
            ) : (
              <>
                <DataBlock label="Provocation" value={card.provocation.join(", ")} />
                <DataBlock label="Dates" value={card.dates} />
                <DataBlock label="Regions" value={card.regions.join(", ")} />
                <DataBlock label="Players" value={card.players.join(", ")} />
              </>
            )}
          </div>

          {/* Right impact panel */}
          <div className="group/impact absolute bottom-5 right-3 h-[150px] w-[40%] overflow-hidden rounded-xl bg-white/45 p-3 text-[14px] font-light leading-snug text-zinc-900 shadow-sm transition hover:overflow-auto hover:shadow-md">
            <p>
              <span className="font-bold">Impact:</span>
              <br />
              {card.impact}
            </p>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-white/70 opacity-100 transition group-hover/impact:opacity-0" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DataBlock(props: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-black/45 px-3 py-2 text-[12px]">
      <div className="w-[40%] border-b-4 border-white font-semibold capitalize">
        {props.label}
      </div>
      <div className="mt-1 font-light capitalize">{props.value}</div>
    </div>
  );
}