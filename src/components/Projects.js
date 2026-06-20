"use client";

import { projects } from "./content";

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="section-tag">02 / things I&apos;ve built</div>
      <h2>
        Selected <span className="accent">work</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.title}
            onClick={() => window.open(project.href, "_blank")}
          >
            <span className="card-corner">↗</span>
            <span className="ptag">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-pills">
              {project.stack.map((tech) => (
                <span className="pill" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
