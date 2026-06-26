import React from 'react';

const Hero = () => {
  return (
    <section style={{ borderBottom: '8px solid var(--ink-black)', marginBottom: '4rem', paddingBottom: '2rem', paddingTop: '1rem', position: 'relative', overflow: 'hidden' }}>
      
      {/* Price Badge */}
      <div className="price-badge">
        10<br/><span style={{fontSize:'1rem'}}>CENTS</span>
      </div>

      <div className="container" style={{ textAlign: 'center' }}>
        
        <p className="pulp-title" style={{ color: 'var(--pulp-red)', fontSize: 'clamp(1rem, 3vw, 1.5rem)', margin: '1rem 0 0 0', letterSpacing: '0.1em' }}>
          ¡LA EDICIÓN MÁS ESPERADA DEL AÑO!
        </p>

        <h1 className="pulp-title offset-text" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', margin: '-1rem 0 -1.5rem 0', color: 'var(--ink-black)', position: 'relative', zIndex: 2 }}>
          WALTER
        </h1>
        <h1 className="pulp-title offset-text" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', margin: 0, color: 'var(--ink-black)', position: 'relative', zIndex: 2 }}>
          ROMERO
        </h1>
        
        <div style={{ background: 'var(--pulp-red)', padding: '1rem', margin: '2rem auto', border: '4px solid var(--ink-black)', maxWidth: '800px', transform: 'rotate(-2deg)', boxShadow: '6px 6px 0 var(--pulp-yellow)' }}>
          <h2 className="pulp-title" style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: '#fff', margin: 0 }}>
            ¡THRILLING TALES OF FULL STACK DEVELOPMENT!
          </h2>
        </div>
        
        <p className="drop-cap" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '3rem auto', textAlign: 'left', fontWeight: 'bold' }}>
          En lo profundo del ecosistema Java, donde los microservicios se esconden en las sombras de los servidores y el frontend clama por luz, un hombre se levanta. 
          Con más de seis años forjando aplicaciones robustas y arquitecturas impenetrables, él es el maestro del backend y el domador de interfaces.
        </p>

        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem', fontFamily: 'Oswald', fontSize: '1.2rem' }}>
          <a href="mailto:walter.gabriel.romero@gmail.com" style={{ background: 'var(--pulp-yellow)', padding: '0.5rem 1.5rem', color: 'var(--ink-black)', border: '3px solid var(--ink-black)', textDecoration: 'none' }}>
            ¡CONTÁCTALO AHORA!
          </a>
          <a href="https://linkedin.com/in/walter-gabriel-romero" target="_blank" rel="noreferrer" style={{ background: 'var(--pulp-blue)', padding: '0.5rem 1.5rem', color: '#fff', border: '3px solid var(--ink-black)', textDecoration: 'none' }}>
            VER ARCHIVO CONFIDENCIAL (LINKEDIN)
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
