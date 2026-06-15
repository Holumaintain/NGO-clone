// src/components/VolunteerCTA/VolunteerCTA.jsx
import React from "react";
import "./VolunteerCTA.scss";

export default function VolunteerCTA() {
  return (
    <section className="volunteer">
      <h2 className="volunteer__heading">Get Involved</h2>
      <p className="volunteer__intro">
        How can we help you make an impact? Choose the option that best matches
        your inquiry. Our team typically responds within 48 hours.
      </p>

      <div className="volunteer__grid">
        <div className="volunteer__card">
          <h3>Partnership Inquiry</h3>
          <p>Collaborate with us to drive sustainable change.</p>
          <a
            href="https://yourdomain.com/contact/partnership"
            className="volunteer__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit Partnership Inquiry
          </a>
        </div>

        <div className="volunteer__card">
          <h3>Volunteer Application</h3>
          <p>Join our team and contribute your skills to our mission.</p>
          <a
            href="https://yourdomain.com/contact/volunteer"
            className="volunteer__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply to Volunteer
          </a>
        </div>

        <div className="volunteer__card">
          <h3>Donation Inquiry</h3>
          <p>Support our programs and help us reach more communities.</p>
          <a
            href="https://yourdomain.com/contact/donate"
            className="volunteer__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Make a Donation
          </a>
        </div>

        <div className="volunteer__card">
          <h3>Media / Press</h3>
          <p>Reach out for interviews, press releases, or coverage.</p>
          <a
            href="https://yourdomain.com/contact/media"
            className="volunteer__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Media Inquiry
          </a>
        </div>
      </div>
    </section>
  );
}
