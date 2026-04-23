import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const offerings = [
  "Commodity product offerings for schools",
  "SEPDS pricing for 2026–2027",
  "Processor Link planning support",
  "Menu inspiration using fully cooked turkey products",
  "Student activity sheet for K–5",
  "Product versatility storytelling",
];

const processorLinkFeatures = [
  {
    title: "Calculator Results",
    text: "Displays streamlined calculator results and helps communicate new school year diversions.",
  },
  {
    title: "District Planning",
    text: "Provides an interactive solution for school districts to facilitate demand planning.",
  },
  {
    title: "Utilization Tracking",
    text: "Supports districts with utilization and tracking of commodity drawdowns.",
  },
];

const menuIdeas = [
  {
    title: "Salsa Suiza Turkey Vampiros",
    description: "A bold, student-friendly serving idea featured in the opening spread.",
  },
  {
    title: "Cheesy Turkey & Broccoli Casserole",
    description: "Comfort-forward inspiration that showcases turkey in hot entrée applications.",
  },
  {
    title: "Apple & Cranberry Turkey Salad Wrap",
    description: "A handheld format that adds freshness and flexibility to school menus.",
  },
  {
    title: "Chimichurri Turkey Salad",
    description: "Thick sliced turkey breast paired with roasted chimichurri chickpea croutons, pepitas and juicy tomatoes.",
  },
  {
    title: "BBQ-Glazed Thigh Roast Sandwich",
    description: "Shredded thigh roast with BBQ sauce, crunchy pickles and red onions on toasted whole-wheat bun.",
  },
];

const trustPoints = [
  "Nationwide network built on high standards and trusted partnerships",
  "Support for schools through thoughtfully managed delivery and production",
  "Proudly American Humane Certified™",
  "Facilities and headquarters footprint highlighted across multiple states",
  "Partner references shown for SNA Patron, American Humane Certified and ACDA",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <div className="page">
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow">2026–2027 School Year</div>
            <h1>Butterball’s Commodity Turkey Program</h1>
            <p className="lead">
              A simple landing page example inspired by the attached commodity kit, redesigned as a modern scrolling webpage with subtle animation.
            </p>
            <div className="button-row">
              <a href="#overview" className="button primary">Explore the Program</a>
              <a href="#resources" className="button secondary">View Resources</a>
            </div>
          </motion.div>

          <motion.div
            className="hero-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>What this demo shows</h2>
            <ul>
              {offerings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section id="overview" className="section light-blue">
        <div className="container two-column">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Program overview</p>
            <h2>Helping Schools Make the Most of Commodity Turkey</h2>
            <p>
              Butterball’s Commodity Processing Program is designed to help schools maximize entitlement dollars while serving nutritious, student-approved meals.
            </p>
            <p>
              This section takes the print content and turns it into a cleaner, mobile-friendly web introduction.
            </p>
          </motion.div>

          <motion.div
            className="card-grid"
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="info-card">
              <h3>SEPDS Pricing for 2026–2027</h3>
              <p>Detailed breakdown of commodity value, processing costs and net case pricing.</p>
            </div>
            <div className="info-card">
              <h3>Commodity Product Offerings</h3>
              <p>A digital overview of delicious and versatile products offered to schools.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section pale-yellow">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Planning tools</p>
            <h2>Support for District Planning with Processor Link</h2>
            <p className="center-text max-width">
              Your guide to commodity planning, diversion communication and utilization tracking.
            </p>
          </motion.div>

          <div className="three-column cards-top-space">
            {processorLinkFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="info-card tall"
                variants={fadeUp}
                initial="hidden"
                whileInView="whileInView"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="icon-circle">{index + 1}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="resources">
        <div className="container two-column">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Menu inspiration</p>
            <h2>Create More Meals Students Love</h2>
            <p>
              The print piece uses rich food photography and handwritten notes. On the web, that can become animated cards that reveal ideas as the user scrolls.
            </p>

            <div className="stack-list">
              {menuIdeas.map((idea, index) => (
                <motion.div
                  key={idea.title}
                  className="list-card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="whileInView"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <div className="number-badge">{index + 1}</div>
                  <div>
                    <h3>{idea.title}</h3>
                    <p>{idea.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="info-card feature-panel">
              <h3>One Product. Three Ways.</h3>
              <p>
                A section inspired by the medallions visual, showing how one product can be used in multiple menu applications.
              </p>
            </div>

            <div className="info-card feature-panel second-panel">
              <h3>Student Activity Sheet</h3>
              <p>
                A simple downloadable resource block for a printable K–5 activity sheet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container two-column">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label gold">Trust and operations</p>
            <h2>Care and Quality, Coast to Coast</h2>
            <p>
              This section reuses the final spread’s themes around operational reach, certification and credibility.
            </p>

            <div className="stack-list compact">
              {trustPoints.map((point) => (
                <div key={point} className="dark-card">
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="dark-panel">
              <h3>American Humane Certified™</h3>
              <p>
                Animal care is shown as central to the business and backed by third-party oversight.
              </p>
            </div>
            <div className="dark-panel second-panel">
              <h3>Facilities and Headquarters</h3>
              <p>
                In a real build, the map could become an interactive location module or hover-based experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
