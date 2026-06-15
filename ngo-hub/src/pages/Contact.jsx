import React from "react";
import "./Contact.scss";
import Footer from "../components/Footer/Footer"; // adjust path if needed

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Intro Section */}
      <section className="contact-intro">
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you. Reach out to learn more about our work,
          volunteer opportunities, or partnership possibilities.
        </p>
      </section>

      {/* Main Content: Form + Info Side by Side */}
      <section className="contact-main">
        {/* Left: Form */}
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <label>
              Full Name *
              <input type="text" required />
            </label>
            <label>
              Email Address *
              <input type="email" required />
            </label>
            <label>
              Subject *
              <select required>
                <option value="">Please select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="volunteer">Volunteer</option>
                <option value="partnership">Partnership</option>
                <option value="donation">Donation</option>
              </select>
            </label>
            <label>
              Organization (if applicable)
              <input type="text" />
            </label>
            <label>
              Message *
              <textarea placeholder="Please tell us how we can help you..." required></textarea>
            </label>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>

        {/* Right: Contact Info Cards */}
        <div className="contact-info">
          <div className="info-card general">
            <h4>📧 General Inquiries</h4>
            <p>info@shareaid.org</p>
            <small>For general questions, partnership opportunities, and program information.</small>
          </div>

          <div className="info-card volunteer">
            <h4>🤝 Volunteer Opportunities</h4>
            <p>volunteer@shareaid.org</p>
            <small>To learn about volunteering, submit applications, or get volunteer support.</small>
          </div>

          <div className="info-card partnership">
            <h4>🏢 Partnerships & Collaborations</h4>
            <p>partnerships@shareaid.org</p>
            <small>For corporate partnerships, NGO collaborations, and institutional relationships.</small>
          </div>

          <div className="info-card donation">
            <h4>🎀 Donations & Support</h4>
            <p>donations@shareaid.org</p>
            <small>For donation inquiries, receipt requests, and giving information.</small>
          </div>

          <div className="info-card office">
            <h4>📍 Our Office Location</h4>
            <p><strong>ShareAid Foundation</strong></p>
            <p>Cybron Bliss Court Street<br/>Ocean Bay Estate, Orchid Road<br/>Lekki, Lagos State<br/>Nigeria</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="faq-note">
          📞 Note: We currently operate primarily through email communication.
          For urgent matters, please contact us via email and we will respond promptly
          during business hours (Monday - Friday, 9AM - 5PM WAT).
        </div>

        <h3>Frequently Asked Questions</h3>
        <div className="faq-grid">
          <div className="faq-card">
            <h4>How can I volunteer with ShareAid?</h4>
            <p>You can apply to volunteer by filling out our online volunteer application form or contact us at <strong>volunteer@shareaid.org</strong>.</p>
          </div>
          <div className="faq-card">
            <h4>What programs does ShareAid currently run?</h4>
            <p>We focus on four core areas: Healthcare Access, Education & Skills Training, Protection & Advocacy, and Humanitarian Support.</p>
          </div>
          <div className="faq-card">
            <h4>How can my organization partner with ShareAid?</h4>
            <p>We welcome partnerships with like-minded organizations. Please contact us at <strong>partnerships@shareaid.org</strong>.</p>
          </div>
          <div className="faq-card">
            <h4>How can I make a donation to ShareAid?</h4>
            <p>You can donate through our secure online donation system or contact <strong>donations@shareaid.org</strong>.</p>
          </div>
          <div className="faq-card">
            <h4>Does ShareAid provide direct services to individuals?</h4>
            <p>Yes, we provide direct services through our community programs. Contact <strong>info@shareaid.org</strong> to learn more.</p>
          </div>
          <div className="faq-card">
            <h4>How quickly do you respond to emails?</h4>
            <p>We aim to respond within 24–48 hours during business days. For urgent matters, mark your subject line as "URGENT".</p>
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
