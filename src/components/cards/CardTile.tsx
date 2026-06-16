import type { Card } from "@/lib/cards/cards.types";

export function CardTile(props: { card: Card }) {
  const { card } = props;
  const stockColor = card.type === "event" ? "#4A4A4A" : "#000000";

  return (
    <div
      className="group relative aspect-[395/485] w-full overflow-hidden rounded-md shadow-md transition-transform duration-300 sm:rounded-lg sm:hover:scale-[1.02]"
      style={{ backgroundColor: stockColor }}
    >
      <div
        className="absolute left-0 top-0 z-20 h-full w-3 sm:w-4"
        style={{ backgroundColor: stockColor }}
      >
        <div className="absolute left-1/2 top-2 -translate-x-1/2 font-bold tracking-[0.18em] text-[8px] text-zinc-400 opacity-80 [writing-mode:vertical-rl] sm:top-3 sm:tracking-[0.2em] sm:text-[9px]">
          {card.type.toUpperCase()}
        </div>
      </div>

      <div className="relative ml-3 h-full overflow-hidden sm:ml-4">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-90 transition-transform duration-500 sm:group-hover:scale-110"
          style={{ backgroundImage: `url(${card.image})` }}
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/45 to-transparent p-1.5 pt-4 sm:p-2 sm:pt-6">
          <h2 className="truncate text-[12px] font-bold leading-tight whitespace-nowrap text-white sm:text-[13px] md:text-[14px]">
            {card.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
