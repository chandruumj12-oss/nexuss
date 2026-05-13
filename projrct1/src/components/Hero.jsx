import React from 'react';
import './Hero.css';
import trainerImg from '../assets/images/trainer.png';

const Hero = () => {
  return (
    <header className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badges">
            <span className="badge">Ex-L&T</span>
            <span className="badge">Ex-AECOM</span>
            <span className="badge">IIT Madras Alumni</span>
          </div>
          <h1 className="hero-name">A.MURALITHARAN <span className="degree">DCE.,</span></h1>
          <h2 className="hero-title">Senior Civil Engineering Instructor</h2>
          
          <div className="hero-stats-mini">
            <div className="mini-stat">
              <i className="fas fa-users"></i>
              <div>
                <strong>32,500+</strong>
                <span>Students</span>
              </div>
            </div>
            <div className="mini-stat">
              <i className="fas fa-hard-hat"></i>
              <div>
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>
            </div>
            <div className="mini-stat">
              <i className="fas fa-book-open"></i>
              <div>
                <strong>42</strong>
                <span>Courses</span>
              </div>
            </div>
          </div>

          <p className="hero-bio">
            Bridging the gap between engineering theory and real-world construction practice. 
            With over 15 years in structural design, highway engineering, and project management, 
            I help aspiring civil engineers master the skills that top firms demand — 
            from AutoCAD and STAAD.Pro to site supervision and IS codes.
          </p>

          <div className="hero-actions">
            <a href="#courses" className="btn btn-primary">View Courses <i className="fas fa-chevron-right"></i></a>
            <a href="#contact" className="btn btn-outline">Contact Trainer</a>
            <div className="social-links">
              <a href="https://linkedin.com/in/muralitharan" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="mailto:contact@yupro.com"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="image-wrapper">
            <img src={trainerImg} alt="A. Muralitharan" className="trainer-image" />
            <div className="rating-badge">
              <i className="fas fa-star"></i> 4.8
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
