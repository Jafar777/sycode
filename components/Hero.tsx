function CodeWindow({
  lines,
  className,
}: {
  lines: { text: string; color?: string }[];
  className?: string;
}) {
  return (
    <div
      className={`w-64 rounded-lg border border-white/10 bg-navy-950/90 shadow-2xl shadow-black/40 backdrop-blur-sm ${className ?? ""}`}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="space-y-1.5 px-3 py-3 font-mono text-[11px] leading-tight">
        {lines.map((line, i) => (
          <div key={i} className={line.color ?? "text-slate-400"}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900">
      {/* diagonal grid backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 rotate-6 border-l border-cyan-400/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            Web &amp; Mobile Studio
          </p>
          <h1 className="text-balance font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
            We Code Websites &amp; Mobile Apps
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300">
            SynCode partners with startups and growing teams to design, build,
            and ship products people actually enjoy using — from the first
            line of code to launch day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-cyan-400 px-7 py-3 text-sm font-bold text-navy-950 transition hover:bg-cyan-300"
            >
              GET STARTED
            </a>
            <a
              href="#services"
              className="text-sm font-semibold text-slate-300 underline-offset-4 transition hover:text-white hover:underline"
            >
              See what we build →
            </a>
          </div>
        </div>

        {/* floating code windows */}
        <div className="relative hidden h-[420px] lg:block">
          <CodeWindow
            className="absolute left-4 top-2 rotate-[-4deg]"
            lines={[
              { text: "const app = () => {", color: "text-cyan-300" },
              { text: "  return <Home />;" },
              { text: "};" },
            ]}
          />
          <CodeWindow
            className="absolute left-40 top-40 rotate-[3deg]"
            lines={[
              { text: "npm install syncode", color: "text-emerald-400" },
              { text: "> build complete ✓", color: "text-slate-500" },
              { text: "> deployed to prod", color: "text-slate-500" },
            ]}
          />
          <CodeWindow
            className="absolute left-4 top-[260px] rotate-[-2deg]"
            lines={[
              { text: "function launch() {", color: "text-cyan-300" },
              { text: "  ship('mobile');" },
              { text: "  ship('web');" },
              { text: "}" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
