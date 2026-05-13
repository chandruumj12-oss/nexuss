import React from 'react';
import './StatsBar.css';

const StatsBar = () => {
  const stats = [
    { icon: 'fa-calendar-alt', value: '15+', label: 'Years Experience' },
    { icon: 'fa-users', value: '32,500+', label: 'Students Trained' },
    { icon: 'fa-graduation-cap', value: '42', label: 'Courses Completed' },
    { icon: 'fa-star', value: '4.8', label: 'Average Rating' }
  ];

  return (
    <section className="stats-bar">
      <div className="container stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <i className={`fas ${stat.icon}`}></i>
            <div className="stat-info">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
