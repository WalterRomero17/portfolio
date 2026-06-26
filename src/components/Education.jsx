import React from 'react';
import { BookOpen, GraduationCap, Code } from 'lucide-react';

const educations = [
  {
    degree: 'Tecnicatura Universitaria en Informática',
    status: 'EN CURSO',
    institution: 'Universidad Nacional de General Sarmiento (UNGS)',
    location: 'Buenos Aires, Argentina',
    period: '2019 – Presente',
    icon: <Code size={40} color="var(--border-color)" />
  },
  {
    degree: 'Licenciatura en Biotecnología',
    status: 'INCOMPLETA',
    institution: 'Universidad Nacional de General San Martín (UNSAM)',
    location: 'Buenos Aires, Argentina',
    period: '2010 – 2019',
    icon: <GraduationCap size={40} color="var(--border-color)" />
  }
];

const Education = () => {
  return (
    <section id="educacion" className="container" style={{ padding: '6rem 2rem' }}>
      <h2 className="section-title">
        EDUCACIÓN
      </h2>
      
      <div style={{ display: 'grid', gap: '3rem', marginTop: '3rem' }}>
        {educations.map((edu, idx) => (
          <div key={idx} className="brutalist-card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ 
              background: 'var(--accent-cyan)', 
              padding: '1.5rem',
              border: '4px solid var(--border-color)',
              boxShadow: '4px 4px 0px var(--border-color)',
              flexShrink: 0
            }}>
              {edu.icon}
            </div>
            
            <div style={{ width: '100%', flex: '1 1 300px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', margin: 0, wordBreak: 'break-word' }}>
                  {edu.degree}
                </h3>
                <div className="brutalist-tag" style={{ background: 'var(--accent-yellow)' }}>
                  {edu.period}
                </div>
              </div>
              
              <h4 style={{ fontWeight: '800', fontSize: '1.2rem', marginBottom: '1.5rem', background: 'var(--text-primary)', color: '#fff', display: 'inline-block', padding: '0.2rem 0.8rem' }}>
                {edu.institution}
              </h4>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <span className="brutalist-tag" style={{ background: edu.status === 'EN CURSO' ? 'var(--accent-cyan)' : '#fff' }}>
                  {edu.status}
                </span>
                <span className="brutalist-tag">
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
