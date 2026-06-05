export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.25),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <a
        href="/cards"
        className="group relative inline-flex items-center gap-5 rounded-2xl px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        <span
          aria-hidden
          className="absolute -inset-px rounded-2xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 opacity-0 blur-md transition-all duration-700 ease-out group-hover:opacity-80 group-hover:blur-lg"
        />

        <span className="relative flex items-center gap-5 rounded-2xl border border-white/[0.08] bg-zinc-900/70 px-8 py-5 shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.03] group-hover:border-white/20 group-hover:bg-zinc-900/90 group-hover:shadow-violet-500/20 group-active:translate-y-0 group-active:scale-[1.01]">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 ring-1 ring-white/10 transition-all duration-500 ease-out group-hover:from-violet-500/35 group-hover:to-cyan-500/35 group-hover:ring-violet-400/40 group-hover:shadow-lg group-hover:shadow-violet-500/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-violet-300 transition-all duration-500 ease-out group-hover:scale-110 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(167,139,250,0.8)]"
              aria-hidden
            >
              <rect x="2" y="8" width="13" height="14" rx="2" className="opacity-30" />
              <rect x="5" y="5" width="13" height="14" rx="2" className="opacity-55" />
              <rect x="8" y="2" width="13" height="14" rx="2" />
              <path d="M11 7h7M11 10.5h5" />
            </svg>
          </span>

          <span className="flex flex-col items-start gap-0.5">
            <span className="text-lg font-bold tracking-wide text-zinc-100 transition-all duration-500 ease-out group-hover:tracking-wider group-hover:text-white">
              Go to Cards Sandbox
            </span>
            <span className="text-xs font-light uppercase tracking-[0.2em] text-zinc-500 transition-all duration-500 ease-out group-hover:tracking-[0.28em] group-hover:text-cyan-300/80">
              Enter the arena
            </span>
          </span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-5 w-5 shrink-0 text-zinc-600 transition-all duration-500 ease-out group-hover:translate-x-1.5 group-hover:text-cyan-400"
            aria-hidden
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </a>
    </main>
  );
}
