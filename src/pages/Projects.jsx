import React from "react";
import "../styles/Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter"; // ✅ Add this
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const Projects = () => {
  const projectData = [
    {
      title: "E-loading website",
      description:
        "An AI-based logistics web app to connect shippers and transporters using empty truck space. Includes live tracking, dynamic pricing, and route optimization.",
      img: project1,
      preview: "#",
      github: "#",
    },
    {
      title: "React Weather App",
      description:
        "Modern React app that fetches live weather from OpenWeatherMap API. Built with dynamic backgrounds, geolocation, and clean UI.",
      img: project2,
      preview: "#",
      github: "#",
    },
    {
      title: "Personal Portfolio",
      description:
        "Responsive developer portfolio with smooth navigation, animations, and modern glass UI design — built using React & Vite.",
      img: project3,
      preview: "#",
      github: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title"> <span>Projects</span></h2>

      {/* ✨ Typing Animated Intro Line */}
      <p className="projects-intro">
        <Typewriter
          words={[
            "Each project reflects my creativity and code precision.",
            "Crafted with React, CSS animations, and love ❤️.",
            "Scroll down to explore my proudest work!"
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={60}
          deleteSpeed={40}
          delaySpeed={1800}
        />
      </p>

      {/* Project Cards */}
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-image">
              <img src={project.img} alt={project.title} />
              <div className="card-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="card-buttons">
                  <a href={project.preview} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Preview
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
