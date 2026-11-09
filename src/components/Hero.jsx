import {
  Mail,
  ArrowDown,
  Download,
  Code2,
  Palette,
  Database,
  Globe,
} from "lucide-react";
import { Github, Linkedin } from "./icons/BrandIcons";
import { personalInfo } from "../data/portfolio";
import hoodieImage from "../images/Hoodie.png";

const featuredSkills = [
  { label: "React.js", icon: Code2 },
  { label: "JavaScript", icon: Palette },
  { label: "MySQL", icon: Database },
  { label: "Node.js", icon: Globe },
];

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = personalInfo.resumePath;
    link.download = "Shubham_Kamble_Resume.pdf";
    link.click();
  };

  return (
    <section id="home" className="hero section" aria-label="Hero section">
      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true" />
            Available for Opportunities
          </div>

          <p className="hero-greeting">Hello, I&apos;m</p>

          <h1 className="hero-name">
            <span className="highlight">{personalInfo.firstName}</span>{" "}
            {personalInfo.lastName}
          </h1>

          <p className="hero-role">{personalInfo.role}</p>

          <p className="hero-description">{personalInfo.heroDescription}</p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleScrollToProjects}>
              <ArrowDown size={18} />
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={handleDownloadResume}>
              <Download size={18} />
              Download Resume
            </button>
            <button className="btn btn-secondary" onClick={handleScrollToContact}>
              <Mail size={18} />
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hero-social-link"
              aria-label="Send email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-visual-graphic">
            <img
              className="hero-portrait"
              src={hoodieImage}
              alt={`${personalInfo.firstName} ${personalInfo.lastName}`}
            />

          </div>
          <div className="hero-tech-stack">
            <p className="hero-tech-heading">Technologies I work with</p>
            <div className="hero-tech-grid">
              {featuredSkills.map(({ label, icon: Icon }) => (
                <div key={label} className="hero-tech-card">
                  <Icon className="hero-tech-icon" size={18} aria-hidden="true" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
