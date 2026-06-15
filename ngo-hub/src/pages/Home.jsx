import Hero from "../components/Hero/Hero";
import Impact from "../components/Impact/Impact";
import Mission from "../components/Mission/Mission";
import Campaign from "./Campaign";
import Programs from "../components/Programs/Programs";
import DonationCTA from "../components/DonationCTA/DonationCTA";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import VolunteerCTA from "../components/VolunteerCTA/VolunteerCTA";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Footer from "../components/Footer/Footer";

import "./Home.scss";

export default function Home() {
  return (
    <div className="home">

      <section className="home__hero">
        <Hero />
      </section>

      <section className="home__section home__section--tight">
        <Impact />
      </section>

      <section className="home__section home__section--tight">
        <Mission />
      </section>

      <section className="home__section home__section--tight">
        <Campaign />
      </section>

      <section className="home__section home__section--tight">
        <Programs />
      </section>

      <section className="home__section home__section--tight">
        <DonationCTA />
      </section>

      <section className="home__section home__section--tight">
        <SuccessStories />
      </section>

      <section className="home__section home__section--tight">
        <VolunteerCTA />
      </section>

      {/* Replaced Contact with GetInTouch */}
      <section className="home__section home__section--tight">
        <GetInTouch />
      </section>

      <section className="home__footer">
        <Footer />
      </section>

    </div>
  );
}