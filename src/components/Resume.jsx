import { FileText, Download, Eye } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../data/portfolio";

export default function Resume() {
  const [ref, revealed] = useScrollReveal();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = personalInfo.resumePath;
    link.download = "ShubhamKamble-Resume.pdf";
    link.click();
  };

  const handleView = () => {
    window.open(personalInfo.resumePath, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="resume"
      className="section resume-section"
      aria-label="Resume"
    >
      <div className="container">
        <div ref={ref} className={`reveal ${revealed ? "revealed" : ""}`}>
          <span className="section-label" style={{ justifyContent: "center" }}>
            My Resume
          </span>
          <h2 className="section-title" style={{ textAlign: "center" }}>
            My Resume
          </h2>
          <p
            className="section-subtitle"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            Interested in learning more about my experience and skills?
          </p>

          <div className="resume-card">
            <div className="resume-icon" aria-hidden="true">
              <FileText size={28} />
            </div>
            <h3>Download My Resume</h3>
            <p>
              Get a comprehensive overview of my skills, experience, projects,
              and education. Available as a PDF document.
            </p>
            <div className="resume-actions">
              <button className="btn btn-primary" onClick={handleDownload}>
                <Download size={18} />
                Download Resume
              </button>
              <button className="btn btn-secondary" onClick={handleView}>
                <Eye size={18} />
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
