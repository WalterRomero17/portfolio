import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <>
      <ParticlesBackground />
      
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      
      <footer className="brutalist-card accent-yellow" style={{ textAlign: 'center', padding: '2rem', borderTop: '4px solid var(--border-color)', marginTop: '6rem', margin: '0 2rem 2rem 2rem', boxShadow: '8px 8px 0px var(--border-color)' }}>
        <p style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '1.2rem' }}>© {new Date().getFullYear()} Walter Gabriel Romero.</p>
        <p>HECHO CON BRUTALISMO DIGITAL.</p>
      </footer>
    </>
  );
}

export default App;
