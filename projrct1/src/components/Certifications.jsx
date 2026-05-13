import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    { title: 'Chartered Engineer (CE)', org: 'Institution of Engineers India', icon: 'fa-award' },
    { title: 'PMP Certification', org: 'Project Management Institute', icon: 'fa-project-diagram' },
    { title: 'AutoCAD Professional', org: 'Autodesk Certified', icon: 'fa-certificate' },
    { title: 'LEED Green Associate', org: 'U.S. Green Building Council', icon: 'fa-leaf' }
  ];

  return (
    <section className="section certifications bg-gray">
      <div className="container">
        <h2 className="section-title">Certifications & <span style={{color: 'var(--primary-red)'}}>Achievements</span></h2>
        <p className="expertise-subtitle">Industry-recognized credentials and professional milestones.</p>
        <div className="certs-grid">
          {certs.map((cert, index) => (
            <div key={index} className="cert-card">
              <div className="cert-icon-wrapper">
                <i className={`fas ${cert.icon}`}></i>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-org">{cert.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
