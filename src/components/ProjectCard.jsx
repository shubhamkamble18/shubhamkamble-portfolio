import { ExternalLink, FolderOpen } from "lucide-react";
import { Github } from "./icons/BrandIcons";

export default function ProjectCard({ project }) {
  const hasGithub =
    project.github && project.github !== "#" && !project.github.includes("YOUR_");
  const hasLiveDemo = project.liveDemo && project.liveDemo !== "#";

  return (
    <article className="project-card">
      <div className="project-card-image">
        {project.image ? (
          <img src={project.image} alt={`${project.title} project preview`} />
        ) : (
          <div className="project-card-image-placeholder">
            <FolderOpen size={40} />
            <span>Project Preview</span>
          </div>
        )}
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-desc">{project.description}</p>

        {project.technologies.length > 0 && (
          <div className="project-card-tech">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="project-card-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {(hasGithub || hasLiveDemo) && (
          <div className="project-card-actions">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-btn"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github size={15} />
                Code
              </a>
            )}
            {hasLiveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-btn primary"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
