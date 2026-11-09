import { useScrollReveal } from "../hooks/useScrollReveal";
import { experiences } from "../data/experience";

export default function Experience() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [timelineRef, timelineRevealed] = useScrollReveal();

  return (
    <section id="experience" className="section" aria-label="Experience">
      <div className="container">
        <div
          ref={headerRef}
          className={`reveal ${headerRevealed ? "revealed" : ""}`}
        >
          <span className="section-label">My Journey</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            My professional journey, internships, and hands-on project
            experience.
          </p>
        </div>

        <div
          ref={timelineRef}
          className={`experience-timeline reveal ${timelineRevealed ? "revealed" : ""}`}
        >
          {experiences.map((exp) => (
            <article key={exp.id} className="experience-item">
              <div className="experience-item-header">
                <div>
                  <h3 className="experience-item-position">{exp.position}</h3>
                  <p className="experience-item-company">{exp.company}</p>
                </div>
                <div className="experience-item-meta">
                  <span className="experience-item-duration">
                    {exp.duration}
                  </span>
                  <span className="experience-item-type">{exp.type}</span>
                </div>
              </div>

              <p className="experience-item-desc">{exp.description}</p>

              {exp.responsibilities && exp.responsibilities.length > 0 && (
                <ul className="experience-item-responsibilities">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="experience-item-tech">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="experience-item-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
