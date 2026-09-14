import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
     <Navbar />
{/* Hero */}
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
        <p className="mt-7 max-w-2xl text-justify text-lg leading-8 text-slate-400">
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
      
      {/* About */}
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

      {/* Expertise */}
      <section id="expertise" className="border-t border-white/10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Expertise
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Technology expertise across
              <span className="text-cyan-400"> multiple domains.</span>
            </h2>

            <p className="mt-6 text-justify leading-8 text-slate-400">
              A combination of infrastructure, engineering, security, and
              management capabilities enables me to approach technology challenges
              from both technical and strategic perspectives.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Networking",
                description:
                  "Enterprise networking, routing, switching, VLANs, TCP/IP, WAN, SD-WAN, and network troubleshooting.",
                technologies: ["Cisco", "TCP/IP", "VLAN", "Routing"],
              },
              {
                number: "02",
                title: "IT Infrastructure",
                description:
                  "Design and administration of reliable server, virtualization, cloud, and data center environments.",
                technologies: ["Servers", "Virtualization", "Cloud", "Data Center"],
              },
              {
                number: "03",
                title: "Systems Administration",
                description:
                  "Windows Server environments, identity management, DNS, DHCP, Group Policy, and system administration.",
                technologies: ["Windows Server", "AD", "DNS", "DHCP"],
              },
              {
                number: "04",
                title: "Cybersecurity",
                description:
                  "Security architecture, access control, risk management, network protection, and security monitoring.",
                technologies: ["Security", "Risk", "IAM", "Monitoring"],
              },
              {
                number: "05",
                title: "Web Development",
                description:
                  "Modern web applications using component-based architectures and scalable backend technologies.",
                technologies: ["Next.js", "React", "TypeScript", "Node.js"],
              },
              {
                number: "06",
                title: "ICT Management",
                description:
                  "ICT strategy, IT governance, ITSM, project management, digital transformation, and service management.",
                technologies: ["ITIL", "COBIT", "Strategy", "ITSM"],
              },
            ].map((item, index) => (
  <Reveal key={item.number} delay={index * 0.08}>
  <div className="group flex min-h-[300px] flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-cyan-400">
        {item.number}
      </span>

      <span className="text-2xl opacity-30 transition group-hover:opacity-70">
        ↗
      </span>
    </div>

    <h3 className="mt-7 text-xl font-semibold">
      {item.title}
    </h3>

    <p className="mt-4 text-sm text-justify leading-7 text-slate-400">
      {item.description}
    </p>

    <div className="mt-6 flex flex-wrap gap-2">
      {item.technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400"
        >
          {technology}
        </span>
      ))}
    </div>
  </div>
</Reveal>
))}
          </div>
        </div>
      </section>
   {/* Projects */}   
<section
  id="projects"
  className="border-t border-white/10 px-4 py-20 sm:px-6 sm:py-28"
>
  <div className="mx-auto max-w-7xl">
    {/* Section Header */}
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Featured Work
      </p>

      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
        Selected projects &{" "}
        <span className="text-cyan-400">case studies.</span>
      </h2>

      <p className="mt-6 text-justify leading-8 text-slate-400">
        A selection of professional, academic, and web development projects
        demonstrating my experience in technology, systems, software
        development, and digital solutions.
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
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <span className="text-sm font-semibold text-cyan-400">01</span>

            <h3 className="mt-6 text-xl font-semibold">
              Personal Portfolio Website
            </h3>

            <p className="mt-4 text-sm leading-7 text-justify text-slate-400">
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
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <span className="text-sm font-semibold text-cyan-400">02</span>

            <h3 className="mt-6 text-xl font-semibold">
              Wadla Woreda Website
            </h3>

            <p className="mt-4 text-sm leading-7 text-justify text-slate-400">
              A modern website developed to provide information about Wadla
              Woreda, its administration, services, and activities through a
              structured digital platform.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS"].map((technology) => (
                <span
                  key={technology}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Reveal>

      {/* Project 3 */}
      <Reveal delay={0.16}>
        <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
          <div className="flex aspect-video w-full items-center justify-center border-b border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
            <span className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Project Preview
            </span>
          </div>

          <div className="flex flex-1 flex-col p-6 sm:p-7">
            <span className="text-sm font-semibold text-cyan-400">03</span>

            <h3 className="mt-6 text-xl font-semibold">
              Kone High School Foundation Website
            </h3>

            <p className="mt-4 text-sm leading-7 text-justify text-slate-400">
              A website project developed for the Kone High School Foundation
              to present its purpose, activities, and information through a
              dedicated online platform.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400">
                Web Development
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
            <span className="text-sm font-semibold text-cyan-400">04</span>

            <h3 className="mt-6 text-xl font-semibold">
              Deep Learning-Based OCR for Printed Amharic Documents
            </h3>

            <p className="mt-4 text-sm leading-7 text-justify text-slate-400">
              An MSc research project focused on converting printed Amharic
              documents into editable digital text using deep learning-based
              OCR techniques.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Python", "Deep Learning", "CNN", "BiLSTM", "CTC", "OCR"].map(
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
          </div>
        </article>
      </Reveal>
    </div>
  </div>
