const testimonials = [
  {
    quote:
      "syncode rebuilt our marketing site in three weeks and it's still the fastest thing in our stack. Communication was clear the whole way through.",
    name: "Joan Pole",
    role: "Head of Growth, Cinder",
  },
  {
    quote:
      "The mobile app they shipped for us has a 4.8 rating and near-zero crash reports. They think about edge cases before we even ask.",
    name: "Navin Gahinan",
    role: "Founder, Loctura",
  },
];

function Avatar({ seed }: { seed: string }) {
  return (
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-ink-800 font-display text-xs font-bold text-steel-200"
      aria-hidden
    >
      {seed}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest2 text-steel-500">03 — Feedback</p>
        <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">
          Client Testimonials
        </h2>
        <p className="mt-3 text-steel-500">What teams say after shipping with us</p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-md border border-line p-8">
            <span className="font-display text-3xl leading-none text-steel-500">&ldquo;</span>
            <p className="mt-3 text-sm leading-relaxed text-steel-400">{t.quote}</p>
            <div className="mt-6 flex items-center gap-3">
              <Avatar seed={t.name.split(" ").map((w) => w[0]).join("")} />
              <div>
                <div className="text-sm font-bold text-white">{t.name}</div>
                <div className="text-xs text-steel-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
