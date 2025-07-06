import React, { useState } from "react";
import "../styles/Home.css";
import pic2 from "../assets/pic.jpeg";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateClose, setAnimateClose] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(true);
    setAnimateClose(false);
  };

  const closeMenu = () => {
    setAnimateClose(true);
    setTimeout(() => {
      setMenuOpen(false);
    }, 400); // match with animation duration
  };

  return (
    <>
      <div className="top-bar">
        <div className="portfolio-logo">Portfolio.</div>
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="lg" color="rgb(0, 255, 247)" />
        </div>
      </div>

      {menuOpen && (
        <div className={`overlay-menu ${animateClose ? "exit" : ""}`}>
          <div className="close-icon" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
          <nav className="overlay-nav">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#Services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
        </div>
      )}

      <div className="social-icons">
        <a href="https://wa.me/923040821659"><FontAwesomeIcon icon={faWhatsapp} /></a>
        <a href="mailto:Sunainatalreja048@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} /></a>
        <a href="https://www.linkedin.com/in/sunena-talreja-20882a248/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/sunainaTalreja"><FontAwesomeIcon icon={faGithub} /></a>
      </div>

      <div className="home-section" id="home">
        <div className="home-left">
          <h1>Hi, I'm Sunena Talreja</h1>
          <h2 className="typed-text">
            <Typewriter
              words={["MERN Stack Developer", "Front-end Developer", "Backend Developer"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <p>I build responsive web apps using MongoDB, Express, React, and Node.js.</p>
          <a href="/sunena-talreja.pdf" className="btn" download>
            Download Resume
          </a>
        </div>

        <div className="home-right">
          <div className="image-box">
            <img src={pic2} alt="Sunaina Avatar" />
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;


