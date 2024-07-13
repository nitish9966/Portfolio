// src/components/Projects.jsx
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        {/* <p className="text-lg text-gray-700">List of Projects</p> */}
      </div>
      <div className="w-full max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Slide easing="ease" className="slide-container">
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="each-slide flex justify-center items-center">
                    <img src={image} alt={project.title} className="rounded-lg shadow-lg w-full h-auto max-w-sm object-cover" />
                  </div>
                ))}
              </Slide>
            </div>
            <div className="w-0.5 bg-gray-400 h-24 mx-4"></div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-200 rounded text-sm font-medium text-gray-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
