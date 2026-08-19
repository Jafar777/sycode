function CodeWindow({
  lines,
  className,
}: {
  lines: { text: string; color?: string }[];
  className?: string;
}) {
  return (
    <div
      className={`w-64 rounded-md border border-line bg-ink-900/90 shadow-2xl shadow-black/60 backdrop-blur-sm ${className ?? ""}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-steel-500/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-steel-500/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-steel-500/40" />
      </div>
      <div className="space-y-1.5 px-3 py-3 font-mono text-[11px] leading-tight">
        {lines.map((line, i) => (
          <div key={i} className={line.color ?? "text-steel-500"}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-grid-lines bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 rotate-6 border-l border-white/5" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-28">
        <div>
          <p className="mb-4 font-mono text-xs uppercase tracking-widest2 text-steel-400">
            Web &amp; Mobile Studio
          </p>
          <h1 className="text-balance font-display text-3xl font-bold uppercase leading-[1.25] tracking-wide text-white sm:text-4xl lg:text-5xl">
            We Code Websites
            <br />
            &amp; Mobile Apps
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-steel-400">
            syncode partners with startups and growing teams to design, build,
            and ship products people actually enjoy using — from the first
            line of code to launch day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="rounded-sm bg-white px-7 py-3 font-mono text-xs font-bold uppercase tracking-widest2 text-black transition hover:bg-steel-200"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="font-mono text-xs uppercase tracking-widest2 text-steel-400 underline-offset-4 transition hover:text-white hover:underline"
            >
              See what we build →
            </a>
          </div>
        </div>

        <div className="relative hidden h-[420px] lg:block">
          <CodeWindow
            className="absolute left-4 top-2 rotate-[-4deg]"
            lines={[
              { text: "const app = () => {", color: "text-steel-200" },
              { text: "  return <Home />;" },
              { text: "};" },
            ]}
          />
          <CodeWindow
            className="absolute left-40 top-40 rotate-[3deg]"
            lines={[
              { text: "npm install syncode", color: "text-steel-200" },
              { text: "> build complete ✓", color: "text-steel-600" },
              { text: "> deployed to prod", color: "text-steel-600" },
            ]}
          />
          <CodeWindow
            className="absolute left-4 top-[260px] rotate-[-2deg]"
            lines={[
              { text: "function launch() {", color: "text-steel-200" },
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
