import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <>
      <div className="bg-wrapper">
        <img src="/brutalist-bg.png" alt="Brutalist Architecture Background" />
      </div>
      <div className="bg-overlay"></div>
      
      <ParticlesBackground />
      
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Education />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-color)', marginTop: '4rem', backdropFilter: 'blur(10px)' }}>
        <p>© {new Date().getFullYear()} Walter Gabriel Romero. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
