// src/components/Mission/Mission.jsx
import React from "react";
import "./Mission.scss";

const objectives = [
  {
    title: "Health & Wellness",
    icon: "🏥", // hospital icon
    items: [
      "Enhance access to quality healthcare and public health education",
      "Maternal and adolescent health services",
      "Mental health awareness and support",
      "Reproductive health education",
      "Public health awareness campaigns",
    ],
    link: "/healthcare",
  },
  {
    title: "Education & Skills",
    icon: "🎓", // graduation cap icon
    items: [
      "Advance digital literacy, vocational training, and skills acquisition",
      "Educational scholarships and resources",
      "Health education workshops",
      "Mentoring and leadership development",
      "Entrepreneurship and skills acquisition",
    ],
    link: "/education",
  },
  {
    title: "Protection & Advocacy",
    icon: "🛡️", // shield icon
    items: [
      "Promote gender equity and empower underserved groups",
      "Build resilient communities through rights-based advocacy",
      "Support for violence survivors",
      "Safe spaces creation and maintenance",
      "Community sensitization campaigns",
    ],
    link: "/advocacy",
  },
];

export default function Mission() {
  return (
    <section className="mission">
      <h2 className="mission__heading">Our Core Objectives</h2>
      <p className="mission__intro">
        Creating sustainable, community-centered solutions that improve health
        outcomes, educational attainment, and economic empowerment
      </p>
      <div className="mission__grid">
        {objectives.map((obj, index) => (
          <div
            key={index}
            className="mission__card"
            onClick={() => (window.location.href = obj.link)}
          >
            <h3 className="mission__title">
              <span className="mission__icon">{obj.icon}</span> {obj.title}
            </h3>
            <ul className="mission__list">
              {obj.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
