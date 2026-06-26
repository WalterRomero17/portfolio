import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '4rem' }}>
      <div className="animate-fade-in" style={{ maxWidth: '800px' }}>
        <h2 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Hola, mi nombre es
        </h2>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: '1.1', marginBottom: '1rem', color: '#fff' }}>
          Walter Gabriel Romero.
        </h1>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1.1', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
          Desarrollador Java Full Stack.
        </h1>
        
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
          Con más de seis años de experiencia en el diseño, desarrollo y mantenimiento de aplicaciones robustas y microservicios. 
          Experto en el ecosistema Java y Spring, comprometido con la excelencia técnica y el crecimiento en proyectos de alto impacto.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="mailto:walter.gabriel.romero@gmail.com" className="glass-card" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
            <Mail size={20} className="highlight" />
            <span>Contáctame</span>
          </a>
          <a href="https://linkedin.com/in/walter-gabriel-romero" target="_blank" rel="noreferrer" className="glass-card" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
            <Linkedin size={20} className="highlight" />
            <span>LinkedIn</span>
          </a>
          <div className="glass-card" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
            <MapPin size={20} className="highlight" />
            <span>San Miguel, Argentina</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
