// src/components/DonationCTA/DonationCTA.jsx
import React from "react";
import "./DonationCTA.scss";

export default function DonationCTA() {
  return (
    <section className="donation-cta">
      <div className="donation-cta__container">
        <h2 className="donation-cta__heading">Ready to Make a Difference?</h2>
        <p className="donation-cta__text">
          Your contribution helps us reach more communities and create lasting
          positive impact. Every donation matters in building resilient communities.
        </p>
        <div className="donation-cta__buttons">
          <a href="/donate" className="btn btn-primary">
            Donate Now
          </a>
          <a href="/volunteer" className="btn btn-secondary">
            Volunteer With Us
          </a>
        </div>
      </div>
    </section>
  );
}
