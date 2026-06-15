import { Link } from "react-router-dom";

export default function Volunteer() {
  return (
    <section className="section">
      <h1>Volunteer</h1>
      <p>Join us in making a difference. Volunteer your time and skills to support our mission.</p>
      <Link to="/contact" className="btn btn-secondary">Sign Up</Link>
    </section>
  );
}
