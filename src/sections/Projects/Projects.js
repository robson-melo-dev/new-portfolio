import React from "react";
import "./Projects.scss";
import ProjectsList from "./ProjectsList.js";

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Some of my projects</h1>
      <div className="Projects__List">
        {ProjectsList.map(
          (
            project // map each project and generate the divs with custom classes for odd and even projects, so they will display on the right side or in the left side accordingly
          ) => (
            <div
              className={project.id % 2 == 0 ? "Project__Even" : "Project__Odd"}
            >
              <img src={project.image} alt={project.name} />
              <div className="Project__Content">
                <h2>{project.name}</h2>
                <p className="Project__Description">{project.description}</p>
                <div className="Project__Buttons">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>See Project --&gt;</button>
                  </a>
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
