import React from "react";
import "./Projects.scss";
import ProjectsList from "./ProjectsList.js";
import arrow from "assets/images/icons/Arrow.png";

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <div className="Projects__Title">Some of my projects</div>
      <div className="Projects__List">
        {ProjectsList.map(
          (
            project // map each project and generate the divs with custom classes for odd and even projects, so they will display on the right side or in the left side accordingly
          ) => (
            <div className={`Project ${project.id % 2 === 0 ? "Even" : "Odd"}`}>
              <img
                src={project.image}
                alt={project.name}
                className="Project__Image"
              />
              <div className="Project__Content">
                <div className="Project__Title">{project.name}</div>
                <p className="Project__Description">{project.description}</p>
                <div
                  className={
                    project.id % 2 === 0
                      ? "Buttons Buttons__Left"
                      : "Buttons Buttons__Right"
                  }
                >
                  {project.codeUrl ? (
                    <a
                      className="Project__Link"
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Open Code
                    </a>
                  ) : (
                    ""
                  )}

                  {project.liveUrl ? (
                    <a
                      className="Project__Link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Open Live
                    </a>
                  ) : (
                    ""
                  )}

                  <img
                    className={
                      project.id % 2 === 0
                        ? "Arrow Arrow__Left"
                        : "Arrow Arrow__Right"
                    }
                    width={20}
                    height={20}
                    src={arrow}
                    alt="arrow"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
