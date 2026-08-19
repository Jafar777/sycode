import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="syncode"
            width={1016}
            height={224}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-widest2 text-steel-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#contact" className="font-mono text-[11px] uppercase tracking-widest2 text-steel-400 transition hover:text-white">
            Log In
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-steel-400/50 px-5 py-2 font-mono text-[11px] uppercase tracking-widest2 text-steel-200 transition hover:border-white hover:bg-white hover:text-black"
          >
            Get Started
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-sm border border-steel-400/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest2 text-steel-200 md:hidden"
        >
          Start
        </a>
      </div>
    </header>
  );
}
