export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <div className="text-lg font-bold">
            Commander<span className="text-cyan-400">.</span>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Information Technology Professional
          </p>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500"
        >
          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-center text-xs text-slate-600">
        © 2026 Commander Wondwossen Atnafu. All rights reserved.
      </div>
    </footer>
  );
}