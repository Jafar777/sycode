const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-navy-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="font-display text-xl font-bold tracking-tight text-white">
          SYN<span className="text-cyan-400">CODE</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#contact" className="text-sm font-medium text-slate-300 transition hover:text-white">
            Log In
          </a>
          <a
            href="#contact"
            className="rounded-md border border-cyan-400/60 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-navy-950"
          >
            Get Started
          </a>
        </div>

        {/* mobile menu button, non-functional placeholder kept minimal */}
        <a
          href="#contact"
          className="rounded-md border border-cyan-400/60 px-3 py-1.5 text-xs font-semibold text-cyan-300 md:hidden"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
