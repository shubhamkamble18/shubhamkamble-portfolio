import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useScrollReveal";
import { personalInfo } from "../data/portfolio";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

const sectionIds = navLinks.map((link) => link.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (e, id) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  const handleCtaClick = useCallback(
    (e) => {
      e.preventDefault();
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    },
    []
  );

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar-inner">
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="Go to top"
        >
          <span className="navbar-logo-dot" aria-hidden="true" />
          {personalInfo.name}
        </a>

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar-link ${activeSection === link.id ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="navbar-cta desktop"
          onClick={handleCtaClick}
          aria-label="Navigate to contact section"
        >
          Let&apos;s Connect
        </button>

        {/* Mobile Toggle */}
        <button
          className={`navbar-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar-mobile ${mobileOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`navbar-link ${activeSection === link.id ? "active" : ""}`}
            onClick={(e) => handleNavClick(e, link.id)}
          >
            {link.label}
          </a>
        ))}
        <button className="navbar-cta" onClick={handleCtaClick}>
          Let&apos;s Connect
        </button>
      </div>
    </nav>
  );
}
