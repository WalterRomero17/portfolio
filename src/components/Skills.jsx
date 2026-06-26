import React from 'react';

const skillCategories = [
  {
    title: 'Lenguajes',
    skills: 'Java • Python • C# • SQL'
  },
  {
    title: 'Frameworks',
    skills: 'Spring • Spring Boot • Angular • Struts • Hibernate • React'
  },
  {
    title: 'Infraestructura',
    skills: 'Nginx • F5 BIG-IP • RabbitMQ'
  },
  {
    title: 'Bases de Datos',
    skills: 'Oracle SQL • MySQL • MongoDB'
  }
];

const Skills = () => {
  return (
    <section id="habilidades" className="container" style={{ padding: '4rem 0' }}>
      <h2 className="section-title noir-title">
        Habilidades
      </h2>
      
      <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        {skillCategories.map((cat, idx) => (
          <div key={idx} style={{ marginBottom: '3rem' }} className="animate-fade-in delay-2">
            <h3 className="noir-title" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              {cat.title}
            </h3>
            <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem', letterSpacing: '0.1em' }}>
              {cat.skills}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
