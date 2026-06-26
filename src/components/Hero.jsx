import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '6rem' }}>
      <div className="animate-pop-in" style={{ maxWidth: '900px', width: '100%' }}>
        <div className="brutalist-card accent-yellow" style={{ marginBottom: '2rem', display: 'inline-block', padding: '0.5rem 1rem' }}>
          <h2 style={{ fontSize: '1.5rem', margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            HOLA, MI NOMBRE ES
          </h2>
        </div>
        
        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', lineHeight: '0.9', marginBottom: '1rem', color: 'var(--text-primary)', wordBreak: 'break-word', textShadow: '6px 6px 0px var(--accent-cyan)' }}>
          WALTER GABRIEL ROMERO.
        </h1>
        
        <div className="brutalist-card accent-red" style={{ display: 'inline-block', marginTop: '1rem', marginBottom: '3rem', transform: 'rotate(1deg)' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: '1', margin: 0 }}>
            DESARROLLADOR JAVA FULL STACK.
          </h1>
        </div>
        
        <div className="brutalist-card" style={{ marginBottom: '3rem', maxWidth: '700px', transform: 'rotate(-1deg)' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
            Con más de seis años de experiencia en el diseño, desarrollo y mantenimiento de aplicaciones robustas y microservicios. 
            Experto en el ecosistema Java y Spring, comprometido con la excelencia técnica y el crecimiento en proyectos de alto impacto.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <a href="mailto:walter.gabriel.romero@gmail.com" className="brutalist-card accent-cyan" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', fontWeight: 'bold', padding: '1rem 2rem' }}>
            <Mail size={28} />
            <span>CONTÁCTAME</span>
          </a>
          <a href="https://linkedin.com/in/walter-gabriel-romero" target="_blank" rel="noreferrer" className="brutalist-card accent-yellow" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', fontWeight: 'bold', padding: '1rem 2rem' }}>
            <Linkedin size={28} />
            <span>LINKEDIN</span>
          </a>
          <div className="brutalist-card" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.2rem', fontWeight: 'bold', padding: '1rem 2rem' }}>
            <MapPin size={28} />
            <span>SAN MIGUEL, ARG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
