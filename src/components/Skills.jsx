import React from 'react';
import { Code, Server, Database, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Lenguajes',
    icon: <Code size={24} className="highlight" />,
    skills: ['Java', 'Python', 'C#', 'SQL']
  },
  {
    title: 'Frameworks y Librerías',
    icon: <Server size={24} className="highlight" />,
    skills: ['Spring', 'Spring Boot', 'Angular', 'Struts', 'Hibernate', 'React']
  },
  {
    title: 'Infraestructura y Mensajería',
    icon: <Settings size={24} className="highlight" />,
    skills: ['Nginx (Proxy Reverso)', 'F5 BIG-IP', 'RabbitMQ']
  },
  {
    title: 'Bases de Datos',
    icon: <Database size={24} className="highlight" />,
    skills: ['Oracle SQL (PL/SQL)', 'MySQL', 'MongoDB']
  }
];

const Skills = () => {
  return (
    <section id="habilidades" className="container" style={{ padding: '6rem 2rem' }}>
      <h2 className="section-title">
        <span className="highlight">02.</span> Habilidades Técnicas
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="glass-card" style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              {cat.icon}
              <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>{cat.title}</h3>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {cat.skills.map((skill, i) => (
                <span key={i} style={{ 
                  background: 'rgba(0, 255, 204, 0.1)', 
                  color: 'var(--accent-color)', 
                  padding: '0.4rem 0.8rem', 
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  fontWeight: '500',
                  border: '1px solid rgba(0, 255, 204, 0.2)'
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
