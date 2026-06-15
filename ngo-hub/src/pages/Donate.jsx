import { Link } from "react-router-dom";

export default function Donate() {
  return (
    <section className="section">
      <h1>Donate</h1>
      <p>Your contributions help us empower communities with healthcare, education, and advocacy.</p>
      <Link to="/programs" className="btn btn-primary">See Programs</Link>
    </section>
  );
}
