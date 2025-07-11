import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaCrown, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <FaCrown className="crown-icon" />
            <span className="name">Radhika Suresh</span>
          </div>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/radhika-suresh-b66aba351" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/Radhikasuresh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:radhikas.fullstack@gmail.com" aria-label="Email">
              <FaEnvelope className="social-icon" size={20}/>
            </a>
             <a href="tel:+919940669842" aria-label="Phone" >
    <FaPhone className="social-icon" size={18}/>
  </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;