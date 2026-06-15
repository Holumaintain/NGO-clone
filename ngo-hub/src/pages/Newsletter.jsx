import React from "react";
import "./Newsletter.scss";
import Footer from "../components/Footer/Footer"; // adjust path if needed

export default function Newsletter() {
  return (
    <div className="newsletter-page">
      {/* Banner */}
      <section className="newsletter-banner">
        <h2>Newsletter & Success Stories</h2>
        <p>
          Stay connected with ShareAid's impact and be inspired by the transformation
          happening in communities across Nigeria.
        </p>
      </section>

      {/* Join Form */}
      <section className="newsletter-form">
        <h3>Join Our Community</h3>
        <p>Subscribe to receive updates on our programs, success stories, and opportunities to make a difference.</p>
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
            Location
            <input type="text" placeholder="City, State" />
          </label>
          <label>
            I’m interested in updates about:
            <select>
              <option>All ShareAid Programs</option>
              <option>Education & Skills</option>
              <option>Healthcare Access</option>
              <option>Community Development</option>
            </select>
          </label>
          <button type="submit" className="btn-primary">Subscribe to Newsletter</button>
        </form>
      </section>

      {/* Success Stories */}
      <section className="newsletter-stories">
        <h3>Success Stories</h3>
        <p className="stories-subtitle">
          Real stories of transformation and hope from communities we serve.
        </p>
        <div className="stories-grid">
          <div className="story-card">
            <h4>📷 Empowering Women Through Skills Training</h4>
            <p>Coming soon: Read about how our vocational training program helped 25 women in Lagos start their own businesses...</p>
            <div className="card-actions">
              <span className="label">Coming Soon</span>
              <button className="btn-secondary">Education & Skills</button>
            </div>
          </div>

          <div className="story-card">
            <h4>🏥 Mobile Health Clinic Saves Lives</h4>
            <p>Discover how our mobile health outreach program reached remote communities, providing essential healthcare services...</p>
            <div className="card-actions">
              <span className="label">Coming Soon</span>
              <button className="btn-secondary">Healthcare Access</button>
            </div>
          </div>

          <div className="story-card">
            <h4>🤝 Community Transformation Through Partnership</h4>
            <p>Learn how collaboration with local leaders and volunteers created lasting change in underserved communities...</p>
            <div className="card-actions">
              <span className="label">Coming Soon</span>
              <button className="btn-secondary">Community Development</button>
            </div>
          </div>
        </div>
      </section>

      {/* More Stories Banner */}
      <section className="newsletter-more">
        <p>📰 More Stories Coming Soon! Subscribe to our newsletter to be the first to read these inspiring stories.</p>
      </section>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
