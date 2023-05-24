import React from "react";
import "./Contact.scss";
import github from "assets/images/icons/Github-96.png";
import linkedin from "assets/images/icons/Linkedin-96.png";
import youtube from "assets/images/icons/Youtube-96.png";
import instagram from "assets/images/icons/Instagram-96.png";

const Contact = () => {
  return (
    <div className="Contact">
      <p className="Contact__Hi">You can find me on this platforms!</p>
      <div className="Contact__Socials">
        <a
          className="Contact__Social-link"
          href="https://www.linkedin.com/in/robson-the-dev/"
        >
          <img className="Contact__Social-ico" src={linkedin} alt="LinkedIn" />
        </a>
        <a
          className="Contact__Social-link"
          href="https://www.linkedin.com/in/robson-the-dev/"
        >
          <img className="Contact__Social-ico" src={github} alt="GitHub" />
        </a>
        <a
          className="Contact__Social-link"
          href="https://www.linkedin.com/in/robson-the-dev/"
        >
          <img
            className="Contact__Social-ico"
            src={instagram}
            alt="Instagram"
          />
        </a>
        <a
          className="Contact__Social-Link"
          href="https://www.linkedin.com/in/robson-the-dev/"
        >
          <img className="Contact__Social-ico" src={youtube} alt="YouTube" />
        </a>
      </div>
      <p className="Contact__Proposal">
        Do You have a project in mind? Let's build it together!
      </p>
      <p className="Contact__Email">contato@robsonwebdev.com</p>
      <p className="Contact__Copyright">
        2023 - Robson Melo de Souza - All rights reserved
      </p>
    </div>
  );
};

export default Contact;
