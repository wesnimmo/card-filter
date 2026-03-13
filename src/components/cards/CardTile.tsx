import type { Card } from "@/lib/cards/cards.types";

export function CardTile(props: { card: Card }) {
  const { card } = props;

  return (
    <div className="group relative h-[320px] w-full overflow-hidden rounded-xl bg-black shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="absolute left-0 top-0 z-20 h-full w-5 bg-black/90">
        <div className="absolute left-1/2 top-4 -translate-x-1/2 font-bold tracking-[0.22em] text-[11px] text-zinc-400 opacity-80 [writing-mode:vertical-rl]">
          {card.type.toUpperCase()}
        </div>
      </div>

      <div className="relative ml-5 h-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-90 transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${card.image})` }}
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/95 via-black/45 to-transparent p-3 pt-10">
          <h2 className="line-clamp-2 text-[15px] font-bold leading-tight text-white">
            {card.title}
          </h2>
        </div>
      </div>
    </div>
  );
}