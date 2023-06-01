import "./Hero.scss";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const titles = [" Jedi", " Ninja", " Sorcerer", " Developer"];
  return (
    <div className="Hero">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
      >
        <div className="Hero__Presentation">
          <span className="Hero__Greetings">Hi!</span>
          <span className="Hero__Name">I am Robson Melo,</span>
          <span className="Hero__Profession">
            Frontend
            <Typewriter
              words={titles}
              loop={2}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: false }}
        transition={{ delay: 1 }}
      >
        <div className="Skills">
          <div className="Skills__Header">
            <div className="Skills__Spheres">
              <div className="Skills__Sphere-Red" />
              <div className="Skills__Sphere-Yellow" />
              <div className="Skills__Sphere-Green" />
            </div>
            <div className="Skills__Title">robsonwebdev.com</div>
          </div>
          <code className="Skills__Code">
            <span className="Skills__Class">Skills&nbsp;</span>
            {"{"}
            <p>
              <span className="Skills__Property">Profession: </span>
              Frontend Developer;
            </p>
            <p>
              <span className="Skills__Property">Technologies: </span>
              JavaScript, TypeScript, React, NextJS, Sass, CSS, BEM, Tailwind,
              GraphQL;
            </p>
            {"}"}
          </code>
          <code className="Skills__Code">
            <span className="Skills__Class">Work&nbsp;</span>
            {"{"}
            <p>
              <span className="Skills__Property">CurrentJob: </span>
              Remote Frontend Contractor in the US;
            </p>
            <p>
              <span className="Skills__Property">AboutMe: </span>I am a
              self-taught Frontend Developer, with just over a year of
              professional experience in this area, that is my true passion;
            </p>
            {"}"}
          </code>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
