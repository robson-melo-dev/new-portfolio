import React from "react";
import { motion } from "framer-motion";
import "./Contact.scss";
import github from "assets/images/icons/Github-96.png";
import linkedin from "assets/images/icons/Linkedin-96.png";
import youtube from "assets/images/icons/Youtube-96.png";
import instagram from "assets/images/icons/Instagram-96.png";

const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
      >
        <p className="Contact__Hi">You can find me on this platforms!</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
      >
        <div className="Contact__Socials">
          <a
            className="Contact__Social-Link"
            href="https://www.linkedin.com/in/robsonthedev/"
          >
            <img
              className="Contact__Social-Icon"
              src={linkedin}
              alt="LinkedIn"
            />
          </a>
          <a
            className="Contact__Social-Link"
            href="https://github.com/robson-melo-dev"
          >
            <img className="Contact__Social-Icon" src={github} alt="GitHub" />
          </a>
          <a
            className="Contact__Social-Link"
            href="https://www.instagram.com/progsemfronteiras/"
          >
            <img
              className="Contact__Social-Icon"
              src={instagram}
              alt="Instagram"
            />
          </a>
          <a
            className="Contact__Social-Link"
            href="https://www.youtube.com/channel/UCog_5fNwmJn2l9zs7f2RPfQ"
          >
            <img className="Contact__Social-Icon" src={youtube} alt="YouTube" />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
      >
        <p className="Contact__Proposal">
          Do You have a project in mind? Let's build it together!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
      >
        <p className="Contact__Email">contato@robsonwebdev.com</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ delay: 0.5 }}
      >
        <p className="Contact__Copyright">
          2023 - Robson Melo de Souza - All rights reserved
        </p>
      </motion.div>
      <div className="Contact__BlueLight" />
    </div>
  );
};

export default Contact;
