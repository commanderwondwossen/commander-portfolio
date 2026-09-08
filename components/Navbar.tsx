"use client";

import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          onClick={() => setIsOpen(false)}
          className="text-xl font-bold tracking-wide"
        >
          Commander<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cyan-400/50 px-5 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
            Download Resume
            </a>
        </div>

        {/* Mobile Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-400 lg:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-6 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-white/5 py-4 text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume.pdf"
              onClick={() => setIsOpen(false)}
              className="mt-4 rounded-xl bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-slate-950"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}