import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserTie,
  FaBlog,
  FaTasks,
  FaEnvelope,
  FaDonate
} from "react-icons/fa";

import "./Navbar.scss";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="navbar__logo">
        <img src={logo} alt="ShareAid Foundation Logo" />
        <span>
          ShareAid <strong>FOUNDATION</strong>
        </span>
      </div>

      {/* LINKS */}
      <ul className="navbar__links">
        {isHome ? (
          <>
            <li>
              <Link to="/">
                <FaHome className="nav-icon" />
                Home
              </Link>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/founder">Founder</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/blog">Our Blog</Link></li>
            <li><Link to="/campaign">Current Campaign</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/volunteer">Volunteer</Link></li>
            <li>
              <Link to="/contact">
                <FaEnvelope className="nav-icon" />
                Contact
              </Link>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/blog">Our Blog</Link></li>
            <li><Link to="/leadership">Leadership</Link></li>
            <li><Link to="/newsletter">Newsletter</Link></li>
            <li>
              <Link to="/contact">
                <FaEnvelope className="nav-icon" />
                Contact
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* CTA Buttons */}
      {isHome ? (
        <Link to="/donate">
          <button className="navbar__cta">
            <FaDonate className="nav-icon" />
            Donate Now
          </button>
        </Link>
      ) : (
        <Link to="/" className="navbar__back-home">
          Back to Home
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
