import React from "react";
import "../styles/Services.css";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaJs,
  FaCloudUploadAlt,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiDjango } from "react-icons/si";

const Services = () => {
  const services = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      description:
        "Building interactive UIs using React.js, Tailwind CSS, and responsive layouts.",
    },
    {
      icon: <FaNodeJs />,
      title: "Backend Development",
      description:
        "Creating RESTful APIs with Node.js and Express.js to handle business logic.",
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB Integration",
      description:
        "Using MongoDB for efficient, scalable NoSQL database solutions.",
    },
    {
      icon: <FaDatabase />,
      title: "SQL Databases",
      description:
        "Designing relational schemas and handling complex queries with MySQL/PostgreSQL.",
    },
    {
      icon: <FaJs />,
      title: "JavaScript Expertise",
      description:
        "Expert in ES6+, asynchronous JS, DOM manipulation, and API integration.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Deployment",
      description:
        "Deploying full-stack apps on platforms like Vercel, Netlify, and Render.",
    },
    {
      icon: <FaPython />,
      title: "Python Programming",
      description:
        "Automation scripts, data processing, and logic writing using Python.",
    },
    {
      icon: <SiDjango />,
      title: "Django Framework",
      description:
        "Secure and scalable web applications using Django and Django REST Framework.",
    },
  ];

  return (
    <div className="services-container">
      <h2 className="section-title">What I Offer</h2>
      <p className="section-subtitle">Professional full stack development services</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
