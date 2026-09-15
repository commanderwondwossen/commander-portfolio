import Image from "next/image";
import Reveal from "./Reveal";
export default function Experience() {
    return(
        <section
        id="experience"
        className="border-t border-white/10 px-6 py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Experience
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              A career built around
              <span className="text-cyan-400"> technology.</span>
            </h2>

            <p className="mt-7 text-left text-lg leading-8 text-slate-400 md:text-justify">
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

                  <p className="mt-7 text-left text-lg leading-8 text-slate-400 md:text-justify">
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

                  <p className="mt-7 text-left text-lg leading-8 text-slate-400 md:text-justify">
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

                  <p className="mt-7 text-left text-lg leading-8 text-slate-400 md:text-justify">
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

                  <p className="mt-7 text-left text-lg leading-8 text-slate-400 md:text-justify">
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

                  <p className="mt-7 text-left text-lg leading-8 text-slate-400 md:text-justify">
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

                  <p className="mt-7 text-lg leading-8 text-slate-400 md:text-justify">
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
    )
}