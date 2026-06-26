import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <>
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        
        <div className="container" style={{ display: 'grid', gap: '4rem', paddingBottom: '6rem' }}>
          <Experience />
          <Skills />
          <Education />
        </div>
      </main>
      
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '4px solid var(--ink-black)', background: 'var(--pulp-yellow)' }}>
        <h2 className="pulp-title" style={{ fontSize: '1.5rem', margin: 0 }}>
          WALTER GABRIEL ROMERO © {new Date().getFullYear()}
        </h2>
        <p style={{ fontFamily: 'Oswald', textTransform: 'uppercase', fontWeight: 'bold' }}>
          IMPRESO EN LA WEB
        </p>
      </footer>
    </>
  );
}

export default App;
