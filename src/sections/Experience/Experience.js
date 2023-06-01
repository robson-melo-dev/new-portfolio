import React from "react";
import "./Experience.scss";
import experiences from "./experiences";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="Experience" id="experience">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: false }}
      >
        <p className="Experience__Title">Work Experience</p>
      </motion.div>
      <div className="Experience__Container">
        {experiences.map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, y: "100px" }}
            whileInView={{ opacity: 1, y: "0" }}
            viewport={{ once: false }}
            transition={{ delay: 0.5 }}
          >
            <div className="Experience__Job">
              <div className="Experience__Spheres">
                <div className="Experience__Sphere-Red" />
                <div className="Experience__Sphere-Yellow" />
                <div className="Experience__Sphere-Green" />
              </div>
              <div className="Experience__WorkTitle">{experience.title}</div>
              <img
                className="Experience__WorkImg"
                src={experience.image}
                alt={experience.alt}
              />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="Experience__BlueLight" />
    </div>
  );
};

export default Experience;
