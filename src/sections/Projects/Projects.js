import React from "react";
import "./Projects.scss";
import { motion } from "framer-motion";
import ProjectsList from "./ProjectsList.js";
import arrow from "assets/images/icons/Arrow.png";

const Projects = () => {
  return (
    <div className="Projects" id="projects">
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: false }}
      >
        <div className="Projects__Title">Some of my projects</div>
      </motion.div>
      <div className="Projects__List">
        {ProjectsList.map(
          (
            project,
            index // map each project and generate the divs with custom classes for odd and even projects, so they will display on the right side or in the left side accordingly
          ) => (
            <motion.div
              initial={{
                opacity: 0,
                x: `${project.id % 2 === 0 ? "-100%" : "100%"}`,
              }}
              whileInView={{ opacity: 1, x: "0" }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
            >
              <div
                className={`Project ${project.id % 2 === 0 ? "Even" : "Odd"}`}
              >
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
            </motion.div>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
