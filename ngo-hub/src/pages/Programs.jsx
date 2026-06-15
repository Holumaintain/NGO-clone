import { Link } from "react-router-dom";

export default function Programs() {
  return (
    <section className="section">
      <h1>Our Programs</h1>
      <p>Explore our initiatives in healthcare, education, livelihood, and advocacy.</p>
      <div className="programs__cards">
        <Link to="/programs/healthcare" className="card">
          <h3>Healthcare</h3>
          <p>Essential health services for communities.</p>
        </Link>
        <Link to="/programs/education" className="card">
          <h3>Education</h3>
          <p>Empowering children with quality education.</p>
        </Link>
        <Link to="/programs/advocacy" className="card">
          <h3>Advocacy</h3>
          <p>Inclusive policies for vulnerable groups.</p>
        </Link>
      </div>
    </section>
  );
}
