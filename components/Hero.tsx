import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 py-24 sm:gap-16 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-12 lg:py-32">
        {/* Hero Text */}
        <Reveal direction="left">
          <div className="min-w-0">
            {/* Professional Title */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:mb-5 sm:text-sm sm:tracking-[0.3em]">
              Information Technology Professional
            </p>

            {/* Name */}
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Commander Wondwossen
              <span className="block text-cyan-400">Atnafu</span>
            </h1>

            {/* Main Statement */}
            <p className="mt-5 text-xl font-medium leading-8 text-slate-200 sm:text-2xl">
              Building reliable and secure technology solutions.
            </p>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
              I design, implement, and manage secure and scalable technology
              solutions across networking, IT infrastructure, systems
              administration, software development, cybersecurity, and ICT
              management.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-cyan-300"
              >
                Explore My Work →
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>
            </div>

            {/* Areas of Expertise */}
            <div className="mt-10 flex flex-wrap gap-2.5 sm:mt-12 sm:gap-3">
              {[
                "Networking",
                "Infrastructure",
                "Systems",
                "Cybersecurity",
                "Web Technology",
                "ICT Management",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Professional Photo */}
        <Reveal direction="right">
          <div className="relative mx-auto flex h-[340px] w-full max-w-[340px] items-center justify-center sm:h-[450px] sm:max-w-[450px]">
            {/* Background glow */}
            <div className="absolute h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl sm:h-72 sm:w-72" />

            {/* Outer rings */}
            <div className="absolute inset-3 rounded-full border border-cyan-400/20 sm:inset-4" />
            <div className="absolute inset-8 rounded-full border border-cyan-400/10 sm:inset-10" />
            <div className="absolute inset-12 rounded-full border border-cyan-400/10 sm:inset-16" />

            {/* Photograph */}
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-cyan-400/40 bg-slate-900 shadow-2xl shadow-cyan-500/20 sm:h-72 sm:w-72">
              <Image
                src="/profile.jpg"
                alt="Commander Wondwossen Atnafu"
                fill
                priority
                sizes="(max-width: 640px) 224px, 288px"
                className="object-cover"
              />
            </div>

            {/* Network */}
            <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 backdrop-blur sm:block sm:left-2 sm:px-4 sm:py-3">
              <span className="text-xs text-slate-300 sm:text-sm">
                NETWORK
              </span>
            </div>

            {/* Cloud */}
            <div className="absolute right-0 top-8 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 backdrop-blur sm:right-2 sm:top-16 sm:px-4 sm:py-3">
              <span className="text-xs text-slate-300 sm:text-sm">
                CLOUD
              </span>
            </div>

            {/* Security */}
            <div className="absolute bottom-8 right-0 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 backdrop-blur sm:right-2 sm:bottom-16 sm:px-4 sm:py-3">
              <span className="text-xs text-slate-300 sm:text-sm">
                SECURITY
              </span>
            </div>

            {/* Systems */}
            <div className="absolute bottom-2 left-4 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 backdrop-blur sm:bottom-8 sm:left-16 sm:px-4 sm:py-3">
              <span className="text-xs text-slate-300 sm:text-sm">
                SYSTEMS
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}