import React from 'react';
import { Code, Server, Database, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'LENGUAJES',
    icon: <Code size={32} />,
    color: 'accent-yellow',
    skills: ['Java', 'Python', 'C#', 'SQL']
  },
  {
    title: 'FRAMEWORKS',
    icon: <Server size={32} />,
    color: 'accent-cyan',
    skills: ['Spring', 'Spring Boot', 'Angular', 'Struts', 'Hibernate', 'React']
  },
  {
    title: 'INFRAESTRUCTURA',
    icon: <Settings size={32} />,
    color: 'accent-red',
    skills: ['Nginx (Proxy Reverso)', 'F5 BIG-IP', 'RabbitMQ']
  },
  {
    title: 'BASES DE DATOS',
    icon: <Database size={32} />,
    color: '',
    skills: ['Oracle SQL (PL/SQL)', 'MySQL', 'MongoDB']
  }
];

const Skills = () => {
  return (
    <section id="habilidades" className="container" style={{ padding: '6rem 2rem' }}>
      <h2 className="section-title">
        HABILIDADES
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
        {skillCategories.map((cat, idx) => (
          <div key={idx} className={`brutalist-card ${cat.color}`} style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '4px solid var(--border-color)', paddingBottom: '1rem' }}>
              {cat.icon}
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{cat.title}</h3>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {cat.skills.map((skill, i) => (
                <span key={i} className="brutalist-tag" style={{ background: cat.color ? '#fff' : 'var(--accent-yellow)', color: '#111' }}>
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
