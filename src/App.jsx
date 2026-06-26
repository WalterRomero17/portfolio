import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <>
      {/* Film grain and spotlight overlays */}
      <div className="film-grain"></div>
      <div className="spotlight"></div>
      
      <ParticlesBackground />
      
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '4rem 2rem 2rem 2rem', position: 'relative', zIndex: 10 }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '0.1em' }}>
          W. G. ROMERO © {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}

export default App;
