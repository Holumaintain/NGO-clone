// src/components/Campaign/Campaign.jsx
import React from "react";
import "./Campaign.scss";

export default function Campaign() {
  return (
    <section className="campaign">
      <div className="campaign__container">
        <div className="campaign__icon">🎗️</div>
        <h2 className="campaign__heading">
          Breast Cancer Awareness Campaign — October 2025
        </h2>
        <p className="campaign__description">
          We are taking breast cancer awareness to the markets! Through grassroots
          engagement, ShareAid will reach 300+ market women with self-exam education,
          verbal teaching in local languages, and visibility packs. Join us to make
          early detection possible for all women in our communities.
        </p>
      </div>
    </section>
  );
}
