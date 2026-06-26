import React from 'react';

const Hero = () => {
  return (
    <section className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '4rem' }}>
      <div className="animate-fade-in" style={{ maxWidth: '800px' }}>
        <p style={{ color: 'var(--text-secondary)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          Presentando a
        </p>
        
        <h1 className="noir-title" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: '1.1', marginBottom: '1rem', color: 'var(--text-primary)', textShadow: '0 0 20px rgba(255,255,255,0.2)' }}>
          Walter Gabriel Romero
        </h1>
        
        <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: '300', fontStyle: 'italic', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Desarrollador Java Full Stack
        </h2>
        
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem auto', lineHeight: '2' }}>
          Especialista en la creación de aplicaciones corporativas robustas y arquitecturas elegantes. 
          Forjando código entre las sombras del backend y la luz del frontend.
        </p>

        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:walter.gabriel.romero@gmail.com" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            Contacto
          </a>
          <a href="https://linkedin.com/in/walter-gabriel-romero" target="_blank" rel="noreferrer" style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
            LinkedIn
          </a>
          <span style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            San Miguel, ARG
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
