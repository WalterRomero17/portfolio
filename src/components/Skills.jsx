import React from 'react';

const skillCategories = [
  {
    title: 'LENGUAJES LETALES',
    skills: ['Java', 'Python', 'C#', 'SQL'],
    color: 'var(--pulp-red)'
  },
  {
    title: 'FRAMEWORKS INVENCIBLES',
    skills: ['Spring', 'Spring Boot', 'Angular', 'Struts', 'Hibernate', 'React'],
    color: 'var(--pulp-yellow)'
  },
  {
    title: 'DEFENSAS DE INFRAESTRUCTURA',
    skills: ['Nginx', 'F5 BIG-IP', 'RabbitMQ'],
    color: 'var(--pulp-blue)'
  },
  {
    title: 'BÓVEDAS DE DATOS',
    skills: ['Oracle SQL', 'MySQL', 'MongoDB'],
    color: 'var(--bg-paper)'
  }
];

const Skills = () => {
  return (
    <section id="habilidades" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
      
      <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '1rem' }}>
        <h2 className="pulp-title offset-text" style={{ fontSize: '4rem' }}>
          ¡HERRAMIENTAS DEL OFICIO!
        </h2>
      </div>
      
      {skillCategories.map((cat, idx) => (
        <div key={idx} style={{ 
          border: '4px solid var(--ink-black)', 
          background: cat.color,
          color: cat.color === 'var(--bg-paper)' || cat.color === 'var(--pulp-yellow)' ? 'var(--ink-black)' : '#fff',
          padding: '1.5rem',
          boxShadow: '4px 4px 0 var(--ink-black)',
          transform: `rotate(${idx % 2 === 0 ? '-1deg' : '2deg'})`
        }}>
          <h3 className="pulp-title" style={{ fontSize: '1.8rem', borderBottom: '3px solid', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
            {cat.title}
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {cat.skills.map((skill, i) => (
              <span key={i} className="pulp-title" style={{ 
                background: 'var(--ink-black)', 
                color: 'var(--bg-paper)', 
                padding: '0.2rem 0.5rem', 
                fontSize: '1.2rem' 
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
      
    </section>
  );
};

export default Skills;
