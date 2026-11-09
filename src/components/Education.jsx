import { GraduationCap } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { education } from "../data/education";

export default function Education() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [gridRef, gridRevealed] = useScrollReveal();

  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <div
          ref={headerRef}
          className={`reveal ${headerRevealed ? "revealed" : ""}`}
        >
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic journey and qualifications.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`education-grid reveal ${gridRevealed ? "revealed" : ""}`}
        >
          {education.map((edu) => (
            <article key={edu.id} className="education-card">
              <div className="education-card-icon" aria-hidden="true">
                <GraduationCap size={24} />
              </div>

              <h3 className="education-card-degree">{edu.degree}</h3>
              <p className="education-card-field">{edu.field}</p>
              <p className="education-card-institution">{edu.institution}</p>
              <p className="education-card-year">{edu.year}</p>
              {edu.grade && (
                <p className="education-card-grade">Grade: {edu.grade}</p>
              )}
              <p className="education-card-desc">{edu.description}</p>

              {edu.highlights && edu.highlights.length > 0 && (
                <ul className="education-card-highlights">
                  {edu.highlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
