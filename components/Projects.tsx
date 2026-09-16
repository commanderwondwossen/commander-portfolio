import Image from "next/image";
import Reveal from "./Reveal";

export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Personal Portfolio Website",
      image: "/portfolio.jpg",
      imageAlt: "Personal Portfolio Website",
      description:
        "A professional portfolio website designed to present my experience, technical expertise, projects, education, and professional background.",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
      link: "https://commander-portfolio.vercel.app",
      linkText: "View Project →",
    },
    {
      number: "02",
      title: "Wadla Woreda Website",
      image: "/wadla.jpg",
      imageAlt: "Wadla Woreda Website",
      description:
        "A modern website developed to provide information about Wadla Woreda, its administration, services, and activities through a structured digital platform.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://wadla-website.vercel.app",
      linkText: "View Project →",
    },
    {
      number: "03",
      title: "Kone High School Foundation Website",
      image: "/kone.jpg",
      imageAlt: "Kone High School Foundation Website",
      description:
        "A website project developed for the Kone High School Foundation to present its purpose, activities, and information through a dedicated online platform.",
      technologies: ["Web Development"],
      status: "Collaborative project",
    },
  ];

  return (
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

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Selected projects
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A selection of professional, academic, and web development
            projects demonstrating my experience in technology, systems,
            software development, and digital solutions.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 0.08}>
              <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-slate-950">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-7">
                  <span className="text-sm font-semibold text-cyan-400">
                    {project.number}
                  </span>

                  <h3 className="mt-5 text-lg font-semibold leading-7 sm:text-xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Link / Status */}
                  <div className="mt-5">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                      >
                        {project.linkText}
                      </a>
                    ) : (
                      <span className="text-sm text-slate-500">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Project 4 — MSc Research */}
          <Reveal delay={0.24}>
            <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]">
              {/* Research Project Header */}
              <div className="flex aspect-video w-full items-center justify-center border-b border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 px-6 text-center">
                <span className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  Research Project
                </span>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-7">
                <span className="text-sm font-semibold text-cyan-400">
                  04
                </span>

                <h3 className="mt-5 text-lg font-semibold leading-7 sm:text-xl">
                  Deep Learning-Based OCR for Printed Amharic Documents
                </h3>

                <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  An MSc research project focused on converting printed Amharic
                  documents into editable digital text using deep
                  learning-based OCR techniques.
                </p>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
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

                {/* Project Status */}
                <div className="mt-5">
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