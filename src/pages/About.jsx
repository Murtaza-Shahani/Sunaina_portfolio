import React from "react";
import "../Styles/About.css";
import profilePic from "../assets/pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <div className="about-card">
          <img src={profilePic} alt="Profile" className="profile-pic" />

          <div className="about-text">
   <h2> About Me</h2>
   <p>
  Hello! I'm <strong>Sunena Talreja</strong>, a dedicated Computer Science graduate with a deep interest in full-stack web development. My core specialization lies in the <strong>MERN Stack</strong> — MongoDB, Express.js, React.js, and Node.js.
</p>
<p>
  I recently completed a frontend development internship at <strong>Perfket Solution</strong>, where I worked on real-time React.js applications and strengthened my skills in building clean, responsive user interfaces.
</p>

<p>
  I’m passionate about turning ideas into user-friendly, real-world applications and constantly seek to learn, grow, and contribute to meaningful projects.
</p>


            <h3>Tech Stack</h3>
            <div className="icon-grid">
              <FontAwesomeIcon icon={faReact} title="React" />
              <FontAwesomeIcon icon={faJs} title="JavaScript" />
              <FontAwesomeIcon icon={faHtml5} title="HTML5" />
              <FontAwesomeIcon icon={faCss3Alt} title="CSS3" />
              <FontAwesomeIcon icon={faNodeJs} title="Node.js" />
              <FontAwesomeIcon icon={faDatabase} title="MongoDB" />
              <FontAwesomeIcon icon={faGitAlt} title="Git" />
            </div>
          </div>
        </div>
      </div>
     

    </section>
  );
};

export default About;
