import React from 'react';
import './Courses.css';
import autocadImg from '../assets/images/course-autocad.png';
import rccImg from '../assets/images/course-rcc.png';
import highwayImg from '../assets/images/course-highway.png';

const Courses = () => {
  const courses = [
    {
      title: 'AutoCAD for Civil Engineers — Complete Masterclass',
      level: 'Beginner',
      duration: '28 hours',
      students: '11,400 students',
      rating: '4.9',
      image: autocadImg
    },
    {
      title: 'RCC Structural Design & IS Code Mastery',
      level: 'Intermediate',
      duration: '38 hours',
      students: '9,200 students',
      rating: '4.8',
      image: rccImg
    },
    {
      title: 'Highway & Road Design with IRC Standards',
      level: 'Advanced',
      duration: '32 hours',
      students: '6,800 students',
      rating: '4.9',
      image: highwayImg
    }
  ];

  return (
    <section className="section courses" id="courses">
      <div className="container">
        <div className="courses-header">
          <h2 className="section-title">Featured <span style={{color: 'var(--primary-red)'}}>Courses</span></h2>
          <a href="#courses" className="view-all">View all 42 courses <i className="fas fa-chevron-right"></i></a>
        </div>
        <p className="expertise-subtitle">Practical, site-ready learning paths for civil engineers.</p>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <div className="course-image-wrapper">
                <img src={course.image} alt={course.title} className="course-image" />
                <span className={`course-badge ${course.level.toLowerCase()}`}>{course.level}</span>
                <div className="play-btn">
                  <i className="fas fa-play"></i>
                </div>
              </div>
              <div className="course-info">
                <h3 className="course-title">{course.title}</h3>
                <div className="course-meta">
                  <span><i className="far fa-clock"></i> {course.duration}</span>
                  <span><i className="fas fa-users"></i> {course.students}</span>
                  <span><i className="fas fa-star" style={{color: '#ffc107'}}></i> {course.rating} average rating</span>
                </div>
                <button 
                  className="btn btn-primary enroll-btn" 
                  onClick={() => alert('Enrollment process will start soon! Thank you for your interest.')}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
