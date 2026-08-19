const services = [
  {
    title: "Web Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
        <rect x="2" y="4" width="20" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    copy:
      "Custom marketing sites and web apps built with React and Next.js — fast, accessible, and easy for your team to maintain.",
  },
  {
    title: "Mobile App Development",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 19h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    copy:
      "Native iOS and Android apps in Swift and Kotlin, or cross-platform builds — whichever fits your timeline and budget.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold text-navy-900">Our Services</h2>
        <p className="mt-3 text-slate-500">Precision web and mobile builds, end to end</p>
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl p-6 transition hover:bg-white hover:shadow-lg hover:shadow-navy-900/5">
            <div className="text-cyan-500">{s.icon}</div>
            <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{s.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-500">{s.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
