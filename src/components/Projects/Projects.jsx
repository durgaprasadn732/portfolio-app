import { projects } from "../../data/data";
import SectionHeader from "../shared/SectionHeader";
import RevealSection  from "../shared/RevealSection";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="divider" />

      <SectionHeader
        label="Selected Work"
        title={<>Recent <em>projects.</em></>}
      />

      <div className="projects-grid">
        {projects.map((project, i) => (
          <RevealSection key={project.num} delay={i * 100}>
            <div className="project-card">
              <div className="project-tag">{project.tag}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="stack-tag">{tech}</span>
                ))}
              </div>

              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                View Project <span className="project-arrow">→</span>
              </a>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}