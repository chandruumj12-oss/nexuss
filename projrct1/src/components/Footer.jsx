import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-top">
        <div className="footer-contact">
          <div className="footer-icon-box">
            <i className="fas fa-envelope"></i>
            <div>
              <span>Have questions?</span>
              <p>Let's connect and discuss your learning goals.</p>
            </div>
          </div>
          <a href="mailto:contact@yupro.com" className="btn btn-outline-white">Contact Trainer</a>
        </div>
        
        <div className="footer-social">
          <div className="footer-icon-box">
            <i className="fab fa-linkedin"></i>
            <div>
              <span>Follow on LinkedIn</span>
              <p>Stay updated with latest tips and engineering insights.</p>
            </div>
          </div>
          <div className="social-circle-links">
            <a href="https://linkedin.com/in/muralitharan" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="mailto:contact@yupro.com"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; 2024 A.MURALITHARAN DCE., All Rights Reserved.</p>
          <p>Built with Passion for Civil Engineering Education</p>
        </div>
      </div>
      
      <a href="#contact" className="floating-contact">
        <i className="fas fa-envelope"></i>
      </a>
    </footer>
  );
};

export default Footer;
