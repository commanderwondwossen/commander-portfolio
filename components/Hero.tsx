import Image from "next/image";
import Reveal from "./Reveal";

const capabilities = [
  "Networking",
  "IT Infrastructure",
  "Systems Administration",
  "Cybersecurity",
  "Web Technology",
  "ICT Management",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />

      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(34,211,238,0.08),transparent_32%)]" />

      {/* Main Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Profile Image */}
          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-[460px]">
              {/* Image glow */}
              <div className="absolute inset-10 rounded-[2rem] bg-cyan-400/10 blur-3xl" />

              {/* Decorative frame */}
              <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[2rem] border-l border-t border-cyan-400/40" />

              <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-br-[2rem] border-b border-r border-cyan-400/40" />

              {/* Portrait */}
              <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-900 shadow-2xl shadow-cyan-500/10">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src="/profile.jpg"
                    alt="Commander Wondwossen Atnafu"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                {/* Image label */}
                <div className="absolute bottom-5 left-5 rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-md">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-400">
                    IT Professional
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Introduction */}
          <Reveal direction="right">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400 sm:text-sm sm:tracking-[0.3em]">
                ICT & IT Infrastructure Professional
              </p>

              <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Commander
                <span className="block text-cyan-400">
                  Wondwossen Atnafu
                </span>
              </h1>

              <h2 className="mt-6 max-w-xl text-xl font-medium leading-8 text-slate-200 sm:text-2xl">
                Building reliable and secure technology solutions.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                I design, implement, and manage technology solutions across
                networking, IT infrastructure, systems administration,
                cybersecurity, software development, and ICT management.
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Explore My Work
                  <span className="ml-2">→</span>
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  Let's Connect
                </a>
              </div>         
            </div>
          </Reveal>
        </div>

        {/* Capability Strip */}
        <Reveal direction="up" delay={0.2}>
          <div className="mt-14 grid grid-cols-2 border-y border-white/10 sm:mt-16 sm:grid-cols-3 lg:grid-cols-6">
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className={`px-3 py-4 text-center text-[11px] font-medium uppercase tracking-wider text-slate-500 transition hover:text-cyan-400 sm:px-4 ${
                  index < 4 ? "border-b border-white/10 sm:border-b-0" : ""
                } ${
                  index % 2 === 0
                    ? "sm:border-r sm:border-white/10"
                    : ""
                } ${
                  index < 3
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }`}
              >
                {capability}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}