import React from 'react';

const educations = [
  {
    degree: 'Tecnicatura Universitaria en Informática',
    status: 'EN CURSO',
    institution: 'Universidad Nacional de General Sarmiento (UNGS)',
    location: 'Buenos Aires',
    period: '2019 – Presente'
  },
  {
    degree: 'Licenciatura en Biotecnología',
    status: 'INCOMPLETA',
    institution: 'Universidad Nacional de General San Martín (UNSAM)',
    location: 'Buenos Aires',
    period: '2010 – 2019'
  }
];

const Education = () => {
  return (
    <section id="educacion" className="pulp-border" style={{ marginTop: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem', borderBottom: '6px double var(--ink-black)', paddingBottom: '1rem' }}>
        <h2 className="pulp-title" style={{ fontSize: '3.5rem', margin: 0, letterSpacing: '0.05em' }}>
          ANTECEDENTES ACADÉMICOS
        </h2>
        <p style={{ fontFamily: 'Oswald', fontSize: '1.2rem', fontWeight: 'bold' }}>
          LA PREPARACIÓN DE UNA MENTE MAESTRA
        </p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {educations.map((edu, idx) => (
          <div key={idx} style={{ 
            border: '2px dashed var(--ink-black)', 
            padding: '1.5rem', 
            background: 'var(--bg-paper)'
          }}>
            <h3 className="pulp-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--pulp-red)' }}>
              {edu.degree}
            </h3>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '1rem' }}>
              {edu.institution}
            </p>
            
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="pulp-tag" style={{ background: edu.status === 'EN CURSO' ? 'var(--pulp-blue)' : 'var(--ink-black)' }}>
                {edu.status}
              </span>
              <span className="pulp-tag" style={{ background: 'var(--pulp-yellow)', color: 'var(--ink-black)' }}>
                {edu.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
