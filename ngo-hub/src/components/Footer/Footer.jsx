import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.scss";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  const location = useLocation();
  const isSpecialPage = location.pathname === "/contact" || location.pathname === "/newsletter";

  return (
    <footer className={`footer ${isSpecialPage ? "footer--special" : ""}`}>
      <div className="footer__container">

        {/* LOGO + VISION */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src={logo} alt="ShareAid Logo" />
            <h3>ShareAid Foundation</h3>
          </div>

          <p className="footer__vision">
            We envision communities where every person can live free from fear and insecurity.
          </p>
        </div>

        {/* COMPANY LINKS */}
        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/leadership">Leadership</a></li>
            <li><a href="/blog">Our Blog</a></li>
            <li><a href="/contact">Get In Touch</a></li>
          </ul>
        </div>

        {/* GET INVOLVED */}
        <div className="footer__social">
          <h4>Get Involved</h4>
          <ul>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/volunteer">Volunteer</a></li>
            <li><a href="/newsletter">Newsletter</a></li>
            <li><a href="/campaign">Campaign</a></li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer__contact">
          <h4>Contact Info</h4>
          <p>📍 Ocean Bay Estate, Orchid Lekki, Lagos State, Nigeria</p>
          <p>📞 <a href="tel:+2348130861504">+234 813 086 1504</a></p>
          <p>✉️ <a href="mailto:info@shareaid.org">info@shareaid.org</a></p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} ShareAid. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
