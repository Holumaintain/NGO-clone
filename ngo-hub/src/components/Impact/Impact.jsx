// src/components/Impact/Impact.jsx
import React from "react";
import "./Impact.scss";

const sdgs = [
  {
    number: "SDG 3",
    title: "Good Health and Well-being",
    description:
      "Our healthcare programs, maternal health services, and mental health support directly improve health outcomes in underserved communities.",
    link: "/healthcare",
  },
  {
    number: "SDG 4",
    title: "Quality Education",
    description:
      "Through scholarships, digital literacy, and vocational training, we ensure inclusive and equitable quality education for all.",
    link: "/education",
  },
  {
    number: "SDG 5",
    title: "Gender Equality",
    description:
      "Our women's empowerment programs, protection services, and skills training promote gender equality and empower women and girls.",
    link: "/advocacy",
  },
  {
    number: "SDG 6",
    title: "Clean Water and Sanitation",
    description:
      "We implement sustainable water and sanitation projects to ensure availability and sustainable management for communities.",
    link: "/programs",
  },
  {
    number: "SDG 8",
    title: "Decent Work and Economic Growth",
    description:
      "Our entrepreneurship training and skills acquisition programs promote inclusive economic growth and decent employment.",
    link: "/programs",
  },
  // New cards from your image
  {
    number: "SDG 10",
    title: "Reduced Inequalities",
    description:
      "We focus on empowering the most vulnerable populations and reducing inequalities within and among communities.",
    link: "/programs",
  },
  {
    number: "SDG 16",
    title: "Peace, Justice and Strong Institutions",
    description:
      "Our advocacy work and protection services promote peaceful, inclusive societies and access to justice for all.",
    link: "/advocacy",
  },
  {
    number: "SDG 17",
    title: "Partnerships for the Goals",
    description:
      "We strengthen partnerships with communities, organizations, and stakeholders to achieve sustainable development.",
    link: "/programs",
  },
];

export default function Impact() {
  return (
    <section className="impact">
      <div className="impact__container">
        <h2 className="impact__heading">Our Impact</h2>
        <div className="impact__grid">
          {sdgs.map((goal, index) => (
            <div key={index} className="impact__card">
              <a href={goal.link} className="impact__link">
                <h3 className="impact__number">{goal.number}</h3>
                <h4 className="impact__title">{goal.title}</h4>
                <p className="impact__description">{goal.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
