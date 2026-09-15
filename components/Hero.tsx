import Image from "next/image";
import Reveal from "./Reveal";
export default function Hero() {
    return(
        <section className="relative flex min-h-screen items-center overflow-hidden">
            {/* Background effects */}
            <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-28 sm:gap-16 sm:py-32 lg:grid-cols-2 lg:items-center">
                
                {/* Hero Text */}
                <Reveal direction="left">
                <div>
                    {/* Professional Title */}
                    <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                    Information Technology Professional
                    </p>

                    {/* Name */}
                    <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                    Commander Wondwossen
                    <span className="block text-cyan-400">Atnafu</span>
                    </h1>

                    {/* Main Statement */}
                    <p className="mt-5 text-xl font-medium text-slate-200 sm:text-2xl">
                    Building Reliable Technology Solutions.
                    </p>

                    {/* Description */}
                    <p className="mt-7 max-w-2xl text-sm text-left sm:text-justify leading-8 text-slate-400">
                    I design, implement, and manage secure and scalable technology
                    solutions across networking, IT infrastructure, systems
                    administration, software development, cybersecurity, and ICT
                    management.
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                        Explore My Work →
                    </a>

                    <a
                        href="#contact"
                        className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                    >
                        Contact Me
                    </a>
                    </div>

                    {/* Areas of Expertise */}
                    <div className="mt-12 flex flex-wrap gap-3">
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
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
                        >
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
                </Reveal>

                {/* Professional Photo / Technical Visual */}
                <Reveal direction="right">
                <div className="relative mx-auto flex h-[400px] w-full max-w-[400px] items-center justify-center sm:h-[450px] sm:max-w-[450px]">
                    
                    {/* Background glow */}
                    <div className="absolute h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

                    {/* Outer rings */}
                    <div className="absolute inset-4 rounded-full border border-cyan-400/20" />
                    <div className="absolute inset-10 rounded-full border border-cyan-400/10" />
                    <div className="absolute inset-16 rounded-full border border-cyan-400/10" />

                    {/* Photograph */}
                    <div className="relative h-64 w-64 overflow-hidden rounded-full border-2 border-cyan-400/40 bg-slate-900 shadow-2xl shadow-cyan-500/20 sm:h-72 sm:w-72">
                    <Image
                        src="/profile.jpg"
                        alt="Commander Wondwossen Atnafu"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 640px) 256px, 288px"
                    />
                    </div>

                    {/* Network */}
                    <div className="absolute left-0 top-1/2 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur sm:left-2">
                    <span className="text-sm text-slate-300">
                        NETWORK
                    </span>
                    </div>

                    {/* Cloud */}
                    <div className="absolute right-0 top-12 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur sm:right-2 sm:top-16">
                    <span className="text-sm text-slate-300">
                        CLOUD
                    </span>
                    </div>

                    {/* Security */}
                    <div className="absolute bottom-12 right-0 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur sm:right-2 sm:bottom-16">
                    <span className="text-sm text-slate-300">
                        SECURITY
                    </span>
                    </div>

                    {/* Systems */}
                    <div className="absolute bottom-4 left-8 rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 backdrop-blur sm:left-16 sm:bottom-8">
                    <span className="text-sm text-slate-300">
                        SYSTEMS
                    </span>
                    </div>
                </div>
                </Reveal>
            </div>
            </section>

    )
}