import Image from "next/image";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Featured Work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Selected projects
          </h2>

          <p className="mt-7 text-left text-lg leading-8 text-slate-400 md:text-justify">
            A selection of professional, academic, and web development
            projects demonstrating my experience in technology, systems,
            software development, and digital solutions.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Project 1 */}
          <Reveal delay={0}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
              <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-slate-900">
                <Image
                  src="/portfolio.jpg"
                  alt="Personal Portfolio Website"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-sm font-semibold text-cyan-400">
                  01
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  Personal Portfolio Website
                </h3>

                <p className="mt-7 max-w-2xl text-left text-lg leading-8 text-slate-400 md:text-justify">
                  A professional portfolio website designed to present my
                  experience, technical expertise, projects, education, and
                  professional background.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "React", "Tailwind CSS"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-6">
                  <a
                    href="https://commander-portfolio.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Project 2 */}
          <Reveal delay={0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
              <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-slate-900">
                <Image
                  src="/wadla.jpg"
                  alt="Wadla Woreda Website"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-sm font-semibold text-cyan-400">
                  02
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  Wadla Woreda Website
                </h3>

                <p className="mt-7 max-w-2xl text-left text-lg leading-8 text-slate-400 md:text-justify">
                  A modern website developed to provide information about
                  Wadla Woreda, its administration, services, and activities
                  through a structured digital platform.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-6">
                  <a
                    href="https://wadla-website.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Project 3 */}
          <Reveal delay={0.16}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
              <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-slate-900">
                <Image
                  src="/kone.jpg"
                  alt="Kone High School Foundation Website"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-sm font-semibold text-cyan-400">
                  03
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  Kone High School Foundation Website
                </h3>

                <p className="mt-7 max-w-2xl text-left text-lg leading-8 text-slate-400 md:text-justify">
                  A website project developed for the Kone High School
                  Foundation to present its purpose, activities, and
                  information through a dedicated online platform.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400">
                    Web Development
                  </span>
                </div>

                <div className="mt-6">
                  <span className="text-sm text-slate-500">
                    Collaborative project
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Project 4 */}
          <Reveal delay={0.24}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
              <div className="flex aspect-video w-full items-center justify-center border-b border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
                <span className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Research Project
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <span className="text-sm font-semibold text-cyan-400">
                  04
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  Deep Learning-Based OCR for Printed Amharic Documents
                </h3>

                <p className="mt-7 max-w-2xl text-left text-lg leading-8 text-slate-400 md:text-justify">
                  An MSc research project focused on converting printed Amharic
                  documents into editable digital text using deep
                  learning-based OCR techniques.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Python",
                    "Deep Learning",
                    "CNN",
                    "BiLSTM",
                    "CTC",
                    "OCR",
                  ].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <span className="text-sm text-slate-500">
                    MSc Research Project
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}