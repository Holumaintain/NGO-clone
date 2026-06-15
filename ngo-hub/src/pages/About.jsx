import React, { useEffect } from "react";
import "./About.scss";
import Footer from "../components/Footer/Footer"; // ✅ same logic as Newsletter

const About = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about">

      {/* First Section - Background Image */}
      <section className="hero-section fade-in">
        <div className="hero-overlay">
          <h1>OUR STORY</h1>
          <h2>About ShareAid FOUNDATION</h2>
          <p>
            Building bridges, healing communities, and fostering peace across Nigeria since 2010.
          </p>
        </div>
      </section>

      {/* Second Section - Organizational Overview */}
      <section className="content-section side-by-side fade-in">
        <div className="text-block slide-left">
          <h2>Organizational Overview and Legal Framework</h2>
          <p>
            ShareAid FOUNDATION is a civil society organization focused on conflict transformation, 
            sustainable peacebuilding, and human development in Nigeria’s conflict-affected regions. 
            Established in Jos, Plateau State, it was conceived in 2004 and formally institutionalized in 2010. 
            The organization is legally registered with the Corporate Affairs Commission (CAC/IT NO 97004) 
            and the Economic and Financial Crimes Commission (EFCC) since 2017, ensuring compliance with national frameworks. 
            It also registered with the American Data and Universal Numbering System in 2018 (DUNS ID: 561295835), 
            and with the European Union Aid PADOR system in 2020 (ID Number: NG–2020–DSQ–2708430988).
          </p>
        </div>
        <div className="image-container slide-right">
          <img src="/src/assets/images/overview.jpg" alt="Organizational Overview" />
        </div>
      </section>

      {/* Third Section - Institutional Infrastructure */}
      <section className="content-section side-by-side fade-in">
        <div className="text-block slide-left">
          <h2>Institutional Infrastructure and Geographic Footprint</h2>
          <p>
            ShareAid FOUNDATION’s permanent headquarters is located at ShareAid House, Number 93/2, Williams Street, 
            Off Maternity Clinic Junction, Jos, Plateau State, Nigeria. It serves as the operational center for program coordination, 
            strategic planning, and stakeholder engagement. The organization also has a decentralized structure with community presence 
            in Kaduna, Bauchi, Nasarawa, and Adamawa States, enhancing conflict sensitivity and responsiveness across northern Nigeria.
          </p>
        </div>
        <div className="image-container slide-right">
          <img src="/src/assets/images/infrastructure.jpg" alt="Institutional Infrastructure" />
        </div>
      </section>

      {/* Fourth Section - Human Resources */}
      <section className="content-section fade-in">
        <div className="text-block slide-left">
          <h2>Human Resources and Organizational Capacity</h2>
          <p>
            In alignment with international best practices in peacebuilding and development programming, 
            ShareAid FOUNDATION maintains a strong commitment to interfaith dialogue, gender mainstreaming, 
            and inclusive representation. The organization employs 17 permanent staff members and 6 ad-hoc personnel, 
            complemented by an extensive network of community volunteers mobilized from across northern Nigeria. 
            This human resource configuration reflects the organization’s understanding that sustainable peace requires 
            locally-owned solutions and the meaningful participation of diverse social actors.
          </p>
          <p>
            ShareAid FOUNDATION’s adherence to interfaith and gender balance principles demonstrates institutional recognition 
            that identity-based conflicts require transformative approaches that transcend traditional power structures 
            and promote social cohesion across religious and gender divides. By integrating diverse perspectives and experiences 
            into its organizational culture, ShareAid FOUNDATION enhances its legitimacy among conflict-affected communities 
            and strengthens its capacity to facilitate inclusive dialogue processes that address root causes of structural violence 
            and systemic marginalization.
          </p>
        </div>
        <div className="image-container slide-right">
          <img src="/src/assets/images/human-resources.jpg" alt="Human Resources" />
        </div>
      </section>

      {/* Fifth Section - Historical Context */}
      <section className="content-section fade-in">
        <div className="text-block slide-left">
          <h2>Historical Context and Conflict Dynamics</h2>
          <p>
            The conceptual foundation of ShareAid FOUNDATION emerged in 2004 during an acute phase of cyclical violence 
            that devastated Jos North Local Government Area and extended across multiple localities within Plateau State. 
            This period witnessed catastrophic humanitarian consequences including mass casualties, large-scale property destruction, 
            internal displacement, and the spatial segregation of communities along ethno-religious fault lines. 
            The conflict resulted in fractured social fabric, eroded intergroup trust, and the emergence of parallel governance structures 
            that institutionalized division and perpetuated mutual grievances.
          </p>
          <p>
            The protracted nature of these conflicts, characterized by recurring episodes of violence and failed peace agreements, 
            revealed the limitations of conventional security-centric approaches and underscored the necessity for comprehensive peacebuilding 
            interventions that address underlying structural inequalities, historical injustices, and competing narratives of victimhood. 
            Recognizing that similar conflict dynamics and drivers existed across northern Nigeria—including resource-based conflicts, 
            political instrumentalization of identity, and weak institutional capacity for conflict management—ShareAid FOUNDATION was established 
            to provide transformative, community-driven solutions.
          </p>
        </div>
        <div className="image-container slide-right">
          <img src="/src/assets/images/history.jpg" alt="Historical Context" />
        </div>
      </section>

      {/* ✅ Shared Footer */}
      <Footer />
    </div>
  );
};

export default About;
