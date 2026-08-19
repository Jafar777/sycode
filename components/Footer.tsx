import Image from "next/image";

const links = ["About Us", "Privacy Policy", "Contact"];

function SocialIcon({ path }: { path: string }) {
  return (
    <a
      href="#"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-steel-400 transition hover:border-white hover:text-white"
      aria-label="Social link"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d={path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-black">
      <div className="mx-auto max-w-7xl px-6 py-14 text-center lg:px-10">
        <Image
          src="/logo.png"
          alt="syncode"
          width={1016}
          height={224}
          className="mx-auto h-5 w-auto opacity-90"
        />

        <div className="mt-8 flex items-center justify-center gap-4">
          <SocialIcon path="M13.5 9H15V6.5h-1.5C11.6 6.5 10 8.1 10 10.2V12H8v2.5h2V21h3v-6.5h2.2l.5-2.5h-2.7v-1.6c0-.6.4-1.4 1.5-1.4Z" />
          <SocialIcon path="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4 4 0 0 0-6.9 3.7A11.5 11.5 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.6.1-1.2.2-1.8.1.5 1.6 2 2.7 3.7 2.8A8.1 8.1 0 0 1 2 18.3a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.6 1.5-1.3 2-2.1Z" />
          <SocialIcon path="M12 2.2c2.7 0 3 0 4.1.1 1 .1 1.7.2 2.3.5.6.2 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.2.6.4 1.3.5 2.3.1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 1-.2 1.7-.5 2.3a4.6 4.6 0 0 1-2.7 2.7c-.6.2-1.3.4-2.3.5-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-1-.1-1.7-.2-2.3-.5a4.6 4.6 0 0 1-2.7-2.7c-.2-.6-.4-1.3-.5-2.3-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-1 .2-1.7.5-2.3.2-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.3 1.3-.4 2.3-.5C9 2.2 9.3 2.2 12 2.2Zm0 1.8c-2.7 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.3-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.7.3 1 .1 1.3.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.7.1-1 .1-1.3.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7a2.7 2.7 0 0 0-.6-1 2.7 2.7 0 0 0-1-.6c-.3-.1-.8-.3-1.7-.3-1-.1-1.3-.1-4-.1Zm0 3.6a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8Zm0 1.8a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Zm5.6-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        </div>

        <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-widest2 text-steel-400">
          {links.map((l) => (
            <a key={l} href="#" className="transition hover:text-white">
              {l}
            </a>
          ))}
        </nav>

        <div className="mx-auto mt-8 h-px w-full max-w-md bg-line" />
        <p className="mt-6 font-mono text-[10px] uppercase tracking-widest2 text-steel-600">
          © 2026 syncode. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
