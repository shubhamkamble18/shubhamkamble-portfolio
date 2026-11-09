import { useState, useCallback } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";
import { Github, Linkedin } from "./icons/BrandIcons";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { personalInfo } from "../data/portfolio";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const initialErrors = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [headerRef, headerRevealed] = useScrollReveal();
  const [gridRef, gridRevealed] = useScrollReveal();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on input
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  }, []);

  const validate = useCallback(() => {
    const newErrors = { ...initialErrors };
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!validateEmail(form.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required.";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [form]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!validate()) return;

      // mailto fallback — opens user's email client
      const subject = encodeURIComponent(form.subject);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

      setSubmitted(true);
      setForm(initialFormState);
    },
    [form, validate]
  );

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container">
        <div
          ref={headerRef}
          className={`reveal ${headerRevealed ? "revealed" : ""}`}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let&apos;s Work Together</h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`contact-grid reveal ${gridRevealed ? "revealed" : ""}`}
        >
          {/* Contact Info */}
          <div className="contact-info">
            <p className="contact-info-text">
              I&apos;m always open to new opportunities, collaborations, or just
              a friendly chat. Feel free to reach out through any of the channels
              below.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-info-item"
            >
              <div className="contact-info-item-icon" aria-hidden="true">
                <Mail size={20} />
              </div>
              <div>
                <p className="contact-info-item-label">Email</p>
                <p className="contact-info-item-value">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
            >
              <div className="contact-info-item-icon" aria-hidden="true">
                <Github size={20} />
              </div>
              <div>
                <p className="contact-info-item-label">GitHub</p>
                <p className="contact-info-item-value">GitHub Profile</p>
              </div>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-item"
            >
              <div className="contact-info-item-icon" aria-hidden="true">
                <Linkedin size={20} />
              </div>
              <div>
                <p className="contact-info-item-label">LinkedIn</p>
                <p className="contact-info-item-value">LinkedIn Profile</p>
              </div>
            </a>

            <div className="contact-info-item">
              <div className="contact-info-item-icon" aria-hidden="true">
                <MapPin size={20} />
              </div>
              <div>
                <p className="contact-info-item-label">Location</p>
                <p className="contact-info-item-value">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="contact-name" className="contact-form-label">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`contact-form-input ${errors.name ? "error" : ""}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                />
                {errors.name && (
                  <span id="contact-name-error" className="contact-form-error" role="alert">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email" className="contact-form-label">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`contact-form-input ${errors.email ? "error" : ""}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
                {errors.email && (
                  <span id="contact-email-error" className="contact-form-error" role="alert">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-subject" className="contact-form-label">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className={`contact-form-input ${errors.subject ? "error" : ""}`}
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "contact-subject-error" : undefined}
              />
              {errors.subject && (
                <span id="contact-subject-error" className="contact-form-error" role="alert">
                  {errors.subject}
                </span>
              )}
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message" className="contact-form-label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                className={`contact-form-textarea ${errors.message ? "error" : ""}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {errors.message && (
                <span id="contact-message-error" className="contact-form-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            {submitted && (
              <div className="contact-form-success" role="status">
                <CheckCircle
                  size={18}
                  style={{ display: "inline", verticalAlign: "middle", marginRight: 8 }}
                />
                Message prepared! Your email client should open shortly.
              </div>
            )}

            <button type="submit" className="btn btn-primary">
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
