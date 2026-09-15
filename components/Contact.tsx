import Image from "next/image";
import Reveal from "./Reveal";
export default function Contact() {
    return(
        <section
        id="contact"
        className="border-t border-white/10 px-4 py-20 sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 via-white/[0.03] to-blue-500/10 p-5 sm:rounded-[2rem] sm:p-8 md:p-10 lg:p-12">
            
            <div className="grid min-w-0 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">

              {/* Left */}
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400 sm:tracking-[0.3em]">
                  Contact
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  Let's build something
                  <span className="text-cyan-400"> meaningful.</span>
                </h2>

                <p className="mt-5 max-w-xl text-justify leading-7 text-slate-400 sm:mt-6 sm:leading-8">
                  Whether you have a technology project, professional opportunity,
                  collaboration idea, or simply want to connect, I'd be happy to
                  hear from you.
                </p>

                <div className="mt-7 space-y-4 sm:mt-8">

                  {/* Email */}
                  <a
                    href="mailto:comwon23@gmail.com"
                    className="flex min-w-0 items-center gap-3 text-slate-300 transition hover:text-cyan-400 sm:gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-11 sm:w-11">
                      @
                    </span>

                    <span className="min-w-0 break-words">
                      <span className="block text-xs text-slate-500">
                        Email
                      </span>
                      <span className="break-all text-sm sm:text-base">
                        comwon23@gmail.com
                      </span>
                    </span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/commanderwondwossen/"
                    className="flex min-w-0 items-center gap-3 text-slate-300 transition hover:text-cyan-400 sm:gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-11 sm:w-11">
                      in
                    </span>

                    <span className="min-w-0 break-words">
                      <span className="block text-xs text-slate-500">
                        LinkedIn
                      </span>
                      <span className="break-all text-sm sm:text-base">
                        linkedin.com/in/commanderwondwossen/
                      </span>
                    </span>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/commanderwondwossen"
                    className="flex min-w-0 items-center gap-3 text-slate-300 transition hover:text-cyan-400 sm:gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:h-11 sm:w-11">
                      &lt;/&gt;
                    </span>

                    <span className="min-w-0 break-words">
                      <span className="block text-xs text-slate-500">
                        GitHub
                      </span>
                      <span className="break-all text-sm sm:text-base">
                        github.com/commanderwondwossen
                      </span>
                    </span>
                  </a>

                </div>
              </div>

              {/* Contact Form */}
              <form
                action="https://formspree.io/f/xgaeyqnr"
                method="POST"
                className="w-full min-w-0 rounded-3xl border border-white/10 bg-slate-950/60 p-5 backdrop-blur sm:p-7 md:p-8"
              >
                <div className="grid min-w-0 gap-5">

                  {/* Name */}
                  <div className="min-w-0">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm text-slate-400"
                    >
                      Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                      className="box-border w-full min-w-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                    />
                  </div>

                  {/* Email */}
                  <div className="min-w-0">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm text-slate-400"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                      className="box-border w-full min-w-0 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                    />
                  </div>

                  {/* Message */}
                  <div className="min-w-0">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm text-slate-400"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      className="box-border w-full min-w-0 resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50"
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 sm:w-auto"
                  >
                    Send Message →
                  </button>

                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    )
}