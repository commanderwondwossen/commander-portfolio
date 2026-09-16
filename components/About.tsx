export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* About Text */}
          <div className="min-w-0">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Technology with a
              <span className="text-cyan-400"> strategic mindset.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
              I am an ICT professional with experience across IT
              infrastructure, networking, systems administration, software
              development, and technology management.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
              My approach combines technical problem-solving with business and
              organizational thinking. I focus on building technology
              environments that are secure, reliable, scalable, and aligned
              with organizational objectives.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:mt-7 sm:text-lg sm:leading-8">
              From network architecture and server administration to modern web
              applications and digital transformation initiatives, I enjoy
              solving complex technology challenges.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full border border-cyan-400/40 px-6 py-3 font-medium text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
            >
              Let&apos;s Connect →
            </a>
          </div>

          {/* Profile Card */}
          <div className="relative min-w-0">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur sm:p-8">
              {/* Profile Header */}
              <div className="mb-7 flex items-center gap-4 sm:mb-8 sm:gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-xl font-bold text-cyan-400 sm:h-20 sm:w-20 sm:text-2xl">
                  CW
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold sm:text-xl">
                    Commander Wondwossen Atnafu
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Information Technology Professional
                  </p>
                </div>
              </div>

              {/* Professional Highlights */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  ["20+", "Years Experience"],
                  ["MSc", "Information Technology"],
                  ["BSc", "Information Technology"],
                  ["Diploma", "Information Technology"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 sm:p-5"
                  >
                    <div className="text-xl font-bold text-cyan-400 sm:text-2xl">
                      {number}
                    </div>

                    <div className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}