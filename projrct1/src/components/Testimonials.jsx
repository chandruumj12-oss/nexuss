import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      text: '"Rajesh sir\'s AutoCAD course was the turning point in my career. The drawings I submitted in my interview were directly inspired by the exercises in this course. Got placed within 2 months."',
      name: 'Arjun Sharma',
      role: 'Site Engineer at L&T Construction',
      rating: 5
    },
    {
      text: '"The RCC design course is unmatched. Real IS code examples, actual load calculations, and practical detailing — this is what college never taught us. Highly recommend to every civil graduate."',
      name: 'Priya Nair',
      role: 'Structural Designer, Mumbai',
      rating: 5
    },
    {
      text: '"I cleared my GATE and then joined NHAI — both times, Rajesh sir\'s structured approach helped me understand concepts I had struggled with for years. The highway course is outstanding."',
      name: 'Mohammed Faizal',
      role: 'Highway Engineer, NHAI',
      rating: 5
    }
  ];

  return (
    <section className="section testimonials bg-gray">
      <div className="container">
        <h2 className="section-title">Student <span style={{color: 'var(--primary-red)'}}>Success Stories</span></h2>
        <p className="expertise-subtitle">Hear from engineers who built their careers with these courses.</p>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(t.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-user">
                <div className="user-avatar">
                  {t.name.charAt(0)}
                </div>
                <div className="user-info">
                  <h4 className="user-name">{t.name}</h4>
                  <p className="user-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
