import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects, projectFilters } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [headerRef, headerRevealed] = useScrollReveal();
  const [gridRef, gridRevealed] = useScrollReveal();

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) =>
          p.technologies.some((t) =>
            t.toLowerCase().includes(activeFilter.toLowerCase())
          ) || p.category === activeFilter
        );

  return (
    <section id="projects" className="section" aria-label="Projects">
      <div className="container">
        <div
          ref={headerRef}
          className={`reveal ${headerRevealed ? "revealed" : ""}`}
        >
          <span className="section-label">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects that showcase my skills and passion for
            building great software.
          </p>
        </div>

        <div className="projects-filters" role="group" aria-label="Project filters">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              className={`projects-filter-btn ${activeFilter === filter ? "active" : ""}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className={`projects-grid reveal ${gridRevealed ? "revealed" : ""}`}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {filteredProjects.length === 0 && (
            <p style={{ color: "var(--text-muted)", gridColumn: "1 / -1", textAlign: "center", padding: "48px 0" }}>
              No projects found for this filter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
