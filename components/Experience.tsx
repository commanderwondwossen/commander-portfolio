export default function Experience() {
  const experiences = [
    {
      number: "01",
      period: "December 2017 — October 2022 & October 2025 — Present",
      title: "ICT Research and Training Professional",
      category: "ICT Operations",
      description:
        "Supporting reliable digital operations through IT systems and network troubleshooting, user support, security, backup and recovery, ICT training, technical documentation, and continuous technical improvement.",
      skills: [
        "ICT Support",
        "Networking",
        "Security",
        "Backup & Recovery",
        "Training",
      ],
    },
    {
      number: "02",
      period: "January 2008 — April 2021",
      title: "ICT Team Leader — By Delegation",
      category: "Leadership",
      description:
        "Served as ICT Team Leader by delegation while continuing my regular position, coordinating ICT operations, supervising technical activities, assigning tasks, and supporting infrastructure deployment, troubleshooting, and user services.",
      skills: [
        "ICT Leadership",
        "Team Coordination",
        "Infrastructure",
        "Technical Support",
      ],
    },
    {
      number: "03",
      period: "October 2022 — October 2025",
      title: "Network Administration Professional",
      category: "Networking",
      description:
        "Administered LAN and WAN environments, configured routers, switches, and access points, monitored network performance, resolved connectivity incidents, and supported secure and reliable network access.",
      skills: [
        "Cisco",
        "Routing",
        "Switching",
        "LAN/WAN",
        "Network Security",
      ],
    },
    {
      number: "04",
      period: "September 2013 — December 2017",
      title: "System Development and Administration Professional",
      category: "Systems",
      description:
        "Administered Windows Server environments and IT infrastructure, managed user accounts and permissions, monitored system performance, supported applications and databases, and implemented backup and recovery procedures.",
      skills: [
        "Windows Server",
        "Active Directory",
        "DNS",
        "DHCP",
        "Backup",
      ],
    },
    {
      number: "05",
      period: "January 2009 — August 2013",
      title: "Software Development and Administration Professional",
      category: "Development",
      description:
        "Developed and maintained software applications, supported application deployment and troubleshooting, worked with databases and application data, and helped users resolve application-related issues.",
      skills: [
        "Software Development",
        "Databases",
        "Application Support",
        "System Administration",
      ],
    },
    {
      number: "06",
      period: "August 2006 — February 2009",
      title: "Video Conference Administration Technician",
      category: "Communication",
      description:
        "Administered video conferencing and communication systems, monitored service availability, diagnosed technical problems, provided technical support, and maintained reliable communication services.",
      skills: [
        "Video Conferencing",
        "Technical Support",
        "System Monitoring",
        "Service Continuity",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="border-t border-white/10 px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            A career built around
            <span className="text-cyan-400"> technology.</span>
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            More than two decades of progressive experience across ICT
            operations, networking, systems administration, software
            development, technical support, and ICT leadership.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12 sm:mt-16">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-20px)] w-px bg-white/10 md:block" />

          <div className="space-y-8 sm:space-y-10">
            {experiences.map((experience) => (
              <div
                key={experience.number}
                className="relative grid gap-5 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10"
              >
                {/* Date */}
                <div className="relative">
                  <div className="text-sm font-semibold leading-6 text-cyan-400">
                    {experience.period}
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute -left-[3px] top-8 hidden h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 md:block" />
                </div>

                {/* Experience card */}
                <div className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-white/[0.05] sm:p-7">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {experience.number}
                      </div>

                      <h3 className="text-lg font-bold leading-7 sm:text-xl">
                        {experience.title}
                      </h3>
                    </div>

                    <span className="w-fit shrink-0 rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                      {experience.category}
                    </span>
                  </div>

                  <p className="mt-5 text-base leading-7 text-slate-400 sm:mt-6 sm:text-lg sm:leading-8">
                    {experience.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}