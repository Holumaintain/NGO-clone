import React from "react";
import "./Leadership.scss";
import Footer from "../components/Footer/Footer";

export default function Leadership() {
  return (
    <div className="leadership-page">
      {/* Banner */}
      <section className="leadership-banner">
        <h2>Our Leadership Team</h2>
        <p>
          Experienced professionals dedicated to transforming vulnerable communities.
        </p>
      </section>

      {/* Intro */}
      <section className="leadership-intro">
        <h3>Meet Our Leaders</h3>
        <p>
          Our diverse leadership team brings together decades of experience in healthcare,
          community development, and humanitarian work.
        </p>
      </section>

      {/* Leader Cards */}
      <section className="leaders-grid">
        {/* Temitope */}
        <div className="leader-card">
          <div className="leader-icon">TO</div>
          <h4>Temitope Olanrewaju</h4>
          <p className="role">Founder & Chairperson</p>
          <p className="bio">
            A passionate health professional with extensive experience in maternal health,
            reproductive health, and community development.
          </p>
          <div className="expertise-box checklist">
            <h5>Areas of Expertise</h5>
            <ul>
              <li>Public Health & Community Medicine</li>
              <li>Maternal & Reproductive Health</li>
              <li>Community Development</li>
            </ul>
          </div>
        </div>

        {/* Bunmi */}
        <div className="leader-card">
          <div className="leader-icon">BY</div>
          <h4>Bunmi Yusuf</h4>
          <p className="role">Trustee - Health Programs</p>
          <p className="bio">
            A mental health specialist with deep expertise in nursing and midwifery.
          </p>
          <div className="expertise-box checklist">
            <h5>Areas of Expertise</h5>
            <ul>
              <li>Mental Health Nursing & Advisory</li>
              <li>Midwifery & Maternal Care</li>
              <li>Community Health</li>
            </ul>
          </div>
        </div>

        {/* Oluwaseyi */}
        <div className="leader-card">
          <div className="leader-icon">OO</div>
          <h4>Oluwaseyi Oyewoga</h4>
          <p className="role">Trustee - Maternal Health Programs</p>
          <p className="bio">
            An experienced midwife and nutrition specialist who has worked extensively with
            international organizations.
          </p>
          <div className="expertise-box checklist">
            <h5>Areas of Expertise</h5>
            <ul>
              <li>Midwifery & Safe Childbirth</li>
              <li>Nutrition & Child Health</li>
              <li>Reproductive Health</li>
            </ul>
          </div>
        </div>

        {/* Ruth */}
        <div className="leader-card">
          <div className="leader-icon">RA</div>
          <h4>Ruth Ayomide Olanrewaju</h4>
          <p className="role">Trustee - Welfare & Operations</p>
          <p className="bio">
            A skilled business management professional who ensures ShareAid operates efficiently
            and sustainably.
          </p>
          <div className="expertise-box checklist">
            <h5>Areas of Expertise</h5>
            <ul>
              <li>Business Management & Strategy</li>
              <li>Operations & Process Optimization</li>
              <li>Financial Management & Planning</li>
              <li>Organizational Development</li>
              <li>Stakeholder Relations</li>
            </ul>
          </div>
        </div>

        {/* Abiola */}
        <div className="leader-card">
          <div className="leader-icon">AA</div>
          <h4>Abiola Adefiranye</h4>
          <p className="role">IT Manager & Digital Systems Specialist</p>
          <p className="bio">
            A seasoned web administrator and front-end developer with extensive experience in
            digital transformation and system optimization.
          </p>
          <div className="expertise-box checklist">
            <h5>Areas of Expertise</h5>
            <ul>
              <li>Web Development & Administration</li>
              <li>Digital Process Automation</li>
              <li>Website Performance Optimization</li>
              <li>Data Protection & Cybersecurity</li>
              <li>System Maintenance & Integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="governance">
        <h3>Our Governance Structure</h3>
        <p className="governance-text">
          ShareAid operates with transparency, accountability, and strong governance principles.
        </p>
        <div className="governance-grid">
          <div className="gov-card">
            <span className="icon">👑</span>
            <h4>Board of Trustees</h4>
            <p className="gov-desc">
              Provides strategic oversight, ensures accountability, and guides organizational direction.
            </p>
          </div>
          <div className="gov-card">
            <span className="icon">⚖️</span>
            <h4>Legal Compliance</h4>
            <p className="gov-desc">
              Ensures all operations meet Nigerian NGO regulations and lawful standards.
            </p>
          </div>
          <div className="gov-card">
            <span className="icon">🎯</span>
            <h4>Program Excellence</h4>
            <p className="gov-desc">
              Maintains high standards across all programs with continuous monitoring and evaluation.
            </p>
          </div>
          <div className="gov-card">
            <span className="icon">💰</span>
            <h4>Financial Stewardship</h4>
            <p className="gov-desc">
              Transparent financial management with regular audits and donor reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
