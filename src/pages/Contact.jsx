import React from "react";
import "../styles/Contact.css";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">
        Open to freelance, collaborations, or a friendly hello.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Contact Number" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* Follow Us Section */}
      <div className="follow-us">
        <h3>Follow Us</h3>
        <div className="socials-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="icon linkedin"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="icon github"><FaGithub /></a>
          <a href="https://www.instagram.com/sunaina_talrejaa?igsh=MW9pbng1eG9lMG80cQ==" target="_blank" rel="noopener noreferrer" className="icon instagram"><FaInstagram /></a>
          <a href="https://www.facebook.com/sunaina.talreja.2025?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="icon facebook"><FaFacebook /></a>
          <a href="https://wa.me/923040821659" target="_blank" rel="noopener noreferrer" className="icon whatsapp"><FaWhatsapp /></a>
        </div>
        <p className="contact-details">
          <span>📞 0304-0821659</span> | <span>📧 sunainatalreja048@gmail.com</span>
        </p>
      </div>

      <footer>© {new Date().getFullYear()} All rights reserved.</footer>
    </div>
  );
};

export default Contact;
