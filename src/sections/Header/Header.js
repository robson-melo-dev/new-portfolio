import React from "react";
import "./Header.scss";
import github from "assets/images/icons/gitHub.png";
import linkedin from "assets/images/icons/LinkedIn.png";
import youtube from "assets/images/icons/YouTube.png";
import instagram from "assets/images/icons/Instagram.png";

const Header = () => {
  return (
    <nav className="Header">
      <div className="Header__Links">
        <a className="Header__Link" href="#experience">
          Experience
        </a>
        <a className="Header__Link" href="#projects">
          Projects
        </a>
        <a className="Header__Link" href="#contact">
          Contact
        </a>
      </div>
      <div className="Header__Socials">
        <a
          className="Header__Social-link"
          href="https://www.linkedin.com/in/robson-the-dev/"
        >
          <img className="Header__Social-ico" src={linkedin} alt="LinkedIn" />
        </a>
        <a
          className="Header__Social-link"
          href="https://www.linkedin.com/in/robson-the-dev/"
        >
          <img className="Header__Social-ico" src={github} alt="GitHub" />
        </a>
        <a
          className="Header__Social-link"
          href="https://www.linkedin.com/in/robson-the-dev/"
        >
          <img className="Header__Social-ico" src={instagram} alt="Instagram" />
        </a>
        <a
          className="Header__Social-Link"
          href="https://www.linkedin.com/in/robson-the-dev/"
        >
          <img className="Header__Social-ico" src={youtube} alt="YouTube" />
        </a>
      </div>
      <div className="Header__BlueLightCircle" />
    </nav>
  );
};

export default Header;
