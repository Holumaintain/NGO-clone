import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Programs from "../pages/Programs";
import Volunteer from "../pages/Volunteer";
import Donate from "../pages/Donate";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Founder from "../pages/Founder";
import Blog from "../pages/Blog";
import Campaign from "../pages/Campaign";
import Leadership from "../pages/Leadership";
import Newsletter from "../pages/Newsletter";
import NotFound from "../pages/NotFound";

// Program sub-pages
import Healthcare from "../pages/Healthcare";
import Education from "../pages/Education";
import Advocacy from "../pages/Advocacy";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/founder" element={<Founder />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/campaign" element={<Campaign />} />
      <Route path="/leadership" element={<Leadership />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/volunteer" element={<Volunteer />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/newsletter" element={<Newsletter />} />

      {/* Program Pages */}
      <Route path="/programs/healthcare" element={<Healthcare />} />
      <Route path="/programs/education" element={<Education />} />
      <Route path="/programs/advocacy" element={<Advocacy />} />

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
