import Image from "next/image";
import Reveal from "./Reveal";
export default function Expertise() {
    return(
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
    )
}