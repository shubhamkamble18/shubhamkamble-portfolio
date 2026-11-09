import {
  Monitor,
  Server,
  Database,
  Lightbulb,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo, stats, aboutCards } from "../data/portfolio";

const iconMap = {
  Monitor,
  Server,
  Database,
  Lightbulb,
};

export default function About() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [contentRef, contentRevealed] = useScrollReveal();
  const [statsRef, statsRevealed] = useScrollReveal();

  return (
    <section id="about" className="section" aria-label="About me">
      <div className="container">
        <div
          ref={headerRef}
          className={`reveal ${headerRevealed ? "revealed" : ""}`}
        >
          <span className="section-label">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A glimpse into who I am, what I do, and what drives me as a
            developer.
          </p>
        </div>

        <div
          ref={contentRef}
          className={`about-grid reveal ${contentRevealed ? "revealed" : ""}`}
        >
          {/* Text */}
          <div className="about-text">
            <p>{personalInfo.aboutDescription}</p>
            <p>{personalInfo.aboutExtended}</p>
          </div>

          {/* Cards */}
          <div className="about-cards">
            {aboutCards.map((card) => {
              const IconComponent = iconMap[card.icon];
              return (
                <div key={card.id} className="about-card">
                  <div className="about-card-icon" aria-hidden="true">
                    {IconComponent && <IconComponent size={22} />}
                  </div>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={`about-stats reveal ${statsRevealed ? "revealed" : ""}`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="about-stat">
              <div className="about-stat-value">{stat.value}</div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
