import React, { useState } from "react";
import "./GetInTouch.scss";

export default function GetInTouch() {
  const [activeForm, setActiveForm] = useState("partnership");

  return (
    <section className="get-in-touch">
      {/* Top label */}
      <span className="get-in-touch__label">GET IN TOUCH</span>

      {/* Main heading */}
      <h2 className="get-in-touch__heading">How can we help you make an impact?</h2>
      <p className="get-in-touch__intro">
        Choose the form that best matches your inquiry. Our team typically responds within 48 hours.
      </p>

      {/* Buttons */}
      <div className="get-in-touch__buttons">
        <button
          className={`get-in-touch__button ${activeForm === "partnership" ? "active" : ""}`}
          onClick={() => setActiveForm("partnership")}
        >
          Partnership Inquiry
        </button>
        <button
          className={`get-in-touch__button ${activeForm === "volunteer" ? "active" : ""}`}
          onClick={() => setActiveForm("volunteer")}
        >
          Volunteer Application
        </button>
        <button
          className={`get-in-touch__button ${activeForm === "donation" ? "active" : ""}`}
          onClick={() => setActiveForm("donation")}
        >
          Donation Inquiry
        </button>
        <button
          className={`get-in-touch__button ${activeForm === "media" ? "active" : ""}`}
          onClick={() => setActiveForm("media")}
        >
          Media / Press
        </button>
      </div>

      <p className="get-in-touch__extra">Emergency Response Request</p>

      {/* Forms */}
      {activeForm === "partnership" && (
        <form className="get-in-touch__form">
          <h3>Partnership Inquiry</h3>
          <p>Interested in collaborating with CCTPAD? Tell us about your organization and partnership goals.</p>
          <label>
            Your Name *
            <input type="text" required />
          </label>
          <label>
            Email Address *
            <input type="email" required />
          </label>
          <label>
            Organization Name *
            <input type="text" required />
          </label>
          <label>
            Phone Number
            <input type="text" />
          </label>
          <label>
            Partnership Type *
            <select required>
              <option value="">Select partnership type</option>
              <option value="funding">Funding</option>
              <option value="training">Training</option>
              <option value="advocacy">Advocacy</option>
            </select>
          </label>
          <label>
            Tell us about your partnership idea *
            <textarea
              placeholder="Describe your organization’s mission and how you envision partnering..."
              required
            ></textarea>
          </label>
          <button type="submit" className="get-in-touch__submit">
            Submit Partnership Inquiry
          </button>
        </form>
      )}

      {activeForm === "volunteer" && (
        <form className="get-in-touch__form">
          <h3>Volunteer Application</h3>
          <p>Join our team and contribute your skills to our mission.</p>
          <label>
            Your Name *
            <input type="text" required />
          </label>
          <label>
            Email Address *
            <input type="email" required />
          </label>
          <label>
            Skills / Interests *
            <textarea placeholder="Tell us how you’d like to contribute..." required></textarea>
          </label>
          <button type="submit" className="get-in-touch__submit">
            Apply to Volunteer
          </button>
        </form>
      )}

      {activeForm === "donation" && (
        <form className="get-in-touch__form">
          <h3>Donation Inquiry</h3>
          <p>Support our programs and help us reach more communities.</p>
          <label>
            Your Name *
            <input type="text" required />
          </label>
          <label>
            Email Address *
            <input type="email" required />
          </label>
          <label>
            Donation Amount *
            <input type="number" required />
          </label>
          <button type="submit" className="get-in-touch__submit">
            Make a Donation
          </button>
        </form>
      )}

      {activeForm === "media" && (
        <form className="get-in-touch__form">
          <h3>Media / Press</h3>
          <p>Reach out for interviews, press releases, or coverage.</p>
          <label>
            Your Name *
            <input type="text" required />
          </label>
          <label>
            Email Address *
            <input type="email" required />
          </label>
          <label>
            Message *
            <textarea placeholder="Tell us about your media request..." required></textarea>
          </label>
          <button type="submit" className="get-in-touch__submit">
            Media Inquiry
          </button>
        </form>
      )}
    </section>
  );
}
