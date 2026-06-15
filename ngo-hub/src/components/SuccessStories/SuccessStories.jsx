// src/components/SuccessStories/SuccessStories.jsx
import React from "react";
import "./SuccessStories.scss";

// Example stories data
const stories = [
  {
    title: "Empowering Youths in Jos",
    description:
      "CCAPAD de-radicalised and empowered youths in Jos, providing skills and opportunities for sustainable livelihoods.",
    image: "/src/assets/images/story1.jpg", // store your image here
    link: "/stories/empowering-youths",
  },
  {
    title: "Training Vulnerable Persons",
    description:
      "60 vulnerable persons in Plateau State received training and starter packs to establish businesses.",
    image: "/src/assets/images/story2.jpg",
    link: "/stories/training-vulnerable",
  },
  {
    title: "Bridging Religious Differences",
    description:
      "CCAPAD organized workshops to promote peaceful coexistence among diverse communities.",
    image: "/src/assets/images/story3.jpg",
    link: "/stories/bridging-differences",
  },
];

export default function SuccessStories() {
  return (
    <section className="success">
      <h2 className="success__heading">Success Stories</h2>
      <p className="success__intro">
        Discover how our interventions have transformed lives and communities.
      </p>
      <div className="success__grid">
        {stories.map((story, index) => (
          <div
            key={index}
            className="success__card"
            onClick={() => (window.location.href = story.link)}
          >
            <div className="success__image">
              <img src={story.image} alt={story.title} />
            </div>
            <div className="success__content">
              <h3 className="success__title">{story.title}</h3>
              <p className="success__description">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
