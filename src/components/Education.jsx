import React from 'react';
import { BookOpen, GraduationCap, Code } from 'lucide-react';

const educations = [
  {
    degree: 'Tecnicatura Universitaria en Informática',
    status: 'En curso',
    institution: 'Universidad Nacional de General Sarmiento (UNGS)',
    location: 'Buenos Aires, Argentina',
    period: '2019 – Presente',
    icon: <Code size={24} />
  },
  {
    degree: 'Licenciatura en Biotecnología',
    status: 'Incompleta',
    institution: 'Universidad Nacional de General San Martín (UNSAM)',
    location: 'Buenos Aires, Argentina',
    period: '2010 – 2019',
    icon: <GraduationCap size={24} />
  }
];

const Education = () => {
  return (
    <section id="educacion" className="container" style={{ padding: '6rem 2rem' }}>
      <h2 className="section-title">
        <span className="highlight">03.</span> Formación Académica
      </h2>
      
      <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
        {educations.map((edu, idx) => (
          <div key={idx} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ 
              background: 'rgba(0, 255, 204, 0.1)', 
              padding: '1rem', 
              borderRadius: '50%', 
              color: 'var(--accent-color)',
              flexShrink: 0
            }}>
              <BookOpen size={28} />
            </div>
            
            <div style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.2rem' }}>
                  {edu.degree}
                </h3>
                <div style={{ color: 'var(--accent-color)', fontFamily: 'monospace', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                  {edu.period}
                </div>
              </div>
              
              <h4 style={{ color: 'var(--text-secondary)', fontWeight: '400', fontSize: '1rem', marginBottom: '0.5rem' }}>
                {edu.institution}
              </h4>
              
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
                <span style={{ 
                  background: 'var(--bg-color)', 
                  padding: '0.2rem 0.6rem', 
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)'
                }}>
                  {edu.status}
                </span>
                <span style={{ 
                  background: 'var(--bg-color)', 
                  padding: '0.2rem 0.6rem', 
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)'
                }}>
                  {edu.location}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
