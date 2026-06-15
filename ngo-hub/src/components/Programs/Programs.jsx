// src/components/Programs/Programs.jsx
import React from "react";
import "./Programs.scss";
import { FaPeace, FaSeedling, FaUniversity, FaBalanceScale, FaUsers, FaShieldAlt } from "react-icons/fa";

const programs = [
  {
    number: "01",
    title: "Promote Peacebuilding",
    description:
      "To initiate, strengthen and promote peacebuilding and harmonious coexistence between all tribes and religious adherents.",
    icon: <FaPeace />,
    link: "/peacebuilding",
  },
  {
    number: "02",
    title: "Ignite Grassroots Development",
    description:
      "To stimulate sustainable community development initiatives from the grassroots.",
    icon: <FaSeedling />,
    link: "/development",
  },
  {
    number: "03",
    title: "Strengthen Local Institutions",
    description:
      "To provide supports, capacity and linkages for Community Development Associations and other local groups to collaborate with stakeholders.",
    icon: <FaUniversity />,
    link: "/institutions",
  },
  {
    number: "04",
    title: "Advance Rights & Governance",
    description:
      "To promote Good Governance, Social Justice, Economic Self-reliance and Gender issues.",
    icon: <FaBalanceScale />,
    link: "/governance",
  },
  {
    number: "05",
    title: "Protect Women & Youth",
    description:
      "To improve the lives of children, women and vulnerable youths through skills and material supports on health and civic education.",
    icon: <FaUsers />,
    link: "/protection",
  },
  {
    number: "06",
    title: "Respond to Emergencies",
    description:
      "To advocate for and respond to issues of emergencies, natural disasters and public distress.",
    icon: <FaShieldAlt />,
    link: "/emergencies",
  },
];

export default function Programs() {
  return (
    <section className="programs">
      <h2 className="programs__heading">Strategic Objectives</h2>
      <p className="programs__intro">
        What Drives Every CCAPAD Intervention — Seven core objectives that guide
        our mission to build peace, empower communities, and transform lives.
      </p>
      <div className="programs__grid">
        {programs.map((prog, index) => (
          <div
            key={index}
            className="programs__card"
            onClick={() => (window.location.href = prog.link)}
          >
            <div className="programs__icon">{prog.icon}</div>
            <div className="programs__number">{prog.number}</div>
            <h3 className="programs__title">{prog.title}</h3>
            <p className="programs__description">{prog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
