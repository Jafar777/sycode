import Image from "next/image";

function AppScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-gradient-to-b from-ink-800 to-black px-4 py-5">
      <Image
        src="/logo.png"
        alt="syncode"
        width={1016}
        height={224}
        className={compact ? "h-3 w-auto" : "h-4 w-auto"}
      />
      <div className="space-y-2">
        <div className="rounded bg-white/5 px-2 py-2">
          <div className="text-[9px] uppercase tracking-wide text-steel-600">Email</div>
          <div className="mt-1 h-1 w-3/4 rounded bg-white/10" />
        </div>
        <div className="rounded bg-white/5 px-2 py-2">
          <div className="text-[9px] uppercase tracking-wide text-steel-600">Password</div>
          <div className="mt-1 h-1 w-1/2 rounded bg-white/10" />
        </div>
        <div className="rounded bg-steel-200 py-1.5 text-center text-[10px] font-bold uppercase tracking-wide text-black">
          Continue
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-line bg-ink-900 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-steel-500">02 — Selected Work</p>
        <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
          Portfolio Showcase
        </h2>
        <p className="mt-3 text-steel-500">One product, every screen size — a look at the syncode app</p>

        <div className="relative mx-auto mt-16 flex h-[340px] max-w-2xl items-end justify-center sm:h-[380px]">
          {/* laptop */}
          <div className="absolute left-1/2 top-0 w-[420px] -translate-x-1/2 sm:w-[480px]">
            <div className="rounded-t-xl border border-line bg-black p-2">
              <div className="aspect-[16/10] overflow-hidden rounded-md border border-white/5">
                <AppScreen />
              </div>
            </div>
            <div className="mx-auto h-3 w-full rounded-b-xl bg-gradient-to-b from-ink-600 to-ink-700" />
          </div>

          {/* tablet */}
          <div className="absolute bottom-0 left-1/2 w-[150px] -translate-x-[10%] rounded-xl border-4 border-ink-700 bg-black shadow-xl shadow-black/60 sm:w-[170px]">
            <div className="aspect-[3/4] overflow-hidden rounded-md">
              <AppScreen compact />
            </div>
          </div>

          {/* phone */}
          <div className="absolute bottom-0 right-1/2 w-[92px] translate-x-[130%] rounded-2xl border-4 border-ink-700 bg-black shadow-xl shadow-black/60 sm:w-[104px] sm:translate-x-[150%]">
            <div className="aspect-[9/19] overflow-hidden rounded-lg">
              <AppScreen compact />
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-steel-300" />
          <span className="h-2 w-2 rounded-full bg-ink-600" />
          <span className="h-2 w-2 rounded-full bg-ink-600" />
        </div>
      </div>
    </section>
  );
}
