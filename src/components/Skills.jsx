import {
  Layout,
  Server,
  Database,
  Code,
  Wrench,
  FileCode,
  Palette,
  Braces,
  Atom,
  Grid3x3,
  Smartphone,
  FileCode2,
  Hexagon,
  Globe,
  Coffee,
  GitBranch,
  Code2,
} from "lucide-react";
import { Github, Figma } from "./icons/BrandIcons";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillCategories } from "../data/skills";

const iconMap = {
  Layout,
  Server,
  Database,
  Code,
  Wrench,
  FileCode,
  Palette,
  Braces,
  Atom,
  Grid3x3,
  Smartphone,
  FileCode2,
  Hexagon,
  Globe,
  Coffee,
  GitBranch,
  Github,
  Code2,
  Figma,
};

export default function Skills() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [gridRef, gridRevealed] = useScrollReveal();

  return (
    <section id="skills" className="section" aria-label="Skills">
      <div className="container">
        <div
          ref={headerRef}
          className={`reveal ${headerRevealed ? "revealed" : ""}`}
        >
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`skills-grid reveal ${gridRevealed ? "revealed" : ""}`}
        >
          {skillCategories.map((category) => {
            const CategoryIcon = iconMap[category.icon];
            return (
              <div key={category.id} className="skill-category">
                <div className="skill-category-header">
                  <div className="skill-category-icon" aria-hidden="true">
                    {CategoryIcon && <CategoryIcon size={20} />}
                  </div>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>

                <div className="skill-list">
                  {category.skills.map((skill) => {
                    const SkillIcon = iconMap[skill.icon];
                    return (
                      <div key={skill.name} className="skill-item">
                        <div className="skill-item-icon" aria-hidden="true">
                          {SkillIcon && <SkillIcon size={18} />}
                        </div>
                        <div className="skill-item-info">
                          <div className="skill-item-name">{skill.name}</div>
                          <div className="skill-item-desc">{skill.description}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
