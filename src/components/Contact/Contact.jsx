import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactLinks } from "../../data/data";
import SectionHeader from "../shared/SectionHeader";
import RevealSection from "../shared/RevealSection";
import "./Contact.css";

// ── Replace these with your real EmailJS credentials ──────────
const EMAILJS_SERVICE_ID  = "service_ek3l0fm";
const EMAILJS_TEMPLATE_ID = "template_wt67gb6";
const EMAILJS_PUBLIC_KEY  = "QtUh-ZEFoxtToX-eN";
// ─────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef(null);
  const [formSent, setFormSent] = useState(false);
  const [loading,  setLoading]  = useState(false);
  const [error,    setError]    = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setFormSent(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="divider" />

      <SectionHeader
        label="Let's Talk"
        title={<>Get in <em>touch.</em></>}
      />

      <div className="contact-layout">
        {/* Left — info & links */}
        <RevealSection>
          <div className="contact-info">
            <p>
              Have a project in mind, a question, or just want to say hello?
              I'm always open to new opportunities and interesting conversations.
            </p>
            <div className="contact-links">
              {contactLinks.map((item) => (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a key={item.sub} href={item.href || "#"} className="contact-link">
                  <div className="contact-link-icon">{item.icon}</div>
                  <div>
                    <div className="contact-link-text">{item.label}</div>
                    <div className="contact-link-sub">{item.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* Right — form or success */}
        <RevealSection delay={150}>
          {formSent ? (
            <div className="contact-success">
              <div className="contact-success-icon">✓</div>
              <h3 className="contact-success-title">Message Sent!</h3>
              <p className="contact-success-msg">
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>

              {/* Hidden time field — populates {{time}} in your email template */}
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString("en-US", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              />

              <div className="form-group">
                <label>Name</label>
                {/* matches {{name}} in template */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                {/* matches {{email}} in template */}
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                {/* matches {{message}} in template */}
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {error && <p className="form-error">{error}</p>}

              <button className="form-submit" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          )}
        </RevealSection>
      </div>
    </section>
  );
}