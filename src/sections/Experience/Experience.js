import React from "react";
import "./Experience.scss";
import experiences from "./experiences";

const Experience = () => {
  return (
    <div className="Experience" id="experience">
      <p className="Experience__Title">Work Experience</p>
      <div className="Experience__Container">
        {experiences.map((experience) => (
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
        ))}
      </div>
      <div className="Experience__BlueLight" />
    </div>
  );
};

export default Experience;
