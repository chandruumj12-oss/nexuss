import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Expertise from './components/Expertise';
import Certifications from './components/Certifications';
import Courses from './components/Courses';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{ 
        backgroundColor: 'var(--bg-white)', 
        padding: '1rem 2rem', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid var(--border-color)',
        marginBottom: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <h1 style={{ color: 'var(--brand-red)', fontSize: '1.5rem', margin: 0 }}>YUPRO Nexus</h1>
      </header>

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <StatsBar />
            <Expertise />
            <Certifications />
            <Courses />
            <Testimonials />
          </>
        } />
        <Route path="/trainer" element={<div>Trainer Profile Page (Coming Soon)</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
