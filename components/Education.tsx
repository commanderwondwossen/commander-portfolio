export default function Education() {
    return(
        <section
        id="education"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Education */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Education
              </p>

              <h2 className="text-4xl font-bold tracking-tight">
                Academic
                <span className="text-cyan-400"> foundation.</span>
              </h2>

              <div className="mt-10 space-y-5">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-cyan-400">Master's Degree</p>

                      <h3 className="mt-2 text-xl font-bold">
                        MSc in Information Technology
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        Debre Tabor University
                      </p>
                    </div>

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      MSc
                    </span>
                  </div>

                  <p className="mt-7 max-w-2xl text-left text-lg leading-8 text-slate-400 md:text-justify">
                    Advanced study in information technology with a focus on artificial
                    intelligence, deep learning, and document processing, including research
                    in Amharic document OCR.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-cyan-400">Bachelor's Degree</p>

                      <h3 className="mt-2 text-xl font-bold">
                        BSc in Information Technology
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        Wollo University
                      </p>
                    </div>

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      BSc
                    </span>
                  </div>

                  <p className="mt-7 max-w-2xl text-left text-lg leading-8 text-slate-400 md:text-justify">
                    Comprehensive foundation in information technology, covering computer
                    systems, networking, databases, software development, and IT infrastructure.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-cyan-400">Diploma</p>

                      <h3 className="mt-2 text-xl font-bold">
                        Diploma in Information Technology
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        W/ro Siheen Polytechnic College
                      </p>
                    </div>

                    <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      Diploma
                    </span>
                  </div>

                  <p className="mt-7 max-w-2xl text-left text-lg leading-8 text-slate-400 md:text-justify">
                    Practical foundation in information technology, covering computer systems,
                    networking, software applications, databases, and IT support.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Certifications
              </p>

              <h2 className="text-4xl font-bold tracking-tight">
                Continuous
                <span className="text-cyan-400"> learning.</span>
              </h2>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    name: "CCNA",
                    description: "Networking fundamentals, routing and switching",
                  },
                  {
                    name: "Cybersecurity",
                    description: "Cybersecurity awareness and security fundamentals",
                  },
                  {
                    name: "AI Fundamentals",
                    description: "Artificial intelligence concepts and applications",
                  },
                  {
                    name: "Data Analysis",
                    description: "Data analysis fundamentals and techniques",
                  },
                  {
                    name: "Programming",
                    description: "Programming fundamentals and software development",
                  },
                  {
                    name: "Critical Thinking in AI Era",
                    description: "Critical thinking and AI-era problem solving",
                  },
                ].map((certificate) => (
                  <div
                    key={certificate.name}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 font-bold text-cyan-400">
                      ✓
                    </div>

                    <h3 className="mt-5 font-semibold">
                      {certificate.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {certificate.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
