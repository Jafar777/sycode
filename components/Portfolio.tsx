function AppScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex h-full w-full flex-col bg-gradient-to-b from-navy-800 to-navy-950 px-4 py-5">
      <div className={`font-display font-bold text-white ${compact ? "text-sm" : "text-lg"}`}>
        SYN<span className="text-cyan-400">CODE</span>
      </div>
      <div className="mt-auto space-y-2">
        <div className="rounded bg-white/5 px-2 py-2">
          <div className="text-[9px] uppercase tracking-wide text-slate-500">Email</div>
          <div className="mt-1 h-1 w-3/4 rounded bg-white/10" />
        </div>
        <div className="rounded bg-white/5 px-2 py-2">
          <div className="text-[9px] uppercase tracking-wide text-slate-500">Password</div>
          <div className="mt-1 h-1 w-1/2 rounded bg-white/10" />
        </div>
        <div className="rounded bg-cyan-400 py-1.5 text-center text-[10px] font-bold text-navy-950">
          Continue
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2 className="font-display text-3xl font-bold text-navy-900">Portfolio Showcase</h2>
        <p className="mt-3 text-slate-500">One product, every screen size — a look at the SynCode app</p>

        <div className="relative mx-auto mt-16 flex h-[340px] max-w-2xl items-end justify-center sm:h-[380px]">
          {/* laptop */}
          <div className="absolute left-1/2 top-0 w-[420px] -translate-x-1/2 sm:w-[480px]">
            <div className="rounded-t-xl border border-slate-800 bg-navy-950 p-2">
              <div className="aspect-[16/10] overflow-hidden rounded-md">
                <AppScreen />
              </div>
            </div>
            <div className="mx-auto h-3 w-full rounded-b-xl bg-gradient-to-b from-slate-300 to-slate-400" />
          </div>

          {/* tablet */}
          <div className="absolute bottom-0 left-1/2 w-[150px] -translate-x-[10%] rounded-xl border-4 border-slate-900 bg-navy-950 shadow-xl sm:w-[170px]">
            <div className="aspect-[3/4] overflow-hidden rounded-md">
              <AppScreen compact />
            </div>
          </div>

          {/* phone */}
          <div className="absolute bottom-0 right-1/2 w-[92px] translate-x-[130%] rounded-2xl border-4 border-slate-900 bg-navy-950 shadow-xl sm:w-[104px] sm:translate-x-[150%]">
            <div className="aspect-[9/19] overflow-hidden rounded-lg">
              <AppScreen compact />
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-2 w-2 rounded-full bg-navy-900" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
          <span className="h-2 w-2 rounded-full bg-slate-300" />
        </div>
      </div>
    </section>
  );
}
