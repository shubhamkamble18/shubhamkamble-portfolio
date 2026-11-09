import { Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "./icons/BrandIcons";
import { personalInfo } from "../data/portfolio";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <h3>{personalInfo.name}</h3>
            <p>{personalInfo.role}</p>
            <div className="footer-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-link"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-nav">
            <h4>Navigation</h4>
            <div className="footer-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="footer-nav-link"
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Quick Links */}
          <div className="footer-nav">
            <h4>Get In Touch</h4>
            <div className="footer-nav-links">
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-nav-link"
              >
                {personalInfo.email}
              </a>
              <span
                className="footer-nav-link"
                style={{ cursor: "default" }}
              >
                {personalInfo.location}
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2026 {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
