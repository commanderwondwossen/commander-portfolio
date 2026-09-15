import Image from "next/image";
import Reveal from "./Reveal";
export default function About() {
    return(
        <section id="about" className="border-t border-white/10 px-6 py-28">
                <div className="mx-auto max-w-7xl">
                  <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                    <div>
                      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                        About Me
                      </p>
        
                      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Technology with a
                        <span className="text-cyan-400"> strategic mindset.</span>
                      </h2>
        
                      <p className="mt-7 text-justify leading-8 text-slate-400">
                        I am an ICT professional with experience across IT infrastructure,
                        networking, systems administration, software development, and
                        technology management.
                      </p>
        
                      <p className="mt-5 leading-8 text-justify text-slate-400">
                        My approach combines technical problem-solving with business and
                        organizational thinking. I focus on building technology environments
                        that are secure, reliable, scalable, and aligned with organizational
                        objectives.
                      </p>
        
                      <p className="mt-5 text-justify leading-8 text-slate-400">
                        From network architecture and server administration to modern web
                        applications and digital transformation initiatives, I enjoy solving
                        complex technology challenges.
                      </p>
        
                      <a
                        href="#contact"
                        className="mt-8 inline-flex rounded-full border border-cyan-400/40 px-6 py-3 font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                      >
                        Let's Connect →
                      </a>
                    </div>
        
                    {/* Profile card */}
                    <div className="relative">
                      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
                        <div className="mb-8 flex items-center gap-5">
                          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl font-bold text-cyan-400">
                            CW
                          </div>
        
                          <div>
                            <h3 className="text-xl font-semibold">
                              Commander Wondwossen Atnafu
                            </h3>
                            <p className="mt-1 text-sm text-slate-400">
                              Information Technology Professional
                            </p>
                          </div>
                        </div>
        
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            ["20+", "Years Experience"],
                            ["MSc", "Information Technology"],
                            ["BSc", "Information Technology"],
                            ["Diploma", "Information Technology"],
                            //["Multiple", "Technology Domains"],
                          ].map(([number, label]) => (
                            <div
                              key={label}
                              className="rounded-2xl border border-white/10 bg-slate-900/60 p-5"
                            >
                              <div className="text-2xl font-bold text-cyan-400">
                                {number}
                              </div>
                              <div className="mt-2 text-sm text-slate-400">{label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        
    )
}