import "./Hero.scss";
import React from "react";

const about = `<span className="Skills__Object">.AboutMe</span> {
    <span className="Skills__Property">Profession:</span> Frontend Developer; 
    <span className="Skills__Property">Technologies:</span> JavaScript,TypeScript, 
    React, NextJS, Sass, CSS, BEM, Tailwind, GraphQL; 
}`;

const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__Presentation">
        <span className="Hero__Greetings">Hi!</span>
        <span className="Hero__Name">I am Robson Melo,</span>
        <span className="Hero__Profession">frontend developer.</span>
      </div>
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
            &nbsp;&nbsp;
            <span className="Skills__Property">Profession: </span>
            Frontend Developer;
          </p>
          <p>
            &nbsp;&nbsp;
            <span className="Skills__Property">Technologies: </span>
            JavaScript, TypeScript, React, NextJS,
            <br />
            &nbsp;&nbsp;Sass, CSS, BEM, Tailwind, GraphQL;
          </p>
          {"}"}
        </code>
        <code className="Skills__Code">
          <span className="Skills__Class">Work&nbsp;</span>
          {"{"}
          <p>
            &nbsp;&nbsp;
            <span className="Skills__Property">CurrentJob: </span>
            Remote Frontend Contractor in the US;
          </p>
          <p>
            &nbsp;&nbsp;
            <span className="Skills__Property">AboutMe: </span>I am a
            self-taught Frontend Developer,
            <br />
            &nbsp;&nbsp;with just over a year of professional experience in this
            field, <br />
            &nbsp;&nbsp;that is my true passion;
          </p>
          {"}"}
        </code>
      </div>
    </div>
  );
};

export default Hero;
