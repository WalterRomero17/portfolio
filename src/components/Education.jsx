import React from 'react';

const educations = [
  {
    degree: 'Tecnicatura Universitaria en Informática',
    status: 'En curso',
    institution: 'Universidad Nacional de General Sarmiento (UNGS)',
    location: 'Buenos Aires',
    period: '2019 – Presente'
  },
  {
    degree: 'Licenciatura en Biotecnología',
    status: 'Incompleta',
    institution: 'Universidad Nacional de General San Martín (UNSAM)',
    location: 'Buenos Aires',
    period: '2010 – 2019'
  }
];

const Education = () => {
  return (
    <section id="educacion" className="container" style={{ padding: '8rem 0' }}>
      <h2 className="section-title noir-title">
        Formación
      </h2>
      
      <div style={{ marginTop: '4rem' }}>
        {educations.map((edu, idx) => (
          <div key={idx} className="noir-item animate-fade-in delay-3" style={{ textAlign: 'center' }}>
            <h3 className="noir-title" style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {edu.degree}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1rem' }}>
              {edu.institution}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <span>{edu.period}</span>
              <span>•</span>
              <span>{edu.status}</span>
              <span>•</span>
              <span>{edu.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
