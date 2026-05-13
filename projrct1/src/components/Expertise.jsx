import React from 'react';
import './Expertise.css';

const Expertise = () => {
  const skills = [
    { name: 'AutoCAD', icon: 'fa-pencil-ruler' },
    { name: 'STAAD.Pro', icon: 'fa-cube' },
    { name: 'Structural Design', icon: 'fa-project-diagram' },
    { name: 'RCC Design', icon: 'fa-building' },
    { name: 'Highway Engineering', icon: 'fa-road' },
    { name: 'IS Code Compliance', icon: 'fa-check-double' },
    { name: 'Revit BIM', icon: 'fa-layer-group' },
    { name: 'Project Management', icon: 'fa-tasks' },
    { name: 'Quantity Surveying', icon: 'fa-calculator' },
    { name: 'Soil Mechanics', icon: 'fa-mountain' },
    { name: 'Foundation Design', icon: 'fa-landmark' },
    { name: 'MS Project', icon: 'fa-chart-bar' }
  ];

  return (
    <section className="section expertise">
      <div className="container">
        <h2 className="section-title">Core <span style={{color: 'var(--primary-red)'}}>Expertise</span></h2>
        <p className="expertise-subtitle">Specialized skills built across 15 years of field and design experience.</p>
        <div className="expertise-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <i className={`fas ${skill.icon} skill-icon`}></i>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