</section>

        
      {/* Experience */}
      <section
        id="experience"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Experience
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A career built around
              <span className="text-cyan-400"> technology.</span>
            </h2>

            <p className="mt-6 text-justify leading-8 text-slate-400">
              More than two decades of progressive experience across ICT operations,
              networking, systems administration, software development, technical
              support, and ICT leadership.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 hidden h-[calc(100%-20px)] w-px bg-white/10 md:block" />

            <div className="space-y-10">

              {/* Experience 1 */}
              <div className="relative grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
                <div className="relative">
                  <div className="text-sm font-semibold text-cyan-400">
                    December 2017 — October 2022 & October 2025 — Present
                  </div>

                  <div className="absolute -left-[3px] top-8 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 md:block" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-bold">
                        ICT Research and Training Professional
                      </h3>                      
                    </div>

                    <span className="h-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      ICT Operations
                    </span>
                  </div>

                  <p className="mt-5 text-justify leading-7 text-slate-400">
                    Supporting reliable digital operations through IT systems and
                    network troubleshooting, user support, security, backup and
                    recovery, ICT training, technical documentation, and continuous
                    technical improvement.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "ICT Support",
                      "Networking",
                      "Security",
                      "Backup & Recovery",
                      "Training",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
                <div className="relative">
                  <div className="text-sm font-semibold text-cyan-400">
                    January 2008 — April 2021
                  </div>

                  <div className="absolute -left-[3px] top-8 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 md:block" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-bold">
                        ICT Team Leader — By Delegation
                      </h3>                    
                    </div>

                    <span className="h-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      Leadership
                    </span>
                  </div>

                  <p className="mt-5 text-justify leading-7 text-slate-400">
                    Served as ICT Team Leader by delegation while continuing my regular
                    position, coordinating ICT operations, supervising technical activities, 
                    assigning tasks, and supporting infrastructure deployment, troubleshooting, 
                    and user services.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "ICT Leadership",
                      "Team Coordination",
                      "Infrastructure",
                      "Technical Support",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
                <div className="relative">
                  <div className="text-sm font-semibold text-cyan-400">
                    October 2022 — October 2025
                  </div>

                  <div className="absolute -left-[3px] top-8 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 md:block" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-bold">
                        Network Administration Professional
                      </h3>                      
                    </div>

                    <span className="h-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      Networking
                    </span>
                  </div>

                  <p className="mt-5 text-justify leading-7 text-slate-400">
                    Administered LAN and WAN environments, configured routers,
                    switches, and access points, monitored network performance,
                    resolved connectivity incidents, and supported secure and
                    reliable network access.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Cisco",
                      "Routing",
                      "Switching",
                      "LAN/WAN",
                      "Network Security",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="relative grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
                <div className="relative">
                  <div className="text-sm font-semibold text-cyan-400">
                    September 2013 — December 2017
                  </div>

                  <div className="absolute -left-[3px] top-8 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 md:block" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-bold">
                        System Development and Administration Professional
                      </h3>                     
                    </div>

                    <span className="h-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      Systems
                    </span>
                  </div>

                  <p className="mt-5 text-justify leading-7 text-slate-400">
                    Administered Windows Server environments and IT infrastructure,
                    managed user accounts and permissions, monitored system
                    performance, supported applications and databases, and
                    implemented backup and recovery procedures.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Windows Server",
                      "Active Directory",
                      "DNS",
                      "DHCP",
                      "Backup",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience 5 */}
              <div className="relative grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
                <div className="relative">
                  <div className="text-sm font-semibold text-cyan-400">
                    January 2009 —  August 2013
                  </div>

                  <div className="absolute -left-[3px] top-8 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 md:block" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-bold">
                        Software Development and Administration Professional
                      </h3>
                    </div>

                    <span className="h-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      Development
                    </span>
                  </div>

                  <p className="mt-5 text-justify leading-7 text-slate-400">
                    Developed and maintained software applications, supported
                    application deployment and troubleshooting, worked with
                    databases and application data, and helped users resolve
                    application-related issues.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Software Development",
                      "Databases",
                      "Application Support",
                      "System Administration",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Experience 6 */}
              <div className="relative grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
                <div className="relative">
                  <div className="text-sm font-semibold text-cyan-400">
                    August 2006 — Februrary 2009
                  </div>

                  <div className="absolute -left-[3px] top-8 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 md:block" />
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-cyan-400/30">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row">
                    <div>
                      <h3 className="text-xl font-bold">
                        Video Conference Administration Technician
                      </h3>                   
                    </div>

                    <span className="h-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      Communication
                    </span>
                  </div>

                  <p className="mt-5 text-justify leading-7 text-slate-400">
                    Administered video conferencing and communication systems,
                    monitored service availability, diagnosed technical problems,
                    provided technical support, and maintained reliable
                    communication services.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {[
                      "Video Conferencing",
                      "Technical Support",
                      "System Monitoring",
                      "Service Continuity",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Education & Certifications */}
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

                  <p className="mt-5 text-sm text-justify leading-7 text-slate-400">
                    Advanced study in information technology with research focus on
                    artificial intelligence and document processing.
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

                  <p className="mt-5 text-sm text-justify leading-7 text-slate-400">
                    Foundation in computer systems, networking, databases, software
                    development, and information technology.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-cyan-400">Bachelor's Degree</p>

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

                  <p className="mt-5 text-sm text-justify leading-7 text-slate-400">
                    Foundation in computer systems, networking, databases, software
                    development, and information technology.
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

      {/* Contact */}
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
                    href="#"
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
                        linkedin.com/in/your-profile
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
      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="text-lg font-bold">
              Commander<span className="text-cyan-400">.</span>
            </div>

            <p className="mt-2 text-sm text-slate-500">
              Information Technology Professional
            </p>
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>

            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/5 pt-6 text-center text-xs text-slate-600">
          © 2026 Commander Wondwossen Atnafu. All rights reserved.
        </div>
      </footer>
    </main>
  );
}