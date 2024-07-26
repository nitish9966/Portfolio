import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PROJECTS } from "../constants";
import { IoLogoGithub } from 'react-icons/io';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">Projects</h2>
      </div>
      <div className="w-full max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-col items-center justify-between mb-12 md:flex-row md:items-start md:space-x-4">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <Slide easing="ease" className="slide-container">
                {project.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="each-slide flex justify-center items-center">
                    <img src={image} alt={project.title} className="rounded-lg shadow-lg w-full h-auto object-cover max-h-96" />
                  </div>
                ))}
              </Slide>
            </div>
            <div className="hidden md:block w-0.5 bg-gray-400 h-24 mx-4"></div>
            <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0">
              <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-zinc-300">{project.title}</h3>
              <a href={project.github} className="text-2xl text-white mb-2" aria-label="GitHub">
                <IoLogoGithub />
              </a>
              <p className="text-neutral-400 mb-4">{project.description}</p>
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
