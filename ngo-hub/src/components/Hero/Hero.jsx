import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Hero.scss";

import heroBg1 from "../../assets/images/hero-bg1.jpg";
import heroBg2 from "../../assets/images/hero-bg2.jpg";
import heroBg3 from "../../assets/images/hero-bg3.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
  };

  const slides = [
    {
      image: heroBg1,
      title: "Empowering Communities with Resilience and Hope",
      text: "A Nigerian-based nonprofit focused on healthcare, education, livelihood, and advocacy.",
    },
    {
      image: heroBg2,
      title: "Healthcare Initiatives",
      text: "Providing essential healthcare services to underserved communities.",
    },
    {
      image: heroBg3,
      title: "Education & Advocacy",
      text: "Empowering children and families through inclusive education.",
    },
  ];

  return (
    <section className="hero">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero__slide">
            <div
              className="hero__bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero__overlay">
                <div className="hero__content">
                  <h1>{slide.title}</h1>
                  <p>{slide.text}</p>

                  <div className="hero__buttons">
                    <Link to="/donate" className="btn btn-primary">
                      Support Our Mission
                    </Link>
                    <Link to="/programs" className="btn btn-secondary">
                      Explore Our Work
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}