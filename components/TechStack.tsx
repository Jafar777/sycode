const stack = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
      </svg>
    ),
    color: "text-sky-500",
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.7 3.7L12 11.7 5.3 8 12 4.3ZM5 9.7l6 3.3v6.7l-6-3.3V9.7Zm14 0v6.7l-6 3.3v-6.7l6-3.3Z" />
      </svg>
    ),
    color: "text-emerald-500",
  },
  {
    name: "Swift",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M20.5 15.6c1.1-3 .1-6.4-2.3-8.7 1.6 3 1.6 5.1.9 6.4-2.4-2.8-6-4.9-9.1-6.5 2.2 2 5.9 5.7 7.3 8-2.5 1.3-6 1.1-8.9-.6-1.3-.8-2.4-1.8-3.2-2.9.6 1.2 1.5 2.3 2.7 3.2C10.5 17.4 14 17.6 17 16c-.2 1.2-1.6 2.2-3.4 2.4 3.6.7 6.4-1.1 6.9-2.8Z" />
      </svg>
    ),
    color: "text-orange-500",
  },
  {
    name: "Kotlin",
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
        <path d="M3 3h18L12 12l9 9H3V3Z" />
      </svg>
    ),
    color: "text-violet-500",
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <h2 className="font-display text-3xl font-bold text-navy-900">Technology Stack</h2>
        <p className="mt-3 text-slate-500">The tools behind everything we ship</p>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stack.map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-3">
              <span className={t.color}>{t.icon}</span>
              <span className="text-sm font-semibold text-navy-900">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
